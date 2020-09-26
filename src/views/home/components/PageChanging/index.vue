<template>
  <div class="index">
    <div
      v-for="(item, index) in indexTable"
      :key="item.key"
      :class="{
        'index-slected': isCurrentPage(index),
        'index-last-slected': isLastPage(index),
        'index-non-slected': !isCurrentPage(index)
      }"
      @click="onChangeCurrentPage(index)"
    >
      {{ showIndex(index) }}
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'PageChanging',
  props: {
    indexTable: {
      type: Number,
      default: 0
    },
    currentPage: {
      type: Number,
      default: 0
    },
    lastPage: {
      type: Number,
      default: null
    }
  },
  mounted() {
    gsap.set('.index-slected', {
      duration: 1,
      opacity: 0.9,
      'font-size': '7vw',
      ease: 'power4.out',
      margin: '0 -40px'
    })
    gsap.set('.index-non-slected', {
      duration: 1,
      opacity: 0.2,
      'font-size': '2vw',
      ease: 'power4.out'
    })
  },
  methods: {
    showIndex(index) {
      return index === 10 ? 10 : `0${index + 1}`
    },
    isCurrentPage(index) {
      return this.currentPage === index
    },
    isLastPage(index) {
      return this.lastPage === index
    },
    onChangeCurrentPage(index) {
      this.$emit('onChangeIndex', index)

      this.$nextTick(() => {
        this.changeIndex()
        // this.$emit('onChangeAction', index)
      })
    },
    changeIndex() {
      gsap.to('.index-slected', {
        duration: 1,
        opacity: 0.9,
        'font-size': '7vw',
        ease: 'power1',
        margin: '0 -40px',
        delay: 0.2
      })
      gsap.to('.index-last-slected', {
        duration: 0.8,
        opacity: 0.2,
        'font-size': '2vw',
        ease: 'power1',
        margin: '0',
        delay: 0.2
      })
      gsap.to('.index-non-slected', {
        duration: 0.8,
        opacity: 0.2,
        'font-size': '2vw',
        ease: 'power1',
        margin: '0',
        delay: 0.2
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.index
  position absolute
  text-align right
  letter-spacing 0
  color #fff
  display flex
  justify-content space-between
  width 240px
  height 100px
  display flex
  align-items center
  top 840px
  left 1500px
  &-slected
    font-size 136px
    line-height 181px
    opacity 0
    // margin 0 -40px
  &-last-slected
    opacity 0.2
    font-size 40px
    line-height 53px
  &-non-slected
    // padding 0 8px
    opacity 0.2
</style>
