<template>
  <el-row>
    <el-row class="data">
      <Subcontent>
        <div slot="subtitle">身体检测数值</div>
        <div slot="subcontent">
          <el-col :span="23">
            <table>
              <tr style="background-color:#E6E2F3;">
                <td></td>
                <td>参考范围</td>
                <td></td>
                <td style="background-color:#CCC5E2;">{{info.BodyValue.date_list[0]}}</td>
                <td>{{info.BodyValue.date_list[1]}}</td>
                <td>{{info.BodyValue.date_list[2]}}</td>
              </tr>
              <tr v-if="info.BodyValue.height_list!==null">
                <td style="border:1px solid #8F82BC;">&nbsp;&nbsp;&nbsp;身高（cm）</td>
                <td style="border:1px solid #8F82BC;text-align:center;">N/A</td>
                <td style="border:1px solid #8F82BC;text-align:center;line-height:12px;"></td>
                <td
                  v-for="(item,index) in info.BodyValue.height_list"
                  :key="index"
                  style="border:1px solid #8F82BC;text-align:center;"
                >
                  <span>{{item}}</span>
                </td>
              </tr>

              <tr v-if="info.BodyValue.weight_list!==null" style="background-color:#E6E2F3;">
                <td style="border:1px solid #8F82BC;">&nbsp;&nbsp;&nbsp;体重（kg）</td>
                <td style="border:1px solid #8F82BC;text-align:center;">N/A</td>
                <td style="border:1px solid #8F82BC;text-align:center;line-height:12px;"></td>
                <td style="border:1px solid #8F82BC;background-color:#CCC5E2;text-align:center;">
                  <span>{{info.BodyValue.weight_list[0]}}</span>
                </td>
                <td style="border:1px solid #8F82BC;text-align:center;">
                  <span>{{info.BodyValue.weight_list[1]}}</span>
                </td>
                <td style="border:1px solid #8F82BC;text-align:center;">
                  <span>{{info.BodyValue.weight_list[2]}}</span>
                </td>
              </tr>
              <tr v-if="info.BodyValue.BMI_list!==null">
                <td style="border:1px solid #8F82BC;">&nbsp;&nbsp;&nbsp;BMI</td>
                <td style="border:1px solid #8F82BC;text-align:center;">18.5~23.9</td>
                <td style="border:1px solid #8F82BC;text-align:center;line-height:12px;">
                  <template v-if="info.BodyValue.BMI_list[0].length!=0">
                    <span v-if="info.BodyValue.BMI_list[0]<18.5">
                      <img style="width:5mm;height:5mm;" src="../../assets/低2.png" alt />
                    </span>
                    <span v-else-if="info.BodyValue.BMI_list[0]>23.9">
                      <img style="width:5mm;height:5mm;" src="../../assets/超标2x.png" alt />
                    </span>
                    <span v-else>
                      <img style="width:5mm;height:5mm;" src="../../assets/正常2.png" alt />
                    </span>
                  </template>
                </td>
                <td
                  v-for="(item,index) in info.BodyValue.BMI_list"
                  :key="index"
                  style="border:1px solid #8F82BC;text-align:center;"
                >
                  <span>{{item}}</span>
                </td>
              </tr>
              <tr v-if="info.BodyValue.waist_list!==null" style="background-color:#E6E2F3;">
                <td style="border:1px solid #8F82BC;">&nbsp;&nbsp;&nbsp;腹围</td>
                <td style="border:1px solid #8F82BC;text-align:center;">N/A</td>
                <td style="border:1px solid #8F82BC;text-align:center;"></td>
                <td
                  v-for="(item,index) in info.BodyValue.waist_list"
                  :key="index"
                  style="border:1px solid #8F82BC;text-align:center;"
                >
                  <span>{{item}}</span>
                </td>
              </tr>
              <tr>
                <td colspan="6">
                  <div class="myPic">
                    <div class="aside">您的图表</div>
                    <el-col :span="8">
                      <Chart id="weight" :data="weight" style="width:27vw;height:15vh;"></Chart>
                    </el-col>
                    <el-col :span="8">
                      <Chart id="BMI" :data="BMI" style="width:27vw;height:15vh;"></Chart>
                    </el-col>
                    <el-col :span="8">
                      <Chart id="belly" :data="belly" style="width:27vw;height:15vh;"></Chart>
                    </el-col>
                    <div class="ps">如未连续参加体检，图标的数值无法连线。</div>
                  </div>
                </td>
              </tr>
            </table>
          </el-col>
          <el-col :span="1">
            <warn></warn>
          </el-col>
        </div>
      </Subcontent>
    </el-row>
    <el-row class="assess">
      <Subcontent>
        <div slot="subtitle">身体检测评估</div>
        <div slot="subcontent" class="access">
          <div class="body-content">
            <div class="content-table">
              <table>
                <tr style="background-color: rgba(165, 204, 247, 1)">
                  <td>类别</td>
                  <td colspan="2">解释</td>
                </tr>
                <tr style="background-color:#E6F2FF;">
                  <td style="border:1px solid rgba(94,146,199,1);min-width:10vw;">
                    理想
                    <br />体重(kg)
                  </td>
                  <td>
                    <div class="bv-explain">
                      自己的体重和标准体重做对比来判定肥胖程度
                      若是肥胖，向全身运输血液的量就会增加、心脏和血管壁的负担会增加
                      <span
                        style="color:#FF9306"
                      >容易引起心肥大等心脏疾病和高血压等生活习惯病</span>
                      <span v-if="isString(info.BodyValue.WeightRange)">{{info.BodyValue.WeightRange}}</span>
                    <span v-else>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{info.BodyValue.WeightRange[0]}}-{{info.BodyValue.WeightRange[1]}}kg</span>
                    </div>
                  </td>
                  <td
                    rowspan="3"
                    style="vertical-align:top;border:1px solid rgba(94,146,199,1);background-color:#E6F2FF;"
                  >
                    <div class="note-title" style="width:24vw">维持体重小贴士</div>
                    <div class="note" style="width:24vw;font-size:0.6rem;">
                      • 维持健康的饮食习惯；
                      <br />• 多高纤维食物，如全谷物和蔬菜水果；
                      <br />•
                      选择低脂的优质蛋白
                      <br />• 控制每餐的份量
                      <br />• 持之以恒的运动
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="border:1px solid rgba(94,146,199,1);">BMI</td>
                  <td style="border:1px solid rgba(94,146,199,1);width: 70vw;">
                    <div class="bv-explain">
                      肥胖程度的表示指数
                      <span
                        style="margin-left:0.1rem;font-size:1rem;color:rgba(94,146,199,1);border:1px solid rgba(94,146,199,1)"
                      >BMI</span>=体重÷身高
                      <sup>2</sup>
                      <span>
                        <br />BMI在
                        <span style="color:orange;">22前后的人最不容易得病而且死亡率也是最低的</span>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr style="border:1px solid rgba(94,146,199,1);background-color:#E6F2FF;">
                  <td style="border:1px solid rgba(94,146,199,1);">腹围</td>
                  <td style="border:1px solid rgba(94,146,199,1);width:70vw;">
                    <div class="bv-explain">
                      <div>腹围是判断内脏脂肪的程度、代谢综合征判定的基准之一</div>
                      <span class="bottom">
                        腹围在标准值以下、但是内脏脂肪面积在100cm
                        <sup>2</sup>以上者，想知道正确的状态，要通过腹部CT扫描来测定
                        <br />建议每年做一次体检，正确把握自己的健康状态十分重要
                      </span>
                    </div>
                    <div class="top">代谢综合征判定的判断标准</div>
                    <el-row class="condition">
                      <el-col :span="10" class="num2">
                        <div class="leftDiv">必须项</div>
                        <div class="leftText">
                          <div>腹围</div>
                          <span class="orange">男性85.0cm，女性90.0cm~</span>
                          <span>内脏脂肪的面积</span>
                          <div>无论男女100cm²以上</div>
                        </div>
                      </el-col>
                      <el-col :span="14" class="num2">
                        <div class="leftDiv">选择项</div>
                        <div class="leftcontent leftText">
                          <span class="orange">甘油三酯超过150mg/dl</span>
                          ，以上/并且/或者高密度脂蛋白胆固醇
                          <span class="orange">40mg/dL未满</span>
                          收缩期（最高）血压超过
                          <span class="orange">130mmHg以上</span>
                          /并且/或者
                          扩张期（最低）血压超过
                          <span
                            class="orange"
                          >85mmHg以上</span>
                          空腹时血糖超过
                          <span class="orange">110mg/dL以上</span>
                          /并且/或者
                          <span class="orange">HbA1c6.0%以上</span>（NGSP）
                        </div>
                      </el-col>
                    </el-row>
                    <div class="bv-explain">脂质异常症（高血脂症）、高血压、糖尿病接受药物治疗时，也请包括在以上的项目内。</div>
                  </td>
                </tr>
                <tr></tr>
              </table>
            </div>
          </div>
        </div>
      </Subcontent>
    </el-row>
  </el-row>
