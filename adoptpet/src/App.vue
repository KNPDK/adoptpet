<template>
  <div id="app">
    <HomeComponent msg = "Welcom to Adopt a PET" msg2 = "Adoptpet.App"/>
  </div>
</template>

<script>
import HomeComponent from './components/HomeComponent.vue'

export default {
  name: 'App',
  components: {
    HomeComponent
  }
}
</script>

<style>
#app{
  margin-top: 50px;
}
</style>
