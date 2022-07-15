<template>
    <div>
        <h1>new component</h1>
        <button @click="counter++">Increase!</button>
        <p>{{ counter }}</p>
    </div>
</template>

<script>
export default {
    name: "New.vue",
    data: function () {
        return {
            counter: 0
        }
    },
    destroyed() {
        console.log('Destroyed!')
    },
    deactivated() {
        console.log('deactivated')
    },
    activated() {
        console.log('activated')
    }
}
</script>

<style scoped>

</style>
