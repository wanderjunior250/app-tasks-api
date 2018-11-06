var mongoose = require('mongoose');
mongoose.connect('mongodb://root:root1234@ds155293.mlab.com:55293/app-tasks', { useNewUrlParser: true });

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String
});


var User = mongoose.model('User', UserSchema);
module.exports = User;