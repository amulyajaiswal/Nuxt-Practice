<!--**************Static hard code (Without Variable)***********
   <template>
<div>
    <ul>
        <li>
            <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
            <nuxt-link to="/about">About</nuxt-link>
        </li>
        <li>
            <nuxt-link to="/product">Product</nuxt-link>
        </li>
        <li>
            <nuxt-link to="/amulya">User Page</nuxt-link>
        </li>
        <li>
            <nuxt-link to="/post-123">Post-ID</nuxt-link>
        </li>
        <li>
            <nuxt-link to="/blog">Blog Home</nuxt-link>
        </li>
        <li>
            <nuxt-link to="/blog/post">Blog Post</nuxt-link>
        </li>
        <li>
            <nuxt-link to="/blog/post-Amulya">Blog Post-catogery</nuxt-link>
        </li>
        <li>
            <nuxt-link to="/users-AmulyaGroup">User Home page</nuxt-link>
        </li>
        <li>
            <nuxt-link to="/users-AmulyaGroup/123">User Page with ID</nuxt-link>
        </li>
        <li>
            <nuxt-link to="/products">Products(...Slug)</nuxt-link>
        </li>
        <li>
            <nuxt-link to="/products/redmi/note/4/plus">Products(...Slug)</nuxt-link>
        </li>
    </ul>
</div>
</template> -->

<!-- **************Dynamic route with Variable*********** -->
<script setup>
const user = ref("amulya");
const pid = ref("1234");
const pcat = ref("pythoni");
const group = ref("amulyagroup");
const uid = ref(12335);
</script>

<template>
  <div>
    <ul>
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">About</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/product">Product</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="`/${user}`">User Page</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="`/post-${pid}`">Post-ID</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/blog">Blog Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/blog/post">Blog Post</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="`/blog/post-${pcat}`">Blog Post-catogery</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="`/users-${group}`">User Home page</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="`/users-${group}/${uid}`">User Page with ID</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/products">Products(...Slug)</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/products/redmi/note/4/plus"
          >Products(...Slug)</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>
