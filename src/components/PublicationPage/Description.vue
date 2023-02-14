<template>
  <div class="cards mb-30">
    <div class="card">
      <div class="title">
        <i>
          Consectetur adipisicing elit. Magni debitis nemo, minus aut tempora impedit quis quam omnis, odit saepe ipsa
          sunt magnam culpa quisquam iusto consectetur necessitatibus. Tenetur, eligendi!

        </i>
      </div>
      <p class="sub-title">
        Vero praesentium voluptatibus repellendus, delectus harum. Necessitatibus temporibus, veritatis sapiente
        laudantium eius rem dolore voluptas porro assumenda quam ea earum ad dolor dolores ut ipsam optio!
        Numquam dolore quidem sequi eum placeat voluptatum, assumenda et culpa iure nemo vero animi mollitia facere
        fuga sit debitis doloremque quo tempore nesciunt voluptates cum. Est, labore pariatur cupiditate
        non alias officia ad nihil animi itaque soluta quo perferendis vero libero ex. Iste ipsam eaque veniam facilis
        architecto unde, quibusdam accusamus culpa cumque delectus deserunt nemo saepe minima.
      </p>
      <ul class="custom-list">
        <li>Doloribus recusandae</li>
        <li>Doloribus recusandae</li>
        <li>Doloribus recusandae</li>
        <li>Doloribus recusandae</li>
        <li>Doloribus recusandae</li>
      </ul>
      <p class="sub-title">
        Doloribus recusandae vel odio laboriosam, officia, neque ad. Eius porro, quas adipisci mollitia similique
        possimus ex odio eum harum eos ut optio architecto eveniet corporis nostrum beatae impedit,
        iste officia tempora sapiente aut, distinctio numquam inventore et! Ducimus quasi ullam saepe aliquid aut minus
        molestiae nam. Dolor consequuntur cum consectetur ducimus obcaecati perspiciatis harum
        quae atque, architecto aut voluptatibus quaerat nisi, nobis asperiores.
      </p>
      <blockquote>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo officiis aliquam, placeat quis voluptatum ad.
        Eum, alias quo fuga sed?
      </blockquote>
      <p class="sub-title">
        Est nesciunt dolorum asperiores sint mollitia quod, nostrum eos maxime illo eveniet ducimus labore amet
        voluptatum laborum, ex ut similique omnis ipsum.
        Totam tempore praesentium assumenda ducimus porro ullam quasi, expedita sit esse alias quisquam! Asperiores at
        suscipit officiis deleniti soluta fugit quidem illo
        fuga, adipisci maiores. Nesciunt dolor, minus ex tenetur necessitatibus et id minima, vitae sit a, assumenda,
        iste suscipit facere. Voluptatibus animi, laboriosam
        qui officiis voluptatum. Voluptates quibusdam numquam distinctio fuga.
      </p>
      <p class="sub-title">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </div>
    <div class="card table">
      <ul>
        <li>
          <h5>Date:</h5>
          <span>24.12.2019</span>
        </li>
        <li>
          <h5>Author:</h5>
          <span>Artur Carter</span>
        </li>
        <li>
          <h5>Category:</h5>
          <span>Product design</span>
        </li>
      </ul>
    </div>
  </div>

</template>

<style scope lang="scss">
.cards {
  display: flex;
  gap: 2rem;

  @media (max-width: 1000px) {
    & {
      flex-direction: column;

      .card {
        width: 100% !important;
      }
    }
  }

  .card {
    width: 70%;
    padding: 40px 20px;
    text-align: start;

    & > * {
      font-style: normal !important;
    }

    .sub-title{
      font-size: 13px;
      color: #8c8c8e;
    }

    .custom-list {
      li {
        position: relative;

        &:before {
          content: '';
          position: absolute;
          top: 4px;
          left: -25px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: solid 2px #FFC107;
          background: transparent;
          -webkit-box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
          box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
        }
      }
    }
  }

  .table {
    width: 30%;
    height: fit-content;

    ul {
      padding: 0;
      margin: 0;

      h5 {
        font-size: 13px;
        font-weight: 500;
      }
    }
  }
}

blockquote {
  background: #FFC107;
  color: #191923;
  padding: 30px;
  font-weight: 400;
  font-style: italic;
  font-size: 14px;
  -webkit-box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);
  box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);
  position: relative;
  width: 100%;
  margin: 30px auto;

  &:before, &:after {
    position: absolute;
    font-weight: 900;
    content: "“";
    font-size: 40px;
    opacity: 0.7;
    color: #fafafc;
    letter-spacing: 3px;
    height: 35px;
  }

  &:before {
    top: 0;
    left: 9px;
  }

  &:after {
    bottom: 0;
    right: 9px;
  }
}
</style>