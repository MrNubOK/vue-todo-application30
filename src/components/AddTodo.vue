<template>
    <div>
        <h3>Add New Todo</h3>
        <div style="vertical-align: middle">
            <input type="text" class="add-todo-field" placeholder="Enter new task"
                v-model="title"
            >
            <span class="add-todo-btn"
                v-on:click="addTodoItem"
            >Create</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
     return {
         title: ''
     }
    },
    methods: {
        addTodoItem() {
            this.title = this.title.trim()

            if (this.title) {
                const newTodo = {
                    id: Date.now(),
                    title: this.title,
                    completed: false
                }
                this.$emit('todo-add', newTodo)
                this.title = ''
            } else {
                alert('Enter todo title')
            }
        }
    }
}
</script>