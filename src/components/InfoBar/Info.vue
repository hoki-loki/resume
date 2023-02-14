<template>
  <div class="table">
    <ul>
      <li>
        <span>Residence:</span>
        <span>Canada</span>
      </li>
      <li>
        <span>City:</span>
        <span>Toronto</span>
      </li>
      <li>
        <span>Age</span>
        <span>26</span>
      </li>
    </ul>
    <div class="ls-divider"></div>
  </div>
</template>


<style scoped lang="scss">
.table {
  position: relative;

  ul {
    padding: 0;
    margin: 0;

    li {
      justify-content: space-between;
      margin-bottom: 5px;
      font-size: 14px;
      font-weight: 300;


      & > *:last-child {
        color: #8c8c8e;
      }
    }
  }
}
</style>