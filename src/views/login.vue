<template>
  <div class="login">
    <el-row>
      <el-col :span="20" :offset="2" class="login-content">
        <el-col :span="18" :offset="3" class="login-title">居民随访报告查询</el-col>
        <el-col :span="24" class="login-item">
          <span class="item-name">姓名</span>
          <el-input v-model="name" placeholder="请输入姓名"></el-input>
        </el-col>
        <el-col :span="24" class="login-item">
          <span class="item-name">查看码</span>
          <el-input v-model="verification" placeholder="请输入查看码"></el-input>
        </el-col>
        <el-col :span="24" class="login-item">
          <span class="item-name">身份证号</span>
          <el-input v-model="id" placeholder="请输入身份证号"></el-input>
        </el-col>
        <el-button @click="login" style="width:50vw;margin-top:1rem;display:inline-block; ">查看随访报告</el-button>
      </el-col>
    </el-row>
      <el-row class="tech-right">技术支持：见道(杭州)科技有限公司</el-row>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      name: "",
      verification: "",
      id: ""
    };
  },
  create() {
  },
  methods: {
    login() {
      this.$store.commit("setId", this.id);
      this.$axios({
        method: "post",
        url: "/DHT/mobile/login",
        data: {
          name: this.name,
          id_card: this.id,
          key: this.$route.query.key,
          code: this.verification
        }
      }).then(res => {
        if (res.data.code != 200) alert(res.data.msg);
        else {
          console.log(res.data);
          console.log(res.headers.session);
          this.$store.commit("setSession", res.headers.session);
          this.$router.push({
            path: "/home",
            query: { session: res.headers.session, key: this.$route.query.key }
          });
        }
      });
    }
  }
};
</script>
<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.login {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  padding-top:10vh ;
}
.login-content {
  border: 1px solid#99a9bf;
  border-radius: 4px;
  background: #e5e9f2;
  padding: 2rem;
  text-align: center;
  .login-title {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }
}
.login-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  font-size: 1rem;
  .item-name {
    min-width: 18vw;
    text-align: left;
  }
}
.tech-right{
  font-size:0.6rem;
  padding-top: 25vh;
  text-align: center;
}
</style>
