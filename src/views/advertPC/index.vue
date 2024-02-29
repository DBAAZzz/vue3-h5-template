<script setup lang="ts">
import { onMounted } from "vue";
import { ref } from "vue";
import Player from "xgplayer";
import MyPlayIcon from "../../assets/pc/pc_palyicon.png";
import { nextTick } from "vue";

let player1: Player | null = null,
  player2: Player | null = null,
  player3: Player | null = null;
const activeIndex = ref<number>(0);
const activeNav = ref<boolean>(false);
const isExpand = ref<boolean>(true);
const section1Ref = ref<HTMLElement | null>(null);
const section2Ref = ref<HTMLElement | null>(null);
const section3Ref = ref<HTMLElement | null>(null);
const section4Ref = ref<HTMLElement | null>(null);
const section5Ref = ref<HTMLElement | null>(null);

let navArr = [
  { title: "首页" },
  { title: "精美纪录片" },
  { title: "专属定制纪录片" },
  { title: "数字生命《永生版》" },
  { title: "联系方式" }
];

onMounted(() => {
  window.addEventListener("scroll", scrolling);

  player1 = new Player({
    id: "video1",
    url: "http://ceremony.yauma.cn/resource/zx1.24v2.mp4",
    width: "785px",
    height: "442px",
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
    url: "http://ceremony.yauma.cn/resource/zx1.24v2.mp4",
    width: "785px",
    height: "442px",
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
    url: "http://ceremony.yauma.cn/resource/zx1.24v2.mp4",
    width: "785px",
    height: "442px",
    playbackRate: [1],
    defaultPlaybackRate: 1,
    playsinline: true,
    controlsList: ["noremoteplayback", "nodownload"],
    videoInit: true,
    icons: {
      startPlay: MyPlayIcon
    }
  });
});

const scrollToAnchor = (index: number) => {
  activeIndex.value = index;
  let currentRef = null;
  switch (index) {
    case 0:
      currentRef = section1Ref.value;
      break;
    case 1:
      currentRef = section2Ref.value;
      break;
    case 2:
      currentRef = section3Ref.value;
      break;
    case 3:
      currentRef = section4Ref.value;
      break;
    case 4:
      currentRef = section5Ref.value;
      break;
    default:
      break;
  }
  currentRef?.scrollIntoView({ behavior: "smooth" });
};

const scrolling = (e: any) => {
  if (document.documentElement.scrollTop > 400) {
    activeNav.value = true;
  } else {
    activeNav.value = false;
  }
};

const switchVideoURL = async (url: string, index: number) => {
  switch (index) {
    case 1:
      player1?.pause();
      player1?.switchURL(url);
      setTimeout(() => {
        player1?.play();
      }, 200);
      break;
    case 2:
      player2?.pause();
      player2?.switchURL(url);
      setTimeout(() => {
        player2?.play();
      }, 200);
      break;
    default:
      break;
  }
  // console.log("url", url);
};
</script>

