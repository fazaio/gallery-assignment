<template>
  <div>
    <top-bar />
    <div class="grid grid-cols-6 gap-4">
      <div class="col-span-1">
        <sidebars />
      </div>
      <div class="col-span-5 p-4 shadow rounded bg-white">
        <div class="font-bold">Albums :</div>
        <div
          class="inline-block p-2 bg-gray-100 m-2 rounded"
          v-for="(row, i) in data"
          :key="i"
        >
          <span
            class="cursor-pointer"
            @click="$router.push(`/dashboard/albums/${row.albumId}`)"
            v-html="album(row.albumId)"
          ></span>
        </div>
        <div class="mt-4">
          <button
            @click="$router.push('/dashboard/albums/create')"
            class="p-2 rounded bg-indigo-400 text-white"
          >
            + New Album
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topBar from "@/components/topBar.vue";
import sidebars from "@/components/admin/sideBar.vue";

export default {
  data() {
    return {
      data: "",
    };
  },
  components: { topBar, sidebars },
  created() {
    this.get();
  },
  methods: {
    get() {
      this.axios
        .get("/api/albums")
        .then((res) => (this.data = res.data))
        .catch((e) => console.log(e));
    },
    album(x) {
      if (!x) return "Uncategorized";
      return x;
    },
  },
};
</script>

<style>
</style>