pipeline {
    agent {
        docker {
      label 'windows'
      image 'mcr.microsoft.com/powershell'
      args '-p 3000:3000'
    }
        // docker {
        //     image 'node:lts-buster-slim'
        //     args '-p 3000:3000'
        // }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

    }
}