import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import WindiCSS from 'vite-plugin-windicss'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [WindiCSS({
    scan: {
      dirs: ['.'], // 当前目录下所有文件
      fileExtensions: ['vue', 'js', 'ts'], // 同时启用扫描vue/js/ts
    },
  }),
  uni()],
});
