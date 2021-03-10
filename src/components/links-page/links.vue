<template>
  <div
    class="relative"
    style="width: 100% ;height: 100%; background-color: #f5f5f5;"
  >
    <div class="p-3">
      <div class="bg-white overflow-auto">
        <ul>
          <table class="min-w-full bg-white">
            <thead class="bg-gray-800 text-white">
              <tr>
                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                  S/N
                </th>
                <th
                  class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm"
                >
                  Slug
                </th>
                <th
                  class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm"
                >
                  Url
                </th>
                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Click
                </th>
              </tr>
            </thead>



            <tbody
              class="text-gray-700"
              v-for="(link, index) in links"
              :key="link.slug"
            >
              <tr class="bg-gray-200">
                <td class="text-left py-3 px-4">
                  <router-link :to="link.slug" append>{{ index }}</router-link>
                </td>
                <td class="w-1/3 text-left py-3 px-4">
                  <router-link :to="link.slug" append>{{
                    link.slug
                  }}</router-link>
                </td>
                <td class="w-1/3 text-left py-3 px-4">
                  <router-link :to="link.slug" append>{{
                    link.url
                  }}</router-link>
                </td>
                <td class="text-left py-3 px-4">
                  <router-link :to="link.slug" append>{{
                    link.clicks
                  }}</router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </ul>
      </div>
      <router-view></router-view>
    </div>
    <div class="flex flex-wrap my-16">
      <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
        <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
          <div class="p-3 rounded-full bg-indigo-600 bg-opacity-75"></div>

          <div class="mx-5">
            <h4 class="text-2xl font-semibold text-gray-700">7</h4>
            <div class="text-gray-500">Total Clicks</div>
          </div>
        </div>
      </div>

      <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
        <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
          <div class="p-3 rounded-full  bg-opacity-75">
            <i class="fa fa-hand-o-right px-2" aria-hidden="true"></i>
          </div>

          <div class="mx-5">
            <h4 class="text-2xl font-semibold text-gray-700">google.com</h4>
            <div class="text-gray-500">Url</div>
          </div>
        </div>
      </div>

      <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
        <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
          <div class="p-3 rounded-full bg-pink-600 bg-opacity-75"></div>

          <div class="mx-5">
            <h4 class="text-2xl font-semibold text-gray-700">
              http://reduce.com
            </h4>
            <div class="text-gray-500">Top Location</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
// import LinkDetails from "./link-details";
export default {
  name: "Links",
  // components: { LinkDetails },
  data() {
    return {
      links: [
        {
          slug: "khgj",
          createdAt: "2020-10-21T12:43:06.612Z",
          url: "www.google.com",
          clicks: 2,
        },
        {
          slug: "sdsfss",
          createdAt: "2020-10-21T12:43:06.612Z",
          url: "www.google.com",
          clicks: 4,
        },
        {
          slug: "cvbvn",
          createdAt: "2020-10-21T12:43:06.612Z",
          url: "www.google.com",
          clicks: 10,
        },
        {
          slug: "e45ew",
          createdAt: "2020-10-21T12:43:06.612Z",
          url: "www.google.com",
          clicks: 6,
        },
      ],
    };
  },
  created() {
    // const self = this;
    // axios.get("http://localhost:8000/links").then((res) => {
    //   console.log(res);
    // });
    // .then((data) => (self.links = data));
  },
};
</script>
