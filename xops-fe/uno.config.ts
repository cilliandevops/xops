// uno.config.ts
import { defineConfig } from 'unocss'
// import { presetIcons } from 'unocss'
import presetUno from '@unocss/preset-uno'
import presetIcons from '@unocss/preset-icons'
export default defineConfig({
  // ...UnoCSS选项
  presets: [
    presetUno(),
    // presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
      // collections: {
      //   custom: FileSystemIconLoader(pathSrc),
      // },
    }),
  ],
})