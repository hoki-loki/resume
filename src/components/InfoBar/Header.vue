<script setup lang="ts">
import { ref } from "vue";

let openPhoto = ref(false);

</script>

<template>
  <div class="header">
    <div class="header-avatar" :class="{'active': openPhoto}">
      <div class="avatar-curtain" @click="openPhoto = !openPhoto">
        <img src="/public/person.jpg" alt="dude">
      </div>

      <div class="lamp-light">
        <div class="available-lamp"></div>
      </div>
    </div>

    <div class="name mb-10">
      <router-link :to="{name: 'home'}">
        Artur Carter
      </router-link>
    </div>

    <div class="sm-text">
      Front-end Deweloper <br>
      Ui/UX Designer,
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  height: 240px;
  padding: 30px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10000;
  background: linear-gradient(159deg, rgba(37, 37, 50, 0.98) 0%, rgba(35, 35, 45, 0.98) 100%);
  text-align: center;
  -webkit-box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);
  box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);
  width: 100%;

  .header-avatar {
    width: 90px;
    height: 90px;
    margin: 0 auto;

    @media (min-width: 1100px) {
      &.active {
        height: 100vh;
        position: absolute;
        width: 100vw;
        top: 0;
        left: 0;
        background: linear-gradient(159deg, rgb(45 45 58 / 59%) 0%, rgb(41 41 63 / 83%) 100%);

        .avatar-curtain {
          padding: 70px;

          &:active {
            transform: scale(1);
          }

          img {
            height: unset;
            width: unset;
            position: unset;
            border-radius: 0;
          }
        }
      }
    }

    .avatar-curtain {
      position: relative;
      width: 100%;
      height: 100%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      outline: inherit;
      -webkit-transition: 0.2s ease-in-out;
      transition: 0.2s ease-in-out;
      z-index: 0;
      cursor: pointer;

      &:active {
        transform: scale(0.91);
      }

      img {
        position: absolute;
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
        border-radius: 50%;
        z-index: 0;
      }
    }

    .lamp-light {
      position: relative;

      &:before {
        content: '';
        position: absolute;
        bottom: -1px;
        right: 1px;
        background: #fafafc;
        height: 23px;
        width: 23px;
        border-radius: 50%;
        -webkit-animation: puls 1s infinite;
        animation: puls 1s infinite;
      }

      .available-lamp {
        position: absolute;
        bottom: 3px;
        right: 5px;
        height: 15px;
        width: 15px;
        background: #FFC107;
        border-radius: 50%;
        z-index: 0;
        -webkit-transition: 0.4s ease-in-out;
        transition: 0.4s ease-in-out;

        &:before {
          content: '';
          position: absolute;
          height: 5px;
          width: 5px;
          right: -15px;
          top: 5px;
          opacity: 0;
          background: #191923;
          pointer-events: none;
          -webkit-transform: translateX(20px) rotate(45deg);
          transform: translateX(20px) rotate(45deg);
          -webkit-transition: 0.4s ease-in-out;
          transition: 0.4s ease-in-out;
          z-index: 99;
        }

        &:after {
          position: relative;
          content: 'I am available for freelance hire';
          width: 115px;
          display: block;
          padding: 5px 10px;
          top: -10px;
          left: 28px;
          font-size: 11px;
          font-weight: 200;
          color: #8c8c8e;
          -webkit-box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);
          box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);
          background: #191923;
          opacity: 0;
          pointer-events: none;
          -webkit-transform: translateX(20px);
          transform: translateX(20px);
          -webkit-transition: 0.4s ease-in-out;
          transition: 0.4s ease-in-out;
          text-align: left;
        }

        &:hover {
          &:after {
            left: 10px;
            opacity: 1;
          }
        }
      }
    }
  }

  .name {
    width: 100%;
    color: #fafafc;
    -webkit-transition: 0.4s ease-in-out;
    transition: 0.4s ease-in-out;
    font-weight: 700;
    user-select: text;
    cursor: pointer;
  }

  .sm-text {
    color: #5d5d5d;
    font-size: 11px;
    font-weight: 600;
  }
}
</style>