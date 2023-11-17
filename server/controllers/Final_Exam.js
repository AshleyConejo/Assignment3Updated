var express = require('express');
var router = express.Router();
//const { router } = require('../config/app');
let Test = require('../models/Final_Exam');

module.exports.DislayTestlist = async (req,res,next)=>{ //< Mark function as async
    try{
       const  testClass= await Test.find(); //< Use of await keyword
       res.render('test/list', {
          title: 'Final Exam 2023', 
          testClass: testClass
       });
    }catch(err){
       console.error(err);
       //Handle error
       res.render('test/list', {
          error: 'Error on server'
       });
    }
 };

 module.exports.AddTest = async (req,res,next)=>{
    try{
        res.render('test/add',
        {
            title:'Add A Test',
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('test/list',
        {
            error: 'Error on the server'
        });
    }
};

module.exports.ProcessTest = async (req,res,next)=>{
    try{
        let newTest = Test({
            "Class":req.body.Class,
            "CRN": req.body.CRN,
            "Date": req.body.Date,
            "Time": req.body.Time
        });
        Test.create(newTest).then(() =>{
            res.redirect('/testlist')
        })
    }
    catch(error){
        console.error(err);
        res.render('test/list',
        {
            error: 'Error on the server'
        });
    }
};

module.exports.EditTest = async (req,res,next)=>{
    try{
    const id = req.params.id;
    const TestToEdit = await Test.findById(id);
    res.render('test/edit',
    {
        title:'Edit Test',
        Test:TestToEdit
    })
}
catch(error){
    console.error(err);
    res.render('test/list',
    {
        error: 'Error on the server'
    });
}
}

module.exports.ProcessEditTest = (req,res,next)=>{
    try{
        const id = req.params.id;
        let updatedTest = Test({
            "_id":id,
            "Class":req.body.Class,
            "CRN": req.body.CRN,
            "Date": req.body.Date,
            "Time": req.body.Time,
            
        });
        Test.findByIdAndUpdate(id,updatedTest).then(()=>{
            res.redirect('/testlist')
        });
    }
    catch(error){
        console.error(err);
        res.render('test/list',
        {
            error: 'Error on the server'
        });
    }
}

module.exports.DeleteTest = (req,res,next)=>{
    try{
        let id = req.params.id;
        Test.deleteOne({_id:id}).then(() =>
        {
            res.redirect('/testlist')
        })
    }
    catch(error){
        console.error(err);
        res.render('test/list',
        {
            error: 'Error on the server'
        });
    }
}