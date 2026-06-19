import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'My Docs',
  description: 'A sample documentation site',
  base: '/docs/',
  themeConfig: {
    nav: [{ text: 'Home', link: '/' }],
    sidebar: [
      {
        text: 'Guide',
        items: [{ text: 'Getting Started', link: '/guide/' }]
      }
    ]
  }
})
