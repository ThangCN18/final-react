const movieRoute = require("./movieRoute")
const userRoute = require('./userRoute')
const commentRoute = require('./commentRoute')

function route(app) {
    app.use("/movie", movieRoute)
    app.use("/user", userRoute)
    app.use("/comment", commentRoute)

}

module.exports = route