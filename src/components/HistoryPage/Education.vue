<script setup lang="ts">
import Arrow from "../Decoration/Arrow.vue";

</script>
<template>
  <div class="education-section timeline">
    <h4 class="section-title">Education</h4>
    <div class="cards">
      <div class="card">
        <div class="card-mark-light"></div>
        <div class="card-mark"></div>

        <div class="card-header">
          <div class="card-left-side">
            <h1 class="card-title">University of toronto</h1>
            <span class="sub-title">Student</span>
          </div>
          <div class="card-right-side">
            <div class="date">jan 2018 - may 2020</div>
          </div>

        </div>
        <div class="description">
          Dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat
          iure tempora laudantium ipsa ad debitis unde?
          Iste voluptatibus minus veritatis qui ut.
        </div>
        <router-link :to="{name: 'home'}" class="route-link">
          <div class="link">
            <span>DIPLOME</span>
            <Arrow class="arrow"/>
          </div>
        </router-link>
      </div>
      <div class="card">
        <div class="card-mark-light"></div>
        <div class="card-mark"></div>

        <div class="card-header">
          <div class="card-left-side">
            <h1 class="card-title">Arter design school</h1>
            <span class="sub-title">Student</span>
          </div>
          <div class="card-right-side">
            <div class="date">jan 2018 - may 2020</div>
          </div>

        </div>
        <div class="description">
          Consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?
        </div>
      </div>
      <div class="card">
        <div class="card-mark-light"></div>
        <div class="card-mark"></div>

        <div class="card-header">
          <div class="card-left-side">
            <h1 class="card-title">Web developer courses</h1>
            <span class="sub-title">Student</span>
          </div>
          <div class="card-right-side">
            <div class="date">jan 2018 - may 2020</div>
          </div>

        </div>
        <div class="description">
          Dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.
        </div>
        <router-link :to="{name: 'home'}" class="route-link">
          <div class="link">
            <span>LICENCE</span>
            <Arrow class="arrow"/>
          </div>
        </router-link>
      </div>
      <div class="card">
        <div class="card-mark-light"></div>
        <div class="card-mark"></div>
        <div class="card-header">
          <div class="card-left-side">
            <h1 class="card-title">Academy of Art University</h1>
            <span class="sub-title">Student</span>
          </div>
          <div class="card-right-side">
            <div class="date">jan 2018 - may 2020</div>
          </div>

        </div>
        <div class="description">
          Ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum.
        </div>
        <router-link :to="{name: 'home'}" class="route-link">
          <div class="link">
            <span>CERTIFICATE</span>
            <Arrow class="arrow"/>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>