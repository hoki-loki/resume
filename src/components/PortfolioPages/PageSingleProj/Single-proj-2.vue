<script setup lang="ts">
import Details from "./Details.vue";
import Result from "./Result.vue";
import Carousel from "../../Carousel/Carousel.vue";
import Tags from "../../Tags/Tags.vue";
import Banner from "./Banner.vue";
import Footer from "../../Footer/Footer.vue";

import useGeneralStore from "../../../store/general";
const store = useGeneralStore();
</script>

<template>
  <div class="single-proj-2">
    <div class="header">
      <h4 class="container-title">Project title</h4>
      <div class="project-cover">
        <div class="gallery">
          <img :src="store.img_shared[1]" alt="">
          <span class="item-hover">
            <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title/><g><path
                d="M30,0H6A5.9966,5.9966,0,0,0,0,6V30a6,6,0,0,0,12,0V12H30A6,6,0,0,0,30,0Z"/><path
                d="M90,0H66a6,6,0,0,0,0,12H84V30a6,6,0,0,0,12,0V6A5.9966,5.9966,0,0,0,90,0Z"/><path
                d="M30,84H12V66A6,6,0,0,0,0,66V90a5.9966,5.9966,0,0,0,6,6H30a6,6,0,0,0,0-12Z"/><path
                d="M90,60a5.9966,5.9966,0,0,0-6,6V84H66a6,6,0,0,0,0,12H90a5.9966,5.9966,0,0,0,6-6V66A5.9966,5.9966,0,0,0,90,60Z"/></g></svg>
        </span>
        </div>
      </div>
    </div>
    <Details/>
    <Result/>
    <Carousel/>
    <Tags/>
    <Banner/>
    <Footer/>
  </div>
</template>

<style scoped lang="scss">
.header {
  .project-cover {
    &:hover {
      .item-hover {
        opacity: 1;
      }

      img {
        -webkit-transform: scale(1.07);
        transform: scale(1.07);
        -webkit-filter: brightness(100%) blur(0);
        filter: brightness(100%) blur(0);
      }
    }

    .gallery {
      padding-bottom: 50%;
    }
  }
}
</style>