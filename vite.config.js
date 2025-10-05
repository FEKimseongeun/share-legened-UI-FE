import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/share-legened-UI-FE/', // ✅ 깃허브 레포 이름과 동일해야 함
})