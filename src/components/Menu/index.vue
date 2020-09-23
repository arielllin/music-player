<template>
  <div class="bars">
    <div class="bars-background" @mouseover="mouseOver" @mouseleave="mouseleave">
      <div class="bars-icon">
        <div
          v-for="index in [1, 2, 3]"
          :key="index"
          :class="['bars-icon-border', `bars-icon-${index}`]"
        />
      </div>
      <div v-show="showBars" class="bars-show">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'Menu',
  props: {
    showBars: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    showBars: {
      handler() {
        const t1 = gsap.timeline()
        if (this.showBars) {
          t1.to('.bars-background', {
            duration: 1,
            width: '26vw',
            height: '26vw'
          }).to('.bars-background', {
            duration: 2,
            'border-top-left-radius': 'random(15, 25)% random(56, 76)%',
            'border-bottom-right-radius': 'random(56, 76)% random(15, 25)%',
            'border-bottom-left-radius': 'random(100, 160)%',
            repeatRefresh: true,
            repeat: -1
          })
        } else {
          gsap.killTweensOf('.bars-background')
          gsap.to('.bars-background', {
            duration: 1,
            width: '6.2vw',
            height: '5.6vw',
            'border-top-left-radius': '3% 10%',
            'border-bottom-right-radius': '10% 3%',
            'border-bottom-left-radius': '100%'
          })
        }
      }
    }
  },
  methods: {
    mouseOver() {
      this.$emit('mouseover')
    },
    mouseleave() {
      this.$emit('mouseout')
    }
  }
}
</script>

<style lang="stylus" scoped>
.bars
  position absolute
  z-index 100
  width 100%
  &-background
    position absolute
    right 0
    width 120px
    height 108px
    background-color #fff
    border-top-left-radius 3% 10%
    border-bottom-right-radius 10% 3%
    border-bottom-left-radius 100%

.bars-icon
  padding 33px 35px 63px 58px
  position absolute
  right 0
  height 20px
  display flex
  flex-direction column
  justify-content space-between
  align-items flex-end
  &-border
    border-top 3px solid #000
  &-1
    width 36px
    border-radius 20%
  &-2
    width 30px
    border-radius 20%
  &-3
    width 8px
    border-radius 40%

.bars-show
  position absolute
  right 0
  margin-top 80px
</style>
