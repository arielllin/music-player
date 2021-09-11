<template>
  <div class="home">
    <div
      v-for="(item, index) in topTenSongs"
      :key="item.index"
      class="background"
      :class="{
        'background-hide': !isCurrentPage(index) && !isLastPage(index),
        'background-slected': isCurrentPage(index),
        'background-last-slected': isLastPage(index)
      }"
      :style="{ backgroundImage: 'url(' + item.img + ')' }"
    />
    <div class="title">
      <div
        v-for="(item, index) in topTenSongs"
        :key="item.index"
        class="title-main"
        :class="{
          'title-main-hide': !isCurrentPage(index),
          'title-main-selected': isCurrentPage(index),
          'title-main-last-slected': isLastPage(index)
        }"
      >
        {{ item.singer }}
      </div>
      <div class="title-sub">
        <span>Lorem ipsum dolor sit amet, consectetur dolor sit adipiscing</span>
        <span>do eiusmod tempor incididunt et dolore magna aliqua dolor sitdolor sit</span>
        <span>quis nostrud exercitation ullamco laboris</span>
      </div>
    </div>
    <div class="playlist">
      <div class="playlist-main">playlist</div>
      <div class="playlist-sub">TOP 10 SONGS</div>
    </div>
    <button name="button" class="listen-button" @click="onClickAlbum">
      LISTEN NOW
      <svg-icon class="listen-button-svg" icon-class="play" />
    </button>
    <div class="social-follow">
      <ul class="social-follow-items">
        <li
          v-for="(item, index) in svgIcons"
          :key="index"
          class="social-follow-item"
        >
          <a href="">
            <svg-icon
              :icon-class="item"
            />
          </a>
        </li>
      </ul>
    </div>
    <PageChange
      :index-table="topTenSongs.length"
      :current-page="currentPage"
      :last-page="lastPage"
      @onChangeIndex="onChangeIndex"
    />
    <div v-show="pageChangeShow" class="page-change" />
  </div>
</template>

<script>
import PageChange from './components/PageChange'

import gsap from 'gsap'

export default {
  name: 'Home',
  components: {
    PageChange
  },
  data() {
    return {
      clickLock: false,
      pageChangeShow: false,
      currentPage: 0,
      lastPage: null,
      topTenSongs: [
        { singer: 'Lady Gaga', img: require('@/assets/images/lady-gaga.jpg') },
        { singer: 'Bob Marley', img: require('@/assets/images/Bob-Marley@2x.jpg') },
        { singer: 'michael', img: require('@/assets/images/michael-jackson@2x.jpg') },
        { singer: 'beetles', img: require('@/assets/images/beetle@2x.jpg') }
      ],
      svgIcons: [
        'soundcloud', 'spotify', 'youtube', 'apple', 'instagram', 'facebook', 'twitter'
      ]
    }
  },
  mounted() {
    gsap.to('.background-slected', {
      duration: 1.5,
      width: '100%',
      ease: 'power4.inOut'
    })
    gsap.to('.title-main-selected', {
      duration: 1.5,
      opacity: 0.9
    })
  },
  methods: {
    isCurrentPage(index) {
      return this.currentPage === index
    },
    isLastPage(index) {
      return this.lastPage === index
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
        duration: 1.4,
        width: '100%',
        ease: 'power4.inOut',
        delay: 0.2,
        onComplete: () => {
          this.clickLock = false
        }
      })
      gsap.to('.background-last-slected', {
        duration: 1.4,
        width: '0%',
        ease: 'power4.inOut',
        delay: 0.2
      })

      gsap.to('.title-main-last-slected', {
        duration: 1.3,
        opacity: 0,
        ease: 'power4.inOut',
        delay: 0.3
      })
      gsap.to('.title-main-selected', {
        duration: 1.3,
        opacity: 0.9,
        ease: 'power4.inOut',
        delay: 0.3
      })
    },
    onClickAlbum() {
      this.pageChangeShow = true
      // gsap.to('.title-main', {
      //   duration: 1,
      //   transform: 'translate(55%, -55%)',
      //   ease: 'power2.inOut'
      // })
      gsap.to('.page-change', {
        duration: 1.5,
        'border-radius': '50%',
        transform: 'scale(300, 300)',
        ease: 'power2.inOut',
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
  background-position center
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
  transform translateY(-50%)
  top 70%
  left 135px
  width 100%
  height 280px
  &-main
    position absolute
    top 0
    text-align left
    color #fff
    font-size 163px
    letter-spacing 0px
    line-height 217px
    &-selected
      opacity 0
    &-hide
      opacity 0
  &-sub
    position absolute
    bottom 0
    display flex
    flex-direction column
    width 650px
    font-size 18px
    color #fff
    text-align left
    opacity 0.7
    letter-spacing 0
    line-height 24px

.playlist
  position absolute
  transform translateY(-50%)
  color #fff
  opacity 0.9
  top 55%
  left 1378px
  &-main
    font-size 104px
    letter-spacing 0px
  &-sub
    position relative
    line-height 15px
    font-size 25px
    letter-spacing 2.5px

.listen-button
  background-color rgba(255,255,255,0.4)
  backdrop-filter blur(24px)
  padding 26px 63px 31px 63px
  border-radius 45px
  position absolute
  transform translateY(-50%)
  color #fff
  font-size 25px
  letter-spacing 2.5px
  top 70%
  left 1378px
  &-svg
    margin-left 10px

.social-follow
  position absolute
  transform translate(-50%)
  left 50%
  bottom 12px
  width 400px
  height 181px
  font-size 24px
  &-items
    display flex
    position absolute
    justify-content space-between
    align-items center
    width 100%
    height 100%

.page-change
  width 10px
  height 10px
  background-color #fff
  border-radius 50%
  position absolute
  transform translate(-50%)
  left 50%
  bottom 95px
  z-index 2000
</style>
