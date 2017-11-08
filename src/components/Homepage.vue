<template>
	<div class="home">
		<h1>{{city}}</h1>
		<!-- 按钮导航 -->
		<router-link tag='button' to="/citylist">获取城市列表</router-link>
	</div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed:{
    city:function() {
      // 通过vuex的getters方法来获取state里面的数据
      return this.$store.getters.getCityFn;
    }
  }
}
</script>
<style scoped>
</style>