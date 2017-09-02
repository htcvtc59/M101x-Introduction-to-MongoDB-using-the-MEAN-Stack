var mongoose = require('mongoose');
mongoose.connect('mongodb://tron:GTj5xX7Z@ds153123.mlab.com:53123/m101x');

var userChema = new mongoose.Schema({
    name: String
});
var User = mongoose.model('User', userChema);
myUserFunction(User);
function myUserFunction(User) {
    User.create({ name: 'John' }, function (error, doc) {
        console.log(require('util').inspect(doc));
    });
}
