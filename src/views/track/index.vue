<template>
  <div class="track">
    <CloseButton class="close-button" @onClose="onCloseTrack" />
    <div class="track-lyrics">
      <div class="lyrics-default track-lyrics-title">{{ songs[trackId - 1] }}</div>
      <div class="lyrics-default track-lyrics-sub">{{ `SONG BY ${singer.toUpperCase()}` }}</div>
      <div class="track-lyrics-content-wrap">
        <div class="content">
          <span v-for="(item, index) in lyrics" :key="index">
            {{ item }}
            <div v-if="(index + 1) % 2 === 0"><br></div>
          </span>
        </div>
        <div class="content-show">
          <span v-for="(item, index) in lyrics" :key="index">
            {{ item }}
            <div v-if="(index + 1) % 2 === 0"><br></div>
          </span>
        </div>
      </div>
    </div>
    <div class="track-player" />
    <div class="track-tool">
      <svg-icon icon-class="backward" />
      <svg-icon icon-class="pause" />
      <div class="player-border" />
      <svg-icon icon-class="forward" />
    </div>
    <div class="track-cd-logo" />
    <div class="track-img" :style="{ backgroundImage: 'url(' + img[trackId] + ')' }" />
  </div>
</template>

<script>
import gsap from 'gsap'
import CloseButton from '@/components/CloseButton'

export default {
  name: 'Track',
  components: {
    CloseButton
  },
  props: {
    trackId: {
      type: [String, Number],
      default: ''
    },
    singer: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      img: [
        require('@/assets/images/origin/track_0.jpg'),
        require('@/assets/images/origin/track_1.jpg'),
        require('@/assets/images/origin/track_2.jpg'),
        require('@/assets/images/origin/track_3.jpg'),
        require('@/assets/images/origin/track_4.jpg'),
        require('@/assets/images/origin/track_5.jpg'),
        require('@/assets/images/origin/track_6.jpg')
      ],
      songs: [
        'Get Up Stand Up & Dub',
        'Lively Up',
        'Could You Be Loved',
        'Buffalo Soldier',
        'Redemption Song',
        'Jamming'
      ],
      lyrics: [
        'Get up, stand up, stand up for your rights',
        'Get up, stand up, stand up for your rights',
        'Get up, stand up, stand up for your rights',
        'Get up, stand up, dont give up the fight',
        'Preacher man, dont tell me',
        'Heaven is under the earth',
        'I know you dont know',
        'What life is really worth',
        'Its not all that glitters is gold',
        'Alf the story has never been told',
        'So now you see the light, eh',
        'Stand up for your rights, come on',
        'Get up, stand up, stand up for your rights',
        'Get up, stand up, dont give up the fight',
        'Get up, stand up, stand up for your rights',
        'Get up, stand up, dont give up the fight',
        'Most people think',
        'Great God will come from the skies',
        'Take away everything',
        'And make everybody feel high',
        'But if you know what life is worth'
      ]
    }
  },
  mounted() {
    gsap.fromTo('.track-player', {
      opacity: 0.1,
      width: '48%'
    }, {
      duration: 1.2,
      opacity: 1,
      width: '100%',
      ease: 'power2.in'
    })
    gsap.fromTo('.lyrics-default', {
      opacity: 0
    }, {
      duration: 1.2,
      opacity: 1,
      ease: 'power1.in'
    })
    gsap.fromTo('.content', {
      opacity: 0
    }, {
      duration: 1.6,
      opacity: 0.1,
      ease: 'power4.out',
      onComplete: () => {
        gsap.to('.content-show', {
          duration: 10,
          height: '33%'
        })
      }
    })
    gsap.to('.track-cd-logo', {
      duration: 1.2,
      opacity: 1,
      ease: 'power2.in'
    })
    gsap.to('.track-tool', {
      duration: 1.5,
      opacity: 1,
      ease: 'power2.in'
    })
  },
  methods: {
    onCloseTrack() {
      console.log('hi')
      this.$router.back(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
.track
  width 100%
  height 100vh
  position relative
  overflow hidden
  &-lyrics
    box-sizing border-box
    padding 77px 185px 0 283px
    background-color #18264E
    position absolute
    top 0
    right 0
    width 995px
    height 100vh
    .lyrics-default
      color #fff
    &-title
      font-size 42px
      letter-spacing 4.2px
      line-height 56px
    &-sub
      font-size 23px
      letter-spacing 2.3px
      line-height 31px
    &-content-wrap
      position relative
      width 530px
      height 844px
      margin-top 70px
      overflow hidden
      .content, .content-show
        font-size 23px
        letter-spacing 1.3px
        line-height 31px
        display flex
        flex-direction column
        color #fff
        position absolute
      .content-show
        height 0%
        overflow hidden
        opacity 1

  &-player
    position absolute
    bottom 0
    width 1920px
    height 153px
    background-color #3e4c74

  &-tool
    color #fff
    display flex
    justify-content space-between
    align-items center
    width 550px
    position absolute
    bottom 70px
    right 100px
    opacity 0
    .player-border
      background-color #fff
      height 1px
      width 400px

  &-cd-logo
    background-image url('~@/assets/images/Image1@2x.png')
    background-size 100%
    width 146px
    height 146px
    position absolute
    bottom 77px
    left 980px
    transform rotate(-20deg)
    opacity 0
  &-img
    position absolute
    top 0
    left 0
    width 925px
    height 100vh
    background-position center
    background-repeat no-repeat
    background-size cover
</style>
