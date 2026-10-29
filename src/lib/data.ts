import { getCollection, type CollectionEntry } from 'astro:content';

export type Artwork = CollectionEntry<'artworks'>;
export type Series = CollectionEntry<'series'>;

/** 後台的「系列」欄位存的是系列檔案路徑，取出不含副檔名的檔名來比對 */
function fileKey(path?: string | null): string {
  if (!path) return '';
  return path.split('/').pop()!.replace(/\.md$/i, '');
}

export async function getArtworks(): Promise<Artwork[]> {
  return (await getCollection('artworks')).sort((a, b) => b.data.year - a.data.year);
}

/** 依系列排序分組；系列內依年份由新到舊；沒有系列的作品放在最後 */
export async function getGroups() {
  const series = (await getCollection('series')).sort((a, b) => a.data.order - b.data.order);
  const works = await getArtworks();
  const groups = series
    .map((s) => ({
      id: s.id,
      series: s,
      works: works.filter((w) => fileKey(w.data.series) === fileKey(s.filePath)),
    }))
    .filter((g) => g.works.length > 0);
  const grouped = new Set(groups.flatMap((g) => g.works.map((w) => w.id)));
  const rest = works.filter((w) => !grouped.has(w.id));
  return { groups, rest };
}
