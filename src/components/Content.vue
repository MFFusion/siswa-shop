<script setup>
import {ref} from 'vue'
let count = ref(0)
let inputValue = ref("")
let todos = ref([])

function Increment(){
    count.value++
    console.log(count)
}

function addTodo(){
    todos.value.push(inputValue.value)
    inputValue.value="";
}

function deleteTodo(todo){
    todos.value = todos.value.filter(t => t !== todo)
}
</script>


<template  >

    <!-- iklan -->
    <div class="bg-white rounded-2xl py-7 mt-10 px-5 mx-12 grid grid-cols-3 gap-3" >
    
        
        <div class=" col-span-2 h-full mx-3 mb-10 pl-4 pt-4  ">
            

            <img src="C:\Users\User\OneDrive\Pictures\website\photo_2023-12-23_01-40-36.jpg"
            class="h-full w-full object-cover  "/>
        </div>

  

        <div class=" h-44 mb-20">

            <!-- intro about website -->
            <div >
                 <div class="flex h-13 w-82 mx-3 my-3 bg-orange-200 transition-all duration-300 ease-in-out transform hover:scale-110">

                    <div class="flex-none w-48 h-13">
                    <RouterLink to = "/about" ><button >
                    <img src="C:\Users\User\OneDrive\Pictures\website\122.png" class=" object-cover object-center rounded-md my-1 mx-1
                    transition-all duration-300 ease-in-out transform hover:scale-105" />
                    </button>  </RouterLink>
                </div>

                    <div class="ml-4 mr-2 mt-2">
                        <p>
                          Students who work as dropship agents or own their own businesses to promote products.
                            You can easily showcase your business objectives using this platform.
                         </p>
                    </div>
  
                 </div>

        </div>

        <div>
            <div  class="flex h-13 w-82 mx-3 my-3 bg-lime-200 transition-all duration-300 ease-in-out transform hover:scale-110">

                <div class="flex-none w-48 h-13">
                    <RouterLink to ="/other" > <button>
                    <img src="C:\Users\User\OneDrive\Pictures\website\123.png" class="  object-cover object-center rounded-md my-1 mx-1
                    transition-all duration-300 ease-in-out transform hover:scale-105" />
                    </button></RouterLink>
                </div>

                    
                <div class="ml-4 mr-2 mt-2">
                    <p>
                        This platform is open to all students who wish to display and sell their unused clothes.
                        
                    </p>

                </div>
            </div>

        </div>
        
        <div>

           
            <div class="flex h-13 w-82 mx-3 my-3  bg-blue-200 transition-all duration-300 ease-in-out transform hover:scale-110">
                <div class=" flex-none w-48 h-13 ">
                     <RouterLink to ="/letgopage" ><button >
                    <img src="C:\Users\User\OneDrive\Pictures\website\124.png" class="  object-cover object-center rounded-md my-1 mx-1
                    transition-all duration-300 ease-in-out transform hover:scale-105" />
                   </button> </RouterLink>
                </div>
            

                <div class="ml-4 mr-2 mt-2">
                    <p>
                     Providing service to students makes it easier for them to help one another.
                     </p>

                </div>

            </div>
            

        </div>

        

        

        
</div> 






       <!-- <h1>Counter:{{ count }}</h1> -->

       <!-- <div>

        <input type="text" v-model="inputValue"/>

        <button @click="addTodo">Add Todo</button>

        <div v-for="todo in todos" :key="todo">
            <h1>{{ todo }}</h1>
            <button @click="deleteTodo(todo) ">Delete</button>
            <img :src="todo" alt="pic"/>
        </div>

       </div> -->

    </div>
    
  
</template>