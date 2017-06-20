<template>
  <div class="article-wrapper">
    <h1>{{article[key].title}}</h1>
    <div v-html="article[key].content"></div>
     <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, corrupti! Reprehenderit, libero officiis obcaecati quam ipsam voluptates?</p>
    <div class="img-sec">
    	<img src="../img/nanqu01.jpg" alt="">
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi voluptate beatae illo, numquam quis et culpa tenetur consequatur non totam laudantium, doloribus excepturi ut obcaecati quisquam accusantium vel, itaque, nihil!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi voluptate beatae illo, numquam quis et culpa tenetur consequatur non totam laudantium, doloribus excepturi ut obcaecati quisquam accusantium vel, itaque, nihil!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi voluptate beatae illo, numquam quis et culpa tenetur consequatur non totam laudantium, doloribus excepturi ut obcaecati quisquam accusantium vel, itaque, nihil!</p>
    <div class="img-section">
    	<img src="../img/nanqu02.jpg" alt="">
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A fugit harum nesciunt, possimus veritatis commodi, atque sit temporibus aperiam repudiandae enim incidunt quos maxime iste ea, odio molestias earum? Maiores.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi voluptate beatae illo, numquam quis et culpa tenetur consequatur non totam laudantium, doloribus excepturi ut obcaecati quisquam accusantium vel, itaque, nihil!</p>
    <div class="img-section">
    	<img src="../img/nanqu03.jpg" alt="">
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi voluptate beatae illo, numquam quis et culpa tenetur consequatur non totam laudantium, doloribus excepturi ut obcaecati quisquam accusantium vel, itaque, nihil!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi voluptate beatae illo, numquam quis et culpa tenetur consequatur non totam laudantium, doloribus excepturi ut obcaecati quisquam accusantium vel, itaque, nihil!</p>
    <div class="img-section">
    	<img src="../img/nanqu04.jpg" alt="">
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A fugit harum nesciunt, possimus veritatis commodi, atque sit temporibus aperiam repudiandae enim incidunt quos maxime iste ea, odio molestias earum? Maiores.</p> -->
  </div> 
</template>

