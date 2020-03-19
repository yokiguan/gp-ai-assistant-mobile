<template>
<div v-if='show'>
  <div id="images">
    <div class="fixed-page single-page">
      <FP :info="info"></FP>
    </div>
    <div class="module">
      <RecentRisk></RecentRisk>
    </div>
    <div v-if="BodyValue" id="BodyValue" class="module">
      <BodyValue :info='info'></BodyValue>
    </div>
    <div v-if="BloodPressure" id="BloodPressure" class="module">
      <BloodPressure :info='info'></BloodPressure>
    </div>
    <div v-if="BloodLipid" id="BloodLipid" class="module">
      <BloodLipid :info='info'></BloodLipid>
    </div>
    <div v-if="Blood" id="Blood" class="module">
      <Blood :info='info'></Blood>
    </div>
    <div v-if="Liver" id="Liver" class="module">
      <Liver :info='info'></Liver>
    </div>
    <div id="Estimated" v-if="Estimated" class="module">
      <Estimated :info='info'></Estimated>
    </div>
    <div id="Electrolyte" v-if="Electrolyte" class="module">
      <Electrolyte :info='info'></Electrolyte>
    </div>
    <div id="Urine" v-if="Urine" class="module">
      <Urine :info='info'></Urine>
    </div>
    <div id="Liver" v-if="Liver" class="module">
      <Liver :info='info'></Liver>
    </div>
    <div id="Hepatitis" v-if="Hepatitis" class="module">
      <Hepatitis :info='info'></Hepatitis>
    </div>
    <div id="BloodSugar" v-if="BloodSugar" class="module">
      <BloodSugar :info='info'></BloodSugar>
    </div>
    <div id="Kidney" v-if="Kidney" class="module">
      <Kidney :info='info'></Kidney>
    </div>
  </div>
  <Footer></Footer>
