module.exports = {
  apps: [
    {
      name: 'server',
      script: 'node server.js',
      env: {
        NODE_ENV: 'production',
        PORT: process.env.PORT || 3000
      }
    },
    {
      name: 'bot',
      script: 'python main.py',
      interpreter: 'python',
      env: {
        PYTHONUNBUFFERED: '1'
      }
    }
  ]
};
