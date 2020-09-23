<template>
  <div class="album">
    <div class="album-player" />
    <div
      v-for="(item, index) in img"
      :key="index"
      class="album-non-selected"
      :class="[`album-${index}`, {'album-selected': index === isSelected}]"
    >
      <div class="album-img"><img :src="require(`@/assets/images/${item}`)"></div>
    </div>
    <div class="album-border" />
    <div class="album-content" />
    <div class="album-text">
      <div class="album-text-main">album</div>
      <div class="album-text-sub">TOP 10 SONGS</div>
    </div>
    <div class="album-singer">Bob Marley</div>
    <div class="album-songs">
      <div :class="'album-select'">
        <div class="right" />
        <div class="left" />
      </div>
      <div
        v-for="(item, index) in songs"
        :key="index"
        class="track"
        :class="{
          'track-selected': index + 1 === isSelected,
          'track-last-selected': index + 1 === lastSelected
        }"
        @click="onClickTrack(index)"
      >
        <div class="track-info">
          <span>{{ item }}</span>
          <span>Bob Marley・1975</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'Album',
  data() {
    return {
      isSelected: 1,
      lastSelected: null,
      img: [
        'album_0.png',
        'album_1.png',
        'album_2.png',
        'album_3.png',
        'album_4.png',
        'album_5.png',
        'album_6.png'
      ],
      songs: [
        'Get Up Stand Up & Dub',
        'Lively Up',
        'Could You Be Loved',
        'Buffalo Soldier',
        'Redemption Song',
        'Jamming'
      ]
    }
  },
  mounted() {
    gsap.to('.track-selected', {
      duration: 1,
      opacity: 0.8
    })
  },
  methods: {
    onClickTrack(index) {
      if (index + 1 !== this.isSelected) {
        this.lastSelected = this.isSelected
        this.isSelected = index + 1
        this.$nextTick(() => {
          this.playerRotate()
        })
      }
    },
    playerRotate() {
      if (this.isSelected === 1) {
        gsap.to('.album-select', {
          duration: 1,
          top: 0
        })
      } else if (this.isSelected === 2) {
        gsap.to('.album-select', {
          duration: 1,
          top: '5.5vw'
        })
      } else if (this.isSelected === 3) {
        gsap.to('.album-select', {
          duration: 1,
          top: '10.5vw'
        })
      }
      gsap.to('.track-selected', {
        duration: 1.8,
        opacity: 0.8
      })
      gsap.to('.track-last-selected', {
        duration: 1,
        opacity: 0.2
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.album
  background-color #18264E
  width 100%
  height 100vh
  position relative
  overflow hidden
  &-player
    background-color #111D40
    border-radius 50%
    position absolute
    top -715px
    left 124px
    width 2568px
    height 2568px

  &-content
    background-color #18264E
    border-radius 50%
    position absolute
    top -140px
    left 1200px
    width 1378px
    height 1378px

  &-text
    color #fff
    position absolute
    top 40px
    left 1500px
    width 1378px
    height 1378px
    &-main
      font-size 86px
      letter-spacing 0
      line-height 1.15
    &-sub
      font-size 20px
      letter-spacing 1px
      line-height 0.27

  &-singer
    color #fff
    position absolute
    top 150px
    left 1350px
    width 1378px
    height 1378px
    font-size 132px
    letter-spacing 0
    line-height 1.75

  &-songs
    color #fff
    position absolute
    top 380px
    left 1460px
    width 1378px
    height 1378px
    .track
      opacity 0.2
      display flex
      flex-direction column
      margin-bottom 55px
      &-info
        display flex
        flex-direction column
        font-size 20px
        letter-spacing 0
        line-height 1.27

  &-select
    position absolute
    top 0
    left 0
    .right
      opacity 0.8
      content ''
      width 200px
      height 2px
      background-color #fff
      position absolute
      margin-top 27px
      left -230px
    .left
      opacity 0.8
      content ''
      background-image url('~@/assets/images/play.png')
      background-position center
      background-size 14px 14px
      background-repeat no-repeat
      width 60px
      height 60px
      border-radius 50px
      background-color #3f5186
      position absolute
      left 360px
      margin-top -5px

  &-border
    position absolute
    border-radius 50%
    top -199px
    left 1110px
    width 1478px
    height 1478px
    border 1px solid #FFFFFF
    opacity 0.2

  &-0, &-1, &-2, &-3, &-4, &-5, &-6
    position absolute
    width 3900px
    display flex
    justify-content space-between
    top 400px
    left 260px
  &-0
    transform rotate(20deg)
  &-2
    transform rotate(-20deg)
  &-3
    transform rotate(-40deg)
  &-4
    transform rotate(-60deg)
  &-5
    transform rotate(-80deg)
  &-6
    transform rotate(-100deg)

  &-non-selected
    opacity 0.3
  &-selected
    opacity 1

.album-img
  width 789px
  height 350px
  img
    border-radius 5px
    width 100%
    height 100%
</style>
