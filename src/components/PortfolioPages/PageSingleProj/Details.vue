<script setup lang="ts">
import General from "../../../helpers/general";

</script>

<template>
  <div class="details mb-30">
    <div class="container">
      <h3 class="container-title text-left">Project details</h3>
      <div class="cards">
        <div class="card">
          <h4 class="card-title">Description</h4>
          <div class="description mb-15">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt, nisl eget ultricies tincidunt, nisl elit lacinia
            tortor, eget lacinia nisl lorem eget nisl. Sed tincidunt, nisl
            eget ultricies tincidunt, nisl elit lacinia tortor, eget lacinia
            nisl lorem eget nisl.
          </div>
          <router-link :to="{name: 'behance'}" class="route-link">
            <div class="link">
              <span>read more</span>
              <svg id="Layer_1" viewBox="0 0 512 512" fill="#8c8c8c"
                   xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                <polygon points="160,128.4 192.3,96 352,256 352,256 352,256 192.3,416 160,383.6 287.3,256 "/>
            </svg>
            </div>
          </router-link>
        </div>
        <div class="card">
          <ul class="table w-full">
            <li>
              <h5>Order Date:</h5>
              <span>24.12.2022</span>
            </li>

            <li>
              <h5>Final Date:</h5>
              <span>12.03.2023</span>
            </li>

            <li>
              <h5>Status:</h5>
              <span>Completed</span>
            </li>

            <li>
              <h5>Client:</h5>
              <span>Envato Market</span>
            </li>

            <li @click="General.OpenGoogleMap('Striy')">
              <h5>Location:</h5>
                <span>Ukraine, Striy</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">


.cards {
  display: flex;
  gap: 2rem;
  
  @media (max-width: 1100px) {
    flex-direction: column;
  }

  & > :first-child {
    width: 70%;
  }

  & > :last-child {
    width: 30%;
    min-height: 100%;
    height: unset !important;
  }

  .card {
    height: calc(100% - 30px);
    text-align: start;

    @media (max-width: 1100px) {
      width: 100%;
    }

    .card-title {
      margin-top: 0;
    }

    .table {
      cursor: default;

      & > :last-child {
        cursor: pointer;
      }

      h5 {
        user-select: none;
        font-size: 13px
      }

      li {
        height: 100%;
      }
    }
  }
}
</style>