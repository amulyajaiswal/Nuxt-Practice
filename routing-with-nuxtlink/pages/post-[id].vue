<template>
    <div>
        <h1>Post Dynamic Page3</h1>
        <h3>dynamic route is : {{$route.params.id}}</h3>
        <h3>From script : {{route.params.id}}</h3>
    </div>
</template>

<script setup>
    const route = useRoute()
    console.log(route.params.id)
    console.log(route)


    //Route Validation this take only number
    definePageMeta({
        validate: async (route) =>{
            return /^\d+$/.test(route.params.id)        }
    })
</script>