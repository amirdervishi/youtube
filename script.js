// sidebar

const toggleBtn = document.querySelector(".toggle-btn");
const sidebar = document.querySelector("#mySidebar");
sidebar.classList.add("open");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

// dorpdown menu
const profilePic = document.querySelector(".user-dp img");
const dropdownMenu = document.querySelector(".dropdown");

profilePic.addEventListener("click", (event) => {
  dropdownMenu.classList.toggle("open");
});

// filter
const filterOptions = document.querySelectorAll(".filter-options");
const video = document.querySelector("#video-container");

// videos
const videos = [
  {
    thumbnail: `img/thumbnail1.jpg`,
    title: "HTML & CSS for Beginners | FREE MEGA COURSE (7+ Hours!)",
    channel: "Envato Tuts+",
    channelIcon: `img/profile-pic1.jpg`,
    description:
      "In this free course, you’ll learn how to code with modern HTML and CSS, the main building blocks of any website. If you want to become a successful web developer, this is where you need to start! At the end of more than eight hours of learning where we cover everything from basic HTML elements to working with Flexbox and CSS Grid, you’ll test your new skills by building a complete web page.",
    category: ["web", "all"],
  },

  {
    thumbnail: `img/thumbnail2.jpg`,
    title: "iPhone 11 Review: Too Easy!",
    channel: "Marques Brownlee",
    channelIcon: `img/profile-pic2.jpg`,
    description:
      "iPhone 11 is... the iPhone most people should buy. Obviously.",
    category: ["apple", "all"],
  },

  {
    thumbnail: `img/thumbnail3.jpg`,
    title: "The New S-Class: World Premiere | Trailer",
    channel: "Mercedes-Benz",
    channelIcon: `img/profile-pic3.jpg`,
    description:
      "The S-Class stands for the fascination of Mercedes-Benz: legendary and traditional engineering expertise defines the luxury segment in the automobile industry. Click the link here to learn more about the world premiere of the new S-Class: http://mb4.me/s-class-com_ytb",
    category: ["cars", "all"],
  },

  {
    thumbnail: `img/thumbnail4.jpg`,
    title: "2022 Harley-Davidson Nightster | Instrument of Expression",
    channel: "Harley-Davidson",
    channelIcon: `img/profile-pic4.jpg`,
    description:
      "​Born from an icon of yesterday and evolved for the riders of today, the 2022 Harley-Davidson Nightster is the ultimate canvas for those who seek to push through barriers and create their own riding experience.​ Watch the entire process of how the 2022 Nightster was designed, built and more.",
    category: ["motorcycle", "all"],
  },

  {
    thumbnail: `img/thumbnail5.jpg`,
    title: "Jordan Poole Goes Off For 32 Points on Christmas | Dec. 25, 2022",
    channel: "Golden State Warriors",
    channelIcon: `img/profile-pic5.jpg`,
    description:
      "Jordan Poole scored 32 points on 11-25 shooting to lead the Golden State Warriors to a 123-109 victory over the Memphis Grizzlies.",
    category: ["nba", "all"],
  },

  {
    thumbnail: `img/thumbnail9.jpg`,
    title:
      "Story Night Tour Bosnia/Kosovo - Nouman Ali Khan - Docu Vlog Series",
    channel: "Nouman Ali Khan - Official - Bayyinah",
    channelIcon: `img/profile-pic9.jpg`,
    description:
      "In this episode, Ustadh wraps up the final Story Night sessions and reflects on his first time travelling to Sarajevo and Kosovo. ",
    category: ["nouman", "all"],
  },
  {
    thumbnail: `img/thumbnail7.jpg`,
    title: "1 HOUR Of The Top Performances of 2022 Calendar Year 🔥",
    channel: "NBA",
    channelIcon: `img/profile-pic7.jpg`,
    description:
      "Never miss a moment with the latest news, trending stories and highlights to bring you closer to your favorite players and teams. Download now: https://app.link.nba.com/APP22",
    category: ["nba", "all"],
  },
  {
    thumbnail: `img/thumbnail6.jpg`,
    title: "Exploring A City With No Laws!",
    channel: "Danny Duncan",
    channelIcon: `img/profile-pic6.jpg`,
    description:
      "Overnight in a city with no laws, meeting the residents of slab city, picklebowl tournament 2022, friend blasts off to another dimension after product testing",
    category: ["entertainment", "all"],
  },
  {
    thumbnail: `img/thumbnail16.jpg`,
    title: "Trying Lil Yachty's Pizza With Lil Yachty!",
    channel: "Baylen Levine",
    channelIcon: `img/profile-pic16.jpg`,
    description:
      "In this video we do a food review of Lil Yachty's pizza with Lil Boat himself. Enjoy!",
    category: ["entertainment", "all"],
  },

  {
    thumbnail: `img/thumbnail8.jpg`,
    title: "Re-Making My NBA G.O.A.T Pyramid",
    channel: "JxmyHighroller",
    channelIcon: `img/profile-pic8.jpg`,
    description:
      "Use code JXMY for $20 oﬀ your ﬁrst SeatGeek order. https://seatgeek.onelink.me/RrnK/JXMY",
    category: ["nba", "all"],
  },

  {
    thumbnail: `img/thumbnail13.jpg`,
    title: "Drake - Jumbotron Shit Poppin (Official Music Video)",
    channel: "Drake ",
    channelIcon: `img/profile-pic13.jpg`,
    description:
      "Official music video for Drake “Jumbotron Shit Poppin” off the new album ‘Her Loss’ ",
    category: ["music", "all"],
  },

  {
    thumbnail: `img/thumbnail10.jpg`,
    title: "The KSI Interview - IMPAULSIVE EP. 283",
    channel: "IMPAULSIVE",
    channelIcon: `img/profile-pic10.jpg`,
    description:
      "YouTuber, rapper, and the UK’s biggest star, KSI, joins the boys to discuss KSI vs. Logan Paul 1 & 2, his next 🥊 opponent: Jake Paul, Bryce Hall, Austin McBroom or Floyd Mayweather? Rocky relationships with Deji & Ricegum, social gloves bankruptcy, marrying his secret girlfriend, KSI Vs Logan Paul 3 👀 & more…",
    category: ["podcastst", "all"],
  },

  {
    thumbnail: `img/thumbnail15.jpg`,
    title: "Lil Tjay - Clutchin My Strap (Official Video)",
    channel: "Lil Tjay ",
    channelIcon: `img/profile-pic15.jpg`,
    description:
      "Lil Tjay 'Clutchin My Strap' Out Now: https://on.soundcloud.com/XYRyC",
    category: ["music", "all"],
  },

  {
    thumbnail: `img/thumbnail11.jpg`,
    title:
      "Poole 32 Pts Ejected! Morant 36 Pts! Klay Taunts Brooks Technical Christmas! 2022-23 NBA Season",
    channel: "Chris Smoove",
    channelIcon: `img/profile-pic11.jpg`,
    description: "Splash the like button for more NBA videos!",
    category: ["nba", "all"],
  },

  {
    thumbnail: `img/thumbnail12.jpg`,
    title: "Best Online Business To Start As A BEGINNER (2023)",
    channel: "Iman Gadzhi",
    channelIcon: `img/profile-pic12.jpg`,
    description: "How To Start A $100k/Year Online Business (FAST)",
    category: ["other", "all"],
  },
  {
    thumbnail: `img/thumbnail17.jpg`,
    title: "We Built a 1300HP Hellcat Jet with Twin Turbos",
    channel: "Westen Champlin ",
    channelIcon: `img/profile-pic17.jpg`,
    description:
      "We Built a 1300HP Hellcat Jet with Twin Turbos. We insalled a twin turbos on our supercharged hellcat  and cannonballed across the country to finish it in time for roadkill nights.",
    category: ["cars", "all"],
  },
  {
    thumbnail: `img/thumbnail18.jpg`,
    title: "Buying my new 2023 Corvette Z06!!",
    channel: "TheStradman ",
    channelIcon: `img/profile-pic18.jpg`,
    description:
      "Special thanks to Matt Beaver for helping me get my dream C8 Z06 Corvette!",
    category: ["cars", "all"],
  },
  {
    thumbnail: `img/thumbnail19.jpg`,
    title:
      "The World's Quickest Cars: Lucid Air Sapphire v Bugatti Chiron v Tesla Plaid - Cammisa's Drag Race",
    channel: "Hagerty ",
    channelIcon: `img/profile-pic19.jpg`,
    description:
      "Jason Cammisa got the exclusive first test, strapped on his equipment, and broke the record: the Lucid Air Sapphire is the world's quickest-accelerating production car.",
    category: ["cars", "all"],
  },
];

