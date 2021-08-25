<template>
  <div class="container mx-auto">
    <div class="max-w-lg min-w-xs mx-auto p-2">
      <form @submit.prevent="login">
        <div class="mt-20 p-4 text-gray-600 rounded bg-white shadow">
          <div class="text-lg py-3">WELCOME</div>
          <div class="text-sm text-red-400">{{ response }}</div>
          <input
            v-model="data.username"
            class="w-full p-2 text-md outline-none bg-gray-50 rounded"
            type="text"
            placeholder="username"
          />
          <input
            v-model="data.password"
            class="mt-3 w-full p-2 text-md outline-none bg-gray-50 rounded"
            type="password"
            placeholder="password"
          />
          <div class="text-right mt-3">
            <button
              type="submit"
              class="mt-5 text-md p-2 bg-indigo-500 rounded text-gray-100"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        username: "",
        password: "",
      },
      response: "",
    };
  },
  methods: {
    login() {
      this.axios
        .post("/admin/auth", this.data)
        .then((res) => {
          localStorage.setItem("token", res.data);
          this.$router.push("/dashboard");
        })
        .catch((e) => (this.response = e.response.data));
    },
  },
};
</script>

<style>
</style>