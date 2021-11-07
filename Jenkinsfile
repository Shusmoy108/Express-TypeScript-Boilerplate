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
     environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
                 echo 'hello world build'
            }
        }
        stage('Deliver') {
            steps {
                echo 'hello world'
                bat 'npm start'
                set /p choice= "Please Select one of the above options :" 
                echo '%choice%'

            }
        }

    }
}