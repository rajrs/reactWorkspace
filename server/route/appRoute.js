'use strict';
module.exports = function (app) {
  var db = require('../db') 
  var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
  let conf= require('../config')  
  const authorize = require('../_helpers/verifyToken');
  // todoList Routes
  app.route('/login').post(user_login)
  app.route('/tasks')
    .get(authorize,get_all_task)   
    .post(create_task);

  app.route('/tasks/:taskId')
    .get(get_task_by_id)
    .put(edit_task,update_status)
    .delete(delete_task)

function get_all_task(req, res,next) {  
 console.log(req.userDetail.id)
  var query = "select * from tasks";
  db.query(query, (err, result) => {
    if (err) {
      console.log("error: ", err);
      res.send(err)
    }
    res.setHeader('Content-Type', 'application/json');
    res.json(result );
  })
}  
function get_task_by_id(req,res){
  //console.log(`{req.method} ${req.params.taskId} book id${req.params.bookId}`)
  //console.log(`${req.method} ${req.params.taskId}`)
  let task_by_id_Query = "SELECT * FROM `tasks` WHERE id ='"+ req.params.taskId + "'";
  //console.log(task_by_id_Query)
  db.query(task_by_id_Query,(err,result)=>{
  if (err) {
    console.log("error: ", err);
    res.send(err)
  }
  res.setHeader('Content-Type', 'application/json');
  res.json({ result });
})
}
function create_task(req,res){
  //console.log('create_task' + JSON.stringify(req.body))
  let task = req.body.task;
  let status= req.body.status
  let created_at =new Date().toISOString().slice(0, 19).replace('T', ' ');
  let query = "INSERT INTO `tasks` (task, status, created_at) VALUES ('" + task + "', "+ status +", '" + created_at + "')";
  db.query(query,(err,result)=>{
    if (err) {
      console.log("error: ", err);
      res.send(err)
    }
    res.setHeader('Content-Type', 'application/json');
    res.json({"message":"New task created successfully "})
  })
}
function edit_task(req,res){
  //console.log(req.body.task)
  let query = "UPDATE `tasks` SET `task` = '" +  req.body.task + "', `status` = '" + req.body.status + "' WHERE `id` = '" + req.params.taskId + "'";
   //console.log(query)     
  db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            // console.log(result);
            res.json({"message":"Task Updated successfully"})
        });
}
function update_status(req,res){
  console.log(req.body)
  let query = "UPDATE `tasks` SET  `status` = '" + req.body.status + "' WHERE `id` = '" + req.params.taskId + "'";
  //console.log(query)     
  db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            console.log(result);
            res.json({"message":"Task Updated successfully"})
        });

}
function delete_task(req,res){  
  let query= 'DELETE FROM tasks WHERE id = "' + req.params.taskId + '"';
 // console.log(query);
  db.query(query, (err, result) => {
    if (err) {
        return res.status(500).send(err);
    }
   // console.log(result);
    res.json({"message":"Task deleted successfully"})
});
  
}
function user_login(req,res){
//select * from user where email="raj@gmail.com" and password= "test" and user_id=1
console.log('---------api_user_login---------');
console.log(req.body);
console.log(req.body.email)
console.log(req.body.password)
let query = 'select user_id,username,email from user where email="'+req.body.email+'" and password="'+req.body.password+'"';
  // if user is found and password is valid
    // create a token
   
    console.log(query)    
    db.query(query, (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }     
      console.log(result)
      if(result.length){      
        var token = jwt.sign({ id: result[0].user_id }, conf.secret, {expiresIn: 86400 });       
        // return the information including token as JSON
        res.status(200).send({ auth: true, token: token ,user:result[0]});
      }
      else{
        console.log('else case auth:false')
        res.status(500).send({ auth: false, message:"username or password is worng"});
      }     
    });  
  
}

};
