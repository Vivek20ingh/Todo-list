var bodyParser = require('body-parser'); 
const todo = require("../model/data");

var data = [{item: 'breakfast'},{item: 'coding'},{item: 'lunch'},{item: 'devlopment'}];

var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

  app.get('/todo',async function(req, res){
      const todosfromdb = await todo.find({});
      res.render('todo',{todos: todosfromdb});

  });


  app.post('/todo', urlencodedParser ,async function(req, res){
      console.log(req.body);
     const newTodo = new todo(req.body);
    await newTodo.save()
    return res.status(200).json({
        message:"Success",
        newTodo
    })
  });
   
  app.delete('/todo/:item',function(req, res){
      data = data.filter(function(todo){
          return todo.item.replace(/ /g, '-') !== req.params.item;
      });
      res.json(data);
  });
    
}; 