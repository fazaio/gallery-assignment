<template>
  <div>
    <top-bar :status="'login'" />
    <div class="py-2 my-2">
      <input
        v-model="find"
        type="text"
        placeholder="Search. . . "
        class="outline-none w-full p-2 rounded"
      />
    </div>
    <div class="my-2">Albums: {{ $route.params.id }}</div>
    <div class="grid grid-cols-3 gap-4">
      <cardImage v-for="row in filter" :key="row.id" :data="row" />
    </div>
  </div>
</template>

<script>
import cardImage from "@/components/cardImage.vue";
import topBar from "@/components/topBar.vue";
export default {
  data() {
    return {
      data: "",
      find: "",
      dataAlbums: "",
    };
  },
  components: { cardImage, topBar },
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
    this.allAlbum();
  },
  methods: {
    allAlbum() {
      this.axios
        .get(`api/albums/${this.$route.params.id}`)
        .then((res) => {
          this.data = res.data;
        })
        .catch((e) => (this.data = e));
    },
    album(x) {
      if (!x) return "uncategorized";
      return x;
    },
  },
};
</script>

<style>
</style>