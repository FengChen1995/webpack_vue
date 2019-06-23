<template>
  <div id="appIndex">
    <div class="content-wrap">
      <!-- 博客头部组件 -->
      <m-header />
      <!-- 内容渲染组件 -->
      <div class="content-view">
        <!-- 对应组件的内容渲染到router-view中 -->
        <router-view />
      </div>
      <m-footer />
    </div>
  </div>
</template>

<script type="text/javascript">
import mHeader from 'COMMON/mHeader/mHeader'
import mFooter from 'COMMON/mFooter/mFooter'
export default {
  name: 'app',
  components: {
    mHeader,
    mFooter
  },
  data () {
    return {
      data: ''
    }
  }
}
</script>

<style lang="stylus" src="STYLUS/main.styl"></style>
<style lang="stylus">
#appIndex
  width 100%
  min-height 100%
  min-width 320px
  display flex
  flex-direction: row
  position absolute

.content-wrap
  width 100%
  display flex
  flex-direction column
  justify-content flex-start
  align-items center

.content-view
  max-width 1000px
  min-width 320px
</style>
