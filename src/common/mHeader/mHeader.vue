<template>
  <div class="m-header-wrap">
    <div class="m-header-navbar" :style="{height: isPc? '90px':'60px'}">
      <div class="header-logo" @click="tapLogo" :style="{'justify-content': isPc ? 'space-between' : 'center','padding': isPc ? '25px' : '0px'}" >
        <div class="line" v-if="isPc"></div>
        <p class="blog-name">ChenZiAn</p>
        <div class="line" v-if="isPc"></div>
      </div>
      <header-tab-view v-if="isPc" :tabs="tabs" @tab-click="selectTab" />
      <div class="toggle" v-if="!isPc" @click="toggle">
        <span
          class="toggle-line"
          v-for="(line, index) in toggleLineData"
          :key="index"
          :style="{
            width: line.width,
            top: line.top,
            transform: line.transform,
            opacity: line.opacity,
            transition: 'all .3s'
          }">
        </span>
      </div>
    </div>
    <el-collapse-transition>
      <div class="mobile-tab-wrap" v-show="!isPc&&showMobileTabs">
        <div class="tab" v-for="(tab, index) in tabs" :key="index" @click="selectTab(tab)">
          <i class="iconfont" :class="tab.icon"></i>
          <span>{{ tab.name }}</span>
        </div>
      </div>
    </el-collapse-transition>
  </div>
</template>

<script>
import headerTabView from 'COMMON/headerTabView/headerTabView'
import {
  // mapActions,
  mapGetters
  // mapMutations
} from 'vuex'
export default {
  name: 'home',
  components: {
    headerTabView
  },
  data () {
    return {
      tabs: [
        { name: '首页', icon: 'icon-icon_home', to: 'home' },
        { name: '分类/标签', icon: 'icon-icon_tag', to: 'categories' },
        { name: '归档', icon: 'icon-icon_clock', to: 'history' },
        { name: '关于', icon: 'icon-icon_user', to: 'chenzian' },
        { name: '友链', icon: 'icon-icon_share', to: 'friends' },
        { name: '更多', icon: 'icon-icon_category', to: 'more' },
        { name: '搜索', icon: 'icon-icon_search', to: 'search' }
      ],
      lineStyle: {
        normalLineData: [
          {
            width: '100%',
            top: '0px',
            transform: 'rotateZ(0deg)',
            opacity: '1'
          },
          {
            width: '100%',
            top: '0px',
            transform: 'rotateZ(0deg)',
            opacity: '1'
          },
          {
            width: '100%',
            top: '0px',
            transform: 'rotateZ(0deg)',
            opacity: '1'
          }
        ],
        closeLineData: [
          {
            width: '100%',
            top: '6px',
            transform: 'rotateZ(-45deg)',
            opacity: '1'
          },
          {
            width: '100%',
            top: '0px',
            transform: 'rotateZ(0deg)',
            opacity: '0'
          },
          {
            width: '100%',
            top: '-6px',
            transform: 'rotateZ(45deg)',
            opacity: '1'
          }
        ]
      },
      showMobileTabs: false,
      toggleLineData: [],
      isPc: true
    }
  },
  watch: {
    screen (value) {
      this.isPc = true
      if (value.width <= 768) {
        this.isPc = false
      }
      console.log(this.isPc)
    }
  },
  computed: {
    ...mapGetters([
      'screen',
      'blogInfo'
    ])
  },
  created () {
    this.toggleLineData = this.lineStyle.normalLineData
  },
  methods: {
    selectTab (tab) {
      console.log(tab.to)
      this.toggle()
      this.$router.push({ name: tab.to })
    },
    toggle () {
      console.log(`1`, this.showMobileTabs)
      this.showMobileTabs = !this.showMobileTabs
      this.toggleLineData = this.showMobileTabs ? this.lineStyle.closeLineData : this.lineStyle.normalLineData
    },
    tapLogo () {
      console.log(this.isPc)
      if (this.isPc) {
        this.$router.push({ name: 'home' })
      } else {
        this.toggle()
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~STYLUS/color.styl'
.m-header-wrap
  position relative
  width 100%
  background-color $color-bg-grey
  .m-header-navbar
    max-width 1000px
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    padding 0 10px
    margin 0 auto
    transition: all .5s
    .header-logo
      height 100%
      box-sizing border-box
      font-size 20px
      font-weight 700
      display flex
      flex-direction column
      color $color-main
      animation: logo-name .5s
      transition: all .5s
      &:hover
        cursor: pointer
        .line
          width: 0px
      .line
        width 70px
        background-color $color-main
        height 2px
        margin 0 auto
        animation: logo-line .5s
        transition: width .3s
    .toggle
      width: 24px
      height: 24px
      background-color: #f9f9f9
      padding: 5px
      cursor: pointer
      line-height: 0
      .toggle-line
        position: relative
        display: inline-block
        vertical-align: top
        width: 100%
        height: 2px
        margin-top: 4px
        background-color: $color-main
        &:first-child
          margin-top: 0px
  .mobile-tab-wrap
    width: 100%
    transition: all .3s
    // overflow: hidden
    border-top: 1px solid #eeeeee
    .tab
      position: relative
      width: 100%
      padding: 8px 15px
      font-size: 12px
      line-height: 1
      .iconfont
        font-size: 12px
        margin-right: 5px
@keyframes logo-name {
  from {
    margin-left: -60px;
    opacity: 0
  }
  to {
    margin-left: 0px;
    opacity: 1
  }
}
@keyframes logo-line {
  from {
    width: 0px;
  }
  to {
    width: 70px;
  }
}
</style>
