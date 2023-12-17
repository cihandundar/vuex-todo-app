import { createStore } from "vuex";

const storedTodos = JSON.parse(localStorage.getItem("todos"));

export default createStore({
  state: {
    todos: storedTodos || [],
  },
  getters: {
    getDoneTrue: (state) => {
      return state.todos.filter((todo) => todo.done === true).length;
    },
    getDoneFalse: (state) => {
      return state.todos.filter((todo) => todo.done === false).length;
    },
  },
  mutations: {
    setTodo: (state, todo) => {
      state.todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    setToggleDone: (state, id) => {
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.done = !todo.done;
        localStorage.setItem("todos", JSON.stringify(state.todos));
      }
    },
    setDeleteTodo: (state, id) => {
      state.todos = state.todos.filter((todo) => todo.id !== id);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
  actions: {
    addTodo: ({ commit }, todo) => {
      commit("setTodo", todo);
    },
    toggleDone: ({ commit }, id) => {
      commit("setToggleDone", id);
    },
    deleteTodo: ({ commit }, id) => {
      commit("setDeleteTodo", id);
    },
  },
  modules: {},
});
