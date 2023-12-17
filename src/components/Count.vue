<template>
  <div v-if="todos.length === 0">Todo not Entered!</div>
  <div v-else>
    <p><strong>Complated Todo:</strong>{{ trueCount }}</p>
    <p><strong>Pending Todo:</strong>{{ falseCount }}</p>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: `Count`,
  setup() {
    const store = useStore();
    const todos = computed(() => store.state.todos);
    const trueCount = computed(() => store.getters.getDoneTrue);
    const falseCount = computed(() => store.getters.getDoneFalse);
    return {
      todos,
      trueCount,
      falseCount,
    };
  },
};
</script>

<style></style>
