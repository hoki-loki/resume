<script setup lang="ts">
import useGeneralStore from "../../store/general";
import Arrow from "../Decoration/Arrow.vue"

const store = useGeneralStore()

</script>

<template>
  <h4 class="container-title text-left">Newsletter</h4>
  <div class="grid">
    <div class="grid-item" v-for="img of store.img_blog">
      <div class="gallery art-a">
        <div class="image">
          <img :src="img" alt="">
        </div>
        <span class="item-hover">
            <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title/><g><path
                d="M30,0H6A5.9966,5.9966,0,0,0,0,6V30a6,6,0,0,0,12,0V12H30A6,6,0,0,0,30,0Z"/><path
                d="M90,0H66a6,6,0,0,0,0,12H84V30a6,6,0,0,0,12,0V6A5.9966,5.9966,0,0,0,90,0Z"/><path
                d="M30,84H12V66A6,6,0,0,0,0,66V90a5.9966,5.9966,0,0,0,6,6H30a6,6,0,0,0,0-12Z"/><path
                d="M90,60a5.9966,5.9966,0,0,0-6,6V84H66a6,6,0,0,0,0,12H90a5.9966,5.9966,0,0,0,6-6V66A5.9966,5.9966,0,0,0,90,60Z"/></g></svg>
        </span>
      </div>
      <div class="item-description not-hover">
        <h5>Project title</h5>
        <div class="mb-15 sub-title">Sit amet, consectetur adipisicing elit. Quas, architecto.</div>

        <router-link :to="{name: 'home'}" class="route-link">
          <div class="link">
            <span>Previous project</span>
            <Arrow/>
          </div>
        </router-link>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }


  .grid-item {
    width: 100%;

    .gallery {
      padding-bottom: 70%;
    }
  }
}
</style>