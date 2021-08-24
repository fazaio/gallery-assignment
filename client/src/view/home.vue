<template>
  <div>
    <div class="py-2 my-2">
      <input
        type="text"
        placeholder="find"
        class="outline-none w-full p-2 rounded"
      />
    </div>
    <div class="grid grid-cols-3 gap-4">
      <cardImage v-for="row in data" :key="row.id" :data="row" />
    </div>
  </div>
</template>

<script>
import cardImage from "../components/cardImage.vue";
export default {
  data() {
    return {
      data: "",
    };
  },
  components: { cardImage },
  created() {
    this.axios
      .get("/api/photos")
      .then((res) => (this.data = res.data))
      .catch((e) => (this.data = e));
  },
};
</script>

<style>
</style>