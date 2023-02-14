<template>
  <div class="project-cover mb-30">
    <div class="gallery">
      <img src="https://elanta.app/nazar/arter-demo-new/img/blog/2.jpg" alt="" class="art-a">
      <span class="item-hover">
            <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title/><g><path
                d="M30,0H6A5.9966,5.9966,0,0,0,0,6V30a6,6,0,0,0,12,0V12H30A6,6,0,0,0,30,0Z"/><path
                d="M90,0H66a6,6,0,0,0,0,12H84V30a6,6,0,0,0,12,0V6A5.9966,5.9966,0,0,0,90,0Z"/><path
                d="M30,84H12V66A6,6,0,0,0,0,66V90a5.9966,5.9966,0,0,0,6,6H30a6,6,0,0,0,0-12Z"/><path
                d="M90,60a5.9966,5.9966,0,0,0-6,6V84H66a6,6,0,0,0,0,12H90a5.9966,5.9966,0,0,0,6-6V66A5.9966,5.9966,0,0,0,90,60Z"/></g></svg>
        </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-cover {
  &:hover {
    .gallery img{
      transform: scale(1.05);

      .item-hover {
        opacity: 1;
      }
    }
  }

  .gallery {
    padding: 25%;
  }
}
</style>