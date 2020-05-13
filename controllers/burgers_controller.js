var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

router.get('/', function(req, res){
    burger.selectAll(function(data){
        var burgerObject = {
            burger: data
        };
        console.log(burgerObject);
        res.render('index', burgerObject);
    });
   
});

router.post('/api/burgers', function(req, res){
    burger.insertOne([
        'burger_name', 'devoured'
    ],
    [
        req.body.name, req.body.devoured
    ], function(result){
        res.json({id: result.indertId });
    }
    )
})

module.exports = router;