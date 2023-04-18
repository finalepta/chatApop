<script setup lang="ts">
import io from "socket.io-client";
import { getRoom, type IChat, type IMessage } from "../http/roomHttp";
import { onBeforeMount, onUpdated, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const room = reactive({
  chat: {} as IChat,
});
const user = ref("");
const isOpen = ref(false);
const message = ref("");
const socket = io("https://chatapp-server-g3av.onrender.com/");
const scrollableDiv = ref();
const loading = ref(true);

onBeforeMount(async () => {
  const response = await getRoom(route.params.id as string);

  socket.connect();
  socket.emit("join", { room: route.params.id });
  socket.on("message", data => {
    room.chat.messages.push(data);
  });

  room.chat = response.chat;
  user.value = response.user;

  loading.value = false;
});

onUpdated(() => {
  scrollableDiv.value.scrollTop = scrollableDiv.value.scrollHeight;
});

function formatTime(timestamp: number) {
  const dateObj = new Date(timestamp);
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();

  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${formattedHours}:${formattedMinutes}`;
}

function getRandomColor() {
  const min = 64;
  const max = 191;

  const red = Math.floor(Math.random() * (max - min + 1)) + min;
  const green = Math.floor(Math.random() * (max - min + 1)) + min;
  const blue = Math.floor(Math.random() * (max - min + 1)) + min;

  return `rgb(${red}, ${green}, ${blue})`;
}

const sendMessage = () => {
  const msg: IMessage = {
    user: user.value,
    message: message.value,
    timestamp: Date.now(),
    color: room.chat.messages.some(el => el.user === user.value)
      ? room.chat.messages.find(el => el.user === user.value)?.color
      : getRandomColor(),
  };
  room.chat.messages.push(msg);
  socket.emit("sendMessage", msg);
  message.value = "";
};

const leaveRoom = () => {
  localStorage.removeItem("token");
  router.push("/");
  socket.disconnect();
};
</script>

<template>
  <div class="wrapper">
    <div class="chat">
      <div class="chat__wrapper">
        <div class="chat__header">
          <div class="chat__info">
            <div class="chat__name">{{ room.chat.name }}</div>
            <div class="chat__dropdown">
              <button
                class="chat__button"
                @click="isOpen = !isOpen"
              >
                {{ isOpen ? "Hide users ▲" : "Show users ▼" }}
              </button>
              <ul
                class="chat__list"
                v-if="isOpen"
              >
                <li v-for="user in room.chat.users">{{ user.username }}</li>
              </ul>
            </div>
          </div>
          <button
            class="chat__btn"
            @click="leaveRoom"
          >
            Leave room
          </button>
        </div>
        <div
          class="chat__messages"
          ref="scrollableDiv"
        >
          <div
            class="loading"
            v-if="loading"
          >
            Loading messages...
          </div>
          <div
            v-else
            v-for="msg in room.chat.messages"
            :id="`${msg.timestamp}`"
            :class="{ chat__right: msg.user === user }"
          >
            <div
              v-if="msg.user === user"
              class="chat__message-right"
            >
              <div
                class="chat__avatar-right"
                :style="{ backgroundColor: msg.color }"
              >
                ME
              </div>
              <div class="chat__text-right">
                {{ msg.message }}
              </div>
              <div class="chat__time-right">
                {{ formatTime(msg.timestamp) }}
              </div>
            </div>

            <div
              class="chat__message"
              v-else
            >
              <div
                class="chat__avatar"
                :style="{ backgroundColor: msg.color }"
              >
                {{ msg.user.charAt(0) }}
              </div>
              <div class="chat__text">
                {{ msg.message }}
              </div>
              <div class="chat__time">{{ formatTime(msg.timestamp) }}</div>
            </div>
          </div>
        </div>
        <form
          @submit.prevent="sendMessage"
          class="chat__field"
        >
          <input
            type="text"
            class="chat__input"
            placeholder="Type message"
            v-model="message"
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
  width: 1100px;
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
  &__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
  &__button {
    background-color: transparent;
    border: none;
    color: #888;
    cursor: pointer;
    font-size: 13px;
    margin-left: 10px;
  }
  &__list {
    position: absolute;
    top: 12px;
    left: 98px;
    background-color: rgb(46, 49, 60);
    border: 1px solid rgba(0, 0, 0, 0.6);
    padding: 10px;
    list-style-type: none;
  }
  &__messages {
    padding: 20px;
    height: 100%;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    /* Define the scrollbar track */
    &::-webkit-scrollbar-track {
      background: transparent;
    }

    /* Define the scrollbar thumb */
    &::-webkit-scrollbar-thumb {
      background: linear-gradient(
        0deg,
        rgb(32, 32, 32) 0%,
        rgba(23, 26, 35, 0.8) 100%
      );
      border-radius: 5px;
    }

    /* Define the scrollbar thumb on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #a1a1a1;
    }
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
    width: 96%;
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
  &__message {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    margin: 10px 0;
    width: 65%;
    &-right {
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-start;
      align-items: flex-end;
      margin: 10px 0;
      width: 65%;
    }
  }
  &__right {
    display: flex;
    justify-content: end;
  }
  &__avatar {
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 15px;
    flex-shrink: 0;
    &-right {
      height: 30px;
      width: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      margin-left: 15px;
      flex-shrink: 0;
    }
  }
  &__text {
    background-color: #ffa473;

    word-break: break-all;
    padding: 10px;
    border-radius: 24px 16px 16px 4px;
    &-right {
      background-color: #ffa473;

      word-break: break-all;
      padding: 10px;
      border-radius: 16px 24px 4px 16px;
    }
  }
  &__time {
    font-size: 14px;
    color: rgb(138, 159, 179);
    margin-left: 15px;
    &-right {
      font-size: 14px;
      color: rgb(138, 159, 179);
      margin-right: 15px;
    }
  }
}
@media (max-width: 1200px) {
  .wrapper {
    padding: 0;
  }
  .chat {
    height: 100%;
    width: 100%;
  }
}
@media (max-width: 768px) {
  .chat {
    padding: 10px;
    &__message,
    &__message-right {
      width: 80%;
    }
    &__text,
    &__text-right {
      word-wrap: break-word;
      word-break: break-all;
    }
    &__input {
      padding-right: 50px;
    }
  }
}
@media (max-width: 576px) {
  .chat {
    &__name {
      font-size: 20px;
    }
    &__message,
    &__message-right {
      width: 100%;
    }
    &__text,
    &__text-right {
      word-wrap: break-word;
      word-break: break-all;
    }
    &__btn {
      padding: 13px 12px;
    }
  }
}
</style>
