<script setup>
import NavBar from "./components/NavBar.vue";
import Content from "./components/Content.vue";
import Service from "./components/Service.vue";
import LETgo from "./components/LETgo.vue";
</script>

<template>
  <!-- class="bg-hite w-screen h-screen -->
  <div class="bg-lime-200">

    <div class="flex flex-row-reverse gap-2 px-4">
      <RouterLink to="/create">
        <button class="border border-lime-600 rounded-md px-1 py-1.5 my-2 mx-1 transition ease-in-out   bg-lime-200 hover:text-green-400  hover:bg-white duration-300">
          Start Selling
        </button>
      </RouterLink>

      <button class="border border-lime-600 rounded-md px-1 py-1.5  mx-1 my-2 transition ease-in-out   bg-lime-200 hover:text-green-400  hover:bg-white duration-300">
        Sign Up
      </button>

    </div>


    <div class="bg-white h-13  rounded-full mx-10 mb-3 mt-10">

      <div>

        <NavBar/>

      </div>


    </div>

    <RouterView/>

  </div>

</template>
