<script setup lang="ts">
import type { SwipeInstance } from "vant";
import { computed, onMounted, ref } from "vue";
import Player from "xgplayer";
import MyPlayIcon from "../../assets/advert_play.png";
import "xgplayer/dist/index.min.css";

let swipeRef1 = ref<SwipeInstance>();
let swipeRef2 = ref<SwipeInstance>();
let showButton = ref<boolean>(false);
let swipe1Autoplay = ref<number>(2000);
let swipe2Autoplay = ref<number>(2000);
let swipeIndex1 = ref(0);
let swipeIndex2 = ref(0);

let player1: Player | null = null,
  player2: Player | null = null,
  player3: Player | null = null,
  player4: Player | null = null,
  player5: Player | null = null,
  player6: Player | null = null;

onMounted(() => {
  player1 = new Player({
    id: "video1",
    url: "https://ceremony.yauma.cn/intro/ad/video/1_1.mp4",
    width: "66.67vw",
    height: "37.5vw",
    poster: "https://ceremony.yauma.cn/intro/ad/image/1_1.png",
    playbackRate: [1],
    defaultPlaybackRate: 1,
    playsinline: true,
    controlsList: ["noremoteplayback", "nodownload"],
    videoInit: true,
    icons: {
      startPlay: MyPlayIcon
    }
  });
  player2 = new Player({
    id: "video2",
    url: "https://ceremony.yauma.cn/intro/ad/video/1_2.mp4",
    width: "66.67vw",
    height: "37.5vw",
    poster: "https://ceremony.yauma.cn/intro/ad/image/1_2.png",
    playbackRate: [1],
    defaultPlaybackRate: 1,
    playsinline: true,
    controlsList: ["noremoteplayback", "nodownload"],
    videoInit: true,
    icons: {
      startPlay: MyPlayIcon
    }
  });
  player3 = new Player({
    id: "video3",
    url: "https://ceremony.yauma.cn/intro/ad/video/1_3.mp4",
    width: "66.67vw",
    height: "37.5vw",
    poster: "https://ceremony.yauma.cn/intro/ad/image/1_3.png",
    playbackRate: [1],
    defaultPlaybackRate: 1,
    playsinline: true,
    controlsList: ["noremoteplayback", "nodownload"],
    videoInit: true,
    icons: {
      startPlay: MyPlayIcon
    }
  });
  player4 = new Player({
    id: "video4",
    url: "https://ceremony.yauma.cn/intro/ad/video/2_1.mp4",
    width: "66.67vw",
    height: "37.5vw",
    poster: "https://ceremony.yauma.cn/intro/ad/image/2_1.png",
    playbackRate: [1],
    defaultPlaybackRate: 1,
    playsinline: true,
    controlsList: ["noremoteplayback", "nodownload"],
    videoInit: true,
    icons: {
      startPlay: MyPlayIcon
    }
  });
  // player5 = new Player({
  //   id: "video5",
  //   url: "https://ceremony.yauma.cn/intro/ad/video/2_2.mp4",
  //   width: "66.67vw",
  //   height: "37.5vw",
  //   poster: "https://ceremony.yauma.cn/intro/ad/image/2_2.png",
  //   playbackRate: [1],
  //   defaultPlaybackRate: 1,
  //   playsinline: true,
  //   controlsList: ["noremoteplayback", "nodownload"],
  //   videoInit: true,
  //   icons: {
  //     startPlay: MyPlayIcon
  //   }
  // });
  player6 = new Player({
    id: "video6",
    url: "https://ceremony.yauma.cn/intro/ad/video/2_3.mp4",
    width: "66.67vw",
    height: "37.5vw",
    poster: "https://ceremony.yauma.cn/intro/ad/image/2_3.png",
    playbackRate: [1],
    defaultPlaybackRate: 1,
    playsinline: true,
    controlsList: ["noremoteplayback", "nodownload"],
    videoInit: true,
    icons: {
      startPlay: MyPlayIcon
    }
  });

  new Player({
    id: "lastVideo",
    url: "https://ceremony.yauma.cn/intro/ad/video/3_1.mp4",
    width: "66.67vw",
    height: "37.5vw",
    poster: "https://ceremony.yauma.cn/intro/ad/image/3_1.png",
    playbackRate: [1],
    defaultPlaybackRate: 1,
    playsinline: true,
    controlsList: ["noremoteplayback", "nodownload"],
    videoInit: true,
    icons: {
      startPlay: MyPlayIcon
    }
  });
  player1.on("play", () => {
    swipe1Autoplay.value = 0;
  });
  player2.on("play", () => {
    swipe1Autoplay.value = 0;
  });
  player3.on("play", () => {
    swipe1Autoplay.value = 0;
  });

  player1.on("pause", () => {
    swipe1Autoplay.value = 2000;
  });
  player2.on("pause", () => {
    swipe1Autoplay.value = 2000;
  });
  player3.on("pause", () => {
    swipe1Autoplay.value = 2000;
  });

  player1.on("ended", () => {
    swipe1Autoplay.value = 2000;
  });
  player2.on("ended", () => {
    swipe1Autoplay.value = 2000;
  });
  player3.on("ended", () => {
    swipe1Autoplay.value = 2000;
  });

  player4.on("play", () => {
    swipe2Autoplay.value = 0;
  });
  // player5.on("play", () => {
  //   swipe2Autoplay.value = 0;
  // });
  player6.on("play", () => {
    swipe2Autoplay.value = 0;
  });

  player4.on("pause", () => {
    swipe2Autoplay.value = 2000;
  });
  // player5.on("pause", () => {
  //   swipe2Autoplay.value = 2000;
  // });
  player6.on("pause", () => {
    swipe2Autoplay.value = 2000;
  });

  player4.on("ended", () => {
    swipe2Autoplay.value = 2000;
  });
  // player5.on("ended", () => {
  //   swipe2Autoplay.value = 2000;
  // });
  player6.on("ended", () => {
    swipe2Autoplay.value = 2000;
  });
});

