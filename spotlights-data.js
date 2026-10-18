// Utah Hive News Spotlights — data file
// One entry per spotlight. Newest first. The index page builds its cards and search from this list.
//
// id:        file name without .html (e.g. "sunset-agent-orange-memorial")
// title:     headline
// county:    county name, or "Statewide"
// city:      town, or ""
// topic:     short topic label (e.g. "Veterans", "Schools", "Water")
// summary:   one or two sentences
// sources:   news outlets that have also reported the story, e.g. ["KSL", "FOX 13"] ([] if none)
// buzz:      Sunday Buzz issue date it ran in, e.g. "Oct. 4, 2026" ("" if not yet)
// from:      "reader" (sent in by a reader) or "news" (from local news reports)
// published: date it first went up, e.g. "Oct 4, 2026"
// updated:   date of the latest change (same as published if never changed)

const SITE = {
  name: "Utah Hive News Spotlights",
  pagePublished: "Oct 4, 2026",
  pageUpdated: "Oct 18, 2026",
  email: "webercountyhive@gmail.com",
  submitHow: "Email webercountyhive@gmail.com with “News Spotlight” in the subject line. Send a link to a local news story, or tell us about something happening in your town in the body of the email (no attachments needed). We’ll write back to ask if you’d like to tell us more."
};

const SPOTLIGHTS = [
  {
    id: "pineview-history-surfaces",
    title: "With Pineview Drawn Down, the Wells That Once Watered Ogden Are Showing Again",
    county: "Weber County",
    city: "Huntsville",
    topic: "History",
    summary: "Ogden's pipeline project has lowered Pineview Reservoir to some of its lowest levels in decades, uncovering pipes, wood and an old intake from the artesian wells that supplied the city's water starting around 1914.",
    sources: ["KSL", "The Ogden Valley News", "The Salt Lake Tribune"],
    buzz: "Oct. 18, 2026",
    from: "news",
    published: "Oct 18, 2026",
    updated: "Oct 18, 2026",
    link: "pineview-history-surfaces.html"
  },
  {
    id: "sunset-agent-orange-memorial",
    title: "A Memorial to Vietnam Veterans Exposed to Agent Orange Nears Completion in Sunset",
    county: "Davis County",
    city: "Sunset",
    topic: "Veterans",
    summary: "Larry Kerr of Syracuse and the Utah Agent Orange Veterans Foundation are finishing a memorial at Sunset City Veterans Memorial Park. An unveiling is tentatively planned for Veterans Day.",
    sources: ["KSL", "FOX 13"],
    buzz: "Oct. 4, 2026",
    from: "reader",
    published: "Oct 4, 2026",
    updated: "Oct 17, 2026",
    link: "sunset-agent-orange-memorial.html"
  }
];
