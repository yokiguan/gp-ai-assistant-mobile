<template>
  <el-row>
    <el-row class="data">
      <Subcontent>
        <div slot="subtitle">糖代谢检测数值</div>
        <div slot="subcontent">
          <el-col :span="23">
            <table style="min-height:100px">
          <tr style="background-color:#E6E2F3;">
            <td style="width:40mm;border:1px solid #8F82BC;"></td>
            <td style="width:35mm;text-align:center;border:1px solid #8F82BC;">参考范围</td>
            <td style="width:7.5mm;text-align:center;border:1px solid #8F82BC;"></td>
            <td
              style="width:32.5mm;text-align:center;border:1px solid #8F82BC;background-color:#CCC5E2;"
            >{{info.BloodSugar.date_list[0]}}</td>
            <td style="width:32mm;text-align:center;border:1px solid #8F82BC;">{{info.BloodSugar.date_list[1]}}</td>
            <td style="width:31mm;text-align:center;border:1px solid #8F82BC;">{{info.BloodSugar.date_list[2]}}</td>
          </tr>
          <tr v-if="info.BloodSugar.FBS!==null" style="height:5.6mm;">
            <td>血糖</td>
            <td style="border:1px solid #8F82BC;text-align:center;">＜11.1</td>
            <td style="border:1px solid #8F82BC;text-align:center;line-height:12px;">
              <template v-if="info.BloodSugar.FBS[0].length!==0">
              <span v-if="info.BloodSugar.FBS[0]>11.1">
              <img style="width:5mm;height:5mm;" src="../../assets/超标2x.png" alt />
              </span><span v-else>
              <img style="width:5mm;height:5mm;" src="../../assets/正常2.png" alt />
              </span>
              </template>
            </td>
             <td style="border:1px solid #8F82BC;background-color:#CCC5E2;text-align:center;">
              <span>{{info.BloodSugar.FBS[0]}}</span>
            </td>
            <td style="border:1px solid #8F82BC;text-align:center;">
              <span>{{info.BloodSugar.FBS[1]}}</span>
            </td>
            <td style="border:1px solid #8F82BC;text-align:center;">
              <span>{{info.BloodSugar.FBS[2]}}</span>
            </td>
          </tr>
          <tr v-if="info.BloodSugar.GU!==null" style="background-color:#E6E2F3;">
            <td style="border:1px solid #8F82BC;" class="t-center">尿糖</td>
            <td style="border:1px solid #8F82BC;text-align:center;">0.1-0.8</td>
            <td style="border:1px solid #8F82BC;text-align:center;line-height:12px;">
              
            </td>
            <td style="border:1px solid #8F82BC;background-color:#CCC5E2;text-align:center;">
              <span v-if="GU.length>=1">{{info.BloodSugar.GU[0]}}</span>
            </td>
            <td style="border:1px solid #8F82BC;text-align:center;">
              <span v-if="GU.length>=2">{{info.BloodSugar.GU[1]}}</span>
            </td>
            <td style="border:1px solid #8F82BC;text-align:center;">
              <span v-if="GU.length>=3">{{info.BloodSugar.GU[2]}}</span>
            </td>
          </tr>
          <tr v-if="info.BloodSugar.HbAlc!==null" style="background-color:#E6E2F3;">
            <td style="border:1px solid #8F82BC;text-align:left;">糖化血红蛋白(HbAlc)</td>
            <td style="border:1px solid #8F82BC;text-align:center;">4.0~5.6</td>
            <td style="border:1px solid #8F82BC;text-align:center;line-height:12px;">
              <template v-if="info.BloodSugar.HbAlc[0].length!==0">
              <span v-if="info.BloodSugar.HbAlc[0]<4.0">
              <img style="width:5mm;height:5mm;" src="../../assets/低2.png" alt />
              </span><span v-else-if="info.BloodSugar.HbAlc[0]>5.6">
              <img style="width:5mm;height:5mm;" src="../../assets/超标2x.png" alt />
              </span><span v-else>
              <img style="width:5mm;height:5mm;" src="../../assets/正常2.png" alt />
              </span>
              </template>
            </td>
            <td style="border:1px solid #8F82BC;background-color:#CCC5E2;text-align:center;">
              <span>{{info.BloodSugar.HbAlc[0]}}</span>
            </td>
            <td style="border:1px solid #8F82BC;text-align:center;">
              <span>{{info.BloodSugar.HbAlc[1]}}</span>
            </td>
            <td style="border:1px solid #8F82BC;text-align:center;">
              <span>{{info.BloodSugar.HbAlcinfo.BloodSugar.HbAlc[2]}}</span>
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
        <div slot="subtitle">糖代谢评估</div>
        <div slot="subcontent">
          <table>
            <tr style="border:1px solid #5E92C7;background-color:#E6F2FF;" height="2rem">
              <td style="width:30vw;border:1px solid #5E92C7;">尿糖</td>
              <td style="border:1px solid #5E92C7;">测定尿液所含的糖分。用于诊断有无糖尿病。</td>
              <td rowspan="3"  style="border:1px solid #5E92C7;overflow: hidden;">
                <div class="note-title">维持血糖正常小贴士</div>
                <div class="note">
                  • 控制整体热量摄入，达到健康体重；
                  <br />• 控制每餐淀粉类食物份量为总量的四分之一；
                  <br />• 保持碳水化合物在一天中均匀分配；
                  <br />• 控制甜食，不喝含糖饮料；
                  <br />• 保证优质蛋白质的摄入；
                  <br />• 尽量少饮酒，戒烟；
                  <br />• 每周至少运动（中强度）150分钟
                </div>
              </td>
            </tr>
            <tr style="border:1px solid #5E92C7;height:2rem;">
              <td style="width:30vw;width:20vw;border:1px solid #5E92C7;height:2rem;">血糖</td>
              <td style="border:1px solid #5E92C7;width:48vw">
                <el-col :span="24" style="width:48vw">若空腹时血糖高，首先怀疑时糖尿病。</el-col>
              </td>
            </tr>
            <tr style="border:1px solid #5E92C7;background-color:#E6F2FF;height:2rem;">
              <td style="width:30vw;border:1px solid #5E92C7;">
                HbAlc
                <br />（血红蛋白Alc）
              </td>
              <td style="width:56vw;border:1px solid #5E92C7;">
                能了解过去1~3个月的平均血糖。因为基本不受饮食影响，是糖尿病检查的重要
                项目。
              </td>
            </tr>
          </table>
        </div>
      </Subcontent>
    </el-row>
  </el-row>
</template>
<script>
import Subcontent from "./components/subcontent";
import warnsmall from "./components/warn-small";
import warn from "./components/warn";
export default {
  data() {
    return {
    };
  },
  created(){
    this.info.BloodSugar.date_list=this.formatNull(this.info.BloodSugar.date_list)
    this.info.BloodSugar.HbAlc=this.formatNull(this.info.BloodSugar.HbAlc)
    this.info.BloodSugar.GU=this.formatNull(this.info.BloodSugar.GU)
    this.info.BloodSugar.FBS=this.formatNull(this.info.BloodSugar.FBS)
  },
  components:{
    Subcontent,
    warnsmall,
    warn
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
.explain{
  width:56vw;
}
.note{
  width:40vw;
}
</style>