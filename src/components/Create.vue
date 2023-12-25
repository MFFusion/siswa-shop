<script setup>
import { ref, onUnmounted } from "vue";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");
const typeOfProduct = ref("");
const Titles = ref("");
const Descr = ref("");
const Prices = ref("");
const LinkImage = ref("");

async function createPost() {
  const data = {
    Title: Titles.value,
    Description: Descr.value,
    Price: Prices.value,
    image: LinkImage.value,
    Category: typeOfProduct.value,
  };

  const record = await pb.collection("productDetail").create(data);

  alert("Post Created!");
}
</script>

<template>
  <div
    class="bg-white rounded-2xl p-10 mx-12 flex items-center justify-center flex-col object-center gap-4"
  >
    <div class="bg-lime-200 p-10 rounded-3xl">
      <div class="text-4xl mb-10">PROMOTE YOUR PRODUCT NOW!</div>

      <div class="mb-3">
        <p>Type of product</p>

        <label for="type"></label>

        <select v-model="typeOfProduct" name="type" id="type">
          <option value="Sample">Small Business</option>
          <option value="service">service</option>
          <option value="letgostuff">Let go stuff</option>
        </select>
      </div>

      <div>
        <p>Title</p>
        <input
          v-model="Titles"
          type="text"
          placeholder="Put here..."
          class="rounded-2xl border-solid border-2 bg-white border-lime-800 w-full h-10 px-7 py-2 mb-2"
        />
      </div>

      <div>
        <p>Description</p>
        <input
          v-model="Descr"
          type="text"
          placeholder="Put here..."
          class="rounded-2xl border-solid border-2 bg-white border-lime-800 w-full h-10 px-7 py-2 mb-2"
        />
      </div>

      <div>
        <p>Price Average</p>
        <input
          v-model="Prices"
          type="text"
          placeholder="Put here..."
          class="rounded-2xl border-solid border-2 bg-white border-lime-800 w-full h-10 px-7 py-2 mb-2"
        />
      </div>

      <div>
        <p>image link</p>
        <input
          v-model="LinkImage"
          type="text"
          placeholder="Put here..."
          class="rounded-2xl border-solid border-2 bg-white border-lime-800 w-full h-10 px-7 py-2 mb-2"
        />
      </div>

      <div>
        <button
          @click="createPost"
          class="px-4 py-2 rounded-xl mx-2 my-1 bg-lime-500"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>
