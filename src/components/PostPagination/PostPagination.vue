<script setup lang="ts">
import Arrow from "../Decoration/Arrow.vue";
</script>

<template>
  <div class="post-pagination pagination mb-30 art-a">
    <router-link :to="{name: 'blog-2-col'}" class="route-link">
      <div class="link">
        <div class="left">
          <Arrow/>
        </div>
        <span>Previous project</span>
      </div>
    </router-link>
    <router-link :to="{name: 'single-proj-2'}">
      <div class="link  center">
        <span>All project</span>
      </div>
    </router-link>
    <router-link :to="{name: 'blog-3-col'}" class="route-link">
      <div class="link">
        <span>Previous project</span>
        <div class="right">
          <Arrow />
        </div>
      </div>
    </router-link>
  </div>
</template>
