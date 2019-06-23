<template>
  <div id="header-navbar">
    <div class="header-navbar-btn" v-for="(tab, index) in tabs" :key="index" @click="selectTab(tab)">
      <i class="iconfont" :class="tab.icon"></i>
      <span>{{tab.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header-tab-view',
  props: ['tabs'],
  data () {
    return {}
  },
  methods: {
    selectTab (tab) {
      this.$emit('tab-click', tab)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~STYLUS/color.styl'
#header-navbar
  position relative
  display flex
  justify-content flex-end
  align-items center
  cursor pointer
  animation show .5s
  .header-navbar-btn
    color $color-main
    margin-right 8px
    padding 4px 10px
    display flex
    justify-content center
    align-items center
    user-select: none
    border-radius 4px
    transition: all .5s
    &:hover
      background-color $color-main
      color $color-white

@keyframes show {
  from {
    margin-top: -30px;
    opacity: 0;
  }
  to {
    margin-top: 0px;
    opacity: 1;
  }
}
</style>
