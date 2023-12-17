<template>
  <div>
    <Navbar />
  </div>
  <div>
    <add-todo />
  </div>
  <div>
    <Count />
  </div>
  <div>
    <list-todo />
  </div>
</template>

<script>
import AddTodo from "@/components/AddTodo.vue";
import Navbar from "../components/Navbar.vue";
import Count from "@/components/Count.vue";
import ListTodo from "@/components/ListTodo.vue";

export default {
  name: `Todo`,
  components: {
    Navbar,
    AddTodo,
    Count,
    ListTodo,
  },
};
</script>
<style lang=""></style>
