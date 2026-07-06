// Vocaloid Songs Database (Curator's Recommended Picks)
const SONGS = [
  {
    id: "world-is-mine",
    title: "World is Mine",
    japaneseTitle: "ワールドイズマイン",
    producer: "ryo (supercell)",
    producerKey: "ryo",
    vocalist: "Hatsune Miku",
    vocalistKey: "miku",
    releaseYear: 2008,
    youtubeId: "O8A714qS830",
    vibes: ["Legendary", "Cheer Up"],
    description: "The ultimate Vocaloid anthem. As the curator, I highly recommend this as a prime example of the 'Tsundere Princess' character building in music. ryo's pop-rock composition is simple yet incredibly catchy, proving how a song can define a virtual singer's global personality.",
    links: {
      youtube: "https://www.youtube.com/watch?v=O8A714qS830",
      spotify: "https://open.spotify.com/track/6W3UqLwJm9pTeq2n3g8Xp7"
    }
  },
  {
    id: "senbonzakura",
    title: "Senbonzakura",
    japaneseTitle: "千本桜",
    producer: "Kurousa-P (WhiteFlame)",
    producerKey: "others",
    vocalist: "Hatsune Miku",
    vocalistKey: "miku",
    releaseYear: 2011,
    youtubeId: "shs0rAiwsGQ",
    vibes: ["Legendary", "Insane Tech"],
    description: "A fast-paced masterpiece blending traditional Japanese scales with Western rock chord progressions. I selected this because the instrumentation techniques are stellar—rapid-fire shamisen-like synthesizer runs and guitar solos that create a grand, nostalgic atmosphere of early 20th-century Japan.",
    links: {
      youtube: "https://www.youtube.com/watch?v=shs0rAiwsGQ",
      spotify: "https://open.spotify.com/track/25S4TiaD3V4Cj2xL19n24C"
    }
  },
  {
    id: "tell-your-world",
    title: "Tell Your World",
    japaneseTitle: "Tell Your World",
    producer: "kz (livetune)",
    producerKey: "kz",
    vocalist: "Hatsune Miku",
    vocalistKey: "miku",
    releaseYear: 2012,
    youtubeId: "PqJNc9KJAUM",
    vibes: ["Legendary", "Cheer Up"],
    description: "This song represents the soul of the Vocaloid community. Commisioned for a Google Chrome commercial, it speaks of connecting the dots of individual creativity. I choose this for those days you feel down; its soaring synthesizer hook and optimistic scale will immediately lift your spirits.",
    links: {
      youtube: "https://www.youtube.com/watch?v=PqJNc9KJAUM",
      spotify: "https://open.spotify.com/track/4jVnLzQ48QjV1dE0YhF15h"
    }
  },
  {
    id: "ghost-rule",
    title: "Ghost Rule",
    japaneseTitle: "ゴーストルール",
    producer: "DECO*27",
    producerKey: "deco27",
    vocalist: "Hatsune Miku",
    vocalistKey: "miku",
    releaseYear: 2016,
    youtubeId: "KushW6zv_50",
    vibes: ["Insane Tech", "Dark & Deep"],
    description: "A hard-hitting rock song dealing with self-deception and lies. I recommend it for DECO*27's brilliant use of Hatsune Miku's 'growl' tuning in the chorus. The song structure is mathematically satisfying, building tension up to a massive vocal release.",
    links: {
      youtube: "https://www.youtube.com/watch?v=KushW6zv_50",
      spotify: "https://open.spotify.com/track/1gD4t1iCq7TzE6t17vP9dO"
    }
  },
  {
    id: "roki",
    title: "Roki",
    japaneseTitle: "ロキ",
    producer: "MikitoP",
    producerKey: "others",
    vocalist: "Kagamine Rin",
    vocalistKey: "rin",
    releaseYear: 2018,
    youtubeId: "Xg-qfsKN2_E",
    vibes: ["Cheer Up", "Insane Tech"],
    description: "An incredibly stylish rock duet between Kagamine Rin and the producer MikitoP himself. I chose this because of its masterfully composed bass groove and call-and-response dynamics, which make it a perfect song to blast in your headphones to shake off bad moods.",
    links: {
      youtube: "https://www.youtube.com/watch?v=Xg-qfsKN2_E",
      spotify: "https://open.spotify.com/track/622hA0N7GjGvKzK2T6hM0X"
    }
  },
  {
    id: "lost-ones-weeping",
    title: "The Lost One's Weeping",
    japaneseTitle: "ロストワンの号哭",
    producer: "Neru",
    producerKey: "neru",
    vocalist: "Kagamine Rin",
    vocalistKey: "rin",
    releaseYear: 2013,
    youtubeId: "O0TtDeDiHcE",
    vibes: ["Dark & Deep", "Masterpiece Story"],
    description: "A heavy alternative rock song criticizing the crushing academic pressure on youth. I selected this because of Neru's dark songwriting style and Rin's high, desperate vocal register. The story of school alienation is told with raw, unfiltered emotion.",
    links: {
      youtube: "https://www.youtube.com/watch?v=O0TtDeDiHcE",
      spotify: "https://open.spotify.com/track/4y9y2rNl8d46yJ2rFvHn7C"
    }
  },
  {
    id: "just-be-friends",
    title: "Just Be Friends",
    japaneseTitle: "Just Be Friends",
    producer: "Dixie Flatline",
    producerKey: "others",
    vocalist: "Megurine Luka",
    vocalistKey: "luka",
    releaseYear: 2009,
    youtubeId: "8oJVZac_H1o",
    vibes: ["Legendary", "Masterpiece Story"],
    description: "A gorgeous R&B/synth-pop track documenting a couple realizing their love has run its course. I recommend this for its sophisticated chord transitions and mature lyrical framing. It stands out in Vocaloid history as an early narrative masterpiece.",
    links: {
      youtube: "https://www.youtube.com/watch?v=8oJVZac_H1o",
      spotify: "https://open.spotify.com/track/5c8c4H12iH9tQf5U4xMvQ9"
    }
  },
  {
    id: "echo",
    title: "ECHO",
    japaneseTitle: "ECHO",
    producer: "Crusher-P",
    producerKey: "others",
    vocalist: "Gumi",
    vocalistKey: "gumi",
    releaseYear: 2014,
    youtubeId: "cQKGUgOfD8U",
    vibes: ["Dark & Deep", "Insane Tech"],
    vocalistKey: "gumi",
    description: "An English Vocaloid sensation. Crusher-P's electro-house beats and GUMI's slightly robotic English delivery create a chilling atmosphere of confusion. I selected this for its stellar dubstep production and intense rhythmic techniques.",
    links: {
      youtube: "https://www.youtube.com/watch?v=cQKGUgOfD8U",
      spotify: "https://open.spotify.com/track/0wO83Z2Z3JdFj0GfF6x2lF"
    }
  },
  {
    id: "god-ish",
    title: "God-ish",
    japaneseTitle: "神っぽいな",
    producer: "PinocchioP",
    producerKey: "pinocchio",
    vocalist: "Hatsune Miku",
    vocalistKey: "miku",
    releaseYear: 2021,
    youtubeId: "EHBFK80QQ_U",
    vibes: ["Insane Tech", "Dark & Deep"],
    description: "A satirical critique of internet herd-mentality. I choose this because PinocchioP is a genius songwriter: the vocal programming alternates between rapid talk-singing and high vibrato, accompanied by a chaotic, highly technical offbeat electro-swing rhythm.",
    links: {
      youtube: "https://www.youtube.com/watch?v=EHBFK80QQ_U",
      spotify: "https://open.spotify.com/track/6Uo7zWvE7H10tQpP7D2tD7"
    }
  },
  {
    id: "goodbye-declaration",
    title: "Goodbye Declaration",
    japaneseTitle: "グッバイ宣言",
    producer: "Chinozo",
    producerKey: "others",
    vocalist: "v flower",
    vocalistKey: "flower",
    releaseYear: 2020,
    youtubeId: "dHXC_ahjtUY",
    vibes: ["Cheer Up", "Legendary"],
    description: "The anthem of introverts wanting to live life on their own terms. I choose this as an absolute mood booster; the tempo is incredibly fast, and the uplifting pop-punk hook will instantly make you want to dance and leave your worries behind.",
    links: {
      youtube: "https://www.youtube.com/watch?v=dHXC_ahjtUY",
      spotify: "https://open.spotify.com/track/2bKkF71XkO5n7q9H6jN8Yk"
    }
  },
  {
    id: "six-trillion-years",
    title: "Six Trillion Years and a Night Story",
    japaneseTitle: "六兆年と一夜物語",
    producer: "kemu",
    producerKey: "others",
    vocalist: "IA",
    vocalistKey: "ia",
    releaseYear: 2012,
    youtubeId: "PZgK1NpeoEE",
    vibes: ["Masterpiece Story", "Insane Tech"],
    description: "A tragic folklore story of an outcast child who finds temporary comfort. I highly recommend this for its emotional intensity. The song's drum and keyboard composition goes at lightning speed, showcasing peak high-tempo emotional rock composition.",
    links: {
      youtube: "https://www.youtube.com/watch?v=PZgK1NpeoEE",
      spotify: "https://open.spotify.com/track/4jVnLzQ48QjV1dE0YhF15h"
    }
  },
  {
    id: "vampire",
    title: "The Vampire",
    japaneseTitle: "ヴァンパイア",
    producer: "DECO*27",
    producerKey: "deco27",
    vocalist: "Hatsune Miku",
    vocalistKey: "miku",
    releaseYear: 2021,
    youtubeId: "e1xCOsgWG0M",
    vibes: ["Cheer Up", "Insane Tech"],
    description: "An infectious pop-rock song featuring clever wordplay and addictive phrasing. I recommend it as a masterclass in modern vocal hook structure: every section is a hook, making it an excellent upbeat song to energize yourself.",
    links: {
      youtube: "https://www.youtube.com/watch?v=e1xCOsgWG0M",
      spotify: "https://open.spotify.com/track/0U8hM5kO4W3T2vV6F1SgD3"
    }
  }
];

