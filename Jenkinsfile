#!/usr/bin/env groovy
def version = 'UNKNOWN'

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

    stage('Environment') {
      steps {
        script {
          def commitHashShort = sh(returnStdout: true, script: 'git rev-parse --short HEAD')
          version = "${new Date().format('yyyyMMddHHmm')}-${commitHashShort}".trim()
        }
      }
    }

    stage('Docker') {
      agent {
        node {
          label 'docker'
        }
      }
      steps {
        script {
          withCredentials([usernamePassword(credentialsId: 'cesmarvin-github', passwordVariable: 'GITHUB_API_TOKEN', usernameVariable: 'GITHUB_ACCOUNT')]) {
            docker.withRegistry('', 'hub.docker.com-cesmarvin') {
              def siteUrl = env.BRANCH_NAME == 'staging' ? 'https://staging-website.scm-manager.org' : 'https://scm-manager.org'
              def image = docker.build("scmmanager/website:${version}", "--build-arg GITHUB_API_TOKEN=${GITHUB_API_TOKEN} --build-arg SITE_URL=${siteUrl} .")
              image.push()
            }
          }
        }
      }
    }

    stage('Deployment Staging') {
      when {
        branch 'staging'
      }
      agent {
        docker {
          image 'lachlanevenson/k8s-helm:v3.2.1'
          args  '--entrypoint=""'
        }
      }
      steps {
        withCredentials([file(credentialsId: 'helm-client-scm-manager', variable: 'KUBECONFIG')]) {
          sh "helm upgrade --install --values=deployment/staging.yml --set image.tag=${version} staging-website deployment/website"
        }
      }
    }

    stage('Deployment Production') {
      when {
        branch 'master'
      }
      agent {
        docker {
          image 'lachlanevenson/k8s-helm:v3.2.1'
          args  '--entrypoint=""'
        }
      }
      steps {
        withCredentials([file(credentialsId: 'helm-client-scm-manager', variable: 'KUBECONFIG')]) {
          sh "helm upgrade --install --set image.tag=${version} website deployment/website"
        }
      }
    }

    stage('Trigger API Build') {
      when {
        branch 'master'
      }
      steps {
        build job: 'scm-manager-github/plugin-center-api/master', wait: false
      }
    }
    
  }
}
