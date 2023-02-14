<script setup lang="ts">
import {onMounted, ref} from "vue";

let words = ['web interfaces..', 'ios and android applications..', "design mocups..", "automation tools.."]
let wrap_text = ref<HTMLElement | null>(null)
let textArrayIndex = 0
let charIndex = 0;

const erase = () => {
  if (wrap_text.value && charIndex > 0) {
    wrap_text.value.textContent = words[textArrayIndex].slice(0, charIndex - 1)
    charIndex--
    setTimeout(erase, 90);
  } else {
    textArrayIndex++
    if (textArrayIndex > words.length - 1) {
      textArrayIndex = 0;
    }
    setTimeout(type, 1100)
  }
}
const type = () => {
  if (charIndex < words[textArrayIndex].length - 1 && wrap_text.value) {
    wrap_text.value.textContent += words[textArrayIndex].charAt(charIndex)
    charIndex++
    setTimeout(type, 120)
  } else {
    setTimeout(erase, 1000);
  }
}

onMounted(() => {
  erase()
})

</script>

<template>
  <div class="container-header">
    <div class="p-60-0 row">
      <div style="max-width: 100%; flex: 0 0 100%; width: 100%;">
        <div class="banner art-a">
          <div class="banner-back"></div>
          <div class="banner-overlay">
            <div class="banner-title">
              <h1 class="mb-15">
                Discover my Amazing <br>
                Art Space!
              </h1>
              <div class="code">
                <div class="txt-rotate flex">
                  <span>{{ '<' }}<i>code</i>{{ '>' }}</span>
                  I build
                  <div class="wrap">
                    <span ref="wrap_text"></span>
                    <span class="border-line"></span>
                  </div>
                  <span>{{ '</' }}<i>code</i>{{ '>' }}</span>
                </div>
              </div>
              <router-link :to="{name: 'single-proj-1'}" class="banner-btn">
                <div class="btn">Explore now</div>
              </router-link>
            </div>
            <div class="face">
              <img src="/public/person-2.png" alt="person">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.banner {
  .banner-back {
    content: '';
    position: absolute;
    z-index: 0;
    top: -30px;
    width: 90%;
    height: 30px;
    margin-left: 5%;
    -webkit-box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
    box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    background: rgba(30, 30, 40, 0.88);

    @media (max-width: 1400px) {
      display: none;
    }
  }

  .banner-overlay {

    .banner-title {

      @media (max-width: 920px) {
        & > * {
          justify-content: center;
          display: flex;
          text-align: center;
        }
      }

      .code {
        font-weight: 300;
        margin-bottom: 30px;

        @media (max-width: 920px) {
          .txt-rotate {
            justify-content: center;
            flex-wrap: wrap;
            width: 100%;
          }
        }

        i {
          font-style: normal;
          color: #FFC107;
        }

        .wrap {
          overflow: hidden;
          white-space: nowrap;
          display: flex;
          letter-spacing: .15em;
          margin-left: 10px;

          &:first-child {
            position: relative;
          }

          .border-line {
            border-right: .15em solid orange;
            max-height: 20px;
            animation: typing 3.5s steps(40, end),
            blink-caret .75s step-end infinite;
          }
        }
      }
    }

    .face {
      width: 390px;
      position: absolute;
      right: 30px;
      bottom: 0;

      @media (max-width: 1600px) {
        width: 360px;
      }
      @media (max-width: 1400px) {
        width: 320px;
      }
      @media (max-width: 1200px) {
        display: none;
      }
    }
  }
}
</style>