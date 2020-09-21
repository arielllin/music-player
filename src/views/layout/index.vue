<template>
  <div>
    <Menu :show-bars="showBars" @mouseover="mouseOver" @mouseout="mouseOut">
      <div
        v-for="(item, index) in menu"
        :key="index"
        class="manu-list"
        :class="{'is-selected': isSelected === index}"
        @mouseover="onMouseOver(index)"
      >
        {{ item }}
      </div>
    </Menu>
    <router-view />
  </div>
</template>

<script>
import Menu from '@/components/Menu'

import gsap from 'gsap'

export default {
  name: 'Layout',
  components: {
    Menu
  },
  data() {
    return {
      showBars: false,
      isSelected: 0,
      menu: [
        'HOME',
        'NEWS',
        'MEDIA',
        'LYRICS',
        'MERCH',
        'FEATURES'
      ]
    }
  },
  watch: {
    showBars: {
      handler() {
        if (this.showBars) {
          gsap.to('.manu-list', {
            duration: 2,
            opacity: 0.3
          })
        } else {
          gsap.from('.manu-list', {
            duration: 2,
            opacity: 0
          })
        }
      }
    }
  },
  methods: {
    mouseOver() {
      this.showBars = true
    },
    mouseOut() {
      this.showBars = false
      this.isSelected = 0
    },
    onMouseOver(index) {
      this.isSelected = index
    }
  }
}
</script>

<style lang="stylus" scoped>
.manu-list
  color #000
  font-size 30px
  padding 5px 100px
  opacity 0

.is-selected
  opacity 1!important
  transition 0.5s
</style>
