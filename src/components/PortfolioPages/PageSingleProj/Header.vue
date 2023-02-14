<script setup lang="ts">
import Arrow from "../../Decoration/Arrow.vue";
import { ref } from "vue";
import useGeneralStore from "../../../store/general";
const store = useGeneralStore();

let carouser_container = ref<HTMLElement | null>(null);

const ScrollCarousel = async (btn: string) => {
  let w = window.innerWidth
  let el = carouser_container.value

  if (el) {
    let base_scroll = el.scrollLeft

    if (btn === 'prev') {
      await el.scrollTo({
        left: base_scroll - (w / 2),
        behavior: "smooth"
      })

    } else {
      el.scrollTo({
        left: base_scroll + (w / 4),
        behavior: "smooth"
      })
    }
  }
}
</script>

<template>
  <div class="header">
    <div class="container">
      <h4 class="container-title">Project title</h4>
      <div class="scrollbar scrollbar-cards" ref="carouser_container">
        <div class="grid">
          <div class="grid-item" v-for="img of store.img_shared">
            <div class="gallery art-a">
               <span class="item-hover" style="z-index: 100;">
            <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title/><g><path
                d="M30,0H6A5.9966,5.9966,0,0,0,0,6V30a6,6,0,0,0,12,0V12H30A6,6,0,0,0,30,0Z"/><path
                d="M90,0H66a6,6,0,0,0,0,12H84V30a6,6,0,0,0,12,0V6A5.9966,5.9966,0,0,0,90,0Z"/><path
                d="M30,84H12V66A6,6,0,0,0,0,66V90a5.9966,5.9966,0,0,0,6,6H30a6,6,0,0,0,0-12Z"/><path
                d="M90,60a5.9966,5.9966,0,0,0-6,6V84H66a6,6,0,0,0,0,12H90a5.9966,5.9966,0,0,0,6-6V66A5.9966,5.9966,0,0,0,90,60Z"/></g></svg>
        </span>
              <img :src="img" alt="">
            </div>
          </div>
        </div>
        <div class="pagination">
          <Arrow class="left" style="opacity: 0.4;" @click="ScrollCarousel('prev')"/>
          <Arrow class="right" style="opacity: 0.4;" @click="ScrollCarousel('next')"/>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">

.header {
  .container-title {
    text-align: start;
  }
}
</style>