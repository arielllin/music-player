<template>
  <div class="index">
    <div
      v-for="(item, index) in indexTable"
      :key="item.key"
      :class="{
        'index-slected': isCurrent(index),
        'index-last-slected': lastPage === index,
        'index-non-slected': !isCurrent(index)
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
      type: Array,
      default: () => []
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
    gsap.to('.index-slected', {
      duration: 1,
      opacity: 0.9,
      'font-size': '150px',
      ease: 'power4.out'
    })
    gsap.to('.index-non-slected', {
      duration: 1,
      opacity: 0.2,
      'font-size': '40px',
      ease: 'power4.out'
    })
  },
  methods: {
    showIndex(index) {
      return index === 10 ? 10 : `0${index + 1}`
    },
    isCurrent(index) {
      return this.currentPage === index
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
        'font-size': '7.8vw',
        ease: 'power4.out'
      })
      gsap.to('.index-last-slected', {
        duration: 1,
        opacity: 0.2,
        'font-size': '2vw',
        ease: 'power4.out'
      })
      gsap.to('.index-non-slected', {
        duration: 1,
        opacity: 0.2,
        'font-size': '2vw',
        ease: 'power4.out'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.index
  position absolute
  text-align right
  letter-spacing 0px
  color #fff
  height 100px
  display flex
  align-items center
  top 930px
  left 1470px
  &-slected
    margin 0 -30px
    font-size 150px
    opacity 0
  &-last-slected
    opacity 0.2
    font-size 40px
  &-non-slected
    padding 0 5px
    opacity 0.2
</style>
