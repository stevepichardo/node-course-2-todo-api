const {
    MongoClient,
    ObjectID
} = require('mongodb');

var obj = new ObjectID();


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false,
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('unable to insert to do', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });


    // Insert new doc into Users Collection (name, age, location)

    // db.collection('Users').insertOne({
    //     name: 'Steven',
    //     age: 27,
    //     location: 'lakeland, fl',
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('uanble to insert to do', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.close();
});