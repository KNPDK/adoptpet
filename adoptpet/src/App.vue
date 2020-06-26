<template>
  <div id="app">
    <NavbarComponent />
    <JumbotronComponent />
    <HomeComponent />
    <FooterComponent />

  </div>
</template>

<script>
import HomeComponent from './components/HomeComponent.vue';
import NavbarComponent from './components/NavbarComponent';
import JumbotronComponent from './components/JumbotronComponent';
import FooterComponent from './components/FooterComponent';

export default {
  name: 'app',
  components: {
    HomeComponent,
    NavbarComponent,
    JumbotronComponent,
    FooterComponent
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

#app{
  margin-top: 50px;
}
h1, h3{
    text-align: center;
    color: whitesmoke;
}
</style>
