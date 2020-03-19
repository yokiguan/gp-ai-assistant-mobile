<template>
  <div class="infoHeader">
    <div class="logo">
      <img width="36" src="../../../assets/logo.png" />
      <div class="company">见道科技</div>
    </div>
    <div class="info-table">
      <div class="info-item">
        <div class="info-name">
          <span>姓 名</span>
          <span>Name</span>
        </div>
        <div class="info-content">{{info.name}}</div>
      </div>
      <div class="info-item">
        <div class="info-name">
          <span>性 别</span>
          <span>Gender</span>
        </div>
        <div class="info-content">{{info.gender}}</div>
      </div>
      <div class="info-item">
        <div class="info-name">
          <span>年 龄</span>
          <span>Age</span>
        </div>
        <div class="info-content">{{info.age}}</div>
      </div>
      <div class="info-item">
        <div class="info-name">
          <span>身 份 证 号</span>
          <span>ID Number</span>
        </div>
        <div class="info-content">8982385632654556</div>
      </div>
    </div>
    <div class="guidance-title">健康管理指导</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props:['info']
};
</script>
<style lang="scss" scoped>
.infoHeader{  
  width: 90vw;
  margin:0 auto;
  font-size:0.8rem;
  font-family: Microsoft YaHei;
  .company{
    font-size:0.9rem;
    margin-left: 0.3rem;
    color: #848391;
  }
}
.logo {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}
.info-table {
  margin:0 auto;
  border-top: 1.5px solid #0C6BA0;
  border-bottom: 1.5px solid #0C6BA0;
  display: flex;
  flex-direction: row;
  .info-item {
    margin:0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    .info-name {
      vertical-align: middle;
      color: #0C6BA0;
      display: flex;
      flex-direction: column;
      text-align: center;
      font-size: 0.7rem;
    }
    .info-content{
      margin-left:0.3rem; 
      font-size: 0.7rem;
    }
  }
}
.guidance-title {
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  font-size:1rem;
  font-weight: 500;
  text-align: center;
  color: #0C6BA0;
}
</style>