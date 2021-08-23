<template>
  <div class="egg-container">
    <EggBox
      :Egg="item"
      v-for="(item, index) in EggData"
      :key="index"
      @click="$router.push('/detail/' + index)"
    />
  </div>
</template>

<script>
import EggBox from "./EggBox.vue";

export default {
  name: "EggList",
  components: {
    EggBox,
  },
  props: {
    EggData: Array,
  },
  updated() {
    //setTimeout( { this.EggData.isLoaded }, true)
  },
};
</script>

<style>
.egg-container {
  margin-right: auto;
}

.item-box {
  display: inline-block;
  width: 200px;
  height: 200px;
  margin: 30px 30px;
  border: gray solid 5px;
  border-radius: 30px;
  vertical-align: baseline;
}
.egg-image {
  height: 100%;
}
</style>