</template>
<script>
import warn from "./components/warn";
import Chart from "./components/chart";
import Subcontent from "./components/subcontent";
export default {
  data() {
    return {
      weight: {
        backgroundColor: "",
        textStyle: {
          fontSize: 6
        },
        grid: {
          x: 20,
          y: 20,
          x2: 0,
          y2: 20
        },
        title: {
          text: "体重 单位：kg",
          y: "top",
          x: "right",
          textStyle: {
            fontSize: 8
          }
        },
        xAxis: {
          type: "category",
          axisLabel: {
            show: true,
            interval: 0,
            textStyle: {
              fontSize: 6 //更改坐标轴文字大小
            }
          },
          data: this.deepReverse(this.info.BodyValue.date_list)
        },
        yAxis: {
          type: "value",
          scale: true,
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: 7 //更改坐标轴文字大小
            }
          }
        },
        series: [
          {
            name: "health",
            type: "scatter",
            data: this.deepReverse(this.info.BodyValue.weight_list),
            symbolSize: 5,
            animation: false
          }
        ]
      },
      BMI: {
        backgroundColor: "",
        grid: {
          x: 18,
          y: 20,
          x2: 0,
          y2: 20
        },
        textStyle: {
          fontSize: 8
        },
        title: {
          text: "BMI 单位：m/(kg2)",
          y: "top",
          x: "right",
          textStyle: {
            fontSize: 8
          }
        },
        xAxis: {
          type: "category",
          axisLabel: {
            show: true,
            interval: 0,
            textStyle: {
              fontSize: 6 //更改坐标轴文字大小
            }
          },
          data: this.deepReverse(this.info.BodyValue.date_list)
        },
        yAxis: {
          type: "value",
          scale: true,
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: 7 //更改坐标轴文字大小
            }
          },
          data: ["10%", "10%", "10%"]
        },
        series: [
          {
            name: "health",
            type: "scatter",
            data: this.deepReverse(this.info.BodyValue.BMI_list),
            symbolSize: 5,
            animation: false
          }
        ]
      },
      belly: {
        backgroundColor: "",
        grid: {
          x: 18,
          y: 20,
          x2: 0,
          y2: 20
        },
        textStyle: {
          fontSize: 8
        },
        title: {
          text: "腹围 单位：cm",
          y: "top",
          x: "right",
          textStyle: {
            fontSize: 8
          }
        },
        xAxis: {
          type: "category",
          axisLabel: {
            show: true,
            interval: 0,
            textStyle: {
              fontSize: 6 //更改坐标轴文字大小
            }
          },
          data: this.deepReverse(this.info.BodyValue.date_list)
        },
        yAxis: {
          type: "value",
          scale: true,
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: 6 //更改坐标轴文字大小
            }
          },
          data: ["10%", "10%", "10%"]
        },
        series: [
          {
            name: "health",
            type: "scatter",
            data: this.deepReverse(this.info.BodyValue.waist_list),
            symbolSize: 5,
            animation: false
          }
        ]
      }
    };
  },
  props: ["info"],
  components: {
    Chart,
    Subcontent,
    warn
  },
  created(){
    this.info.BodyValue.date_list=this.formatNull(this.info.BodyValue.date_list)
    this.info.BodyValue.height_list=this.formatNull(this.info.BodyValue.height_list)
    this.info.BodyValue.weight_list=this.formatNull(this.info.BodyValue.weight_list)
    this.info.BodyValue.waist_list=this.formatNull(this.info.BodyValue.waist_list)
    this.info.BodyValue.BMI_list=this.formatNull(this.info.BodyValue.BMI_list)
  },
  methods: {
    getDataList(objlist) {
      let list = objlist.map(function(item) {
        return item.data;
      });
      return list;
    },
    deepReverse(list) {
      if (list == null) return new Array();
      else return JSON.parse(JSON.stringify(list)).reverse();
    },
    isString(str){
      return (typeof str=='string')&&str.constructor==String; 
    },
    formatNull(list){
      if(list==null)
      return null
      list=list.map((item)=>{
        if(item==null)
        return ''
        else return item
      })
      return list
    }
  }
};
</script>
<style lang="scss">
.note-title {
  color: white;
  word-wrap: break-word;
  word-break: normal;
  background-color: rgba(94, 146, 199, 1);
  margin-bottom: 0.5rem;
}
.recentRisk {
  font-size: 0.78rem;
  text-align: left;
  word-wrap: break-word;
  word-break: break-all;
}
.line {
  width: 98vw;
  height: 0.1rem;
  background: rgba(94, 146, 199, 1);
}
.bv-explain {
  text-align: left;
  word-wrap: break-word;
  word-break: break-all;
  font-size: 0.6rem;
}
.subcontent {
  div {
    table {
      font-size: 0.68rem;
      width: 88vw;
      border-collapse: collapse;
      tr {
        width: 98vw;
        vertical-align: middle;
        td {
          text-align: center;
          border: 0.01rem solid #8f82bc;
          img {
            height: 0.7rem;
            width: 0.7rem;
          }
        }
      }
    }
  }
}
.myPic {
  display: table;
  .aside {
    height: 100%;
    display: table-cell;
    vertical-align: middle;
    background-color: #e4007f;
    font-size: 0.8rem;
    width: 1rem;
    line-height: 1rem;
    word-break: break-all;
    word-wrap: break-word;
    color: white;
  }
}
.ps {
  text-align: end;
  font-size: 0.6rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(174, 93, 161, 1);
}