</div>
</template>
<script>
import RecentRisk from './report/RecentRisk'
import FP from "./FirstPage";
import BodyValue from "./report/BodyValue";
import Estimated from "./report/Estimated";
import Urine from "./report/Urine";
import BloodPressure from "./report/BloodPressure";
import BloodLipid from "./report/BloodLipid";
import Liver from "./report/Liver";
import Hepatitis from "./report/Hepatitis";
import Blood from "./report/Blood";
import Electrolyte from "./report/Electrolyte";
import BloodSugar from "./report/BloodSugar";
import Kidney from "./report/Kidney";
import Header from "./report/components/header"
import Footer from './report/components/footer'
export default {
  data() {
    return {
      show:false,
      info: '',
      Blood: false,
      BodyValue: false,
      BloodPressure: false,
      BloodSugar: false,
      BloodLipid: false,
      Electrolyte: false,
      Estimated: false,
      Liver: false,
      Urine: false,
      Hepatitis: false,
      Kidney: false,
      modules: [[], []]
    };
  },
  created() {
    this.show=false
    this.$axios({
        method: "get",
        url: "/DHT/mobile/report_page",
        params: {
          key: this.$route.query.key
        },
        headers: { session: this.$route.query.session }
      }).then(res => {
        if (res.data.code == 200) {
          console.log(res.data.data)
         this.info=res.data.data
          this.$store.commit("setReport", res.data.data);
          this.show=true
          this.showModule();
        } else if (res.data.code == 203) {
          this.$router.push({
            path: "/login",
            query: {
              key: this.$route.query.key
            }
          });
        } else {
          alert(res.data.msg);
        }
      });
    // this.modules=new Array(2).fill(null).map((item)=>{return new Array})
    // console.log('mo',this.modules)
    // this.domInsert();
    // this.toImage();
  },
  components: {
    Header,
    FP,
    RecentRisk,
    Blood,
    BodyValue,
    BloodPressure,
    BloodSugar,
    BloodLipid,
    Electrolyte,
    Estimated,
    Liver,
    Urine,
    Hepatitis,
    Kidney,
    Footer
  },
  methods: {
    toImage() {
        dom2image
          .toJpeg(document.getElementById("images"), {
            quality: 1,
            bgcolor: "white"
          })
          .then(function(dataUrl) {
            let img = new Image();
            img.src = dataUrl;
            // document.getElementById(imgstr).src=dataUrl
            document.getElementById("images").parentNode.replaceChild(img,document.getElementById("images"))
          })
          .catch(function(error) {
            console.error("oops, something went wrong!", error);
          });
      console.log('2image')
      // for (let i = 0; i < Math.ceil(this.modules[1]/2); i++) {
      //   let estr = "image" + i;
      //   console.log(estr,"str")
      //   dom2image
      //     .toJpeg(document.getElementById(estr), {
      //       quality: 1,
      //       bgcolor: "white"
      //     })
      //     .then(function(dataUrl) {
      //       let img = new Image();
      //       img.src = dataUrl;
      //       // document.getElementById(imgstr).src=dataUrl
      //       document.getElementById(estr).prepend(img);
      //     })
      //     .catch(function(error) {
      //       console.error("oops, something went wrong!", error);
      //     });
      // }
      // for(let i in this.modules[0]){
      //   dom2image
      //     .toJpeg(document.getElementById(i), {
      //       quality: 1,
      //       bgcolor: "white"
      //     })
      //     .then(function(dataUrl) {
      //       let img = new Image();
      //       img.src = dataUrl;
      //       // document.getElementById(imgstr).src=dataUrl
      //       document.getElementById(i).prepend(img);
      //     })
      //     .catch(function(error) {
      //       console.error("oops, something went wrong!", error);
      //     });
      // }
    },
    showModule() {
      if (this.info.Blood !== null) {
        this.Blood = true;
      }
      if (this.info.BloodPressure !== null) {
        this.BloodPressure = true;
      }
      if (this.info.BloodLipid !== null) {
        this.BloodLipid = true;
      }
      if (this.info.BloodSugar !== null) {
        this.BloodSugar = true;
      }
      if (this.info.BodyValue !== null) {
        this.BodyValue = true;
        this.Estimated = true;
      }
      if (this.info.Electrolyte !== null) {
        this.Electrolyte = true;
      }
      if (this.info.Urine !== null) {
        this.Urine = true;
      }
      if (this.info.Liver !== null) {
        this.Liver = true;
      }
      if (this.info.Hepatitis !== null) {
        this.Hepatitis = true;
      }
      if (this.info.Kidney !== null) {
        this.Kidney = true;
      }
    },
    domInsert() {
      let strlist = [];
      if (this.modules[1].length % 2 == 0) {
        let i;
        for (i = 0; i < this.modules[1].length/2;i++) {
          let str =
            "<" +
            this.modules[1][i] +
            ">" +
            "<" +
            "/" +
            this.modules[1][i] +
            ">" +
            "<" +
             this.modules[1][2*i + 1] +
            ">" +
            "<" +
            "/" +
             this.modules[1][2*i + 1] +
            ">";
          strlist.push(`<div id="image${i}" class="single-page">${str}</div>`);
        }
      }else{
        let i1;
        for (i1 = 0; i1 < this.modules[1].length-1; i1++) {
          let str =
            "<" +
             this.modules[1][i1] +
            ">" +
            "<" +
            "/" +
             this.modules[1][i1] +
            ">" +
            "<" +
             this.modules[1][i1 + 1] +
            ">" +
            "<" +
            "/" +
             this.modules[1][i1 + 1] +
            ">";
          strlist.push(`<div id="image${i1}" class="single-page"><${str}></div>`);
          i1++;
        }
        strlist.push(`<div id="image${i1}" class="single-page"><${this.modules[1][i]}></${this.modules[1][i]}></div>`)
      }
      let ch
        for (ch in strlist) {
          document.getElementById("images").appendChild(ch);
        }
    }
  }
};
</script>
<style lang="scss" scoped>
.single-page {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>