var orm = require('../config/orm.js');

var burger = {
    selectAll: function(){
        orm.selectAll('burgers', function(res){

        })
},
    insertOne: function(){
        orm.insertOne('', function(res){

        })
    },
    updateOne: function(){
        orm.updateOne('', function(res){
            
        })
    }
}