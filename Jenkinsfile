pipeline {
    agent any

    environment {
        WEB_HOST      = 'leo@10.0.0.20'
        APP_DIR       = '/var/www/home'
        SLACK_WEBHOOK = 'https://hooks.slack.com/services/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'
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
        success {
            sh """
                curl -X POST -H 'Content-type: application/json' \
                    --data '{"text":"✅ [home] Deploy 成功\\nBranch: ${env.GIT_BRANCH}\\nBuild: ${env.BUILD_URL}"}' \
                    ${SLACK_WEBHOOK}
            """
        }
        failure {
            sh """
                curl -X POST -H 'Content-type: application/json' \
                    --data '{"text":"❌ [home] Deploy 失敗\\nBranch: ${env.GIT_BRANCH}\\nBuild: ${env.BUILD_URL}"}' \
                    ${SLACK_WEBHOOK}
            """
        }
    }
}
