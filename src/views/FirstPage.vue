<template>
  <div>
    <el-row class="intro">
      <el-row>
        <div class="cn-title">
          <span>
            慢病风险
            <br />及生活健康检验报告
          </span>
        </div>
        <div class="entitle">
          <span>CHRONIC DISEASE RISK AND LIFE STYLE</span>
          <br />
          <span>EVALUATION REPORT</span>
        </div>
        <div class="title-contain">
          <span>该程序中的所有健康相关信息均为循证实践。参考文献是国家指南和专业实践手册，包括但不限于：</span>
        </div>
      </el-row>
      <el-row>
        <div class="outline">
          <el-row type="flex">
            <el-col>-中国高血压防治指南2018 年修订版</el-col>
            <el-col>-中国心血管病预防指南（2017）</el-col>
          </el-row>
          <el-row type="flex">
            <el-col>-中国心血管病预防指南（2017）</el-col>
            <el-col>-中国2型糖尿病防治指南（2017年版）</el-col>
          </el-row>
          <el-row type="flex">
            <span>-中国成人超重和肥胖症预防控制指南</span>
            <span>-中国居民膳食指南（2016）</span>
          </el-row>
          <span>-中国糖尿病医学营养治疗指南（2015）</span>
          <br />
          <span
            class="enscale"
          >-American Diabetes Association: Standards of Medical Care in Diabetes – 2019</span>
          <br />
          <span
            class="enscale"
          >-2019 ACC/AHA Guideline on the Primary Prevention of Cardiovascular Disease</span>
          <br />
          <span
            class="enscale"
          >-2013 AHA/ACC Guideline on Lifestyle Management to Reduce Cardiovascular Risk</span>
          <br />
          <span class="enscale">-The Academy of Nutrition and Dietetics Nutrition Care Manual</span>
          <br />(1)2019 ESC Guidelines on diabetes, pre-diabetes, and cardiovascular diseases developed in
          collaboration with the EASD: The Task
          Force for diabetes, pre-diabetes, and cardiovascular diseases of the European Society of Cardiology
          (ESC) and the European Association for the Study of Diabetes (EASD)
          <br />(2)2019 ESC Guidelines for the diagnosis and management of chronic coronary syndromes: The Task Force
          for the diagnosis and man-
          agement of chronic coronary syndromes of the European Society of Cardiology (ESC)
          <br />(3)2019 ESC/EAS Guidelines for the management of dyslipidaemias: lipid modification to reduce
          cardiovascular risk :
          The Task Force
          for the management of dyslipidaemias of the European Society of Cardiology (ESC) and European
          Atherosclerosis Society (EAS)
        </div>
      </el-row>
    </el-row>
    <div class="tests">
      <span class="test-text">检测项目：</span>
      <el-row class="test-item">
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="BodyValue">身体检测</el-checkbox>
          <el-checkbox label="Urine">尿检</el-checkbox>
          <el-checkbox label="BloodPressure">循环系统</el-checkbox>
          <el-checkbox label="BloodLipid">血脂</el-checkbox>
          <el-checkbox label="Liver">肝功能</el-checkbox>
          <el-checkbox label="Hepatitis">肝炎</el-checkbox>
          <el-checkbox label="Blood">血常规</el-checkbox>
          <el-checkbox label="Electrolyte">电解质</el-checkbox>
          <el-checkbox label="BloodSugar">糖代谢</el-checkbox>
          <el-checkbox label="kidney">肾功能</el-checkbox>
          <el-checkbox label="尿酸"></el-checkbox>
          <el-checkbox label="骨密度"></el-checkbox>
        </el-checkbox-group>
      </el-row>
    </div>
    <el-row class="personInfo infoTable">
      <table>
        <div class="infoTitle">个人信息</div>
        <tr style="background-color:#E6F2FF;border: 1px solid #5E92C7;">
          <td style="border-right: 1px solid #5E92C7;">
            <span class="tabletext">姓名</span>
            <span class="tabletext">{{info.PersonInfo.name}}</span>
          </td>
          <td style="border-right: 1px solid #5E92C7;">
            <span class="tabletext">随访日期</span>
            <span class="tabletext">{{info.PersonInfo.visit_date}}</span>
          </td>
        </tr>
        <tr style="border: 1px solid #5E92C7;border-right:none;">
          <td style="border-right: 1px solid #5E92C7;">
            <span class="tabletext">年龄</span>
            <span class="tabletext">{{info.PersonInfo.age}}</span>
          </td>
          <td class="test-item" style="border-right: 1px solid #5E92C7;">
            <span class="tabletext">性别</span>
            <el-checkbox-group
              v-model="gender"
              style="padding:0.3rem;display:inline-block;font-size:0.4rem;"
            >
              <el-checkbox v-for="item in sex" :key="item" :label="item">{{item}}</el-checkbox>
            </el-checkbox-group>
          </td>
        </tr>
        <tr style="background-color:#E6F2FF;border: 1px solid #5E92C7;">
          <td style="border-right: 1px solid #5E92C7;">
            <span class="tabletext">身高</span>
            <span class="tabletext">
              <span v-if="info.BodyValue!==null&&info.BodyValue.height_list!==null">
                <span
                  v-if="info.BodyValue.height_list[0].length!=0"
                >{{getExistData(info.BodyValue.height_list)}}cm</span>
                <span v-else>无数据</span>
              </span>
              <span v-else>无数据</span>
            </span>
          </td>
          <td>
            <span class="tabletext">体重</span>
            <span class="tabletext">
              <span v-if="info.BodyValue!==null&&info.BodyValue.weight_list!==null">
                <span
                  v-if="info.BodyValue.weight_list[0].length!=0"
                >{{getExistData(info.BodyValue.weight_list[0])}}kg</span>
                <span v-else>无数据</span>
              </span>
              <span v-else>无数据</span>
            </span>
          </td>
        </tr>
        <tr style="background-color:#E6F2FF;border: 1px solid #5E92C7;">
          <td colspan="2" class="test-item">
            <!-- <span class="tabletext">随访类型</span> -->
            <el-checkbox-group v-model="visitclass">
              <el-checkbox label="高血压"></el-checkbox>
              <el-checkbox label="糖尿病"></el-checkbox>
              <el-checkbox label="老人"></el-checkbox>
              <el-checkbox label="一般人群"></el-checkbox>
            </el-checkbox-group>
          </td>
        </tr>
      </table>
      <div class="logo">
        <img src="../assets/logo.png" />
      </div>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkList: [],
      visitclass: [],
      sex: ["男", "女"],
      gender: []
    };
  },
  created() {
    this.getClass();
    this.getTest();
  },
  props:['info'],
  methods: {
    getClass() {
      if (this.info.PersonInfo.is_hypertension == "是")
        this.visitclass.push("高血压");
      if (this.info.PersonInfo.is_diabetes == "是")
        this.visitclass.push("糖尿病");
      if (this.info.PersonInfo.is_old_person == "是")
        this.visitclass.push("老年人");
      if (
        this.info.PersonInfo.is_hypertension == "否" &&
        this.info.PersonInfo.is_diabetes == "否" &&
        this.info.PersonInfo.is_old_person == "否"
      )
      this.visitclass.push("一般人群");
      this.gender.push(this.info.PersonInfo.gender);
    },
    getTest() {
      if (this.info.BodyValue) this.checkList.push("BodyValue");
      if (this.info.Urine) this.checkList.push("Urine");
      if (this.info.BloodPressure) this.checkList.push("BloodPressure");
      if (this.info.BloodLipid) this.checkList.push("BloodLipid");
      if (this.info.Liver) this.checkList.push("Liver");
      if (this.info.Hepatitis) this.checkList.push("Hepatitis");
      if (this.info.Blood) this.checkList.push("Blood");
      if (this.info.Electrolyte) this.checkList.push("Electrolyte");
      if (this.info.BloodSugar) this.checkList.push("BloodSugar");
      if (this.info.kidney) this.checkList.push("kidney");
    },
    getExistData(list){
      for(let item of list){
        if(item.length!=0){
          return item
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
body {
  width: 100vw;
  //   height: 100vh;
}
.intro {
  width: 100vw;
  //   height: 66vh;
  overflow: hidden;
  background: rgba(94, 146, 199, 1);
  border-radius: 0px 0px 0px 4vh;
  box-shadow: 0px 2vh 0px #2d659f;
}

.cn-title {
  padding: 5vw 5vw 0vw;
  font-size: 7vw;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}
.entitle {
  font-size: 4vw;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  padding: 0.9vh 5vw;
}
.title-contain {
  width: 90%;
  word-break: break-all;
  word-wrap: break-word;
  padding: 1.5vh 5vw 0 5vw;
  font-size: 2.5vw;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}
.outline {
  font-family: Microsoft YaHei;
  color: rgba(255, 255, 255, 1);
  font-size: 2.5vw;
  width: 90%;
  word-break: normal;
  word-wrap: break-word;
  padding: 0.3vh 5vw;
}
.tests {
  padding-top: 2.5vh;
  padding-left: 5vw;
  font-size: 3vw;
}

.infoTitle {
  width: 25vw;
  background: rgba(94, 146, 199, 1);
  border-radius: 0 1.8rem 0 0;
  text-align: center;
  font-size: 0.8rem;
  font-family: Microsoft YaHei;
  /* font-weight: bold; */
  color: rgba(255, 255, 255, 1);
}
.infoTable {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
}

.infoTable table {
  border-collapse: collapse;
  box-sizing: border-box;
  width: 60vw;
}

.infoTable table span.tabletext {
  font-size: 0.72rem;
  margin-left: 0.5rem;
}
</style>
<style lang="scss">
.test-item {
  margin-top: 0.3vh;
  .el-checkbox-group {
    .el-checkbox {
      width: 1.48rem;
      .el-checkbox__input .el-checkbox__inner {
        height: 0.7rem;
        width: 0.7rem;
        background-color: #e6f2ff;
        border: 1px solid rgba(94, 146, 199, 1);
      }
      .el-checkbox__label {
        padding-left: 0.1rem;
        font-size: 0.7rem;
      }
      .el-checkbox__input.is-checked .el-checkbox__inner,
      .el-checkbox__input.is-indeterminate .el-checkbox__inner {
        background-color: #409eff;
      }
    }
  }
}
</style>