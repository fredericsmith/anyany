<template>
    <div id="app">
        <loading v-if="showLoading" />
        <Sorting v-if="showSorting" />
    </div>
</template>

<script>
import Loading from "./components/Loading.vue";
import Sorting from "./components/Sorting.vue";

export default {
    name: "App",
    components: {
        Loading,
        Sorting,
    },
    data: function () {
        return {
            showSorting: false,
            showLoading: true,
        };
    },
    mounted: function () {
        setTimeout(() => {
            this.showLoading = false;
            this.showSorting = true;
        }, 2000);
    },
};
</script>

<style>
#app {
    width: auto;
    background-color: #f7f7f7;
}
</style>
