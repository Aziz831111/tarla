<template>
    <div class="sec3">
       <div class="wrapper">
        <div class="img_sec_tree">
            <img class="sec_img_3" src="../assets/sec3/imgSec3.png" alt="img">
        </div>
        <div class="text_title">
            <h1 class="text_inner">
                Freshly baked means fresh bakery smells filling your home,
                warm oozey pastries on your plates, and never needing to get out of your PJs.
            </h1>
            <div class="btnSec_3">
                <BtN />
            </div>
        </div>
       </div>
       
    </div>
</template>


<script>
import BtN from './v-button.vue'
export default{
    name:'AppSectionC',
    components:{
        BtN
    }
}
</script>


<style scoped>
.sec3{
    background-color: #F5EDE7;
    height: 100vh;
}
.img_sec_tree{
    width: 680px;
    height: 529px;
    
}
.sec_img_3{
    padding-top: 80px;
    padding-left: 30px;
}
.text_title{
    padding-top: 183px;
    width: 649px;
    height: 225px;
}
.text_inner{
    padding-left: 30px;
    text-align: left;
    font-family: 'Roboto', sans-serif;
    font-size: 35px;
    font-weight: 400;
    font-style: normal;
    color: black;

}
.wrapper{
    display: flex;
    justify-content: space-around;
}
.btnSec_3{
    padding-top: 40px;
    display: flex;
    padding-left: 30px;
}


</style>
