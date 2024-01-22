<script setup lang="ts" name="Promotion">
import { onMounted } from "vue";
import Player from "xgplayer";
import "xgplayer/dist/index.min.css";


let player: Player | null = null

onMounted(() => {
  player = new Player({
    id: "mse",
    url: "https://lf3-static.bytednsdoc.com/obj/eden-cn/nupenuvpxnuvo/xgplayer_doc/xgplayer-demo.mp4",
    height: "100vw",
    width: "100vw",
    playbackRate: [1],
    defaultPlaybackRate: 1,
    'x5-video-player-fullscreen': true,
    'x5-video-orientation': 'portraint',
    playsinline: false,
    controlsList: ['noremoteplayback', 'nodownload'],
    // controls: false,
  });
  initPlayer(player)
});

function initPlayer(vm: Player) {
  vm.once('play', () => {
    console.log("视频开始播放了")
  })
}


</script>

<template>
  <div>
    <div id="mse"></div>
    <h2>promotion</h2>
  </div>
</template>

<style scoped>
#mse {
  width: 375px;
  height: 375px;
}
</style>
