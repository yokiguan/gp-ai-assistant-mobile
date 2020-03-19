<template>
  <el-row>
    <el-row class="data">
      <Subcontent>
        <div slot="subtitle">肾功能检测</div>
        <div slot="subcontent">
       
          <el-col :span="23">
            <table>
              <tr style="background-color:#E6E2F3;">
                <td style="width:18vw;"></td>
                <td style="width:18vw;">参考范围</td>
                <td></td>
                <td style="width:18vw;background-color:#CCC5E2;">{{info.Kidney.date_list[0]}}</td>
                <td style="width:18vw;">{{info.Kidney.date_list[1]}}</td>
                <td style="width:18vw;">{{info.Kidney.date_list[2]}}</td>
              </tr>
              <tr v-if="info.Kidney.BUN!==null">
            <td>
              <div>BUN（尿素）</div>
            </td>
            <td>1.8-7.1 mmol/L</td>
            <td>
               <template v-if="info.Kidney.BUN[0].length!=0">
              <span v-if="info.Kidney.BUN[0]<1.8">
              <img style="width:4mm;height:4mm;" src="../../assets/低2.png" alt />
              </span><span v-else-if="info.Kidney.BUN[0]>7.1">
              <img style="width:4mm;height:4mm;" src="../../assets/超标2x.png" alt />
              </span><span v-else>
              <img style="width:4mm;height:4mm;" src="../../assets/正常2.png" alt />
              </span>
              </template>
            </td>
            <td v-for="(item,index) in info.Kidney.BUN" :key="index">
                <span
                >{{item}}</span>
              </td>
          </tr>
          <tr v-if="info.Kidney.CRE!==null" style="background-color:#E6E2F3;">
            <td>
              <div>CRE（肌酐）</div>
            </td>
            <td>男 44-132,女 70-106 μmol/L</td>
            <td>
             <template v-if="info.Kidney.CRE[0].length!=0">
              <span v-if="(info.Kidney.CRE[0]<44&&info.PersonInfo.gender=='男')||(info.Kidney.CRE[0]<70&&info.PersonInfo.gender=='女')">
              <img style="width:4mm;height:4mm;" src="../../assets/低2.png" alt />
              </span><span v-else-if="(info.Kidney.CRE[0]>132&&info.PersonInfo.gender=='男')||(info.Kidney.CRE[0]>106&&info.PersonInfo.gender=='女')">
              <img style="width:mm;height:4mm;" src="../../assets/超标2x.png" alt />
              </span><span v-else>
              <img style="width:4mm;height:4mm;" src="../../assets/正常2.png" alt />
              </span>
              </template>
            </td>
            <td style="background-color:#ccc5e2;">
              <span>{{info.Kidney.CRE[0]}}</span>
            </td>
            <td>
              <span>{{info.Kidney.CRE[1]}}</span>
            </td>
            <td>
              <span>{{info.Kidney.CRE[2]}}</span>
            </td>
          </tr>
              <tr>
                <td>
                  <div>eGFR（预测肾小球滤过率）</div>
                </td>
                <td>
                  80 -120 ml/(min x 1.73m
                  <sup>2</sup>)
                </td>
                <td>
                </td>
                <td></td>
                <td></td>
                <td></td>
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
        <div slot="subtitle">肾功能评估</div>
        <div slot="subcontent">
          <table>
            <tr style="border:1px solid #5E92C7;background-color:#E6F2FF;">
              <td style="border:1px solid #5E92C7;">
                <el-col :span="3" style="width:18vw">
                  BUN(血尿素氮)
                  <br />CRE(肌酐)
                </el-col>
              </td>
              <td style="border:1px solid #5E92C7;width:30vw;">
                <div class="explain">是人体蛋白质代谢的终末产物，大部分从尿液中排出。肾脏的排出机能低下时，在血中的浓度会变高。肾疾患或尿路闭塞时显示高值。</div>
              </td>
              <td rowspan="3" class style="width:35vw;border:1px solid #5E92C7;">
                <div class="note-title">维持肾功能<br>正常小贴士</div>
                <el-col :span="13">
                  <div class="note" style="width:35vw">
                    • 避免暴饮暴食、精神紧张、过劳、睡眠不足；<br>
                    • 控制盐的摄入量<br>
                    • 避免憋尿<br>
                  </div>
                </el-col>
              </td>
            </tr>
            <tr style="border:1px solid #5E92C7;">
              <td style="border:1px solid #5E92C7;">eGFR</td>
              <td>
                <div class="explain">
                  <span></span>
                </div>
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
import Subcontent from "./components/subcontent";
export default {
  data() {
    return {};
  },
  created(){
    this.info.Kidney.date_list=this.formatNull(this.info.Kidney.date_list)
    this.info.Kidney.CRE=this.formatNull(this.info.Kidney.CRE)
    this.info.Kidney.BUN=this.formatNull(this.info.Kidney.BUN)
  },
  components: {
    Subcontent,
    warnsmall
  },
  methods:{
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
  },
  props:['info']
};
</script>
<style lang="scss" scoped>
.explain {
  width: 43vw;
}
</style>