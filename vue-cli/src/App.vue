<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'appQuote'">Quote</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appNew'">New</button>
                <p>selected component = {{ selectedComponent }}</p>
<!--                <app-user></app-user>-->
                <component :is="selectedComponent">
                    <p>Default slot content</p>
                </component>
<!--                <app-quote>-->
<!--                    <h1 slot="title">{{ quoteTitle }}</h1>-->
<!--                    <h1 slot="content">slot content</h1>-->
<!--                    <p slot="title">A Wonderful Quote in Slot</p>-->
<!--                    <p slot="content">A Wonderful Quote in Slot</p>-->
<!--                </app-quote>-->
            </div>
        </div>
    </div>
<!--    <app-servers></app-servers>-->
</template>

<script>
import User from "./User.vue"
import  Quote from "./Quote"
import Author from "./components/Author";
import New from "./components/New";
export default {
    components: {
        appUser: User,
        appQuote: Quote,
        appAuthor: Author,
        appNew: New
    },
    data: function () {
        return {
            quoteTitle: "Quote Title",
            selectedComponent: "appQuote"
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
