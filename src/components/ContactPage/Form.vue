<template>
  <section>
    <h4 class="section-title" style=" text-align: start;">Get in touch</h4>
    <div class="card">
      <form>
        <div class="form-field">
          <label class="label">
            <input type="text" name="name" id="name" placeholder="Name"/>
            <span>
              <svg height="1792" viewBox="0 0 1792 1792" width="1792" xmlns="http://www.w3.org/2000/svg" class="icon">
                <path
                    d="M1600 1405q0 120-73 189.5t-194 69.5h-874q-121 0-194-69.5t-73-189.5q0-53 3.5-103.5t14-109 26.5-108.5 43-97.5 62-81 85.5-53.5 111.5-20q9 0 42
                  21.5t74.5 48 108 48 133.5 21.5 133.5-21.5 108-48 74.5-48 42-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zm-320-893q0 159-112.5
                   271.5t-271.5 112.5-271.5-112.5-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5z"/>
              </svg>
            </span>
          </label>

        </div>
        <div class="form-field">
          <label class="label">
            <input type="email" name="email" id="email" placeholder="Email"/>
            <span for="email">@</span>
          </label>
        </div>
        <div class="form-field">
          <label class="label">
            <textarea id="message" name="text" class="art-input" placeholder="Message" required=""></textarea>
            <span for="email" class="label">
              <svg data-name="Livello 1" id="Livello_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"
                   class="icon"><title/>
                <path
                    d="M116.73,31.83a3,3,0,0,0-4.2-.61L64.14,67.34a1,1,0,0,1-1.2,0L15.5,31.06a3,3,0,1,0-3.64,4.77L49.16,64.36,12.27,92.16A3,3,0,1,0,15.88,97L54.11,68.14l5.18,4a7,7,0,0,0,8.43.06l5.44-4.06L111.84,97a3,
                  3,0,1,0,3.59-4.81L78.17,64.35,116.12,36A3,3,0,0,0,116.73,31.83Z"/><path
                    d="M113,19H15A15,15,0,0,0,0,34V94a15,15,0,0,0,15,15h98a15,15,0,0,0,15-15V34A15,15,0,0,0,113,19Zm9,75a9,9,0,0,1-9,9H15a9,9,0,0,1-9-9V34a9,9,0,0,1,9-9h98a9,9,0,0,1,9,9Z"/>
              </svg>
            </span>
          </label>
        </div>

        <div class="form-btn">
          <button class="btn" type="submit">
            <span>Send message</span>
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped lang="scss">
.card {
  .form-field .label {
    display: flex;
    position: relative;
    margin-bottom: 30px;

    input, textarea {
      min-height: 50px;
      width: 100%;
      background: linear-gradient(159deg, #252532 0%, #23232d 100%);
      border: none;
      color: #fafafc;
      padding-left: 65px;
      padding-right: 15px;
      -webkit-box-shadow: inset 0 1px 4px 0 rgb(15 15 20 / 10%);
      box-shadow: inset 0 1px 4px 0 rgb(15 15 20 / 10%);
      margin-bottom: 0;
      -webkit-transition: 0.4s ease-in-out;
      transition: 0.4s ease-in-out;
      outline: none;
    }

    textarea {
      padding-left: 15px;
      padding-top: 15px;
      height: 150px;
      min-width: 100%;
      border-left: solid 50px #20202a;
    }

    input:focus {
      span {
        background: rebeccapurple;
        color: rebeccapurple;
      }
    }

    span {
      text-align: center;
      align-items: center;
      color: #8c8c8e;
      position: absolute;
      height: 50px;
      width: 50px;
      background: #20202a;
      top: 0;
      left: 0;
      display: flex;
      padding: 0 15px;
      text-transform: uppercase;
      font-size: 14px;
      line-height: 50px;
      letter-spacing: 1px;
      font-weight: 500;
      -webkit-transition: 0.4s ease-in-out;
      transition: 0.4s ease-in-out;
      cursor: text;

      svg {
        fill: #8c8c8e;
        width: 15px;
        height: 15px;
      }
    }
  }

  .form-btn {
    text-align: start;

    button {
      text-transform: uppercase;
      -webkit-box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);
      box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);
      color: rgba(32, 32, 42, 0.76);
      background: #FFC107;
      letter-spacing: 1.5px;
      font-weight: 600;
      display: -ms-inline-flexbox;
      display: inline-flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -ms-flex-line-pack: center;
      align-content: center;
      border: none;
      -webkit-transition: 0.4s ease-in-out;
      transition: 0.4s ease-in-out;
      height: 45px;
      font-size: 11px;
      padding: 0 35px;
    }
    span {
      align-self: center;
      -webkit-transition: 0.2s ease-in-out;
      transition: 0.2s ease-in-out;
    }
  }
}
</style>