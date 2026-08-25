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
    date: "2026-08-25",
    location: "Taipei, Taiwan", 
    title: "Movement 2: Allegretto",
    text: "Back in Taipei (台北 táiběi), Fulbright Taiwan put on a show. We heard from the program director, the program's mental health coordinators, former grantees who remained in Taiwan, and prominent international educational organizations in Taiwan. Some hints of complexity here: as Taiwan and the USA have no formal diplomatic relations, there is no formally named US Embassy in Taiwan; instead, there is the American Institute in Taiwan, a Congressionally-created and administered nonprofit staffed largely by the US Department of State. But I digress.\n\nThree days of workshops and socializing in the big city taught me three things: 1) Hualien County is the right place for me 2) Fulbright Taiwan is probably the most scaffolded such program within Fulbright, if not the world 3) I love seafood. Imbibing these lessons with me were recent college graduates, public school teachers, consultants, artists, and many aspiring doctors and lawyers. The sheer number of people from the PNW in the program did not surprise me one bit. I also reflected on how easy it was for us to obtain an Alien Resident Certificate (ARC) here, and how I now suddenly have free access to art museums and can participate in the receipt lottery. Taiwan is actively recruiting foreigners to permanently relocate here, marketing the island as a family-friendly, safe new home. Experiencing a warm welcome and considering my home and host nations' contrasting attitudes toward immigration reminded me to request my ballot to vote overseas. If I can do it from here, you can do it from there!\n\nI'm getting ahead of myself again. We got school placements! I will be living in the heart of Hualien City, just a short walk from the train I will take every day to Heping Elementary School  (和平國民小學 hépíng guómínxiǎoxué) on the border of Hualien County and Yilan County to the north. On placement day, my co-teacher immediately began sending me hikes in my area, which bodes well for our working relationship! In grades 1-6, I will have 80 total students; in kindergarten, there are 14 students. I have been told the student body almost entirely belong to the Truku (or Taroko) tribe, a shared identity which is actively included in indigenous language and culture classes at school. As I learn more, I will share more! My first visit to the school may be this Thursday, and my first day teaching will be next Monday.\n\nFinally, I celebrated my birthday this weekend, surrounded by new and old friends. At 23, I am once again in my prime. Feeling grateful for the opportunity to be in this place with these people, and desperately hoping to do a good job.",
    fontSize: "1rem", /* default; scalar value */
    photos: [
      { src: "images/8-25/fishvase.JPG", caption: "Ceramic fish from the National Palace Museum" },
      { src: "images/8-25/keynote.JPG", caption: "Dr. Randall Nadeau, Executive Director of the Foundation for Scholarly Exchange, and national treasure" },
      { src: "images/8-25/cabbage.JPG", caption: "Jadeite cabbage from the National Palace Museum, also a national treasure" },
      { src: "images/8-25/hotelview.JPG", caption: "The view from the hotel room, complete with reflected lamps. Not pictured: tatami room and hotel onsen" },
      { src: "images/8-25/shellceramics.JPG", caption: "Ceramic dishes embedded in large shells, National Palace Museum" },
      { src: "images/8-25/cafesky.JPG", caption: "Kevin, Hualien City ETA, at a Taipei cafe before an awesome thunderstorm" },
      { src: "images/8-25/locations.jpeg", caption: "The single blue bookmark in the north of Hualien is Heping" },
      { src: "images/8-25/birthday.jpeg", caption: "Fulbright Taiwan: Hualien County (nearly complete)" },
      { src: "images/8-25/taipeistreet.JPG", caption: "A Taipei street near to a Mainecoon cafe and tea scent shop" },
    ]
  },
   {
    date: "2026-08-20",
    location: "Hualien City, Taiwan", 
    title: "Movement 1: Andante",
    text: "Sorry for the delay! This week will be a twofer, so check back Sunday for more. I write you from my hotel room in Tamsui — 淡水 (dànshuǐ) in Mandarin meaning fresh water, originally called hoba meaning mouth of the river in the language of the Ketagalan people who lived here first -  a coastal district of Taiwan with the most beautiful sunset you'll never see during typhoon season.\n\nLast week in Hualien City, we got a crash course from Fulbright on classroom management and educational methods for teaching English to young speakers of other languages. I packed entirely too much content into my 20-minute demo lesson on English vocabulary for visiting the doctor, and was also advised to speak much slower. Better to hear it now! The returning members of my cohort taught us Arabic (marhaban!), Korean (annyeonghaseyo!), and some reliable games for keeping little ones engaged. These are full days, but fun days. \n\nAfter the day's workshop, us first years can be found spinning our wheels beneath the banyan trees. I'm working on leaning into my turns and increasing my core strength for the dreaded straight line test, where we will be tested on our ability to balance while driving slowly. We must cover a set short distance in at least eight seconds (you read that correctly); at least one person from another site has failed this test this year! \n\nI have also been running a little, biking a little, and getting lost a lot. So far, the surest sign that I am headed the wrong way is one or more dogs chasing me and barking. When I am not lost, though, I am finding things like the indigenous agricultural center, swarms of dragonflies, and my friends' apartments for dinner. So most of the time, I feel like I am in the right place. \n\nThis week, we got our school placements and headed to Taipei once again. I have waited, and I have seen. For now, I will share that I am very excited about visiting my school, meeting my kids, and spending the year with this cohort. I'm sure you know all that by now. \n\np.s. I bought a fish from the vendor so I could take the photo",
    fontSize: "1rem", /* default; scalar value */
    photos: [
      { src: "images/8-20/selfie.jpeg", caption: "Someone asked me to include more photos of myself. This is me at 明恥 Míngchǐ, the elementary school where Hualien County orientation is held" },
      { src: "images/8-20/dogpath.jpeg", caption: "An indicator that I've gone the wrong way" },
      { src: "images/8-20/bridgelights.jpeg", caption: "Had to carry the bike to get here, and a snake fell out of a tree behind me" },
      { src: "images/8-20/banyan.JPG", caption: "Banyan trees line the strip of concrete where we practice on a rented 115cc scooter" },
      { src: "images/8-20/scooter.JPG", caption: "The scooter in question" },
      { src: "images/8-20/marketfish.JPG", caption: "I've been eyeing these, and they've been eyeing me" },
      
    ]
  },
  
    {
    date: "2026-08-10",
    location: "Hualien City, Taiwan", 
    title: "Prelude: first, we eat",
    text: "I took my eyes off the mountains a few times during my first week, but only to focus on my plate. Above are a few less-than-scenic snapshots of indulgence. Through food, I experience the legacies of repeated colonizations of the island (hello, Japanese curry), periods of migration, and the indigenous cultures which have resisted subjugation for hundreds of years (hello, bamboo rice from the Atayal, Truku, Amis, and others). It was relatively recently that the central government transitioned from formal suppression of indigenous culture to de jure preservation of indigenous culture.\n\nHonorable mentions not pictured: my new old bike (not food), Malayan night heron (blurry photo), karaoke night (videos tbd), and friend I made on a run (no phone). Finally, Owen taught me 塞翁失馬 (sàiwēngshīmǎ), which means many things. What at first appears to be bad fortune may be surprisingly good, or the opposite may be true; I am taking it to mean wait and see. I have so much to learn, still.",    
    fontSize: "1rem", /* default; scalar value */
    photos: [
      { src: "images/8-10/curry.JPG", caption: "Japanese fish filet curry from Curry Man: light and crispy, a little sweet" },
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
    title: "Taipei Main Station: 15 hours ahead",
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
