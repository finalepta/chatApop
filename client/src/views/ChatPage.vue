<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <div class="chat">
      <div class="chat__wrapper">
        <div class="chat__header">
          <div class="chat__info">
            <div class="chat__name"></div>
          </div>
          <button class="chat__btn">Leave room</button>
        </div>
        <div class="chat__other">
          <div class="chat__messages"></div>
          <div class="chat__field">
            <input
              type="text"
              class="chat__input"
              placeholder="Type message"
            />
          </div>
        </div>
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
  background-color: #6c6c6c;
  border-radius: 16px;
  padding: 30px;
  &__wrapper {
    width: 100%;
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
  &__other {
    padding: 28px;
  }
}
</style>
