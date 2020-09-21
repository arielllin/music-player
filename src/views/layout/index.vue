<template>
  <div>
    <Menu id="menu" :show-bars="showBars" @mouseover="mouseOver" @mouseout="mouseOut">
      <div
        v-for="(item, index) in menu"
        :key="index"
        class="manu-list"
        :class="{'is-selected': isSelected === index}"
        @mouseover="onMouseOver(index)"
        @click="onClickMenu(index)"
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
// import CSSRulePlugin from 'gsap/CSSRulePlugin'
// gsap.registerPlugin(CSSRulePlugin)

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
  created() {
    const result = this.menu.indexOf(this.$route.name.toUpperCase())
    result !== -1 ? this.isSelected = result : this.isSelected = 0
  },
  mounted() {
    document.body.appendChild(document.getElementById('menu'))
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
      // const rule = CSSRulePlugin.getRule('.is-selected:before')
      console.log('index', index)
      // gsap.to(rule, {
      //   duration: 2,
      //   cssRule: {
      //     width: '40px'
      //   }
      // })
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

.is-selected
  opacity 1!important
  transition 0.5s
  &::before
    content ''
    width 20px
    height 2px
    background-color #000
    margin-right 10px
    margin-left -30px
</style>
