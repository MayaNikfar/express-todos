const cat = require('../models/cat');

const getAllCats = async (req, res) => {
    try {
        const cats = await cat.find();
        res.json(cats);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controller method to handle getting a single cat by ID
const getSingleCat = async (req, res) => {
    try {
        const cat = await cat.findById(req.params.id);
        if (!cat) {
            return res.status(404).json({ message: 'Cat not found' });
        }
        res.json(cat);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


const showNewForm = (req, res) => {
    // Render your form view here
    res.render('newCatForm');
};

const createNewCat = async (req, res) => {
    const cat = new cat({
        name: req.body.name,
        breed: req.body.breed,
        age: req.body.age
    });

    try {
        const newCat = await cat.save();
        res.status(201).json(newCat);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = {
    getAllCats,
    getSingleCat,
    showNewForm,
    createNewCat
};
