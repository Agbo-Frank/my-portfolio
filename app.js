const express = require('express')
const path = require('path')
const cors = require('cors')
require('dotenv').config()

const accountSid = process.env.ACCOUNTSID;
const authToken = process.env.AUTHTOKEN;
const client = require('twilio')(accountSid, authToken);

const port = process.env.PORT || 5500 

const app = express()

app.use(cors())
app.use(express.json())

app.post('/', (req, res) => {
  req.setTimeout(28000);
  let {name, email, projectName, message} = req.body
  console.log(req.body)
  if(!name || !message){
    return res.status(400).json({ err: "Please enter either your name or message" })
  }
  client.messages
    .create({
       body: `
       Hi Frank!,
       Name: ${name} 
       Message: ${message}
       Project Name:${projectName}
       Email: ${email}`,
       from: process.env.TWILIONUM,
       to: process.env.LOCALNUM
     })
      .then(message => {
        console.log(message)
       return  res.status(200).json({
          message: `Hi ${name}, 
        Thank You For Reaching Out To Me I will get Back to you has Soon as possible`
      })
      .catch(err => {
        console.log(err)
        return res.status(400).json({ err })
      })
    });
})

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.resolve(__dirname, './client/build')))

    app.get('/*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'bulid', 'index.html'))
    })
 }


app.listen(port, () => {
    console.log('connected')
})