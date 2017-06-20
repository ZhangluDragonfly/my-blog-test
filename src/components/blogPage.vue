<template>
  <div class="main-wrapper">
  <blog-head></blog-head>
  <blog-content></blog-content>
  <!-- <blog-footer></blog-footer> -->
  </div>
</template>

<script>
import blogHead from './blogHead';
import blogContent from './blogContent';
import blogFooter from './blogFooter';

export default {
  name: 'blogPage',
  data () {
    return {
    }
  },
  components: { blogHead, blogContent, blogFooter }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.main-wrapper
{
  background: #444 url(../img/banner.jpg);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  margin-top: -50px;
}
</style>
