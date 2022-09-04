<template>
    <div class="secB">
        <div class="wrapp">
            <div class="title__b-sec">
            <h1 class="title_inner-b">
                How it works
            </h1>
        </div>

        <div class="content">
            <div class="kruasan">
                <img src="../assets/sec2/kruasan.png" alt="kruasan">
                <div class="kruasan_blog">
                    <h2 class="kruasan_title">Choose your fave</h2>
                </div>
                <p class="kruasan_text">This sounds easier than it's going to be. We've got 
                    all the classics on here, so now it's over to you.
                </p>
            </div>

            <div class="bell">
                <img src="../assets/sec2/bell.png" alt="bell">
                <div class="bell_blog">
                    <h2 class="bell_title">Ding dong</h2>
                </div>
                <p class="bell_text">Next you'll get a beautiful little package delivered to your door,
                    on a day and time slot that you choose.
                </p>
            </div>

            <div class="get">
                <img src="../assets/sec2/get.png" alt="get">
                <div class="get_blog">
                    <h2 class="get_title">Get baked</h2>
                </div>
                <p class="get_text">Take your fresh pastry sheet and fillings, 
                    learn our pro techniques then never buy a stale pastry ever again.
                </p>
            </div>
            
            <div class="like_Buter">
                <img src="../assets/sec2/like.png" alt="like">
                <div class="like_blog">
                    <h2 class="like_title">Take the credit</h2>
                </div>
                <p class="like_text">It was all you, nudge-nudge wink-wink.
                    We're just happy to be your loyal side-kick.
                </p>
            </div>
        </div>
        <div class="btnSecB">
            <router-link to="catalog">
                <BtN />
            </router-link>
            
        </div>
        </div>
    </div>
</template>


<script>
import BtN from "./v-button.vue"

    export default {
        name:'AppSectionB',
        components:{
            BtN
        }
    }

</script>



<style lang="scss">
.secB{
    background-color: #F5EDE7;
    height: 100vh;
    
}
.wrapp{
    padding-top: 50px;
}
.content{
    text-align: center;
    margin-top: 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 768px){
        flex-wrap: wrap;
        margin-top: 50px;
    }
}
.title_inner-b{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 43px;
    line-height: 60px;
    text-align: center;
    color: #000000;
}
img{
    display: inline-block;

}
.kruasan,
.bell,
.get,
.like{
    @media (max-width: 768px){
        height: 300px;
    }
    @media (max-width: 425px){
        height: 300px;
    }
}

.kruasan_blog,
.bell_blog,
.get_blog,
.like_blog{
    align-items: center;
    text-align: -webkit-center;
}
.kruasan_title,
.bell_title,
.get_title,
.like_title{
    
    width: 200px;
    height: 72px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 27px;
    line-height: 36px;
    text-align: center;
    text-transform: uppercase;
    color: #000000;
    @media (max-width: 1024px){
        font-size: 22px;

    }
    @media (max-width: 768px){
        font-size: 20px;
        line-height: normal;
        width: 125px;
        height: 46px;

    }
}
    .kruasan_text, 
    .bell_text, 
    .get_text,
    .like_text{
        margin-left: 20px;
        width: 300px;
        height: 85px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
        text-align: center;
        color: #000000;
        @media (max-width: 1024px){
        font-size: 14px;
        width: 200px;

    }
    }
     .btnSecB{
        text-align: center;
        margin-top: 70px;
     }


</style>