export default {
  path: '/',
  component: () => import(/* webpackChunkName: 'layout' */ '@/views/layout'),
  redirect: 'album',
  children: [
    {
      name: 'Album',
      path: 'album',
      component: () => import(/* webpackChunkName: "album" */ '@/views/album'),
      query: route => ({
        albumSort: route.query.album_sort
      })
    }
  ]
}
