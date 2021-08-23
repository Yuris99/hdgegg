<template>
    <div v-if="showRouter">
        <transition appear name="fade" mode="out-in">
            <router-view :EggData="EggData" ></router-view>
        </transition>
    </div>
</template>

<script>


export default {
    name: 'Container',
    components : {
    },
    data() {
        return {
            showRouter: true,
        }
    },
    props : {
        EggData : Array,
    },
    mounted() {
        this.showRouter = true;
    }
}
</script>

<style>
.fade-leave-from,
.fade-enter-to  {
    opacity: 1;
    transform: translateY(0px);
}
.fade-leave-active,
.fade-enter-active {
    transition: all 1s;
}
.fade-leave-to,
.fade-enter-from {
    opacity: 0;
    transform: translateY(30px);
    visibility: hidden;
} 

</style>