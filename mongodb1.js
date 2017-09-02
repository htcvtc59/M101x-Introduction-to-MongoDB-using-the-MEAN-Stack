var mongodb = require('mongodb');
var uri = 'mongodb://tron:GTj5xX7Z@ds153123.mlab.com:53123/m101x';
mongodb.MongoClient.connect(uri, function (error, db) {
    if (error) {
        console.log(error);
        process.exit(1);
    }
    db.collection('sample').insert({ x: 1 }, function (error, result) {
        if (error) {
            console.log(error);
            process.exit(1);
        }
        db.collection('sample').find().toArray(function (error, docs) {
            if (error) {
                console.log(error);
                process.exit(1);
            }

            console.log('Found docs:');
            docs.forEach(function (doc) {
                console.log(JSON.stringify(doc));
            });
            process.exit(0);
        });
    });


});
