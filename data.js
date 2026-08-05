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
    text: "After a short 13-hour flight, I am one of the first to arrive in Taipei (around 4:00 AM). We steadily fill the hall over two hours. My cohort (4 of the 8 of us) send our suitcases in the mail and take two trains for a total of four hours to reach Hualien City. <br><br> From the moment our train turned down the coast, I haven't taken my eyes off these mountains. Immediate, insistent, these loom in the periphery even when I face the ocean. These hum steadily underneath the percussive life of a small city. Steel on the stove, puttering scooters, curious birdsong, and these mountains.",
    fontSize: "1rem", /* default; scalar value */
    photos: [
      { src: "images/8-1/taoyuanairport.jpeg", caption: "Making our way from Taoyuan International Airport to Taipei Main Station" },
      { src: "images/8-1/turtleisland.JPG", caption: "Turtle Island? (or so says the student accompanying us to Hualien)" },
      { src: "images/8-1/intcar.JPG", caption: "First view of the city (and mountains) in our shuttle from the train" },
      { src: "images/8-1/blurmarket.JPG", caption: "Dongdamen Night Market is famous for its many indigenous food stands" },
      { src: "images/8-1/brightmt.JPG", caption: "So bright out that it's difficult to fix the exposure" },
      
    ]
  }
  /* end */
];
