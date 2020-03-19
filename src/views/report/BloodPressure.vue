<template>
  <el-row>
    <el-row class="data">
      <Subcontent>
        <div slot="subtitle">循环系统检测</div>
        <div slot="subcontent">
          <el-col :span="23">
            <table style="font-size:0.68rem;">
              <tr style="background-color:#E6E2F3;">
                <td class="his-item"></td>
                <td class="his-item">参考范围</td>
                <td style="width:5mm"></td>
                <td style="width:18vw" class="his-item">{{info.BloodPressure.date_list[0]}}</td>
                <td style="width:18vw" class="his-item">{{info.BloodPressure.date_list[1]}}</td>
                <td style="width:18vw" class="his-item">{{info.BloodPressure.date_list[2]}}</td>
                <td rowspan="4">
                  <div class="myPic">
                    <div class="aside">我的图表</div>
                    <el-col :span="8">
                      <Chart id="bloodpressure" :data="bp" style="width:30vw;height:20vw;"></Chart>
                    </el-col>
                  </div>
                  <div
                    class="ps"
                    style="text-align:left;word-wrap:break-word;word-break:break-all;"
                  >如未连续参加体检,图标的数值无法连线。由于血压容易随状态而变化，建议您不只是在诊室测量在家也测量。</div>
                </td>
              </tr>
              <tr v-if="info.BloodPressure.SBP_list!==null">
                <td>收缩压</td>
                <td>90-140</td>
                <td>
                  <template v-if="info.BloodPressure.SBP_list[0].length!=0">
                    <span v-if="info.BloodPressure.SBP_list[0]<90">
                      <img style="width:4mm;height:4mm;" src="../../assets/超标2x.png" alt />
                    </span>
                    <span v-else-if="info.BloodPressure.SBP_list[0]>=120&&info.BloodPressure.SBP_list[0]<140">
                      <img style="width:4mm;height:4mm;" src="../../assets/低.png" alt />
                    </span>
                    <span v-else-if="info.BloodPressure.SBP_list[0]>=140">
                      <img style="width:4mm;height:4mm;" src="../../assets/超标2x.png" alt />
                    </span>
                    <span v-else>
                      <img style="width:4mm;height:4mm;" src="../../assets/正常2.png" alt />
                    </span>
                  </template>
                </td>
                <td v-for="(item,index) in info.BloodPressure.SBP_list" :key="index">
                  <span>{{item}}</span>
                </td>
              </tr>

              <tr v-if="info.BloodPressure.DBP_list!==null" style="background-color:#E6E2F3;">
                <td>舒张压</td>
                <td>60-90</td>
                <td>
                  <template v-if="info.BloodPressure.DBP_list.length!=0">
                    <span v-if="info.BloodPressure.DBP_list[0]<60">
                      <img style="width:4mm;height:4mm;" src="../../assets/超标2x.png" alt />
                    </span>
                    <span v-else-if="info.BloodPressure.DBP_list[0]>=80&&info.BloodPressure.DBP_list[0]<90">
                      <img style="width:4mm;height:4mm;" src="../../assets/低2.png" alt />
                    </span>
                    <span v-else-if="info.BloodPressure.DBP_list[0]>=90">
                      <img style="width:4mm;height:4mm;" src="../../assets/超标2x.png" alt />
                    </span>
                    <span v-else>
                      <img style="width:4mm;height:4mm;" src="../../assets/正常2.png" alt />
                    </span>
                  </template>
                </td>
                <td style="background-color:#ccc5e2;">
                  <span>{{info.BloodPressure.DBP_list[0]}}</span>
                </td>
                <td>
                  <span>{{info.BloodPressure.DBP_list[1]}}</span>
                </td>
                <td>
                  <span>{{info.BloodPressure.DBP_list[2]}}</span>
                </td>
              </tr>
              <tr v-if="info.BloodPressure.average_BP_list!==null">
                <td>
                  平均
                  <br />血压
                </td>
                <td>70-105</td>
                <td>
                  <template v-if="info.BloodPressure.average_BP_list[0].length!=0">
                    <span v-if="info.BloodPressure.average_BP_list[0]<70">
                      <img style="width:4mm;height:4mm;" src="../../assets/低2.png" alt />
                    </span>
                    <span v-else-if="info.BloodPressure.average_BP_list[0]>=105">
                      <img style="width:4mm;height:4mm;" src="../../assets/超标2x.png" alt />
                    </span>
                    <span v-else>
                      <img style="width:4mm;height:4mm;" src="../../assets/正常2.png" alt />
                    </span>
                  </template>
                </td>
                <td v-for="(item,index) in info.BloodPressure.average_BP_list" :key="index">
                  <span>{{item}}</span>
                </td>
              </tr>
            </table>
          </el-col>
          <el-col :span="1">
            <warnsmall></warnsmall>
          </el-col>
        </div>
      </Subcontent>
    </el-row>
    <el-row class="assess">
      <Subcontent>
        <div slot="subtitle">循环系统评估</div>
        <div slot="subcontent">
          <table>
            <tr style="background-color:#E6F2FF;">
              <td style="width:25vw">
                <el-col :span="24">血压</el-col>
              </td>
              <td colspan="2">
                <el-col :span="24" class="explain">血压测定用于诊断高血压病，高血压是引起脑中风和心脏病、肾脏疾病的重要原因。</el-col>
              </td>
              <td rowspan="2" style="width:20vw;vertical-align:top">
                <div class="note-title">
                  维持正常血压
                  <br />小贴士
                </div>
                <div class="note" style="text-align:left;width:25vw;font-size:0.6rem">
                  • 控制盐的摄入量（每天不超过1茶匙，约6克）;<br>
                  • 控制酱料、腌制、包装食品；<br>
                    • 多全谷物、多蔬菜水果、多低脂奶制品；<br>
                    • 定期食用鱼类、家禽、豆类和坚果；<br>
                    • 少量食用红肉、甜食以及添加糖饮料；<br>
                    • 每周至少运动（中强度）150分钟；<br>
                    • 尽量戒烟
                </div>
              </td>
            </tr>
            <tr>
              <td>
                收缩压/舒张压
              </td>
              <td colspan="2">
                <el-col :span="24" class="explain">
                  <BloodLevel></BloodLevel>
                </el-col>
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
import Chart from "./components/chart";
import Subcontent from "./components/subcontent";
import BloodLevel from './components/bloodlevel'
export default {
  data() {
    return {
      date: "",
      bp: {
        backgroundColor: "",
        textStyle: {
          fontSize: 8
        },
        grid: {
          x: 23,
          y: 20,
          x2: 0,
          y2: 20
        },
        title: {
          text: "血压 单位：mmHg",
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
          data: this.deepReverse(this.info.BloodPressure.date_list)
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
            type: "line",
            data: this.deepReverse(this.info.BloodPressure.SBP_list),
            symbolSize: 5,
            animation: false
          },
          {
            type: "line",
            data: this.deepReverse(this.info.BloodPressure.DBP_list),
            symbolSize: 5,
            animation: false
          }
        ]
      }
    };
  },
  props:['info'],
  components: {
    Chart,
    Subcontent,
    warnsmall,
    BloodLevel
  },
  created(){
    this.info.BloodPressure.date_list=this.formatNull(this.info.BloodPressure.date_list)
    this.info.BloodPressure.SBP_list=this.formatNull(this.info.BloodPressure.SBP_list)
    this.info.BloodPressure.average_BP_list=this.formatNull(this.info.BloodPressure.average_BP_list)
    this.info.BloodPressure.DBP_list=this.formatNull(this.info.BloodPressure.DBP_list)
  },
  methods: {
    getDataList(objlist) {
      let list = objlist.map(function(item) {
        return item.data;
      });
      return list;
    },
    deepReverse(list) {
      if (list == null) return [];
      return JSON.parse(JSON.stringify(list)).reverse();
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
.note {
  word-wrap: break-word;
  word-break: break-all;
  font-size: 0.6rem;
}
.mypic {
  margin-top: 0.5rem;
  display: table;
  .mypic-title {
    display: table-cell;
    word-wrap: break-word;
    word-break: break-all;
    font-size: 0.6rem;
    width: 0.6rem;
    line-height: 0.6rem;
    padding-left: 0.1rem;
    vertical-align: middle;
    color: white;
    background-color: rgba(94, 146, 199, 1);
  }
  .mypic-content {
    display: table-cell;
  }
}
.his-item {
  width: 18vw;
  font-size: 0.55rem
}
.explain {
  text-align: left;
  font-size: 0.67rem;
}
</style>