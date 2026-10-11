// .vitepress/theme/index.js
// デフォルトテーマを継承しつつ、Mermaid 図クリックで拡大表示するモーダルを追加する

import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  ...DefaultTheme,

  enhanceApp({ router }) {
    // SSR (サーバサイドレンダリング) 時は window が存在しないためスキップ
    if (typeof window === 'undefined') return

    // モーダル DOM を一度だけ生成してbodyに追加
    function setupModal() {
      if (document.getElementById('mermaid-modal')) return

      const modal = document.createElement('div')
      modal.id = 'mermaid-modal'
      modal.innerHTML = `
        <button id="mermaid-modal-close" aria-label="閉じる">✕</button>
        <div id="mermaid-modal-content"></div>
      `
      document.body.appendChild(modal)

      // オーバーレイ背景クリックで閉じる
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal()
      })

      // 閉じるボタン
      document.getElementById('mermaid-modal-close').addEventListener('click', closeModal)

      // ESC キーで閉じる
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal()
      })
    }

    function openModal(svgEl) {
      const modal = document.getElementById('mermaid-modal')
      const content = document.getElementById('mermaid-modal-content')
      // SVG をクローンして拡大表示（元の図は変更しない）
      const cloned = svgEl.cloneNode(true)
      cloned.removeAttribute('width')
      cloned.removeAttribute('height')
      cloned.style.width = ''
      cloned.style.height = ''
      content.innerHTML = ''
      content.appendChild(cloned)
      modal.classList.add('is-open')
      document.body.style.overflow = 'hidden'
    }

    function closeModal() {
      const modal = document.getElementById('mermaid-modal')
      if (!modal) return
      modal.classList.remove('is-open')
      document.body.style.overflow = ''
    }

    // Mermaid SVG へのクリックイベントを登録する
    // ページ遷移後も再登録が必要なため MutationObserver を使う
    function attachClickHandlers() {
      document.querySelectorAll('.vp-doc .mermaid svg').forEach((svg) => {
        if (svg.dataset.modalBound) return   // 二重登録防止
        svg.dataset.modalBound = '1'
        svg.addEventListener('click', () => {
          setupModal()
          openModal(svg)
        })
      })
    }

    // DOM 変化を監視して Mermaid SVG が追加されたら即登録
    const observer = new MutationObserver(() => attachClickHandlers())

    // 初回セットアップ
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        setupModal()
        attachClickHandlers()
        observer.observe(document.body, { childList: true, subtree: true })
      })
    } else {
      setupModal()
      attachClickHandlers()
      observer.observe(document.body, { childList: true, subtree: true })
    }

    // VitePress のルーター遷移後にも再登録
    router.onAfterRouteChanged = () => {
      // Mermaid のレンダリング完了を少し待ってから登録
      setTimeout(attachClickHandlers, 300)
    }
  }
}
