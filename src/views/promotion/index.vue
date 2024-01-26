<script setup lang="ts" name="Promotion">
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import Player from "xgplayer";
import "xgplayer/dist/index.min.css";

let player: Player | null = null;
const { UserID } = useRoute().query;
const id = UserID ? (UserID as string).split("_")[1] : "1706003594744";

onMounted(() => {
  player = new Player({
    id: "mse",
    url: `http://ceremony.yauma.cn/U1/videos/${id}.mp4`,
    height: "46.4vw",
    width: "46.4vw",
    playbackRate: [1],
    defaultPlaybackRate: 1,
    // fitVideoSize: "fixWidth",
    playsinline: true,
    ignores: ["time", "play", "volume", "progress"],
    controlsList: ["noremoteplayback", "nodownload"],
    videoInit: true
  });
  new Player({
    id: "video",
    url: "http://ceremony.yauma.cn/resource/zx1.24v2.mp4 ",
    height: "43.35vw",
    width: "77.066666vw",
    playbackRate: [1],
    defaultPlaybackRate: 1,
    // fitVideoSize: "fixWidth",
    playsinline: true,
    controlsList: ["noremoteplayback", "nodownload"],
    videoInit: true
  });
  new Player({
    id: "video2",
    url: "http://ceremony.yauma.cn/resource/20240001.mp4",
    height: "43.35vw",
    width: "77.066666vw",
    playbackRate: [1],
    defaultPlaybackRate: 1,
    // fitVideoSize: "fixWidth",
    playsinline: true,
    controlsList: ["noremoteplayback", "nodownload"],
    videoInit: true
  });
  initPlayer(player);
});

function initPlayer(vm: Player) {
  vm.setEventsMiddleware;
  vm.once("play", () => {
    window.gtag &&
      window.gtag("event", "playVideo", {
        event_category: "Click",
        event_label: "视频点击",
        value: 500
      });
  });
}

function callPhone() {
  window.location.href = "tel:18155502266";
}
</script>

<template>
  <div class="main">
    <div class="top">
      <div class="mse-box">
        <div id="mse"></div>
      </div>
      <p class="topText1">这不仅是一段爱的传达</p>
      <p class="topText2">更是一个纪念亲人</p>
      <p class="topText3">表达爱和怀念的方式</p>
    </div>
    <div class="mid">
      <div class="video-box">
        <div id="video"></div>
      </div>
      <p class="text-box">
        <span class="text1">如果您也需要</span>
        <span class="text2">&nbsp;更全方位的专属人生回顾《纪录片》定制，做为数字遗产保留，可添加工作人员微信或拨打电话：</span>
        <span class="text3" @click="callPhone">181-5550-2266</span>
      </p>
      <p class="text4">扫码联系</p>
      <img class="code" alt="code" src="~@/assets/code.png" />
    </div>
    <div class="bottom">
      <div class="bottom-video">
        <div id="video2"></div>
      </div>
      <p class="text-box">
        <span class="text1">如果您也需要</span>
        <span class="text2">&nbsp;再次与亲人对话，让生命延续，请联系工作人员定制数字生命《永生版》，将他/她尊贵的品德，伟大的精神，以及对您的爱永远传承下去。</span>
      </p>
    </div>
    <img class="pic" alt="code" src="~@/assets/pic1.png" />
  </div>
</template>

<style scoped>
.main {
  position: relative;
  display: block;
  min-height: 100vh;
  width: 100%;
  height: 1251px;
  /* 兼容 iOS < 11.2 */
  padding-mid: constant(safe-area-inset-mid);
  /* 兼容 iOS >= 11.2 */
  padding-mid: env(safe-area-inset-mid);
  background-image: url("../../assets/bg.png");
  background-size: 100% 100%;
  background-color: #f1c996;
  overflow: auto;
}

.main::after {
  position: absolute;
  bottom: 32px;
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
  height: 384px;
  background-image: url("../../assets/top_mask.png");
  background-size: 100% 100%;
  overflow: auto;
}

.mse-box {
  box-sizing: content-box;
  width: 174px;
  padding: 2px;
  margin: 46px auto 0 auto;
  background-color: #f9daac;
  border-radius: 4px;
}

#mse {
  margin: 0;
  padding: 0;
  width: 174px;
  height: 174px;
  border-radius: 4px;
}

.top .topText1,
.topText3 {
  display: block;
  margin-top: 8px;
  color: #a35411;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
}

.top .topText2 {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px auto 1px auto;
  width: 107px;
  height: 16px;
  color: #fff7eb;
  font-size: 12px;
  background-color: #a35411;
  text-align: center;
  border-radius: 16px;
}

.top .topText3 {
  margin-top: 0;
}

.main .mid {
  position: relative;
  width: 341px;
  height: 453px;
  margin: 11px auto 0 auto;
  background-image: url("../../assets/mid_mask.png");
  background-size: 100% 100%;
  overflow: auto;
}

.main .mid .text-box {
  display: inline-block;
  margin-top: 10px;
  padding: 0 23px;
  line-height: 16px;
}

.main .bottom .text-box {
  display: inline-block;
  margin-top: 10px;
  padding: 0 23px;
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
  font-size: 14px;
  line-height: 20px;
}

.text-box .text3 {
  color: #1874ff;
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
}

.mid .text4 {
  margin-top: 12px;
  text-align: center;
  color: #6b3103;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
}

.mid .code {
  display: block;
  margin: 0 auto;
  margin-top: 8px;
  width: 102px;
  height: 102px;
}

.video-box {
  box-sizing: content-box;
  width: 289px;
  margin: 40px auto 0 auto;
  padding: 2px;
  background-color: #f9daac;
  border-radius: 4px;
}

#video {
  width: 289px;
  height: 163px;
  border-radius: 4px;
  z-index: 1;
}

.main .bottom {
  position: relative;
  width: 341px;
  height: 332px;
  margin: 12px auto 0 auto;
  background-image: url("../../assets/bottom_mask.png");
  background-size: 100% 100%;
  overflow: auto;
}

.bottom-video {
  box-sizing: content-box;
  width: 289px;
  margin: 40px auto 0 auto;
  padding: 2px;
  background-color: #f9daac;
  border-radius: 4px;
}

#video2 {
  width: 289px;
  height: 163px;
  border-radius: 4px;
  z-index: 1;
}

.pic {
  position: absolute;
  top: 333px;
  right: 0;
  width: 62px;
  height: 147px;
}
</style>