for (let i = 19; i <= 24; i++) {
  videos.push({
    thumbnail: `img/thumbnail-img.jpg`,
    title: `no-title`,
    channel: `no-name`,
    channelIcon: `img/profile-pic-img.jpg`,
    description: `no-description`,
    category: "all",
  });
}

// filter

const filteredVideos = {
  trending: [
    {
      thumbnail: `img/thumbnail2.jpg`,
      title: "iPhone 11 Review: Too Easy!",
      channel: "Marques Brownlee",
      channelIcon: `img/profile-pic2.jpg`,
      description:
        "iPhone 11 is... the iPhone most people should buy. Obviously.",
    },

    {
      thumbnail: `img/thumbnail3.jpg`,
      title: "The New S-Class: World Premiere | Trailer",
      channel: "Mercedes-Benz",
      channelIcon: `img/profile-pic3.jpg`,
      description:
        "The S-Class stands for the fascination of Mercedes-Benz: legendary and traditional engineering expertise defines the luxury segment in the automobile industry. Click the link here to learn more about the world premiere of the new S-Class: http://mb4.me/s-class-com_ytb",
    },

    {
      thumbnail: `img/thumbnail4.jpg`,
      title: "2022 Harley-Davidson Nightster | Instrument of Expression",
      channel: "Harley-Davidson",
      channelIcon: `img/profile-pic4.jpg`,
      description:
        "​Born from an icon of yesterday and evolved for the riders of today, the 2022 Harley-Davidson Nightster is the ultimate canvas for those who seek to push through barriers and create their own riding experience.​ Watch the entire process of how the 2022 Nightster was designed, built and more.",
    },

    {
      thumbnail: `img/thumbnail6.jpg`,
      title: "Exploring A City With No Laws!",
      channel: "Danny Duncan",
      channelIcon: `img/profile-pic6.jpg`,
      description:
        "Overnight in a city with no laws, meeting the residents of slab city, picklebowl tournament 2022, friend blasts off to another dimension after product testing",
    },

    {
      thumbnail: `img/thumbnail8.jpg`,
      title: "Re-Making My NBA G.O.A.T Pyramid",
      channel: "JxmyHighroller",
      channelIcon: `img/profile-pic8.jpg`,
      description:
        "Use code JXMY for $20 oﬀ your ﬁrst SeatGeek order. https://seatgeek.onelink.me/RrnK/JXMY",
    },

    {
      thumbnail: `img/thumbnail9.jpg`,
      title:
        "Story Night Tour Bosnia/Kosovo - Nouman Ali Khan - Docu Vlog Series",
      channel: "Nouman Ali Khan - Official - Bayyinah",
      channelIcon: `img/profile-pic9.jpg`,
      description:
        "In this episode, Ustadh wraps up the final Story Night sessions and reflects on his first time travelling to Sarajevo and Kosovo. ",
    },

    {
      thumbnail: `img/thumbnail10.jpg`,
      title: "The KSI Interview - IMPAULSIVE EP. 283",
      channel: "IMPAULSIVE",
      channelIcon: `img/profile-pic10.jpg`,
      description:
        "YouTuber, rapper, and the UK’s biggest star, KSI, joins the boys to discuss KSI vs. Logan Paul 1 & 2, his next 🥊 opponent: Jake Paul, Bryce Hall, Austin McBroom or Floyd Mayweather? Rocky relationships with Deji & Ricegum, social gloves bankruptcy, marrying his secret girlfriend, KSI Vs Logan Paul 3 👀 & more…",
    },
    {
      thumbnail: `img/thumbnail12.jpg`,
      title: "Best Online Business To Start As A BEGINNER (2023)",
      channel: "Iman Gadzhi",
      channelIcon: `img/profile-pic12.jpg`,
      description: "How To Start A $100k/Year Online Business (FAST)",
    },
  ],

  music: [
    {
      thumbnail: `img/thumbnail13.jpg`,
      title: "Drake - Jumbotron Shit Poppin (Official Music Video)",
      channel: "Drake ",
      channelIcon: `img/profile-pic13.jpg`,
      description:
        "Official music video for Drake “Jumbotron Shit Poppin” off the new album ‘Her Loss’ ",
      category: ["music", "all"],
    },
    {
      thumbnail: `img/thumbnail15.jpg`,
      title: "Lil Tjay - Clutchin My Strap (Official Video)",
      channel: "Lil Tjay ",
      channelIcon: `img/profile-pic15.jpg`,
      description:
        "Lil Tjay 'Clutchin My Strap' Out Now: https://on.soundcloud.com/XYRyC",
      category: ["music", "all"],
    },
  ],
  nba: [
    {
      thumbnail: `img/thumbnail7.jpg`,
      title: "1 HOUR Of The Top Performances of 2022 Calendar Year 🔥",
      channel: "NBA",
      channelIcon: `img/profile-pic7.jpg`,
      description:
        "Never miss a moment with the latest news, trending stories and highlights to bring you closer to your favorite players and teams. Download now: https://app.link.nba.com/APP22",
      category: ["nba", "all"],
    },
    {
      thumbnail: `img/thumbnail8.jpg`,
      title: "Re-Making My NBA G.O.A.T Pyramid",
      channel: "JxmyHighroller",
      channelIcon: `img/profile-pic8.jpg`,
      description:
        "Use code JXMY for $20 oﬀ your ﬁrst SeatGeek order. https://seatgeek.onelink.me/RrnK/JXMY",
    },
    {
      thumbnail: `img/thumbnail11.jpg`,
      title:
        "Poole 32 Pts Ejected! Morant 36 Pts! Klay Taunts Brooks Technical Christmas! 2022-23 NBA Season",
      channel: "Chris Smoove",
      channelIcon: `img/profile-pic11.jpg`,
      description: "Splash the like button for more NBA videos!",
    },
  ],

  podcasts: [
    {
      thumbnail: `img/thumbnail10.jpg`,
      title: "The KSI Interview - IMPAULSIVE EP. 283",
      channel: "IMPAULSIVE",
      channelIcon: `img/profile-pic10.jpg`,
      description:
        "YouTuber, rapper, and the UK’s biggest star, KSI, joins the boys to discuss KSI vs. Logan Paul 1 & 2, his next 🥊 opponent: Jake Paul, Bryce Hall, Austin McBroom or Floyd Mayweather? Rocky relationships with Deji & Ricegum, social gloves bankruptcy, marrying his secret girlfriend, KSI Vs Logan Paul 3 👀 & more…",
    },
  ],
  entertainment: [
    {
      thumbnail: `img/thumbnail6.jpg`,
      title: "Exploring A City With No Laws!",
      channel: "Danny Duncan",
      channelIcon: `img/profile-pic6.jpg`,
      description:
        "Overnight in a city with no laws, meeting the residents of slab city, picklebowl tournament 2022, friend blasts off to another dimension after product testing",
    },
    {
      thumbnail: `img/thumbnail16.jpg`,
      title: "We Got a Real Job!",
      channel: "Baylen Levine",
      channelIcon: `img/profile-pic16.jpg`,
      description: "HOUSEKEEPING!!!",
    },
  ],
  web: [
    {
      thumbnail: `img/thumbnail1.jpg`,
      title: "HTML & CSS for Beginners | FREE MEGA COURSE (7+ Hours!)",
      channel: "Envato Tuts+",
      channelIcon: `img/profile-pic1.jpg`,
      description:
        "In this free course, you’ll learn how to code with modern HTML and CSS, the main building blocks of any website. If you want to become a successful web developer, this is where you need to start! At the end of more than eight hours of learning where we cover everything from basic HTML elements to working with Flexbox and CSS Grid, you’ll test your new skills by building a complete web page.",
    },
  ],
  nouman: [
    {
      thumbnail: `img/thumbnail9.jpg`,
      title:
        "Story Night Tour Bosnia/Kosovo - Nouman Ali Khan - Docu Vlog Series",
      channel: "Nouman Ali Khan - Official - Bayyinah",
      channelIcon: `img/profile-pic9.jpg`,
      description:
        "In this episode, Ustadh wraps up the final Story Night sessions and reflects on his first time travelling to Sarajevo and Kosovo. ",
    },
  ],
  apple: [
    {
      thumbnail: `img/thumbnail2.jpg`,
      title: "iPhone 11 Review: Too Easy!",
      channel: "Marques Brownlee",
      channelIcon: `img/profile-pic2.jpg`,
      description:
        "iPhone 11 is... the iPhone most people should buy. Obviously.",
    },
  ],
  cars: [
    {
      thumbnail: `img/thumbnail3.jpg`,
      title: "The New S-Class: World Premiere | Trailer",
      channel: "Mercedes-Benz",
      channelIcon: `img/profile-pic3.jpg`,
      description:
        "The S-Class stands for the fascination of Mercedes-Benz: legendary and traditional engineering expertise defines the luxury segment in the automobile industry. Click the link here to learn more about the world premiere of the new S-Class: http://mb4.me/s-class-com_ytb",
    },
    {
      thumbnail: `img/thumbnail17.jpg`,
      title: "We Built a 1300HP Hellcat Jet with Twin Turbos",
      channel: "Westen Champlin ",
      channelIcon: `img/profile-pic17.jpg`,
      description:
        "We Built a 1300HP Hellcat Jet with Twin Turbos. We insalled a twin turbos on our supercharged hellcat  and cannonballed across the country to finish it in time for roadkill nights.",
    },
    {
      thumbnail: `img/thumbnail18.jpg`,
      title: "Buying my new 2023 Corvette Z06!!",
      channel: "TheStradman ",
      channelIcon: `img/profile-pic18.jpg`,
      description:
        "Special thanks to Matt Beaver for helping me get my dream C8 Z06 Corvette!",
    },
    {
      thumbnail: `img/thumbnail19.jpg`,
      title:
        "The World's Quickest Cars: Lucid Air Sapphire v Bugatti Chiron v Tesla Plaid - Cammisa's Drag Race",
      channel: "Hagerty ",
      channelIcon: `img/profile-pic19.jpg`,
      description:
        "Jason Cammisa got the exclusive first test, strapped on his equipment, and broke the record: the Lucid Air Sapphire is the world's quickest-accelerating production car.",
    },
  ],
  motorcycle: [
    {
      thumbnail: `img/thumbnail4.jpg`,
      title: "2022 Harley-Davidson Nightster | Instrument of Expression",
      channel: "Harley-Davidson",
      channelIcon: `img/profile-pic4.jpg`,
      description:
        "​Born from an icon of yesterday and evolved for the riders of today, the 2022 Harley-Davidson Nightster is the ultimate canvas for those who seek to push through barriers and create their own riding experience.​ Watch the entire process of how the 2022 Nightster was designed, built and more.",
    },
  ],
  other: [
    {
      thumbnail: `img/thumbnail12.jpg`,
      title: "Best Online Business To Start As A BEGINNER (2023)",
      channel: "Iman Gadzhi",
      channelIcon: `img/profile-pic12.jpg`,
      description: "How To Start A $100k/Year Online Business (FAST)",
    },
  ],
};

