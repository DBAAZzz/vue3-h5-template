<script setup lang="ts" name="Promotion">
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import Player from "xgplayer";
import "xgplayer/dist/index.min.css";

let player: Player | null = null;
const { UserID } = useRoute().query;
const id = UserID ? (UserID as string).split("_")[1] : '1706003594744'

onMounted(() => {
  player = new Player({
    id: "mse",
    url: `http://ceremony.yauma.cn/U1/videos/${id}.mp4`,
    height: "40vw",
    width: "70vw",
    playbackRate: [1],
    defaultPlaybackRate: 1,
    "x5-video-player-fullscreen": true,
    "x5-video-orientation": "portraint",
    playsinline: false,
    controlsList: ["noremoteplayback", "nodownload"],
    videoInit: true
    // controls: false,
  });
  new Player({
    id: "video",
    url: "https://lf3-static.bytednsdoc.com/obj/eden-cn/nupenuvpxnuvo/xgplayer_doc/xgplayer-demo.mp4",
    height: "42.9vw",
    width: "77vw",
    playbackRate: [1],
    defaultPlaybackRate: 1,
    "x5-video-player-fullscreen": true,
    "x5-video-orientation": "portraint",
    playsinline: false,
    controlsList: ["noremoteplayback", "nodownload"]
    // controls: false,
  });
  initPlayer(player);
});

function initPlayer(vm: Player) {
  vm.once("play", () => {
    gtag &&
      gtag("event", "playVideo", {
        event_category: "Click",
        event_label: "视频点击",
        value: 500
      });

  });
}

function callPhone() {
  window.location.href = 'tel:18155502266'
}

</script>

<template>
  <div class="main">
    <div class="top">
      <div id="mse"></div>
    </div>
    <div class="bottom">
      <div id="video"></div>
      <p class="text-box">
        <span class="text1">如果您也需要</span>
        <span class="text2">&nbsp;&nbsp;更全方位的专属人生回顾纪录片定制，用于日常悼念及追悼会播放，可添加工作人员微信或拨打电话：</span>
        <span class="text3" @click="callPhone">181-5550-2266</span>
      </p>
      <p class="text4">扫码联系</p>
      <img class="code" alt="code" src="~@/assets/code.png" />
      <p class="text5">尽管他/她已经离开了我们的世界，但通过这段数字遗言，他/她的声音、笑容和爱将永远留在我们心中。</p>
    </div>

  </div>
</template>

<style scoped>
.main {
  position: relative;
  display: block;
  min-height: 100vh;
  width: 100%;
  height: 928px;
  /* 兼容 iOS < 11.2 */
  padding-bottom: constant(safe-area-inset-bottom);
  /* 兼容 iOS >= 11.2 */
  padding-bottom: env(safe-area-inset-bottom);
  background-image: url('../../assets/bg.png');
  background-size: 100% 100%;
  background-color: #f1c996;
  overflow: auto;
}

.main::after {
  position: absolute;
  bottom: 11px;
  width: 100%;
  content: "— 当涂县殡仪馆 —";
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: #733401;
}

.main .top {
  position: relative;
  width: 100%;
  height: 360px;
  background-image: url('../../assets/top_mask.png');
  background-size: 100% 100%;
  overflow: auto;
}

#mse {
  width: 267px;
  height: 150px;
  margin: 48px auto 0 auto;
  border-radius: 4px;
}

.main .bottom {
  position: relative;
  width: 317px;
  height: 516px;
  margin: 11px auto 0 auto;
  background-image: url('../../assets/bottom_mask.png');
  background-size: 100% 100%;
  overflow: auto;
}

.main .bottom .text-box {
  display: inline-block;
  margin-top: 13px;
  padding: 0 20px;
  line-height: 16px;
}

.text-box .text1,
.text2,
.text3 {
  color: #733401;
}

.text-box .text1 {
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
}

.text-box .text2 {
  font-size: 13px;
  line-height: 16px;
}

.text-box .text3 {
  color: #1874FF;
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
}

.bottom .text4 {
  margin-top: 16px;
  text-align: center;
  color: #6B3103;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
}

.bottom .text5 {
  display: inline-block;
  margin-top: 16px;
  padding: 0 20px;
  font-size: 14px;
  color: #733401;
  line-height: 16px;
}

.bottom .code {
  display: block;
  margin: 0 auto;
  margin-top: 6px;
  width: 98px;
  height: 98px;
}

#video {
  width: 289px;
  height: 161px;
  margin: 46px auto 0 auto;
}
</style>
