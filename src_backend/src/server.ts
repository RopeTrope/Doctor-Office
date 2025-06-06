import express, { Router } from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import userRouter from './routers/user.router';




const app = express();
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/ordinacija")
mongoose.connection.once('open',()=>{
    console.log("db connected")
})

const router = Router()

app.use('',router)
router.use('/user',userRouter)



app.listen(4000, () => console.log(`Express server running on port 4000`));