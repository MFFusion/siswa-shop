<script setup>
import NavBar from "./components/NavBar.vue";
import Content from "./components/Content.vue";
import Service from "./components/Service.vue";
import LETgo from "./components/LETgo.vue";
</script>

<template>
  <!-- class="bg-hite w-screen h-screen -->
  <div class="bg-lime-200">

  <div class="flex flex-row-reverse">
    <RouterLink to = "/create" >
    <button class="my-2 mx-1 transition ease-in-out delay-150  bg-lime-200 hover:text-green-400 duration-300">
      start now
    </button>
  </RouterLink>


    <button class="mx-1 my-2 transition ease-in-out delay-150  bg-lime-200 hover:text-green-400 duration-300">
      sign up
    </button>

  </div>
  
    <div  >
        
      <img src="C:\Users\User\OneDrive\Pictures\website\2-removebg-preview-crop.png" 
      class="mx-auto  flex items-center justify-center flex-col object-center "/>
      
   </div >
   
   
    <div class="bg-white h-13  rounded-full mx-10 mb-3 mt-10" >

      <div>

         <NavBar />

      </div>


     
      

   
   
    </div>
    
    <RouterView/>

  </div>
  
</template>
