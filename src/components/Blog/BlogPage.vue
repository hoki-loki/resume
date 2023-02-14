<script setup lang="ts">
import Arrow from "../Decoration/Arrow.vue"
import Footer from "../Footer/Footer.vue";
import PostPagination from "../PostPagination/PostPagination.vue";
</script>

<template>
  <div class="container-blog">
    <router-view></router-view>
    <PostPagination />
    <Footer/>
  </div>
</template>

<style scoped lang="scss">
</style>