<template>
    <ul>
        <TodoItem
            v-for="(todo, i) of todos" :key="todo.id"
            v-bind:index="i"
            v-bind:todo="todo"
            v-on:remove-todo="removeTodo"
            v-on:complete-todo="completeTodo"
        />
    </ul>
</template>

<script>
import TodoItem from "@/components/TodoItem";

export default {
    props: {
        todos: {
            type: Array,
            required: true
        }
    },
    mounted() {

    },
    components: {
        TodoItem
    },
    methods: {
        removeTodo(id) {
            this.$emit('remove-todo', id)
        },
        completeTodo(id) {
            this.$emit('complete-todo', id)
        }
    }
}
</script>

<style scoped>
    ul {
        margin: 0;
        padding: 0;
    }
</style>