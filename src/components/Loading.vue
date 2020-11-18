<template>
    <div class="main">
        <div class="animate">
            <div class="ball left"></div>
            <div class="ball middle"></div>
            <div class="ball right"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Loading",
};
</script>

<style scoped>
/* 遮罩部分 */
.main {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
@keyframes dance {
    from {
        top: 5px;
    }

    to {
        top: 80px;
    }
}
/* 动画框框 */
.animate {
    position: relative;
    left: calc((100vw - 160px) / 2);
    top: calc((100vh - 90px) / 2);
    width: 160px;
    height: 90px;
    border-radius: 10px;
    border: 1px solid #e7e7e7bd;
}
.ball {
    position: absolute;
    height: 10px;
    width: 10px;
    border-radius: 10px;
}
.left {
    left: 20px;
    background-color: rgb(255, 86, 86);
    animation: 0.5s ease-in 0s infinite alternate both running dance;
}
.middle {
    left: calc((160px - 10px) / 2);
    background-color: rgb(32, 255, 62);
    animation: 0.5s ease-in 0.05s infinite alternate both running dance;
}
.right {
    right: 20px;
    background-color: rgb(98, 216, 255);
    animation: 0.5s ease-in 0.1s infinite alternate both running dance;
}
</style>
