var mongoose = require('mongoose');
var productSchema = require('./user');
var User = mongoose.model('User',productSchema);
var u = new User({
    profile:{username:'htcvtc59'}
});
modifyUserProfile(u,{
    picture:'https://lh3.googleusercontent.com/S_Of6vDIvJ1uWeaafnZ-L6vo6a8v-jg_AEQIe9JvwJmpk62jlfSekeaCbRiQeF4-iFtQjMP7abnpmQ=w1440-h900-rw-no';
});
function modifyUserProfile(user,profile,callback){
    user.profile = profile;
    user.save(function(error,user){

    });
}