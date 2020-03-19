<template>
  <div class="riskReport">
    <el-carousel :autoplay="false" trigger="click" height="100vh" indicator-position="none">
      <el-carousel-item>
        <!-- <img id="page0img" v-show="firstFlag"/> -->
        <div class="container" id="page0">
          <div class="part1-header">
            <div class="bid">
              <div class="text">编号：JDKJ05686877-1</div>
              <div class="progress"></div>
            </div>
            <div>
              <div class="title">
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
              <div class="contain-bottom">
                <div class="outline">
                  <div class="refs">
                    <div class="ref">
                      <span class="scale">-中国高血压防治指南2018 年修订版</span>
                      <br />
                      <span class="scale">-中国心血管病预防指南（2017）</span>
                      <br />
                      <span class="scale">-中国心血管病预防指南（2017）</span>
                    </div>
                    <div class="ref">
                      <span class="scale">-中国2型糖尿病防治指南（2017年版）</span>
                      <br />
                      <span class="scale">-中国成人超重和肥胖症预防控制指南</span>
                      <br />
                      <span class="scale">-中国居民膳食指南（2016）</span>
                    </div>
                  </div>
                  <span class="scale">-中国糖尿病医学营养治疗指南（2015）</span>
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
                  <span
                    class="enscale"
                  >-The Academy of Nutrition and Dietetics Nutrition Care Manual</span>
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
              </div>
            </div>
          </div>
          <div class="part1-footer">
            <span class="footer-title">检测项目：</span>
            <div class="boxs">
              <el-checkbox-group v-model="checkList">
                <el-checkbox label="身体检测"></el-checkbox>
                <el-checkbox label="尿检"></el-checkbox>
                <el-checkbox label="循环系统"></el-checkbox>
                <el-checkbox label="血脂"></el-checkbox>
                <el-checkbox label="肝功能"></el-checkbox>
                <el-checkbox label="肝炎"></el-checkbox>
                <el-checkbox label="血常规"></el-checkbox>
                <el-checkbox label="电解质"></el-checkbox>
                <el-checkbox label="糖代谢"></el-checkbox>
                <el-checkbox label="肾功能"></el-checkbox>
                <el-checkbox label="尿酸"></el-checkbox>
                <el-checkbox label="骨密度"></el-checkbox>
              </el-checkbox-group>
            </div>
            <div class="infoTable">
              <div class="infoTitle">个人信息</div>
              <table>
                <tr style="background-color:#E6F2FF;border: 1px solid #5E92C7;">
                  <td style="border-right: 1px solid #5E92C7;">
                    <span class="tabletext">姓名</span>
                    <span class="tabletext">{{info.PersonInfo.name}}</span>
                  </td>
                  <td style="border-right: 1px solid #5E92C7;">
                    <span class="tabletext">随访日期</span>
                    <span class="tabletext"></span>
                  </td>
                </tr>
                <tr style="border: 1px solid #5E92C7;border-right:none;">
                  <td style="border-right: 1px solid #5E92C7;">
                    <span class="tabletext">年龄</span>
                    <span class="tabletext">{{info.PersonInfo.age}}</span>
                  </td>
                  <td style="border-right: 1px solid #5E92C7;">
                    <span class="tabletext">性别</span>
                    <span style="margin-left:9mm;">
                      <el-checkbox-group v-model="gender" style="display:inline-block;">
                        <el-checkbox v-for="item in sex" :key="item" :label="item">{{item}}</el-checkbox>
                      </el-checkbox-group>
                    </span>
                  </td>
                </tr>
                <tr style="background-color:#E6F2FF;border: 1px solid #5E92C7;">
                  <td style="border-right: 1px solid #5E92C7;">
                    <span class="tabletext">身高</span>
                    <span class="tabletext">cm</span>
                  </td>
                  <td>
                    <span class="tabletext">体重</span>
                    <span class="tabletext">kg</span>
                  </td>
                </tr>
                <tr style="background-color:#E6F2FF;border: 1px solid #5E92C7;">
                  <td colspan="2">
                    <span class="tabletext">随访类型</span>
                    <el-checkbox label="高血压" v-model="is_hypertension"></el-checkbox>
                    <el-checkbox label="糖尿病" v-model="is_diabetes"></el-checkbox>
                    <el-checkbox label="老人" v-model="is_old_person"></el-checkbox>
                    <el-checkbox label="一般人群" v-model="is_normal"></el-checkbox>
                    <!-- <i style="margin-left:55px;" class="cycle"></i><span class="tabletext">团队检查</span> -->
                    <!-- <i style="margin-left:55px;" class="cycle"></i><span class="tabletext">个人检查</span> -->
                  </td>
                </tr>
              </table>
            </div>
            <div class="logo">
              <img src="../assets/logo.png" />
            </div>
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <!-- <img id="page1img" v-show="firstFlag"/> -->
        <div id="page1" class="container">
          <page1></page1>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <!-- <img id="page2img" v-show="firstFlag"/> -->
        <div id="page2" v-show="firstFlag" class="container">
          <page2></page2>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <!-- <img id="page3img" v-show="firstFlag"/> -->
        <div id="page3" class="container">
          <page3></page3>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <!-- <img id="page4img" v-show="firstFlag"/> -->
        <div id="page4" class="container">
          <page4></page4>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <!-- <img id="page5img" v-show="firstFlag"/> -->
        <div id="page5" class="container">
          <page5></page5>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <!-- <img id="page6img" v-show="firstFlag"/> -->
        <div id="page6" class="container">
          <page6></page6>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <!-- <img id="page7img" v-show="firstFlag"/> -->
        <div id="page7" class="container">
          <page7></page7>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <!-- <img id="page8img" v-show="firstFlag"/> -->
        <div id="page8" class="container">
          <page8></page8>
        </div>
      </el-carousel-item>
    </el-carousel>
    <Footer></Footer>
  </div>
