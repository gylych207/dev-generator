const express = require('express');
const connectDB = require('./config/db')
const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.get('/', (req,res) => {
  res.send(
   ' <h2>HOME PAGE</h2>'
  )
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});