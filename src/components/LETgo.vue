<!-- <script setup>

</script>


<template>
    <h1>lelong baju</h1>
  
    <div class="grid grid-cols-6 divide-x">

        
        <div >
            <p>illiyoon moisturiser</p>
            <img
              src="C:\Users\User\OneDrive\Pictures\website\WhatsApp Image 2023-12-17 at 16.19.49_568cd8ca.jpg"
              height="150"
              width="150"
              class="mx-auto flex items-center justify-center flex-col"
             />
       
      </div>

      <div>02</div>
      <div>03</div>
      <div>04</div>
      <div>05</div>
      <div>06</div>
    </div>
  </template>
   -->


   <!-- <template>
  <div class="flex flex-wrap">
    <div v-for="(item, index) in items" :key="index" class="flex-shrink-0 w-full sm:w-1/4 p-4">
      <div class="bg-green-100 grid grid-cols-1 rounded-3xl divide-x">
        <div>
          <img :src="item.image" alt="item" height="200" width="200" class=" rounded-2xl origin-center mx-2 my-2 transition-all hover:scale-120">
        </div>
        <div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template> -->

<template>
  <div class="flex flex-wrap">
    <div v-for="(item, index) in items" :key="index" class="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/6 xl:w-1/6 p-2">
      <div class="bg-green-100 grid grid-cols-1  rounded-t-3xl divide-y">
        <div class="flex items-center justify-center"> <!-- Added flex, items-center, and justify-center -->
          <img :src="item.image" alt="item" height="150" width="150" class="origin-center transition-all rounded-2xl hover:scale-120 mt-2">
        </div>
        <div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
const items = [
  {
    title: "Crocheting Business",
    description: "Dm me",
    image: "https://i.pinimg.com/564x/c6/c5/5e/c6c55e70484dec5453d5b856d9224965.jpg",
  },
  {
    title: "Brown Bear Shirt",
    description: "",
    image: "https://i.pinimg.com/564x/db/d1/98/dbd198e8d3ca3cab34edbbe406088342.jpg",
  },
  {
    title: "Colourful Socks",
    description: "",
    image: "https://i.pinimg.com/564x/04/b2/e0/04b2e02301a4bd8786eaa0314154d6be.jpg",
  },
  {
    title: "scarf by hermanas",
    description: "Dm me",
    image: "https://i.pinimg.com/564x/98/16/61/9816614a5a505da75ad0acf162edceef.jpg",
  },
  {
    title: "Crocheting Business",
    description: "Dm me",
    image: "https://i.pinimg.com/564x/c6/c5/5e/c6c55e70484dec5453d5b856d9224965.jpg",
  },
  {
    title: "Brown Bear Shirt",
    description: "",
    image: "https://i.pinimg.com/564x/db/d1/98/dbd198e8d3ca3cab34edbbe406088342.jpg",
  },
  {
    title: "Colourful Socks",
    description: "",
    image: "https://i.pinimg.com/564x/04/b2/e0/04b2e02301a4bd8786eaa0314154d6be.jpg",
  },
  {
    title: "scarf by hermanas",
    description: "Dm me",
    image: "https://i.pinimg.com/564x/98/16/61/9816614a5a505da75ad0acf162edceef.jpg",
  },
  {
    title: "Brown Bear Shirt",
    description: "",
    image: "https://i.pinimg.com/564x/db/d1/98/dbd198e8d3ca3cab34edbbe406088342.jpg",
  },
  {
    title: "Colourful Socks",
    description: "",
    image: "https://i.pinimg.com/564x/04/b2/e0/04b2e02301a4bd8786eaa0314154d6be.jpg",
  },
  {
    title: "scarf by hermanas",
    description: "Dm me",
    image: "https://i.pinimg.com/564x/98/16/61/9816614a5a505da75ad0acf162edceef.jpg",
  },
  {
    title: "Brown Bear Shirt",
    description: "",
    image: "https://i.pinimg.com/564x/db/d1/98/dbd198e8d3ca3cab34edbbe406088342.jpg",
  },
  {
    title: "Colourful Socks",
    description: "",
    image: "https://i.pinimg.com/564x/04/b2/e0/04b2e02301a4bd8786eaa0314154d6be.jpg",
  },
  {
    title: "scarf by hermanas",
    description: "Dm me",
    image: "https://i.pinimg.com/564x/98/16/61/9816614a5a505da75ad0acf162edceef.jpg",
  },
];
</script>

<style scoped>
/* Add any additional styling here */
</style>