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
        tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
          data:['利润', '支出', '收入']
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      xAxis : [
          {
              type : 'value'
          }
      ],
      yAxis : [
          {
              type : 'category',
              axisTick : {show: false},
              data : ['周一','周二','周三','周四','周五','周六','周日']
          }
      ],
      series : [
          {
              name:'利润',
              type:'bar',
              label: {
                  normal: {
                      show: true,
                      position: 'inside'
                  }
              },
              data:[200, 170, 240, 244, 200, 220, 210]
          },
          {
              name:'收入',
              type:'bar',
              stack: '总量',
              label: {
                  normal: {
                      show: true
                  }
              },
              data:[320, 302, 341, 374, 390, 450, 420]
          },
          {
              name:'支出',
              type:'bar',
              stack: '总量',
              label: {
                  normal: {
                      show: true,
                      position: 'left'
                  }
              },
              data:[-120, -132, -101, -134, -190, -230, -210]
          }
      ]
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
