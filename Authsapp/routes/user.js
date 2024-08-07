// routes/tourRoutes.js
const express = require('express');
const router = express.Router();

const{signup,login}=require("../controler/Auth");


router.post("/signup", signup);
router.post("/login", login);






router.get('/collections', async (req, res) => {
    try {
       const myArray=  await require("../controler/getvalue").fetchTours();

        
           
        
        res.status(200).json({
            message: 'Collections retrieved successfully',
            toure:myArray,
            // collections: collections.map(col => col.name)
        });

        // res.status(200).json(myArray);
        // return myArray;
        // return collections.map(col => col.name);
    } catch (error) {
        console.error('Error accessing collections:', error);
        res.status(500).json({
            message: 'An error occurred while accessing collections',
            error: error.message
        });
    }
});

  

// module.exports = router;

module.exports = router;