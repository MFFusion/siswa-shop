<template>
  <div
    class="w-screen-md flex items-center justify-center basis-1/2 flex-row-reverse"
  >
    <!-- search logo -->
    <div>
      <button
        class="transition ease-in-out delay-150rounded-2xl border-solid border-2 bg-white border-lime-800 hover:-translate-y-1 hover:scale-110 hover:bg-lime-100 duration-300 text-1xl px-2 py-1 rounded-3xl mx-5 mb-3"
      >
        <img
          src="https://img.icons8.com/ios/452/search--v1.png"
          height="27"
          width="27"
        />
      </button>
    </div>

    <!-- search bar -->
    <input
      v-model="searchTerm"
      type="text"
      placeholder="Search..."
      class="rounded-2xl border-solid border-2 bg-white border-lime-800 w-64 h-10 px-7 py-2 mb-2"
    />
  </div>

  <div class="flex flex-wrap bg bg-white rounded-2xl py5 px-2 mx-10">
    <div
      v-for="(item, index) in itemList"
      :key="index"
      class="flex-shrink-0 w-full sm:w-1/2 p-4"
    >
      <div class="bg-orange-50 flex divide-x">
        <div class="flex-none">
          <img
            :src="item.image"
            alt="Image"
            height="200"
            width="200"
            class="origin-center mx-4 my-4 transition-all hover:scale-120"
          />
        </div>

        <div class="flex flex-col">
          <h3 class="font-semibold text-2xl mx-2">{{ item.Title }}</h3>

          <div class="mx-2">
            <p>{{ item.Description }}</p>
          </div>

          <p class="text-indigo-800 mx-2">{{ item.Price }}</p>

          <div>
            <RouterLink to="/display">
              <button
                class="px-2 py-1 rounded-xl mx-2 my-1 border-2 border-indigo-500"
              >
                view more
              </button></RouterLink
            >
          </div>

          <div>
            <button class="px-4 py-2 rounded-xl mx-2 my-1 bg-indigo-500">
              buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PocketBase from "pocketbase";
import { ref, onMounted } from "vue";

const pb = new PocketBase("http://127.0.0.1:8090");
const itemList = ref([]);
const searchTerm = ref('')
onMounted(async () => {
  // you can also fetch all records at once via getFullList
  const records = await pb.collection("productDetail").getFullList({
    sort: "-created",
  });

  if (records) {
    itemList.value = records;
  } else {
    alert("no records");
  }
});

// const searchFunction = async () =>{
//   const records = await pb.collection("productDetail").getList()
// }
</script>

<style scoped>
/* Add any additional styling here */
</style>

<!-- <template>
    <div>
       <h1>Cute Shirt</h1>
       <img src="https://i.pinimg.com/564x/db/d1/98/dbd198e8d3ca3cab34edbbe406088342.jpg" alt="Cute Shirt">
    </div>
   </template>
   
   <script>
   export default {
    name: 'App',
   }
   </script>
   
   <style>
   #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
   }
   </style> -->
