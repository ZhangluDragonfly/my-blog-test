<template>
  <header class="app-header"><!-- 页头 -->
    <div id="banner">
      <div class="inner">
        <div class="hr"></div>
        <h1>张璐璐</h1>
         <div class="hr"></div> 
        <p class="sub-heading">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut veritatis sunt!</p>
        <button @click="onAboutMe">了解我</button>
        <div class="more"><span>更多</span><i class="fa fa-angle-double-down" aria-hidden="true"></i></div>
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
  },
  methods: {
    onAboutMe () {
      console.log(123455);
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

  header{
    background: rgba(0,0,0,0.3);
  }

  #banner{
    background: transparent;
    height: 700px;
    color: #fff;
    position: relative;

    .inner {
      max-width: 400px;
      text-align: center;
      margin: 0 auto;

      position: absolute;
      top: 160px;
      left: 50%;
      transform: translateX(-50%);

      .hr {
        background: #fff;
        width: 60%;
      }

      h1 {
        margin: 0;
        letter-spacing: 5px;
      }

      .sub-heading {
        line-height: 30px;
        margin: 30px 0;
      }

      button {
        padding: 14px 40px;
      }

      .more{
        color: #ddd;
        margin-top: 200px;
        transition: all .2s;

        span, i{
          display: block;
          margin-bottom: 10px;
        }

        &:hover
        {
          color: #fff;
          cursor:pointer;

        }
      }
    }
  }

  button
  {
    border: none;
    background: #4ab1a3;
    color: #eee;
    padding: 10px;
    cursor:pointer;
  }
 

  .hr
  {
    width: 100%;
    height: 1px;
    margin: 20px auto;

  }


</style>
