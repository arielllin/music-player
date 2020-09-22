<template>
  <div class="album">
    <div class="album-player">
      hi
    </div>
    <div class="album-border" />
    <div class="album-content">
      hi2
    </div>
  </div>
</template>

<script>
export default {

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
    top -199px
    left 1110px
    width 1478px
    height 1478px
  &-border
    position absolute
    border-radius 50%
    top -220px
    left 1000px
    width 1478px
    height 1478px
    border 1px solid #FFFFFF
    opacity 0.2
</style>
