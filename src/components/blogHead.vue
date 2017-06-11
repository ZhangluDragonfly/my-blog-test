<template>
  <header class="app-header"><!-- 页头 -->
    <nav>
      <div class="logo"><a href="#">张璐璐<span>了解我</span></a></div>
      <ul class="firstMenu ">
        <li class="active" onmouseover="showSubMenu(this)" onmouseout="hideSubMenu(this)"><a href="#">链接1</a>
          <ul class="subMenu">
            <li><a href="#">菜单项1</a></li>
            <li><a href="#">菜单项2</a></li>
            <li><a href="#">菜单项3</a></li>
          </ul>
        </li>
        <li><a href="#">链接3</a>
          <ul class="subMenu">
            <li><a href="#">菜单项1</a></li>
            <li><a href="#">菜单项2</a></li>
          </ul>
        </li>
        <li><a href="#">链接4</a></li>
      </ul>
    </nav>
    <div id="banner">
      <div class="inner">
        <div class="hr"></div>
        <h1>张璐璐</h1>
        <div class="hr"></div>
        <p class="sub-heading">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut veritatis sunt!</p>
        <button>了解我</button>
        <div class="more">更多</div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'blogHead',
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

  header
  {
    background: rgba(0,0,0,0.3);
  }

  nav
  {
    /*background: transparent;*/
    height: 50px;
    background-color: rgba(102,102,102,0.42);
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

  nav a 
  {
    line-height: 50px;
    text-decoration: none;
    color: #fff;
    opacity: 0.8;

    /* 将链接从字到块，感应鼠标范围 */
    display: block;
    padding: 0 20px;
    height: inherit;
  }

  nav a:hover
  {
    opacity: 1;
    background-color: rgba(102,102,102,0.6);
  }

  nav .logo
  {
    float: left;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 1px;
    
  }

  nav .logo a span
  {
    display: none;
  }

  nav .logo a:hover span
  {
    display: block;
  }

  nav .logo a:hover
  {
    margin-top: -50px;
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

  #banner
  {
    background: transparent;
    height: 700px;
    color: #fff;
    
  }

  #banner .inner 
  {
    max-width: 400px;
    text-align: center;
    margin: 0 auto;

    position: relative;
    top: 160px;
  }

  #banner .inner h1
  {
    margin: 0;
  }

  #banner .inner .more
  {
    margin-top: 300px;
  }

  .sub-heading
  {
    line-height: 30px;
    margin: 30px 0;
  }

  #banner button
  {
    padding: 14px 40px;
  }

  button
  {
    border: none;
    background: #4ab1a3;
    color: #eee;
    padding: 10px;
  }

  h1
  {
    letter-spacing: 5px;
  }

  h2
  {
    margin: 0;
  }

  h3
  {
    font-size: 24px;
  }


  .hr
  {
    width: 100%;
    height: 1px;
    margin: 20px auto;

  }

  #banner .hr
  {
    background: #fff;
    width: 60%;
  }

</style>
