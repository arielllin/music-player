<template>
  <div class="album">
    <CloseButton class="close-button" />
    <div class="album-player">
      <div
        v-for="(item, index) in img"
        :key="index"
        :class="[`album-${index}`, {'album-selected': index === isSelected, 'album-non-selected': index !== isSelected}]"
      >
        <div
          class="album-img"
          :class="`album-img-${index}`"
          :style="{ backgroundImage: 'url(' + item + ')' }"
          @click="onClickSongImg(index)"
        />
      </div>
    </div>
    <div class="album-border" />
    <div class="album-content" />
    <div class="album-text">
      <div class="album-text-main">album</div>
      <div class="album-text-sub">TOP 10 SONGS</div>
    </div>
    <div class="album-singer">{{ albumName }}</div>
    <div class="album-songs">
      <div :class="'album-select'">
        <div class="right" />
        <div class="left" />
      </div>
      <div class="track-container">
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
    <div class="page-change-beginning" />
    <div class="page-change-mask" />
  </div>
</template>

<script>
import gsap from 'gsap'
import CloseButton from '@/components/CloseButton'
import { pxToVWToPx } from '@/utils'

export default {
  name: 'Album',
  components: {
    CloseButton
  },
  props: {
    albumName: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      clickLock: false,
      isSelected: 1,
      lastSelected: null,
      img: [
        require('@/assets/images/origin/track_0.png'),
        require('@/assets/images/origin/track_1.png'),
        require('@/assets/images/origin/track_2.png'),
        require('@/assets/images/origin/track_3.png'),
        require('@/assets/images/origin/track_4.png'),
        require('@/assets/images/origin/track_5.png'),
        require('@/assets/images/origin/track_6.png')
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
  watch: {
    isSelected: {
      handler() {
        if (this.isSelected < 4) {
          gsap.to('.album-select', {
            duration: 1,
            top: `${pxToVWToPx((this.isSelected - 1) * 100 + 10)}px`
          })
          gsap.to('.track-container', {
            duration: 1,
            top: `${pxToVWToPx(10)}px`
          })
        } else {
          gsap.to('.album-select', {
            duration: 1,
            top: `${pxToVWToPx(220)}px`
          })
          gsap.to('.track-container', {
            duration: 1,
            top: `${pxToVWToPx(-(this.isSelected - 3) * 100)}px`
          })
        }
        gsap.to('.album-player', {
          duration: 1.8,
          transform: `rotate(${(this.isSelected - 1) * 27}deg)`
        })
      }
    }
  },
  mounted() {
    gsap.fromTo('.page-change-beginning', {
      duration: 2,
      transform: 'scale(300, 300)',
      ease: 'power4.out'
    }, {
      duration: 2,
      top: `${pxToVWToPx(401)}px`,
      left: `${pxToVWToPx(1847)}px`,
      transform: 'scale(0, 0)',
      ease: 'power4.out'
    })
    gsap.to('.track-selected', {
      duration: 1,
      opacity: 0.8
    })
    gsap.to('.album-selected', {
      duration: 1,
      opacity: 1
    })
    gsap.to('.album-non-selected', {
      duration: 1,
      opacity: 0.3
    })
  },
  methods: {
    onClickSongImg(index) {
      if (index === this.isSelected) {
        gsap.to('.album-select', {
          duration: 1,
          top: `${pxToVWToPx(110)}px`
        })
        gsap.to(`.album-img-${index}`, {
          duration: 1,
          width: `${pxToVWToPx(925)}px`,
          height: `${pxToVWToPx(1080)}px`,
          top: `-${pxToVWToPx(365)}px`,
          left: `-${pxToVWToPx(215)}px`,
          'z-index': 100
        })
        gsap.set('.page-change-mask', {
          top: 0
        })
        gsap.to('.close-button', {
          duration: 1,
          opacity: 1
        })
        gsap.to('.page-change-mask', {
          duration: 1,
          opacity: 1,
          onComplete: () => {
            this.$router.push({ name: 'Track', query: { singer: 'BobMarley', id: index }})
          }
        })
      }
    },
    onClickTrack(index) {
      if (index + 1 !== this.isSelected) {
        if (this.clickLock) return
        this.clickLock = true
        this.lastSelected = this.isSelected
        this.isSelected = index + 1
        this.$nextTick(() => {
          this.trackChange()
        })
      }
    },
    trackChange() {
      gsap.to('.album-selected', {
        duration: 1,
        opacity: 1
      })
      gsap.to('.album-non-selected', {
        duration: 1,
        opacity: 0.2
      })

      gsap.to('.track-selected', {
        duration: 1.8,
        opacity: 0.8,
        onComplete: () => {
          this.clickLock = false
        }
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
    top -1283px
    left 90px
    width 3646px
    height 3646px

  &-content
    background-color #18264E
    border-radius 50%
    position absolute
    top -146px
    left 1200px
    width 1370px
    height 1370px

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
    top 370px
    left 1230px
    padding-top 10px
    padding-left 230px
    width 1378px
    height 1378px
    overflow hidden
    .track-container
      position absolute
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
    top 10px
    left 230px
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
      content ''
      background-image url('~@/assets/images/play.png')
      background-position center
      background-size 14px 14px
      background-repeat no-repeat
      width 60px
      height 60px
      border-radius 50px
      background-color #3e4c74
      position absolute
      left 360px
      margin-top -5px

  &-border
    position absolute
    border-radius 50%
    top -270px
    left 1075px
    width 1620px
    height 1620px
    border 1px solid #FFFFFF
    opacity 0.2

  &-0, &-1, &-2, &-3, &-4, &-5, &-6
    position absolute
    width 3374px
    height 350px
    display flex
    justify-content space-between
    top 1650px
    left 136px
  &-0
    transform rotate(27deg)
  &-2
    transform rotate(-27deg)
  &-3
    transform rotate(-54deg)
  &-4
    transform rotate(-81deg)
  &-5
    transform rotate(-108deg)
  &-6
    transform rotate(-135deg)

  &-non-selected
    opacity 0.3
  &-selected
    opacity 1

.album-img
  width 789px
  height 350px
  background-position center
  background-repeat no-repeat
  background-size 100%
  position absolute
  img
    border-radius 5px
    width 100%
    height 100%

.page-change-mask
  width 1000px
  height 1080px
  background-color #18264E
  position absolute
  top -1080px
  right 0
  opacity 0
  z-index 100

.close-button
  opacity 0

.page-change-beginning
  width 10px
  height 10px
  background-color #fff
  border-radius 7px
  position absolute
  transform translate(-50%)
  left 50%
  z-index 2000
</style>
