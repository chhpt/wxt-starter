import { defineConfig } from 'wxt';
import react from '@vitejs/plugin-react';

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: 'src',
  // entrypointsDir: './entrypoints',
  vite: () => ({
    plugins: [react()],
  }),
  manifest: {
    action: {
      default_icon: '/icon/128.png',
    },
    host_permissions: ['*'],
  },
  runner: {
    disabled: true,
  },
});
