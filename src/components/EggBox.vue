<template>
  <transition appear name="fader">
    <div class="item-box" v-show="active">
      <img :src="Egg.link" class="egg-image" @load="loadImg"/>
      
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    Egg: Object,
    테스트: Boolean,
  },
  data() {
    return {
      active: false,
    }
  },
  methods: {
    loadImg() {
      this.active = true;
    },
  },
};

</script>

<style>
.fader-leave-from,
.fader-enter-to  {
    opacity: 1;
    transform: translateY(0px);
}
.fader-leave-active,
.fader-enter-active {
    transition: all 1s;
}
.fader-leave-to,
.fader-enter-from {
    opacity: 0;
    transform: translateY(30px);
    visibility: hidden;
} 

</style>