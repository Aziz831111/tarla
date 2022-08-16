<template>
  <div class="catalog__atem">
    <div class="wrapperCart">
      <div class="cart_items">
          <img :src=" require('../assets/cartImg/'+ product_data.image)" alt="" class="img_cart">
          
          <div class="rating_glo">
              <div class="cart_title">
                  <h3 class="cart_inner">
                      {{product_data.name}} <br>{{product_data.title}}
                  </h3>
              </div>
              <div class="rating">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star "></span>
                  <span class="fa fa-star "></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
              </div>
          </div>
          
          <div class="options">
              <div class="artikul">
                  <p>Quantity: {{product_data.quantity}}</p>
              </div>
              <div class="price">
                  <span>Price: £</span>
                  <p> {{product_data.price}}</p>
              </div>
          </div>
          <div class="like">
              <img class="catalog__like" src="../assets/cartImg/like.png" alt="">
              <img class="catalog__diselike" src="../assets/cartImg/dislike.png" alt="">
          </div>
            <div class="add__cart">
              <button
                  @click="addToCart" 
                  class="add__to-cart_btn">
                  Add to cart
              </button>
            </div>
          
      </div>
      </div>

  </div>
</template>

<script>

import "./cart.scss"
export default {
  name: "AppCatalogItem",
  components:{
    
  },
  created() {},
  data() {
    return {};
  },
  methods:{
    addToCart(){
      this.$emit('addToCart', this.product_data)
    }
  },
  props: {
    product_data:{
      type: Object,
      default(){
        return{}
      }
    }
  },
  
};
</script>

<style lang="scss" >
.catalog__wrapper{
  box-shadow: 0px 0px 10px 0px;
}
.wrapperCart{
  border-radius: 20px;
  box-shadow: 0px 0px 5px 0px;
  margin-top: 50px;
}
.like{
  left: 250px;
}
.add__cart{
  align-items: center;
    width: 108px;
    position: relative;
    left: 113px;
    top: 25px;
}
.add__to-cart_btn{

  cursor: pointer;
  margin-left: 10px;
  border: 1px solid #0126DE;
  background: transparent;
  border-radius: 40px;
  color: #0126DE;
    &:hover{
      color: #fe4000;
  }
}
</style>
