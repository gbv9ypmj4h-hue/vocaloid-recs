// Default Vocaloid Songs Database (Curator's Recommended Picks)
const DEFAULT_SONGS = [
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
    description_en: "The ultimate Vocaloid anthem. As the curator, I highly recommend this as a prime example of the 'Tsundere Princess' character building in music. ryo's pop-rock composition is simple yet incredibly catchy, proving how a song can define a virtual singer's global personality.",
    description_ja: "ボカロ界における究極のアンセム。音楽を通じた『ツンデレお姫様』のキャラクター構築の最高傑作として、キュレーター一押しの曲です。ryo氏によるポップロック構成はシンプルながら非常にキャッチーで、歌声とキャラクターが世界的な熱狂を生む過程を体現しています。",
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
    description_en: "A fast-paced masterpiece blending traditional Japanese scales with Western rock chord progressions. I selected this because the instrumentation techniques are stellar—rapid-fire shamisen-like synthesizer runs and guitar solos that create a grand, nostalgic atmosphere of early 20th-century Japan.",
    description_ja: "和風の音階と西洋のロックを高速テンポで融合させた大傑作。三味線を思わせるシンセサイザーの高速フレーズやドラマチックなギターソロなど、大正浪漫風のノスタルジックな世界観を作り出す緻密な楽器編曲テクニックが本当に素晴らしい一曲です。",
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
    description_en: "This song represents the soul of the Vocaloid community. Commisioned for a Google Chrome commercial, it speaks of connecting the dots of individual creativity. I choose this for those days you feel down; its soaring synthesizer hook and optimistic scale will immediately lift your spirits.",
    description_ja: "ボカロコミュニティの「魂」を表現した曲。Google ChromeのCMソングとして書き下ろされ、個々のクリエイティビティが繋がっていく様子を歌っています。気分が落ち込んでいる日にぜひ聴いてほしい、背中を押してくれる希望に満ちたEDMポップスです。",
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
    description_en: "A powerful rock song dealing with self-deception and lies. I recommend it for DECO*27's brilliant use of Hatsune Miku's 'growl' tuning in the chorus. The song structure is mathematically satisfying, building tension up to a massive vocal release.",
    description_ja: "自己欺瞞と嘘をテーマにした力強いロック。サビでMikuの「グロウル（がなり声）」機能を巧みに使った、感情的でハードな調声が光ります。Bメロからサビにかけての緊張感の高まりと、一気に解放される構成が音楽的に非常に美しい曲です。",
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
    description_en: "An incredibly stylish rock duet between Kagamine Rin and the producer MikitoP himself. I chose this because of its masterfully composed bass groove and call-and-response dynamics, which make it a perfect song to blast in your headphones to shake off bad moods.",
    description_ja: "鏡音リンとボカロPみきとP本人による、最高にスタイリッシュなロックデュエット。ベースラインの抜群のグルーヴ感と、掛け合いボーカルが心地よく、イヤホンで大音量で聴くだけでモヤモヤした気分を吹き飛ばしてくれる一曲です。",
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
    description_en: "A heavy alternative rock song criticizing the crushing academic pressure on youth. I selected this because of Neru's dark songwriting style and Rin's high, desperate vocal register. The story of school alienation is told with raw, unfiltered emotion.",
    description_ja: "若者を追い詰める学歴社会や教育システムを批判した、重厚なオルタナティブロック。Neru氏のダークなソングライティングと、限界まで張り詰めたリンの高音ボーカルが絶妙にマッチしており、思春期の葛藤がリアルに表現されています。",
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
    description_en: "A gorgeous R&B/synth-pop track documenting a couple realizing their love has run its course. I recommend this for its sophisticated chord transitions and mature lyrical framing. It stands out in Vocaloid history as an early narrative masterpiece.",
    description_ja: "愛が終わってしまったことを悟った男女の葛藤を描いた、お洒落なR&B/シンセポップ。大人びた切ない歌詞と、洗練されたコード進行、心地よいミドルテンポのビートが融合した、ストーリー仕立ての初期の名作です。",
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
    description_en: "An English Vocaloid sensation. Crusher-P's electro-house beats and GUMI's slightly robotic English delivery create a chilling atmosphere of confusion. I selected this for its stellar dubstep production and intense rhythmic techniques.",
    description_ja: "海外からボカロ界に衝撃を与えた全編英語曲。Crusher-P氏によるダークなエレクトロハウスビートと、GUMIの少しロボット的な英語調声が、心理的な混沌を見事に表現しています。間奏のヘビーなダブステップなど、作曲技法も光ります。",
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
    description_en: "A satirical critique of internet herd-mentality. I choose this because PinocchioP is a genius songwriter: the vocal programming alternates between rapid talk-singing and high vibrato, accompanied by a chaotic, highly technical offbeat electro-swing rhythm.",
    description_ja: "ネット上の思考停止や「神聖視」の風潮を皮肉った社会風刺曲。早口の台詞調の歌い方と超高音ビブラートを交互に操る驚異的な調声技術と、複雑でトリッキーなエレクトロ・スウィング風の変則ビートが絡み合う、鬼才ピノキオピー氏の真骨頂です。",
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
    description_en: "The anthem of introverts wanting to live life on their own terms. I choose this as an absolute mood booster; the tempo is incredibly fast, and the uplifting pop-punk hook will instantly make you want to dance and leave your worries behind.",
    description_ja: "引きこもりであることを誇り、我が道を往く若者の心情を軽快に歌ったポップス。超高速ながら耳に残るキャッチーなサビメロディが魅力で、聴くだけで気分をアゲてくれる、TikTok等でも社会現象となった明るい応援歌です。",
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
    description_en: "A tragic folklore story of an outcast child who finds temporary comfort. I highly recommend this for its emotional intensity. The song's drum and keyboard composition goes at lightning speed, showcasing peak high-tempo emotional rock composition.",
    description_ja: "忌み子として虐げられた少年と少女の悲劇的な友情の物語。圧倒的な疾走感とエモーショナルな旋律が特徴で、高速なドラムと流麗なキーボードアレンジがドラマを極限まで盛り上げる、高テンポ・エモロックの頂点です。",
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
    description_en: "An infectious pop-rock song featuring clever wordplay and addictive phrasing. I recommend it as a masterclass in modern vocal hook structure: every section is a hook, making it an excellent upbeat song to energize yourself.",
    description_ja: "依存的な愛を吸血鬼のモチーフで表現した、中毒性の高いポップロック。全てのパートがサビかと思わせるほどキャッチーなメロディが隙間なく配置されており、聴くだけでモチベーションを上げたい時に最適な、現代ボカロポップの教科書と言える曲です。",
    links: {
      youtube: "https://www.youtube.com/watch?v=e1xCOsgWG0M",
      spotify: "https://open.spotify.com/track/0U8hM5kO4W3T2vV6F1SgD3"
    }
  }
];

