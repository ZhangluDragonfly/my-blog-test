<template>
    <div class='map-page'>
        <div class="wrapper">
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <div id="map"></div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam optio quasi sapiente labore enim nisi sit, facere adipisci corrupti distinctio. Fuga eos in debitis recusandae rerum minus nulla sint, doloribus?
        </div>
    </div>

</template>

<script>
import echarts from 'echarts'
import qingdao from '@/data/qingdaoMap'
echarts.registerMap('qingdao', qingdao)
export default {
  name: 'pageMap',
  data () {
    return {
        chartData: [{
            name:'石老人海水浴场',
            value:[120.4749578705869,36.09677744655061]
            },{
            name:'雕塑公园',
            value:[120.45888630197908,36.08335795461741]
            },{
            name:'麦岛',
            value:[120.43366412902266,36.06812909228539]
            },{
            name:'青岛国际帆船中心',
            value:[120.38442818368189,36.10521490127382]
            },{
            name:'五四广场',
            value:[120.39179227126952,36.06756706347938]
            },{
            name:'第三海水浴场',
            value:[120.37218320161426,36.05874181059886]
            },{
            name:'第二海水浴场',
            value:[120.35756225357449,36.056985565818295]
            },{
            name:'八大关',
            value:[120.35744245734828,36.06010394932381]
            },{
            name:'鲁迅公园',
            value:[120.33941867144345,36.06080661504712]
            },{
            name:'小青岛' ,
            value:[120.33053623105232,36.05893321462793]
            },{
            name:'第一海水浴场',
            value:[120.34810062531596,36.06356765459032]
            },{
            name:'栈桥',
            value:[120.32773082294467,36.06925688406502]
            },{
            name:'青岛火车站',
            value:[120.32018840105226,36.06919574693831]
            },{
            name:'李村公园',
            value:[120.43265572449448,36.17194031737329]
            },{
            name:'中山公园',
            value:[120.36920172562665,36.068577429233]
            },{
            name:'大学路',
            value:[120.34042501436052,36.06874362125199]
            },{
            name:'信号山公园',
            value:[120.33822347775904,36.072830733366175]
            },{
            name:'浮山森林公园',
            value:[120.43086672930863,36.09206201215446]
            },{
            name:'东海东路',
            value:[120.45374246539158,36.08008008081891]
            },{
            name:'中国海洋大学(崂山校区)',
            value:[120.50430114942633,36.16803934617243]
            },{
            name:'黄岛区唐港湾滨海公园',
            value:[120.16954109898127,36.005019406171535]
            },{
            name:'黄岛区金沙滩',
            value:[120.25287237120372,35.96506524119216]
            }
        ]
    }
  },
  mounted() {
    const mapElement = document.getElementById('map')
    var myChart = echarts.init(mapElement);
    var option = {
      backgroundColor: '#404a59',
      title: {
        text: '2016要去的地方',
        left: 'center',
        textStyle: {
          color: '#fff'
        }
      },
      tooltip: {
        trigger: 'item'
      },
      toolbox: {
          show: true,
          feature: {
              saveAsImage: {
                  show: true
              }
          }
      },
      geo: {
        map: 'qingdao',
        label: {
          normal: {
            show: true
          },
          emphasis: {
            show: true
          }
        },
        roam: true,
        center: [120.36920172562665,36.068577429233],
        zoom: 8,
        //selectedMode: true,
        itemStyle: {
          /*normal: {
            areaColor: 'rgba(51, 122, 183, 0.66)',
            borderColor: '#111'
          },*/
          emphasis: {
            areaColor: '#d9edf7'
          }
        }
      },
      series: [{
        name: '地址',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: this.chartData,
        symbol: 'pin',
        symbolSize: function(val) {
          return 20;
        },
        hoverAnimation: false
      }]
    };
    myChart.setOption(option);
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.map-page {
    background: #eee;
}
.wrapper
{
    background: #fff;
    width: 1000px;
    height: 1000px;
    margin: 50px auto 0;
    border-left: solid 2px #ddd;
    border-right: solid 2px #ddd;
    padding: 20px;

}

#map {
  margin: 15px auto;
  width: 100%;
  height: 500px;
}

</style>
