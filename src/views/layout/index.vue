<template>
  <div>
    <Menu :show-bars="showBars" @mouseover="mouseOver" @mouseout="mouseOut">
      <div
        v-for="(item, index) in menu"
        :key="index"
        class="manu-list"
        :class="{'is-selected': isSelected === index}"
        @mouseover="onMouseOver(index)"
        @click="onClickMenu(index)"
      >
        {{ item.toUpperCase() }}
      </div>
    </Menu>
    <router-view />
  </div>
</template>

<script>
import Menu from '@/components/Menu'

import gsap from 'gsap'
import CSSRulePlugin from 'gsap/CSSRulePlugin'
import { pxToVWToPx } from '@/utils'

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
        'Home',
        'News',
        'Media',
        'Lyrics',
        'Merch',
        'Features'
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
  created() {
    const result = this.menu.indexOf(this.$route.name.toUpperCase())
    result !== -1 ? this.isSelected = result : this.isSelected = 0
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
    },
    onClickMenu(index) {
      const rule = CSSRulePlugin.getRule('.is-selected:before')
      gsap.to(rule, {
        duration: 0.5,
        width: `${pxToVWToPx(150)}px`,
        onComplete: () => {
          this.$router.push({ name: this.menu[index] })
          gsap.set(rule, {
            width: `${pxToVWToPx(20)}px`
          })
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.manu-list
  display flex
  align-items center
  color #000
  font-size 30px
  padding 5px 40px
  width 200px
  opacity 0
</style>

<style lang="stylus">
.is-selected
  opacity 0.8!important
  transition 0.5s
  &:before
    content ''
    width 20px
    height 2px
    background-color #000
    position absolute
    right 250px
</style>
