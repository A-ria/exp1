const mongoose = require('mongoose');
const express = require('express');
const Participants = mongoose.model('Participants');
const controllerRouter = express.Router();

controllerRouter.get('/', (req, res, next) => {
    Participants.find({}, function(err, participant) {
        if (err)
          res.send(err);
        res.json(participant);
    });
})

module.exports = controllerRouter;