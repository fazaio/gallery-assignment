<template>
  <div>
    <top-bar :status="'logout'" />
    <div class="grid grid-cols-6 gap-4">
      <div class="col-span-1">
        <sidebars />
      </div>
      <div class="col-span-5 p-4 shadow rounded bg-white">
        <span class="text-sm text-gray-300">{{ response }}</span>
        <form @submit.prevent="create()">
          <div>
            <span>Albumid:</span>
            <input
              v-model="data.albumId"
              class="border w-full rounded p-2 outline-none"
              type="text"
            />
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
        title: "",
        thumbnailUrl: "",
        url: "",
        albumId: "null",
      },
      response: "",
    };
  },
  components: { topBar, sidebars },
  methods: {
    create() {},
  },
};
</script>

<style>
</style>