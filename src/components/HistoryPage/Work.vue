<script setup lang="ts">
import Arrow from "../Decoration/Arrow.vue";
</script>

<template>
  <div class="work-history timeline">
    <h4 class="section-title">Work History</h4>
    <div class="cards">
      <div class="card">
        <div class="card-mark-light"></div>
        <div class="card-mark"></div>

        <div class="card-header">
          <div class="card-left-side">
            <h1 class="card-title">Envato</h1>
            <span class="sub-title">Template author</span>
          </div>
          <div class="card-right-side">
            <div class="date">jan 2018 - may 2020</div>
          </div>

        </div>
        <div class="description">
          Placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.
        </div>
      </div>
      <div class="card">
        <div class="card-mark-light"></div>
        <div class="card-mark"></div>

        <div class="card-header">
          <div class="card-left-side">
            <h1 class="card-title">Themeforest</h1>
            <span class="sub-title">Student</span>
          </div>
          <div class="card-right-side">
            <div class="date">jan 2018 - may 2020</div>
          </div>

        </div>
        <div class="description">
          Adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?
        </div>

        <router-link :to="{name: 'home'}" class="route-link">
          <div class="link">
            <span>RECOMMENDATION</span>
            <Arrow class="arrow"/>
          </div>
        </router-link>

      </div>
      <div class="card">
        <div class="card-mark-light"></div>
        <div class="card-mark"></div>

        <div class="card-header">
          <div class="card-left-side">
            <h1 class="card-title">Envato market</h1>
            <span class="sub-title">Template author</span>
          </div>
          <div class="card-right-side">
            <div class="date">jan 2018 - may 2020</div>
          </div>

        </div>
        <div class="description">
          Consectetur adipisicing elit. Excepturi, obcaecati, quisquam id molestias eaque asperiores voluptatibus cupiditate error assumenda delectus odit similique
          earum voluptatem doloremque dolorem ipsam quae rerum quis. Odit, itaque, deserunt corporis vero ipsum nisi eius odio natus ullam provident pariatur temporibus quia eos
          repellat consequuntur perferendis enim amet quae quasi repudiandae sed quod veniam dolore possimus rem voluptatum eveniet eligendi quis fugiat aliquam sunt similique aut adipisci.
        </div>
        <router-link :to="{name: 'home'}" class="route-link">
          <div class="link">
            <span>RECOMMENDATION</span>
            <Arrow class="arrow"/>
          </div>
        </router-link>
      </div>
      <div class="card">
        <div class="card-mark-light"></div>
        <div class="card-mark"></div>

        <div class="card-header">
          <div class="card-left-side">
            <h1 class="card-title">SoftService company</h1>
            <span class="sub-title">Student</span>
          </div>
          <div class="card-right-side">
            <div class="date">jan 2018 - may 2020</div>
          </div>

        </div>
        <div class="description">
          Dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum.
        </div>
        <router-link :to="{name: 'home'}" class="route-link">
          <div class="link">
            <span>RECOMMENDATION</span>
            <Arrow class="arrow"/>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
