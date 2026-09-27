/**
 * Photography from Unsplash (https://unsplash.com/license). Images are hotlinked from
 * images.unsplash.com as the Unsplash guidelines ask, and every photographer is credited on
 * /credits. Photos appear only in page heroes and in the homepage's content blocks; sections
 * have no background photos.
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

/** Hero photo per top-level route (page heroes are the only place route photos appear). */
const heroes: Record<string, PhotoKey> = {
  "": "dubai",
  "business-ai": "dashboard",
  solutions: "reporting",
  studio: "code",
  academy: "students",
  talent: "handshake",
  jobs: "review",
  industries: "warehouse",
  portfolio: "sketch",
  insights: "desk",
  resources: "desk",
  company: "dubai",
  contact: "dubai",
  "get-started": "whiteboard",
};

/** The hero photo for a route. */
export function photoFor(pathname: string): Photo {
  return photos[heroes[pathname.split("/")[1] ?? ""] ?? "dubai"];
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
