<script setup lang="ts">
import Arrow from "../Decoration/Arrow.vue";
import { ref } from "vue";
import useGeneralStore from "../../store/general";
const store = useGeneralStore()

let carouser_container = ref<Element | null>(null);

const ScrollCarousel = async (btn: string) => {
  let w = window.innerWidth
  let el = carouser_container.value

  if (el) {
    let base_scroll = el.scrollLeft

    if (btn === 'prev') {
      await el.scrollTo({
        left: base_scroll - (w / 2),
        behavior: "smooth"
      })

    } else {
      el.scrollTo({
        left: base_scroll + (w / 2),
        behavior: "smooth"
      })
    }
  }
}

</script>

<template>
  <div class="container-carousel">
    <h1 class="container-title text-left">Recommendation</h1>
    <div class="scrollbar"  ref="carouser_container">
        <div class="cards">
          <div class="card" v-for="img of store.img_rec">
            <div class="titles mb-15">
              <span class="card-title">Paul Trueman</span> <br>
              <span class="sub-title">Template author</span>
            </div>
            <div class="image">
              <img :src="img" alt="">
            </div>
            <div class="description">
              Working with Artur has been a pleasure. Better yet - I alerted them of a minor issue before going to
              sleep.
              The issue was fixed the next morning. I couldn't ask for better support. Thank you Artur!
              This is easily a 5 star freelancer.
            </div>
            <div class="testimonial">
              <ul class="star-rate">
                <li class="icon">
                  <svg viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path
                  d="M29.895 12.52a1.943 1.943 0 0 0-1.549-1.319l-7.309-1.095-3.29-6.984C17.42 2.43 16.751 2 16 2s-1.42.43-1.747 1.122l-3.242 6.959-7.357 1.12c-.72.11-1.313.615-1.549
                  1.319a2.004 2.004 0 0 0 .465 2.046l5.321 5.446-1.257 7.676a1.984 1.984 0 0 0 .811 1.959 1.89 1.89 0 0 0 2.02.114l6.489-3.624 6.581 3.624a1.893 1.893 0 0 0 2.02-.114 1.982 1.982 0 0 0
                  .811-1.959l-1.259-7.686 5.323-5.436a2.004 2.004 0 0 0 .465-2.046z" fill="#d8eb2a" class="fill-000000"></path>
              </svg>
                </li>
                <li class="icon">
                  <svg viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path
                  d="M29.895 12.52a1.943 1.943 0 0 0-1.549-1.319l-7.309-1.095-3.29-6.984C17.42 2.43 16.751 2 16 2s-1.42.43-1.747 1.122l-3.242 6.959-7.357 1.12c-.72.11-1.313.615-1.549
                  1.319a2.004 2.004 0 0 0 .465 2.046l5.321 5.446-1.257 7.676a1.984 1.984 0 0 0 .811 1.959 1.89 1.89 0 0 0 2.02.114l6.489-3.624 6.581 3.624a1.893 1.893 0 0 0 2.02-.114 1.982 1.982 0 0 0
                  .811-1.959l-1.259-7.686 5.323-5.436a2.004 2.004 0 0 0 .465-2.046z" fill="#d8eb2a" class="fill-000000"></path>
              </svg>
                </li>
                <li class="icon">
                  <svg viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path
                  d="M29.895 12.52a1.943 1.943 0 0 0-1.549-1.319l-7.309-1.095-3.29-6.984C17.42 2.43 16.751 2 16 2s-1.42.43-1.747 1.122l-3.242 6.959-7.357 1.12c-.72.11-1.313.615-1.549
                  1.319a2.004 2.004 0 0 0 .465 2.046l5.321 5.446-1.257 7.676a1.984 1.984 0 0 0 .811 1.959 1.89 1.89 0 0 0 2.02.114l6.489-3.624 6.581 3.624a1.893 1.893 0 0 0 2.02-.114 1.982 1.982 0 0 0
                  .811-1.959l-1.259-7.686 5.323-5.436a2.004 2.004 0 0 0 .465-2.046z" fill="#d8eb2a" class="fill-000000"></path>
              </svg>
                </li>
                <li class="icon">
                  <svg viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path
                  d="M29.895 12.52a1.943 1.943 0 0 0-1.549-1.319l-7.309-1.095-3.29-6.984C17.42 2.43 16.751 2 16 2s-1.42.43-1.747 1.122l-3.242 6.959-7.357 1.12c-.72.11-1.313.615-1.549
                  1.319a2.004 2.004 0 0 0 .465 2.046l5.321 5.446-1.257 7.676a1.984 1.984 0 0 0 .811 1.959 1.89 1.89 0 0 0 2.02.114l6.489-3.624 6.581 3.624a1.893 1.893 0 0 0 2.02-.114 1.982 1.982 0 0 0
                  .811-1.959l-1.259-7.686 5.323-5.436a2.004 2.004 0 0 0 .465-2.046z" fill="#d8eb2a" class="fill-000000"></path>
              </svg>
                </li>
                <li class="icon">
                  <svg viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path
                  d="M29.895 12.52a1.943 1.943 0 0 0-1.549-1.319l-7.309-1.095-3.29-6.984C17.42 2.43 16.751 2 16 2s-1.42.43-1.747 1.122l-3.242 6.959-7.357 1.12c-.72.11-1.313.615-1.549
                  1.319a2.004 2.004 0 0 0 .465 2.046l5.321 5.446-1.257 7.676a1.984 1.984 0 0 0 .811 1.959 1.89 1.89 0 0 0 2.02.114l6.489-3.624 6.581 3.624a1.893 1.893 0 0 0 2.02-.114 1.982 1.982 0 0 0
                  .811-1.959l-1.259-7.686 5.323-5.436a2.004 2.004 0 0 0 .465-2.046z" fill="#d8eb2a" class="fill-000000"></path>
              </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
    <div class="pagination">
        <Arrow class="left" style="opacity: 0.4;" @click="ScrollCarousel('prev')" />
        <Arrow class="right" style="opacity: 0.4;" @click="ScrollCarousel('next')" />
    </div>
  </div>
</template>


<style scoped lang="scss">
.container-carousel {
  position: relative;

  .scrollbar {
    width: 100%;
    height: 100%;
    transition: 0.6s ease-in-out;
    padding: 0 0 25px;

    .cards {
      padding: 20px 0;
      display: flex;
      gap: 1rem;
      scroll-snap-type: x mandatory;

      .card {
        overflow: unset;
        text-align: start;
        min-width: 300px;

        .image {
          position: absolute;
          -o-object-fit: cover;
          object-fit: cover;
          right: 30px;
          overflow: hidden;
          top: -15px;
          width: 65px;
          height: 65px;
          border-radius: 50%;
          -webkit-box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
          box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
        }

        .card-title {
          font-size: 14px;
          font-weight: 600;
        }

        .testimonial {
          position: relative;
          overflow: hidden;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
          -ms-flex-line-pack: center;
          align-content: center;

          .star-rate {
            display: flex;
            -webkit-box-shadow: inset 0 3px 8px 0 rgb(15 15 20 / 20%);
            box-shadow: inset 0 3px 8px 0 rgb(15 15 20 / 20%);
            padding: 5px 15px;
            gap: 6px;
            font-size: 10px;
            margin-top: 15px;
            background: #20202a;
            border-radius: 30px;

            .icon {
              height: 15px;
              width: 13px;

              svg, path {
                fill: #FFC107
              }
            }
          }
        }
      }
    }
  }
}
</style>