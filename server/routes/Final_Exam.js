var express = require('express');
var router = express.Router();
//const { router } = require('../config/app');
let tests = require('../models/Final_Exam');
let TestController = require('../controllers/Final_Exam')
/* Get route for the Bio Books list */
// Read Operation
router.get('/', TestController.DislayTestlist);
/* Get route for Add Book page --> Create */
router.get('/add', TestController.AddTest); 

router.get('/edit/:id', TestController.EditTest);
/* Post route for processing the Edit Book page --> Update */
router.post('/edit/:id', TestController.ProcessEditTest);
/* Get to perform Delete Operation --> Delete Operation */
router.get('/delete/:id', TestController.DeleteTest);
 module.exports = router;