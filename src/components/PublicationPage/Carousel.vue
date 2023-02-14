<script setup lang="ts">
import useGeneralStore from "../../store/general";
import {ref} from "vue";

const store = useGeneralStore()

let carouser_container = ref<Element | null>(null);

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
        left: base_scroll + (w / 2),
        behavior: "smooth"
      })
    }
  }
}

</script>

<template>
  <div class="container-carousel">
    <h1 class="container-title text-left">Newsletter</h1>
    <div class="scrollbar scrollbar-cards" ref="carouser_container">
      <div class="grid">
        <div class="grid-item" v-for="img of store.img_blog">
          <div class="gallery art-a">
            <img :src="img" alt="">
          </div>
          <div class="item-description not-hover">
            <h5>Project title</h5>
            <div class="mb-15 sub-title">Sit amet, consectetur adipisicing elit. Quas, architecto.</div>

            <router-link :to="{name: 'single-proj-1'}" class="route-link">
              <span class="link">Read more</span>
              <Arrow style="fill: #FFC107; width: 14px; height: 14px;" class="arrow"/>
            </router-link>
          </div>
        </div>
      </div>
      <div class="pagination">
        <Arrow class="left" style="opacity: 0.4;" @click="ScrollCarousel('prev')"/>
        <Arrow class="right" style="opacity: 0.4;" @click="ScrollCarousel('next')"/>
      </div>
    </div>

    <div class="pagination">
      <Arrow class="left" style="opacity: 0.4;" @click="ScrollCarousel('prev')" />
      <Arrow class="right" style="opacity: 0.4;" @click="ScrollCarousel('next')" />
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>