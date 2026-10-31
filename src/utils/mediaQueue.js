/**
 * Fila sequencial de mídia para resultados não explícitos.
 * Mantém a ordem recebida e só reinicia depois que todos os itens
 * disponíveis forem consumidos.
 */
const queues = new Map();

function uniqueMedia(items) {
  const seen = new Set();
  return items.filter((item) => {
    const url = item?.url || item?.mediaUrl || item?.download_url;
    if (!url || seen.has(url)) return false;
    seen.add(url);
    return true;
  });
}

export function nextMediaFromResults(key, results) {
  const items = uniqueMedia(Array.isArray(results) ? results : []);
  if (!items.length) return null;

  let state = queues.get(key);
  const signature = items.map((item) => item.url || item.mediaUrl || item.download_url).join("|");

  if (!state || state.signature !== signature || state.index >= items.length) {
    state = { signature, index: 0 };
  }

  const item = items[state.index];
  state.index += 1;
  if (state.index >= items.length) state.index = 0;
  queues.set(key, state);

  return item;
}

export function clearMediaQueue(key) {
  if (key) queues.delete(key);
  else queues.clear();
}
