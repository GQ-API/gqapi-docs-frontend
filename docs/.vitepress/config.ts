import { defineConfig } from 'vitepress'

const zhCN = {
  label: '中文',
  lang: 'zh-CN',
  title: 'GQ API',
  description: 'GQ API AI API 网关使用文档',
  themeConfig: {
    logo: { src: '/logo.svg', link: 'https://api.gqchat.cn' },
    nav: [
      { text: '🏠 文档首页', link: '/' },
      { text: '🚀 快速开始', link: '/guide/getting-started' },
      { text: 'EN', link: '/en/', target: '_self' }
    ],
    sidebar: [
      {
        text: '🚀 快速开始',
        items: [{ text: '📖 快速开始', link: '/guide/getting-started' }]
      },
      {
        text: '💻 CLI 配置教程',
        collapsed: false,
        items: [
          { text: '🔍 环境检查（通用步骤）', link: '/guide/cli/env-check' },
          { text: '🤖 Claude Code 配置', link: '/guide/cli/claude-code' },
          { text: '⌨️ Codex 配置', link: '/guide/cli/codex' },
          { text: '✨ Gemini CLI 配置', link: '/guide/cli/gemini-cli' }
        ]
      },
      {
        text: '🧠 模型分组介绍',
        collapsed: false,
        items: [
          { text: '🏪 模型广场', link: '/guide/models/model-square' },
          { text: '🎫 令牌分组介绍', link: '/guide/models/token-groups' }
        ]
      },
      {
        text: '🎨 绘图模型教程',
        collapsed: false,
        items: [{ text: '🍌 Nano Banana Pro', link: '/guide/image/nano-banana-pro' }]
      },
      {
        text: '🔧 进阶玩法',
        collapsed: false,
        items: [
          { text: '🦞 OpenClaw 配置', link: '/guide/advanced/openclaw' },
          { text: '📱 手机 Chatbox', link: '/guide/advanced/chatbox-mobile' },
          { text: '✅ Claude Code 官方验证', link: '/guide/advanced/claude-code-verify' }
        ]
      },
      {
        text: '❓ 常见问题',
        collapsed: false,
        items: [
          { text: '🤖 Claude Code', link: '/guide/faq/claude-code' },
          { text: '⌨️ Codex', link: '/guide/faq/codex' },
          { text: '✨ Gemini', link: '/guide/faq/gemini' },
          { text: '🌐 通用问题', link: '/guide/faq/general' }
        ]
      },
      {
        text: '📋 条款与政策',
        collapsed: false,
        items: [
          { text: '📜 用户协议', link: '/legal/user-agreement' },
          { text: '🔒 隐私政策', link: '/legal/privacy-policy' }
        ]
      }
    ],
    footer: { message: '', copyright: '© 2026 GQ API. 版权所有' },
    appearance: true,
    appearanceText: '外观',
    outline: { level: 'deep', label: '本页导航' },
    docFooter: { prev: '上一页', next: '下一页' },
    lastUpdated: { text: '最后更新于' },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
          }
        }
      }
    }
  }
}

const en = {
  label: 'English',
  lang: 'en-US',
  title: 'GQ API',
  description: 'GQ API - Unified AI API Gateway Documentation',
  themeConfig: {
    logo: { src: '/logo.svg', link: 'https://api.gqchat.cn' },
    nav: [
      { text: '🏠 Home', link: '/en/' },
      { text: '🚀 Getting Started', link: '/en/guide/getting-started' },
      { text: '中文', link: '/', target: '_self' }
    ],
    sidebar: [
      {
        text: '🚀 Getting Started',
        items: [{ text: '📖 Quick Start', link: '/en/guide/getting-started' }]
      },
      {
        text: '💻 CLI Configuration',
        collapsed: false,
        items: [
          { text: '🔍 Environment Check', link: '/en/guide/cli/env-check' },
          { text: '🤖 Claude Code Setup', link: '/en/guide/cli/claude-code' },
          { text: '⌨️ Codex Setup', link: '/en/guide/cli/codex' },
          { text: '✨ Gemini CLI Setup', link: '/en/guide/cli/gemini-cli' }
        ]
      },
      {
        text: '🧠 Model Groups',
        collapsed: false,
        items: [
          { text: '🏪 Model Square', link: '/en/guide/models/model-square' },
          { text: '🎫 Token Groups', link: '/en/guide/models/token-groups' }
        ]
      },
      {
        text: '🎨 Image Models',
        collapsed: false,
        items: [{ text: '🍌 Nano Banana Pro', link: '/en/guide/image/nano-banana-pro' }]
      },
      {
        text: '🔧 Advanced',
        collapsed: false,
        items: [
          { text: '🦞 OpenClaw Config', link: '/en/guide/advanced/openclaw' },
          { text: '📱 Mobile Chatbox', link: '/en/guide/advanced/chatbox-mobile' },
          { text: '✅ Claude Code Verify', link: '/en/guide/advanced/claude-code-verify' }
        ]
      },
      {
        text: '❓ FAQ',
        collapsed: false,
        items: [
          { text: '🤖 Claude Code', link: '/en/guide/faq/claude-code' },
          { text: '⌨️ Codex', link: '/en/guide/faq/codex' },
          { text: '✨ Gemini', link: '/en/guide/faq/gemini' },
          { text: '🌐 General', link: '/en/guide/faq/general' }
        ]
      },
      {
        text: '📋 Legal',
        collapsed: false,
        items: [
          { text: '📜 User Agreement', link: '/en/legal/user-agreement' },
          { text: '🔒 Privacy Policy', link: '/en/legal/privacy-policy' }
        ]
      }
    ],
    footer: { message: 'Released under the MIT License', copyright: '© 2025 GQ API' },
    appearance: true,
    appearanceText: 'Theme',
    outline: { level: 'deep', label: 'On this page' },
    docFooter: { prev: 'Previous page', next: 'Next page' },
    lastUpdated: { text: 'Last updated' },
    returnToTopLabel: 'Back to top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Theme',
    lightModeSwitchTitle: 'Switch to light mode',
    darkModeSwitchTitle: 'Switch to dark mode',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Search Docs', buttonAriaLabel: 'Search documentation' },
          modal: {
            noResultsText: 'No results found',
            resetButtonTitle: 'Clear query',
            footer: { selectText: 'Select', navigateText: 'Navigate', closeText: 'Close' }
          }
        }
      }
    }
  }
}

export default defineConfig({
  title: 'GQ API',
  locales: { root: { label: '中文', ...zhCN }, en },
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['script', {}, `(function(){var d=document;if(d.querySelector('.gq-credit'))return;var e=d.createElement('div');e.className='gq-credit';e.innerHTML='<a href="https://api.gqchat.cn" target="_blank" rel="noopener noreferrer">'+(location.pathname.startsWith('/en')?'Developed & Designed by GQ API':'本项目由 GQ API 开发设计')+'</a>';d.body.appendChild(e)})()`]
  ]
})
