
//横向百分比柱状图
function widget_proportion_render(data) {
  console.log(data);
  let issueArr = data.data.data.rows.slice(0,10);
  let max = 100;
  let dataShadow = [];
  let xData = [];
  let yData = [];
  for(let j = 0 ; j < issueArr.length; j++){
    dataShadow.push(max);
    xData.push(issueArr[j].name);
    console.log(issueArr[j].element_rate);
    yData.push(issueArr[j].element_rate.split("%")[0]);
  }
  console.log(data);
  var myChart = echarts.init(document.getElementById('proportion'));
  var option = {
    backgroundColor: '#ffffff',
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0,0,0,0.5)',
      textStyle: {
        color: '#ffffff',
      },
      formatter: function (params, ticket) {
        var res = "分类名称" + ' : ' + params[0].name;
        for (var i = 0, l = params.length; i < l; i++) {
          res += '<br/>' + params[i].seriesName + ' : ' + params[i].value +"%";
        }
        return res;
      },
      z:5
    },
    grid: {
      top: '0.5%',
      left: '3%',
      right: '11%',
      bottom: '2.5%',
      containLabel: true
    },
    yAxis: [{
      type: 'category',
      data: xData,
      inverse: true,
      axisTick: {
        show: false,
      },
      axisLabel: {
        margin: 10,
        textStyle: {
          fontSize: 10,
          color: '#9B9B9B'
        }
      },
      axisLine: {
        show: false,
      },

    }],
    xAxis: [{
      show:false,
      type: 'value',
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        show: false,
      }
    }],
    series: [
      {
        name: '分类问题率',
        type: 'bar',
        data: yData,
        z:3,
        stack: '广告',
        label: {
          normal: {
            show: true,
            position: 'insideLeft',
            textStyle: {
              color: 'blue', //color of value
              fontSize: 10,
            }
          }
        },
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0,
              color: '#0299FF' // 0% 处的颜色
            }, {
              offset: 1,
              color: '#86E5FF' // 100% 处的颜色
            }], false),
            barBorderRadius: [15, 15, 15, 15],
          },
        }
      },
      {
        name:"总（100%)",
        type: 'bar',
        stack: '广告',
        z:0,
        itemStyle: {
          normal: {
            color: 'rgba(237,237,237,1)',
            barBorderRadius: [0, 15, 15, 0],
          }
        },
        barGap:'-100%',
        barCategoryGap:'40%',
        data: dataShadow,
        barWidth: 26,
        animation: false
      }

    ]
  };
  myChart.setOption(option, true);
}

// 竖向堆叠柱状图

function widget_render(data) {
  //获取元素组件
  var myChart = echarts.init(document.getElementById('feedbackTimes'));
  //获取数据
  //所有年月
  var allUserMonth = [];
  //每个月发视频人数
  var cntAllUser = [];
  //每个月发的视频数量
  var cntAllContent = [];
  var shopNum = [];
  var eachData;
  if (data && data.data && data.data.data && data.data.data.rows) {
    var myData = data.data.data.rows.slice(0, 10);
    for (var index in myData) {
      eachData = myData[index];
      allUserMonth.push(eachData.area_name);
      cntAllUser.push(eachData.feedback_num);
      cntAllContent.push(eachData.shop_num);
      shopNum.push(eachData.shop_num);
    }
  }

  var option = {
    "title": {
      "text": "区域问题率",
      "x": "left",
      textStyle: {
        fontSize: 14,
        fontWeight: 600,
        top: 10
      },
      top: 10
    },
    "tooltip": {
      "trigger": "axis",
      formatter: function (params, ticket) {
        console.log(params);
        var res = "区域" + ' : ' + params[0].name;
        for (var i = 0, l = params.length; i < l; i++) {
          res += '<br/>' + params[i].seriesName + ' : ' + params[i].value;
        }
        return res;
      }
    },
    "grid": {
      "borderWidth": 0,
      "top": 50,
      x: 50,
      y: 15,
      x2: 5,
      y2: 20,
      height: 150,
      textStyle: {
        color: "#daa520"
      }
    },
    "calculable": true,
    "xAxis": [
      {
        "type": "category",
        "axisLine": {
          lineStyle: {
            color: '#bbb',
            width: 1,
            type: 'line'
          }
        },
        "splitLine": {
          "show": false
        },
        "axisTick": {
          "show": false
        },
        "splitArea": {
          "show": false
        },
        "axisLabel": {
          "interval": 0,
          rotate: 40,
          textStyle: {
            fontSize: 10
          }

        },
        "data": allUserMonth,
      }
    ],
    "yAxis": [{
      "type": "value",
      "name": "",
      "splitLine": {
        "show": true
      },
      "axisLine": {
        lineStyle: {
          color: '#bbb',
          width: 0,
          type: 'solid'
        }
      },
      "axisTick": {
        "show": false
      },
      "axisLabel": {
        "interval": 0,
        formatter: '{value}',

      },
      "splitArea": {
        "show": false
      },

    },
    ],
    "series": [
      {
        "name": "反馈数量",
        "type": "bar",
        stack: 'sum',
        smooth: true,
        areaStyle: {},
        lineStyle: {
          color: '#0099FF',
          width: 2,
        },
        itemStyle: {
          color: "#0099FF"
        },
        formatter: '{value}' + '%',
        "data": cntAllUser,
      },
      {
        "name": "任务数量",
        "type": "bar",
        stack: 'sum',
        smooth: true,
        areaStyle: {},
        lineStyle: {
          color: '#0099FF',
          width: 2,
        },
        itemStyle: {
          color: "#F7B500"
        },
        formatter: '{value}' + '%',
        "data": cntAllContent,
      },
      {
        "name": "店铺数量",
        "type": "bar",
        stack: 'sum',
        smooth: true,
        areaStyle: {},
        lineStyle: {
          color: '#0099FF',
          width: 2,
        },
        itemStyle: {
          color: "#61D1B5",
        },
        formatter: '{value}' + '%',
        "data": shopNum,
      },

    ]
  }
  myChart.setOption(option, true);
}