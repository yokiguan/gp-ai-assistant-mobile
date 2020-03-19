<template>
    <Subcontent>
      <div slot="subtitle">近期风险</div>
      <div slot="subcontent">
        <el-col :span='24' class="recentRisk">
          <b>新冠肺炎（COVID-19）</b>
          <br>人群普遍易感。<span style="color:red;font-weight:bold">老年人及患有慢性疾病的人群感染后病情较重，</span>
        儿童及婴幼儿也有发病。当前没有疫苗可以预防新冠肺炎（COVID-19）感染。预防感染的最佳方式是避免与该病毒或病毒携带者的进行接触。</el-col>
      </div>
    </Subcontent>
</template>
<script>
import Subcontent from "./components/subcontent";
export default{
    components:{
        Subcontent,
    }
}
</script>
<style lang="scss">
.recentRisk{
  background: #E6F2FF;
  border:1px solid #5E92C7;
  font-size:0.78rem;
  text-align: left;
  word-wrap: break-word;
  word-break: break-all;
}
</style>