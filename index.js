const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const authRouter = require('./routes/auth')
const movieRouter = require('./routes/movie')
const userRouter = require('./routes/user')
const categoryRouter = require('./routes/category')
const dotenv = require('dotenv')
const path = require('path')
const multer = require('multer')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
dotenv.config()
mongoose.connect('mongodb://127.0.0.1:27017/review_movie',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log("Connect mongodb success")
})
.catch(()=>{
    console.log('Connect mongodb faild')
})


app.use('/api/auth', authRouter)
app.use('/api/movie', movieRouter)
app.use('/api/user', userRouter)
app.use('/api/category', categoryRouter)

app.use('/images', express.static(path.join(__dirname, "/images")))

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'images')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
  })
   
  var upload = multer({ storage: storage })

app.post('/api/upload', upload.single("file"), (req,res)=> {
    res.status(200).json('Upload image success')
})


app.listen(process.env.PORT,()=>{
    console.log("Server run on port "+process.env.PORT)
})