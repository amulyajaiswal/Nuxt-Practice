<template>
<div>
    <!-- components name always start with capital -->
    <Navbar />
    <hr>
    <h1>Home Page</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta perspiciatis incidunt dignissimos commodi minima, modi, debitis odit eos id maxime totam velit quia dicta obcaecati corporis! Enim facere accusamus est?</p>
    
    <button @click="show = true">Show Nokia Comp</button>
    <LazyNokia v-if="show"/>
</div>
</template>

<script setup>
    const show = ref(false)
</script>
