<template>
  <div>
    <header>
      <Menu :show-bars="showBars" @mouseover="mouseOver" @mouseout="mouseOut">
        <ul>
          <li
            v-for="(item, index) in menu"
            :key="index"
            class="menu-list"
            :class="{
              'is-selected': isSelectedMenu(index),
              'last-selected': lastSelected === index
            }"
            @mouseover="onMouseOver(index)"
            @click="onClickMenu(index)"
          >
            <a>{{ item.toUpperCase() }}</a>
          </li>
        </ul>
      </Menu>
    </header>
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
      lastSelected: null,
      menu: [
        'Home',
        'News',
        'Media',
        'Lyrics',
        'Album',
        'Features'
      ]
    }
  },
  watch: {
    showBars: {
      handler() {
        document.querySelectorAll('.menu-list').forEach((list, i) => {
          if (this.showBars) {
            gsap.fromTo(list, {
              opacity: 0
            }, {
              duration: 1,
              opacity: 0.3,
              ease: 'power1',
              delay: i * 0.1
            })
          } else {
            gsap.killTweensOf('.menu-list')
            gsap.set('.menu-list', {
              opacity: 0
            })
          }
        })
      }
    }
  },
  mounted() {
    const rule = CSSRulePlugin.getRule('.is-selected:before')
    this.menu.find(item => {
      if (item === this.$route.name) {
        gsap.set(rule, {
          duration: 0.5,
          width: `${pxToVWToPx(150)}px`
        })
      }
    })
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
      this.lastSelected = this.isSelected
      this.isSelected = index

      const rule = CSSRulePlugin.getRule('.is-selected:before')
      if (this.menu[index] === this.$route.name) {
        gsap.set(rule, {
          duration: 0.5,
          width: `${pxToVWToPx(150)}px`
        })
      } else {
        gsap.set(rule, {
          width: `${pxToVWToPx(20)}px`
        })
      }
      this.$nextTick(() => {
        this.changeMenu()
      })
    },
    changeMenu() {
      gsap.to('.is-selected', {
        duration: 0.5,
        opacity: 0.8
      })
      gsap.to('.last-selected', {
        duration: 0.5,
        opacity: 0.3
      })
    },
    onClickMenu(index) {
      const rule = CSSRulePlugin.getRule('.is-selected:before')
      if (this.menu[index] !== this.$route.name) {
        gsap.to(rule, {
          duration: 0.5,
          width: `${pxToVWToPx(150)}px`,
          onComplete: () => {
            this.$router.push({ name: this.menu[index] })
          }
        })
      }
    },
    isSelectedMenu(index) {
      return this.isSelected === index
    }
  }
}
</script>

<style lang="stylus" scoped>
.menu-list
  display flex
  align-items center
  color #000
  font-size 30px
  padding 5px 40px
  width 200px
</style>

<style lang="stylus">
.is-selected
  &:before
    content ''
    width 20px
    height 2px
    background-color #000
    position absolute
    right 250px
</style>
