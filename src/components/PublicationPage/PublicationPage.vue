<script setup lang="ts">
import Description from './Description.vue'
import Header from './Header.vue'
import PostPagination from "../PostPagination/PostPagination.vue";
import Carousel from "./Carousel.vue";
import Footer from "../Footer/Footer.vue";
</script>

<template>
  <div class="container-publication">
    <h4 class="container-title">Publication title</h4>
    <Header />
    <Description />
    <PostPagination />
    <Carousel />
    <Footer />
  </div>
</template>
