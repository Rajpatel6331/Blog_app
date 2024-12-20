import express from 'express'
import dotenv from 'dotenv'
import DBCon from './utlis/db.js'
import AuthRoutes from './routes/Auth.js'

dotenv.config()
const PORT=process.env.PORT || 3000
const app=express()

// mongodb connection
DBCon()
app.get('/',(req,res)=>{
    res.send('hello from backend')
})

app.use('/auth',AuthRoutes)

app.listen(PORT,()=>{
    console.log(`App is running on Port ${PORT}`)
})