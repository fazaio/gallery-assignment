<template>
  <div>
    <span class="text-sm text-gray-300">{{ response }}</span>
    <div class="mb-5">
      <input
        class="border outline-none w-full p-2 rounded"
        v-model="find"
        type="text"
        placeholder="search. . ."
      />
    </div>
    <table class="w-full text-sm">
      <thead>
        <tr class="border text-left">
          <th class="px-1 text-center py-2 bg-gray-100 w-24">Id.</th>
          <th class="px-1 py-2 bg-gray-100 w-64">Title</th>
          <th class="px-1 py-2 bg-gray-100 w-24">Thumbnail</th>
          <th class="px-1 py-2 bg-gray-100">Url</th>
          <th class="px-1 py-2 bg-gray-100">Option</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border" v-for="row in filter" :key="row.id" :data="row">
          <td class="p-1 text-center border-bottom">{{ row.id }}</td>
          <td class="p-1 border-bottom">{{ row.title.slice(0, 20) }}. . .</td>
          <td class="p-1 border-bottom">
            <img class="h-12" :src="row.thumbnailUrl" />
          </td>
          <td class="p-1 border-bottom">{{ row.url }}</td>
          <td class="p-1 border-bottom text-xs text-gray-500">
            <span @click="remove(row.id)" class="cursor-pointer"
              >Remove |
            </span>
            <span
              @click="$router.push(`/dashboard/photos/edit/${row.id}`)"
              class="cursor-pointer"
              >Edit
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      find: "",
      response: "",
    };
  },
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
  methods: {
    remove(id) {
      const head = {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      };
      this.axios
        .delete(`/admin/photo/${id}`, { headers: head })
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