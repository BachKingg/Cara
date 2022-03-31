var express = require('express');
var router = express.Router();
var db = require('./../models/database');
var modelUsers = require('./../models/users'); 

router.get('/',  (req, res) => { 
    modelUsers.list( function(listusers) { res.json(listusers)} ); 
});
router.post('/', (req, res) => {
    let data = req.body; 
	  modelUsers.create(data , function(){
        res.json({thongbao:"Đã thêm  xong một user mới"});
    });
 });
 router.get('/:id', (req, res) => {
    let id = req.params.id;    
    modelUsers.read(id, function(u){
      res.json(u);
    });
 });
 router.post('/:id', (req, res)=> {
      let data = req.body;
      let id = req.params.id;
      modelUsers.update(id, data, function(){
        res.json({thongbao: 'Đã cập nhật user '});
      })
 });
 module.exports = router;