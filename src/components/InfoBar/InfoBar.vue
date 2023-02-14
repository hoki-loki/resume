<script setup lang="ts">
import {onMounted, reactive, ref, watchEffect} from "vue";
import Progress from "./Progress.vue";
import Social from "./Social.vue";
import { useEventsBus } from "../../helpers/bus";
import KnowledgeList from "./KnowledgeList.vue";
import Header from "./Header.vue";
import Info from "./Info.vue";
import CV from "./CV.vue";
let { emit, recieve } = useEventsBus()

let data = reactive({
  infoBarMobile: false,
  MenuBarV: false,
})
let info_btn = ref<HTMLElement | null>(null)

const Hide = (value: any) => {
  data.MenuBarV = value
}

onMounted(() => {
  watchEffect(() => {
    emit('info_bar', data.infoBarMobile);
  })

  recieve('menu_bar', Hide);
})

</script>

<template>
  <div class="info-bar" :class="{'active': data.infoBarMobile}">
    <div class="info-bar-frame">
      <div class="info-bar-header">
        <div class="info-bar-btn btn" @click="data.infoBarMobile = !data.infoBarMobile" ref="info_btn" :class="{'hide': data.MenuBarV}"><span>...</span></div>
      </div>

      <Header />
      <div class="scrollbar">
        <div class="scroll-content">
         <Info />

          <Progress />
          <KnowledgeList />
          <CV />
        </div>
      </div>

      <Social />
    </div>
  </div>
</template>

<style scoped lang="scss">
.info-bar {
  background: #20202a;
  width: 290px;
  min-width: 290px;
  height: calc(100vh - 30px);
  position: relative;
  z-index: 999;
  -webkit-box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
  box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
  -webkit-transition: 0.55s ease-in-out;
  transition: 0.55s ease-in-out;
  user-select: none;

  @media (max-width: 920px) {
    position: absolute;
    left: -310px;
    width: 290px;
    height: 100vh;

    &.active {
      -webkit-transform: translateX(308px);
      transform: translateX(308px);

      .info-bar-btn {
        -webkit-transform: translateX(0) !important;
        transform: translateX(0) !important;
      }
    }
  }

  .info-bar-frame {
    padding: 0 30px;
    height: 100%;
    font-family: 'Ubuntu', sans-serif;

    .info-bar-header {
      width: 100%;
      height: 70px;
      -webkit-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      position: absolute;
      left: 20px;
      top: 0;
      z-index: 999999999999;
      display: none;

      @media (max-width: 920px) {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
      }

      .info-bar-btn {
        margin-left: auto;
        margin-top: -10px;
        display: inline-block;
        pointer-events: all;
        padding: 0 30px;
        font-size: 19px;
        color: #8c8c8e;

        span {
          transform: rotate(90deg);
          display: inline-block;
        }

        &.hide {
          opacity: 0;
          pointer-events: none;
        }

        @media (max-width: 920px) {
          -webkit-transform: translateX(70px);
          transform: translateX(70px);
          -webkit-transition: 0.4s ease-in-out;
          transition: 0.4s ease-in-out;

          &.hide {
            opacity: 0;
            pointer-events: none;
          }
        }
      }
    }

    .scrollbar {
      transition: 0.4s ease-in-out;
      transform: translateZ(180px);

      .scroll-content {
        padding: 250px 0 70px;
        color: #d9d9d9;
        gap: 30px;
        display: flex;
        flex-direction: column;

      }
    }

  }
}
</style>