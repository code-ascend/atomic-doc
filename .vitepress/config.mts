import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Alt Atomic",
  description: "Атомарный облачный дистрибутив",
  base: '/atomic-doc/', // Критически важно для GitHub Pages
  outDir: '../dist',    // Путь относительно .vitepress

  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Документация', link: '/guide' }
    ],

    socialLinks: [
      { icon: 'github',
        link: 'https://github.com/SkyWar-design/alt-atomic'
      }
    ],

    footer: {
      message: 'Released under the MIT License',
      copyright: 'Copyright © 2024 Alt Atomic Team'
    }
  }
})