// Application State
let activeFilters = {
  search: "",
  producer: "all",
  category: "all"
};

// DOM Elements
let songGrid, searchInput, clearSearchBtn, producerFiltersContainer, categoryFiltersContainer, modal, modalContent, modalClose;

// Initialize application
document.addEventListener("DOMContentLoaded", () => {
  songGrid = document.getElementById("song-grid");
  searchInput = document.getElementById("search-input");
  clearSearchBtn = document.getElementById("clear-search");
  producerFiltersContainer = document.getElementById("producer-filters");
  categoryFiltersContainer = document.getElementById("category-filters");
  modal = document.getElementById("song-modal");
  modalContent = document.getElementById("modal-detail-content");
  modalClose = document.getElementById("modal-close");

  renderSongs();
  setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
  // Search input
  searchInput.addEventListener("input", (e) => {
    activeFilters.search = e.target.value.toLowerCase();
    toggleClearButton();
    renderSongs();
  });

  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    activeFilters.search = "";
    toggleClearButton();
    renderSongs();
  });

  // Producer filter buttons
  producerFiltersContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;

    producerFiltersContainer.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    activeFilters.producer = btn.dataset.producer;
    renderSongs();
  });

  // Category filter buttons
  categoryFiltersContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;

    categoryFiltersContainer.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    activeFilters.category = btn.dataset.category;
    renderSongs();
  });

  // Close modal
  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
}

