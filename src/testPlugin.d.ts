// src/my-log-plugin.d.ts
import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $injectway: {
      hide: () => void
    }
  }
}