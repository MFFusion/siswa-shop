<script setup>
import Sample from './Sample.vue';
</script>


<template>
    <nav>

    <div class=" flex flex-row items-center justify-center gap-4">
      <div><RouterLink to = "/" ><button class="transition ease-in-out  rounded-xl bg-white hover:bg-lime-100  text-1xl px-2 py-2 ml-3 my-1 font-medium">
       Homepage
    </button>
    </RouterLink></div>

    
    <div><RouterLink to ="/about"> <button class="transition ease-in-out  rounded-xl bg-white hover:bg-lime-100  text-1xl px-2 py-2 ml-3 my-1 font-medium">Small Business</button></RouterLink>
    </div>
    
    <div>
     <RouterLink to ="/other" ><button class="transition ease-in-out  rounded-xl bg-white hover:bg-lime-100  text-1xl px-2 py-2 ml-3 my-1 font-medium">Service</button> </RouterLink>
    </div>

    <div>
     <RouterLink to ="/letgopage" ><button class="transition ease-in-out  rounded-xl bg-white hover:bg-lime-100  text-1xl px-2 py-2 ml-3 my-1 font-medium">Stuff To Let Go </button> </RouterLink>
    </div>

    </div>
    
    </nav>
  
</template>


<style>

</style>