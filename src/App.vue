<template>
<AppHeader />
<AppSectionA />
<AppSectionB />
<AppSectionC />

</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppSectionA from './components/AppSectionA.vue';
import AppSectionB from './components/AppSectionB.vue';
import AppSectionC from './components/AppSectionC.vue';



export default {
  name: 'App',
  components: {
    AppHeader,
    AppSectionA,
    AppSectionB,
    AppSectionC
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
