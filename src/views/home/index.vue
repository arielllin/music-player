<template>
  <div class="home">
    <div
      v-for="(item, index) in topTenSongs"
      :key="item.index"
      class="background"
      :class="{
        'background-slected': currentPage === index,
        'background-hide': currentPage !== index && lastPage !== index,
        'background-last-slected': lastPage === index
      }"
      :style="{ backgroundImage: 'url(' + item.img + ')' }"
    />
    <div
      v-for="(item, index) in topTenSongs"
      :key="item.index"
      class="title"
      :class="{
        'title-hide': !isCurrent(index),
        'title-selected': isCurrent(index),
        'title-last-slected': lastPage === index
      }"
    >
      {{ item.singer }}
      <div class="info">
        <span>Lorem ipsum dolor sit amet, consectetur dolor sit adipiscing</span>
        <span>do eiusmod tempor incididunt et dolore magna aliqua dolor sitdolor sit</span>
        <span>quis nostrud exercitation ullamco laboris</span>
      </div>
    </div>
    <div class="playlist">
      <div class="playlist-main">playlist</div>
      <div class="playlist-sub">TOP 10 SONGS</div>
    </div>
    <div class="listen-button" @click="onClickAlbum">
      LISTEN NOW
      <svg-icon class="listen-button-svg" icon-class="play" />
    </div>
    <div class="footer-icons">
      <svg-icon
        v-for="(item, index) in svgIcons"
        :key="index"
        class="icon"
        :icon-class="item"
      />
    </div>
    <PageChanging
      :index-table="topTenSongs"
      :current-page="currentPage"
      :last-page="lastPage"
      @onChangeIndex="onChangeIndex"
    />
    <div class="page-change" />
  </div>
</template>

<script>
import PageChanging from './components/PageChanging'

import gsap from 'gsap'

export default {
  name: 'Home',
  components: {
    PageChanging
  },
  data() {
    return {
      clickLock: false,
      currentPage: 0,
      lastPage: null,
      topTenSongs: [
        { singer: 'Bob Marley', img: require('@/assets/images/Bob-Marley@2x.png') },
        { singer: 'michael', img: require('@/assets/images/michael-jackson@2x.png') },
        { singer: 'beetles', img: require('@/assets/images/beetle@2x.png') }
      ],
      svgIcons: [
        'soundcloud', 'spotify', 'youtube', 'apple', 'instagram', 'facebook', 'twitter'
      ]
    }
  },
  mounted() {
    gsap.to('.background-slected', {
      duration: 2,
      width: '100%',
      ease: 'power4.out'
    })
    gsap.to('.title-selected', {
      duration: 1,
      opacity: 0.9
    })
  },
  methods: {
    isCurrent(index) {
      return this.currentPage === index
    },
    onChangeIndex(index) {
      if (this.currentPage !== index) {
        if (this.clickLock) return
        this.clickLock = true
        this.lastPage = this.currentPage
        this.currentPage = index
        this.$nextTick(() => {
          this.changeBackground()
        })
      }
    },
    changeBackground() {
      gsap.to('.background-slected', {
        duration: 2,
        width: '100%',
        ease: 'power4.out',
        onComplete: () => {
          this.clickLock = false
        }
      })
      gsap.to('.background-last-slected', {
        duration: 2,
        width: '0%',
        ease: 'power4.out'
      })

      gsap.to('.title-last-slected', {
        duration: 1,
        opacity: 0
      })
      gsap.to('.title-selected', {
        duration: 1,
        opacity: 0.9
      })
    },
    onClickAlbum() {
      gsap.to('.page-change', {
        duration: 2,
        'border-radius': '50%',
        transform: 'scale(300, 300)',
        ease: 'power4.out',
        onComplete: () => {
          const sort = this.currentPage
          const query = this.topTenSongs[sort].singer
          this.$router.push({ name: 'Album', query: { name: query }})
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.home
  width 100%
  height 100vh
  position relative
  overflow hidden

.background
  height 100%
  background-size cover
  background-repeat no-repeat
  background-attachment fixed
  background-color #08224b
  background-blend-mode screen
  &-slected
    width 0%
    position absolute
  &-hide
    position absolute
  &-last-slected
    float right

.title
  position absolute
  text-align left
  color #fff
  top 570px
  left 135px
  font-size 163px
  letter-spacing 0px
  line-height 217px
  &-selected
    opacity 0
  &-hide
    opacity 0

.playlist
  position absolute
  color #fff
  opacity 0.9
  top 430px
  left 1378px
  &-main
    font-size 104px
    letter-spacing 0px
  &-sub
    position relative
    top -25px
    font-size 25px
    letter-spacing 2.5px

.listen-button
  background-color #929fbd
  opacity 0.9
  padding 26px 63px 31px 63px
  border-radius 45px
  position absolute
  color #fff
  font-size 25px
  letter-spacing 2.5px
  top 645px
  left 1378px
  &-svg
    margin-left 10px

.info
  display flex
  flex-direction column
  width 650px
  font-size 18px
  color #fff
  text-align left
  opacity 0.7
  letter-spacing 0
  line-height 24px
  span
    padding-bottom 3px

.footer-icons
  display flex
  justify-content space-between
  align-items center
  position absolute
  transform translate(-50%)
  left 50%
  top 850px
  width 400px
  height 100px
  font-size 24px

.page-change
  width 10px
  height 10px
  background-color #fff
  border-radius 50%
  position absolute
  transform translate(-50%)
  left 50%
  top 900px
  z-index 2000
</style>
