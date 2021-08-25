<template>
  <div>
    <top-bar />
    <div class="grid grid-cols-6 gap-4">
      <div class="col-span-1">
        <sidebars />
      </div>
      <div class="col-span-5 p-4 shadow rounded bg-white">
        {{ response }}
        <div class="overflow-auto">
          <div class="float-left">
            <div class="p-2 my-2">
              <span class="text-xs">Detail:</span>
              <div>Album : {{ nameAlbum }} | Total : {{ data.length }}</div>
            </div>
          </div>
          <div class="float-right">
            <button
              @click="remove()"
              class="bg-red-400 text-white text-sm rounded p-2 m-2"
            >
              Delete this album
            </button>
          </div>
        </div>
        <data-table :data="data" />
      </div>
    </div>
  </div>
</template>

<script>
import topBar from "@/components/topBar.vue";
import sidebars from "@/components/admin/sideBar.vue";
import dataTable from "@/components/admin/table.vue";

export default {
  data() {
    return {
      data: "",
      nameAlbum: "",
      response: "",
    };
  },
  components: {
    topBar,
    sidebars,
    dataTable,
  },
  created() {
    if (this.$route.params.id == "null") {
      this.get(`/albums-uncategorized`);
      this.nameAlbum = "Uncategorized";
    } else {
      this.get(`/albums/${this.$route.params.id}`);
      this.nameAlbum = this.$route.params.id;
    }
  },
  methods: {
    get(x) {
      this.axios
        .get(`/api${x}`)
        .then((res) => (this.data = res.data))
        .catch((e) => console.log(e));
    },
    remove() {
      const head = {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      };
      this.axios
        .delete(`/admin/albums/${this.$route.params.id}`, { headers: head })
        .then((res) => (this.response = res.data))
        .catch((e) => (this.response = e.response.data));
    },
  },
};
</script>

<style>
</style>