.note {
  line-height: 1rem;
  font-size: 0.7rem;
  text-align: left;
  width: 30vw;
}
.footer {
  text-align: center;
}
.condition {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  .num2 {
    margin-left: 0.5vw;
    height: 16vh;
    display: table;
    border: none;
    background-color: #fff;
    font-size: 0.6rem;
    .leftDiv {
      display: table-cell;
      width: 0.8rem;
      line-height: 0.8rem;
      word-break: break-all;
      font-size: 0.8rem;
      vertical-align: middle;
      background-color: #5e92c7;
      color: #fff;
    }
    .leftText {
      text-align: left;
      vertical-align: middle;
      display: table-cell;
      word-wrap: none;
    }
  }
}
.orange {
  color: orange;
}
.innerBox {
  font-size: 0.65rem;
  text-align: left;
  width: 47vw;
  word-wrap: break-word;
  word-break: break-all;
  white-space: normal;
}
.isScale {
  font-size: 0.65rem;
  width: 22vw;
}
.top {
  font-size: 0.7rem;
  text-align: left;
  padding-left: 0.5rem;
  font-weight: bold;
  //   width: 22vw;
}
.bottom {
  word-wrap: break-word;
  word-break: break-all;
  white-space: normal;
  text-align: left;
  //   margin-left: 0.5rem;
}
</style>