// Static Page Translations Dictionary
const DEFAULT_TRANSLATIONS = {
  en: {
    nav_picks: "Picks Showcase",
    nav_about: "What is Vocaloid?",
    hero_title_left: "My Handpicked ",
    hero_title_accent: "Vocaloid Guide",
    hero_subtitle: "Welcome to my personal archive of Vocaloid masterpieces. From songs that will lift your spirits when feeling down, to tracks with mind-blowing music theory and technical wizardry.",
    btn_primary: "Browse My Picks",
    btn_secondary: "What is this?",
    section_title: "The Curator's Catalog",
    section_desc: "Explore tracks categorized by creative songwriting techniques, themes, and emotional vibes.",
    search_placeholder: "Search by song name, Japanese title, vocal, or notes...",
    label_producer: "Producer",
    label_themes: "Curator's Themes",
    filter_all: "All",
    filter_all_themes: "All Themes",
    filter_others: "Other Producers",
    theme_cheer: "Cheer Up (Low Moods)",
    theme_tech: "Insane Tech (Composition)",
    theme_dark: "Dark & Deep (Heavy)",
    theme_story: "Storytelling",
    theme_classic: "Legendary Classics",
    about_tag: "An Introduction",
    about_title: "What is Vocaloid?",
    about_p1: "Developed by Yamaha, <strong>Vocaloid</strong> is a singing synthesizer voice software that enables composers and musicians to write songs using virtual singer personas. Users input melody and lyrics, and the engine synthesizes vocals using recorded voice libraries from real actors.",
    about_p2: "What began as simple musical software quickly transformed into a global, user-driven cultural phenomenon. Unlike traditional music where a single record label controls characters, Vocaloid songs are created independently by thousands of individual producers (often called 'P').",
    about_p3: "From cyber-pop concerts to orchestral arrangements and viral TikTok tracks, Vocaloid represents a collaborative universe where the boundary between virtual characters and human creators is beautifully blurred.",
    stat_p1: "Original Songs Released",
    stat_p2: "Years of History",
    stat_p3: "of Global Creators & Fans",
    stat_p4: "3D Live Concerts Worldwide",
    footer_tagline: "Curating the digital voice generation for English audiences.",
    footer_nav: "Navigation",
    footer_home: "Home",
    footer_catalog: "Music Catalog",
    footer_about: "About Vocaloid",
    footer_credits_title: "Credits",
    footer_credits_desc: "Created as a public guide. Songs and videos belong to their respective producers and artists.",
    footer_copy: "&copy; 2026 Vocaloid Essentials. Built for the global synthesizer community."
  },
  ja: {
    nav_picks: "おすすめセレクション",
    nav_about: "ボカロとは？",
    hero_title_left: "管理人の一押し ",
    hero_title_accent: "ボカロ音楽ガイド",
    hero_subtitle: "ボカロが大好きな管理人が厳選した名曲アーカイブへようこそ！落ち込んでいる時に元気をもらえる曲から、音楽理論や調声技術の限界に挑む超絶技巧トラックまで幅広く紹介します。",
    btn_primary: "おすすめを見る",
    btn_secondary: "ガイドについて",
    section_title: "管理人厳選カタログ",
    section_desc: "作曲技術、表現テーマ、聴いた時の感情やムード別にボカロの名曲を解説付きで紹介します。",
    search_placeholder: "曲名、日本語名、ボーカル、紹介文から検索...",
    label_producer: "作者 (プロデューサー)",
    label_themes: "おすすめカテゴリ",
    filter_all: "すべて",
    filter_all_themes: "すべてのカテゴリ",
    filter_others: "その他プロデューサー",
    theme_cheer: "落ち込んだときに聴く曲",
    theme_tech: "曲構成・技術がすごい曲",
    theme_dark: "ダーク・深遠な曲",
    theme_story: "ストーリー・物語性の高い曲",
    theme_classic: "伝説的殿堂入り名曲",
    about_tag: "イントロダクション",
    about_title: "ボーカロイドとは？",
    about_p1: "ヤマハが開発した音声合成技術<strong>VOCALOID（ボーカロイド）</strong>は、メロディと歌詞を入力するだけで、仮想のキャラクターシンガーに歌を歌わせることができる音楽ソフトです。プロの声優や歌手の声をベースに録音された音声ライブラリを使用します。",
    about_p2: "単なるDTMソフトとして始まったボカロは、瞬く間にユーザー主導の世界的な文化現象へと変貌を遂げました。レコード会社が歌手を管理する従来の音楽とは異なり、ネット上の何万人もの独立した制作者（通称『ボカロP』）が自由に楽曲を創り出しています。",
    about_p3: "バーチャルライブからオーケストラ、動画配信での世界的流行まで、ボカロは『キャラクター』『クリエイター』そして『ファン』の境界を心地よく曖昧にする、共同創作の宇宙を形成しています。",
    stat_p1: "リリースされたオリジナル曲",
    stat_p2: "ボーカロイドの歴史",
    stat_p3: "世界中のファンと制作者",
    stat_p4: "世界3Dライブツアー",
    footer_tagline: "世界のボカロファンに向けてデジタル音声世代の魅力を発信しています。",
    footer_nav: "ナビゲーション",
    footer_home: "ホーム",
    footer_catalog: "ミュージックカタログ",
    footer_about: "ボカロについて",
    footer_credits_title: "クレジット",
    footer_credits_desc: "本サイトは個人のファンサイトです。掲載されている楽曲・動画・キャラクターの権利は各制作者および企業に帰属します。",
    footer_copy: "&copy; 2026 Vocaloid Essentials. ボカロ文化の発展を願って。"
  }
};

