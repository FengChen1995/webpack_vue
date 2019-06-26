<template>
  <div id="appIndex">
    <div class="content-wrap">
      <!-- 博客头部组件 -->
      <m-header />
      <!-- 内容渲染组件 -->
      <div class="content-view" :style="{width: viewWrapWidth}">
        <!-- 对应组件的内容渲染到router-view中 -->
        <router-view />
      </div>
      <m-footer />
    </div>
  </div>
</template>

<script type="text/javascript">
import { SCREEN_CHANGE } from 'STORE/mutation-types'
import mHeader from 'COMMON/mHeader/mHeader'
import mFooter from 'COMMON/mFooter/mFooter'
import {
  // mapActions,
  mapGetters
  // mapMutations
} from 'vuex'
export default {
  name: 'app',
  components: {
    mHeader,
    mFooter
  },
  data () {
    return {
      data: '',
      viewWrapWidth: '1000px'
    }
  },
  watch: {
    screen (value) {
      this.setViewWrapWidth()
    }
  },
  computed: {
    ...mapGetters([
      'screen'
    ])
  },
  mounted () {
    this.updateScreen()
    window.addEventListener('resize', this.updateScreen)
    window.addEventListener('scroll', this.scrollListener)
  },
  methods: {
    updateScreen () {
      this.$store.commit(SCREEN_CHANGE, {
        width: window.innerWidth,
        height: window.innerHeight
      })
    },
    setViewWrapWidth () {
      let temp = 20
      if (this.screen.width > 990 && this.showRightNav) {
        temp = 340
      }
      this.viewWrapWidth = this.screen.width - temp + 'px'
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
  padding 0 10px
  margin 0 auto
</style>
