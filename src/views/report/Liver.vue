<template>
  <el-row>
    <el-row class="data">
      <Subcontent>
        <div slot="subtitle">肝功能检测数值</div>
        <div slot="subcontent">
          <el-col :span="23">
            <table style="font-size:0.67rem;">
              <tr style="background-color:#E6E2F3;">
                <td></td>
                <td>参考范围</td>
                <td></td>
                <td style="background-color:#CCC5E2;">{{info.Liver.date_list[0]}}</td>
                <td>{{info.Liver.date_list[1]}}</td>
                <td>{{info.Liver.date_list[2]}}</td>
              </tr>
              <tr v-if="info.Liver.AST!==null"> 
            <td>
              <div>
                门冬氨酸氨基转移酶
                <br />AST/SGOT
              </div>
            </td>
            <td>男15-45，女13-40 IU/L</td>
            <td>
              <template v-if="info.Liver.AST[0].length!=0">
              <span v-if="(info.Liver.AST[0]<15&&info.PersonInfo.gender=='男')||(info.Liver.AST[0]<13&&info.PersonInfo.gender=='女')">
              <img src="../../assets/低2.png" alt />
              </span><span v-else-if="(info.Liver.AST[0]>45&&info.PersonInfo.gender=='男')||(info.Liver.AST[0]>40&&info.PersonInfo.gender=='女')">
              <img  src="../../assets/超标2x.png" alt />
              </span><span v-else>
              <img src="../../assets/正常2.png" alt />
              </span>
              </template>
            </td>
            <td v-for="(item,index) in info.Liver.AST" :key="index">
              <span>{{item}}</span>
            </td>
          </tr>
          <tr v-if="info.Liver.ALT!==null" style="background-color:#E6E2F3;">
            <td>
              <div>
                丙氨酸氨基转移酶
                <br />ALT/SGPT
              </div>
            </td>
            <td>男9-50，女7-40 IU/L</td>
            <td>
              <template v-if="info.Liver.ALT[0].length!=0">
              <span v-if="(info.Liver.ALT[0]<9&&info.PersonInfo.gender=='男')||(info.Liver.ALT[0]<7&&info.PersonInfo.gender=='女')">
              <img src="../../assets/低2.png" alt />
              </span><span v-else-if="(info.Liver.ALT[0]>50&&info.PersonInfo.gender=='男')||(info.Liver.ALT[0]>40&&info.PersonInfo.gender=='女')">
              <img src="../../assets/超标2x.png" alt />
              </span><span v-else>
              <img src="../../assets/正常2.png" alt />
              </span>
              </template>
            </td>
            <td style="background-color:#ccc5e2;">
              <span>{{info.Liver.ALT[0]}}</span>
            </td>
            <td>
              <span>{{info.Liver.ALT[1]}}</span>
            </td>
            <td>
              <span>{{info.Liver.ALT[2]}}</span>
            </td>
          </tr>
              <tr>
                <td>
                  <div>谷氨酰转肽酶</div>
                </td>
                <td>男10-60,女7-45 IU/L</td>
                <td>
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style="background-color:#E6E2F3;">
                <td>
                  <div>乳酸脱氢酶(LDH)</div>
                </td>
                <td>252IU/L</td>
                <td>
                </td>
                <td style="background-color:#ccc5e2;"></td>
                <td></td>
                <td></td>
              </tr>
              <tr style="background-color:#E6E2F3;">
                <td>
                  <div>碱性磷酸酶（ALP）</div>
                </td>
                <td>男45-125，女35-135 IU/L</td>
                <td>
                </td>
                <td style="background-color:#ccc5e2;"></td>
                <td></td>
                <td></td>
              </tr>
              <tr style="background-color:#E6E2F3;">
                <td>
                  <div>总蛋白</div>
                </td>
                <td>65-85g/L</td>
                <td></td>
                <td style="background-color:#ccc5e2;"></td>
                <td></td>
                <td></td>
              </tr>
              <tr v-if="info.Liver.ALB!==null">
            <td>
              <div>白蛋白</div>
            </td>
            <td>40-55g/L</td>
            <td>
              <template v-if="info.Liver.ALB.length!=0">
              <span v-if="info.Liver.ALB[0]<40">
              <img src="../../assets/低2.png" alt />
              </span><span v-else-if="info.Liver.ALB[0]>55">
              <img src="../../assets/超标2x.png" alt />
              </span><span v-else>
              <img src="../../assets/正常2.png" alt />
              </span>
              </template>
            </td>
            <td v-for="(item,index) in info.Liver.ALB" :key="index">
              <span>{{item}}</span>
            </td>
          </tr>
              <tr style="background-color:#E6E2F3;">
                <td>
                  <div>白/球比</div>
                </td>
                <td>(1.2-2.4):1</td>
                <td></td>
                <td style="background-color:#ccc5e2;"></td>
                <td></td>
                <td></td>
              </tr>
              <tr v-if="info.Liver.TBIL!==null" style="background-color:#E6E2F3;">
            <td>
              <div>总胆红素</div>
            </td>
            <td>3.4-17.1μmol/L</td>
            <td>
              <template v-if="info.Liver.TBIL[0].length!=0">
              <span v-if="info.Liver.TBIL[0]<3.4">
              <img src="../../assets/低2.png" alt />
              </span><span v-else-if="info.Liver.TBIL[0]>17.1">
              <img src="../../assets/超标2x.png" alt />
              </span><span v-else>
              <img src="../../assets/正常2.png" alt />
              </span>
              </template>
            </td>
            <td style="background-color:#ccc5e2;">
              <span>{{info.Liver.TBIL[0]}}</span>
            </td>
            <td>
              <span>{{info.Liver.TBIL[1]}}</span>
            </td>
            <td>
              <span>{{info.Liver.TBIL[2]}}</span>
            </td>
          </tr>
              <tr>
                <td>
                  <div>胆碱酯酶（CHE）</div>
                </td>
                <td>5000-12000IU/L</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style="background-color:#E6E2F3;">
                <td>
                  <div>尿胆素原</div>
                </td>
                <td>0.84-4.2μmol/L</td>
                <td>
                  <img src="../../assets/正常2.png" alt />
                </td>
                <td style="background-color:#ccc5e2;"></td>
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
        <div slot="subtitle">肝功能评估</div>
        <div slot="subcontent">
          <table style="font-size:0.67rem;">
            <tr style="border:1px solid #5E92C7;background-color:#E6F2FF;">
              <td style="border:1px solid #5E92C7;">
                <el-col :span="2" style="width:10vw;">
                  AST（GOT）
                  <br />ALT（GPT）
                </el-col>
              </td>
              <td style="border:1px solid #5E92C7;width:61vw;">
                <el-col
                  :span="24"
                  class="explain"
                >是制造构成体内蛋白质的氨基酸的必要酶，各种细胞被破坏时，呈现高值。特别是ALT很多都存在于肝脏内。患有各种肝疾病，心肌梗塞，肌炎，传染性单核细胞增多症，肝癌等时数值变高。</el-col>
              </td>
              <td rowspan="11" style="width:19vw;border:1px solid #5E92C7;vertical-align:top;">
                <div class="note-title" style="font-size:0.6rem;width:19vw;">
                  维持肝功能正常
                  <br />小贴士
                </div>
                <div class="note" style="width:19vw;font-size:0.55rem;">
                  • 避免过量摄入动物脂肪和添加糖;<br>
                  • 限制饮酒，尽量做到戒酒;<br>
                  • 如果饮酒，成年人一天最大饮酒的酒精量不超过15克（女性）和25克（男性）
                </div>
              </td>
            </tr>
            <tr style="border:1px solid #5E92C7;">
              <td style="border:1px solid #5E92C7;">γ-GTP</td>
              <td style="border:1px solid #5E92C7;">
                <el-col :span="24" class="explain">当肝脏、胆道系统有异常时，比其他的酶更早显示出异常值，患有酒精肝，药物性肝炎等时数值变高。</el-col>
              </td>
            </tr>
            <tr style="border:1px solid #5E92C7;background-color:#E6F2FF;">
              <td style="border:1px solid #5E92C7;">
                ZTT
                <br />TTT
              </td>
              <td style="border:1px solid #5E92C7;">
                <el-col
                  :span="24"
                  class="explain"
                >检查血清蛋白成分的质量，数量是否存在异常。各种肝疾病（对判断疾病的进展有用），慢性感染病，胶原病，骨髓瘤等等时数值会变高。</el-col>
              </td>
            </tr>
            <tr style="border:1px solid #5E92C7;">
              <td style="border:1px solid #5E92C7;">
                乳酸脱氢酶
                <br />（LDH）
              </td>
              <td style="border:1px solid #5E92C7;">
                <el-col :span="24" class="explain">
                  肝脏中存在最多，也存在于心脏、肺、肌肉。
                  <br />急性肝炎、溶血性贫血、心肌梗塞、肌炎、传染性单核细胞增多症、肺梗塞、淋巴肿瘤、各种肿瘤恶化等数值会升高
                </el-col>
              </td>
            </tr>
            <tr style="border:1px solid #5E92C7;background-color:#E6F2FF;">
              <td style="border:1px solid #5E92C7;">
                碱性磷酸酶
                <br />（ALP）
              </td>
              <td style="border:1px solid #5E92C7;">
                <el-col :span="24" class="explain">
                  胆道系统酶之一、肝胆系统之外的骨骼、小肠、胎盘中也存在。
                  <br />各种肝疾患、胆汁淤积、肝肿瘤、胆结石、软骨病、骨肿瘤、甲状腺功能亢进等时数值会升高。
                </el-col>
              </td>
            </tr>
            <tr style="border:1px solid #5E92C7;">
              <td style="border:1px solid #5E92C7;">总蛋白</td>
              <td style="border:1px solid #5E92C7;">
                <el-col
                  :span="24"
                  class="explain"
                >观察肝脏、心脏、肾脏的疾患以及身体的营养状态。各种肝疾患、低营养状态、肾病综合征、恶性肿瘤等时数值会降低。骨髓瘤时会升高。</el-col>
              </td>
            </tr>
            <tr style="border:1px solid #5E92C7;background-color:#E6F2FF;">
              <td style="border:1px solid #5E92C7;">白蛋白</td>
              <td style="border:1px solid #5E92C7;">
                <el-col :span="24" class="explain">是蛋白的一种，数值降低时可能会是肝硬化、肾脏病</el-col>
              </td>
            </tr>
            <tr style="border:1px solid #5E92C7;">
              <td style="border:1px solid #5E92C7;">白/球比</td>
              <td style="border:1px solid #5E92C7;">
                <el-col
                  :span="24"
                  class="explain"
                >血液中白蛋白（A）与球蛋白（G）的比率，各种肝疾患、肾病综合征、骨髓瘤、营养不良、恶性肿瘤等时数值降低。</el-col>
              </td>
            </tr>
            <tr style="border:1px solid #5E92C7;background-color:#E6F2FF;">
              <td style="border:1px solid #5E92C7;">总胆红素</td>
              <td style="border:1px solid #5E92C7;">
                <el-col
                  :span="24"
                  class="explain"
                >是胆汁内所含的色素，肝功能障碍、胆结石、梗阻性黄疸、溶血性贫血等时数值升高。若其他的检查数值无异常，考虑是无需担心的体制性黄疸。</el-col>
              </td>
            </tr>
            <tr style="border:1px solid #5E92C7;">
              <td style="border:1px solid #5E92C7;">
                胆碱酯酶
                <br />（CHE）
              </td>
              <td style="border:1px solid #5E92C7;">
                <el-col :span="24" class="explain">在肝脏被合成的酶，脂肪肝、肾病综合征、甲状腺功能亢进等时数值升高。肝硬化、恶性肿瘤等时数值降低。</el-col>
              </td>
            </tr>
            <tr style="border:1px solid #5E92C7;background-color:#E6F2FF;">
              <td style="border:1px solid #5E92C7;">尿胆素源</td>
              <td style="border:1px solid #5E92C7;">
                <el-col :span="24" class="explain">肝脏和胆道异常时，尿液中的排出量会增加。各种肝疾患、胆道梗阻、溶血性贫血等时呈阳性（+）。</el-col>
              </td>
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
    return {};
  },
  created(){
    this.info.Liver.date_list=this.formatNull(this.info.Liver.date_list)
    this.info.Liver.TBIL=this.formatNull(this.info.Liver.TBIL)
    this.info.Liver.AST=this.formatNull(this.info.Liver.AST)
    this.info.Liver.ALB=this.formatNull(this.info.Liver.ALB)
    this.info.Liver.ALT=this.formatNull(this.info.Liver.ALT)
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
    warn,
  },
  props:['info']
};
</script>
<style lang="scss" scoped>
.explain{ 
  width:59vw;
  word-wrap:break-word;
  word-break:break-all;
  text-align:left;
  font-size: 0.6rem;
}
</style>
