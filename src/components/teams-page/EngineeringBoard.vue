<template>
	<section class="text-center">
<div>
<h1 class="py-4 px-5 text-xl text-left">Engineering Board</h1>
</div>
<!-- <div>
</div> -->
 <div class="flex flex-wrap" v-for="(u, index) in users" :key="index">
       <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0 h-64">
        <div class="flex items-center  shadow-sm rounded-md bg-white h-full">

          <div class="mx-5 md:mx-0 px-2">
            <a href="#" class="py-3" >{{u.name}}</a>
            <h4 class="text-xl font-semibold text-gray-700">{{u.position}}</h4>
            <p class="text-gray-500 text-sm">A great team of digital marketers</p>
          </div>
        </div>
      </div>

      <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0 h-64">
        <div class="flex items-center   shadow-sm rounded-md bg-white h-full">

          <div class="mx-5 md:mx-0 px-2">
           <a href="#" class="py-3" >{{u.name}}</a>
            <h4 class="text-xl font-semibold text-gray-700">{{u.position}}</h4>
            <p class="text-gray-500 text-sm">A great team of digital marketers</p>
          </div>
        </div>
      </div>

       <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0 h-64">
        <div class="flex items-center  shadow-sm rounded-md bg-white h-full">

          <div class="mx-5 md:mx-0 px-2">
             <a href="#" class="py-3" >{{u.name}}</a>
            <h4 class="text-xl font-semibold text-gray-700">{{u.position}}</h4>
            <p class="text-gray-500 text-sm">A great team of digital marketers</p>
          </div>
        </div>
      </div>
    </div>



   </section>
</template>

<script>
export default {
  name: "EngineeringBoard",
  data() {
    return {
      users: [
        {
          name: "Joe Hanson",
          position: "Cheif Executive Officer",
          image:
            "http://s8.pdfconvertonline.com/convert/p3r68-cdx67/tp7z8-5t6ya.png"
        }
      ]
    };
  }
};
</script>