const swipe1Prev = () => {
  if (swipeIndex1.value != 0) swipeRef1.value?.prev();
  player1?.pause();
  player2?.pause();
  player3?.pause();
};

const swipe1Next = () => {
  if (swipeIndex1.value < 2) swipeRef1.value?.next();
  player1?.pause();
  player2?.pause();
  player3?.pause();
};

const swipe2Prev = () => {
  if (swipeIndex2.value != 0) swipeRef2.value?.prev();
  player4?.pause();
  player5?.pause();
  player6?.pause();
};

const swipe2Next = () => {
  if (swipeIndex2.value < 1) swipeRef1.value?.next();
  player4?.pause();
  player5?.pause();
  player6?.pause();
};

const swipe1Change = (index: number) => {
  swipeIndex1.value = index;
};

const swipe2Change = (index: number) => {
  swipeIndex2.value = index;
};

function callPhone() {
  window.location.href = "tel:19925388058";
}

const scrolling = (e: any) => {
  const clientHeight = e.target.clientHeight;
  const scrollHeight = e.target.scrollHeight;
  const scrollTop = e.target.scrollTop;
  if (scrollTop > 200) {
    showButton.value = true;
  } else {
    showButton.value = false;
  }
};
</script>

<template>
  <div class="main" @scroll="scrolling">
    <div class="top"></div>
    <div class="mid">
      <div class="text">
        <p>将先辈的事迹闪耀家族；令先辈的光辉照亮子孙。</p>
        <p>让优良的美德熏陶后代；把家族的精神世代相传。</p>
      </div>
      <div class="video-card1">
        <p class="video-label">
          <span>限时特惠：</span>
          <img class="_599" alt="code" src="~@/assets/advert_599.png" />
        </p>
        <p class="title">案例一：客户纪录片</p>
        <div class="swipe-box">
          <van-swipe
            ref="swipeRef1"
            :loop="true"
            :autoplay="swipe1Autoplay"
            :touchable="false"
            :show-indicators="false"
            indicator-color="#fff"
            @change="swipe1Change"
          >
            <van-swipe-item
              ><div id="video1" class="video"></div
            ></van-swipe-item>
            <van-swipe-item
              ><div id="video2" class="video"></div
            ></van-swipe-item>
            <van-swipe-item
              ><div id="video3" class="video"></div
            ></van-swipe-item>
          </van-swipe>
          <div class="indicator">
            <div
              :class="{
                'indicator-item': true,
                'indicator-item__active': index == swipeIndex1
              }"
              v-for="(item, index) in 3"
            ></div>
          </div>
        </div>
        <img
          class="left-icon"
          @click="swipe1Prev()"
          alt="code"
          src="~@/assets/advert_left.png"
        />
        <img
          class="right-icon"
          @click="swipe1Next()"
          alt="code"
          src="~@/assets/advert_right.png"
        />
      </div>

      <div class="video-card2">
        <p class="video-label">
          <span>限时特惠：</span>
          <img class="_1699" alt="code" src="~@/assets/advert_1699.png" />
        </p>
        <p class="title">案例二：客户纪录片</p>
        <div class="swipe-box">
          <van-swipe
            ref="swipeRef2"
            :loop="true"
            :autoplay="swipe2Autoplay"
            :touchable="false"
            :show-indicators="false"
            indicator-color="#fff"
            @change="swipe2Change"
          >
            <van-swipe-item
              ><div id="video4" class="video"></div
            ></van-swipe-item>
            <!-- <van-swipe-item
              ><div id="video5" class="video"></div
            ></van-swipe-item> -->
            <van-swipe-item
              ><div id="video6" class="video"></div
            ></van-swipe-item>
          </van-swipe>
          <div class="indicator">
            <div
              :class="{
                'indicator-item': true,
                'indicator-item__active': index == swipeIndex2
              }"
              v-for="(item, index) in 2"
            ></div>
          </div>
        </div>
        <img
          class="left-icon"
          @click="swipe2Prev()"
          alt="code"
          src="~@/assets/advert_left.png"
        />
        <img
          class="right-icon"
          @click="swipe2Next()"
          alt="code"
          src="~@/assets/advert_right.png"
        />
      </div>
      <div class="video-card3">
        <p class="video-label">
          <span>限时特惠：</span>
          <img class="_9999" alt="code" src="~@/assets/advert_9999.png" />
        </p>
        <p class="title">案例：小满纪录片</p>
        <div class="swipe-box">
          <div class="video" id="lastVideo"></div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="phone">
        <img class="icon1" alt="code" src="~@/assets/advert_phoneicon.png" />
        <span class="phoneNumber" @click="callPhone()">199-2538-8058</span>
      </div>
      <img class="qrcode" alt="code" src="~@/assets/advert_qrcode.png" />
      <div class="beian">
        <p>©2023-2024 Copyright by Yauma All rights reserved</p>
        <p>深圳前海路航链动科技有限公司</p>
        <p>粤ICP备2023052651号</p>
        <p>粤公网安备44030502010444号</p>
      </div>
    </div>
    <transition name="button">
      <div class="fixed-button" v-if="showButton">
        <div class="link_bg" @click="callPhone()">
          <img class="link" alt="code" src="~@/assets/advert_link.png" />
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.main {
  height: 100vh;
  /* 兼容 iOS < 11.2 */
  padding-mid: calc(constant(safe-area-inset-mid) + 56px);
  /* 兼容 iOS >= 11.2 */
  padding-mid: calc(env(safe-area-inset-mid) + 56px);
  padding-bottom: 56px;
  scroll-behavior: smooth;
  overflow-y: auto;
}
.top {
  position: relative;
  display: block;
  width: 100%;
  height: 315px;
  background-image: url("https://ceremony.yauma.cn/intro/ad/image/bg/advert_bg1.png");
  background-size: 100% 100%;
}
.mid {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 774px;
  background-image: url("https://ceremony.yauma.cn/intro/ad/image/bg/advert_bg2.png");
  background-size: 100% 100%;

  .swipe-box {
    position: relative;
    margin: 3px auto 0 auto;
    width: 250px;
    height: 140.625px;
  }

  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: -10px;
    padding: 2px 5px;
    font-size: 12px;
    background: red;
    z-index: 1;
  }
  .text {
    margin-top: 30px;
    line-height: 16px;
    > p {
      font-size: 12px;
      color: #f8e9c2;
      text-align: center;
    }
  }

  .video-card1 {
    position: relative;
    margin-top: 21px;
    width: 319px;
    height: 223px;
    background-image: url("https://ceremony.yauma.cn/intro/ad/image/bg/advert_movie1.png");
    background-size: 100% 100%;
  }
  .video-card2 {
    position: relative;
    margin-top: 16px;
    width: 319px;
    height: 223px;
    background-image: url("https://ceremony.yauma.cn/intro/ad/image/bg/advert_movie2.png");
    background-size: 100% 100%;
  }
  .video-card3 {
    position: relative;
    margin-top: 16px;
    width: 319px;
    height: 223px;
    background-image: url("https://ceremony.yauma.cn/intro/ad/image/bg/advert_movie3.png");
    background-size: 100% 100%;
  }
  .video-label {
    position: absolute;
    display: flex;
    align-items: baseline;
    right: 8px;
    top: 8px;
    > span {
      color: #f8e9c2;
      font-size: 14px;
      font-weight: bold;
    }
    ._599 {
      display: block;
      width: 43px;
      height: 16px;
    }
    ._1699 {
      display: block;
      width: 54px;
      height: 16px;
    }
    ._9999 {
      display: block;
      width: 54px;
      height: 16px;
    }
  }
  .title {
    margin-top: 40px;
    font-size: 12px;
    line-height: 16px;
    color: #f8e9c2;
    text-align: center;
  }
  .video {
    width: 250px;
    height: 140.625px;
  }

  #video1,
  #video2,
  #video3,
  #video4,
  #video5,
  #video6,
  #lastVideo {
    width: 250px;
    height: 140.625px;
  }

  .left-icon {
    position: absolute;
    display: block;
    top: 112px;
    left: 13px;
    width: 22px;
    height: 22px;
  }
  .right-icon {
    position: absolute;
    display: block;
    top: 112px;
    right: 12px;
    width: 22px;
    height: 22px;
  }
  .indicator {
    display: flex;
    justify-content: center;
    margin-top: 6px;
    &-item {
      margin-left: 3px;
      width: 4px;
      height: 4px;
      background-color: #fdf8e3;
      border-radius: 2px;
      transition: width 0.5s;
    }
    &-item__active {
      width: 24px;
    }
  }
}
.bottom {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 326px;
  background-image: url("https://ceremony.yauma.cn/intro/ad/image/bg/advert_bg3.png");
  background-size: 100% 100%;
  overflow: auto;
  &::after {
    position: absolute;
    bottom: 108px;
    width: 100%;
    content: "—— 中国殡葬服务专业机构 ——";
    font-size: 11px;
    line-height: 15px;
    text-align: center;
    color: #d8c8a0;
  }
  .phone {
    display: flex;
    align-items: center;
    margin-top: 51px;
    .icon1 {
      display: block;
      width: 18px;
      height: 18px;
    }
    .phoneNumber {
      display: block;
      margin-left: 4px;
      font-size: 15px;
      color: #4da6ff;
      line-height: 20px;
      font-weight: bold;
    }
  }
  .qrcode {
    display: block;
    margin-top: 12px;
    width: 105px;
    height: 105px;
  }
  .beian {
    margin-top: 67px;
    > p {
      font-size: 11px;
      line-height: 15px;
      color: #d8c8a0;
      text-align: center;
    }
  }
}
.fixed-button {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 56px;
  background-image: url("../../assets/advert_bottom_bg.png");
  background-size: 100% 100%;
  z-index: 999;
  transition: all 0.4s;
  .link_bg {
    display: flex;
    justify-content: center;
    width: 346px;
    height: 56px;
    margin: 0 auto;
    background-image: url("../../assets/advert_btn.png");
    background-size: 100% 100%;
    animation: breathe 2.5s infinite reverse ease-in-out;
    .link {
      display: block;
      margin-top: 12px;
      width: 108px;
      height: 22px;
    }
  }

  @keyframes breathe {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
}

.button-enter-from,
.button-leave-to {
  opacity: 0;
}

.button-enter-to,
.button-leave-from {
  opacity: 1;
}

.button-enter-active,
.button-leave-active {
  transition: opacity 0.8s ease;
}
</style>
