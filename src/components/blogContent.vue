<template>
  <div class="content">
    <section class="green-section">
      <div class="wrapper">
        <div>
          <h2>一个标题</h2>
          <div class="hr"></div>
          <p class="sub-heading">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        </div>
        <div class="icon-group">
          <span class="icon">item1</span>
          <span class="icon">item2</span>
          <span class="icon">item3</span>
        </div>
      </div>                  
    </section>
    <section class="gray-section">
      <div class="article-preview">
        <div class="img-section">
          <img src="../img/pic01.jpg" alt="">
        </div>
        <div class="text-section">
          <h2>又一个标题</h2>
          <div class="sub-heading">我是副标题你好</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam dolore quod, maxime, ipsum expedita, reprehenderit rerum inventore ea placeat quis necessitatibus, possimus quibusdam. Dicta ipsa quia ratione eius excepturi accusamus.</p>
        </div>
      </div>
      <div class="article-preview">
        <div class="text-section">
          <h2>又一个标题</h2>
          <div class="sub-heading">我是副标题你好</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam dolore quod, maxime, ipsum expedita, reprehenderit rerum inventore ea placeat quis necessitatibus, possimus quibusdam. Dicta ipsa quia ratione eius excepturi accusamus.</p>
        </div>
        <div class="img-section">
          <img src="../img/pic02.jpg" alt="">
        </div>
      </div>
      <div class="article-preview">
        <div class="img-section">
          <img src="../img/pic03.jpg" alt="">
        </div>
        <div class="text-section">
          <h2>又一个标题</h2>
          <div class="sub-heading">我是副标题你好</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam dolore quod, maxime, ipsum expedita, reprehenderit rerum inventore ea placeat quis necessitatibus, possimus quibusdam. Dicta ipsa quia ratione eius excepturi accusamus.</p>
        </div>
      </div>
    </section>
    <section class="purple-section">
      <div class="wrapper">
        <div class="heading-wrapper">
        <h2>又一个标题</h2>
        <div class="hr"></div>
        <div class="sub-heading">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo perferendis beatae sapiente obcaecati, rem distinctio tempora inventore architecto ullam sit nihil maxime neque, a aperiam nobis corporis facilis vero perspiciatis!</div>
      </div>
      <div class="card-group">
        <div class="card">
          <h3>标题三</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, quod quasi minima? Praesentium facilis ducimus tempore ullam repudiandae dolorem labore fugit.</p>
        </div>
        <div class="card">
          <h3>标题三</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, quod quasi minima? Praesentium facilis ducimus tempore ullam repudiandae dolorem labore fugit.</p>
        </div>
        <div class="card">
          <h3>标题三</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, quod quasi minima? Praesentium facilis ducimus tempore ullam repudiandae dolorem labore fugit.</p>
        </div>
        <div class="card">
          <h3>标题三</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, quod quasi minima? Praesentium facilis ducimus tempore ullam repudiandae dolorem labore fugit.</p>
        </div>
        <div class="card">
          <h3>标题三</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, quod quasi minima? Praesentium facilis ducimus tempore ullam repudiandae dolorem labore fugit.</p>
        </div>
        <div class="card">
          <h3>标题三</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, quod quasi minima? Praesentium facilis ducimus tempore ullam repudiandae dolorem labore fugit.</p>
        </div>
      </div>
      </div>  
    </section>
  </div><!-- 页内容 -->
</template>

<script>

export default {
  name: 'blogContent',
  data () {
    return {
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.clr
{
  overflow: hidden;
}


.sub-heading
{
  line-height: 30px;
  margin: 30px 0;
}


.green-section
{
  background: #4ab1a3;
  color: #fff;
  text-align: center;
  padding: 100px;
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

.wrapper
{
  max-width: 700px;
  margin: 0 auto;
}

.hr
{
  width: 100%;
  height: 1px;
  margin: 20px auto;

}


.green-section .hr
{
  background: #3d9e91;
  width: 60%;
}

.icon-group
{
  margin-top: 50px;
}

.green-section .icon-group .icon
{
  display: inline-block;
  width: 80px;
  height: 80px;
  border: solid 2px #3d9e91;
  transform: rotate(45deg);
  margin: 20px
}

.gray-section
{
  background: #2f3d44;
  color: #fff;
}

.gray-section .img-section
{
  width: 45%
}

.img-section img
{
  width: 100%
}

.gray-section .text-section 
{
  width: 55%
}

.article-preview > div
{
  float: left;
}

.article-preview
{
  overflow: hidden;
  font-size: 0;/* 两个article-preview中间的缝隙去掉 */
}

.article-preview:nth-child(odd)
{
  background-color:rgba(255,255,255,0.05);
}

.text-section
{
  position: relative;
  top:68px;
  left:40px;
}

.text-section h2
{
  margin-bottom: 20px;
}

p
{
  font-size: 18px;
  letter-spacing: 1px;
}

.text-section .sub-heading
{
  font-size: 21px;
  letter-spacing: 1px;
}

.text-section > *
{
  max-width: 90%;
}

.purple-section
{
  padding: 80px;
  background: #524b8c;
  color: #fff;
}

.purple-section .heading-wrapper
{
  text-align: center;
}

.purple-section .hr
{
  background: #43385d;
  width: 60%;
}

.card
{
  float: left;
  width: 50%;
  min-height: 300px;
  padding: 50px;
  box-sizing: border-box;
  
}

.card-group
{
  overflow: hidden;
}

.card:first-child
{
  background: rgba(0,0,0,0.04);
}

.card:nth-child(2)
{
  background: rgba(0,0,0,0.08);
}

.card:nth-child(3)
{
  background: rgba(0,0,0,0.12);
}

.card:nth-child(4)
{
  background: rgba(0,0,0,0.16);
}

.card:nth-child(5)
{
  background: rgba(0,0,0,0.20);
}

.card:nth-child(6)
{
  background: rgba(0,0,0,0.24);
}


</style>
