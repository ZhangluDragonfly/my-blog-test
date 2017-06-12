<template>
  <footer><!-- 页尾 -->
    <ul class="share-group">
      <li><i class="fa fa-weibo" aria-hidden="true"></i></li>
      <li><i class="fa fa-weixin" aria-hidden="true"></i></li>
      <li><i class="fa fa-qq" aria-hidden="true"></i></li>
      <li><i class="fa fa-github" aria-hidden="true"></i></li>
    </ul>
    <div class="copy">
      &copy 张璐璐
    </div>
  </footer>
</template>

<script>

export default {
  name: 'blogFooter',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.clr
{
  overflow: hidden;
}

footer
{
  background: #333;
  color: #fff;
  min-height: 200px;
  text-align: center;
}

ul.share-group
{
  width: 400px;
  margin: 0 auto;
  padding: 50px;
}

.share-group li
{
  display: inline-block;
  padding: 10px;
}

.copy
{
  padding-bottom: 20px;
}


</style>
