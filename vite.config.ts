import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
    manifest: {
      name: 'PackLight',
      short_name: 'PackLight',
      description: 'Modern packing list application',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone',
      start_url: '/',
      scope: '/',
      orientation: 'portrait',
      icons: [
        {
          src: '/AppImages/windows11/Square44x44Logo.scale-400.png',
          sizes: '176x176',
          type: 'image/png'
        },
        {
          src: '/AppImages/windows11/Square150x150Logo.scale-400.png',
          sizes: '600x600',
          type: 'image/png'
        },
        {
          src: '/AppImages/windows11/LargeTile.scale-400.png',
          sizes: '1240x1240',
          type: 'image/png'
        },
        {
          src: '/AppImages/ios/1024.png',
          sizes: '1024x1024',
          type: 'image/png'
        }
      ]
    }
  })],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
