<script setup lang="ts">
import InfoBar from "./components/InfoBar/InfoBar.vue";
import MenuBar from "./components/MenuBar/MenuBar.vue";
import {useEventsBus} from "./helpers/bus";
import {onMounted, reactive, ref} from "vue";

let {recieve} = useEventsBus();

let showCurtain = reactive({
  initialV: false,
  changedV: false
})

const changeCurtain = (value: any) => {
  showCurtain.changedV = value

}

recieve('info_bar', changeCurtain);
recieve('menu_bar', changeCurtain);

</script>

<template>
  <div class="mobile-app-bar"></div>
  <div class="app-wrapper">
    <div class="app-container">
      <InfoBar/>
      <div class="content" :class="{ 'active': showCurtain.changedV }">
        <div class="curtain" :class="{ 'active': showCurtain.changedV }"></div>
        <div class="top-pg">
          <div class="top-bg-overlay"></div>
        </div>
        <div class="transition-fade">
          <div class="scrollbar" tabindex="-1">
            <div class="scroll-content">
              <div class="container-fluid">
                <router-view></router-view>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MenuBar/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.mobile-app-bar {
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 60px;
  background: #20202a;
  -webkit-box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
  box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
  padding: 0 30px;
  display: none;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  @media (max-width: 920px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
}


.app-wrapper {
  max-width: 1740px;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  background-size: cover;
  background: #1e1e28;
  -webkit-box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
  box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);

  @media (max-width: 920px) {
    border-radius: 0;
    height: 100vh;
  }

  .app-container {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    left: 0;

    @media (max-width: 920px) {
      width: 100%;
    }

    .content {
      position: relative;
      overflow: hidden;
      width: 100vw;
      height: calc(100vh - 30px);
      padding-right: 80px;
      -webkit-transition: 0.55s ease-in-out;
      transition: 0.55s ease-in-out;

      @media (max-width: 920px) {
        height: 100vh;
        padding-right: 0;
        padding-top: 70px;
      }

      @media (min-width: 920px) {
        &.active {
          -webkit-transform: translateX(-150px);
          transform: translateX(-170px);
        }
      }

      .curtain {
        background: rgba(30, 30, 40, 0.88);
        position: absolute;
        z-index: 90;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        opacity: 0;
        -webkit-transition: 0.55s ease-in-out;
        transition: 0.55s ease-in-out;

        &.active {
          pointer-events: all;
          opacity: 0.7;
        }
      }

      .top-pg {
        position: absolute;
        width: 100%;
        top: 0;
        background-position: center;
        height: 400px;
        background-size: cover;
        background-image: url("../../../for-portfolio/resume-portfolio/public/bg.jpg");

        .top-bg-overlay {
          position: relative;
          height: 100%;
          width: 100%;
          background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(30, 30, 40, 0.93)), color-stop(70%, rgba(30, 30, 40, 0.96)), color-stop(80%, rgba(30, 30, 40, 0.99)), to(#1e1e28));
          background-image: linear-gradient(180deg, rgba(30, 30, 40, 0.93) 0%, rgba(30, 30, 40, 0.96) 70%, rgba(30, 30, 40, 0.99) 80%, #1e1e28 100%);
        }
      }

      .transition-fade {
        -webkit-transition: 0.55s ease-in-out;
        transition: 0.55s ease-in-out;
        opacity: 1;
        height: 100%;
      }
    }
  }
}
</style>