const filterVideos = (category) => {
  videoContainer.innerHTML = "";
  if (category === "all") {
    location.reload();
  } else {
    let currentVideos = filteredVideos[category];
    if (!currentVideos) {
      currentVideos = [];
    }
    for (let i = 0; i < currentVideos.length; i++) {
      const video = currentVideos[i];
      const videoEl = `
          <div class="video">
          <div class="thumbnail">
            <img src="${video.thumbnail}" class="video-thumbnail"  onclick="myFunction()" >
            <div class="content">
              <img src="${video.channelIcon}" class="channel-icon">
              <div class="info">
              <h4 class="title" onclick="myFunction()">${video.title} </h4> 
                <p class="channel-name">${video.channel}</p
                </div>
              </div>
            </div>
          `;
      videoContainer.innerHTML += videoEl;
    }
  }
};

function myFunction() {
  alert("Sorry! Videos can only be displayed in the 'All' filter.");
}

filterOptions.forEach((filterOption) => {
  filterOption.addEventListener("click", () => {
    const category = filterOption.dataset.category;
    filterVideos(category);
    filterOptions.forEach((option) => option.classList.remove("active"));
    filterOption.classList.add("active");
  });
});

document.querySelectorAll(".filter-options").forEach((filterOption) => {
  filterOption.addEventListener("click", () => {
    const category = filterOption.dataset.category;
    filterVideos(category);
  });
});

