const express = require('express');
const router = express.Router(); 


// @route GET  ----  api/profile
// @description ---- test route
// @access --------- public
router.get('/', (req,res) => {
  res.send('profile Route')
})

module.exports = router;