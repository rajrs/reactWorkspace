'use strict';
module.exports = function (app) {
  var db = require('../db')
  //var todoList = require('../controller/appController');
  // todoList Routes
  app.route('/tasks')
    .get(get_all_task)    
   .post(create_task);

app.route('/tasks/:taskId')
.get(get_task_by_id)
.put(edit_task)
.delete(delete_task);
  /*app.route('/tasks/:taskId')
   .get(todoList.read_a_task)
   .put(todoList.update_a_task)
   .delete(todoList.delete_a_task);*/
  function get_all_task(req, res) {    
    var query = "select * from tasks";
    db.query(query, (err, result) => {
      if (err) {
        console.log("error: ", err);
        res.send(err)
      }
      res.setHeader('Content-Type', 'application/json');
      res.json({ result });
    })
  }
  
function get_task_by_id(req,res){
  //console.log(`{req.method} ${req.params.taskId} book id${req.params.bookId}`)
  console.log(`${req.method} ${req.params.taskId}`)
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
  let task = req.body.task;
  let status= req.body.status
  let created_at =new Date().toISOString().slice(0, 19).replace('T', ' ');
  let query = "INSERT INTO `tasks` (task, status, created_at) VALUES ('" + task + "', "+ status +", '" + created_at + "')";
//  console.log(query)
  db.query(query,(err,result)=>{
    if (err) {
      console.log("error: ", err);
      return res.status(500).send(err);
    }
    res.json({"message":"New task created successfully "})
  })
}
function edit_task(req,res){
 
  let task = req.body.task;
  let status= req.body.status
  let query = "UPDATE `tasks` SET `task` = '" + task + "', `status` = '" + status + "' WHERE `id` = '" + req.params.taskId + "'";
 // console.log(query)     
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
  console.log(query);
  db.query(query, (err, result) => {
    if (err) {
        return res.status(500).send(err);
    }
   // console.log(result);
    res.json({"message":"Task deleted successfully"})
});
  
}
};