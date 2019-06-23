<template>
  <div class="m-header-wrap">
    <div class="m-header-navbar" style="height: 90px;">
      <div class="header-logo" style="padding: 25px">
        <p class="line"></p>
        <p class="blog-name">ChenZiAn</p>
        <p class="line"></p>
      </div>
      <header-tab-view :tabs="tabs" @tab-click="selectTab" />
    </div>
  </div>
</template>

<script>
import headerTabView from 'COMMON/headerTabView/headerTabView'
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
        { name: '归档', icon: 'icon-icon_clock', to: 'home' },
        { name: '关于', icon: 'icon-icon_user', to: 'home' },
        { name: '友链', icon: 'icon-icon_share', to: 'home' },
        { name: '更多', icon: 'icon-icon_category', to: 'home' },
        { name: '搜索', icon: 'icon-icon_search', to: 'home' }
      ]
    }
  },
  methods: {
    selectTab (tab) {
      console.log(tab.to)
      this.$router.push(tab.to)
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
    .header-logo
      height 100%
      box-sizing border-box
      font-size 20px
      font-weight 700
      display flex
      flex-direction column
      justify-content space-between
      color $color-main
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