// logo
const logoButton = document.querySelector(".logo img");
logoButton.addEventListener("click", (event) => {
  location.reload();
  window.scrollTo(0, 0);
});

const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", (event) => {
  location.reload();
  window.scrollTo(0, 0);
});

// video that your watching

const videoThumbnails = document.querySelectorAll("thumbnailButton");
videoThumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", (event) => {
    window.scroll(0, 0);
    filterOptionsContainer.classList.add("hidden");
    videoContainer.style.marginTop = "60px";
  });
});

const videoContainer = document.querySelector(".video-container");

videos.forEach((video) => {
  const videoElement = document.createElement("div");
  videoElement.classList.add("video");
  const thumbnailButton = document.createElement("button");
  thumbnailButton.classList.add("thumbnail");
  thumbnailButton.innerHTML = `<img src="${video.thumbnail}" class="thumbnail" alt="" width="705" height="397" />`;

  const filterOptionsContainer = document.querySelector(
    ".filter-options-container"
  );

  thumbnailButton.addEventListener("click", (event) => {
    videoContainer.style.display = "grid";
    videoContainer.style.gridTemplateColumns = "65% 35%";
    window.scroll({
      top: 0,
      left: 0,
    });
    filterOptionsContainer.classList.add("hidden");
    videoContainer.style.marginTop = "60px";

    const selectedVideo = document.createElement("div");
    selectedVideo.classList.add("selected-video");
    selectedVideo.style.gridColumn = "1 / 2";
    selectedVideo.innerHTML = `
      <div class="content-button">
        <img src="${video.thumbnail}" class="thumbnail-button" alt="" width="705" height="397" />
        <h4 class="title-1">${video.title}</h4>
        <i class="channel-icon-1">  <img src="${video.channelIcon}" class="channel-icon-1" alt="" /></i>
        <p class="channel-name-1">${video.channel}</p>
        <h4 class="description">${video.description}</h4>        
      </div>
    `;

    const thumbnailColumn = document.createElement("div");
    thumbnailColumn.classList.add("thumbnail-column");
    thumbnailColumn.style.gridColumn = "2 / 3";

    thumbnailColumn.innerHTML = "";

    for (let i = 1; i <= 18; i++) {
      const thumbnailContainer = document.createElement("div");
      thumbnailContainer.classList.add("thumbnail-container");
      thumbnailContainer.style.marginBottom = "50px";
      thumbnailContainer.innerHTML = `
      <div class="video-info-c">
      <img src="${videos[i - 1].thumbnail}" class="thumbnail-c" alt="" />
      <div class="conttent-c">
          <h4 class="title-c">${videos[i - 1].title}</h4>
            <p class="channel-name-c">${videos[i - 1].channel}</p>
        </div>
        </div>
      `;

      thumbnailColumn.addEventListener("click", function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });

      thumbnailContainer.addEventListener("click", (event) => {
        const selectedVideo = document.createElement("div");
        selectedVideo.classList.add("selected-video");
        selectedVideo.style.gridColumn = "1 / 2";
        selectedVideo.innerHTML = `
          <div class="content-button">
            <img src="${
              videos[i - 1].thumbnail
            }" class="thumbnail-button" alt="" width="705" height="397" />
            <h4 class="title-1">${videos[i - 1].title}</h4>
            <i class="channel-icon-1">  <img src="${
              videos[i - 1].channelIcon
            }" class="channel-icon-1" alt="" /></i>
            <p class="channel-name-1">${videos[i - 1].channel}</p>
            <h4 class="description">${videos[i - 1].description}</h4> 
          </div>
        `;

        const commentForm = document.createElement("form");
        commentForm.innerHTML = `
          <i class="channel-icon-comment">
            <img src="img/profile-pic.gif" class="channel-icon-commentBox" alt="" />
          </i>
          <textarea class="input" id="commentBox" name="demo" placeholder="Add a comment..."></textarea>
          <button type="reset">Cancel</button>
          <button type="submit" id="commentButton" >Comment</button>
        `;

        selectedVideo.appendChild(commentForm);
        commentForm.addEventListener("submit", (event) => {
          event.preventDefault();

          const comment = event.target[0].value;

          const commentDiv = document.createElement("div");
          commentDiv.innerHTML = `
            <div class="info-comment">
              <i class="channel-icon-1">
                <img src="img/profile-pic.gif" class="channel-icon-1" alt="" />
              </i>
              <p class="channel-name-1">Amir Dervishi</p>        
            </div>
            <p class="comment">${comment}</p>      
          `;

          selectedVideo.appendChild(commentDiv);

          event.target[0].value = "";
        });

        videoContainer.innerHTML = "";
        videoContainer.appendChild(selectedVideo);
        videoContainer.appendChild(thumbnailColumn);
      });

      thumbnailColumn.appendChild(thumbnailContainer);
    }

    videoContainer.innerHTML = "";
    videoContainer.appendChild(selectedVideo);
    videoContainer.appendChild(thumbnailColumn);

    // comment

    const commentForm = document.createElement("form");

    commentForm.innerHTML = `
    <i class="channel-icon-comment">
    <img src="img/profile-pic.gif" class="channel-icon-commentBox" alt="" />
  </i>
  
  <textarea class="input" id="comment-box" name="demo" placeholder="Add a comment..."></textarea>
    <button type="reset">Cancel</button>
    <button type="submit" id="comment-button" >Comment</button>

`;

    selectedVideo.appendChild(commentForm);
    commentForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const comment = event.target[0].value;

      const commentDiv = document.createElement("div");
      commentDiv.innerHTML = `
        <div class="info-comment">
          <i class="channel-icon-1">
            <img src="img/profile-pic.gif" class="channel-icon-1" alt="" />
          </i>
          <p class="channel-name-1">Amir Dervishi</p>        
        </div>
        <p class="comment">${comment}</p>      
      `;

      selectedVideo.appendChild(commentDiv);

      event.target[0].value = "";
    });
  });

  const contentElement = document.createElement("div");
  contentElement.classList.add("content");
  contentElement.innerHTML = `
      <img src="${video.channelIcon}" class="channel-icon" alt="" />
      <div class="info">
        <h4 class="title">${video.title}</h4>
        <p class="channel-name">${video.channel}</p>
      </div>
    `;

  videoElement.appendChild(thumbnailButton);
  videoElement.appendChild(contentElement);
  videoContainer.appendChild(videoElement);
});

// back to top
const goToTop = document.querySelector(".up a");

goToTop.addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
