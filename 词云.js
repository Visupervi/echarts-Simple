

//自己实现的菱形词云
function spliteWords() {
  let divs = document.createElement("div");
  divs.className = "keyWordsWrap";
  let uls = document.createElement("ul");
  let keyWords = document.querySelector("#Keywords");
  let str = ``;
  for (let index1 = 0; index1 < 30; index1++) {
    str += `<li class="liItem item${index1 + 1}">${index1 + 1}</li>`
  }
  uls.innerHTML = str;
  divs.appendChild(uls);
  keyWords.appendChild(divs);
  let lis = document.querySelectorAll("li");
  let halfLength = Math.floor(lis.length / 2);
  let base = 2;
  let sum = 0;
  let rowNum = 0;
  let index = 0;
  let baseTop = 0;
  let baseLeft = 30;
  let teampLeft = 0;
  let randomArr = [];

  function init_key_words() {

    while (true) {
      sum += base;
      if (sum <= halfLength) {
        base++;
        rowNum++;
      } else {
        break;
      }
    }
    triangle(reverseTriangle);

    while (true) {
      let randomNum = generateRandomNumber();
      if (randomArr.indexOf(randomNum) < 0) {
        randomArr.push(randomNum)
      }
      if (randomArr.length >= 10) {
        break;
      }
    }


    textStyle(randomArr);
    console.log(lis);


    slidingOver();

    slidingLeave(randomArr);
  }

  function reverseTriangle() {
    for (let k = rowNum; k > 0; k--) {
      console.log(baseTop);
      teampLeft += 10;
      console.log(teampLeft);
      baseTop += 50;
      for (let m = 0; m < k + 1; m++) {
        if (index > lis.length - 1) {
          break;
        } else {
          lis[index].style.top = baseTop + "px";
          lis[index].style.left = (teampLeft + m * 20) + "%";
          console.log(lis[index]);
          index++;
        }

      }
    }
  }

  function triangle(callback) {
    for (let i = 0; i < rowNum + 1; i++) {
      baseTop += 50;
      teampLeft = baseLeft - 10 * i;
      for (let j = 0; j < i + 2; j++) {
        lis[index].style.top = baseTop + "px";
        lis[index].style.left = (teampLeft + j * 20) + "%";
        index++;
      }
    }
    callback();
  }

  function slidingOver() {
    document.querySelector(".keyWordsWrap").addEventListener("mouseover", (e) => {
      console.log(e.target.className.split(/\s+/)[0]);
      // console.log(e.target.)
      if (e.target.className.split(/\s+/)[0] === "liItem") {
        e.target.style.zIndex = 999;
        e.target.style.fontWeight = 600;
        e.target.style.fontSize = "22px";
        e.target.style.textShadow = "15px 10px 2px #ececec";
      }
    })
  }

  function slidingLeave() {
    document.querySelector(".keyWordsWrap").addEventListener("mouseout", (e) => {
      console.log("1233");
      console.log(e.target.className.split(/\s+/)[0]);
      for (let l = 0; l < lis.length; l++) {
        lis[l].style.fontWeight = 400;
        lis[l].style.fontSize = "14px";
        e.target.style.textShadow = "none";
        e.target.style.zIndex = 1;
      }
      textStyle(randomArr, lis);
    })
  }

  function textStyle() {
    for (let q = 0; q < randomArr.length; q++) {
      console.log(randomArr[q]);
      lis[randomArr[q]].style.zIndex = randomArr[q];
      lis[randomArr[q]].style.fontWeight = 600;
      lis[randomArr[q]].style.fontSize = "22px";
      lis[randomArr[q]].style.textShadow = "15px 10px 2px #ececec";
    }
  }

  function generateRandomNumber() {
    return Math.floor(Math.random() * 30);
  }

  init_key_words();
}

//根据echarts与echarts-wordcloud实现词云

function key_words_init() {
  var myChart = echarts.init(document.getElementById('Keywords'));
  var option = {
    tooltip: {
      show: true
    },
    series: [{
      type: "wordCloud",
      gridSize: 40,
      shape: 'diamond',
      sizeRange: [10, 24],
      width: 600,
      height: 400,
      itemStyle: {
        normal: {
          color: function () {
            return "rgb(" + [
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160)].join(",") + ')'
          }
        }
      },
      data: [
        {
          name: " 没有",
          value: 30,
        },
        {
          name: " 屏幕",
          value: 24
        },
        {
          name: " 不错",
          value: 21
        },
        {
          name: " 可以",
          value: 19
        },
        {
          name: " 发货",
          value: 18
        },
        {
          name: " 这个",
          value: 18
        },
        {
          name: " 什么",
          value: 17
        },
        {
          name: " 一个",
          value: 12
        },
        {
          name: " 不好",
          value: 12
        },
        {
          name: " 质量",
          value: 11
        },
        {
          name: " 快递",
          value: 11
        },
        {
          name: " 问题",
          value: 10
        },
        {
          name: " 物流",
          value: 9
        },
        {
          name: " 几天",
          value: 9
        },
        {
          name: " 一般",
          value: 9
        },
        {
          name: " 就是",
          value: 9
        },
        {
          name: " 使用",
          value: 8
        },
        {
          name: " 怎么",
          value: 8
        },
        {
          name: " 电池",
          value: 8
        },
        {
          name: " 不能",
          value: 8
        },
        {
          name: " 速度",
          value: 8
        },
        {
          name: " 客服",
          value: 8
        },
        {
          name: " 一星",
          value: 8
        },
        {
          name: " 拍照",
          value: 8
        },
        {
          name: " 摄像头",
          value: 7
        },
        {
          name: " 外观",
          value: 7
        },
        {
          name: " 包装",
          value: 7
        },
        {
          name: " 到货",
          value: 7
        },
        {
          name: " 有点",
          value: 7
        },
        {
          name: " 抢购",
          value: 6
        },
        {
          name: " 这样",
          value: 6
        },
        {
          name: " 性价比",
          value: 6
        },
        {
          name: " 一般般",
          value: 6
        },
        {
          name: " 出现",
          value: 6
        },
        {
          name: " 以前",
          value: 6
        },
        {
          name: " 知道",
          value: 6
        },
        {
          name: " 一次",
          value: 6
        },
        {
          name: " 真的",
          value: 6
        }
      ]
    }]
  };
  myChart.setOption(option, true);
}

