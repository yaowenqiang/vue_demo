<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-user></app-user>
                <app-quote>
                    <h1>{{ quoteTitle }}</h1>
                    <p>A Wonderful Quote in Slot</p>
                </app-quote>
            </div>
        </div>
    </div>
<!--    <app-servers></app-servers>-->
</template>

<script>
import User from "./User.vue"
import  Quote from "./Quote"
export default {
    components: {
        appUser: User,
        appQuote: Quote
    },
    data: function () {
        return {
            quoteTitle: "Quote Title"
        }
    }
}
</script>

<style>
    div.component {
        border: 1px solid black;
        padding: 30px;
    }
</style>
