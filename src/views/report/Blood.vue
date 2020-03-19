<template>
    <el-row>
        <el-row class="data"><Subcontent>
      <div slot="subtitle">血常规检测数值</div>
      <div slot="subcontent">
        <el-col :span='23'>
        <table style="font-size:0.61rem;">
          <tr style="background-color:#E6E2F3;">
            <td style="width:20vw"></td>
            <td style="width:20vw">参考范围</td>
            <td style="width:5mm"></td>
            <td style="width:18vw;background-color:#CCC5E2;">{{info.Blood.date_list[0]}}</td>
            <td style="width:18vw">{{info.Blood.date_list[1]}}</td>
            <td style="width:18vw">{{info.Blood.date_list[2]}}</td>
          </tr>
          <tr v-if="info.Blood.Hemoglobin!==null">
            <td>
              <div>血红蛋白</div>
            </td>
            <td>男 130-175 g/L,女 115-150 g/L</td>
            <td>
              <template v-if="info.Blood.Hemoglobin[0].length!=0">
              <span v-if="(info.Blood.Hemoglobin[0]<130&&info.PersonInfo.gender=='男')||(info.Blood.Hemoglobin[0]<115&&info.PersonInfo.gender=='女')">
              <img style="width:4mm;height:4mm;" src="../../assets/低2.png" alt />
              </span><span v-else-if="(info.Blood.Hemoglobin[0]>175&&info.PersonInfo.gender=='男')||(info.Blood.Hemoglobin[0]>150&&info.PersonInfo.gender=='女')">
              <img style="width:4mm;height:4mm;" src="../../assets/超标2x.png" alt />
              </span><span v-else>
              <img style="width:4mm;height:4mm;" src="../../assets/正常2.png" alt />
              </span>
              </template>
            </td>
             <td v-for="(item,index) in info.Blood.Hemoglobin" :key="index">
              <span>{{item}}</span>
            </td>
          </tr>
          <tr style="background-color:#E6E2F3;">
            <td>
              <div>红细胞比容</div>
            </td>
            <td>男 0.40-0.50,女 0.35-0.45</td>
            <td>
            </td>
            <td style="background-color:#ccc5e2;"></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <div>红细胞计数</div>
            </td>
            <td>
              男 4.3-5.8 × 10
              <sup>12</sup>/L,<br>女 3.8-5.1 × 10
              <sup>12</sup>/L
            </td>
            <td>

            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr v-if="info.Blood.WBC!==null" style="background-color:#E6E2F3;">
            <td>
              <div>白细胞计数</div>
            </td>
            <td>
              3.5-9.5 × 10
              <sup>9</sup>/L
            </td>
            <td>
              <template v-if="info.Blood.WBC[0].length!=0">
              <span v-if="info.Blood.WBC[0].data<3.5">
              <img style="width:4mm;height:4mm;" src="../../assets/低2.png" alt />
              </span><span v-else-if="info.Blood.WBC[0]>9.5">
              <img style="width:4mm;height:4mm;" src="../../assets/超标2x.png" alt />
              </span><span v-else>
              <img style="width:4mm;height:4mm;" src="../../assets/正常2.png" alt />
              </span>
              </template>
            </td>
            <td style="background-color:#ccc5e2;">
              <span>{{info.Blood.WBC[0]}}</span>
            </td>
            <td>
              <span>{{info.Blood.WBC[1]}}</span>
            </td>
            <td>
              <span>{{info.Blood.WBC[2]}}</span>
            </td>
          </tr>
          <tr v-if="info.Blood.Platelet!==null">
            <td>
              <div>血小板计数</div>
            </td>
            <td>
              125-350 × 10
              <sup>9</sup>/L
            </td>
            <td>
              <template v-if="info.Blood.Platelet[0].length!=0">
              <span v-if="info.Blood.Platelet[0]<125">
              <img style="width:4mm;height:4mm;" src="../../assets/低2.png" alt />
              </span><span v-else-if="info.Blood.Platelet[0]>350">
              <img style="width:4mm;height:4mm;" src="../../assets/超标2x.png" alt />
              </span><span v-else>
              <img style="width:4mm;height:4mm;" src="../../assets/正常2.png" alt />
              </span>
              </template>
            </td>
            <td v-for="(item,index) in info.Blood.Platelet" :key="index">
              <span>{{item}}</span>
            </td>
          </tr>
          <tr style="background-color:#E6E2F3;">
            <td>
              <div>红细胞平均体积</div>
            </td>
            <td>82-100fL</td>
            <td>
              
            </td>
            <td style="background-color:#ccc5e2;"></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <div>平均血红蛋白含量</div>
            </td>
            <td>27-34pg</td>
            <td>
              
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr style="background-color:#E6E2F3;">
            <td>
              <div>平均血红蛋白浓度</div>
            </td>
            <td>316-354g/L</td>
            <td></td>
            <td style="background-color:#ccc5e2;"></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <div>血铁清(SI)</div>
            </td>
            <td>男 11.6-31.3,女 9.0-30.4 μmol/L</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr style="background-color:#E6E2F3;">
            <td>
              <div>中性粒细胞计数</div>
            </td>
            <td>
              1.8-6.3× 10
              <sup>9</sup>/L
            </td>
            <td></td>
            <td style="background-color:#ccc5e2;"></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <div>中性粒细胞百分比</div>
            </td>
            <td>40-75%</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr style="background-color:#E6E2F3;">
            <td>
              <div>淋巴细胞计数</div>
            </td>
            <td>
              1.1-3.2× 10
              <sup>9</sup>/L
            </td>
            <td></td>
            <td style="background-color:#ccc5e2;"></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <div>淋巴细胞百分比</div>
            </td>
            <td>20-50%</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr style="background-color:#E6E2F3;">
            <td>
              <div>单核细胞计数</div>
            </td>
            <td>
              0.1-0.6× 10
              <sup>9</sup>/L
            </td>
            <td></td>
            <td style="background-color:#ccc5e2;"></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <div>单核细胞百分比</div>
            </td>
            <td>3-10%</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr style="background-color:#E6E2F3;">
            <td>
              <div>嗜酸性粒细胞计数</div>
            </td>
            <td>
              0.2-0.52× 10
              <sup>9</sup>/L
            </td>
            <td></td>
            <td style="background-color:#ccc5e2;"></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <div>嗜酸性粒细胞百分比</div>
            </td>
            <td>0.4-8.0%</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr style="background-color:#E6E2F3;">
            <td>
              <div>嗜碱性粒细胞计数</div>
            </td>
            <td>
              0-0.06× 10
              <sup>9</sup>/L
            </td>
            <td></td>
            <td style="background-color:#ccc5e2;"></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <div>嗜碱性粒细胞百分比</div>
            </td>
            <td>0-1%</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
        </el-col>
        <el-col :span='1'>
        <warn></warn>
        </el-col>
      </div>
    </Subcontent></el-row>
        <el-row class="assess"><Subcontent>
      <div slot="subtitle">血常规评估</div>
      <div slot="subcontent">
        <table style="font-size:0.61rem;">
          <tr style="border:1px solid #5E92C7;background-color:#E6F2FF;">
            <td style="border:1px solid #5E92C7;width:26vw">
              血红蛋白</td>
            <td style="border:1px solid #5E92C7;">
              <el-col :span='24' class="explain">
              血红蛋白又称[血红素]，血红蛋白的铁原子和氧结合，把氧气输送到全身。若数量减少，需要对贫血进行治疗。
              </el-col>
            </td>
            <td rowspan="10" style="border:1px solid #5E92C7;vertical-align: top;">
              <div class="note-title">维持血常规正常小贴士</div>
              <div class="note">
              • 坚持1日3餐，要营养均衡。
              <br />• 对于贫血,要多吃菠菜等绿黄色蔬菜，动物肝脏，肉类等含铁成份多的食物。
              <br />贫血中较多的是低色素性贫血（缺铁性贫血），其中女性居多，铁的摄入不足是其原因。
              </div>
            </td>
          </tr>
          <tr style="border:1px solid #5E92C7;">
            <td style="border:1px solid #5E92C7;">红细胞比容</td>
            <td style="border:1px solid #5E92C7;">
              <div class="explain">显示血液中红细胞等血球成分的比值。
              <br>贫血时数值降低：红细胞增多症时呈现高值。
              </div>
            </td>
          </tr>
          <tr style="border:1px solid #5E92C7;background-color:#E6F2FF;">
            <td style="border:1px solid #5E92C7;">红细胞数</td>
            <td style="border:1px solid #5E92C7;">
              <div class="explain">用于诊断贫血和红细胞增多症，贫血中最多的是[缺铁性贫血]，但也有其他类型的贫血，判断其原因很重要。
              </div>
            </td>
          </tr>
          <tr style="border:1px solid #5E92C7;">
            <td style="border:1px solid #5E92C7;">白细胞总数</td>
            <td style="border:1px solid #5E92C7;">
              <div class="explain">白细胞对抗侵入体内的细菌和异物,起保护身体的作用.
              炎症性疾病，细菌感染，白血病时数值会增加。
              </div>
            </td>
          </tr>
          <tr style="border:1px solid #5E92C7;background-color:#E6F2FF;">
            <td style="border:1px solid #5E92C7;">血小板</td>
            <td style="border:1px solid #5E92C7;">
              <div class="explain">止血功能。若血小板减少、或功能低下时，就会容易出血、或不易止血。
              </div>
            </td>
          </tr>
          <tr style="border:1px solid #5E92C7;">
            <td style="border:1px solid #5E92C7;">MCV</td>
            <td style="border:1px solid #5E92C7;">
              平均红细胞体积，表示1个红细胞的大小。</td>
          </tr>
          <tr style="border:1px solid #5E92C7;background-color:#E6F2FF;">
            <td style="border:1px solid #5E92C7;">MCH</td>
            <td style="border:1px solid #5E92C7;">
              <div class="explain">平均红细胞血红蛋白含量。
              <br>表示1个红细胞的血红蛋白量。</div>
            </td>
          </tr>
          <tr style="border:1px solid #5E92C7;">
            <td style="border:1px solid #5E92C7;">MCHC</td>
            <td style="border:1px solid #5E92C7;">
              <div class="explain">平均红细胞血红蛋白浓度。表示单位体积红细胞的血红蛋白浓度。根据MCV、
              MCH、MCHC等的数值，可以推测贫血的原因和种类。</div>
            </td>
          </tr>
          <tr style="border:1px solid #5E92C7;background-color:#E6F2FF;">
            <td style="border:1px solid #5E92C7;">血铁清</td>
            <td style="border:1px solid #5E92C7;">
              <div class="explain">合成血红蛋白的必要物质，可用于贫血的鉴别诊断。
              缺铁性贫血等时数值低下的。</div>
            </td>
          </tr>
        </table>
      </div>
    </Subcontent></el-row>
    </el-row>
</template>
<script>
import warnsmall from "./components/warn-small";
import warn from "./components/warn";
import Subcontent from "./components/subcontent";
export default {
  data() {
    return {
    };
  },
  components: {
    Subcontent,
    warnsmall,
    warn,
  },
  created(){
    this.info.Blood.date_list=this.formatNull(this.info.Blood.date_list)
    this.info.Blood.Hemoglobin=this.formatNull(this.info.Blood.Hemoglobin)
    this.info.Blood.WBC=this.formatNull(this.info.Blood.WBC)
    this.info.Blood.Platelet=this.formatNull(this.info.Blood.Platelet)
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
<style lang="css" scoped>
.explain{
  font-size:0.67rem;
  width: 59vw;
}
.note-title{
  word-break: break-all;
}
.note{
  font-size: 0.66rem;
  width:20vw;
}
</style>
