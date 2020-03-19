<template>
  <el-row>
    <el-row class="data">
      <Subcontent>
        <div slot="subtitle" style="font-size:0.8rem;">电解质</div>
        <div slot="subcontent">
          <el-col :span="23">
            <table>
              <tr style="background-color:#E6E2F3;">
                <td></td>
                <td>参考范围</td>
                <td></td>
                <td style="background-color:#CCC5E2;">{{info.Electrolyte.date_list[0]}}</td>
                <td>{{info.Electrolyte.date_list[1]}}</td>
                <td>{{info.Electrolyte.date_list[2]}}</td>
              </tr>
               <tr>
            <td>
              <div>K</div>
            </td>
            <td>3.5-5.3mmol/L</td>
            <td>
              <template v-if="info.Electrolyte.K[0].length!=0">
              <span v-if="info.Electrolyte.K[0]<3.5">
              <img style="width:5mm;height:5mm;" src="../../assets/低2.png" alt />
              </span><span v-else-if="info.Electrolyte.K[0]>5.3">
              <img style="width:5mm;height:5mm;" src="../../assets/超标2x.png" alt />
              </span><span v-else>
              <img style="width:5mm;height:5mm;" src="../../assets/正常2.png" alt />
              </span>
              </template>          
            </td>
            <td v-for="(item,index) in info.Electrolyte.K" :key="index">
              <span>{{item}}</span>
            </td>
          </tr>
          <tr v-if="info.Electrolyte.Na!==null" style="background-color:#E6E2F3;">
            <td>
              <div>Na</div>
            </td>
            <td>137-147mmol/L</td>
            <td>
              <template v-if="info.Electrolyte.Na[0].length!=0">
              <span v-if="info.Electrolyte.Na[0]<137">
              <img style="width:5mm;height:5mm;" src="../../assets/低2.png" alt />
              </span><span v-else-if="info.Electrolyte.Na[0]>147">
              <img style="width:5mm;height:5mm;" src="../../assets/超标2x.png" alt />
              </span><span v-else>
              <img style="width:5mm;height:5mm;" src="../../assets/正常2.png" alt />
              </span>
              </template>
            </td>
            <td style="background-color:#ccc5e2;">{{info.Electrolyte.Na[0]}}</td>
            <td>{{info.Electrolyte.Na[1]}}</td>
            <td>{{info.Electrolyte.Na[2]}}</td>
          </tr>
              <tr>
                <td>
                  <div>Cl</div>
                </td>
                <td>96-108mmol/L</td>
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
        <div slot="subtitle">电解质评估</div>
        <div slot="subcontent">
          <table>
            <tr style="border:1px solid #5E92C7;background-color:#E6F2FF;">
              <td style="border:1px solid #5E92C7;width:20vw">K</td>
              <td style="border:1px solid #5E92C7;width:80vw">
                <span class="explain">是维持神经肌肉，正常工作的电解质，当服用利尿剂或继发性高血压等病时数值低下：肾功能不全等则上升。</span>
              </td>
            </tr>
            <tr style="border:1px solid #5E92C7;">
              <td style="border:1px solid #5E92C7;">Na</td>
              <td>
                <span class="explain">是保持身体水分和渗透压正常的必要电解质（正离子）。肾病综合征与充血性心力衰竭时数值低下：脱水，尿崩等症时数值会上升。</span>
              </td>
            </tr>
            <tr style="border:1px solid #5E92C7;background-color:#E6F2FF;">
              <td style="border:1px solid #5E92C7;">Cl</td>
              <td style="border:1px solid #5E92C7;">
                <span class="explain">是和钠一起保持水分和调整渗透压的必要电解质（负离子）。呕吐或患有阿狄森病时数值低下：而肾功能不全，盐分过量摄取时数值则上升。</span>
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
import Subcontent from "./components/subcontent";
export default {
    components: {
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
  created(){
    this.info.Electrolyte.date_list=this.formatNull(this.info.Electrolyte.date_list)
    this.info.Electrolyte.K=this.formatNull(this.info.Electrolyte.K)
    this.info.Electrolyte.Na=this.formatNull(this.info.Electrolyte.Na)
  },
  props:['info']
};
</script>
<style lang="css" scoped>
.explain {
  width: 66vw;
}
</style>