<script setup lang="ts">
import useGeneralStore from "../../../store/general";
const store = useGeneralStore();

</script>

<template>
  <div class="container-result">
    <div class="container-title">Result</div>
    <div class="content">
      <div class="left">
        <div class="grid">
          <div class="grid-item">
            <div class="gallery">
              <img src="https://elanta.app/nazar/arter-demo-new/img/works/thumbnail/2.jpg" alt="">
              <span class="item-hover">
            <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title/><g><path
                d="M30,0H6A5.9966,5.9966,0,0,0,0,6V30a6,6,0,0,0,12,0V12H30A6,6,0,0,0,30,0Z"/><path
                d="M90,0H66a6,6,0,0,0,0,12H84V30a6,6,0,0,0,12,0V6A5.9966,5.9966,0,0,0,90,0Z"/><path
                d="M30,84H12V66A6,6,0,0,0,0,66V90a5.9966,5.9966,0,0,0,6,6H30a6,6,0,0,0,0-12Z"/><path
                d="M90,60a5.9966,5.9966,0,0,0-6,6V84H66a6,6,0,0,0,0,12H90a5.9966,5.9966,0,0,0,6-6V66A5.9966,5.9966,0,0,0,90,60Z"/></g></svg>
        </span>
            </div>
          </div>
          <div class="grid-item">
            <div class="gallery">
              <img src="https://elanta.app/nazar/arter-demo-new/img/works/thumbnail/3.jpg" alt="">
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
      </div>
      <div class="right">
        <div class="grid-item">
          <div class="gallery">
            <img src="https://elanta.app/nazar/arter-demo-new/img/works/thumbnail/2.jpg" alt="">
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
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  display: flex;

  @media (max-width: 700px) {
    display: unset;

    & > * {
      width: 100% !important
    }
  }

  & > * {
    width: 50%;
    display: flex;
  }

  .right {
    @media (max-width: 700px) {
      padding: 0 15px;
    }

    .gallery {
      height: calc(100% - 30px);
    }
  }
  .grid-item {
    width: 100%
  }
}
</style>