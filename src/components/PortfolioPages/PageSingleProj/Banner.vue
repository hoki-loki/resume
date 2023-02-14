<script setup lang="ts">
import PostPagination from "../../PostPagination/PostPagination.vue";
</script>

<template>
  <div class="banner-container m-30">
    <div class="banner art-a">
      <div class="banner-overlay">
        <div class="banner-title">
          <h1 class="mb-15">Ready to order your project?</h1>
          <div class="code mb-30">Let's work together!</div>

          <router-link :to="{name: 'contact'}" class="banner-btn">
            <div class="btn">
              <span>Contact me</span>
            </div>
          </router-link>
        </div>
      </div>
      <PostPagination />
    </div>
  </div>
</template>


<style scoped lang="scss">
.banner-overlay {
  padding: 60px;
  box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);

  .banner-title {
    -ms-flex-item-align: center;
    align-self: center;
    text-align: center;
    color: #fafafc;

    .code {
      font-family: 'Courier Prime', monospace;
    }
  }
}
</style>
