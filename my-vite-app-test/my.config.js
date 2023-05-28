import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

// https://vitejs.dev/config/
export default defineConfig({
  root: './',
  build: {
    outDir: './build',
    minify: false
  },
 
  plugins: [vue()],
  rollupOptions: {
    input: 'demo.js',
    output: {
      //dir: 'build',
      file: 'bundles.js',
      format: 'cjs',
    },
    // plugins: [
    //   resolve(),
    //   babel({ babelHelpers: 'bundled' })
    // ]
    plugins: [vue()],
  }
})
