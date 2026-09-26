/**
 * Background photography from Unsplash (https://unsplash.com/license). Images are hotlinked
 * from images.unsplash.com as the Unsplash guidelines ask, and every photographer is credited
 * on /credits. Photos are used only as section backgrounds, always under a readability overlay
 * (see components/site/photo-bg.tsx).
 */
export type Photo = {
  /** images.unsplash.com base URL, without query string */
  src: string;
  photographer: string;
  profile: string;
  page: string;
  subject: string;
  /** CSS object-position, when the default centre crop hides the subject */
  position?: string;
};

export const photos = {
  dubai: {
    src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    photographer: "David Rodrigo",
    profile: "https://unsplash.com/@david__r",
    page: "https://unsplash.com/photos/burj-khalifa-and-highway-in-dubai-Fr6zexbmjmc",
    subject: "Burj Khalifa and Downtown Dubai at sunrise",
    position: "center 35%",
  },
  devTeam: {
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    photographer: "Tim van der Kuip",
    profile: "https://unsplash.com/@timmykp",
    page: "https://unsplash.com/photos/CPs2X8JYmS8",
    subject: "Developers working at their desks",
  },
  dashboard: {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    photographer: "Luke Chesser",
    profile: "https://unsplash.com/@lukechesser",
    page: "https://unsplash.com/photos/JKUTrJ4vK00",
    subject: "Performance analytics on a laptop screen",
  },
  reporting: {
    src: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74",
    photographer: "Stephen Dawson",
    profile: "https://unsplash.com/@dawson2406",
    page: "https://unsplash.com/photos/qwtCeJ5cLYs",
    subject: "Data reporting dashboard",
  },
  code: {
    src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    photographer: "Chris Ried",
    profile: "https://unsplash.com/@cdr6934",
    page: "https://unsplash.com/photos/ieic5Tq8YMk",
    subject: "Source code on a screen",
  },
  html: {
    src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713",
    photographer: "Florian Olivo",
    profile: "https://unsplash.com/@florianolv",
    page: "https://unsplash.com/photos/4hbJ-eymZ1o",
    subject: "Lines of HTML",
  },
  startup: {
    src: "https://images.unsplash.com/photo-1690378820474-b468b8ee64d3",
    photographer: "Lyubomyr Reverchuk",
    profile: "https://unsplash.com/@lreverchuk",
    page: "https://unsplash.com/photos/rtD_lcsN6_U",
    subject: "Team around a table with laptops",
  },
  whiteboard: {
    src: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    photographer: "Austin Distel",
    profile: "https://unsplash.com/@austindistel",
    page: "https://unsplash.com/photos/wD1LRb9OeEo",
    subject: "Planning session at a whiteboard",
  },
  sketch: {
    src: "https://images.unsplash.com/photo-1576153192396-180ecef2a715",
    photographer: "Amélie Mourichon",
    profile: "https://unsplash.com/@amayli",
    page: "https://unsplash.com/photos/sv8oOQaUb-o",
    subject: "Sketching interface wireframes",
  },
  students: {
    src: "https://images.unsplash.com/photo-1758270705290-62b6294dd044",
    photographer: "Vitaly Gariev",
    profile: "https://unsplash.com/@silverkblack",
    page: "https://unsplash.com/photos/kp7qkHTgSKc",
    subject: "Students working together on a laptop",
  },
  review: {
    src: "https://images.unsplash.com/photo-1758613654757-7c4f113a6782",
    photographer: "Vitaly Gariev",
    profile: "https://unsplash.com/@silverkblack",
    page: "https://unsplash.com/photos/SkbOTUeK0vM",
    subject: "Reviewing work on a laptop",
  },
  handshake: {
    src: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
    photographer: "Cytonn Photography",
    profile: "https://unsplash.com/@cytonn_photography",
    page: "https://unsplash.com/photos/n95VMLxqM2I",
    subject: "Handshake across a desk",
  },
  desk: {
    src: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc",
    photographer: "ian dooley",
    profile: "https://unsplash.com/@sadswim",
    page: "https://unsplash.com/photos/DJ7bWa-Gwks",
    subject: "Coffee, notebook and laptop on a desk",
  },
  warehouse: {
    src: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866",
    photographer: "CHUTTERSNAP",
    profile: "https://unsplash.com/@chuttersnap",
    page: "https://unsplash.com/photos/BNBA1h-NgdY",
    subject: "Warehouse racking",
  },
  silhouette: {
    src: "https://images.unsplash.com/photo-1776548199725-a9d9b506ab29",
    photographer: "Jahanzeb Ahsan",
    profile: "https://unsplash.com/@jahan_photobox",
    page: "https://unsplash.com/photos/dBstXv2eqco",
    subject: "Portrait silhouetted by warm light",
    position: "center 20%",
  },
  ember: {
    src: "https://images.unsplash.com/photo-1770335377292-7b9397fbc920",
    photographer: "Jahanzeb Ahsan",
    profile: "https://unsplash.com/@jahan_photobox",
    page: "https://unsplash.com/photos/DySsbpnjwx0",
    subject: "Silhouette with fiery light",
    position: "center 25%",
  },
  headset: {
    src: "https://images.unsplash.com/photo-1493496553793-56c1aa2cfcea",
    photographer: "Lux Interaction",
    profile: "https://unsplash.com/@luxinteraction",
    page: "https://unsplash.com/photos/UDETRRE5Mzc",
    subject: "Person using a virtual reality headset",
  },
  corridor: {
    src: "https://images.unsplash.com/photo-1549133445-3e03f08b4fdc",
    photographer: "Kiwihug",
    profile: "https://unsplash.com/@kiwihug",
    page: "https://unsplash.com/photos/YARzv8FLPFA",
    subject: "Person walking through a curved building",
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

/** Photos per top-level route. The first entry is the page hero. */
const pools: Record<string, PhotoKey[]> = {
  "": ["dubai", "devTeam", "whiteboard", "code", "students", "handshake", "warehouse", "sketch", "desk"],
  "business-ai": ["dashboard", "reporting", "whiteboard", "warehouse", "startup"],
  solutions: ["reporting", "dashboard", "warehouse", "whiteboard", "startup"],
  studio: ["code", "sketch", "devTeam", "html", "startup"],
  academy: ["students", "whiteboard", "html", "devTeam", "desk"],
  talent: ["handshake", "review", "startup", "devTeam", "whiteboard"],
  jobs: ["review", "handshake", "devTeam", "startup", "desk"],
  industries: ["warehouse", "dubai", "reporting", "dashboard", "whiteboard"],
  portfolio: ["sketch", "code", "review", "devTeam", "html"],
  insights: ["desk", "sketch", "whiteboard", "reporting"],
  resources: ["desk", "reporting", "sketch", "whiteboard"],
  company: ["dubai", "whiteboard", "startup", "desk", "handshake"],
  contact: ["dubai", "desk", "handshake"],
  "get-started": ["whiteboard", "handshake", "desk", "startup"],
};
const fallback: PhotoKey[] = ["dubai", "desk", "whiteboard"];

function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

/** Picks a photo for a section: the route decides the subject, the seed spreads sections across the pool. */
export function photoFor(pathname: string, seed: string, index?: number): Photo {
  const top = pathname.split("/")[1] ?? "";
  const pool = pools[top] ?? fallback;
  if (seed === "hero") return photos[pool[0]];
  const rest = pool.length > 1 ? pool.slice(1) : pool;
  // With a position, neighbouring sections never share a photo.
  const i = index ?? hash(`${pathname}|${seed}`);
  return photos[rest[i % rest.length]];
}

/** Unique photographer credits, for /credits. */
export function photoCredits() {
  const seen = new Map<string, { photographer: string; profile: string; items: Photo[] }>();
  for (const p of Object.values(photos) as Photo[]) {
    const e = seen.get(p.profile) ?? { photographer: p.photographer, profile: p.profile, items: [] };
    e.items.push(p);
    seen.set(p.profile, e);
  }
  return [...seen.values()];
}
