pipeline {
    agent any

    environment {
        WEB_HOST = 'leo@10.0.0.20'
        APP_DIR  = '/var/www/home'
    }

    stages {
        stage('Deploy') {
            steps {
                sh """
                    ssh ${WEB_HOST} '
                        set -e
                        cd ${APP_DIR}

                        echo "==> git pull"
                        git pull origin main
                    '
                """
            }
        }
    }

    post {
        success { echo "Deploy 成功" }
        failure { echo "Deploy 失敗" }
    }
}
