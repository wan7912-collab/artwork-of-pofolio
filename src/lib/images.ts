import type { ImageMetadata } from 'astro';

// 後台上傳的圖片都存在 src/assets/uploads，欄位裡記的是 /src/assets/uploads/檔名
const files = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/uploads/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true },
);

export function img(path: string): ImageMetadata {
  const candidates = [path, decodeURI(path)].map((p) => (p.startsWith('/') ? p : '/' + p));
  for (const key of candidates) {
    if (files[key]) return files[key].default;
  }
  throw new Error(`找不到圖片：${path}（請確認圖片有上傳到 src/assets/uploads）`);
}
