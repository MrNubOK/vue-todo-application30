<template>
    <div>
        <AddTodo
            v-on:todo-add="addTodoItem"
        />
        <hr>
        <select v-model="filter">
            <option>All</option>
            <option>Not completed</option>
            <option>Done</option>
        </select>
        <Loader v-if="!uploaded" />
        <TodoList
            v-bind:todos="filteredTodos"
            v-on:remove-todo="removeTodo"
            v-on:complete-todo="completeTodo"
            v-on:add-new-item="addTodoItem"
        />
        <router-link to="/">Home</router-link>
    </div>
</template>

<script>
    import TodoList from '@/components/TodoList'
    import AddTodo from  '@/components/AddTodo'
    import Loader from '@/components/Loader'

    export default {
        name: 'App',
        data() {
            return {
                uploaded: false,
                todos: [],
                filter: 'All'
            }
        },
        mounted() {
          fetch('https://jsonplaceholder.typicode.com/todos?_limit=7')
            .then(response => response.json())
            .then(json => {
                this.todos = json
                this.uploaded = true
            })
        },
        components: {
            TodoList,
            AddTodo,
            Loader
        },
        computed: {
           filteredTodos() {
               let items = [];

               if (this.filter === 'All') {
                   items = this.todos;
               }
               else if (this.filter === 'Not completed') {
                   items = this.todos.filter(t => !t.completed)
               }
               else if (this.filter === 'Done') {
                   items = this.todos.filter(t => t.completed)
               }

               return items;
           }
        },
        methods: {
            removeTodo(id) {
                this.todos = this.todos.filter(todo => todo.id !== id)
            },
            completeTodo(id) {
                this.todos.find(todo => todo.id == id).completed = true
            },
            addTodoItem(todo) {
                this.todos.push(todo)
            },
        }
    }
</script>

<style scoped>
    select {
        margin-bottom: 10px;
    }
</style>