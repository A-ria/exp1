const express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
Names = require('./Names'),
bodyParser = require('body-parser');
const controllerRouter = require('./Controller');
const namesRouter = require('./Names');
const apiRouter = express.Router();
apiRouter.use('/controller', controllerRouter);
apiRouter.use('/names', namesRouter);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test', {useUnifiedTopology: true, useNewUrlParser: true});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(function(req, res) {
//     res.status(404).send({url: req.originalUrl + ' not found'})
// });

module.exports = apiRouter;

app.listen(port);
console.log('Mongo database started on: ' + port);