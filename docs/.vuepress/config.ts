import { Theme, defineUserConfig } from 'vuepress'
import { gungnirTheme } from "vuepress-theme-gungnir";


export default defineUserConfig({
  lang: 'en-US',
  title: 'Hello VuePress',
  description: 'Just playing around',
  theme: gungnirTheme({
    navbarTitle: "Gungnir"
  }) as Theme
})