<template>
  <div class="knowledge-list">
                <span>
                  <svg viewBox="0 0 12.7 12.7" xmlns="http://www.w3.org/2000/svg" class="icon">
                    <path d="m9.525 287.475-3.88 3.88-2.47-2.469-1.058 1.058 3.529 3.528 4.937-4.939z"
                          style="line-height:normal; fill: #FFC107" transform="translate(0 -284.3)"></path>
                  </svg>
                  Bootstrap, Materialize
                </span>
    <span>
                  <svg viewBox="0 0 12.7 12.7" xmlns="http://www.w3.org/2000/svg" class="icon">
                    <path d="m9.525 287.475-3.88 3.88-2.47-2.469-1.058 1.058 3.529 3.528 4.937-4.939z"
                          style="line-height:normal; fill: #FFC107" transform="translate(0 -284.3)"></path>
                  </svg>
                  Stylus, Sass, Less
                </span>
    <span>
                  <svg viewBox="0 0 12.7 12.7" xmlns="http://www.w3.org/2000/svg" class="icon">
                    <path d="m9.525 287.475-3.88 3.88-2.47-2.469-1.058 1.058 3.529 3.528 4.937-4.939z"
                          style="line-height:normal; fill: #FFC107" transform="translate(0 -284.3)"></path>
                  </svg>
                  Gulp, Webpack, Grunt
                </span>
    <span>
                  <svg viewBox="0 0 12.7 12.7" xmlns="http://www.w3.org/2000/svg" class="icon">
                    <path d="m9.525 287.475-3.88 3.88-2.47-2.469-1.058 1.058 3.529 3.528 4.937-4.939z"
                          style="line-height:normal; fill: #FFC107" transform="translate(0 -284.3)"></path>
                  </svg>
                  GIT knowledge
                </span>
    <div class="ls-divider"></div>
  </div>
</template>


<style scoped lang="scss">
.knowledge-list {
  display: flex;
  flex-direction: column;

  .icon {
    width: 15px;
  }

  span {
    align-items: center;
    display: flex;
    margin-bottom: 5px;
    color: #8c8c8e;
    font-size: 12px;
    font-weight: 100;
    letter-spacing: 0.5px;
    gap: 10px;
  }
}

</style>