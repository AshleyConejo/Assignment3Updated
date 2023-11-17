let mongoose = require('mongoose');

// create a model class
let testClass = mongoose.Schema({
    Class:String,
    CRN:String,
    Date:String,
    Time:String,
},
{
    collection:"tests"
});
module.exports = mongoose.model('test', testClass);
