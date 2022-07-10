<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <button @click="resetName">Reset Name</button>
    </div>
</template>

<script>
    export default {
        props: {
            // name: [String, Array]
            // name: [String]
            name: {
                type: String,
                // type: Object,
                // required: true,
                // default: function () {
                //     return {
                //         name: 'Max'
                //     }
                // }
                default: "default name"
            }
        },
        methods: {
            switchName() {
                return this.name.split('').reverse().join('');
            },
            resetName() {
                // this.name = 'default name';
                this.$emit('nameWasReset', this.name + " changed")
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
