import { getStore } from "@netlify/blobs";

const SEED = 5253;
const KEY = "count";

const json = (count: number) =>
  Response.json({ count }, { headers: { "Cache-Control": "no-store" } });

export default async (req: Request) => {
  const store = getStore({ name: "visits", consistency: "strong" });

  if (req.method === "GET") {
    const current = await store.get(KEY);
    return json(current ? parseInt(current, 10) : SEED);
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  // optimistic concurrency: retry if another visitor wrote first
  for (let attempt = 0; attempt < 5; attempt++) {
    const entry = await store.getWithMetadata(KEY);
    if (!entry) {
      const res = await store.set(KEY, String(SEED + 1), { onlyIfNew: true });
      if (res.modified) return json(SEED + 1);
      continue;
    }
    const next = parseInt(String(entry.data), 10) + 1;
    const res = await store.set(KEY, String(next), { onlyIfMatch: entry.etag });
    if (res.modified) return json(next);
  }
  return new Response("Busy, try again", { status: 503 });
};

export const config = { path: "/api/visits" };
