<template>
  <div id="app">
    <h1>Todo application</h1>
    <hr>
    <router-view />
    <hr>
    &copy; Vue Application 2020
  </div>
</template>



<style>
h3 {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.add-todo-field {
  width: 80%;
  font-size: 1.3em;
}

.add-todo-btn {
  background: navajowhite;
  padding: 0.3em;
  border-radius: 3px;
  border: 1px solid lightslategrey;
}
</style>