// Toggle visibility of clear search button
function toggleClearButton() {
  if (activeFilters.search.length > 0) {
    clearSearchBtn.style.display = "flex";
  } else {
    clearSearchBtn.style.display = "none";
  }
}

// Filter and render songs
function renderSongs() {
  const filteredSongs = SONGS.filter(song => {
    const matchesSearch = 
      song.title.toLowerCase().includes(activeFilters.search) ||
      song.japaneseTitle.toLowerCase().includes(activeFilters.search) ||
      song.producer.toLowerCase().includes(activeFilters.search) ||
      song.description.toLowerCase().includes(activeFilters.search) ||
      song.vocalist.toLowerCase().includes(activeFilters.search);
    
    const matchesProducer = activeFilters.producer === "all" || song.producerKey === activeFilters.producer;
    const matchesCategory = activeFilters.category === "all" || song.vibes.includes(activeFilters.category);

    return matchesSearch && matchesProducer && matchesCategory;
  });

  songGrid.innerHTML = "";

  if (filteredSongs.length === 0) {
    songGrid.innerHTML = `
      <div class="no-results animate-fade-in">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"/>
        </svg>
        <p>No recommended songs match your criteria. Try adjusting your filters or search query!</p>
      </div>
    `;
    return;
  }

  filteredSongs.forEach((song, index) => {
    const card = document.createElement("div");
    card.className = `song-card card-${song.vocalistKey} animate-fade-in`;
    card.style.animationDelay = `${index * 40}ms`;
    card.setAttribute("id", song.id);

    const tagsHtml = song.vibes.map(vibe => `<span class="vibe-tag tag-${vibe.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '')}">${vibe}</span>`).join("");

    card.innerHTML = `
      <div class="card-glow-bg"></div>
      <div class="card-inner">
        <div class="card-header">
          <span class="vocalist-badge badge-${song.vocalistKey}">${song.vocalist}</span>
          <span class="release-year">${song.releaseYear}</span>
        </div>
        <h3 class="song-title">${song.title}</h3>
        <p class="song-japanese-title">${song.japaneseTitle}</p>
        <p class="song-producer">by ${song.producer}</p>
        <p class="song-description-summary">${song.description.slice(0, 110)}...</p>
        <div class="card-footer">
          <div class="vibes-list">${tagsHtml}</div>
          <button class="preview-btn" onclick="openSongDetail('${song.id}')">
            <span>Details & Listen</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/>
            </svg>
          </button>
        </div>
      </div>
    `;
    songGrid.appendChild(card);
  });
}

