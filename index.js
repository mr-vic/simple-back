import express from 'express'
import mongoose from 'mongoose'

const PORT = 5000;
const DB_URL = ``

const app = express()

app.use(express.json())

app.post('/', (req, res) => {
    //console.log(req.query)
    console.log(req.body)
    res.status(200).json('Server is working!')
})

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log('SERVER STARTDED ON PORT ' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()