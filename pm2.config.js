module.exports = {
    apps: [
        {
            name: 'cin-server',
            script: 'node_modules/next/dist/bin/next',
            args: 'start',
            cwd: '/var/www/cin-be',
            env: {
                NODE_ENV: 'production'
            }
        }
    ]
};
