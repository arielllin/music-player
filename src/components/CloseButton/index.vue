<template>
  <div class="close-button" @click="onClose">
    <div class="close-button-background" />
    <svg-icon class="close-button-svg" icon-class="close" />
  </div>
</template>

<script>
export default {
  name: 'CloseButton',
  methods: {
    onClose() {
      this.$emit('onClose')
    }
  }
}
</script>

<style lang="stylus" scoped>
.close-button
  z-index 300
  position absolute
  top 48px
  left 64px
  display flex
  justify-content center
  align-items center
  &-background
    width 70px
    height 70px
    background-color rgba(255,255,255,0.4)
    backdrop-filter blur(24px)
    border-radius 50%
  &-svg
    position absolute
    color #fff
    font-size 22px
</style>
