<template>
  <div class="wrapper">
    <div class="wrapperContainer">
      <p>Logo</p>
      <button class="logoutBtn" @click="handleLogout">Logout</button>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: `Navbar`,
  setup() {
    const router = useRouter();

    const handleLogout = () => {
      router.push("/");
    };

    return {
      handleLogout,
    };
  },
};
</script>
<style>
.wrapper {
  border-bottom: 1px solid grey;
  background-color: rgb(196, 192, 192);
}

.wrapperContainer {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logoutBtn {
  background-color: black;
  color: white;
  border-radius: 5px;
  border: none;
  padding: 3px;
  cursor: pointer;
}
</style>
