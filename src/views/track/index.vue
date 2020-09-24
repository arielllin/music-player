<template>
  <div class="track">
    <CloseButton class="close-button" />
    <div class="track-img" :style="{ backgroundImage: 'url(' + img[trackId] + ')' }" />
    <div class="track-lyrics">track</div>
  </div>
</template>

<script>
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
    }
  },
  data() {
    return {
      img: [
        require('@/assets/images/origin/track_0.png'),
        require('@/assets/images/origin/track_1.png'),
        require('@/assets/images/origin/track_2.png'),
        require('@/assets/images/origin/track_3.png'),
        require('@/assets/images/origin/track_4.png'),
        require('@/assets/images/origin/track_5.png'),
        require('@/assets/images/origin/track_6.png')
      ]
    }
  },
  mounted() {
    console.log('trackId', this.trackId)
  }
}
</script>

<style lang="stylus" scoped>
.track
  width 100%
  height 100vh
  position relative
  overflow hidden
  &-img
    position absolute
    top 0
    left 0
    width 920px
    height 100vh
    background-position center
    background-repeat no-repeat
    background-size 100%
  &-lyrics
    background-color #18264E
    position absolute
    top 0
    right 0
    width 1000px
    height 100vh
</style>
