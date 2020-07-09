module.exports = {
  apps : [{
    name: 'shopping-app',
    script: '__sapper__/build',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],
};
