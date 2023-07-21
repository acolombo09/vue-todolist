"use strict"
/*
Descrizione:
Rifare l’esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da tre proprietà:
- id, un numero progressivo per indicare in modo univoco l’elemento
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 0
Creare un array con dei dati di partenza
MILESTONE 1
Stampare all’interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item una “x”: cliccando su di essa, 
il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante “aggiungi”: 
cliccando sul pulsante, il testo digitato viene letto e utilizzato 
per creare un nuovo todo, che quindi viene aggiunto alla lista dei 
todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER 
per aggiungere il todo alla lista
2- cliccando sul testo dell’item, invertire il valore della 
proprietà done del todo corrispondente 
(se done era uguale a false, impostare true e viceversa)
Buon lavoro e buon divertimento!
*/
const { createApp } = Vue

const app = createApp({
  data(){
    return {
      newTodoItem: {
        id: 100,
        text: "",
        color: "#FF00FF",
      },
      todoList: [
        { 
          id: 101,
          text: "primo task",
          color: "#15C632",
        },
        { 
          id: 102,
          text: "secondo task",
          color: "#1562C6",
        },
        { 
          id: 103,
          text: "terzo task",
          color: "#66A2C7",
        },
      ],
    }
  },
  methods: {
    addTodoItem(){
      // al click dell'aggiungi task, crea un nuovo todoitem
      // creiamo una copia dell'oggetto (...) in modo da perdere la reattività
      // altrimenti mi modifica tutti i testi di ogni task
      // simultaneamente
      const itemClone = {...this.newTodoItem};
      this.todoList.push(this.itemClone);
    },
    itemsToShow(){
      return this.todoList.filter((todoItem) => todoItem.deleted === false);
    },
    deleteTodoItem(itemId){
      // console.log(itemId);

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