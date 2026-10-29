import { defineConfig } from 'astro/config';

// SITE_URL / BASE_PATH 由 GitHub Actions 自動帶入（見 .github/workflows/deploy.yml），
// 所以不論儲存庫叫什麼名字，網址都會正確。
export default defineConfig({
  site: process.env.SITE_URL || undefined,
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
});
