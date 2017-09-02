var mongodb = require('mongodb');
var uri = 'mongodb://tron:GTj5xX7Z@ds153123.mlab.com:53123/m101x';
mongodb.MongoClient.connect(uri, function (error, db) {
    if (error) {
        console.log(error);
        process.exit(1);
    }

    var doc = {
        title: 'Jaws',
        year: 1975,
        director: 'Steve Spielberg',
        rating: 'PG',
        ratings: {
            critics: 80,
            audience: 97
        },
        screenplay: ['Peter Benchley', 'Carl Gotlieb']
    };

    db.collection('movies').insert(doc, function (error, result) {
        if (error) {
            console.log(error);
            process.exit(1);
        }
        // var query = { year: 1975, rating: 'PG' };
        var query = { screenplay: 'Peter Benchley' };
        db.collection('movies').find(query).toArray(function (error, docs) {
            if (error) {
                console.log(error);
                process.exit(1);
            }
            console.log('Found docs: ');
            docs.forEach(function (doc) {
                console.log(JSON.stringify(doc));
            });
            process.exit(0);
        });
    });
});
