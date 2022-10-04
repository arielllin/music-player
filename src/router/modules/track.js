export default {
  name: 'Track',
  path: '/track',
  component: () => import(/* webpackChunkName: "track" */ '@/views/track'),
  props: route => ({
    trackId: route.query.id,
    singer: route.query.singer
  })
}
