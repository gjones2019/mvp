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
app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`));


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
    },
    nickname: {
      type: String
    }
}, {
        collection: 'users'
    })

const pokemon = mongoose.model('mvp', pokeDex);

//get caughtList
router.get('/caught', (req, res) => {
  pokemon.find({}, (err, data) => {
    if (err) {
      console.log('err', err)
    } else {
      console.log('Caught Pokemon')
                res.json(data)
            }
})
})

// create
router.post('/create', (req, res) => {
  pokemon.create(req.body, (err, data) => {
    if (err) {
      console.log('err', err)
    } else {
      console.log('Caught Pokemon')
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
                console.log('Released Pokemon');
                res.json(data);
            }
        })
})


//update
//put
router.put('/upgrade/:name', (req, res) => {
  pokemon.update(
    { "name": { $eq: req.params.name } }, req.body, (err,data) => {
            if (err) {
                console.log('err', err)
            } else {
                console.log('Updated Name');
                res.json(data);
            }
        })
})


app.listen(PORT, () => console.log(`Listening on ${PORT}`));