/*
  ============================================================
  Fields:
    date     - "YYYY-MM-DD" (sorting + postmark)
    location - shown on the postmark stamp
    title    - headline for the entry
    text     - use "\n\n" to start a new paragraph
    fontSize - optional. A CSS font-size value for body text e.g. "1.2rem", "19px", "0.95em"
    photos   - array of { src, caption }
  ============================================================
*/

const entries = [
  /* next entry here */
    {
    date: "2026-08-10",
    location: "Hualien City, Taiwan", 
    title: "Prelude: first, we eat",
    text: "I took my eyes off the mountains a few times during my first week, but only to focus on my plate. Above are a few less-than-scenic snapshots of indulgence. Through food, I experience the legacies of repeated colonizations of the island (hello, Japanese curry), periods of migration, and the indigenous cultures which have resisted subjugation for hundreds of years (hello, bamboo rice from the Atayal, Truku, Amis, and others). It was relatively recently that the central government transitioned from formal suppression of indigenous culture to de jure preservation of indigenous culture.\n\nHonorable mentions not pictured: my new old bike (not food), Malayan night heron (blurry photo), karaoke night (videos tbd), and friend I made on a run (no phone). Finally, Owen taught me 塞翁失馬 (sàiwēngshīmǎ), which means many things. What at first appears to be bad fortune may be surprisingly good, or the opposite may be true; I am taking it to mean wait and see. I have so much to learn, still.",    
    fontSize: "1rem", /* default; scalar value */
    photos: [
      { src: "images/8-10/curry.JPG", caption: "Japanese fish fillet curry from Curry Man: light and crispy, a little sweet" },
      { src: "images/8-10/danbing.jpeg", caption: "蛋餅 dànbǐng, or Chinese Omelette, most of my breakfasts so far, plus my food vocab journal" },
      { src: "images/8-10/hangingmeat.jpeg", caption: "The kind man let me try one of everything, so I bought one of everything" },
      { src: "images/8-10/threecupschx.JPG", caption: "A common dine-in, fast-casual cafeteria serving homestyle Taiwanese classics like 三杯雞 sānbēijī" },
      { src: "images/8-10/shaveice.JPG", caption: "碎冰 suìbīng, a softer shaved ice" },
      { src: "images/8-10/ocean.jpeg", caption: "Waiting and seeing" },
      
    ]
  },
  
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
