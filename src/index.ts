import axios from "axios"
import express from "express"
const readline = require('node:readline');
const app = express()
const port = 3000

let data = {}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`What's your name?`, name=> {
  axios
  .get("https://api.github.com/users/" + name)
  .then((response) => {
    data = response.data
  })
  .catch((err) => console.log(err));
  rl.close();
});

app.get('/', (req, res) => {
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

