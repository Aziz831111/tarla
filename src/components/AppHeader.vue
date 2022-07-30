<template>
    <div class="wrapp">
        <div class="header">
            <div class="logo">
                <a href="#"><img src="../assets/header/Logo.png" alt="Logo"></a>
            </div>
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
                <a href="#">
                    <img class="cart_in_item" src="../assets/header/cart.png" alt="">
                    <h4 class="cart_txt">Cart</h4>
                </a>
                
            </div>
        </div>
    </div>
    
    
    
</template>


<script>
export default{
    name: 'AppHeader'
}

</script>



<style scoped>
.wrapp{
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    background-color: #F5EDE7;
    height: 90px;
}
.header{
    padding-left: 15px;
    display: flex;
}

.nav_item{
    margin-left: 10px;
    padding-top: 40px;
    display: flex;

}
li{
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
.log_txt:hover{
    color: #FFC3A0;
}
.cart_txt:hover{
    color: #FFC3A0;
}
</style>