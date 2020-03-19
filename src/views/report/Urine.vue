<template>
  <el-row>
    <el-row class="data">
      <Subcontent>
        <div slot="subtitle">尿检检测数值</div>
        <div slot="subcontent">
          <el-col :span="23">
            <table>
              <tr style="background-color:#8F82BC;">
                <td></td>
                <td>参考范围</td>
                <td></td>
                <td>{{info.Urine.date_list[0]}}</td>
                <td>{{info.Urine.date_list[1]}}</td>
                <td>{{info.Urine.date_list[2]}}</td>
              </tr>
              <tr>
            <td>蛋白</td>
            <td>0-80mg/24h</td>
            <td>
              
            </td>
            <td v-for="(item,index) in info.Urine.uma" :key="index">
                <span>{{item}}</span>
              </td>
          </tr>
          <tr v-if="info.Urine.uob!==null" style="background-color:#E6E2F3;">
            <td>隐血</td>
            <td>＜3个RBC(HP)</td>
            <td>
              <img
                src="../../assets/正常2.png"
                style="width:5mm;height:5mm;vertical-align: top;"
                alt
              />
            </td>
             <td style="background-color:#ccc5e2;">
                <span>{{info.Urine.uob[0]}}</span>
              </td>
              <td>
                <span>{{info.Urine.uob[1]}}</span>
              </td>
              <td>
                <span>{{info.Urine.uob[2]}}</span>
              </td>
          </tr>
              <tr>
                <td>pH</td>
                <td>6.0-6.5</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style="background-color:#E6E2F3;">
                <td>比重</td>
                <td>1.015~1.025</td>
                <td></td>
                <td style="background-color:#ccc5e2;"></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>沉渣</td>
                <td>红细胞（RBC）＜3个/HP，白细胞＜5 个/HP，肾小管上皮 偶见/HP，鳞状或者移行上皮 偶见/HP，透明管型＜2个/低倍视野</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
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
        <div slot="subtitle">尿检检测评估</div>
        <div slot="subcontent">
          <table>
            <tr style="border:1px solid #5E92C7;background-color:#E6F2FF;">
              <td style="border:1px solid #5E92C7;">蛋白</td>
              <td style="border:1px solid #5E92C7;">检查是否有肾脏疾病和肾功能低下。</td>
            </tr>
            <tr style="border:1px solid #5E92C7;">
              <td style="border:1px solid #5E92C7;">隐血</td>
              <td style="border:1px solid #5E92C7;">检查肾、尿路是否有出血。</td>
            </tr>
            <tr style="border:1px solid #5E92C7;background-color:#E6F2FF;">
              <td style="border:1px solid #5E92C7;">pH</td>
              <td style="border:1px solid #5E92C7;">检查尿的酸碱性。一般为弱酸性。</td>
            </tr>
            <tr style="border:1px solid #5E92C7;">
              <td style="border:1px solid #5E92C7;">比重</td>
              <td
                style="border:1px solid #5E92C7;"
              >检查尿中水和其他成分的比率。随水分摄取量、肾功能、尿酸、糖、蛋白质等的影响而变化，有助于对肾功能衰竭和糖尿病的判断。</td>
            </tr>
            <tr style="border:1px solid #5E92C7;background-color:#E6F2FF;">
              <td style="border:1px solid #5E92C7;">沉渣</td>
              <td style="border:1px solid #5E92C7;">用离心分离器来检查尿的成分。来诊断肾疾病和结石、感染症。</td>
            </tr>
          </table>
        </div>
      </Subcontent>
    </el-row>
  </el-row>
</template>
<script>
import warn from "./components/warn";
import Subcontent from "./components/subcontent";
export default {
  data() {
    return {
    };
  },
  created(){
    this.info.Urine.date_list=this.formatNull(this.info.Urine.date_list)
    this.info.Urine.uma=this.formatNull(this.info.Urine.uma)
    this.info.Urine.uob=this.formatNull(this.info.Urine.uob)
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
  components: {
    Subcontent,
    warn
  },
  props:['info']
};
</script>