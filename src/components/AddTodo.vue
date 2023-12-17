<template>
  <div class="wrapperContainer">
    <div class="wrapperAddTodo">
      <h1>Add Todo</h1>
      <div class="addInput">
        <input
          class="addInputPlace"
          type="text"
          placeholder="Enter a new todo"
          v-model="newTodo"
        />
        <button class="addBtn" @click="addNewTodo">Add Todo</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "TodoInput",
  setup() {
    const store = useStore();
    const newTodo = ref("");

    const addNewTodo = () => {
      const todo = {
        id: Date.now(),
        title: newTodo.value,
        done: false,
      };
      store.dispatch("addTodo", todo);
      newTodo.value = "";
    };

    return {
      newTodo,
      addNewTodo,
    };
  },
};
</script>

<style>
input {
  padding: 5px;
}
.addInput {
  display: flex;
  align-items: center;
}
.wrapperAddTodo {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.addBtn {
  width: 100%;
  padding: 5px;
  border: none;
  background-color: yellowgreen;
  color: black;
  cursor: pointer;
}
.addBtn:hover {
  background-color: green;
  color: #fff;
}
</style>
