require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const { PORT } = process.env;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const pokemon = mongoose.model('mvp', pokeDex);
const router = express.Router();
const bodyParser= require('body-parser');
app.use('/server/server', cors(), router)

mongoose.connect('mongodb://localhost/mvp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
  .then(() => {
    console.log("Connected to the DB");
    // const db = client.db('mvp');
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


// const corsOptions = {
//   origin: 'http://localhost',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
app.use(cors);
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`));

// create
router.post('/', (req, res) => {
  console.log('Hellooooooooooooooooo!')
  pokemon.create(req.body, (err, data) => {
            if (err) {
                console.log('err', err)
            } else {
                console.log(data)
                res.json(data)
            }
        })
})

// router.route('/create').post((req, res, next) => {
//     user.create(req.body, (error, data) => {
//         if (error) {
//             return next(error)
//         } else {
//             console.log(data)
//             res.json(data)
//         }
//     })
// });


//delete


//update

app.listen(PORT, () => console.log(`Listening on ${PORT}`));