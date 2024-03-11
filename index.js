import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "../App";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
import { toDoListView } from "./views/toDoListView";
toDoListView();

var taskInput = document.getElementById("new-task"); //new-task

//New Task List Item
var createNewTaskElement = function (taskString) {
  //Create List Item
  var listItem = document.createElement("li");
    function() {
    this.cacheDom();
    this.bindEvents();
    this.displayToDos();
}
bindEvents() {
    this.add.addEventListener("click", this.addToDo.bind(this));
}
displayToDos: function() {
    var html = '<ul>';
    for(i=0; i < this.toDo.length; i++) {
        html += '<li>' + this.toDo[i] + '</li>' + '<button>delete</button>';
    }
    html += '</ul>';

    this.main.innerHTML = html;
}
addToDo(){
    var toDoValue = this.toDoValue.value;
    this.toDo.push(toDoValue);
    this.displayToDos();
}
  //label
  var label = document.createElement("label");
  //input (text)
  var editInput = document.createElement("input"); // text
  //button.delete
  var deleteButton = document.createElement("button");

  //Each element needs modifying
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";

  listItem.appendChild(label);
  listItem.appendChild(deleteButton);

  return listItem;
};

//Delete an existing task
var deleteTask = function () {
  console.log("Delete task...");
  var listItem = this.parentNode;
  var ul = listItem.parentNode;

toDo.init();

  //Remove the parent list item from the ul
  ul.removeChild(listItem);
};
