const express = require('express')
const app = express()

// import router in indexjs

const router = require('./router');
app.use('/', router)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})