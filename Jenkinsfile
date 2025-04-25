pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch:'main' , url: 'https://github.com/kraarush/OpportuneX.git'
            }
        }

        stage('Inject Environment Variables') {
            steps {
                script {
                    // Inject frontend .env file
                    configFileProvider([configFile(fileId: 'frontend-env', variable: 'FRONTEND_ENV')]) {
                        sh 'echo "$FRONTEND_ENV" > ./Frontend/.env'
                    }

                    // Inject backend .env file
                    configFileProvider([configFile(fileId: 'backend-env', variable: 'BACKEND_ENV')]) {
                        sh 'echo "$BACKEND_ENV" > ./Backend/.env'
                    }
                }
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                script {
                    sh 'docker-compose up -d'
                }
            }
        }

        stage('Health Check') {
            steps {
                script {
                    sh "curl --silent --fail http://localhost:5173 || exit 1"
                    sh "curl --silent --fail http://localhost:3000 || exit 1"
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }

        success {
            echo 'Pipeline executed successfully!'
        }

        failure {
            echo 'Pipeline execution failed.'
        }
    }
}
