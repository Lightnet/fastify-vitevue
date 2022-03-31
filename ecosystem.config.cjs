module.exports = {
  apps : [{
    name: 'fastifyvueapp',
    script : "./app.mjs",
    watch: [ 
        "src/server"
      //, "src/components"
      //, "views"
      , "app.mjs"
    ],
    // Delay between restart
    watch_delay: 1000,
    ignore_watch : [
        "node_modules"
      , "@app"
      , "others"
    ],
    env_production: {
      NODE_ENV: "production"
    },
    env_development: {
      NODE_ENV: "development"
    }
  }]
}
