<template>
  <div class="container-services mb-30">
    <h1 class="container-title mb-30">My Services</h1>
    <div class="cards">
      <div class="card">
        <div class="card-title mb-15">Web Development</div>
        <div class="description mb-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi
          deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.
        </div>

        <router-link :to="{name: 'contact'}" class="route-link">
          <div class="link">
            <span>order now</span>
            <svg id="Layer_1" viewBox="0 0 512 512" fill="#8c8c8c"
                 xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                <polygon points="160,128.4 192.3,96 352,256 352,256 352,256 192.3,416 160,383.6 287.3,256 "/>
            </svg>
          </div>
        </router-link>
      </div>
      <div class="card">
        <div class="card-title mb-15">UI/UX Design</div>
        <div class="description mb-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi
          deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.
        </div>

        <router-link :to="{name: 'contact'}" class="route-link">
          <div class="link">
            <span>order now</span>
            <svg id="Layer_1" viewBox="0 0 512 512" fill="#8c8c8c"
                 xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                <polygon points="160,128.4 192.3,96 352,256 352,256 352,256 192.3,416 160,383.6 287.3,256 "/>
            </svg>
          </div>
        </router-link>
      </div>
      <div class="card">
        <div class="card-title mb-15">Sound Design</div>
        <div class="description mb-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi
          deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.
        </div>

        <router-link :to="{name: 'contact'}" class="route-link">
          <div class="link">
            <span>order now</span>
            <svg id="Layer_1" viewBox="0 0 512 512" fill="#8c8c8c"
                 xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                <polygon points="160,128.4 192.3,96 352,256 352,256 352,256 192.3,416 160,383.6 287.3,256 "/>
            </svg>
          </div>
        </router-link>
      </div>
      <div class="card">
        <div class="card-title mb-15">Game Design</div>
        <div class="description mb-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi
          deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.
        </div>

        <router-link :to="{name: 'contact'}" class="route-link">
          <div class="link">
            <span>order now</span>
            <svg id="Layer_1" viewBox="0 0 512 512" fill="#8c8c8c"
                 xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                <polygon points="160,128.4 192.3,96 352,256 352,256 352,256 192.3,416 160,383.6 287.3,256 "/>
            </svg>
          </div>
        </router-link>
      </div>
      <div class="card">
        <div class="card-title mb-15">Advertising</div>
        <div class="description mb-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi
          deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.
        </div>

        <router-link :to="{name: 'contact'}" class="route-link">
          <div class="link">
            <span>order now</span>
            <svg id="Layer_1" viewBox="0 0 512 512" fill="#8c8c8c"
                 xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                <polygon points="160,128.4 192.3,96 352,256 352,256 352,256 192.3,416 160,383.6 287.3,256 "/>
            </svg>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container-services {

  .cards {
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 1100px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 800px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>