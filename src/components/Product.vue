<script setup>
import { reactive } from 'vue';
const props = defineProps(['product'])

const state = reactive({isInCart: false})

const link = "/products/"+ props.product.id


</script>

<template>
      
      <div key={{product.id}} id={{product.id}} className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a className="relative" :href="link">
          <span v-if="product.best_seller" className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">Best Seller</span>
        <img className="rounded-t-lg w-full h-64" :src="product.poster" alt="The Complete Guide to Backend Development"/>
        </a>
        <div className="p-5">
            <a href="#" >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{product.name}}</h5>
            </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{{product.overview}}</p>

        <div className="flex items-center my-2">

        </div>
        <p className="flex justify-between items-center">
            <span className="text-2xl dark:text-gray-200">
                <span>$</span>
                <span>{{product.price}}</span>
            </span>
            <button v-if="true" button className="btn btn-danger inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg  " @click="console.log('ok')"> remove  <i style="fontsize:24px" class="fa ms-3">&#xf014;</i></button>
            <button v-if="true" button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 "  @click="console.log('ok')"> Add To Cart  <i className="ml-1 bi bi-plus-lg"></i></button>
            
        </p>
        </div>
    </div>
    
        <!-- {/* <ProductDetails sx={{ display: { xl: 'none', xs: 'block' } }} :product="product"/> */} -->
      
</template>