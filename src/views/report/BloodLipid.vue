<template>
  <el-row>
    <el-row class="data">
      <Subcontent>
        <div slot="subtitle">血脂检测数值</div>
        <div slot="subcontent">
          <el-col :span="23">
            <table>
              <tr style="background-color:#E6E2F3;">
                <td style="border:1px solid #8F82BC;"></td>
                <td style="width:18vw;border:1px solid #8F82BC;">参考范围</td>
                <td style="width:5mm;border:1px solid #8F82BC;"></td>
                <td style="width:18vw;border:1px solid #8F82BC;background-color:#CCC5E2;">{{info.BloodLipid.date_list[0]}}</td>
                <td style="width:18vw;border:1px solid #8F82BC;">{{info.BloodLipid.date_list[1]}}</td>
                <td style="width:18vw;border:1px solid #8F82BC;">{{info.BloodLipid.date_list[2]}}</td>
              </tr>
              <tr v-if="info.BloodLipid.TC_list!==null" style="height:5.6mm;">
            <td style="border:1px solid #8F82BC;">总胆固醇</td>
            <td style="border:1px solid #8F82BC;text-align:center;">0-5.18mmol/L</td>
            <td style="border:1px solid #8F82BC;text-align:center;line-height:12px;">
              <template v-if="info.BloodLipid.TC_list[0].length!=0">
                <span v-if="info.BloodLipid.TC_list[0]>5.18">
                  <img style="width:4mm;height:4mm;" src="../../assets/超标2x.png" alt />
                </span>
                <span v-else>
                  <img style="width:4mm;height:4mm;" src="../../assets/正常2.png" alt />
                </span>
              </template>
            </td>
            <td style="border:1px solid #8F82BC;text-align:center;" v-for="(item,index) in info.BloodLipid.TC_list" :key="index">
              <span
              >{{item}}</span>
            </td>
          </tr>
          <tr v-if="info.BloodLipid.TG_list!==null" style="height:5.6mm;background-color:#E6E2F3;">
            <td style="width:18vw;order:1px solid #8F82BC;">&nbsp;&nbsp;&nbsp;甘油三酯</td>
            <td style="border:1px solid #8F82BC;text-align:center;">0-1.76mmol/L</td>
            <td style="border:1px solid #8F82BC;text-align:center;line-height:12px;">
              <template v-if="info.BloodLipid.TG_list[0].length!=0">
                <span v-if="info.BloodLipid.TG_list[0]>2.27">
                  <img style="width:4mm;height:4mm;" src="../../assets/超标2x.png" alt />
                </span>
                <span v-else-if="info.BloodLipid.TG_list[0]>1.76&&info.BloodLipid.TG_list[0]<2.27">
                  <img style="width:4mm;height:4mm;" src="../../assets/低2.png" alt />
                </span>
                <span v-else>
                  <img style="width:4mm;height:4mm;" src="../../assets/正常2.png" alt />
                </span>
              </template>
            </td>
            <td style="border:1px solid #8F82BC;background-color:#CCC5E2;text-align:center;">
              <span>{{info.BloodLipid.TG_list[0]}}</span>
            </td>
            <td style="border:1px solid #8F82BC;text-align:center;">
              <span>{{info.BloodLipid.TG_list[1]}}</span>
            </td>
            <td style="border:1px solid #8F82BC;text-align:center;">
              <span>{{info.BloodLipid.TG_list[2]}}</span>
            </td>
          </tr>
          <tr v-if="info.BloodLipid.HDL_list!==null" style="height:5.6mm;">
            <td style="border:1px solid #8F82BC;">
              高密度脂蛋白胆固醇
            </td>
            <td style="border:1px solid #8F82BC;text-align:center;">＞1.04mmol/L</td>
            <td style="border:1px solid #8F82BC;text-align:center;line-height:12px;">
              <template v-if="info.BloodLipid.HDL_list.length!=0">
                <span v-if="info.BloodLipid.HDL_list[0]<1.04">
                  <img style="width:4mm;height:4mm;" src="../../assets/低2.png" alt />
                </span>
                <span v-else>
                  <img style="width:4mm;height:4mm;" src="../../assets/正常2.png" alt />
                </span>
              </template>
            </td>
            <td style="border:1px solid #8F82BC;text-align:center;" v-for="(item,index) in info.BloodLipid.HDL_list" :key="index">
              <span
              >{{item}}</span>
            </td>
          </tr>
          <tr style="height:5.6mm;background-color:#E6E2F3;">
            <td style="border:1px solid #8F82BC;">
              低密度脂蛋白胆固醇
            </td>
            <td style="border:1px solid #8F82BC;text-align:center;">0-3.37mmol/L</td>
            <td style="border:1px solid #8F82BC;text-align:center;line-height:12px;">
              <template v-if="info.BloodLipid.LDL_list.length!=0">
                <span v-if="info.BloodLipid.LDL_list[0]>3.37">
                  <img style="width:4mm;height:4mm;" src="../../assets/超标2x.png" alt />
                </span>
                <span v-else>
                  <img style="width:4mm;height:4mm;" src="../../assets/正常2.png" alt />
                </span>
              </template>
            </td>
            <td style="border:1px solid #8F82BC;background-color:#CCC5E2;text-align:center;">
              <span>{{info.BloodLipid.LDL_list[0]}}</span>
            </td>
            <td style="border:1px solid #8F82BC;text-align:center;">
              <span>{{info.BloodLipid.LDL_list[1]}}</span>
            </td>
            <td style="border:1px solid #8F82BC;text-align:center;">
              <span>{{info.BloodLipid.LDL_list[2]}}</span>
            </td>
          </tr>
              <tr style="border:2px solid #E4007F;height:15vh;">
                <td colspan="6" style="border:1px solid #8F82BC;">
                  <div class="myPic">
                    <div class="aside">您的图表</div>
                    <el-col :span="8">
                      <Chart id="high_cholesterol" :data="hct" style="width:29vw;height:15vh;"></Chart>
                    </el-col>
                    <el-col :span="8">
                      <Chart id="low_cholesterol" :data="lct" style="width:29vw;height:15vh;"></Chart>
                    </el-col>
                    <el-col :span="8">
                      <Chart id="triglyceride" :data="triglyceride" style="width:29vw;height:15vh;"></Chart>
                    </el-col>
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
        <div slot="subtitle">血脂评估</div>
        <div slot="subcontent">
          <table>
            <tr style="border:1px solid #5E92C7;background-color:#E6F2FF;">
              <td style="width:18vw;border:1px solid #5E92C7;">
                总胆固醇
              </td>
              <td rowspan='2' style="border:1px solid #5E92C7;">
                  <el-col class="explain">若偏高，是导致动脉硬化与脑梗塞的原因。
                  总胆固醇能强化与维持血管，甘油三酯是体内能量之源，所以适当的数值范围内的总胆固醇和甘油三酯是人体不可缺少的成分。
                  </el-col>
              </td>
              <td rowspan="4" style="width:18vw;border:1px solid #5E92C7;overflow: hidden;">
                <div class="note-title">
                  维持血脂正常
                  <br />小贴士
                </div>
                <el-col :span="24" class="note">
                  • 维持健康体重，控制腰围在正常范围内；
                  <br>
                  • 控制动物脂肪的摄入，避免皮脂、肥肉、猪油、牛油等；
                  <br> • 适量食用植物油或者不饱和脂肪高的食物，比如深海鱼、坚果、牛油果；
                  <br>• 限制饮酒，尽量做到戒酒
                  <br>• 多高纤维食物，如全谷物和蔬菜水果
                  <br>• 每周至少运动（中强度）150分钟
                </el-col>
              </td>
            </tr>
            <tr style="border:1px solid #5E92C7;background-color:#E6F2FF;">
              <td style="width:18vw;border:1px solid #5E92C7;">
                <el-col :span="24">甘油三酯</el-col>
              </td>
            </tr>
            <tr style="border:1px solid #5E92C7;">
              <td style="width:18vw;border:1px solid #5E92C7;">
                <el-col :span="24">
                  高密度
                  <br />脂蛋白胆固醇
                </el-col>
              </td>
              <td style="border:1px solid #5E92C7;">
                <el-col :span="24" class="explain">
                  除去附着于血管的胆固醇，预防动脉硬化。
                  <br />被称作[有益的胆固醇]，会因缺血性心脏病，脑梗塞，糖尿病，吸烟，肥胖等，减少。
                </el-col>
              </td>
            </tr>
            <tr style="border:1px solid #5E92C7;background-color:#E6F2FF;">
              <td style="width:18vw;border:1px solid #5E92C7;">
                <el-col :span="24">
                  低密度脂蛋白胆固醇
                </el-col>
              </td>
              <td style="border:1px solid #5E92C7;">
                <el-col :span="24" class="explain">被称为[有害的胆固醇]、可致动脉硬化。</el-col>
              </td>
            </tr>
          </table>
        </div>
      </Subcontent>
    </el-row>
  </el-row>