<template>
  <div class="body" @scroll="scrolling">
    <div class="main" id="section1" ref="section1Ref">
      <div :class="{ nav: true, nav__second: activeNav }">
        <div class="nav-box">
          <div
            v-for="(item, index) in navArr"
            :class="{
              'nav-item': true,
              'nav-item__active': index == activeIndex
            }"
            @click="scrollToAnchor(index)"
          >
            {{ item.title }}
          </div>
        </div>
      </div>
      <div :class="{ 'fix-code': true, 'fix-code__expand': isExpand }">
        <img
          @click="isExpand = !isExpand"
          class="expand"
          src="~@/assets/pc/pc_expand.png"
        />
        <img class="code" src="~@/assets/pc/pc_fixcode.png" />
      </div>
      <div class="top"></div>
      <img class="title1" src="~@/assets/pc/pc_title1.png" />
      <div class="title1-text">
        <p>将先辈的事迹闪耀家族；令先辈的光辉照亮子孙。</p>
        <p>让优良的美德熏陶后代；把家族的精神世代相传。</p>
      </div>
      <div class="card1" id="section2" ref="section2Ref">
        <p>
          <span class="label">限时优惠：</span>
          <img class="_599" src="~@/assets/pc/pc_599.png" />
        </p>
        <div class="card-main">
          <p class="title-name">案例一：客户纪录片</p>
          <div class="renderVideo" id="video1"></div>
        </div>
        <div class="card-right">
          <div
            class="video-item"
            @click="
              switchVideoURL(
                'http://ceremony.yauma.cn/resource/20240001.mp4',
                1
              )
            "
            v-for="item in 3"
          ></div>
        </div>
      </div>
      <div class="card2" id="section3" ref="section3Ref">
        <p>
          <span class="label">限时优惠：</span>
          <img class="_1699" src="~@/assets/pc/pc_1699.png" />
        </p>
        <div class="card-main">
          <p class="title-name">案例二：客户纪录片</p>
          <div class="renderVideo" id="video2"></div>
        </div>
        <div class="card-right">
          <div
            class="video-item"
            @click="
              switchVideoURL(
                'http://ceremony.yauma.cn/resource/20240001.mp4',
                2
              )
            "
            v-for="item in 3"
          ></div>
        </div>
      </div>
      <div class="card3" id="section4" ref="section4Ref">
        <p>
          <span class="label">限时优惠：</span>
          <img class="_9999" src="~@/assets/pc/pc_9999.png" />
        </p>
        <div class="title-name">案例：小满纪录片</div>
        <div class="video" id="video3"></div>
      </div>
      <img class="title2" src="~@/assets/pc/pc_title2.png" />
      <div class="phone" id="section5" ref="section5Ref">
        <img class="icon1" src="~@/assets/pc/pc_advert_phoneicon.png" />
        <img class="icon2" src="~@/assets/pc/pc_advert_phone.png" />
      </div>
      <img class="qrcode" src="~@/assets/pc/pc_qrcode.png" />
      <p class="text3">
        ——&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中国殡葬服务专业机构&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;——
      </p>
      <div class="beian">
        <p>
          ©2022-2023 Copyright by Yauma All rights reserved |
          深圳前海路航链动科技有限公司
        </p>
        <p>粤ICP备2023052651号 | 粤公网安备44030502010444号</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.body {
  display: flex;
  align-items: center;
  justify-content: center;
  .main {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1920px;
    height: 4342px;
    background-image: url("../../assets/pc/bg_1.webp");
    background-size: 1920px 4342px;

    .fix-code {
      position: fixed;
      display: flex;
      top: 372px;
      right: -131px;
      z-index: 1;
      transition: all 0.2s;
      &__expand {
        right: 0px;
      }
      .expand {
        display: block;
        width: 22px;
        height: 74px;
        margin-top: 7px;
        margin-right: -2px;
        cursor: pointer;
      }
      .code {
        width: 131px;
        height: 157px;
      }
    }

    .nav {
      position: fixed;
      width: 1920px;
      height: 68px;
      background-color: rgba(37, 37, 37, 0.5);
      color: #fff;
      z-index: 1;

      .nav-box {
        position: absolute;
        display: flex;
        right: 18.75%;

        .nav-item {
          height: 100%;
          padding: 0 4px;
          line-height: 68px;
          cursor: pointer;
          &:not(:first-child) {
            margin-left: 50px;
          }
          &__active {
            position: relative;
            font-size: 18px;
            font-weight: bold;
            &::after {
              position: absolute;
              content: "";
              left: 0;
              right: 0;
              bottom: 0;
              height: 2px;
              background-color: #faf1cd;
            }
          }
        }
      }
      &__second {
        background-color: #3f3431;
      }
    }
    .top {
      display: block;
      margin-top: 43px;
      width: 900px;
      height: 397px;
      background-image: url("../../assets/pc/top_text.png");
      background-size: 100% 100%;
    }
    .title1 {
      display: block;
      width: 607px;
      height: 74px;
      margin-top: 572px;
    }
    .title1-text {
      margin-top: 29px;
      > p {
        font-size: 46px;
        color: #f8e9c2;
        line-height: 54px;
      }
    }

    .card1 {
      position: relative;
      display: block;
      margin-top: 80px;
      width: 1200px;
      height: 640px;
      background-image: url("../../assets/pc/pc_movie1.png");
      background-size: 1200px 640px;
      > p {
        position: absolute;
        display: flex;
        align-items: baseline;
        top: 24px;
        left: 560px;
        .label {
          font-size: 40px;
          color: #f8e9c2;
          font-weight: bold;
        }
        ._599 {
          width: 122px;
          height: 46px;
        }
      }
      .card-main {
        width: 785px;
        margin-top: 115px;
        margin-left: 65px;
        .title-name {
          font-size: 34px;
          line-height: 40px;
          color: #f8e9c2;
          text-align: center;
        }
        .renderVideo {
          margin-top: 6px;
          width: 785px;
          height: 442px;
        }
      }
      .card-right {
        position: absolute;
        top: 129px;
        right: 16px;
        .video-item {
          width: 265px;
          height: 149px;
          background-color: yellow;
          &:not(:last-child) {
            margin-bottom: 15px;
          }
        }
      }
    }

    .card2 {
      position: relative;
      display: block;
      margin-top: 80px;
      width: 1200px;
      height: 640px;
      background-image: url("../../assets/pc/pc_movie2.png");
      background-size: 1200px 640px;
      > p {
        position: absolute;
        display: flex;
        align-items: baseline;
        top: 24px;
        left: 640px;
        .label {
          font-size: 40px;
          color: #f8e9c2;
          font-weight: bold;
        }
        ._1699 {
          width: 155px;
          height: 46px;
        }
      }
      .card-main {
        width: 785px;
        margin-top: 115px;
        margin-left: 65px;
        .title-name {
          font-size: 34px;
          line-height: 40px;
          color: #f8e9c2;
          text-align: center;
        }
        .renderVideo {
          margin-top: 6px;
          width: 785px;
          height: 442px;
        }
      }
      .card-right {
        position: absolute;
        top: 129px;
        right: 16px;
        .video-item {
          width: 265px;
          height: 149px;
          background-color: yellow;
          &:not(:last-child) {
            margin-bottom: 15px;
          }
        }
      }
    }
    .card3 {
      position: relative;
      display: block;
      margin-top: 80px;
      width: 1200px;
      height: 640px;
      background-image: url("../../assets/pc/pc_movie3.png");
      background-size: 1200px 640px;
      > p {
        position: absolute;
        display: flex;
        align-items: baseline;
        top: 24px;
        left: 740px;
        .label {
          font-size: 40px;
          color: #f8e9c2;
          font-weight: bold;
        }
        ._9999 {
          width: 155px;
          height: 46px;
        }
      }
      .title-name {
        margin-top: 115px;
        font-size: 34px;
        line-height: 40px;
        color: #f8e9c2;
        text-align: center;
      }
      .video {
        width: 785px;
        height: 442px;
        margin: 6px auto 0 auto;
      }
    }

    .title2 {
      display: block;
      width: 546px;
      height: 74px;
      margin-top: 80px;
    }

    .phone {
      display: flex;
      align-items: center;
      margin-top: 30px;
      .icon1 {
        display: block;
        width: 66px;
        height: 66px;
      }
      .icon2 {
        display: block;
        margin-left: 25px;
        width: 365px;
        height: 41px;
      }
    }
    .qrcode {
      display: block;
      margin-top: 30px;
      width: 283px;
      height: 283px;
    }
    .text3 {
      margin-top: 80px;
      color: #d8c8a0;
      font-size: 24px;
    }
    .beian {
      margin-top: 115px;
      > p {
        line-height: 16px;
        font-size: 14px;
        color: #d8c8a0;
        text-align: center;
      }
    }
  }
}
</style>
