// var express = require('express');
// var path= require("path");
// var bodyParser = require('body-parser');
// var mongo = require("mongoose");

// var db= mongo.connect("", function (err, response) {
//  if (err) { console.log('connected to'+db,'+', response);}
//  else{ console.log('Connected to'+db,'+', response);}   
// });

// var app =express()
// app.use(bodyParser());
// app.use(bodyParser.json({limit:'5mb'}));
// app.use(bodyParser.json({extended: true}));




// app.use(function (req, res, next){
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
    
// });

// var Schema= mongo.Schema;

// var UserSchema = new Schema({
//     name: {type: String},
//     address: {type: String},

// },{versionKey:false});

// var model =mongo.model('users', UserSchema, 'users');
// app.post("/api/users",function(req, res){
//     var mod = new model (req,res);
//     if (req.body.mode =="save")
//     {
//         mode.save(function(err,data){
//             if (err){
//                 res.send(err);
//             }
//             else{
//                 res.send({data:"record has been inserted..!!"});
//             }
//         });

//     }
//     else
//     {
// model.findByIdAndUpdate(req.body.id,{ name: req.body.name, address: req.body.address},
//     function(err, data){
//         if (err) {
//             res.send(err);
//         }
//         else{
//             res.send({data: "record has been updateDecorator..!!"});
//         }
//     });

//     }
// })


// app.post("/api/users", function (req,res){
//     model.removeAllListeners({ _id: req.body.id}, function(err){
//         if(err){
//             res.send(err);
//         }
//         else{
//             res.send({data:"record has been deleted..!!"});
//         }
//     });
// })

