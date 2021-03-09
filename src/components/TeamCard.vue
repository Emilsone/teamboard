<template>
	<section>
 <div class="flex flex-wrap">
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
            <h4 class="text-2xl font-semibold text-gray-700">twitter.com</h4>
            <div class="text-gray-500">Top Referrer</div>
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
   </section>
</template>
<script>
export default {
	name:'TeamCard'
}
</script>

