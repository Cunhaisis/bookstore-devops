pipeline {
    agent any

    tools {
        nodejs 'node20'
    }

    stages {
        stage('1 - Checkout Code') {
            steps {
                echo 'Clonando repositório...'
                git branch: 'main', url: 'https://github.com/Cunhaisis/bookstore-devops.git'
            }
        }

        stage('2 - Install Dependencies') {
            steps {
                echo 'Instalando dependências...'
                sh 'npm install'
            }
        }

        stage('3 - Run Tests') {
            steps {
                echo 'Executando testes...'
                sh 'npm test'
            }
        }

        stage('4 - Build Application') {
            steps {
                echo 'Realizando build da aplicação...'
                sh 'echo "Build concluído com sucesso"'
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