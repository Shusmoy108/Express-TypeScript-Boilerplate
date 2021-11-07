pipeline {
    agent any
    
  tools {nodejs "nodejs"}
    // agent {
    //     docker {
      
    //   image 'node:lts-buster-slim'
    //   args '-p 3000:3000'
    // }
        // docker {
        //     image 'node:lts-buster-slim'
        //     args '-p 3000:3000'
        // }
    //}
    // environment {
    //     CI = 'true'
    // }
    //  environment {
    //     CI = 'true'
    // }
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
                 echo 'hello world build'
            }
        }
        stage('Test') {
            steps {
                echo 'hello world'
                bat 'npm start'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'

            }
        }

    }
}