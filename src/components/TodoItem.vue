<template>
    <li>
        <span v-bind:class="{done: todo.completed}">
        {{ index + 1 }}.
        {{ todo.title }}
        </span>
        <span class="buttons_block">
           <button class="btn edit">&#9998;</button>
           <button class="btn ready"
               v-on:click="$emit('complete-todo', todo.id)"
               v-if="!todo.completed"
           >&#10004;</button>
           <button class="btn close"
               v-on:click="$emit('remove-todo', todo.id)"
           >&times;</button>
        </span>
    </li>
</template>

<script>
export default {
    props: {
        index: {
            type: Number
        },
        todo: {
            type: Object,
            required: true
        }
    },
}
</script>

<style scoped>
    li {
        list-style: none;
        display: flex;
        justify-content: space-between;
        padding: 0.3em 0.5em;
        background: navajowhite;
        margin-bottom: 10px;
    }

    .buttons_block {
        width: 30%;
    }

    .done {
        text-decoration: line-through;
        color: lightseagreen;
    }

    .btn {
        padding: 2px;
        width: 20px;
        height: 20px;
        vertical-align: middle;
        text-align: center;
        color: white;
        border: none;
        border-radius: 3px;
        margin-right: 8px;
    }

    .edit {
        background: lightslategrey;
    }

    .ready {
        background: lightseagreen;
    }

    .close {
        background: lightcoral;
    }
</style>