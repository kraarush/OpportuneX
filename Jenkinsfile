pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch:'main', url: 'https://github.com/kraarush/OpportuneX.git'
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                script {
                    powershell 'docker-compose up -d'
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline executed successfully!'
        }
    }
}