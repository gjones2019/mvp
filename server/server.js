require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const { PORT } = process.env;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));
const router = express.Router();
app.use('/server', cors(), router)

mongoose.connect('mongodb://localhost/mvp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
  .then(() => {
    console.log("Connected to the DB");
  })
  .catch((err) => {
    console.error('Error connecting to the DB');
  });

  let pokeDex = new Schema({
    id: {
      type: Number
    },
    name: {
        type: String
    },
    url: {
        type: String
    }
}, {
        collection: 'users'
    })

const pokemon = mongoose.model('mvp', pokeDex);

app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`));

// create
router.post('/create', (req, res) => {
  pokemon.create(req.body, (err, data) => {
    if (err) {
      console.log('err', err)
    } else {
      console.log('THIS IS THE DATA FROM POST', data)
                res.json(data)
            }
        })
})

//delete
router.delete('/delete/:name', (req, res) => {
  pokemon.remove(
    { "name": { $eq: req.params.name } }, (err,data) => {
            if (err) {
                console.log('err', err)
            } else {
                console.log('THIS IS THE DATA FROM DELETE', data)
                res.json(data)
            }
        })
})


//update



app.listen(PORT, () => console.log(`Listening on ${PORT}`));