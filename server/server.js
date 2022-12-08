const express = require('express')
const app = express()
const path = require('path');
const router = express.Router();
const port = 5005

app.use(express.static("/Users/balpa/Documents/Code/Raw Site/HakanAbi/public/"))
app.use('/', router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/workplace', (req, res) => {
  res.sendFile(path.join("/Users/balpa/Documents/Code/Raw Site/HakanAbi/public/index.html"))
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})