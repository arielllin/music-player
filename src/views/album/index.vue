<template>
  <div class="album">
    <div class="album-player" />
    <div
      v-for="(item, index) in img"
      :key="index"
      :class="`album-${index}`"
    >
      <div class="album-player-img"><img :src="require(`@/assets/images/${item.left}`)"></div>
      <div class="album-player-img"><img :src="require(`@/assets/images/${item.right}`)"></div>
    </div>
    <div class="album-border" />
    <div class="album-content" />
    <div class="album-text">
      <div class="album-text-main">album</div>
      <div class="album-text-sub">TOP 10 SONGS</div>
    </div>
    <div class="album-singer">Bob Marley</div>
    <div class="album-songs">
      <div
        v-for="(item, index) in songs"
        :key="index"
        class="track"
        :class="{'track-selected': index === isSelected}"
      >
        <span>{{ item }}</span>
        <span>Bob Marley・1975</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Album',
  data() {
    return {
      isSelected: 0,
      img: [
        { left: 'album_1.png', right: 'album_1.png' },
        { left: 'album_2.png', right: 'album_2.png' },
        { left: 'album_3.png', right: 'album_3.png' },
        { left: 'album_4.png', right: 'album_4.png' },
        { left: 'album_5.png', right: 'album_5.png' },
        { left: 'album_6.png', right: 'album_6.png' }
      ],
      songs: [
        'Get Up Stand Up & Dub',
        'Lively Up',
        'Could You Be Loved',
        'Buffalo Soldier',
        'Redemption Song',
        'Jamming'
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.album
  background-color #18264E
  width 100%
  height 100vh
  position relative
  overflow hidden
  &-player
    background-color #111D40
    border-radius 50%
    position absolute
    top -715px
    left 124px
    width 2568px
    height 2568px

  &-content
    background-color #18264E
    border-radius 50%
    position absolute
    top -140px
    left 1200px
    width 1378px
    height 1378px

  &-text
    color #fff
    position absolute
    top 40px
    left 1500px
    width 1378px
    height 1378px
    &-main
      font-size 86px
      letter-spacing 0
      line-height 1.15
    &-sub
      font-size 20px
      letter-spacing 1px
      line-height 0.27

  &-singer
    color #fff
    position absolute
    top 150px
    left 1350px
    width 1378px
    height 1378px
    font-size 132px
    letter-spacing 0
    line-height 1.75

  &-songs
    color #fff
    position absolute
    top 380px
    left 1460px
    width 1378px
    height 1378px
    .track
      display flex
      flex-direction column
      margin-bottom 60px
      opacity 0.2
      span
        font-size 20px
        letter-spacing 0
        line-height 1.27
    .track-selected
      opacity 0.8
      &:before
        content ''
        width 200px
        height 2px
        background-color #fff
        position absolute
        top 27px
        left -230px

  &-border
    position absolute
    border-radius 50%
    top -199px
    left 1110px
    width 1478px
    height 1478px
    border 1px solid #FFFFFF
    opacity 0.2

  &-0, &-1, &-2, &-3, &-4, &-5
    position absolute
    width 3900px
    display flex
    justify-content space-between
    top 400px
    left 260px
  &-1
    transform rotate(20deg)
  &-2
    transform rotate(-20deg)
  &-3
    transform rotate(-40deg)
  &-4
    transform rotate(-60deg)
  &-5
    transform rotate(-80deg)

.album-player-img
  width 789px
  height 350px
  img
    border-radius 5px
    width 100%
    height 100%
</style>
