/**
 * 侧边栏菜单
 *
 * @see sidebar https://vitepress.vuejs.org/guide/theme-sidebar#sidebar
 */
export const sidebar = {
  '/docs/': [
    {
      text: '教程文章',
      collapsible: true,
      link: '/docs/hello',
      items: [
        { text: 'hello', link: '/docs/hello' },
        { text: '欢迎使用', link: '/docs/welcome' },
        { text: 'Dialog组件', link: '/docs/dialog' }
      ],
    }
  ]
}
