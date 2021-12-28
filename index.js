const express = require('express')
const app = express()
const port = 3000



const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://root:1234@cluster0.zwlog.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    ).then(()=> console.log('MongoDB connected...'))
    .catch(err=>console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