</template>
<script>
import warnsmall from "./components/warn-small";
import warn from "./components/warn";
import Chart from "./components/chart";
import Subcontent from "./components/subcontent";
export default {
  data() {
    return {
      hct: {
        backgroundColor: "",
        textStyle: {
          fontSize: 8
        },
        grid: {
          x: 20,
          y: 20,
          x2: 0,
          y2: 20
        },
        title: {
          text: "高密度脂蛋白胆固醇 单位：mmol/L",
          y: "top",
          x: "right",
          textStyle: {
            fontSize: 6.5
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
          data: this.deepReverse(this.info.BloodLipid.date_list)
        },
        yAxis: {
          type: "value",
          scale: true,
          axisLabel: {
            show: true,
            interval: 0,
            textStyle: {
              fontSize: 8 //更改坐标轴文字大小
            }
          },
        },
        series: [
          {
            name: "health",
            type: "scatter",
            // data:[0,0,0],
            data: this.deepReverse(this.info.BloodLipid.HDL_list),
            symbolSize: 5,
            animation: false
          }
        ]
      },
      lct: {
        backgroundColor: "",
        textStyle: {
          fontSize: 8
        },
        grid: {
          x: 20,
          y: 20,
          x2: 0,
          y2: 20
        },
        title: {
          text: "低密度脂蛋白胆固醇 单位：mmol/L",
          y: "top",
          // x: "right",
          textStyle: {
            fontSize: 7
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
          data: this.deepReverse(this.info.BloodLipid.date_list)
        },
        yAxis: {
          type: "value",
          scale: true,
          axisLabel: {
            show: true,
            interval: 0,
            textStyle: {
              fontSize: 7 //更改坐标轴文字大小
            }
          },
        },
        series: [
          {
            name: "health",
            type: "scatter",
            // data:[0,0,0],
            data: this.deepReverse(this.info.BloodLipid.LDL_list),
            symbolSize: 5,
            animation: false
          }
        ]
      },
      triglyceride: {
        backgroundColor: "",
        textStyle: {
          fontSize: 8
        },
        grid: {
          x: 22,
          y: 20,
          x2: 8,
          y2: 20
        },
        title: {
          text: "甘油三酯 单位：mmol/L",
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
          data: this.deepReverse(this.info.BloodLipid.date_list)
        },
        yAxis: {
          type: "value",
          scale: true,
          axisLabel: {
            show: true,
            interval: 0,
            textStyle: {
              fontSize: 7 //更改坐标轴文字大小
            }
          },
        },
        series: [
          {
            name: "health",
            type: "scatter",
            // data:[0,0,0],
            data: this.deepReverse(this.info.BloodLipid.TG_list),
            symbolSize: 5,
            animation: false
          }
        ]
      }
    };
  },
  components: {
    Chart,
    Subcontent,
    warnsmall,
    warn
  },
  created(){
    this.info.BloodLipid.date_list=this.formatNull(this.info.BloodLipid.date_list)
    this.info.BloodLipid.TC_list=this.formatNull(this.info.BloodLipid.TC_list)
    this.info.BloodLipid.TG_list=this.formatNull(this.info.BloodLipid.TG_list)
    this.info.BloodLipid.HDL_list=this.formatNull(this.info.BloodLipid.HDL_list)
    this.info.BloodLipid.LDL_list=this.formatNull(this.info.BloodLipid.LDL_list)
  },
  props:['info'],
  methods: {
    getDataList(objlist) {
      let list = objlist.map(function(item) {
        return item.data;
      });
      return list;
    },
    deepReverse(list){
      if(list==null)
      return []
      return JSON.parse(JSON.stringify(list)).reverse()
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
.explain {
  text-align: left;
  margin: 0 auto;
  word-wrap: break-word;
  word-break: break-all;
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
    font-size: 0.7rem;
    width: 0.7rem;
    line-height: 1rem;
    word-break: break-all;
    word-wrap: break-word;
    color: white;
  }
}
.top-Text {
  background-color: rgba(165, 204, 247, 1);
  font-size: 0.7rem;
  height: 1rem;
  vertical-align: middle;
  text-align: center;
}

.note {
  line-height: 1rem;
  font-size: 0.7rem;
  text-align: left;
  word-break: break-all;
  word-wrap: break-word;
  width: 17vw !important;
}

</style>