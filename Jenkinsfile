pipeline {
    agent any

    tools {
        nodejs 'node20'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Cunhaisis/bookstore-devops.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Build') {
            steps {
                bat 'echo Build concluido com sucesso'
            }
        }
    }

    post {
        success {
            echo 'Pipeline executada com sucesso!'
        }
        failure {
            echo 'Pipeline falhou. Verifique os logs.'
        }
    }
}