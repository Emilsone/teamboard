<template>
  <div
    class="absolute"
    style="width: 100% ;height: 100%; background-color: #f5f5f5;"
  >
    <div class="relative p-3 flex flex-column ">
      <router-link :to="'/links/' + $route.params.id">-Back</router-link>
      <div>
        <form autocomplete="on">
          <div>
            <label>Title</label>
            <input
              type="text"
              name="title"
              class="bg-white h-10 w-full xl:w-64 px-5  my-4 text-sm focus:outline-none"
            />
          </div>

          <div>
            <label>Destination</label>
            <input
              type="text"
              name="destination"
              class="bg-white h-10 w-full xl:w-64 px-5  my-4 text-sm focus:outline-none"
            />
          </div>
          <div>
            <label>Slug</label>
            <input
              type="text"
              name="slug"
              class="bg-white h-10 w-full xl:w-64 px-5  my-4text-sm focus:outline-none"
            />
          </div>

          <div>
            <label>Description</label>
            <input
              type="text"
              name="description"
              class="bg-white h-10 w-full xl:w-64 px-5 my-4 text-sm focus:outline-none"
            />
          </div>

          <div class="flex ">
            <button type="submit" class="py-3 px-4 mx-2 bg-green-600">Save</button>
            <button type="reset" class="bg-red py-3 mx-2 bg-red-600 px-4">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Edit",
};
</script>
