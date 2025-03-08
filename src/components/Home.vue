<script setup>
  import { ref, onMounted, reactive } from 'vue'
  import Product from './Product.vue'
  import Header from './Header.vue'
  import './main.css'

  const state = reactive({products: []})

  async function fetchData(url) {
    let response = []


    response  = await fetch(url)
    const products = response.json().then()
  
  
    return products
  }


  onMounted(async () => {
    state.products = await fetchData("http://localhost:3000/featured_products")
    console.log(state.products);
    
    
  })
  console.log(state.products);
</script>

<template>
  <main>
    <!-- <Header /> -->
    <section className="flex flex-col lg:flex-row dark:text-slate-100 items-center">
        <div className="text my-5">
          <h1 className="text-5xl font-bold">The Ultimate eBook Store</h1>
          <p className="text-2xl my-7 px-1 dark:text-slate-300">
            CodeBook is the world's most popular and authoritative source for computer science ebooks. Find ratings and access to the newest books digitally.
          </p>
          <router-link to="/products">
            

            <a type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Explore eBooks
            </a>
          </router-link>
        </div>
        <div className="visual my-5 lg:max-w-xl">
          <img className="rounded-lg max-h-full" src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=60" alt="CodeBook Hero Section" />
        </div>
      </section>
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
        <Product v-for="product in state.products" :product="product" :key="product.id"/>
      </div>
      

  
    
  </main>
</template>
