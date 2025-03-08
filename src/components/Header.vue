<script setup>
</script>

<template>
    <!-- <header>
    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <header>
   <nav class="bg-white dark:bg-gray-900">
      <div class="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
        <router-link to="/" class="nav-link">

            <a class="flex items-center">
                
                <img src="#" class="mr-3 h-10" alt="CodeBook Logo">
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CodeBook</span>
              </a>
        </router-link>
        <div class="flex items-center relative">
            <span class="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"></span>
            <span class="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>
            <router-link to="/cart">

                <a class="text-gray-700 dark:text-white mr-5" >
                    <span class="text-2xl bi bi-cart-fill relative">
                        <span class="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">0</span>
                    </span>
                </a>
            </router-link>
            <span class="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"></span>
        </div>
      </div>
   </nav>
</header>

</template>