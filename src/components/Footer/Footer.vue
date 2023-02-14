<template>
  <div class="container-footer">
    <div class="brands">
      <div class="brand">
        <img src="https://elanta.app/nazar/arter-demo-new/img/brands/1.png" alt="">
      </div>
      <div class="brand">
        <img src="https://elanta.app/nazar/arter-demo-new/img/brands/2.png" alt="">
      </div>
      <div class="brand">
        <img src="https://elanta.app/nazar/arter-demo-new/img/brands/3.png" alt="">
      </div>
      <div class="brand">
        <img src="https://elanta.app/nazar/arter-demo-new/img/brands/1.png" alt="">
      </div>
    </div>
    <div class="footer">
      <span class="copy">© 2022 Artur Carter</span>
      <span class="author">Template author:  Sophia Marchenko</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container-footer {
  width: 100%;

  .brands {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    .brand {
      display: flex;
      margin-bottom: 30px;
      opacity: 0.6;
      -webkit-transition: 0.4s ease-in-out;
      transition: 0.4s ease-in-out;
      justify-content: center;

      @media (max-width: 920px) {
        display: flex;
        justify-content: center;
      }

      img {
        width: 130px;
        height: 130px;
      }
    }

    @media (max-width: 920px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .footer {
    width: 100%;
    padding: 17px 30px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);
    -webkit-box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);
    box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);
    font-size: 11px;
    color: #8c8c8e;
    -webkit-transition: 0.55s ease-in-out;
    transition: 0.55s ease-in-out;
    z-index: 9;
  }
}
</style>