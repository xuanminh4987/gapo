// SERVER
const express = require('express')
const app = express()
const port = 3000

//  LIBS
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// ROUTES
const postsRouter = require('./routes/posts.route')
const usersRouter = require('./routes/users.route')
const groupsRouter = require('./routes/groups.route')
const messagesRouter = require('./routes/messages.route')

//  USING LIBS
app.use(cors())
app.use(bodyParser())
mongoose.connect('mongodb://localhost:27017/gapo', {useNewUrlParser: true, useUnifiedTopology: true},(err)=>{
    if(err) throw err

    console.log('Connect MONGODB successfully!');
})

app.get('/', (req, res)=>{
    res.redirect('*')
})

app.use('/posts', postsRouter)

app.use('/users', usersRouter)

app.use('/groups', groupsRouter)

app.use('/messages', messagesRouter)

app.get('*', (req, res)=>{
    res.send('404 NOT FOUND!')
})

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})
