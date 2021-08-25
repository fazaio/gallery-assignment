<template>
  <div>
    <top-bar :status="'logout'" />
    <div class="grid grid-cols-6 gap-4">
      <div class="col-span-1">
        <sidebars />
      </div>
      <div class="col-span-5 p-4 shadow rounded bg-white">
        <span class="text-sm text-gray-300">{{ response }}</span>
        <form @submit.prevent="submit()">
          <div class="mb-4 text-gray-400">
            * Create album base on uncategorized albums photos. <br />
            * Please create new photo before add new albums. Because All photo
            in dump database have their albums.
          </div>
          <div>
            <span>Album id:</span>
            <input
              v-model="data.albumId"
              class="border bg-gray-100 w-full rounded p-2 outline-none"
              type="text"
              readonly
            />
          </div>
          <div>
            <div class="my-2">Select Photo:</div>
            <div class="grid grid-cols-4 gap-4">
              <div
                @click="select(row.id)"
                class="p-2 cursor-pointer rounded bg-gray-300"
                v-for="(row, i) of uncategorized"
                :key="i"
              >
                <span>{{ row.title }}</span>
                <img :src="row.thumbnailUrl" />
              </div>
            </div>
            <div>Id of selected photo: {{ selected }}</div>
          </div>
          <button
            type="submit"
            class="mt-4 px-3 py-2 text-gray-200 rounded bg-indigo-400"
          >
            save
          </button>
        </form>
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
      data: {
        albumId: "null",
      },
      response: "",
      uncategorized: "",
      selected: [],
    };
  },
  components: { topBar, sidebars },
  created() {
    this.getLastAlbumsId();
    this.getUncategorized();
  },
  methods: {
    getLastAlbumsId() {
      const head = {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      };
      this.axios
        .get("/admin/last-albums-id", { headers: head })
        .then((res) => (this.data.albumId = res.data.albumId + 1))
        .catch((e) => (this.response = e));
    },
    getUncategorized() {
      this.axios
        .get("/api/albums-uncategorized")
        .then((res) => (this.uncategorized = res.data))
        .catch((e) => (this.response = e));
    },
    select(x) {
      if (!this.selected.includes(x)) this.selected.push(x);
    },
    save(id) {
      const head = {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      };
      this.axios
        .put(`/admin/photo/${id}`, this.data, { headers: head })
        .then((res) => (this.response = res.data))
        .catch((e) => (this.response = e));
    },
    submit() {
      const arr = this.selected;
      if (arr.length < 1) this.response = "No photo selected!";
      for (const row of arr) {
        this.save(row);
      }
      window.location.reload();
    },
  },
};
</script>

<style>
</style>