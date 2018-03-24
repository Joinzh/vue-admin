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
        xAxis: {},
        yAxis: {},
        series: [{
            symbolSize: 20,
            data: [
                [11.0, 8.04],
                [8.0, 6.95],
                [13.0, 7.58],
                [4.0, 7.24],
                [12.0, 4.26],
                [12.0, 9.84],
                [9.0, 8.81],
                [11.0, 8.33],
                [174.0, 9.96],
                [16.0, 7.24],
                [24.0, 4.26],
                [13.0, 9.96],
                [17.0, 4.82],
                [8.0, 5.68],
                [9.0, 10.84],
                [5.0, 4.82],
                [7.0, 5.68]
            ],
            type: 'scatter'
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
