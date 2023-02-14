<template>
  <div class="container-prices mb-30">
    <h1 class="container-title">Price Plans</h1>
    <div class="cards">
      <div class="card">
        <div class="card-title">Starter Price</div>
        <div class="price">
          <span class="free">FREE</span>
        </div>
        <div class="description">
          <span>
            <svg viewBox="0 0 12.7 12.7" xmlns="http://www.w3.org/2000/svg" class="icon">
              <path d="m9.525 287.475-3.88 3.88-2.47-2.469-1.058 1.058 3.529 3.528 4.937-4.939z"
                    style="line-height:normal; fill: #FFC107" transform="translate(0 -284.3)"></path>
            </svg>
            Ui Design
          </span>

          <span>
            <svg viewBox="0 0 12.7 12.7" xmlns="http://www.w3.org/2000/svg" class="icon">
              <path d="m9.525 287.475-3.88 3.88-2.47-2.469-1.058 1.058 3.529 3.528 4.937-4.939z"
                    style="line-height:normal; fill: #FFC107" transform="translate(0 -284.3)"></path>
            </svg>
            Web Development
          </span>

          <span class="empty-item">
            <svg viewBox="0 0 36 36" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" class="empty"><g
              id="icons"><path d="M6.2 3.5 3.5 6.2c-.7.7-.7 1.9 0 2.7l9.2 9.2-9.2 9.2c-.7.7-.7 1.9 0 2.7l2.6 2.6c.7.7 1.9.7 2.7 0l9.2-9.2 9.2 9.2c.7.7
               1.9.7 2.7 0l2.6-2.6c.7-.7.7-1.9 0-2.7L23.3 18l9.2-9.2c.7-.7.7-1.9 0-2.7l-2.6-2.6c-.7-.7-1.9-.7-2.7 0L18 12.7 8.8 3.5c-.7-.7-1.9-.7-2.6 0z" id="close_1_"
                               fill="#f29327" class="fill-222a30"></path></g>
            </svg>
            Logo design
          </span>

          <span class="empty-item">
             <svg viewBox="0 0 36 36" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" class="empty"><g
                 id="icons"><path d="M6.2 3.5 3.5 6.2c-.7.7-.7 1.9 0 2.7l9.2 9.2-9.2 9.2c-.7.7-.7 1.9 0 2.7l2.6 2.6c.7.7 1.9.7 2.7 0l9.2-9.2 9.2 9.2c.7.7
                  1.9.7 2.7 0l2.6-2.6c.7-.7.7-1.9 0-2.7L23.3 18l9.2-9.2c.7-.7.7-1.9 0-2.7l-2.6-2.6c-.7-.7-1.9-.7-2.7 0L18 12.7 8.8 3.5c-.7-.7-1.9-.7-2.6 0z" id="close_1_"
                                   fill="#f29327" class="fill-222a30"></path></g>
                </svg>
            SEO optimization
          </span>

          <span class="empty-item">
             <svg viewBox="0 0 36 36" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" class="empty"><g
                 id="icons"><path d="M6.2 3.5 3.5 6.2c-.7.7-.7 1.9 0 2.7l9.2 9.2-9.2 9.2c-.7.7-.7 1.9 0 2.7l2.6 2.6c.7.7 1.9.7 2.7 0l9.2-9.2 9.2 9.2c.7.7
                  1.9.7 2.7 0l2.6-2.6c.7-.7.7-1.9 0-2.7L23.3 18l9.2-9.2c.7-.7.7-1.9 0-2.7l-2.6-2.6c-.7-.7-1.9-.7-2.7 0L18 12.7 8.8 3.5c-.7-.7-1.9-.7-2.6 0z" id="close_1_"
                                   class="fill-222a30"></path></g>
                </svg>
            Wordpress integration
          </span>

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
        <span class="asterisk">*Free only when ordering paid services</span>
      </div>
      <div class="card popular-price">
        <div class="card-title">Hourly payment</div>
        <div class=""></div>
        <div class="price">
          <span class="payment">29</span>
        </div>
        <div class="description">
          <span>
            <svg viewBox="0 0 12.7 12.7" xmlns="http://www.w3.org/2000/svg" class="icon">
              <path d="m9.525 287.475-3.88 3.88-2.47-2.469-1.058 1.058 3.529 3.528 4.937-4.939z"
                    style="line-height:normal; fill: #FFC107" transform="translate(0 -284.3)"></path>
            </svg>
            Ui Design
          </span>

          <span>
            <svg viewBox="0 0 12.7 12.7" xmlns="http://www.w3.org/2000/svg" class="icon">
              <path d="m9.525 287.475-3.88 3.88-2.47-2.469-1.058 1.058 3.529 3.528 4.937-4.939z"
                    style="line-height:normal; fill: #FFC107" transform="translate(0 -284.3)"></path>
            </svg>
            Web Development
          </span>
          <span>
              <svg viewBox="0 0 12.7 12.7" xmlns="http://www.w3.org/2000/svg" class="icon">
              <path d="m9.525 287.475-3.88 3.88-2.47-2.469-1.058 1.058 3.529 3.528 4.937-4.939z"
                    style="line-height:normal; fill: #FFC107" transform="translate(0 -284.3)"></path>
            </svg>
            Logo design
          </span>
          <span class="empty-item">
             <svg viewBox="0 0 36 36" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" class="empty"><g
                 id="icons"><path d="M6.2 3.5 3.5 6.2c-.7.7-.7 1.9 0 2.7l9.2 9.2-9.2 9.2c-.7.7-.7 1.9 0 2.7l2.6 2.6c.7.7 1.9.7 2.7 0l9.2-9.2 9.2 9.2c.7.7
                  1.9.7 2.7 0l2.6-2.6c.7-.7.7-1.9 0-2.7L23.3 18l9.2-9.2c.7-.7.7-1.9 0-2.7l-2.6-2.6c-.7-.7-1.9-.7-2.7 0L18 12.7 8.8 3.5c-.7-.7-1.9-.7-2.6 0z" id="close_1_"
                                   fill="#f29327" class="fill-222a30"></path></g>
                </svg>
            SEO optimization
          </span>
          <span class="empty-item">
             <svg viewBox="0 0 36 36" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" class="empty"><g
                 id="icons"><path d="M6.2 3.5 3.5 6.2c-.7.7-.7 1.9 0 2.7l9.2 9.2-9.2 9.2c-.7.7-.7 1.9 0 2.7l2.6 2.6c.7.7 1.9.7 2.7 0l9.2-9.2 9.2 9.2c.7.7
                  1.9.7 2.7 0l2.6-2.6c.7-.7.7-1.9 0-2.7L23.3 18l9.2-9.2c.7-.7.7-1.9 0-2.7l-2.6-2.6c-.7-.7-1.9-.7-2.7 0L18 12.7 8.8 3.5c-.7-.7-1.9-.7-2.6 0z" id="close_1_"
                                   class="fill-222a30"></path></g>
                </svg>
            Wordpress integration
          </span>
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
        <div class="card-title">Full time</div>
        <div class="price">
          <span class="payment">2999</span>
        </div>
        <div class="description">
          <span>
            <svg viewBox="0 0 12.7 12.7" xmlns="http://www.w3.org/2000/svg" class="icon">
              <path d="m9.525 287.475-3.88 3.88-2.47-2.469-1.058 1.058 3.529 3.528 4.937-4.939z"
                    style="line-height:normal; fill: #FFC107" transform="translate(0 -284.3)"></path>
            </svg>
            Ui Design
          </span>

          <span>
            <svg viewBox="0 0 12.7 12.7" xmlns="http://www.w3.org/2000/svg" class="icon">
              <path d="m9.525 287.475-3.88 3.88-2.47-2.469-1.058 1.058 3.529 3.528 4.937-4.939z"
                    style="line-height:normal; fill: #FFC107" transform="translate(0 -284.3)"></path>
            </svg>
            Web Development
          </span>
          <span>
              <svg viewBox="0 0 12.7 12.7" xmlns="http://www.w3.org/2000/svg" class="icon">
              <path d="m9.525 287.475-3.88 3.88-2.47-2.469-1.058 1.058 3.529 3.528 4.937-4.939z"
                    style="line-height:normal; fill: #FFC107" transform="translate(0 -284.3)"></path>
            </svg>
            Logo design
          </span>
          <span>
             <svg viewBox="0 0 12.7 12.7" xmlns="http://www.w3.org/2000/svg" class="icon">
              <path d="m9.525 287.475-3.88 3.88-2.47-2.469-1.058 1.058 3.529 3.528 4.937-4.939z"
                    style="line-height:normal; fill: #FFC107" transform="translate(0 -284.3)"></path>
            </svg>
            SEO optimization
          </span>
          <span>
         <svg viewBox="0 0 12.7 12.7" xmlns="http://www.w3.org/2000/svg" class="icon">
              <path d="m9.525 287.475-3.88 3.88-2.47-2.469-1.058 1.058 3.529 3.528 4.937-4.939z"
                    style="line-height:normal; fill: #FFC107" transform="translate(0 -284.3)"></path>
            </svg>
            Wordpress integration
          </span>
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
.container-prices {
  .cards {
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);

    .card:nth-child(2) {
      -webkit-transform: scale(1.03);
      transform: scale(1.03);
    }

    @media (max-width: 1300px) {
      .card:nth-child(2) {
        -webkit-transform: scale(1.04);
        transform: scale(1.04);
      }
    }

    @media (max-width: 1050px) {
      grid-template-columns: repeat(1, 1fr);
    }

    .card {
      .card-title {
        font-weight: 700;
        font-size: 13px;
        letter-spacing: 1px;
        margin-bottom: 30px;
      }

      .price {
        color: #FFC107;
        font-weight: 800;
        font-size: 29px;
        letter-spacing: 2px;
        position: relative;
        margin-bottom: 30px;

        span {
          position: relative;

          &.free:after {
            content: '*';
            color: #FFC107;
            font-size: 15px;
            opacity: 0.4;
            position: absolute;
            top: 0;
            right: -10px;
          }

          &.payment:after {
            content: 'h';
            color: #bebebe;
            --font-size: 12px;
            font-size: var(--font-size);
            font-weight: 500;
            opacity: 0.6;
            position: absolute;
            bottom: 5px;
            right: -11px;
          }

          &.payment:before {
            content: '$';
            color: #bebebe;
            --font-size: 12px;
            font-size: var(--font-size);
            font-weight: 500;
            opacity: 0.6;
            position: absolute;
            bottom: 5px;
            left: -11px;
          }
        }
      }

      .description {
        display: flex;
        flex-direction: column;
        gap: 15px;

        span {
          display: flex;
          text-align: center;
          gap: 5px;
          letter-spacing: 0.5px;
          width: 100%;
          justify-content: center;

          svg, path {
            height: 15px;
            width: 15px;
            fill: #FFC107
          }
        }
      }

      .route-link {
        margin: 35px auto 0;
      }
    }
  }
}
</style>