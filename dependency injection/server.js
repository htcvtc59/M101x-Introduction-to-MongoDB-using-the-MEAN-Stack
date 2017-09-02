var express = require('express');
var mongoose = require('mongoose');
var wagner = require('wagner-core');
setupModels(mongoose, wagner);
var app = express();
setupApp(app, wagner);
app.listen(3000);
console.log('Listening on port 3000!');
function setupModels(mongoose, wagner) {
    mongoose.connect('mongodb://tron:GTj5xX7Z@ds153123.mlab.com:53123/m101x');
    var userChema = new mongoose.Schema({
        name: String
    });
    var User = mongoose.model('User', userChema);
    wagner.factory('USer', function () {
        return User;
    });
}
function setupApp(app, wagner) {
    var routeHandler = wagner.invoke(function (User) {
        return function (req, res) {
            User.findOne({ _id: req.params.id }, function (error, user) {
                res.json({ user: user });
            });
        };
    });
    app.get('/user/:id', routeHandler);
}