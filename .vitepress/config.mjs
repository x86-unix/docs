import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(
  defineConfig({
    title: "x86-unix's Docs",
    description: 'x86-unix の勉強会資料・技術メモ',
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
            { text: 'Gemini 画像生成', link: '/ai/gemini-nano' },
            { text: 'Gemini Gems', link: '/ai/gemini-gems' },
            { text: 'NotebookLM', link: '/ai/notebooklm' },
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
)
