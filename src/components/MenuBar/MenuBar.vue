<script setup lang="ts">
import {onMounted, reactive, ref, watchEffect} from "vue";
import Arrow from "../Decoration/Arrow.vue";
import { useEventsBus } from "../../helpers/bus";
import route from "./../../router";

let { emit, recieve } = useEventsBus()
let data = reactive({
  menu_bar: false,
  sub_menu_p: false,
  sub_menu_b: false,
  info_bar: false,
  activePage: 'home',
})
let titlePage = ref(route.currentRoute.value.meta.title);
const Hide = (value: any) => {
  data.info_bar = value
}

const Change = (value: string) => {
  if (value === 'menu_bar') data.menu_bar = !data.menu_bar
  if (value === 'sub_menu_b') data.sub_menu_p = !data.sub_menu_p
  else data.sub_menu_b = !data.sub_menu_b
}

onMounted(() => {
  watchEffect(() => {
    emit('menu_bar', data.menu_bar)

    titlePage.value = route.currentRoute.value.meta.title
  })

  recieve('info_bar', Hide);

})

</script>

<template>
  <div class="menu-bar" :class="{'active': data.menu_bar}">
    <div class="menu-bar-frame">
      <div class="menu-bar-header">
        <div class="menu-bar-btn" ref="bar_btn" @click="Change('menu_bar')" :class="{'hide': data.info_bar}"><span></span></div>
      </div>

      <div class="current-page">
        <span>{{ titlePage }}</span>
      </div>
      <div class="scroll-frame">
        <nav class="swupMenu" data-swup="1">
          <ul class="main-menu">
            <li class="menu-item" @click="Change( 'menu_bar')">
              <router-link :to="{name: 'home'}" >Home</router-link>
            </li>

            <li class="menu-item has-children" @click="data.sub_menu_b = false">

              <span @click="Change('sub_menu_b')" > Portfolio  <Arrow class="icon"/></span>

              <div class="sub-menu" :class="{'active': data.sub_menu_p}">
                <span class="menu-item" @click=" Change('menu_bar')">
                  <router-link :to="{name: 'page-2-col'}">2 column</router-link>
                </span>
                <span class="menu-item" @click="Change('menu_bar')">
                  <router-link :to="{name: 'page-3-col'}">3 column</router-link>
                </span>
                <span class="menu-item" @click=" Change('menu_bar')">
                  <router-link :to="{name: 'single-proj-1'}">Single project  1</router-link>
                </span>
                <span class="menu-item" @click=" Change('menu_bar')">
                  <router-link :to="{name: 'single-proj-2'}">Single project  2</router-link>
                </span>
              </div>
            </li>

            <li class="menu-item" @click="Change('menu_bar')">
              <router-link :to="{name: 'history'}">History</router-link>
            </li>
            <li class="menu-item"  @click="Change('menu_bar')">
              <router-link :to="{name: 'contact'}">Contact</router-link>
            </li>

            <li class="menu-item has-children" v-on:click="data.activePage = 'Blog'">
              <span @click="data.sub_menu_p = false; Change('sub_menu_p')">Blog<Arrow class="icon"/></span>
              <div class="sub-menu" :class="{'active': data.sub_menu_b}">
                <span class="menu-item" @click="Change('menu_bar')">
                  <router-link :to="{name: 'blog-2-col'}">2 column</router-link>
                </span>
                <span class="menu-item" @click="Change('menu_bar')">
                  <router-link :to="{name: 'blog-3-col'}">3 column</router-link>
                </span>
                <span class="menu-item" @click="Change('menu_bar')">
                  <router-link :to="{name: 'publication'}">Publication</router-link>
                </span>
              </div>
            </li>

            <li class="menu-item" @click="Change('menu_bar')">
              <router-link :to="{name: 'one-page'}">Open page</router-link>
            </li>
          </ul>
        </nav>

        <div class="language-change">
          <span>
            <router-link :to="{name: 'home'}">Fr</router-link>
          </span>
          <span class="active-lang">
            <router-link :to="{name: 'home'}">En</router-link>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu-bar {
  background: #20202a;
  width: 220px;
  height: calc(100vh - 30px);
  position: absolute;
  z-index: 99;
  right: -150px;
  top: 0;
  bottom: 0;
  -webkit-box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
  box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
  -webkit-transition: 0.55s ease-in-out;
  transition: 0.55s ease-in-out;

  @media (max-width: 920px) {
      position: absolute;
      right: -230px;
      width: 230px;
      height: 100vh;
  }

  &.active {
    -webkit-transform: translateX(-150px);
    transform: translateX(-150px);

    @media (max-width: 920px) {
      position: absolute;
      right: -230px;
      width: 300px;
      height: 100vh;

      .menu-bar-btn {
        -webkit-transform: translateX(0) !important;
        transform: translateX(0) !important;

        span {
          -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
        }
      }
    }

    .menu-bar-btn span {
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);

      &:before {
        -webkit-transform: translate(0px, 5px) rotate(-90deg);
        transform: translate(0px, 5px) rotate(-90deg);
      }

      &:after {
        -webkit-transform: translate(0px, -5px) rotate(-90deg);
        transform: translate(0px, -5px) rotate(-90deg);
      }
    }

    .current-page {
      opacity: 0 !important;
    }

    nav .menu-item {
      opacity: 1 !important;
      -webkit-transform: translateX(0) !important;
      transform: translateX(0) !important;
    }
  }

  .menu-bar-frame {
    position: relative;

    .menu-bar-header {
      width: 100%;
      height: 60px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 9;
      -webkit-box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);
      box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);
      background: linear-gradient(159deg, rgba(37, 37, 50, 0.98) 0%, rgba(35, 35, 45, 0.98) 100%);

      .menu-bar-btn {
        margin-top: -10px;
        display: inline-block;
        width: 15px;
        height: 12px;
        padding: 30px;
        cursor: pointer;

        &.hide {
          opacity: 0;
          pointer-events: none;
        }

        @media (max-width: 920px) {
          -webkit-transform: translateX(-80px);
          transform: translateX(-80px);
          -webkit-transition: 0.4s ease-in-out;
          transition: 0.4s ease-in-out;
        }

        &:hover {
          span:after, span:before, span {
            background: #fafafc !important;
          }
        }

        span {
          position: relative;
          margin: 5px 0 0;
        }

        span:before {
          top: -5px;
        }

        span:after {
          top: 5px;
        }

        span, span:after, span:before {
          content: "";
          display: block;
          width: 15px;
          height: 3px;
          border-radius: 1px;
          background: #8c8c8e;
          -webkit-transition: 0.4s ease-in-out;
          transition: 0.4s ease-in-out;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          position: absolute;
        }
      }
    }

    .current-page {
      width: 200px;
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
      color: #fafafc;
      position: absolute;
      overflow: hidden;
      top: 200px;
      opacity: 1;
      left: -62px;
      text-transform: uppercase;
      font-size: 11px;
      opacity: 1;
      letter-spacing: 1px;
      font-weight: 500;
      -webkit-transition: 0.4s ease-in-out;
      transition: 0.4s ease-in-out;

      span {
        visibility: visible;
        opacity: 1;
        display: block;
        color: #8c8c8e;
        font-size: 15px;
      }
    }

    .scroll-frame {
      width: 100%;
      height: calc(100vh - 30px);

      @media (max-width: 920px) {
        height: 100vh;
      }

      .swupMenu {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        height: 100%;
        position: relative;
        user-select: none;

        .main-menu {
          width: 100%;
          padding: 0;
          margin: 0 0 60px;

          .menu-item {
            width: 100%;
            list-style-type: none;
            -webkit-transition: 0.55s ease-in-out;
            transition: 0.55s ease-in-out;
            opacity: 0;
            -webkit-transform: translateX(60px);
            transform: translateX(60px);
            transition: 0.55s ease-in-out;
            margin-top: 8px;

            &:nth-child(1):not(.sub-menu span) {
              -webkit-transition-delay: 0.05s;
              transition-delay: 0.05s;

              a {
                color: #fafafc;
                text-shadow: 0 0 3px rgb(250 250 252 / 40%);
              }
            }

            &:hover {
              .icon {
                transform: rotate(90deg);
              }
            }

            a, span {
              padding: 7px 30px;
              display: inline-block;
              width: 100%;
              text-transform: uppercase;
              font-size: 12px;
              letter-spacing: 1px;
              font-weight: 600;
              color: #8c8c8e;
              -webkit-transition: 0.2s ease-in-out;
              transition: 0.2s ease-in-out;
              cursor: pointer;
              display: flex;
              justify-content: space-between;
              align-items: center;

              @media (max-width: 920px) {
                //font-size: 9px;
                font-weight: 500;
              }

              .icon {
                width: 15px;
                height: 15px;
                -webkit-transition: 0.4s ease-in-out;
                transition: 0.4s ease-in-out;
              }

              &:hover {
                color: #fafafc;
                text-shadow: 0 0 3px rgb(250 250 252 / 40%);
              }
            }

            .sub-menu {
              width: 100%;
              display: block;
              position: relative;
              overflow: hidden;
              pointer-events: none;
              -webkit-box-shadow: inset 0 3px 8px 0 rgb(15 15 20 / 20%);
              box-shadow: inset 0 3px 8px 0 rgb(15 15 20 / 20%);
              background: #20202a;
              -webkit-filter: brightness(95%);
              filter: brightness(95%);
              max-height: 0;
              -webkit-transition: max-height 0.6s ease-in-out;
              transition: max-height 0.6s ease-in-out;

              &.active {
                pointer-events: all;
                max-height: 500px;
              }

              span {
                padding: unset;
              }

              a {
                font-size: 11px;
                font-weight: 500;
              }
            }

            &.has-children {
              padding-left: 0;
              padding-right: 0;
              display: flex;
              flex-direction: column;

              @media (max-width: 920px) {
                span {
                  width: 220px;
                  display: flex;
                  font-size: 13px;
                }
              }

              &:nth-child(2) {
                -webkit-transition-delay: 0.1s;
                transition-delay: 0.1s;
              }
            }
          }
        }
      }

      .language-change {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        -webkit-box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);
        box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);
        background: linear-gradient(159deg, rgba(37, 37, 50, 0.98) 0%, rgba(35, 35, 45, 0.98) 100%);
        padding: 30px 26px;
        margin: 0;

        span {
          -webkit-box-shadow: inset 0 3px 8px 0 rgb(15 15 20 / 20%);
          box-shadow: inset 0 3px 8px 0 rgb(15 15 20 / 20%);
          background: #1e1e28;
          font-size: 10px;
          border-radius: 50%;
          height: 27px;
          width: 27px;
          display: flex;
          margin-bottom: 10px;
          color: #8c8c8e;

          &.active-lang {
            background-color: #FFC107;
            -webkit-box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
            box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
            color: #191923;
          }

          a {
            text-transform: uppercase;
            height: 100%;
            width: 100%;
            font-weight: 700;
            justify-content: center;
            display: flex;
            align-items: center;
            line-height: 25px;
            -webkit-transition: 0.4s ease-in-out;
            transition: 0.4s ease-in-out;

            &:first-child {
              visibility: visible;
              opacity: 1;

              &:not(.active-lang):hover {
                color: #d9d9d9;
              }
            }
          }
        }
      }
    }
  }
}
</style>