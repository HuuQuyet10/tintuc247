var envName = "development";
if(process.argv.includes("production")){
  envName = "production";
}
if(process.argv.includes("staging")){
  envName = "staging";
}


module.exports = {
  apps: [
    { 
      name: "R08-FE-"+envName.toUpperCase(),
      script: "npm",
      args:"start",
      instances: 1,
      autorestart: true,
      watch: false,
      env_production: {
        NODE_ENV: "production"
      },
      env_development: {
        NODE_ENV: "development"
      },
      env_staging: {
        NODE_ENV: "staging"
      },
  
    },
  ],
};