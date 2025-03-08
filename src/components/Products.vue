
<script setup>
    import { onMounted, reactive } from 'vue';
    import Product from './Product.vue';

    const state = reactive({products: []})

    async function fetchData(url) {
    let response = []


    response  = await fetch(url)
    const products = response.json().then()


    return products
    }


    onMounted(async () => {
    state.products = await fetchData("http://localhost:3000/products")
    console.log(state.products);
    
    
    })
    
</script>

<template class="mb-3">
    <span class="text-2xl font-semibold dark:text-slate-100 mb-5">All eBooks </span>
    <div class="flex flex-wrap justify-center lg:flex-row">
        <Product v-for="product in state.products" :key="product.id" :product="product">{{ product.name }}</Product>
    </div>
</template>
