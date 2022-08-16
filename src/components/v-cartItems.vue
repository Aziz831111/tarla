<template>
    <div class="cart__imems_inner">
        <div class="cart__items" >
            <img class="cart__items__img" :src=" require('../assets/cartImg/'+ card_item_data.image)" alt="">
                <div class="cart__items__info">
                    <h3>{{card_item_data.name}} <br>{{card_item_data.title}}</h3>
                    <div class="price">
                        <span>Price: £</span>
                        <p> {{card_item_data.price}}</p>
                </div>
            </div>
            <div class="cart__items-quantity">
                <span class="countMin" @click="decrementItem">-</span>
                <span>{{card_item_data.quantity}}</span>
                <span class="countPls" @click="incrementItem">+</span>
                </div>
            <button 
                @click="deliteFromCart"
                class="btn__cart-del">delite
            </button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CartItems',
    props:{
        card_item_data:{
            type: Object,
            default(){
                return{}
            }
        }

    },
    methods:{
       
        decrementItem(){
            this.$emit('decrement')
        },
        incrementItem(){
            this.$emit('increment')
        },
        deliteFromCart(){
            this.$emit('deliteCart')
        }
    },
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" >
.cart__imems_inner{
    width: 1000px;
    

}
.cart__items-quantity{
    .countMin,
    .countPls{
        
        cursor: pointer;
    }
    .countMin{
        margin-right: 15px;
    }
    .countPls{
        margin-left: 15px;
    }
}
.cart__items{
    margin: 20px;
    box-shadow: 0px 0px 3px 0px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    &__img{
        padding: 10px;
        max-width: 150px;
    }
    &__info{
        display: flex;
    }
}
.price{
    margin-left: 30px;
    align-items: center;
}
.btn__cart-del{
    margin-right: 20px;
    align-items: center;
    display: flex;
    justify-content: space-around;
    border: 1px solid #0126DE;
    border-radius: 35px;
    color: #0126DE;
    cursor: pointer;
    height: 35px;
    width: 145px;
    background: transparent;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
}
</style>