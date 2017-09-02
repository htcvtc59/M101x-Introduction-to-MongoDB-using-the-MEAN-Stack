var mongoose = require('mongoose');
var _ = require('underscore');

module.exports = function (wagner) {
    mongoose.connect('mongodb://tron:GTj5xX7Z@ds153123.mlab.com:53123/m101x');

    var Category = mongoose.model('Category', require('./category'), 'categories');
    var Product = mongoose.model('Product', require('./product'), 'products');
    var User =  mongoose.model('User', require('./user'), 'users');
    var models = {
        Category: Category,
        Product: Product,
        User: User
    };
    _.each(models, function (value, key) {
        wagner.factory(key, function () {
            return value;
        });
    });
};
