<template>
  <div class="home">
    <div class="title">
      <div class="title-main">playlist</div>
      <div class="title-sub">TOP 10 SONGS</div>
    </div>
    <template
      v-for="(item, index) in topTenSongs"
    >
      <div
        :key="item.index"
        class="home-wrap"
        :class="{ 'background-hide': index !== 0 }"
        :style="{ backgroundImage: 'url(' + item.img + ')' }"
      />
      <div
        :key="item.index"
        class="default-title"
        :class="[`title-${index}`, { 'title-hide': index !== 0 }]"
      >
        {{ item.singer }}
      </div>
    </template>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      topTenSongs: [
        { singer: 'Bob Marley', img: require('@/assets/images/Bob-Marley@2x.png') },
        { singer: 'michael', img: require('@/assets/images/michael-jackson@2x.png') },
        { singer: 'beetles', img: require('@/assets/images/beetle@2x.png') }
      ]
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
.home
  width 100%
  height 100vh
  &-wrap
    height 100%
    background #08224B 0% 0% no-repeat padding-box
    background-size cover
    opacity 0.9

  .default-title
    position absolute
    bottom 230px
    left 135px
    font-size 163px
    text-align left
    letter-spacing 0px
    color #fff
    opacity 0.9

  .title
    z-index 100
    position absolute
    color #fff
    opacity 0.9
    top 50%
    right 10%
    &-main
      font-size 104px
      letter-spacing 0px
    &-sub
      position relative
      top -25px
      font-size 25px
      letter-spacing 2.5px

.background-hide
  position absolute

.title-hide
  opacity 0!important
</style>
