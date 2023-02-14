<template>
  <div class="container-frames m-30">
    <div class="row">
      <div class="col">
        <div class="counter-frame">
          <div class="title-count">10+</div>
          <div class="title-container">Years Experience</div>
        </div>
      </div>

      <div class="col">
        <div class="counter-frame">
          <div class="title-count">143</div>
          <div class="title-container">Completed Projects</div>
        </div>
      </div>

      <div class="col">
        <div class="counter-frame">
          <div class="title-count">114</div>
          <div class="title-container">Years Experience</div>
        </div>
      </div>

      <div class="col">
        <div class="counter-frame">
          <div class="title-count">20+</div>
          <div class="title-container">Honors and Awards</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container-frames {
  .row {
    justify-content: space-between;

    @media (max-width: 1100px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    .col {
      @media (max-width: 1100px) {
        justify-content: center;
        display: flex;
      }

      .counter-frame {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin-bottom: 30px;
        position: relative;
        gap: 1rem;

        .title-count {
          color: #FFC107;
          font-weight: 700;
          font-size: 22px;
          letter-spacing: 0.9px;
          font-family: "Poppins", sans-serif;

          @media (max-width: 420px) {
            font-size: 20px;
          }
        }

        .title-container {
          font-size: 13px;
          color: rgba(231, 231, 231, 0.9490196078);
          font-weight: 600;

          @media (max-width: 420px) {
            font-size: 11px;
          }
        }
      }
    }
  }
}
</style>