// Modal management
function openSongDetail(songId) {
  const song = SONGS.find(s => s.id === songId);
  if (!song) return;

  const vibesHtml = song.vibes.map(vibe => `<span class="vibe-tag tag-${vibe.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '')}">${vibe}</span>`).join("");
  
  modalContent.innerHTML = `
    <div class="modal-grid">
      <div class="modal-media">
        <div class="video-container">
          <iframe 
            src="https://www.youtube.com/embed/${song.youtubeId}?autoplay=1&enablejsapi=1" 
            title="${song.title} Video Preview" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
          </iframe>
        </div>
      </div>
      <div class="modal-info">
        <div class="modal-info-header">
          <span class="vocalist-badge badge-${song.vocalistKey}">${song.vocalist}</span>
          <span class="release-year">${song.releaseYear}</span>
        </div>
        <h2 class="modal-song-title">${song.title}</h2>
        <p class="modal-song-japanese-title">${song.japaneseTitle}</p>
        <p class="modal-song-producer">Produced by <strong>${song.producer}</strong></p>
        
        <div class="modal-tags">${vibesHtml}</div>
        
        <div class="modal-description">
          <h3>Curator's Recommendation Notes</h3>
          <p>${song.description}</p>
        </div>
        
        <div class="modal-links">
          <h3>Official Platforms</h3>
          <div class="link-buttons">
            <a href="${song.links.youtube}" target="_blank" class="platform-link link-youtube">
              <svg class="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M23.498 6.163c-.272-1.02-.1.018-2.222-1.02a28.002 28.002 0 00-18.552 0C.502 5.143.084 6.163.084 6.163S0 7.788 0 9.413v5.174c0 1.625.084 3.25.084 3.25s.418 1.02 2.62 1.02a28.002 28.002 0 0018.552 0c2.202 0 2.62-1.02 2.62-1.02s.084-1.625.084-3.25V9.413c0-1.625-.084-3.25-.084-3.25zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Watch on YouTube
            </a>
            ${song.links.spotify ? `
            <a href="${song.links.spotify}" target="_blank" class="platform-link link-spotify">
              <svg class="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.565.387-.86.207-2.377-1.454-5.37-1.783-8.893-.982-.336.075-.668-.135-.744-.47-.077-.337.135-.669.47-.745 3.848-.88 7.14-.51 9.82 1.13.296.18.387.563.207.86zm1.224-2.724c-.226.367-.707.487-1.074.26-2.72-1.672-6.87-2.157-10.076-1.183-.412.125-.845-.107-.97-.52-.124-.412.108-.845.52-.97 3.666-1.112 8.232-.574 11.34 1.338.367.226.488.707.26 1.075zm.105-2.822C14.752 8.92 9.57 8.75 6.585 9.654c-.475.144-.976-.127-1.12-.601-.144-.476.126-.977.601-1.12 3.447-1.046 9.176-.85 12.836 1.32.428.254.57.805.317 1.233-.254.428-.804.57-1.232.317z"/>
              </svg>
              Listen on Spotify
            </a>` : ""}
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("active");
  modalContent.innerHTML = "";
  document.body.style.overflow = "";
}
window.openSongDetail = openSongDetail;
