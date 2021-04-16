const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@cluster0.tixpa.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const schema = mongoose.Schema;

const SignupSchema = new schema({
    username: String,
    email: String,
    password: String
});

var Signupdata = mongoose.model('Signupdata',SignupSchema);

module.exports = Signupdata;