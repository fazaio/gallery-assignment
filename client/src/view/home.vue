<template>
  <div>
    <div class="py-2 my-2">
      <input
        v-model="find"
        type="text"
        placeholder="Search. . . "
        class="outline-none w-full p-2 rounded"
      />
      <div class="p-2 text-gray-300"><b>Find:</b> {{ find }}</div>
    </div>
    <div class="grid grid-cols-3 gap-4">
      <cardImage v-for="row in filter" :key="row.id" :data="row" />
    </div>
  </div>
</template>

<script>
import cardImage from "../components/cardImage.vue";
export default {
  data() {
    return {
      data: "",
      find: "",
    };
  },
  components: { cardImage },
  computed: {
    filter() {
      var data = this.data;
      const allowed = this.find;
      if ("" !== allowed) {
        return data.filter((e) => e.title.includes(allowed));
      }
      return data;
    },
  },
  created() {
    this.axios
      .get("/api/photos")
      .then((res) => {
        this.data = res.data;
        console.log(this.data);
      })
      .catch((e) => (this.data = e));
  },
};
</script>

<style>
</style>