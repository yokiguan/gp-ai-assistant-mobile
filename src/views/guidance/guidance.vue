<template>
  <div v-if="show" class="guidance-content">
    <infoHeader :info="data.info"></infoHeader>
    <el-row class="part">
      <el-col :span="4" class="part-num">PART 01</el-col>
      <el-col :span="10" class="part-cn">本次随访任务</el-col>
      <el-col :offset="5" :span="5" class="part-en">Daily Task</el-col>
    </el-row>
    <el-row class="part-outbox">
      <el-col
        style="font-size:0.78rem;padding:0.2rem;"
        :span="24"
      >*此期间（{{data.start_time}}-{{data.end_time}}）您需要完成以下任务：</el-col>
      <div v-for="(item,index) in data.data.part_1" :key="item.mission_name" class="part-content">
        <el-col :span="8" class="first-standard">{{item.mission_name}}</el-col>
        <el-col
          :span="24"
          v-for="(goal,pos) in item.smart_goal_list"
          :key="pos"
          class="second-standard"
        >{{pos+1}}.{{goal}}</el-col>
      </div>
    </el-row>
    <el-row class="part">
      <el-col :span="4" class="part-num">PART 02</el-col>
      <el-col :span="10" class="part-cn">健康状况</el-col>
      <el-col :span="10" class="part-en">Diagnosis ＆ Risk</el-col>
    </el-row>
    <el-row class="part-outbox">
      <div class="part-content">
        <el-col :span="8" class="first-standard">确诊情况</el-col>
        <el-col
          v-for="(item,index) in data.data.part_2.disease_list"
          :key="index"
          :span="24"
          class="second-standard"
        >
          <el-col :span="10" class="diagnosis">*确诊{{index+1}}：{{item.disease}}</el-col>
          <el-col :span="14" class="diagnosis-data">*{{item.value}}</el-col>
        </el-col>
        <el-col :span="8" class="first-standard">潜在风险</el-col>
        <el-col
          :span="24"
          v-for="(item,index) in data.data.part_2.problem_list"
          :key="index"
          class="second-standard"
        >
          <el-col :span="10" class="diagnosis">*{{item.problem}}</el-col>
          <el-col :span="14" v-if="item.value" class="diagnosis-data">*{{item.value}}</el-col>
        </el-col>
      </div>
    </el-row>
    <el-row class="part">
      <el-col :span="4" class="part-num">PART 03</el-col>
      <el-col :span="10" class="part-cn">疾病释义</el-col>
      <el-col :span="10" class="part-en">Overview</el-col>
    </el-row>
    <el-row class="part-outbox">
      <div v-for="(item,index) in data.data.part_3" :key="item.name" class="part-content">
        <el-col :span="8" class="first-standard">{{item.name}}</el-col>
        <el-col :span="24" v-html="item.content" class="second-standard">{{item.content}}</el-col>
      </div>
    </el-row>
    <el-row class="part">
      <el-col :span="4" class="part-num">PART 0{{data.data.part_3.length==0?'3':'4'}}</el-col>
      <el-col :span="10" class="part-cn">健康任务相关知识</el-col>
      <el-col :span="10" class="part-en">Health Education</el-col>
    </el-row>
    <el-row class="part-outbox">
      <div v-for="(item,index) in data.data.part_4" :key="item.mission_name" class="part-content">
        <el-col :span="8" class="first-standard">{{item.mission_name}}</el-col>
        <el-col :span="24" class="second-standard">{{item.introduction}}</el-col>
      </div>
    </el-row>
  </div>
</template>
<script>
import infoHeader from "./components/infoheader";
export default {
  data() {
    return {
      show:false,
      data:JSON.parse(this.$store.state.mission),
    }
  },
  created() { 
    this.$axios({
        method: "get",
        url: "/DHT/mobile/mission_page",
        params: {
          key: this.$route.query.key
        },
        headers: { session: this.$route.query.session }
      }).then(res => {
        if (res.data.code != 200) {
          this.data=res.data.data
          this.$store.commit("setMission", res.data.data);
          this.show=true;
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
  },
  components: {
    infoHeader
  }
};
</script>
<style lang="scss">
.part {
  margin: 0.2rem 1rem 0.3rem 1rem;
  color: #0c6ba0;
  font-size: 0.8rem;
  font-family: Microsoft YaHei;
}
.part-en {
  text-align: right;
}
.part-cn {
  padding-left: 0.5rem;
}
.part-num {
  background-color: #0c6ba0;
  color: #ffffff;
  text-align: center;
}
.part-outbox {
  margin: 0 1rem 0.5rem 1rem;
  min-height: 5rem;
  border: 1px solid #0c6ba0;
  background-color: rgba(238, 238, 238, 1);
}
.diagnosis-data {
  text-align: right;
}
.part-content {
  margin: 0.5rem;
  font-size: 0.78rem;
  .first-standard {
    background-color: #0c6ba0;
    color: #ffffff;
    text-align: center;
    vertical-align: middle;
    line-height: 1rem;
    font-size: 0.75rem;
    font-weight: bold;
    border-radius: 0.3rem;
    margin-bottom: 0.2rem;
  }
  .second-standard {
    font-size: 0.75rem;
    line-height: 0.9rem;
  }
}
</style>