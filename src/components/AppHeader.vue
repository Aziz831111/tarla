<template>
    <div class="header__wrapp">
        <div class="header">
            <router-link to="/">
                <div class="logo">
                    <img src="../assets/header/Logo.png" alt="Logo">
                </div>
            </router-link>
            <div class="nav">
                <ul class="nav_item">
                    <a href="#"><li>Shop</li></a>
                    <a href="#"><li>Our Story</li></a>
                    <a href="#"><li>Who is Tarla?</li></a>
                </ul>
            </div>
        </div>        
        <div class="icon">
            <div class="log_in">
                <a href="#">
                    <img class="Log_in_item" src="../assets/header/login.png" alt="">
                    <h4 class="log_txt">Log in</h4>
                </a>
                
            </div>

            <div class="cart">
                <router-link :to="{name: 'cart', params:{cart_data: CART}}" >
                    <div>
                        <img class="cart_in_item" src="../assets/header/cart.png" alt="">
                        <h4 class="cart_txt">Cart</h4>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
    
    
    
</template>


<script>
import { mapGetters } from 'vuex'
import './reset.css'
export default{
    name: 'AppHeader',
    computed:{
        ...mapGetters([
            'CART'
        ])
    }
}

</script>



<style lang="scss">
.header__wrapp{
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    height: 90px;
    box-shadow: 0px 0px 3px 0px;
}
.header{
    padding-left: 15px;
    display: flex;
}
.nav{
    padding-top: 40px;
}
.nav_item{
    margin-left: 10px;
    display: flex;

}
li{
    color: black;
    margin-left: 10px;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 13px;
    text-transform: uppercase;
    transition: all;
}

li:hover{
    color: #FFC3A0;
    text-decoration: underline;
    transform: scale(1,2);

}
.icon{
    display: flex;
    margin-right: 25px;
}
.log_in{
    
    padding-right: 10px;
    align-items: center;
    text-align: -webkit-center;
}
.cart_txt,
.log_txt{
    color: black;
}
.log_txt:hover{
    color: #FFC3A0;
}
.cart_txt:hover{
    color: #FFC3A0;
}
</style>