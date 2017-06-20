<template>
  <nav>
    <div class="logo"><a href="#banner"><router-link to="/">张璐璐</router-link></a></div>
    <ul class="firstMenu ">
      <li class="active" ><a href="#">链接1</a><!-- onmouseover="showSubMenu(this)" onmouseout="hideSubMenu(this)" -->
        <ul class="subMenu">
          <li><a href="#">菜单项1</a></li>
          <li><a href="#">菜单项2</a></li>
          <li><a href="#">菜单项3</a></li>
        </ul>
      </li>
      <li><a href="#">链接2</a>
        <ul class="subMenu">
          <li><a href="#">菜单项1</a></li>
          <li><a href="#">菜单项2</a></li>
        </ul>
      </li>
      <li><a href="#">链接3</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'blogNav',
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

 
  nav{
    /*background: transparent;*/
    height: 50px;
    background-color: rgba(102,102,102,0.42);

    z-index: 1024;
    position: fixed;
    top:0;
    left:0;
    right:0;

    a {
      line-height: 50px;
      text-decoration: none;
      color: #fff;
      opacity: 0.8;

      /* 将链接从字到块，感应鼠标范围 */
      display: block;
      padding: 0 20px;
      height: inherit;

      &:hover
      {
        opacity: 1;
        background-color: rgba(102,102,102,0.6);
      }
    }

    .logo{
      float: left;
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 1px;
      
    }
  }

  .firstMenu,
  .subMenu
  {
    margin: 0;
    padding: 0;
    list-style: none;
    /*line-height: 50px;*/
    
  }

  .firstMenu > li,
  .subMenu > li
  {
    text-align: center;
    /*background-color: rgba(102,102,102,0.42);*/
  }

  .subMenu > li
  {
    background-color: rgba(102,102,102,0.42);
  }

  .firstMenu 
  {
    float: right;
  }

  .firstMenu > li
  {
    float: left;
    position: relative;
  }

  /*CSS实现控制二级菜单显示*/
  .firstMenu > li:hover .subMenu
  {
    display: block;
  }

   .subMenu
  {
    position: absolute;
    left: 0px;
    top: 50px;
    width: 100px;
    display: none;/*CSS实现控制二级菜单隐藏*/
  } 

   .subMenu > li
   {
    margin-top: 2px;
   }

  /*menu end*/

</style>