// State Variables (Loading Cached edits if available)
let activeLang = localStorage.getItem("vocaloid_lang") || "en";
let editMode = false;

let SONGS = JSON.parse(localStorage.getItem("vocaloid_songs")) || DEFAULT_SONGS;
let TRANSLATIONS = JSON.parse(localStorage.getItem("vocaloid_translations")) || DEFAULT_TRANSLATIONS;

let activeFilters = {
  search: "",
  producer: "all",
  category: "all"
};

// DOM Elements
let songGrid, searchInput, clearSearchBtn, producerFiltersContainer, categoryFiltersContainer;
let modal, modalContent, modalClose;
let langToggleEn, langToggleJa, adminBtn, cmsPanel, resetBtn, exportBtn;

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  // Bind Static DOM Elements
  songGrid = document.getElementById("song-grid");
  searchInput = document.getElementById("search-input");
  clearSearchBtn = document.getElementById("clear-search");
  producerFiltersContainer = document.getElementById("producer-filters");
  categoryFiltersContainer = document.getElementById("category-filters");
  modal = document.getElementById("song-modal");
  modalContent = document.getElementById("modal-detail-content");
  modalClose = document.getElementById("modal-close");

  // Load Custom CMS UI Components dynamically
  initializeCmsInterface();

  // Apply Language & Load Static Text
  updateLanguageUI();
  renderSongs();
  setupEventListeners();
});

