Pipeline {
    agent any

    tools{
        nodejs "NodeJSRCXD"
    }

    stages {
        stage('Git Checkout') {
            steps {
                git 'https://github.com/ghanigh/gestion_livres_backend'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage("Run Tests") {
            steps {
                bat 'npm test'
            }
        }
    }
}