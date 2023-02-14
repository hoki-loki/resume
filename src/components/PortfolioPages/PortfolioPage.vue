

<script setup lang="ts">
import Footer from "../Footer/Footer.vue";

</script>

<template>
  <div class="container-portfolio">
    <div class="filter mb-30">
      <span class="link link-current">All Categories</span>
      <span class="link">Logos</span>
      <span class="link">Drawings</span>
      <span class="link">UI Elements</span>
    </div>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<style scoped lang="scss">
.container-portfolio {
  padding-top: 30px;
  display: flex;
  flex-direction: column;

  .filter {
    @media (max-width: 768px) {
      text-align: center;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
    }

    .link {
      position: relative;
      text-transform: uppercase;
      font-size: 10px;
      display: inline-block;
      letter-spacing: 1.5px;
      font-weight: 600;
      margin-right: 15px;
      margin-bottom: 10px;
      color: #8c8c8e;
      -webkit-transition: 0.4s ease-in-out;
      transition: 0.4s ease-in-out;
      user-select: none;
      cursor: pointer;

      &:hover {
        color: #fafafc;
      }

      &.link-current {
        color: #fafafc;
      }
    }
  }
}
</style>