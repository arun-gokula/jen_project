pipeline {
    agent any

    environment {
        IMAGE_NAME     = "hello-world-app"
        CONTAINER_NAME = "hello-world-container"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                bat "docker build -t %IMAGE_NAME% ."
            }
        }

        stage('Remove Old Container') {
            steps {
                bat "docker rm -f %CONTAINER_NAME% || exit 0"
            }
        }

        stage('Run Container') {
            steps {
                bat "docker run -d --name %CONTAINER_NAME% -p 80:80 %IMAGE_NAME%"
            }
        }

        stage('Verify') {
            steps {
                bat "docker ps --filter name=%CONTAINER_NAME%"
            }
        }
    }

    post {
        success {
            echo "Deployed! Visit http://localhost"
        }
        failure {
            echo "Pipeline failed. Check logs above."
        }
    }
}
