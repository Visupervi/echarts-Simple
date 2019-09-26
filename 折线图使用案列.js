
//单折线
function widget_month_render(data) {
  //获取元素组件
  var myChart = echarts.init(document.getElementById('shopTours'));
  //获取数据
  //所有年月
  var allUserMonth = [];
  //每个月发视频人数
  var cntAllUser = [];
  //每个月发的视频数量
  var cntAllContent = [];
  let totalIssue = [];
  var eachData;
  if (data && data.data && data.data.data && data.data.data.rows) {
    var myData = data.data.data.rows;
    for (var index in myData) {
      eachData = myData[index];
      allUserMonth.push(eachData.create_date);
      cntAllUser.push(eachData.inspection_user_num);
      cntAllContent.push(eachData.report_num);
      totalIssue.push(eachData.total_issue_num);
    }
  }

  var option = {
    "title": {
      "text": "巡店问题趋势",
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
        var res = "日期" + ' : ' + params[0].name;
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
      height: 200,
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
        "name": "巡店次数",
        "type": "line",
        smooth: true,
        areaStyle: {},
        lineStyle: {
          color: '#0099FF',
          width: 2,
        },
        itemStyle: {
          color: {
            type: 'liner',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 1,
                color: '#ffffff' // 0% 处的颜色
              },
              {
                offset: 0.2,
                color: '#7EC5FF'
              },
              {
                offset: 0,
                color: '#0099FF' // 100% 处的颜色
              }],
            globalCoord: false
          },
        },
        formatter: '{value}' + '%',
        "data": cntAllUser,
      },
      {
        "name": "报告数量",
        "type": "line",
        smooth: true,
        areaStyle: {},
        lineStyle: {
          color: '#F7B500',
          width: 2,
        },
        itemStyle: {
          color: {
            type: 'liner',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 1,
                color: '#ffffff' // 0% 处的颜色
              },
              {
                offset: 0.2,
                color: '#FFCA85'
              },
              {
                offset: 0,
                color: '#F7B500' // 100% 处的颜色
              }],
            globalCoord: false
          },
        },
        formatter: '{value}' + '%',
        "data": cntAllContent,
      },
      {
        "name": "问题数量",
        "type": "line",
        smooth: true,
        areaStyle: {},
        lineStyle: {
          color: '#61D1B5',
          width: 2,
        },
        itemStyle: {
          color: {
            type: 'liner',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 1,
                color: '#ffffff' // 0% 处的颜色
              },
              {
                offset: 0.2,
                color: '#99FEE0'
              },
              {
                offset: 0,
                color: '#61D1B5' // 100% 处的颜色
              }],
            globalCoord: false
          },
        },
        formatter: '{value}' + '%',
        "data": totalIssue,
      },
    ],
    legend: {
      data: ['巡店次数', '报告数量', '问题数量'],
      icon: 'line',
      itemWidth: 50,//图例图标宽度
      itemHeight: 30//图例图标高度
    }
  };
  myChart.setOption(option, true);
}

//多条折线
function widget_month_render(data) {
  //获取元素组件
  var myChart = echarts.init(document.getElementById('shopTours'));
  //获取数据
  //所有年月
  var allUserMonth = [];
  //每个月发视频人数
  var cntAllUser = [];
  //每个月发的视频数量
  var cntAllContent = [];
  let totalIssue = [];
  var eachData;
  if (data && data.data && data.data.data && data.data.data.rows) {
    var myData = data.data.data.rows;
    for (var index in myData) {
      eachData = myData[index];
      allUserMonth.push(eachData.create_date);
      cntAllUser.push(eachData.inspection_user_num);
      cntAllContent.push(eachData.report_num);
      totalIssue.push(eachData.total_issue_num);
    }
  }

  var option = {
    "title": {
      "text": "巡店问题趋势",
      "x": "left",
      textStyle: {
        fontSize: 14,
        fontWeight: 600,
        top: 10
      },
      top: 10
    },
    color:['#0099FF','#F7B500','#61D1B5'],
    "tooltip": {
      "trigger": "axis",
      formatter: function (params, ticket) {
        var res = "日期" + ' : ' + params[0].name;
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
      height: 200,
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
        "name": "巡店次数",
        "type": "line",
        smooth: true,
        areaStyle: {
          normal:{
            color: {
              type: 'liner',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: '#ffffff' // 0% 处的颜色
                },
                {
                  offset: 0.2,
                  color: '#7EC5FF'
                },
                {
                  offset: 1,
                  color: '#0099FF' // 100% 处的颜色
                }],
              globalCoord: false
            },
          }
        },
        lineStyle: {
          normal:{
            color: '#0099FF',
          },
          width: 2,
        },
        itemStyle: {

        },
        formatter: '{value}' + '%',
        "data": cntAllUser,
      },
      {
        "name": "报告数量",
        "type": "line",
        smooth: true,
        areaStyle: {
          normal:{
            color: {
              type: 'liner',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 1,
                  color: '#ffffff' // 0% 处的颜色
                },
                {
                  offset: 0.2,
                  color: '#FFCA85'
                },
                {
                  offset: 0,
                  color: '#F7B500' // 100% 处的颜色
                }],
              globalCoord: false
            },
          }
        },
        lineStyle: {
          normal:{
            color: '#F7B500'
          },
          width: 2,
        },
        itemStyle: {

        },
        formatter: '{value}' + '%',
        "data": cntAllContent,
      },
      {
        "name": "问题数量",
        "type": "line",
        smooth: true,
        areaStyle: {
          color: {
            type: 'liner',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 1,
                color: '#ffffff' // 0% 处的颜色
              },
              {
                offset: 0.2,
                color: '#99FEE0'
              },
              {
                offset: 0,
                color: '#61D1B5' // 100% 处的颜色
              }],
            globalCoord: false
          },

        },
        lineStyle: {
          normal:{
            color: '#61D1B5'
          },
          width: 2,
        },
        itemStyle: {

        },
        formatter: '{value}' + '%',
        "data": totalIssue,
      },
    ],
    legend:{
      data: ['巡店次数', '报告数量', '问题数量'],
      itemWidth:30,//图例图标宽度
      itemHeight:2,//图例图标高度
      icon:"rect",
      y:'bottom',
      itemGap:30,
      textStyle:{

      }
    }
  };
  myChart.setOption(option, true);
}
