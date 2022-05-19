(function() {
  'use strict';

  var vm = new Vue ({
    el: '#app',
    data: {
      newItem: '',
      todos: [{
        title: 'task 1',
        isDone: false
      }, {
        title: 'task 2',
        isDone: false
      }, {
        title: 'task 3',
        isDone: true
      }]
    },
    methods: {
      addItem: function() {
        this.todos.push(this.newItem)
        this.newItem = ''
      },
      deleteItem: function(index) {
        if (confirm('are you sure?')) {
          this.todos.splice(index, 1)
        }
      }
    }
  })
})();