// Create CMS Controls in the DOM
function initializeCmsInterface() {
  // 1. Language Toggle in Nav Bar
  const navLinks = document.querySelector(".nav-links");
  const langToggleContainer = document.createElement("div");
  langToggleContainer.className = "lang-switcher";
  langToggleContainer.innerHTML = `
    <button id="lang-btn-en" class="lang-btn ${activeLang === "en" ? "active" : ""}">EN</button>
    <span class="lang-separator">/</span>
    <button id="lang-btn-ja" class="lang-btn ${activeLang === "ja" ? "active" : ""}">JA</button>
  `;
  navLinks.parentNode.insertBefore(langToggleContainer, navLinks.nextSibling);

  langToggleEn = document.getElementById("lang-btn-en");
  langToggleJa = document.getElementById("lang-btn-ja");

  // 2. Floating Admin Gear Button
  adminBtn = document.createElement("button");
  adminBtn.id = "cms-admin-trigger";
  adminBtn.className = "cms-admin-btn";
  adminBtn.title = "Toggle Edit Mode";
  adminBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.43l-1.003.828c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.43l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.991l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.645-.869L9.594 3.94z"/>
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
    </svg>
  `;
  document.body.appendChild(adminBtn);

  // 3. Floating CMS Save Panel at the bottom
  cmsPanel = document.createElement("div");
  cmsPanel.id = "cms-floating-panel";
  cmsPanel.className = "cms-save-panel";
  cmsPanel.innerHTML = `
    <div class="cms-panel-content">
      <div class="cms-panel-text">
        <span class="cms-indicator-dot"></span>
        <strong id="cms-panel-status">Edit Mode Active: Double-click any text to change</strong>
      </div>
      <div class="cms-panel-actions">
        <button id="cms-reset-btn" class="btn-cms-reset">Reset Defaults</button>
        <button id="cms-export-btn" class="btn-cms-export">Export app.js</button>
      </div>
    </div>
  `;
  document.body.appendChild(cmsPanel);

  resetBtn = document.getElementById("cms-reset-btn");
  exportBtn = document.getElementById("cms-export-btn");
}

// Translate Page Static Labels
function updateLanguageUI() {
  // Update translation on elements containing data-translate-key
  document.querySelectorAll("[data-translate-key]").forEach(el => {
    const key = el.getAttribute("data-translate-key");
    if (TRANSLATIONS[activeLang] && TRANSLATIONS[activeLang][key] !== undefined) {
      el.innerHTML = TRANSLATIONS[activeLang][key];
    }
  });

  // Update input placeholder dynamically
  if (searchInput) {
    searchInput.placeholder = TRANSLATIONS[activeLang]["search_placeholder"];
  }

  // Update floating panel status
  const panelStatus = document.getElementById("cms-panel-status");
  if (panelStatus) {
    panelStatus.textContent = activeLang === "ja" 
      ? "編集モード有効：テキスト部分を直接ダブルクリックして編集できます"
      : "Edit Mode Active: Double-click any text elements on screen to edit";
  }

  const resetLabel = document.getElementById("cms-reset-btn");
  if (resetLabel) {
    resetLabel.textContent = activeLang === "ja" ? "リセット" : "Reset Defaults";
  }

  const exportLabel = document.getElementById("cms-export-btn");
  if (exportLabel) {
    exportLabel.textContent = activeLang === "ja" ? "設定ファイル出力" : "Export app.js";
  }
}

// Setup Event Listeners
function setupEventListeners() {
  // Language switcher EN click
  langToggleEn.addEventListener("click", () => {
    if (activeLang === "en") return;
    activeLang = "en";
    localStorage.setItem("vocaloid_lang", "en");
    langToggleEn.classList.add("active");
    langToggleJa.classList.remove("active");
    updateLanguageUI();
    renderSongs();
    applyCmsEditableStates();
  });

  // Language switcher JA click
  langToggleJa.addEventListener("click", () => {
    if (activeLang === "ja") return;
    activeLang = "ja";
    localStorage.setItem("vocaloid_lang", "ja");
    langToggleJa.classList.add("active");
    langToggleEn.classList.remove("active");
    updateLanguageUI();
    renderSongs();
    applyCmsEditableStates();
  });

  // Floating admin button toggle
  adminBtn.addEventListener("click", () => {
    editMode = !editMode;
    adminBtn.classList.toggle("active", editMode);
    cmsPanel.classList.toggle("active", editMode);
    applyCmsEditableStates();
  });

  // Reset local edits
  resetBtn.addEventListener("click", () => {
    if (confirm(activeLang === "ja" ? "編集をすべてリセットして初期値に戻しますか？" : "Are you sure you want to discard all custom edits and reset to default?")) {
      localStorage.removeItem("vocaloid_songs");
      localStorage.removeItem("vocaloid_translations");
      SONGS = JSON.parse(JSON.stringify(DEFAULT_SONGS));
      TRANSLATIONS = JSON.parse(JSON.stringify(DEFAULT_TRANSLATIONS));
      updateLanguageUI();
      renderSongs();
      applyCmsEditableStates();
      alert(activeLang === "ja" ? "初期状態に戻しました。" : "Reset completed successfully.");
    }
  });

  // Export current configuration
  exportBtn.addEventListener("click", exportConfigurationFile);

  // Search input
  searchInput.addEventListener("input", (e) => {
    activeFilters.search = e.target.value.toLowerCase();
    toggleClearButton();
    renderSongs();
    applyCmsEditableStates();
  });

  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    activeFilters.search = "";
    toggleClearButton();
    renderSongs();
    applyCmsEditableStates();
  });

  // Producer filter buttons
  producerFiltersContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;

    producerFiltersContainer.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    activeFilters.producer = btn.dataset.producer;
    renderSongs();
    applyCmsEditableStates();
  });

  // Category filter buttons
  categoryFiltersContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;

    categoryFiltersContainer.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    activeFilters.category = btn.dataset.category;
    renderSongs();
    applyCmsEditableStates();
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

// Toggle clear search button
function toggleClearButton() {
  if (activeFilters.search.length > 0) {
    clearSearchBtn.style.display = "flex";
  } else {
    clearSearchBtn.style.display = "none";
  }
}

// Toggle Inline Editing Status (contenteditable)
function applyCmsEditableStates() {
  // Elements that are tied to static TRANSLATIONS dictionary
  document.querySelectorAll("[data-translate-key]").forEach(el => {
    if (editMode) {
      el.setAttribute("contenteditable", "true");
      el.classList.add("cms-editable");
      
      // Store modified content back to state dictionary on blur
      el.onblur = () => {
        const key = el.getAttribute("data-translate-key");
        TRANSLATIONS[activeLang][key] = el.innerHTML.trim();
        localStorage.setItem("vocaloid_translations", JSON.stringify(TRANSLATIONS));
      };
    } else {
      el.removeAttribute("contenteditable");
      el.classList.remove("cms-editable");
      el.onblur = null;
    }
  });

  // Elements inside Song Cards
  document.querySelectorAll(".song-card").forEach(card => {
    const songId = card.getAttribute("id");
    const songObj = SONGS.find(s => s.id === songId);
    if (!songObj) return;

    const titleEl = card.querySelector(".song-title");
    const jTitleEl = card.querySelector(".song-japanese-title");
    const descEl = card.querySelector(".song-description-summary");

    if (editMode) {
      // Title
      titleEl.setAttribute("contenteditable", "true");
      titleEl.classList.add("cms-editable-card");
      titleEl.onblur = () => {
        songObj.title = titleEl.textContent.trim();
        saveSongsState();
      };

      // Japanese Title
      jTitleEl.setAttribute("contenteditable", "true");
      jTitleEl.classList.add("cms-editable-card");
      jTitleEl.onblur = () => {
        songObj.japaneseTitle = jTitleEl.textContent.trim();
        saveSongsState();
      };

      // Card Description Summary (triggers update of language-specific full description placeholder)
      descEl.setAttribute("contenteditable", "true");
      descEl.classList.add("cms-editable-card");
      descEl.onblur = () => {
        const value = descEl.textContent.trim();
        if (activeLang === "en") {
          songObj.description_en = value;
        } else {
          songObj.description_ja = value;
        }
        saveSongsState();
      };
    } else {
      titleEl.removeAttribute("contenteditable");
      titleEl.classList.remove("cms-editable-card");
      titleEl.onblur = null;

      jTitleEl.removeAttribute("contenteditable");
      jTitleEl.classList.remove("cms-editable-card");
      jTitleEl.onblur = null;

      descEl.removeAttribute("contenteditable");
      descEl.classList.remove("cms-editable-card");
      descEl.onblur = null;
    }
  });
}

function saveSongsState() {
  localStorage.setItem("vocaloid_songs", JSON.stringify(SONGS));
}

// Filter and render songs
function renderSongs() {
  const filteredSongs = SONGS.filter(song => {
    const desc = activeLang === "en" ? song.description_en : song.description_ja;
    const matchesSearch = 
      song.title.toLowerCase().includes(activeFilters.search) ||
      song.japaneseTitle.toLowerCase().includes(activeFilters.search) ||
      song.producer.toLowerCase().includes(activeFilters.search) ||
      song.vocalist.toLowerCase().includes(activeFilters.search) ||
      desc.toLowerCase().includes(activeFilters.search);
    
    const matchesProducer = activeFilters.producer === "all" || song.producerKey === activeFilters.producer;
    const matchesCategory = activeFilters.category === "all" || song.vibes.includes(activeFilters.category);

    return matchesSearch && matchesProducer && matchesCategory;
  });

  songGrid.innerHTML = "";

  if (filteredSongs.length === 0) {
    const errorText = activeLang === "ja" 
      ? "おすすめの楽曲が見つかりませんでした。条件を変更してお試しください！"
      : "No recommended songs match your criteria. Try adjusting your filters or search query!";
    
    songGrid.innerHTML = `
      <div class="no-results animate-fade-in">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"/>
        </svg>
        <p>${errorText}</p>
      </div>
    `;
    return;
  }

  filteredSongs.forEach((song, index) => {
    const card = document.createElement("div");
    card.className = `song-card card-${song.vocalistKey} animate-fade-in`;
    card.style.animationDelay = `${index * 40}ms`;
    card.setAttribute("id", song.id);

    const tagsHtml = song.vibes.map(vibe => {
      // Find category key for tag rendering from vibe mappings
      const translatedVibe = activeLang === "ja" ? (TRANSLATIONS["ja"]["theme_" + getVibeKey(vibe)] || vibe) : vibe;
      return `<span class="vibe-tag tag-${vibe.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '')}">${translatedVibe}</span>`;
    }).join("");

    const displayDesc = activeLang === "en" ? song.description_en : song.description_ja;
    const detailsLabel = activeLang === "ja" ? "詳細 & 視聴" : "Details & Listen";

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
        <p class="song-description-summary">${displayDesc}</p>
        <div class="card-footer">
          <div class="vibes-list">${tagsHtml}</div>
          <button class="preview-btn" onclick="openSongDetail('${song.id}')">
            <span>${detailsLabel}</span>
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

function getVibeKey(vibe) {
  if (vibe === "Cheer Up") return "cheer";
  if (vibe === "Insane Tech") return "tech";
  if (vibe === "Dark & Deep") return "dark";
  if (vibe === "Masterpiece Story") return "story";
  if (vibe === "Legendary") return "classic";
  return "classic";
}

// Modal management
function openSongDetail(songId) {
  const song = SONGS.find(s => s.id === songId);
  if (!song) return;

  const vibesHtml = song.vibes.map(vibe => {
    const translatedVibe = activeLang === "ja" ? (TRANSLATIONS["ja"]["theme_" + getVibeKey(vibe)] || vibe) : vibe;
    return `<span class="vibe-tag tag-${vibe.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '')}">${translatedVibe}</span>`;
  }).join("");

  const labelAbout = activeLang === "ja" ? "管理人のおすすめ解説" : "Curator's Recommendation Notes";
  const labelPlatforms = activeLang === "ja" ? "公式配信プラットフォーム" : "Official Platforms";
  const labelYoutube = activeLang === "ja" ? "YouTubeで見る" : "Watch on YouTube";
  const labelSpotify = activeLang === "ja" ? "Spotifyで聴く" : "Listen on Spotify";

  const displayDesc = activeLang === "en" ? song.description_en : song.description_ja;
  
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
          <h3>${labelAbout}</h3>
          <p id="cms-modal-desc-target">${displayDesc}</p>
        </div>
        
        <div class="modal-links">
          <h3>${labelPlatforms}</h3>
          <div class="link-buttons">
            <a href="${song.links.youtube}" target="_blank" class="platform-link link-youtube">
              <svg class="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M23.498 6.163c-.272-1.02-.1.018-2.222-1.02a28.002 28.002 0 00-18.552 0C.502 5.143.084 6.163.084 6.163S0 7.788 0 9.413v5.174c0 1.625.084 3.25.084 3.25s.418 1.02 2.62 1.02a28.002 28.002 0 0018.552 0c2.202 0 2.62-1.02 2.62-1.02s.084-1.625.084-3.25V9.413c0-1.625-.084-3.25-.084-3.25zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              ${labelYoutube}
            </a>
            ${song.links.spotify ? `
            <a href="${song.links.spotify}" target="_blank" class="platform-link link-spotify">
              <svg class="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.565.387-.86.207-2.377-1.454-5.37-1.783-8.893-.982-.336.075-.668-.135-.744-.47-.077-.337.135-.669.47-.745 3.848-.88 7.14-.51 9.82 1.13.296.18.387.563.207.86zm1.224-2.724c-.226.367-.707.487-1.074.26-2.72-1.672-6.87-2.157-10.076-1.183-.412.125-.845-.107-.97-.52-.124-.412.108-.845.52-.97 3.666-1.112 8.232-.574 11.34 1.338.367.226.488.707.26 1.075zm.105-2.822C14.752 8.92 9.57 8.75 6.585 9.654c-.475.144-.976-.127-1.12-.601-.144-.476.126-.977.601-1.12 3.447-1.046 9.176-.85 12.836 1.32.428.254.57.805.317 1.233-.254.428-.804.57-1.232.317z"/>
              </svg>
              ${labelSpotify}
            </a>` : ""}
          </div>
        </div>
      </div>
    </div>
  `;

  // Inline editing in Modal description
  const modalDescEl = document.getElementById("cms-modal-desc-target");
  if (editMode && modalDescEl) {
    modalDescEl.setAttribute("contenteditable", "true");
    modalDescEl.classList.add("cms-editable-card");
    modalDescEl.onblur = () => {
      const textVal = modalDescEl.textContent.trim();
      if (activeLang === "en") {
        song.description_en = textVal;
      } else {
        song.description_ja = textVal;
      }
      saveSongsState();
      renderSongs(); // Update main card list description summary
    };
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("active");
  modalContent.innerHTML = "";
  document.body.style.overflow = "";
}

// Visual CMS: Compile current states and generate new self-contained app.js code string for direct export
function exportConfigurationFile() {
  // Re-read app.js boilerplate and inject the compiled database and translations
  let exportCode = `// Vocaloid Essentials - Compiled Code with Personal Edits
// Save/Rename this file as 'app.js' and place it in the project root directory.

const DEFAULT_SONGS = ${JSON.stringify(SONGS, null, 2)};

const DEFAULT_TRANSLATIONS = ${JSON.stringify(TRANSLATIONS, null, 2)};

// State Variables
let activeLang = localStorage.getItem("vocaloid_lang") || "en";
let editMode = false;

let SONGS = JSON.parse(localStorage.getItem("vocaloid_songs")) || DEFAULT_SONGS;
let TRANSLATIONS = JSON.parse(localStorage.getItem("vocaloid_translations")) || DEFAULT_TRANSLATIONS;

let activeFilters = {
  search: "",
  producer: "all",
  category: "all"
};

let songGrid, searchInput, clearSearchBtn, producerFiltersContainer, categoryFiltersContainer;
let modal, modalContent, modalClose;
let langToggleEn, langToggleJa, adminBtn, cmsPanel, resetBtn, exportBtn;

document.addEventListener("DOMContentLoaded", () => {
  songGrid = document.getElementById("song-grid");
  searchInput = document.getElementById("search-input");
  clearSearchBtn = document.getElementById("clear-search");
  producerFiltersContainer = document.getElementById("producer-filters");
  categoryFiltersContainer = document.getElementById("category-filters");
  modal = document.getElementById("song-modal");
  modalContent = document.getElementById("modal-detail-content");
  modalClose = document.getElementById("modal-close");

  initializeCmsInterface();
  updateLanguageUI();
  renderSongs();
  setupEventListeners();
});

${initializeCmsInterface.toString()}

${updateLanguageUI.toString()}

${setupEventListeners.toString()}

${toggleClearButton.toString()}

${applyCmsEditableStates.toString()}

${saveSongsState.toString()}

${renderSongs.toString()}

${getVibeKey.toString()}

${openSongDetail.toString()}

${closeModal.toString()}

${exportConfigurationFile.toString()}

window.openSongDetail = openSongDetail;
`;

  // Trigger file download in browser
  const blob = new Blob([exportCode], { type: "application/javascript" });
  const url = URL.createObjectURL(blob);
  const tempLink = document.createElement("a");
  tempLink.href = url;
  tempLink.download = "app.js";
  document.body.appendChild(tempLink);
  tempLink.click();
  
  // Cleanup
  document.body.removeChild(tempLink);
  URL.revokeObjectURL(url);
}

// Bind to window for HTML click calls
window.openSongDetail = openSongDetail;
