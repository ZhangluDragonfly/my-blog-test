<template>
  <div id="app">
    <blog-nav></blog-nav>
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
    <blog-footer></blog-footer>
  </div>
</template>

<script>
import blogNav from './components/blogNav';
import blogFooter from './components/blogFooter';

export default {
  name: 'app',
  components: {
      blogNav,
      blogFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
