<script setup lang="ts">
import {onMounted} from "vue";
let progresses = {
  line_progress: {
    e1: {
      percent: 90,
      value: 'html'
    },

    e2: {
      percent: 95,
      value: 'CSS'
    },

    e3: {
      percent: 75,
      value: 'Js'
    },

    e4: {
      percent: 87,
      value: 'Vue'
    },

    e5: {
      percent: 30,
      value: 'PHP'
    },
  },
  circle_progress: {
    e1: {
      percent: 73,
      value: 'French'
    },
    e2: {
      percent: 48,
      value: 'English'
    },
    e3: {
      percent: 91,
      value: 'Spanish'
    },
  }
}

const setProgress = async () => {
  let l = document.querySelectorAll<HTMLElement>('.progress-line');
  let c = document.querySelectorAll<HTMLElement>('.progress-circle');

  await c.forEach((e, i) => {
    let r = e.r.baseVal.value;
    let circumference = 2 * Math.PI * r
    e.style.strokeDasharray = `${circumference}, ${circumference}`
    e.style.strokeDashoffset = circumference.toString()

    let percent_value = Object.values(progresses.circle_progress).map((e: any) => e.percent)
    let p = percent_value[i] as number

    let offset = circumference - p / 100 * circumference
    e.style.strokeDashoffset = offset.toString()
    return e.style.strokeDashoffset
  })

  l.forEach((e, i) => {
    let percent_value = Object.values(progresses.line_progress).map((e: any) => e.percent)

    e.style.width = percent_value[i] + `%`
  })
}

onMounted(() => {
  setProgress()
})
</script>

<template>
  <div class="circle_progress">
    <div class="element" v-for="data of progresses.circle_progress" :key="data.id">
      <div class="circle">
        <svg viewBox="0 0 20 20">
          <circle class="bg" fill="transparent" stroke-width="1.5" stroke="#191919" cx="10" cy="10"
                  r="8"></circle>
          <circle class="progress-circle" fill="transparent" stroke-width="1.5" stroke="#ffc107" cx="10"
                  cy="10" r="8"></circle>
        </svg>
        <span>{{ data.percent }}%</span>
      </div>
      <span class="element-value">{{ data.value }}</span>
    </div>
    <div class="ls-divider"></div>
  </div>
  <div class="line-progress">
    <div class="hard-skills" v-for="skill of progresses.line_progress">
      <span>{{ skill.value }}</span>
      <div class="lineprog">
        <span>{{ skill.percent }} %</span>
        <line class="progress-line"></line>
        <line class="bg" style="background: rgb(25, 25, 25); width: 100%;"></line>
      </div>
    </div>
    <div class="ls-divider"></div>
  </div>
</template>

<style scoped lang="scss">
.circle_progress {
  display: flex;
  flex-wrap: wrap;

  .element {
    text-align: center;
    width: calc(100% / 3);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 0 10px;

    .circle {
      transition: 0.6s ease-in-out;

      &:hover {
        transform: scale(1.10);

        .progress-circle {
          transform: rotate(270deg);
          stroke: #f1b459;
        }
      }

      .bg {
        stroke-dashoffset: 100%;
      }

      .progress-circle {
        transition: 0.4s ease-in-out, transform 0.67s ease-in-out;
        transform-origin: center;
      }

      span {
        position: absolute;
        left: 50%;
        top: 30px;
        padding: 0;
        margin: 0;
        transform: translate(-50%, -50%);
        font-size: 11px;
        color: #8c8c8e;
        font-weight: 100;
        font-family: "Poppins", sans-serif;
      }
    }

    .element-value {
      font-size: 13px;
      font-weight: 400;
    }
  }
}
.line-progress {
  display: flex;
  flex-direction: column;
  gap: 1.3rem;

  .hard-skills {
    position: relative;

    &:hover {
      .progress-line {
        width: 100% !important;
      }
    }

    span:not(.lineprog span) {
      font-size: 14px;
    }

    .lineprog {
      position: relative;
      margin-top: 4px;

      &:hover {
        .progress-line {
          width: 100%;
        }
      }

      span {
        position: absolute;
        bottom: 10px;
        right: 0;
        font-weight: 100;
        font-family: 'Poppins', sans-serif;
        color: #5d5d5d;
        font-size: 13px;
      }

      line {
        display: flex;
        height: 4px;

        &.progress-line {
          transition: 0.4s ease-in-out;
          position: absolute;
          top: 0;
          left: 0;
          background: #FFC107;
        }
      }
    }
  }
}

</style>