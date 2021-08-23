<template>
    <div class="Detail">
        <transition appear name="fade">
            <img :src="EggData[$route.params.id].link" />
        </transition>
        <transition name="transtext" appear>
            <div class="context" v-if="EggData[$route.params.id].isnamed == true">
                <h2>{{EggData[$route.params.id].name}}</h2>
                <p>{{EggData[$route.params.id].description}}</p>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name : 'Detail',
    props : {
        EggData : Array,
    },
    mounted() {
        window.location.reload();
    }
}
</script>

<style>
.enter { transform: translateX(150%) }
.enter-to { transform: translateX(0) }
.transtext-enter-active { position: absolute }

.leave { transform: translateX(0) }
.leave-to { transform: translateX(-150%) }

.transtext-enter-active,
.transtext-leave-active { transition: all 750ms ease-in-out }
</style>