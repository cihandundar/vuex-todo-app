<template>
  <div class="wrapperContainer">
    <ul>
      <li v-for="(todo, index) in todos" :key="todo.id">
        <span>{{ index + 1 }}.</span>
        <span :class="{ done: todo.done }">{{ todo.title }}</span>
        <div>
          <button @click="toggleDone(todo.id)" class="doneBtn">Done</button>
          <button @click="deleteTodo(todo.id)" class="deleteBtn">Delete</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const todos = computed(() => store.state.todos);

    const toggleDone = (id) => {
      store.dispatch(`toggleDone`, id);
    };
    const deleteTodo = (id) => {
      store.dispatch(`deleteTodo`, id);
    };

    return {
      todos,
      toggleDone,
      deleteTodo,
    };
  },
};
</script>

<style>
.done {
  text-decoration: line-through;
  color: green;
}
ul {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 30px;
}

li {
  border: 1px solid grey;
  border-radius: 5px;
  box-shadow: 1px 3px 3px 1px;
  display: flex;
  justify-content: space-between;
  padding: 5px;
}

.doneBtn {
  margin: 3px;
  cursor: pointer;
  background-color: white;
  color: green;
  border: 1px solid green;
  border-radius: 5px;
  padding: 3px;
  transition: all 0.3s ease;
}

.doneBtn:hover {
  background-color: green;
  color: white;
}

.deleteBtn {
  margin: 3px;
  cursor: pointer;
  background-color: white;
  color: red;
  border: 1px solid red;
  border-radius: 5px;
  padding: 3px;
  transition: all 0.3s ease;
}

.deleteBtn:hover {
  background-color: red;
  color: white;
}
</style>
