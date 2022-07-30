<template>
<AppHeader />
<AppSectionA />
<AppSectionB />
<AppSectionC />
<AppCart />

</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppSectionA from './components/AppSectionA.vue';
import AppSectionB from './components/AppSectionB.vue';
import AppSectionC from './components/AppSectionC.vue';
import AppCart from './components/AppCart.vue';



export default {
  name: 'App',
  components: {
    AppHeader,
    AppSectionA,
    AppSectionB,
    AppSectionC,
    AppCart
}
}
</script>

<style>
#app {
  font-family: 'DM Sans', 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  
}
</style>