<script>
export default {
  name: 'pageArticle',
  data () {
    return {
        article: {
            qingdao: {
                title: '青岛南区逛啊逛',
                content: `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, corrupti! Reprehenderit, libero officiis obcaecati quam ipsam voluptates?</p>
                    <div class="img-sec">
                        <img src="/static/img/nanqu01.29c9bb1.jpg" alt="">
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi voluptate beatae illo, numquam quis et culpa tenetur consequatur non totam laudantium, doloribus excepturi ut obcaecati quisquam accusantium vel, itaque, nihil!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi voluptate beatae illo, numquam quis et culpa tenetur consequatur non totam laudantium, doloribus excepturi ut obcaecati quisquam accusantium vel, itaque, nihil!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi voluptate beatae illo, numquam quis et culpa tenetur consequatur non totam laudantium, doloribus excepturi ut obcaecati quisquam accusantium vel, itaque, nihil!</p>
                    <div class="img-section">
                        <img src="/static/img/nanqu02.c6a9441.jpg" alt="">
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A fugit harum nesciunt, possimus veritatis commodi, atque sit temporibus aperiam repudiandae enim incidunt quos maxime iste ea, odio molestias earum? Maiores.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi voluptate beatae illo, numquam quis et culpa tenetur consequatur non totam laudantium, doloribus excepturi ut obcaecati quisquam accusantium vel, itaque, nihil!</p>
                    <div class="img-section">
                        <img src="/static/img/nanqu03.b0c8943.jpg" alt="">
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi voluptate beatae illo, numquam quis et culpa tenetur consequatur non totam laudantium, doloribus excepturi ut obcaecati quisquam accusantium vel, itaque, nihil!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi voluptate beatae illo, numquam quis et culpa tenetur consequatur non totam laudantium, doloribus excepturi ut obcaecati quisquam accusantium vel, itaque, nihil!</p>
                    <div class="img-section">
                        <img src="/static/img/nanqu04.d39972e.jpg" alt="">
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A fugit harum nesciunt, possimus veritatis commodi, atque sit temporibus aperiam repudiandae enim incidunt quos maxime iste ea, odio molestias earum? Maiores.</p>`
            },
            wuhan:{
                title: '武汉吃鸡浪啊浪',
                content: `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, corrupti! Reprehenderit, libero officiis obcaecati quam ipsam voluptates?</p>
                    <div class="img-sec">
                        <img src="static/img/wuhan01.0062992.jpg" alt="">
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi voluptate beatae illo, numquam quis et culpa tenetur consequatur non totam laudantium, doloribus excepturi ut obcaecati quisquam accusantium vel, itaque, nihil!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi voluptate beatae illo, numquam quis et culpa tenetur consequatur non totam laudantium, doloribus excepturi ut obcaecati quisquam accusantium vel, itaque, nihil!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi voluptate beatae illo, numquam quis et culpa tenetur consequatur non totam laudantium, doloribus excepturi ut obcaecati quisquam accusantium vel, itaque, nihil!</p>
                    <div class="img-section">
                        <img src="/static/img/wuhan02.dd4800d.jpg" alt="">
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A fugit harum nesciunt, possimus veritatis commodi, atque sit temporibus aperiam repudiandae enim incidunt quos maxime iste ea, odio molestias earum? Maiores.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi voluptate beatae illo, numquam quis et culpa tenetur consequatur non totam laudantium, doloribus excepturi ut obcaecati quisquam accusantium vel, itaque, nihil!</p>
                    <div class="img-section">
                        <img src="/static/img/wuhan03.4c780b8.jpg" alt="">
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi voluptate beatae illo, numquam quis et culpa tenetur consequatur non totam laudantium, doloribus excepturi ut obcaecati quisquam accusantium vel, itaque, nihil!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi voluptate beatae illo, numquam quis et culpa tenetur consequatur non totam laudantium, doloribus excepturi ut obcaecati quisquam accusantium vel, itaque, nihil!</p>`
            },
            xigua:{
                title: '冰镇西瓜爽啊爽',
                content: `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, corrupti! Reprehenderit, libero officiis obcaecati quam ipsam voluptates?</p>
                    <div class="img-sec">
                        <img src="/static/img/xigua01.f6d78c4.jpg" alt="">
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi voluptate beatae illo, numquam quis et culpa tenetur consequatur non totam laudantium, doloribus excepturi ut obcaecati quisquam accusantium vel, itaque, nihil!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi voluptate beatae illo, numquam quis et culpa tenetur consequatur non totam laudantium, doloribus excepturi ut obcaecati quisquam accusantium vel, itaque, nihil!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi voluptate beatae illo, numquam quis et culpa tenetur consequatur non totam laudantium, doloribus excepturi ut obcaecati quisquam accusantium vel, itaque, nihil!</p>
                    <div class="img-section">
                        <img src="/static/img/xigua02.d9eca7a.jpg" alt="">
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A fugit harum nesciunt, possimus veritatis commodi, atque sit temporibus aperiam repudiandae enim incidunt quos maxime iste ea, odio molestias earum? Maiores.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi voluptate beatae illo, numquam quis et culpa tenetur consequatur non totam laudantium, doloribus excepturi ut obcaecati quisquam accusantium vel, itaque, nihil!</p>
                    <div class="img-section">
                        <img src="/static/img/xigua03.849cdf0.jpg" alt="">
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi voluptate beatae illo, numquam quis et culpa tenetur consequatur non totam laudantium, doloribus excepturi ut obcaecati quisquam accusantium vel, itaque, nihil!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi voluptate beatae illo, numquam quis et culpa tenetur consequatur non totam laudantium, doloribus excepturi ut obcaecati quisquam accusantium vel, itaque, nihil!</p>`
            }
        },
        key: ''
    }
  },
  created() {
    console.log(this.$route.params.name);
    this.key = this.$route.params.name;
    console.log(this.article);
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

.article-wrapper
{
	width: 850px;
	margin: 50px auto 0;
	border-left: solid 2px #ddd;
	border-right: solid 2px #ddd;
	padding: 20px;

	img{
		width:50%;
	}

	p
	{
		line-height: 28px;
	}
}
  
</style>
