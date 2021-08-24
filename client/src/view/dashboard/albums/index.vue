<template>
  <div>
    <top-bar />
    <div class="grid grid-cols-6 gap-4">
      <div class="col-span-1">
        <sidebars />
      </div>
      <div class="col-span-5 p-4 shadow rounded bg-white"></div>
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
        .get("/api/photos")
        .then((res) => (this.data = res.data))
        .catch((e) => console.log(e));
    },
  },
};
</script>

<style>
</style>