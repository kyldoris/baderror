
const express = require('express');
const router = express.Router();
const SearchBar = ('../models/searchBar.js')



router.get('/', (req, res) => {
		res.render('index.ejs')
});

router.get('/search', (req, res) => {
   res.render('index.ejs')
});


    


module.exports = router;
