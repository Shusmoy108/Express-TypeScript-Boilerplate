pipeline {
    agent any
    
//   tools {nodejs "node"}
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
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }

    }
}