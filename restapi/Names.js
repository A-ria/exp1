const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useUnifiedTopology: true, useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Successfully connected to test database.');
});

const participantSchema = new mongoose.Schema({
    participantCode: {
        type: String,
        required: true
    },
    password: {
        type: Number,
        required: true
    },
  });

const Participants = mongoose.model('Participants', participantSchema);
 
// Participants.insertMany([{ participantCode: 'AJ123', password: 123 }, { participantCode: 'DL456', password: 456 }], function(err) {
//     if (err) return handleError(err);
// });
// const saveAndDisconnect = async () => {
//     Participants = await Participants.save();
// };
// saveAndDisconnect();

// const alice = { participantCode: 'AJ123', password: 123 };
// const dliu = { participantCode: 'DL456', password: 456 };
// const michelle = { participantCode: 'MF789', password: 789 };
// const christine = { participantCode: 'CW000', password: 000 };

// const addStudent = (name) => {
//     const name1 = new Participants(name);
//     name1.save(function(err, name) {
//         if (err) return console.error(err);
//         console.log('Name inserted succussfully!');
//     })
// };

// addStudent(alice);
// addStudent(dliu);
// addStudent(michelle);
// addStudent(christine);

// const name1 = new Participants({ participantCode: 'AJ123', password: 123 });
// name1.save(function(err, name) {
//   if (err) return console.error(err);
//   console.log("Name inserted succussfully!");
// });

// const find = async (entry) => {
//     await Participants.find({ participantCode: entry }).exec();
// };

// console.log(find('AJ123'));

module.exports = mongoose.model('Participants', participantSchema);