<template>
  <div class="home">
    <div class="playlist">
      <div class="playlist-main">playlist</div>
      <div class="playlist-sub">TOP 10 SONGS</div>
    </div>
    <div
      v-for="(item, index) in topTenSongs"
      :key="item.index"
      class="background"
      :class="{
        'background-slected': current === index,
        'background-hide': current !== index && lastCurrent !== index,
        'background-last-slected': lastCurrent === index
      }"
      :style="{ backgroundImage: 'url(' + item.img + ')' }"
    />
    <div
      v-for="(item, index) in topTenSongs"
      :key="item.index"
      class="title"
      :class="{
        'title-hide': !isCurrent(index),
        'title-selected': isCurrent(index),
        'title-last-slected': lastCurrent === index
      }"
    >
      {{ item.singer }}
    </div>
    <div
      class="index"
    >
      <div
        v-for="(item, index) in topTenSongs"
        :key="item.index"
        :class="{
          'index-slected': isCurrent(index),
          'index-last-slected': lastCurrent === index,
          'index-non-slected': ! isCurrent(index)
        }"

        @click="onChangeCurrent(index)"
      >
        {{ showIndex(index) }}
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
    gsap.to('.background-slected', {
      duration: 2,
      width: '100%',
      ease: 'power4.out'
    })
    gsap.to('.title-selected', {
      duration: 1,
      opacity: 0.9
    })
    gsap.to('.index-slected', {
      duration: 1,
      opacity: 0.9,
      'font-size': '150px',
      ease: 'power4.out'
    })
    gsap.to('.index-non-slected', {
      duration: 1,
      opacity: 0.2,
      'font-size': '40px',
      ease: 'power4.out'
    })
  },
  methods: {
    showIndex(index) {
      return index === 10 ? 10 : `0${index + 1}`
    },
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
      gsap.to('.background-slected', {
        duration: 2,
        width: '100%',
        ease: 'power4.out'
      })
      gsap.to('.background-last-slected', {
        duration: 2,
        width: '0%',
        ease: 'power4.out'
      })

      gsap.to('.title-last-slected', {
        duration: 1,
        opacity: 0
      })
      gsap.to('.title-selected', {
        duration: 1,
        opacity: 0.9
      })

      gsap.to('.index-slected', {
        duration: 1,
        opacity: 0.9,
        'font-size': '150px',
        ease: 'power4.out'
      })
      gsap.to('.index-last-slected', {
        duration: 1,
        opacity: 0.2,
        'font-size': '40px',
        ease: 'power4.out'
      })
      gsap.to('.index-non-slected', {
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

.background
  height 100%
  background-size cover
  background-repeat no-repeat
  background-attachment fixed
  &-slected
    width 0%
    position absolute
  &-hide
    position absolute
  &-last-slected
    float right

.index
  position absolute
  text-align right
  letter-spacing 0px
  color #fff
  height 210px
  display flex
  align-items center
  top 70%
  right 10%
  &-slected
    margin 0 -30px
    font-size 150px
  &-last-slected
    opacity 0.2
  &-non-slected
    padding 0 5px
    opacity 0.2

.title
  position absolute
  text-align left
  letter-spacing 0px
  color #fff
  bottom 230px
  left 135px
  font-size 163px
  &-selected
    opacity 0
  &-hide
    opacity 0

.playlist
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

.mask
  width 100%
  height 100%
  background-color #08224b
  opacity 0.9
</style>
