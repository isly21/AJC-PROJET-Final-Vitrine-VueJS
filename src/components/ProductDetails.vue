
<script setup>
import { onMounted, reactive, toRaw } from 'vue';
import { useRoute } from 'vue-router';
const route =  useRoute();

const state = reactive(
    {
    products: [],
    product: {}
})

// const state = reactive({products: []})

async function fetchData(url) {
let response = []


response  = await fetch(url)
const products = response.json().then()


return products
}


onMounted(async () => {
const proxyProd = await fetchData("http://localhost:3000/products")
state.products = toRaw(proxyProd)
console.log(state.products);

state.product = toRaw(state.products.find(p => p.id === route.params.id))
console.log(state.product);

console.log("id:", route.params.id);


})

</script>

<template>
   
     <section>

        <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">{{state.product.name}}</h1>
        <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">{{state.product.overview}}</p>
        <div className="flex flex-wrap justify-around">
             <div className="max-w-xl my-3">
                <img className="rounded" :src="state.product.poster" :alt="state.product.name"/>
            </div> 
            <div className="max-w-xl my-3">
                <p className="text-3xl font-bold text-gray-900 dark:text-slate-200"><span className="mr-1">$</span><span className="">{{state.product.price}}</span></p>
                <p className="my-3"><span><i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i><i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i><i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i><i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i><i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i></span></p>
                <p className="my-4 select-none">
                     <span v-if="state.product.best_seller" className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">BEST SELLER</span>
                     <span v-if="state.product.in_stock" className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">INSTOCK</span> 
                     <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">{{state.product.size}} MB</span></p> 
                    
                    
                    <!-- <button className="btn btn-danger my-3 inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white  rounded-lg " onClick={() => dispatch(remove(product))}> remove  <i style={{fontsize:"24px"}} className="fa ms-3">&#xf014;</i></button>
                    <button className="my-3 inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 " onClick={() => dispatch(add(product))}>Add To Cart <i className="ml-1 bi bi-plus-lg"></i></button> -->
                
                    
                <p className="text-lg text-gray-900 dark:text-slate-200">{{state.product.long_description}}</p>
            </div>
        </div>
    </section> 
</template>

