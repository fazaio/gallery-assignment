<template>
  <div>
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
        <tr class="border" v-for="row in data" :key="row.id" :data="row">
          <td class="p-1 text-center border-bottom">{{ row.id }}</td>
          <td class="p-1 border-bottom">{{ row.title.slice(0, 20) }}. . .</td>
          <td class="p-1 border-bottom">
            <img class="h-12" :src="row.thumbnailUrl" />
          </td>
          <td class="p-1 border-bottom">{{ row.url }}</td>
          <td class="p-1 border-bottom text-xs text-gray-500">
            <span class="cursor-pointer">Remove | </span>
            <span class="cursor-pointer">Edit </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style>
</style>