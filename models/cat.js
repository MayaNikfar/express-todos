const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: String,
    breed: String,
    age: Number
});

module.exports = mongoose.model('cat', catSchema);

const cats = [
    { id: 125223, name: 'Fluffy', breed: 'Persian', age: 3 },
    { id: 127904, name: 'Whiskers', breed: 'Siamese', age: 2 },
    { id: 139608, name: 'Mittens', breed: 'Maine Coon', age: 5 }
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return cats;
}

function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    // The Array.prototype.find iterator method is
    // ideal for finding objects within an array
    return cats.find(cat => cat.id === id);
}
