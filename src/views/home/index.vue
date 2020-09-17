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
      :class="{
        'home-wrap-default': current === index,
        'background-hide': current !== index && lastCurrent !== index,
        'last-background': lastCurrent === index
      }"
      :style="{ backgroundImage: 'url(' + item.img + ')' }"
    />
    <div
      v-for="(item, index) in topTenSongs"
      :key="item.index"
      class="default default-title"
      :class="[`title-${index}`, { 'title-hide': !isCurrent(index), 'title-selected': isCurrent(index), 'title-last': lastCurrent === index } ]"
    >
      {{ item.singer }}
    </div>
    <div
      class="default default-index"
    >
      <div
        v-for="(item, index) in topTenSongs"
        :key="item.index"
        :class="{
          'is-slected': isCurrent(index),
          'last-slected': lastCurrent === index,
          'index': ! isCurrent(index)
        }"

        @click="onChangeCurrent(index)"
      >
        {{ `0${index + 1}` }}
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'

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
  watch: {
  },
  mounted() {
    gsap.to('.home-wrap-default', {
      duration: 2,
      width: '100%',
      ease: 'power4.out'
    })
    gsap.to('.title-selected', {
      duration: 1,
      opacity: 0.9
    })
    gsap.to('.is-slected', {
      duration: 1,
      opacity: 0.9,
      'font-size': '150px',
      ease: 'power4.out'
    })
    gsap.to('.index', {
      duration: 1,
      opacity: 0.2,
      'font-size': '40px',
      ease: 'power4.out'
    })
  },
  methods: {
    isCurrent(index) {
      return this.current === index
    },
    onChangeCurrent(index) {
      if (this.current === index) return

      this.lastCurrent = this.current
      this.current = index
      this.$nextTick(() => {
        this.changeBackground()
      })
    },
    changeBackground() {
      gsap.to('.home-wrap-default', {
        duration: 2,
        width: '100%',
        ease: 'power4.out'
      })
      gsap.to('.last-background', {
        duration: 2,
        width: '0%',
        ease: 'power4.out'
      })

      gsap.to('.title-last', {
        duration: 1,
        opacity: 0
      })
      gsap.to('.title-selected', {
        duration: 1,
        opacity: 0.9
      })

      gsap.to('.is-slected', {
        duration: 1,
        opacity: 0.9,
        'font-size': '150px',
        ease: 'power4.out'
      })
      gsap.to('.last-slected', {
        duration: 1,
        opacity: 0.2,
        'font-size': '40px',
        ease: 'power4.out'
      })
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
    background-attachment fixed
    &-default
      width 0%
      position absolute

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

  .default-title
    bottom 230px
    left 135px
    font-size 163px

  .title-selected
    opacity 0

  .default-index
    height 210px
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
  opacity 0

.background-hide
  position absolute

.last-background
  float right

.last-slected
  opacity 0.2
  font-size 40px

.title-hide
  opacity 0

</style>
