import express, { Express } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import todoRoutes from './routes'
import {config as configDotenv} from 'dotenv'

const app: Express = express()

const PORT: string | number = 4000

app.use(express.json())
app.use(cors({
    origin: '*'
}));
app.use(todoRoutes)

const uri: string = `mongodb://user:pass@mongo:27017/admin?retryWrites=true&w=majority`
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set('useFindAndModify', false)

mongoose
    .connect(uri, options)
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server running`)
        )
    )
    .catch((error) => {
	throw error
    })
