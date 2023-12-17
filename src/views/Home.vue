<template>
  <div class="home">
    <form @submit.prevent="userLogin">
      <div>
        <p>Name</p>
        <input type="text" v-model="nameInput" required />
      </div>
      <div>
        <p>Email</p>
        <input type="email" v-model="emailInput" required />
      </div>
      <button class="loginBtn" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: `Home`,
  setup() {
    const name = ref("");
    const email = ref("");
    const router = useRouter();

    const userLogin = () => {
      name.value = "";
      email.value = "";
      router.push("/todo");
    };

    return {
      userLogin,
    };
  },
};
</script>

<style>
.home {
  display: flex;
  justify-content: center;
  margin-top: 60px;
}

input {
  width: 100%;
}
form {
  border: 1px solid grey;
  border-radius: 20px;
  padding: 16px;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
.loginBtn {
  margin-top: 10px;
  background-color: green;
  color: white;
  padding: 5px 20px;
  border: none;
  cursor: pointer;
}
</style>
