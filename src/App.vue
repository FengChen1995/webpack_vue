<template>
  <div id="appIndex">
    <div class="content-wrap">
      <!-- 博客头部组件 -->
      <m-header />
      <header>
        <router-link to='/home' class="home">Home</router-link>
        <router-link to='/categories'>categories</router-link>
      </header>
      <!-- 对应组件的内容渲染到router-view中 -->
      <router-view></router-view>
    </div>
  </div>
</template>


<script type="text/javascript">
import mHeader from 'COMMON/mHeader/mHeader'
export default {
  name: 'app',
  components: {
    mHeader
  },
  data() {
    return {
    }
  }
}
</script>


<style lang="stylus" src="STYLUS/reset.styl"></style>
<style lang="stylus">
#appIndex 
  width 100%
  min-height 100%
  min-width 320px
  display flex
  flex-direction: row
  position absolute
</style>
