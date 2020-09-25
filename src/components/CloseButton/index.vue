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
  z-index 100
  position absolute
  top 48px
  left 64px
  display flex
  justify-content center
  align-items center
  // backdrop-filter blur(30px)
  &-background
    width 70px
    height 70px
    background-color #fff
    // backdrop-filter blur(30px)
    opacity 0.3
    border-radius 50%
  &-svg
    position absolute
    color #fff
    font-size 22px
</style>
