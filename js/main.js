"use strict"
/*

*/
const { createApp } = Vue;

const app = createApp({
  data(){
    return {
      lastId: 103,
      newTodoItem: [
        {
          text: "",
          color: "#d371d7",
        },
      ],
      todoList: [
        { 
          id: 101,
          text: "primo task",
          color: "#ff00ff",
        },
        { 
          id: 102,
          text: "secondo task",
          color: "#d371d7",
        },
        { 
          id: 103,
          text: "terzo task",
          color: "#e18f3",
        },
      ],
    }
  },
  methods: {
    addTodoItem(){
      // creiamo una copia dell'oggetto in modo da perdere la reattività
      // altrimenti mi modifica tutti i testi di ogni task
      // simultaneamente
      const itemClone = {...this.newTodoItem, id: ++this.lastId};
      
      this.todoList.push(this.itemClone);
    },
    itemsToShow(){
      return this.todoList.filter((todoItem) => todoItem.deleted === false)
    },
    deleteTodoItem(itemId){
      console.log(itemId);

      let indexToDelete = this.todoList.findIndex((todoItem) => todoItem.id === itemId);

      console.log(indexToDelete);
      // for (let i = 0; i < this.todoList.length; i++) {
      //   const todoItem = this.todoList[i];
        
      //   if (todoItem.id === itemId) {
      //     indexToDelete = i;
      //   }
      // }

      // indice elemento da cancellare, quanti elementi da cancellare(1)
      // this.todoList.splice(indexToDelete, 1)

      this.todoList[indexToDelete].deleted = true;
    },
    emptyList(){
      this.todoList = []
    }
  },
}).mount("#app");