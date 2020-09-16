<template>
  <div class="default default-index">
    <div class>{{ `0${index + 1}` }}</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.default
  position absolute
  text-align left
  letter-spacing 0px
  color #fff
  opacity 0.9

.default-title
  bottom 230px
  left 135px
  font-size 163px

.default-index
  top 70%
  right 10%
  font-size 163px
</style>
