var todoList;
angular.module('todoApp', [])
  .controller('TodoListController', function(){
	  todoList = this;
    todoList.todos = [
      {text:'pepito perez',text2:'pepe@gmail.com'},
      {text:'antonio',text2:'antonio@gmail.com'}];
	  
    todoList.addTodo = function() {
		if(todoList.nombre!=null && todoList.email!=null){
		todoList.todos.push({text:todoList.nombre,text2:todoList.email});
		todoList.nombre = null;
		todoList.email = null;
		}else{
			alert("Te faltan datos");
		}
    };
  });

  
  
