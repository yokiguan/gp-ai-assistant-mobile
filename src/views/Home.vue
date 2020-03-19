<template>
  <div class="choose">
    <span class="tips">点击查看随访报告</span>
    <el-badge class="badge" is-dot :hidden="!person_report">
      <el-button @click="goRiskReport" :class="person_report?'ableBtn':'disableBtn'">风险评估报告</el-button>
    </el-badge>
    <el-badge class="badge" is-dot :hidden="!mission_report">
      <el-button @click="goPlan" :class="mission_report?'ableBtn':'disableBtn'">健康管理计划</el-button>
    </el-badge>
    <el-button @click="goNCP" class="ableBtn badge">新冠病毒COVID-19健康指导</el-button>
    <el-row class="patient">
      <div class="patientInfo">
        居民姓名：{{patient}}
        </div>
      <div class="patientInfo">签约医生：{{doctor}}</div>
      <div class="patientInfo">签约医院：{{hospital}}</div>
    </el-row>
    <div class="bottom" @click="exit">退出</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      person_report: true,
      mission_report: true,
      patient: "",
      doctor: "",
      hospital: ""
    };
  },
  created() {
    this.$axios({
      method: "get",
      url: "/DHT/mobile/home",
      params: {
        key: this.$route.query.key
      },
      headers: { session: this.$route.query.session }
    }).then(res => {
      if (res.data.code != 200) alert(res.data.msg);
      else {
        console.log("home", res.data);
        this.person_report = res.data.data.person_report;
        this.mission_report = res.data.data.mission_report;
        this.patient = res.data.data.name;
        this.doctor = res.data.data.doctor;
        this.hospital = res.data.data.hospital;
      }
    });
  },
  methods: {
    goRiskReport() {
      // let data={"PersonInfo": {"name": "沈月飞", "gender": "男", "age": 58, "is_hypertension": "是", "is_diabetes": "否", "is_old_person": "否", "visit_date": "2020-02-28"}, "BodyValue": {"date_list": ["2019-12-09", "2019-11-21", "2019-05-15"], "height_list": ["170", "170", "170"], "weight_list": ["", "", "70"], "BMI_list": ["", "", "24.22"], "waist_list": ["", "", "88"], "EstimatedEnergyNeed": "数据过时，无法计算", "EstimatedProteinNeed": "数据过时，无法计算", "EstimatedWaterNeed": "数据过时，无法计算", "WeightChange": {"six_mouth_change": {"value": "", "symbol": ""}, "three_mouth_change": {"value": "", "symbol": ""}, "target": ""}, "WeightRange": "数据过时，无法计算"}, "Urine": null, "BloodPressure": {"date_list": ["2019-12-09", "2019-11-21", "2019-05-15"], "SBP_list": ["135", "135", "124"], "DBP_list": ["85", "85", "86"], "average_BP_list": [101, 101, 98], "hypertension_risk": {"value": "您目前的血压没有达到高血压的诊断标准，但已经处于高危状态。", "SBP": "135", "DBP": "85"}}, "BloodLipid": {"date_list": ["2018-10-30", "2016-11-17", ""], "TC_list": ["4.15", "3.76", ""], "TG_list": ["1.79", "1.86", ""], "HDL_list": ["2.22", "0.85", ""], "LDL_list": ["1", "", ""], "BloodLipid_risk": {"value": "总胆固醇含量偏高。", "data": "总胆固醇4.15mmol/L。"}}, "Liver": {"date_list": ["2018-10-30", "2016-11-17", ""], "ALT": ["47", "12", ""], "AST": null, "ALB": null, "TBIL": ["14.1", "", ""]}, "Hepatitis": null, "Blood": {"date_list": ["2018-10-30", "2016-11-17", ""], "Hemoglobin": ["142", "141", ""], "WBC": ["", "5.01", ""], "Platelet": ["252", "247", ""]}, "Electrolyte": null, "BloodSugar": {"date_list": ["2018-10-30", "2017-07-29", "2016-11-17"], "FBS": ["6.55", "5.36", "6.67"], "GU": null, "HbAlc": null}, "Kidney": {"date_list": ["2018-10-30", "2016-11-17", ""], "CRE": ["88", "99", ""], "BUN": ["4.42", "", ""]}}
      this.$router.push({
        path: "/report",
        query: {
          key: this.$route.query.key,
          session: this.$route.query.session
        }
      });
    },
    goPlan() {
      this.$router.push({
            path: "/guidance",
            query: {
              key: this.$route.query.key,
              session: this.$route.query.session
            }
          });
    },
    goNCP() {
      this.$router.push({
        path: "/ncpreport"
      });
    },
    exit() {
      this.$router.push({
        path: "/login",
        query: {
          key: this.$route.query.key,
          session: this.$route.query.session
        }
      });
    }
  }
};
</script>
<style lang="scss">
.badge {
  margin-top: 2rem;
}
.patient {
  width: 100%;
  margin-top: 10vh;
}
.patientInfo {
  width: 60vw;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
}
.choose {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: middle;
  .el-button + .el-button {
    margin-left: 0;
  }
  .tips {
    color: rgba(80, 80, 80, 1);
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 30%;
    margin-bottom: 3rem;
  }
  .ableBtn {
    background-color: rgba(0, 110, 182, 1);
    width: 60vw;
    color: white;
    font-weight: bold;
    height: 6vh;
  }
  .disableBtn {
    background-color: rgba(80, 80, 80, 1);
    width: 60vw;
    font-weight: bold;
    color: white;
    height: 6vh;
  }
  .bottom {
    width: 100%;
    text-align: center;
    height: 3rem;
    line-height: 3rem;
    background: rgba(0, 110, 182, 1);
    font-weight: bold;
    color: white;
    bottom: 0%;
    position: absolute;
  }
}
</style>