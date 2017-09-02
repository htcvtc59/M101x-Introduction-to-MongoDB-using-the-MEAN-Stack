var Stripe = require('stripe');
module.exports = function (wagner) {
    var stripe = Stripe('pk_test_Sx1LUwrdcNLMGYMkSJf5bmxP');
    wagner.factory('Stripe', function () {
        return stripe;
    });
    return {
        Stripe: stripe
    };
};