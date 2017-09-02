// Running mocha tests with gulp
var gulp = require('gulp');
var mocha = require('gulp-mocha');
gulp.task('mongodb5', function () {
    gulp.src('./mongodb5.js').
        pipe(mocha()).
        on('error', function (err) {
            this.emit('end');
        });
});
gulp.task('watch', function () {
    gulp.watch('./*.js', ['mongodb5']);
});

//Run file: ./node_modules/.bin/gulp test
// npm run watch