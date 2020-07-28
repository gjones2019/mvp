require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const { PORT } = process.env;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const pokemon = mongoose.model('mvp', pokeDex);
const bodyParser = require('body-parser');
app.use(bodyParser.json())
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

// app.get('/find', (req, res) => {
//   // show lyrics from DB
//   pokemon.find({}).then((results) => {
//     res.send(JSON.stringify(results));
//   });
// });

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

// router.delete('/delete', (req, res) => {
//   pokemon.findByIdAndDelete(req.body.id, (err, data) => {
//             if (err) {
//                 console.log('err', err)
//             } else {
//                 console.log('THIS IS THE DATA FROM DELETE', data)
//                 res.json(data)
//             }
//         })
// })

//delete


//update

app.listen(PORT, () => console.log(`Listening on ${PORT}`));