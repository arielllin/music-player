<template>
  <table>
    <tr class="index">
      <td
        v-for="(item, index) in indexTable"
        :key="item.key"
        :class="{
          'index-slected': isCurrentPage(index),
          'index-last-slected': isLastPage(index),
          'index-non-slected': !isCurrentPage(index)
        }"
        @click="onChangeCurrentPage(index)"
      >
        <a>
          {{ showIndex(index) }}
        </a>
      </td>
    </tr>
  </table>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'PageChange',
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
      opacity: 0.9,
      'font-size': '7vw',
      ease: 'power4.out',
      margin: '0 -40px'
    })
    gsap.set('.index-non-slected', {
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
        duration: 1.5,
        opacity: 0.9,
        'font-size': '7vw',
        ease: 'power3.inOut',
        margin: '0 -40px'
      })
      gsap.to('.index-last-slected', {
        duration: 1.5,
        opacity: 0.2,
        'font-size': '2vw',
        ease: 'power3.inOut',
        margin: '0'
      })
      gsap.to('.index-non-slected', {
        duration: 1.5,
        opacity: 0.2,
        'font-size': '2vw',
        ease: 'power3.inOut',
        margin: '0'
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
  height 181px
  display flex
  align-items center
  bottom 32px
  left 1500px
  &-slected
    font-size 136px
    line-height 181px
    opacity 0
  &-last-slected
    opacity 0.2
    font-size 40px
    line-height 53px
  &-non-slected
    opacity 0.2
</style>
