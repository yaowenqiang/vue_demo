<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn()">Reset Name</button>
    </div>
</template>

<script>
    import {eventBus} from "./main";

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
            },
            resetFn: Function,
            userAge: Number
        },
        methods: {
            switchName() {
                return this.name.split('').reverse().join('');
            },
            resetName() {
                // this.name = 'default name';
                this.$emit('nameWasReset', this.name + " changed")
            }
        },
        created() {
            eventBus.$on('ageWasEdited', (age) => {
                this.userAge = age;
            })
        }

    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
