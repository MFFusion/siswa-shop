<script setup>
import Sample from './Sample.vue';
</script>


<template>
    <nav>

    <div class=" flex flex-row items-center justify-center gap-8">
      <div><RouterLink to = "/" ><button class="transition ease-in-out delay-150 rounded-xl bg-white hover:bg-lime-100 duration-300 text-1xl px-2 py-2 ml-3 my-1 font-medium">
       HOMEPAGE
    </button>
    </RouterLink></div>

    
    <div><RouterLink to ="/about"> <button class="transition ease-in-out delay-150 rounded-xl bg-white hover:bg-lime-100 duration-300 text-1xl px-2 py-2 ml-3 my-1 font-medium">small BUSINESS </button></RouterLink>
    </div>
    
    <div>
     <RouterLink to ="/other" ><button class="transition ease-in-out delay-150 rounded-xl bg-white hover:bg-lime-100 duration-300 text-1xl px-2 py-2 ml-3 my-1 font-medium">SERVICE</button> </RouterLink>
    </div>

    <div>
     <RouterLink to ="/letgopage" ><button class="transition ease-in-out delay-150 rounded-xl bg-white hover:bg-lime-100 duration-300 text-1xl px-2 py-2 ml-3 my-1 font-medium"> LETGO STUFF</button> </RouterLink>
    </div>

    </div>
    
    </nav>
  
</template>


<style>

</style>