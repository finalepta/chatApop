<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <div class="chat">
      <div class="chat__wrapper">
        <div class="chat__header">
          <div class="chat__name">some name</div>
          <button class="chat__btn">Leave room</button>
        </div>
        <div class="chat__other">
          <div class="chat__messages"></div>
        </div>
        <form
          @submit.prevent=""
          class="chat__field"
        >
          <input
            type="text"
            class="chat__input"
            placeholder="Type message"
          />
          <button
            class="chat__send"
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5.74 15.75a39.14 39.14 0 0 0-1.3 3.91c-.55 2.37-.95 2.9 1.11 1.78 2.07-1.13 12.05-6.69 14.28-7.92 2.9-1.61 2.94-1.49-.16-3.2C17.31 9.02 7.44 3.6 5.55 2.54c-1.89-1.07-1.66-.6-1.1 1.77.17.76.61 2.08 1.3 3.94a4 4 0 0 0 3 2.54l5.76 1.11a.1.1 0 0 1 0 .2L8.73 13.2a4 4 0 0 0-3 2.54Z"
                id="send_24__Mask"
                fill="var(--color-accent)"
                fill-opacity=".6"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.wrapper {
  width: 100vw;
  height: 100vh;
  background-color: #212121;
  padding: 50px 0 0 0;
}
.chat {
  width: 980px;
  height: 82vh;
  margin: 0 auto;
  border-radius: 16px;
  background: linear-gradient(
    0deg,
    rgb(51, 52, 53) 0%,
    rgba(50, 56, 72, 0.8) 100%
  );
  max-height: fit-content;

  padding: 30px;
  &__wrapper {
    display: grid;
    grid-template-rows: 95px 1fr 90px;
    width: 100%;
    height: 100%;
    max-height: fit-content;
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 8px;
  }
  &__other {
    padding: 28px;
    height: 88%;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: inherit;
  }
  &__field {
    position: relative;
    display: flex;
    justify-content: center;
    border-top: 1px solid rgba(0, 0, 0, 0.4);
    padding-top: 20px;
    padding-bottom: 19px;
    align-items: center;
  }
  &__name {
    text-align: center;
    font-size: 22px;
    text-transform: uppercase;
  }
  &__btn {
    border: 1px solid var(--color-accent);
    color: var(--color-accent);
    border-radius: 16px;
    padding: 16px 20px;
    background-color: transparent;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background-color: var(--color-accent);
      color: #fff;
    }
  }
  &__input {
    padding: 16px 40px 16px 21px;
    width: 89%;
    border: 1px solid var(--color-accent);
    border-radius: 16px;
    background-color: rgba(51, 52, 53, 0.6);
    z-index: 1;
    overflow-wrap: break-word;
    word-break: break-all;
    color: white;
    outline: var(--color-accent);
    &:focus {
      border: 1.5px solid var(--color-accent);
    }
  }
  &__send {
    position: absolute;
    top: 4px;
    right: 27px;
    background-color: transparent;
    border: none;
    height: 100%;
    z-index: 2;
    cursor: pointer;
    &:hover {
      svg {
        path {
          fill-opacity: 1;
        }
      }
    }
  }
}
</style>
