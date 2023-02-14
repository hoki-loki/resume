<template>
  <header>
    <h4 class="section-title" style="text-align: start;">Contact information</h4>
    <div class="cards">
      <div class="card">
        <ul class="table">
          <li>
            <h5>Country:</h5>
            <span>Canada</span>
          </li>

          <li>
            <h5>City:</h5>
            <span>Toronto</span>
          </li>

          <li>
            <h5>Streat:</h5>
            <span>20 Dellbank Rd</span>
          </li>
        </ul>
      </div>
      <div class="card">
        <ul class="table">
          <li>
            <h5>Email:</h5>
            <span>carter.inbox@mail.com</span>
          </li>

          <li>
            <h5>Telegram:</h5>
            <span>@arter</span>
          </li>

          <li>
            <h5>Skype:</h5>
            <span>Arter</span>
          </li>
        </ul>
      </div>
      <div class="card">
        <ul class="table">
          <li>
            <h5>Support service:</h5>
            <span>+78 (098) 333 11 22</span>
          </li>

          <li>
            <h5>Office:</h5>
            <span>+78 (098) 326 11 22</span>
          </li>

          <li>
            <h5>Personal:</h5>
            <span>+78 (077) 114 26 53</span>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>


<style scoped lang="scss">
.cards {
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  
  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
  }
}

</style>