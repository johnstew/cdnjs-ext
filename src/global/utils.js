export function cdnURL(libName, libVersion, asset, full) {
  const base = 'https://cdnjs.cloudflare.com/ajax/libs';
  if (full) {
    return `${base}/${libName}/${libVersion}/${asset}`;
  }
  return `/${libName}/${libVersion}/${asset}`;
}
