/*
  ============================================================
  YOUR ENTRIES GO HERE
  ============================================================
  To add a new dispatch, copy one of the objects below, paste it
  at the TOP of the `entries` array (newest first), and edit the
  fields. That's the whole workflow — the page rebuilds itself
  around whatever is in this list.

  Fields:
    date     - "YYYY-MM-DD" (used for sorting + the postmark)
    location - short place name, shown on the postmark stamp
    title    - headline for the entry
    text     - your reflection. Use "\n\n" to start a new paragraph.
    fontSize - optional. A CSS font-size value for this entry's body text,
           e.g. "1.2rem", "19px", "0.95em". Leave it out entirely to
           use the site's default size.
    photos   - array of { src, caption }. src is a path to an image
               in the /images folder. Use as many or as few as you want,
               including zero.
  ============================================================
*/

const entries = [
  /* start */
    {
    date: "2026-08-1",
    location: "Taipei, Taiwan",
    title: "Touchdown: 15 hours ahead",
    text: "caption to come",
    fontSize: "1rem", /* default; scalar value */
    photos: [
      { src: "images/8-1/taoyuanairport.jpeg", caption: "Making our way from Taoyuan International Airport to Taipei Main Station" },
    ]
  }
  /* end */
];
