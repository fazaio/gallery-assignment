<template>
  <div>
    <top-bar :status="'logout'" />
    <div class="grid grid-cols-6 gap-4">
      <div class="col-span-1">
        <sidebars />
      </div>
      <div class="col-span-5 p-4 shadow rounded bg-white">
        <div class="overflow-auto my-3">
          <div class="float-left">
            <div class="py-1 font-bold">Photos:</div>
          </div>
          <div class="float-right">
            <button
              @click="$router.push('/dashboard/photos/create')"
              class="px-2 py-1 text-sm bg-indigo-400 rounded"
            >
              + new
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
import dataTable from "@/components/admin/table.vue";
import sidebars from "@/components/admin/sideBar.vue";

export default {
  data() {
    return {
      data: "",
    };
  },
  components: { topBar, dataTable, sidebars },
  created() {
    this.get();
  },
  methods: {
    get() {
      this.axios
        .get("/api/photos")
        .then((res) => (this.data = res.data))
        .catch((e) => console.log(e));
    },
  },
};
</script>

<style>
</style>