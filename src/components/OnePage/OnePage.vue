<script setup lang="ts">
import Header from "../HomePage/Header.vue";
import Tags from "../Tags/Tags.vue";
import Services from "../HomePage/Services.vue";
import Prices from "../HomePage/Prices.vue";
import Carousel from "../Carousel/Carousel.vue";
import Education from "../HistoryPage/Education.vue";
import Work from "../HistoryPage/Work.vue";
import Carousel_Blog from "../PublicationPage/Carousel.vue";
import Contact from "../ContactPage/ContactPage.vue";
import Result from "../PortfolioPages/PageSingleProj/Result.vue";
</script>

<template>
  <Header />
  <Tags />
  <Services />
  <Prices />
  <Carousel />

  <Result />

  <div class="container-history">
    <Education />
    <Work />
  </div>

  <Carousel_Blog />
  <Contact />
</template>


<style scoped>

</style>