</template>

<script>
import page1 from "./report/page1";
import page2 from "./report/page2";
import page3 from "./report/page3";
import page4 from "./report/page4";
import page5 from "./report/page5";
import page6 from "./report/page6";
import page7 from "./report/page7";
import page8 from "./report/page8";
import Footer from "./report/components/footer";
import html2canvas from "html2canvas";
import dom2image from "dom-to-image";
export default {
  data() {
    return {
      info: this.$store.state.report,
      checkList: [],
      is_hypertension: false,
      is_diabetes: false,
      is_old_person: false,
      is_normal: false,
      sex: ["男", "女"],
      gender: [],
      firstFlag: true
    };
  },
  components: {
    page1,
    page2,
    page3,
    page4,
    page5,
    page6,
    page7,
    page8,
    Footer
  },
  created() {},
  mounted() {
    this.getClass();
    // this.toImage()
  },
  methods: {
    toImage() {
      for (let i = 0; i < 9; i++) {
        let estr = "page" + i;
        dom2image
          .toJpeg(document.getElementById(estr), {
            quality: 1,
            bgcolor: "white"
          })
          .then(function(dataUrl) {
            let img = new Image();
            img.src = dataUrl;
            // document.getElementById(imgstr).src=dataUrl
            document.getElementById(estr).prepend(img);
          })
          .catch(function(error) {
            console.error("oops, something went wrong!", error);
          });
      }
    },
    getClass() {
      let info = this.$store.state.report;
      if (info.PersonInfo.is_hypertension == "是") this.is_hypertension = true;
      if (info.PersonInfo.is_diabetes == "是") this.is_diabetes = true;
      if (info.PersonInfo.is_old_person == "是") this.is_old_person = true;
      if (
        info.PersonInfo.is_hypertension == "否" &&
        this.info.PersonInfo.is_diabetes == "否" &&
        this.info.PersonInfo.is_old_person == "否"
      )
        this.is_normal = true;
      this.gender.push(this.info.PersonInfo.gender);
      console.log(this.gender);
    }
  }
};
</script>
<style lang="scss">
.riskReport {
  width: 100vw;
  height: 100vh;
  // overflow: hidden;
  font-family: Microsoft YaHei;
  // background-color: wheat;
}
.container {
  // position: absolute;
  width: 99vw;
  height: 100vh;
  word-break: keep-all;
  margin: 0 auto;
  overflow: auto;
  // transform: scale(1,0.9)
}

.part1-header {
  width: 98vw;
  padding: 3vw 3vw 0vw 3vw;
  background: rgba(94, 146, 199, 1);
  border-radius: 0px 0px 0px 2rem;
  box-shadow: 0px 0.6rem 0px #2d659f;
}

.bid {
  height: 5vw;
  line-height: 1rem;
  text-align: center;
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.bid .text {
  background: rgba(230, 242, 255, 1);
  height: 1.1rem;
  border-radius: 0.4rem;
  font-size: 0.6rem;
  white-space: nowrap;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(45, 101, 159, 1);
  margin-top: 0.2rem;
}

.bid .progress {
  display: inline-block;
  margin-left: 0.8rem;
  margin-top: 0.1rem;
  width: 70vw;
  height: 0.8rem;
  opacity: 0.4;
  background: -webkit-repeating-linear-gradient(
    -45deg,
    #546e89 0px,
    #66809a 1px,
    #fff 0px,
    #a5c2e0 4px
  );
}

.part1-header .title {
  margin-top: 3vh;
  font-size: 1.4rem;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}

.part1-header .entitle {
  font-size: 1rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  margin-top: 0.7rem;
}

.title-contain {
  margin-top: 1rem;
  margin-right: 1rem;
  font-size: 0.65rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}

.contain-bottom {
  margin-top: 0.3rem;
  font-family: Microsoft YaHei;
  color: rgba(255, 255, 255, 1);
  font-size: 0.63rem;
  transform: scale(0.98);
  transform-origin: 0 0;
  .enscale {
    font-size: 0.55rem;
  }
}
.part1-footer {
  margin-top: 1.5vh;
  margin-left: 1vw;
  .footer-title {
    font-size: 0.73rem;
    font-family: Alibaba PuHuiTi;
    color: rgba(94, 146, 199, 1);
  }
}
.boxs {
  margin-top: 0.3vh;
  .el-checkbox-group {
    .el-checkbox {
      width: 1.68rem;
      .el-checkbox__input .el-checkbox__inner {
        height: 0.7rem;
        width: 0.7rem;
        background-color: #e6f2ff;
        border: 1px solid rgba(94, 146, 199, 1);
      }
      .el-checkbox__label {
        padding-left: 0.1rem;
        font-size: 0.72rem;
      }
      .el-checkbox__input.is-checked .el-checkbox__inner,
      .el-checkbox__input.is-indeterminate .el-checkbox__inner {
        background-color: #409eff;
      }
    }
  }
}

.infoTable {
  margin-top: 0.4rem;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
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
}

.infoTable table {
  border-collapse: collapse;
  box-sizing: border-box;
  width: 65vw;
}

.infoTable table span.tabletext {
  font-size: 0.72rem;
  margin-left: 0.5rem;
  /* zoom:50%; */
}

.refs {
  display: flex;
  flex-direction: row;
}
.logo {
  padding-left: 16vw;
  img {
    width: 13vw;
  }
}
</style>

