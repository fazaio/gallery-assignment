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
    <div class="my-2">
      Albums:
      <button
        @click="$router.push(`/album/${row.albumId}`)"
        class="p-2 m-2 bg-white shadow"
        v-for="(row, i) in dataAlbums"
        :key="i"
      >
        <span v-html="album(row.albumId)"></span>
      </button>
    </div>
    <div class="grid grid-cols-3 gap-4">
      <cardImage v-for="row in filter" :key="row.id" :data="row" />
    </div>
  </div>
</template>

<script>
import cardImage from "../components/cardImage.vue";
import topBar from "../components/topBar.vue";
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
    this.allphoto();
    this.allAlbum();
  },
  methods: {
    allphoto() {
      this.axios
        .get("/api/photos")
        .then((res) => {
          this.data = res.data;
        })
        .catch((e) => (this.data = e));
    },
    allAlbum() {
      this.axios
        .get("/api/albums")
        .then((res) => {
          this.dataAlbums = res.data;
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