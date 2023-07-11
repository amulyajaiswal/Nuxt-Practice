<template>
    <div>
        <h1>User Dynamic Page</h1>
        <h3>dynamic route is : {{$route.params.user}}</h3>
        <h3>From script : {{route.params.user}}</h3>
    </div>
</template>

<script setup>
const route = useRoute()
console.log(route.params.user)
console.log(route)
</script>