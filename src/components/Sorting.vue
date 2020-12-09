<template>
    <div class="main">
        <div class="sorting">
            <div class="chart-container container">
                <canvas id="chart" width="700" height="300"></canvas>
            </div>
            <div class="actions-container container">
                <button v-on:click="fresh">random</button>
                <button v-on:click="quick">quick sorting</button>
            </div>
        </div>
    </div>
</template>

<script>
import Chart from "chart.js";
import utils from "@/utils/util.js";
import History from "@/utils/History.js";
import QuickSorting from "@/utils/QuickSorting.js";

var history = new History(); // 日志记录
var quickSorting = new QuickSorting(history); // 排序方式

export default {
    name: "Sorting",
    props: {
        msg: String,
    },
    data: function () {
        return {
            "chart": []
        };
    },
    mounted: function () {
        var defaultData = utils.generateData(100);
        var ctx = document.getElementById("chart");
        var chart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: defaultData,
                datasets: [
                    {
                        label: "# quick sorting",
                        data: defaultData,
                        backgroundColor: "rgba(0, 204, 255, 0.4)",
                        borderWidth: 0,
                    },
                ],
            },
            options: {
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                            },
                        },
                    ],
                },
                animation: {
                    duration: 0,
                },
                layout: {
                    padding: {
                        left: 10,
                        right: 10,
                        top: 10,
                        bottom: 10,
                    },
                },
            },
        });
        this.$data.chart = chart;
    },
    methods: {
        /**
         * 更新数据
         */
        fresh: function () {
            var randomData = utils.generateData(100);
            this.chart.data.labels = randomData;
            this.chart.data.datasets[0].data = randomData;

            this.chart.update();
            history.clear();
        },
        quick: function (count) {
            // 快速排序
            var data = this.chart.data.datasets[0].data;
            quickSorting.sort(data, 0, data.length - 1);
            // this.chart.update();
            this.showProcess();
        },
        showProcess() {
            setTimeout(() => {
                if (history.getLength() > 0) {
                    // console.log(history.getLength());
                    var randomData = history.shift();

                    this.chart.data.labels = randomData;
                    this.chart.data.datasets[0].data = randomData;

                    this.chart.update();

                    this.showProcess();
                }
            }, 10);
        },
    },
};
</script>

<style scoped>
/* 页面容器 */
.main {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    display: flex;

    justify-content: center;
    align-items: center;

    background-color: #f7f7f7;
}

.sorting {
    flex-grow: 1;
    width: 500px;
    max-width: 1200px;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center; /* 交叉轴 */
    justify-content: center;

    border-radius: 1rem;
}
.chart-container {
    width: 100%;
}
.actions-container {
    width: 100%;
    height: 4rem;

    margin: 0.5rem 0;

    display: flex;
    align-items: center;
    justify-content: space-around;
}

button {
    width: 10rem;

    padding: 0.5rem 1rem;
    margin: 0 0.5rem;

    border: none;
    border-radius: 6px;
    outline: none;

    background: #64d1ff;
    color: #444;
    transition-duration: 30ms;
    transition-timing-function: ease-out;
}
button:hover {
    color: #000;
    background-color: #40c6ff;
}

/* 公用属性 */
.container {
    border-radius: 0.5rem;
    box-shadow: #aaa -10px 30px 80px;
    background-color: #fafafa;
}
</style>
