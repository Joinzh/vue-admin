<template>
  <div class="content">
    <div id="chart" style='width: 100%; height: 500px'></div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  data(){
    return {
      option: {
        xAxis: {
            data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27','2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
        },
        yAxis: {},
        series: [{
            type: 'k',
            data: [
                [20, 30, 10, 35],
                [40, 35, 30, 55],
                [33, 38, 33, 40],
                [40, 40, 32, 42],
                [20, 30, 10, 35],
                [40, 35, 30, 55],
                [33, 38, 33, 40],
                [40, 40, 32, 42]
            ]
        }]
      }
    }
  },
  mounted(){
    this.chartInit()
  },
  methods:{
    chartInit(){
      const chart = echarts.init(document.querySelector('#chart'))
      chart.setOption(this.option)
      window.onresize = () => {
        chart.resize()
      }
    }
  }
}
</script>
<style scoped>
</style>
