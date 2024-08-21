require('dotenv').config()
const cookieParser = require("cookie-parser")
const express = require("express")

const app = express()
const PORT = process.env.PORT || 3001

// regular middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// cookie middleware
app.use(cookieParser())

const userRouter = require("./routes/userRoutes.js")
const postRouter = require("./routes/postRoutes.js")

app.use("/api", userRouter)
app.use("/api", postRouter)

app.get("/", (req, res) => {
    res.status(200).send("Hey what up")
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})