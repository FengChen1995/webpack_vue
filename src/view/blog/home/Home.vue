
<template>
  <div id="home">
    <h1>欢迎来到Home</h1>
    <p>{{msg}}</p>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      msg: '我是Home组件'
    }
  }
}
</script>

<style lang="stylus" scoped>
  #home
    position: relative;
    padding: 30px 10px;
    min-height: 100px;
</style>
