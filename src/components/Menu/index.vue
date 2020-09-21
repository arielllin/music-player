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
        if (this.showBars) {
          gsap.to('.bars-background', {
            duration: 1,
            width: '500px',
            height: '500px',
            'border-top-left-radius': '20% 66%',
            'border-bottom-right-radius': '66% 20%',
            'border-bottom-left-radius': '140%'
          })
        } else {
          gsap.to('.bars-background', {
            duration: 1,
            width: '146px',
            height: '130px',
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
    width 146px
    height 130px
    background-color #fff
    border-top-left-radius 3% 10%
    border-bottom-right-radius 10% 3%
    border-bottom-left-radius 100%

.bars-icon
  padding 44px 44px 66px 66px
  position absolute
  right 0
  height 20px
  display flex
  flex-direction column
  justify-content space-between
  align-items flex-end
  &-border
    border-top 4px solid #000
    border-radius 50%
  &-1
    width 36px
  &-2
    width 30px
  &-3
    width 8px

.bars-show
  position absolute
  right 0
  margin-top 80px
</style>
