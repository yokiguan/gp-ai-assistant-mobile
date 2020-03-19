<template>
    <div class="ncp" style="width:100vw;height:93vh" @click="clickhandler">
        <img style="width:100vw;height:90vh" src="../assets/NCP.png"/>
        <img style="width:100vw;height:90vh" src="../assets/NCP2.png"/>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from './report/components/footer'
export default {
    methods:{
        clickhandler(){
            this.$refs.carousel.next()
        }
    },
    components:{
        Footer
    }
}
</script>
<style lang="scss" scoped>
*{
    height: 100%;
}
.ncp{
    overflow: auto;
}
</style>