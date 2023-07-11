<template>
    <div>
        <nuxt-link to="/"> Home </nuxt-link>
        <nuxt-link to="/about"> About </nuxt-link>
        <nuxt-link to="/contact"> Contacts </nuxt-link>
        <nuxt-link to="/useassfolder"> Other page </nuxt-link>
        <!-- use for other website and taget use for open link in new tab  -->
        <nuxt-link to="https://www.instagram.com/amulya_creation/" target="_blank"> Go to instagram</nuxt-link>
    </div>
</template>

<style>
.router-link-active{
font-weight: bolder;
color: black;
background-color: yellow;
}
</style>