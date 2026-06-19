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
    ],
    editLink: {
      pattern: 'https://github.com/x86-unix/docs/edit/main/:path',
      text: 'Edit this page on GitHub'
    }
  }
})
