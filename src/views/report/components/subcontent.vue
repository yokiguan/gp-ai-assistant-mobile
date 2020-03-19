<template>
  <el-container class="content">
    <el-aside width='1rem' class="subtitle">
      <slot name="subtitle"></slot>
    </el-aside>
    <el-main class="subcontent">
        <slot name="subcontent"></slot>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  component:{
    
  }
}
</script>
<style lang="scss">

.content{
  display: table;
  width: 98vw; 
  margin-bottom: 0.2rem;
  .el-main{
    padding: 0.1rem 0.3rem 0rem 0.3rem;
  }
  .subtitle{
    border-radius: 1rem;
    line-height: 1.1rem;
    font-size: 0.85rem;
    display: table-cell;
    word-break: break-all;
    background: rgba(94, 146, 199, 1);
    vertical-align: middle;
    color: white
  }
  .subcontent{
  display: table-cell;
}
}

</style>