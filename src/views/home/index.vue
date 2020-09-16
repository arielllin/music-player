<template>
  <div class="home">
    <div class="title">
      <div class="title-main">playlist</div>
      <div class="title-sub">TOP 10 SONGS</div>
    </div>
    <div
      v-for="(item, index) in topTenSongs"
      :key="item.index"
      class="home-wrap"
      :class="[{ 'last-background': lastCurrent === index }]"
      :style="{ backgroundImage: 'url(' + item.img + ')' }"
    />
    <div
      v-for="(item, index) in topTenSongs"
      :key="item.index"
      class="default default-title"
      :class="[`title-${index}`, { 'title-hide': !isCurrent(index) }]"
    >
      {{ item.singer }}
    </div>
    <div
      class="default default-index"
    >
      <div
        v-for="(item, index) in topTenSongs"
        :key="item.index"
        :class="[{ 'is-slected': isCurrent(index) }, { 'index': ! isCurrent(index) }]"
        @click="onChangeCurrent(index)"
      >
        {{ `0${index + 1}` }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      current: 0,
      lastCurrent: null,
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
    isCurrent(index) {
      return this.current === index
    },
    onChangeCurrent(index) {
      this.lastCurrent = this.current
      this.current = index
    }
  }
}
</script>

<style lang="stylus" scoped>
.home
  width 100%
  height 100vh
  &-wrap
    height 100%
    background-size cover
    background-repeat no-repeat

  .mask
    width 100%
    height 100%
    background-color #08224b
    opacity 0.9

  .default
    position absolute
    text-align left
    letter-spacing 0px
    color #fff
    opacity 0.9

  .default-title
    bottom 230px
    left 135px
    font-size 163px

  .default-index
    display flex
    align-items center
    top 70%
    right 10%
    font-size 40px
    .index
      padding 0 5px
      opacity 0.2

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

.is-slected
  margin 0 -30px
  font-size 150px

.background-hide
  position absolute

.last-background
  background-position left

.title-hide
  opacity 0!important
</style>
