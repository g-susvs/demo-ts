import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3000


app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    return res.send('Hello world! TS')
})
app.get('/api', (req, res) => {
    return res.send('API - TS')
})

app.listen(port, () => console.log(`Server running in port ${port}`))

