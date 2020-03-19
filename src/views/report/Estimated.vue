<template>
  <el-row>
    <el-row class="data">
      <Subcontent>
        <div slot="subtitle">每日营养需要量</div>
        <div slot="subcontent">
          <table>
            <tr>
              <td>
                <div class="isScale">每日能量需要量（kcal）</div>
              </td>
              <td>
                <div class="innerBox">营养摄入需求根据年龄、身高、体重估算出维持基本健康所需要的总能量、蛋白质以及水份的需求量。</div>
                <div class="innerBox">您维持基本健康所需要的总能量：</div>
                <div class="innerBox boxVal">
                  {{info.BodyValue.EstimatedEnergyNeed=="数据过时，无法计算"?info.BodyValue.EstimatedEnergyNeed:info.BodyValue.EstimatedEnergyNeed+'kcal/千卡'}}
                </div>
              </td>
              <td rowspan="3" style="background-color:#FFF896;">
                <div
                  class="innerBox"
                  style="width:20vw"
                >注意：如果您正患有慢性肾病、肝病、癌症、炎症性肠病、短肠综合征、慢性阻塞性肺疾病、或危重病，上述需要量可能被高估或低估，请及时咨询您的医生。</div>
              </td>
            </tr>
            <tr style="border:1px solid #5E92C7;background-color:#E6F2FF;">
              <td style="border:1px solid #5E92C7;">
                <div class="isScale">每日蛋白质需要量（g）</div>
              </td>
              <td style="border:1px solid #5E92C7;">
                <div class="innerBox">根据年龄、身高、体重估算出维持基本健康所需要的蛋白质摄入量：</div>
                <div class="innerBox boxVal">
                  {{info.BodyValue.EstimatedProteinNeed=="数据过时，无法计算"?info.BodyValue.EstimatedProteinNeed:info.BodyValue.EstimatedProteinNeed+'g/克'}}
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="isScale">每日水份需要量（ml）</div>
              </td>
              <td>
                <div class="outBox">
                  <div class="innerBox">根据年龄、身高、体重估算出维持基本健康所需要的水份摄入量。</div>
                  <div class="innerBox boxVal">
                    {{info.BodyValue.EstimatedWaterNeed=="数据过时，无法计算"?info.BodyValue.EstimatedWaterNeed:info.BodyValue.EstimatedWaterNeed+'ml'}}
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </Subcontent>
    </el-row>
    <el-row class="assess">
      <Subcontent>
        <div slot="subtitle">营养状况评估</div>
        <div slot="subcontent">
          <table>
            <tr style="background-color:#E6F2FF;font-size:0.8rem">
              <td>
                <div class="isScale">近期体重变化（%）</div>
              </td>
              <td>
                <div class="top" style="margin-left:0.5rem;">近6个月的体重变化若超过10%则具有临床意义。体重变化通常是疾病的表象之一。</div>
                <table style="margin:0.2rem;width:65vw;background-color:#fff;">
                  <tr style="color:rgba(94, 146, 199, 1);">
                    <td style="padding:0.3rem;text-align:left;">
                      6个月体重变化百分率
                      <br />
                      {{info.BodyValue.WeightChange.six_mouth_change.value}}
                    </td>
                    <td style="padding:0.3rem;text-align:left;">
                      3个月体重变化百分率
                      <br />
                     {{info.BodyValue.WeightChange.three_mouth_change.value}}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>

              <td>
                <div class="isScale">未来6个月体重目标（kg）</div>
              </td>
              <td style="width:80vw;">
                <div class="bottom">根据目前体重和肥胖程度制定的未来6个月的体重目标:</div>
                <span
                    v-if="info.BodyValue.WeightChange.target"
                  >{{info.BodyValue.WeightChange.target}}</span>
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
export default {
  data() {
    return {
    };
  },
  components: {   
    Subcontent
  },
  props:['info']
};
</script>