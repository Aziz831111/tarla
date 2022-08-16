import axios from 'axios';

import { createStore } from 'vuex';

const store = createStore({
  state: {
    products: [],
    cart: [],
  },
  mutations: {
    PRODUCTS_STATE: (state, products) => {
      state.products = products;
    },
    SET_CART: (state, product) => {
      if (state.cart.length) {
        let itsProductExist = false;
        state.cart.map(function (item) {
          if (item.id === product.id) {
            itsProductExist = true;
            item.quantity++;
          }
        });
        if (!itsProductExist) {
          state.cart.push(product);
        }
      } else {
        state.cart.push(product);
      }
    },
    REMUVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1);
    },
    INCREMENT: (state, index) => {
      state.cart[index].quantity++;
    },
    DECREMENT: (state, index) => {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--;
      }
    },
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios('http://localhost:3000/products', {
        method: 'GET',
      })
        .then((products) => {
          commit('PRODUCTS_STATE', products.data);
          return products;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    INCREMENT_ITEM({ commit }, index) {
      commit('INCREMENT', index);
    },
    DECREMENT_ITEM({ commit }, index) {
      commit('DECREMENT', index);
    },

    ADD_TO_CART({ commit }, product) {
      commit('SET_CART', product);
    },
    DELETE_FROM_CART({ commit }, index) {
      commit('REMUVE_FROM_CART', index);
    },
  },
  getters: {
    PRODUCTS: (state) => {
      return state.products;
    },
    CART: (state) => {
      return state.cart;
    },
  },
});

export default store;
