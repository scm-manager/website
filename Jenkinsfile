#!groovy
node('docker') {

  def version = 'UNKNOWN'

  properties([
    // Keep only the last 10 build to preserve space
    buildDiscarder(logRotator(numToKeepStr: '10')),
    disableConcurrentBuilds()
  ])

  timeout(activity: true, time: 30, unit: 'MINUTES') {

    stage('Checkout') {
      checkout scm

      // TODO staging and prod use the same image and version scheme?
      def commitHashShort = sh(returnStdout: true, script: 'git rev-parse --short HEAD')
      version = "${new Date().format('yyyyMMddHHmm')}-${commitHashShort}".trim()
    }

    stage('Dependencies') { 
      withNode {
        sh "yarn install"
      }
    }

    stage('Collect Content') {      
      withNode {
        withCredentials([usernamePassword(credentialsId: 'cesmarvin-github', passwordVariable: 'GITHUB_API_TOKEN', usernameVariable: 'GITHUB_ACCOUNT')]) {
          sh "yarn run collect-content"
        }
      }
    }

    stage('Build') {
      def siteUrl = env.BRANCH_NAME == 'staging' ? 'https://staging-website.scm-manager.org' : 'https://scm-manager.org'
      withNode {
        withEnv(["SITE_URL=${siteUrl}"]) {
          sh "yarn build"
        }
      }
    }

    stage('Image') {
      def image = docker.build "scmmanager/website:${version}"
      docker.withRegistry('', 'hub.docker.com-cesmarvin') {
        image.push()
      }
    }

    if (env.BRANCH_NAME == 'staging') {

      stage('Staging Deployment') {
        withHelm {
          sh "helm upgrade --install --values=deployment/staging.yml --set image.tag=${version} staging-website deployment/website"
        }
      }

    } else if (env.BRANCH_NAME == 'master') {

      stage('Deployment') {
        withHelm {
          sh "helm upgrade --install --set image.tag=${version} website deployment/website"
        }
      }

      stage('Trigger API Build') {
        build job: 'scm-manager-github/plugin-center-api/master', wait: false
      }

    }

    // TODO only on master branch
    stage('Update Cache') {
      sh "tar cfz website.tar.gz public .cache"
      googleStorageUpload bucket: 'gs://scm-manager/cache', credentialsId: 'ces-operations-internal', pattern: 'website.tar.gz'
    }

  }

}

void withNode(Closure closure) {
  docker.image('scmmanager/node-build:12.16.3').inside {
    withEnv(["HOME=${env.WORKSPACE}"]) {
      closure.call()
    }
  }
}

void withHelm(Closure closure) {
  docker.image('lachlanevenson/k8s-helm:v3.2.1', '--entrypoint=""').inside {
    withCredentials([file(credentialsId: 'helm-client-scm-manager', variable: 'KUBECONFIG')]) {
      closure.call()
    }
  }
}
