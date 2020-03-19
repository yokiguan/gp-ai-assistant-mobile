<template>
  <el-row>
    <el-row class="data">
      <Subcontent>

        <div slot="subtitle">肝炎检测</div>
        <div slot="subcontent">
          <el-col :span="23">
            <table>
              <tr style="background-color:#E6E2F3;">
                <td></td>
                <td>参考范围</td>
                <td></td>
                <td style="background-color:#CCC5E2;">{{info.Hepatitis.date_list[0]}}</td>
                <td>{{info.Hepatitis.date_list[1]}}</td>
                <td>{{info.Hepatitis.date_list[2]}}</td>
              </tr>
              <tr v-if="info.Hepatitis.hbs_ag">
            <td>
              <div>HBs抗原</div>
            </td>
            <td>（-）</td>
            <td>
              
            </td>
              <td v-for="(item,index) in info.Hepatitis.hbs_ag" :key="index">
                <span
                >{{item}}</span>
              </td>
          </tr>
          <tr v-if="info.Hepatitis.hbs_ab!==null" style="background-color:#E6E2F3;">
            <td>
              <div>HBs抗体</div>
            </td>
            <td>（-）</td>
            <td>
              
            </td>
            <td style="background-color:#ccc5e2;">
              <span>{{info.Hepatitis.hbs_ab[0]}}</span>
            </td>
            <td>
              <span>{{info.Hepatitis.hbs_ab[1]}}</span>
            </td>
            <td>
              <span>{{info.Hepatitis.hbs_ab[2]}}</span>
            </td>
          </tr>
          <tr v-if="info.Hepatitis.HCV_ab!==null">
            <td>
              <div>HCV抗体</div>
            </td>
            <td>（-）</td>
            <td>
              
            </td>
            <td v-for="(item,index) in info.Hepatitis.HCV_ab" :key="index">
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
        <div slot="subtitle">肝炎评估</div>
        <div slot="subcontent">
          <table>
            <tr style="border:1px solid #5E92C7;background-color:#E6F2FF;">
              <td style="border:1px solid #5E92C7;">
                <el-col :span="4">抗原</el-col>
              </td>
              <td style="border:1px solid #5E92C7;">
                <el-col
                  :span="24"
                  class="explain"
                  style="width:80vw;height:1.5rem;vertical-align:middle;"
                >
                  呈阳性（+）时,
                  <span class="orange">可考虑为乙型肝炎病毒携带者，需要进行详细检查。</span>
                </el-col>
              </td>
            </tr>
            <tr style="border:1px solid #5E92C7;">
              <td style="border:1px solid #5E92C7;">HBs抗体</td>
              <td>
                <el-col
                  :span="24"
                  class="explain"
                  style="width:80vw;height:2rem;vertical-align:middle;"
                >
                  <span>呈阳性（+）时，过去曾感染乙型肝炎，现在具有免疫的状态。接受过预防接种的人也会呈现（+）。</span>
                </el-col>
              </td>
            </tr>
            <tr style="border:1px solid #5E92C7;background-color:#E6F2FF;">
              <td style="border:1px solid #5E92C7;">HCV抗体</td>
              <td style="border:1px solid #5E92C7;">
                <el-col
                  :span="24"
                  class="explain"
                  style="width:80vw;height:2rem;vertical-align:middle;"
                >
                  <span>呈阳性（+）时，</span>
                  <span class="orange">可考虑为过去曾感染过丙型肝炎，或现在处于感染状态，需要进行详细检查。</span>
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
import warn from "./components/warn";
import Subcontent from "./components/subcontent";
export default {
    data(){
        return{
        }
    },
    props:['info'],
    components:{
      warnsmall,
      warn,
      Subcontent
    },
    created(){
      this.info.Hepatitis.date_list=this.formatNull(this.info.Hepatitis.date_list)
      this.info.Hepatitis.HCV_ab=this.formatNull(this.info.Hepatitis.HCV_ab)
      this.info.Hepatitis.hbs_ab=this.formatNull(this.info.Hepatitis.hbs_ab)
      this.info.Hepatitis.hbs_ag=this.formatNull(this.info.Hepatitis.hbs_ag)
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
    }
};
</script>
