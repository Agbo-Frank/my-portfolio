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

app.post('/', async (req, res) => {
  let {name, email, projectName, message} = req.body
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
        res.status(200).json({
          message: `Hi ${name}, 
        Thank You For Reaching Out To Me I will get Back to you has Soon as possible`
      })
      .catch(err => {
        res.status(400).json({ err })
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