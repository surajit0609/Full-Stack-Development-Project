const mongoose = require('mongoose');
const Tour=require("../Model/tours");
// Assuming Tour is your Mongoose model

const getTours = async (req, res) => {
    try {
        // Find all tours without converting to array
        const tours = await Tour.find({});
        
        res.status(200).json(tours);
    } catch (error) {
        console.error('Error fetching tours:', error);
        res.status(500).json({ message: 'An error occurred while fetching tours', error: error.message });
    }
};

module.exports = { getTours };
