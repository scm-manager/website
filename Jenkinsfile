#!groovy
pipeline {

  options {
    buildDiscarder(logRotator(numToKeepStr: '10'))
    disableConcurrentBuilds()
  }

  agent {
    node {
      label 'docker'
    }
  }

  stages {

    stage('Compute Version') {
      steps {
        script {
          version = computeVersion()
        }
      }
    }

    stage('Apply Cache') {
      steps {
        sh 'rm -rf public .cache website.tar.gz || true'
        googleStorageDownload bucketUri: 'gs://scm-manager/cache/website.tar.gz', credentialsId: 'ces-demo-instances', localDirectory: '.'
        sh 'tar xfz cache/website.tar.gz'
        sh 'rm -rf cache'
      }
    }

    stage('Build') {
      agent {
        docker {
          image 'scmmanager/node-build:14.16.1'
          label 'docker'
          args  "-v ${env.WORKSPACE}:/tmp/app -e HOME=/tmp/app"
          reuseNode true
        }
      }
      steps {
        sh "yarn install"
        withCredentials([usernamePassword(credentialsId: 'cesmarvin-github', passwordVariable: 'GITHUB_API_TOKEN', usernameVariable: 'GITHUB_ACCOUNT')]) {
          sh "yarn run collect-content"
        }
        withEnv(["SITE_URL=${siteUrl}"]) {
          // we have to ensure that the build uses the same path
          // on all build nodes to avoid broken gatsby caches.
          // The workspace is mounted to /tmp/app, see docker agent.
          sh "cd /tmp/app && yarn run build"
        }
      }
    }

    stage('Image') {
      steps {
        script {
          def image = docker.build "scmmanager/website:${version}", "--build-arg=SERVER_NAME=${serverName} ."
          docker.withRegistry('', 'cesmarvin-dockerhub-access-token') {
            image.push()
          }
        }
      }
    }

    stage('Staging Deployment') {
      when {
        branch 'staging'
      }
      agent {
        docker {
          image 'lachlanevenson/k8s-helm:v3.2.1'
          label 'docker'
          reuseNode true
          args '--entrypoint=""'
        }
      }
      steps {
        withCredentials([file(credentialsId: 'helm-client-scm-manager', variable: 'KUBECONFIG')]) {
          sh "helm upgrade --install --values=deployment/staging.yml --set image.tag=${version} staging-website deployment/website"
        }
      }
    }

    stage('Deployment') {
      when {
        branch 'master'
      }
      agent {
        docker {
          image 'lachlanevenson/k8s-helm:v3.2.1'
          label 'docker'
          reuseNode true
          args '--entrypoint=""'
        }
      }
      steps {
        withCredentials([file(credentialsId: 'helm-client-scm-manager', variable: 'KUBECONFIG')]) {
          sh "helm upgrade --install --set image.tag=${version} website deployment/website"
        }
      }
    }

    stage('Trigger Dependend Builds') {
      when {
        branch 'master'
      }
      steps {
        build job: 'scm-manager-github/plugin-center-api/master', wait: false
        build job: 'scm-manager-github/alerts/main', wait: false
      }
    }

    stage('Update Cache') {
      when {
        branch 'master'
      }
      steps {
        sh "tar cfz website.tar.gz public .cache"
        googleStorageUpload bucket: 'gs://scm-manager/cache', credentialsId: 'ces-operations-internal', pattern: 'website.tar.gz'
      }
    }

  }
}

String version

String getSiteUrl() {
  return "https://${serverName}"
}

String getServerName() {
  return env.BRANCH_NAME == 'staging' ? 'staging-website.scm-manager.org' : 'scm-manager.org'
}

String computeVersion() {
  def commitHashShort = sh(returnStdout: true, script: 'git rev-parse --short HEAD')
  return "${new Date().format('yyyyMMddHHmm')}-${commitHashShort}".trim()
}
