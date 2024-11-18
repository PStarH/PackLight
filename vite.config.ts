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
        // Regular (any) icons
        {
          src: '/AppImages/windows11/LargeTile.scale-400.png',
          sizes: '1240x1240',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/AppImages/ios/1024.png',
          sizes: '1024x1024',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/AppImages/android/android-launchericon-512-512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/AppImages/android/android-launchericon-192-192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any'
        },
        
        // Maskable icons
        {
          src: '/AppImages/windows11/LargeTile.scale-400.png',
          sizes: '1240x1240',
          type: 'image/png',
          purpose: 'maskable'
        },
        {
          src: '/AppImages/ios/1024.png',
          sizes: '1024x1024',
          type: 'image/png',
          purpose: 'maskable'
        },
        {
          src: '/AppImages/android/android-launchericon-512-512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        },
        {
          src: '/AppImages/android/android-launchericon-192-192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'maskable'
        }
      ]
    },
    includeAssets: ['AppImages/**/*']
  })],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
