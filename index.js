const express = require('express')
const app = express()
const port = 3000
const bodyParser= require('body-parser');
const { User } = require('./models/User');
const config = require("./config/key");

//postman에서 applicaiton/x-www-form-urlencoded 정보 가지고 올 수 있도록
app.use(bodyParser.urlencoded({extended : true}));
//postman에서 json 정보 가지고 올 수 있도록
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect( config.mongoURI).then(()=> console.log('MongoDB connected...'))
    .catch(err=>console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World! changed?? yes!')
})

app.post('/register', (req, res) => {
  //회원 가입할 때 필요한 정보들을 client에서 가져오면
  //그것들을 데이터베이스에 넣어준다.
  const user = new User(req.body);
  user.save((err, userInfo) =>{
    if(err) return res.json({success : false, err})
    return res.status(200).json({
      success : true
    })
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

