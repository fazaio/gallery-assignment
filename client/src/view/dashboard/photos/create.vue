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
            <span>Title:</span>
            <input
              v-model="data.title"
              class="border w-full rounded p-2 outline-none"
              type="text"
            />
          </div>
          <div class="my-3">
            <span>Thumbnail:</span>
            <input
              v-model="data.thumbnailUrl"
              class="border w-full rounded p-2 outline-none"
              type="text"
            />
          </div>
          <div class="my-3">
            <span>Url:</span>
            <input
              v-model="data.url"
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
        albumId: null,
      },
      response: "",
    };
  },
  components: { topBar, sidebars },
  methods: {
    create() {
      const head = {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      };
      this.axios
        .post(`/admin/photo`, this.data, { headers: head })
        .then((res) => {
          this.response = res.data;
          window.location.reload();
        })
        .catch((e) => (this.response = e));
    },
  },
};
</script>

<style>
</style>