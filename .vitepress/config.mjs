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
      },
      {
        text: 'AI',
        items: [
          { text: 'Gemini Deep Research', link: '/ai/gemini-deep-research' },
          { text: 'Gemini Nano', link: '/ai/gemini-nano' },
          { text: 'Gemini Gems', link: '/ai/gemini-gems' },
          { text: 'Kiro vs Claude Code CLI', link: '/ai/kiro-vs-claude-code' }
        ]
      }
    ],
    editLink: {
      pattern: 'https://github.com/x86-unix/docs/edit/main/:path',
      text: 'Edit this page on GitHub'
    }
  }
})
