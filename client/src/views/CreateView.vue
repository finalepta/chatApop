<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import CreateRoom from "../components/CreateRoom.vue";

const route = useRoute();
const option = ref("");
</script>

<template>
  <div class="greet">
    <h1 class="greet__title">Welcome to ChatApp!</h1>
    <h3
      class="greet__subtitle"
      v-if="!option"
    >
      Connect to room or create one
    </h3>
    <ul class="greet__choose">
      <li class="greet__option">
        <input
          type="radio"
          v-model="option"
          value="create"
          id="create"
          class="greet__input"
          :checked="route.fullPath === '/create'"
          @click="$router.push('/create')"
        />
        <label
          for="create"
          class="greet__label"
          >Create room</label
        >
      </li>
      <li class="greet__option">
        <input
          type="radio"
          v-model="option"
          :checked="route.fullPath === '/join'"
          value="join"
          id="join"
          class="greet__input"
          @click="$router.push('/join')"
        />
        <label
          for="join"
          class="greet__label"
          >Join room</label
        >
      </li>
    </ul>
    <div class="greet__create">
      <CreateRoom />
    </div>
  </div>
</template>

<style scoped lang="scss">
.greet {
  padding: 10vh 20vw;
  &__choose {
    width: 50vw;
    display: flex;
    align-items: stretch;
    margin: 0;
    padding: 0;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    border-radius: 4px;
    list-style: none;
  }
  &__option {
    flex: 1 1 0;
  }
  &__option + &__option {
    margin-left: -1px;
  }
  &__option label {
    position: relative;
    z-index: 2;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 14px;

    color: var(--color-text-white);

    user-select: none;
    cursor: pointer;
    border: solid 0.5px var(--color-accent);
    background-color: transparent;
    transition: 0.3s ease;
    transition-property: color, border, background, z-index, margin;
  }

  &__option input[type="radio"] {
    position: absolute;

    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;

    white-space: nowrap;

    border: 0;

    clip: rect(0 0 0 0);
    -webkit-clip-path: inset(100%);
    clip-path: inset(100%);
  }

  &__option label:hover {
    z-index: 3;

    color: var(--color-accent);
  }

  &__option input[type="radio"]:checked + label {
    z-index: 0;

    color: var(--color-text-white);

    border-color: transparent;
    background-color: var(--color-accent);
  }

  &__option input[type="radio"]:checked + label:hover {
    color: var(--color-text-white);
  }
}
</style>
