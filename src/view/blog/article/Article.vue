<template>
  <div id="article">
    <div class="article-wrap">
      <div class="article-message">
        <div class="article-title">{{articleData.articleTitle}}</div>
        <div class="article-info">
          发表于 2019年06月27日 • <span class="article-category">{{articleData.categorieName}}</span> • <span class="article-watches">{{articleData.watches}}</span>人围观
        </div>
        <div class="article-Desc">{{articleData.articleDesc}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      articleId: '', // 文章id
      articleData: { // 文章数据
        articleTitle: '我是第一篇文章',
        tags: [{ name: '标签1', tagId: 111 }, { name: '标签2', tagId: 112 }],
        articleDesc: '我是第一篇文章的副标题',
        categorieId: 11,
        categorieName: '文档类别',
        creationTime: '1561619970000',
        watches: 13
      }
    }
  },
  created () {
    this.articleId = this.$route.query.id
    console.log(this.$route.query)
  }
}
</script>

<style lang="stylus" scoped>
@import '~STYLUS/color.styl'
#article
  position relative
  padding 30px 10px
  width 100%
  line-height 1.15
  .article-wrap
    position relative
    animation: show .8s
    background-color: $color-white;
    box-shadow: 0 0 5px 0 rgba(38,42,48,.1);
    padding 30px
    @media (max-width: 768px)
      padding: 30px 10px
    .article-message
      position relative
      display flex
      flex-direction column
      justify-content center
      align-items center
      .article-title
        font-size 26px
        @media (max-width: 768px)
          font-size 22px
        font-weight bold
        color $color-main
      .article-info
        font-size 14px
        @media (max-width: 768px)
          font-size 12px
        margin 20px 0
        color $color-greyPlus
      .article-Desc
        margin-bottom 20px
        font-size 14px
        color $color-grey
@keyframes show {
  from {
    margin-top: -10px;
    opacity: 0;
  }
  to {
    margin-top: 0px;
    opacity: 1;
  }
}
</style>
