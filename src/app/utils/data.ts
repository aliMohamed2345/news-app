import { IoShieldOutline, IoEyeOutline } from "react-icons/io5";
import { IoTrendingUp } from "react-icons/io5";
import { FiZap, FiSmartphone, FiGlobe } from "react-icons/fi";
import { IoSearch, IoSettingsOutline } from "react-icons/io5";
import { FaRegStar, FaRegClock } from "react-icons/fa";
export const newsCategories = [
  { name: `business`, id: 1 },
  { name: `entertainment`, id: 2 },
  { name: `general`, id: 3 },
  { name: `health`, id: 4 },
  { name: `science`, id: 5 },
  { name: `sports`, id: 6 },
  { name: `technology`, id: 7 },
];
export const features = [
  {
    icon: IoTrendingUp,
    title: "Trending News",
    description:
      "Discover the most popular and viral stories of the moment. Stay ahead of the curve with what everyone is talking about.",
    colorClass: "bg-feature-red",
    benefits: [
      "Real-time trending analysis",
      "Social media integration",
      "Viral story detection",
      "Global trend tracking",
    ],
  },
  {
    icon: FiGlobe,
    title: "Categories",
    description:
      "Explore news by specific topics including Business, Technology, Sports, and more. Find exactly what interests you.",
    colorClass: "bg-feature-blue",
    benefits: [
      "15+ news categories",
      "Expert curation",
      "Topic-specific insights",
      "Custom category creation",
    ],
  },
  {
    icon: IoSearch,
    title: "Advanced Search",
    description:
      "Find specific articles with powerful search filters. Search by keywords, date range, source, and category.",
    colorClass: "bg-feature-green",
    benefits: [
      "Smart search algorithms",
      "Advanced filtering",
      "Date range selection",
      "Source-specific search",
    ],
  },
  {
    icon: FaRegStar,
    title: "Bookmark",
    description:
      "Save articles to read later. Your personal collection of interesting stories is always accessible.",
    colorClass: "bg-feature-yellow",
    benefits: [
      "Unlimited bookmarks",
      "Organized collections",
      "Cross-device sync",
      "Quick access",
    ],
  },
  {
    icon: FaRegClock,
    title: "Recent Articles",
    description:
      "Keep track of what you've read. Your reading history helps you find articles you viewed before.",
    colorClass: "bg-feature-purple",
    benefits: [
      "Complete reading history",
      "Smart recommendations",
      "Reading analytics",
      "Quick re-access",
    ],
  },
  {
    icon: IoSettingsOutline,
    title: "Personalization",
    description:
      "Customize your news experience. Adjust preferences, manage notifications, and set your reading preferences.",
    colorClass: "bg-feature-gray",
    benefits: [
      "Custom preferences",
      "Notification control",
      "Theme selection",
      "Reading settings",
    ],
  },
];

export const stats = [
  {
    number: "10K+",
    label: "Daily Articles",
    description: "Fresh content updated every minute",
  },
  {
    number: "50+",
    label: "News Sources",
    description: "Trusted publishers worldwide",
  },
  {
    number: "24/7",
    label: "Real-time Updates",
    description: "Never miss breaking news",
  },
  {
    number: "1M+",
    label: "Happy Readers",
    description: "Join our growing community",
  },
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Analyst",
    avatar: "👩‍💼",
    quote:
      "NewsHub has revolutionized how I stay informed. The trending section helps me catch stories before they go viral.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Tech Entrepreneur",
    avatar: "👨‍💻",
    quote:
      "The advanced search and bookmark features are game-changers. I can find and save exactly what I need.",
    rating: 5,
  },
  {
    name: "Emma Davis",
    role: "Marketing Director",
    avatar: "👩‍🎨",
    quote:
      "Love the personalization options! The app learns my preferences and shows me the most relevant news.",
    rating: 5,
  },
];

export const whyChooseUs = [
  {
    icon: IoShieldOutline,
    title: "Trusted Sources",
    description:
      "We partner only with verified, credible news organizations to ensure accuracy and reliability.",
  },
  {
    icon: FiZap,
    title: "Lightning Fast",
    description:
      "Our optimized platform delivers news faster than ever, with instant loading and smooth navigation.",
  },
  {
    icon: IoEyeOutline,
    title: "Ad-Free Experience",
    description:
      "Focus on what matters most - the news. No distracting ads or intrusive pop-ups.",
  },
  {
    icon: FiSmartphone,
    title: "Mobile Optimized",
    description:
      "Perfect experience across all devices. Read news seamlessly on phone, tablet, or desktop.",
  },
];

export const newsCategoriesLandingPage = [
  { name: "Business", icon: "📈", count: "2.5K articles" },
  { name: "Technology", icon: "💻", count: "3.2K articles" },
  { name: "Sports", icon: "⚽", count: "1.8K articles" },
  { name: "Health", icon: "🏥", count: "1.5K articles" },
  { name: "Entertainment", icon: "🎬", count: "2.1K articles" },
  { name: "Science", icon: "🔬", count: "900 articles" },
];

export const mockNewsArticles = [
{
source: {
id: null,
name: "Xataka.com"
},
author: "Alberto García",
title: "Traca final del Red friday y Semana web gaming. Cinco ofertas para aprovechar las campañas de MediaMarkt durante el fin de semana",
description: "Dentro de unas semanas se celebrará el próximo Amazon Prime Day 2025 y las tiendas ya están lanzando campañas muy potentes en lo relativo a ofertas. MediaMarkt ahora mismo, y hasta el próximo 1 de julio, tiene activas dos campañas muy grandes: la Traca final …",
url: "https://www.xataka.com/seleccion/traca-final-red-friday-semana-web-gaming-cinco-ofertas-para-aprovechar-campanas-mediamarkt-durante-fin-semana",
urlToImage: "https://i.blogs.es/e9a2ed/mediamarkt/840_560.jpeg",
publishedAt: "2025-06-29T08:30:05Z",
content: "Dentro de unas semanas se celebrará el próximo Amazon Prime Day 2025 y las tiendas ya están lanzando campañas muy potentes en lo relativo a ofertas. MediaMarkt ahora mismo, y hasta el próximo 1 de ju… [+3707 chars]"
},
{
source: {
id: null,
name: "Gizmodo.com"
},
author: "Gizmodo Deals",
title: "If You Own an iPhone, Amazon Is Offering a Free AirTag Just Before Prime Day",
description: "To get your free AirTag, you’ll need to buy a pack that includes three other AirTags.",
url: "https://gizmodo.com/if-you-own-an-iphone-amazon-is-offering-a-free-airtag-prime-day-2000619896",
urlToImage: "https://gizmodo.com/app/uploads/2024/09/airtags-apple.jpg",
publishedAt: "2025-06-29T08:28:41Z",
content: "Apple doesn’t often discount products, and AirTags have never been on sale from the Apple website or in Apple stores. Amazon, however, occasionally surprises us with exclusive pricing on these useful… [+2035 chars]"
},
{
source: {
id: null,
name: "Substack.com"
},
author: "Gary Marcus",
title: "Generative AI's crippling failure to induce robust models of the world",
description: "LLM failures to reason, as documented in Apple’s Illusion of Thinking paper, are really only part of a much deeper problem",
url: "https://garymarcus.substack.com/p/generative-ais-crippling-and-widespread",
urlToImage: "https://substackcdn.com/image/fetch/$s_!Bl25!,w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F71ff3c92-63a0-4e8b-ad13-bda11e8811a1_779x774.jpeg",
publishedAt: "2025-06-29T00:43:54Z",
content: "Synthesized video from Dawid van Straaten, prompt (Generate me a video of two men playing chess) in which the player for black reaches across the table and, in the midst of a rather unusual position … [+24431 chars]"
},
{
source: {
id: null,
name: "Gizmodo.jp"
},
author: "はらいさん",
title: "XREAL Air 2 Pro手に入れたら、スマホやタブレットでの映画鑑賞しなくなりました",
description: "Photo:はらいさん2024年12月28日の記事を編集して再掲載しています。XREALがない生活にはもう…戻れない。スマートフォンやタブレット、プロジェクターなど映画やドラマを楽しむ方法はいろいろとありますが、僕はARグラスで観る体験がとても刺さりました。Apple（アップル）の空間コンピュータことAppleVisionProを初めて試した際、プライベートな空間で大画面で映画を楽しめる体験に魅力",
url: "https://www.gizmodo.jp/2025/06/xreal-air-2-pro-review-1.html",
urlToImage: "https://media.loom-app.com/gizmodo/dist/images/2024/12/24/IMG_7100.jpg?w=1280&h=630&f=jpg",
publishedAt: "2025-06-29T07:35:00Z",
content: "20241228\r\nXREAL\r\nAR\r\nAppleApple Vision Pro60600g\r\nXREAL Air 2 Pro202412\r\nPhoto: \r\nXREAL Air 2 Pro2iPad miniUSB-C1\r\nPS5\r\nPhoto: \r\n130\r\nPhoto: \r\nXREAL Air 2 Pro130\r\nApple Vision ProMeta Quest 3\r\nPhoto:… [+72 chars]"
},
{
source: {
id: null,
name: "Journal du geek"
},
author: "Julie Hay",
title: "Voici toutes les séries annulées en 2025",
description: "Sur les plateformes ou à la télévision, une série tient à peu de choses. Voici toutes celles qui nous ont quitté cette année.",
url: "https://www.journaldugeek.com/dossier/voici-toutes-les-series-annulees-en-2025/",
urlToImage: "https://www.journaldugeek.com/app/uploads/2025/06/series-annulees-en-2025-1600x900.jpg",
publishedAt: "2025-06-29T07:09:52Z",
content: "Sur le petit écran, une série n’est jamais assurée de pouvoir livrer sa conclusion. Avant même que les plateformes de streaming abattent le couperet sur leurs séries qui ne remplissent pas leurs obje… [+5782 chars]"
},
{
source: {
id: null,
name: "Presse-citron"
},
author: "Setra",
title: "Les images PNG font leur révolution : voici ce qui change après 20 ans (HDR, animations, etc.)",
description: "Le World Wide Web Consortium (W3C) vient d’officialiser la nouvelle version du format d’images PNG. Il s’agit de la première mise à jour significative de ce format en 20 ans. Grâce au nouveau standard, le PNG prend en charge la technologie HDR pour améliorer …",
url: "https://www.presse-citron.net/images-png-revolution-20-ans-hdr-animations/",
urlToImage: "https://www.presse-citron.net/app/uploads/2025/06/Presse-citron-net-1600x900.jpg",
publishedAt: "2025-06-29T08:42:56Z",
content: "Ses concurrents sont assez nombreux. Mais jusquà maintenant, le PNG ou Portable Network Graphics fait toujours partie des formats dimages les plus utilisés sur internet. Et ce format sorti en 1996 a … [+2998 chars]"
},
{
source: {
id: null,
name: "Presse-citron"
},
author: "Presse-citron",
title: "“Ne sois plus jamais en retard” : quand Steve Jobs offrait une Jaguar à sa secrétaire parce qu’elle était en retard à cause de sa voiture qui ne démarrait pas",
description: "Connu pour son exigeance, Steve Jobs savait aussi se montrer généreux. Quand sa secrétaire est arrivée en retard parce que sa voiture ne démarrait pas, il lui a donné les clés d'une Jaguar flambant neuve. Récit.",
url: "https://www.presse-citron.net/ne-sois-plus-jamais-en-retard-quand-steve-jobs-offrait-une-jaguar-a-sa-secretaire-parce-quelle-etait-en-retard-a-cause-de-sa-voiture-qui-ne-demarrait-pas/",
urlToImage: "https://www.presse-citron.net/app/uploads/2025/06/steve-jobs-cles-jaguar-1600x900.jpg",
publishedAt: "2025-06-29T07:13:07Z",
content: "Steve Job était connu pour son exigence, son perfectionnisme, mais aussi pour sa capacité à surprendre son entourage. Parmi les nombreuses anecdotes qui jalonnent sa carrière, lune delles illustre à … [+3022 chars]"
},
{
source: {
id: null,
name: "XDA Developers"
},
author: "Samir Makwana",
title: "This free Obsidian plugin helps me save content to read it later",
description: "This plugin lets me save web content as notes to read it later and I can sync those notes across devices easily.",
url: "https://www.xda-developers.com/free-obsidian-plugin-to-read-it-later/",
urlToImage: "https://static1.xdaimages.com/wordpress/wp-content/uploads/wm/2025/06/using-obsidian-to-save-content-to-read-it-later.JPG",
publishedAt: "2025-06-29T02:00:30Z",
content: "Whenever I stumble upon an interesting article while browsing, I prefer saving it to read later. For the longest time, I used Pocket as my read-it-later app, but since it is shutting down, I set out … [+5617 chars]"
},
{
source: {
id: null,
name: "HYPEBEAST"
},
author: "info@hypebeast.com (Hypebeast)",
title: "Brad Pitt's 'F1' Film Accelerates to Record-Breaking Apple TV+ Opening at Box Office",
description: "SummaryBrad Pitt's F1 film debuted with a projected over $40 million domestically for its box office openingThe film's strong performance secured the No. 1 spot at the domestic box office, unseating Universal's How to Train Your DragonF1 had a reported $200 m…",
url: "https://hypebeast.com/2025/6/brad-pitt-f1-film-record-breaking-apple-tv-opening-box-office-results",
urlToImage: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2025%2F06%2F28%2Fbrad-pitt-f1-film-record-breaking-apple-tv-opening-box-office-results-tw.jpg?w=1080&cbr=1&q=90&fit=max",
publishedAt: "2025-06-29T02:16:25Z",
content: "Summary\r\n<ul><li>Brad Pitt’s F1 film debuted with a projected over $40 million domestically for its box office opening</li><li>The film’s strong performance secured the No. 1 spot at the domestic box… [+1820 chars]"
},
{
source: {
id: null,
name: "36kr.com"
},
author: null,
title: "一周市场盘点 | A股创年内新高；曹操出行登陆港交所成港股最大出行平台；石头科技等多家企业寻求港股上市",
description: "一周市场回顾\n A股\n 本周（6月23日~27日）A股大盘强势反弹，上证指数重回3400点上方。整体来看，周内上证指数收涨1.91%；深证成指收涨3.73%；创业板指收涨5.69%；沪深300收涨1.95%；科创50收涨3.17%；中证1000收涨4.62%。板块方面，周内31个申万一级行业中25个出现上涨，其中，非银金融、计算机、通信表现居前；石油石化、煤炭、交通运输表现落后。\n 港股\n 本周港股迎来全面升温，各关键指数均录得不错涨幅。恒生指数周内上涨3.20%；恒生科技指数在本周上涨4.06%。板块方面，12…",
url: "https://36kr.com/p/3355760818849537",
urlToImage: "https://img.36krcdn.com/hsossms/20250629/v2_ae7e39189d604ac3a96c973ce2612121@5335509_oswg90043oswg1053oswg495_img_jpg?x-oss-process=image/resize,m_mfit,w_600,h_400,limit_0/crop,w_600,h_400,g_center",
publishedAt: "2025-06-29T04:34:48Z",
content: "A\r\n623~27A34001.91%3.73%5.69%3001.95%503.17%10004.62%3125\r\n3.20%4.06%12\r\n3.82%4.25%5003.44%\r\n+\r\n+\r\n7\r\n6267\r\nA3004600MSCI China8410%623\r\n500Wh/kg\r\n36500Wh/kg\r\nMIX Flip 2REDMI K8010\r\n36626MIX Flip 2AIW… [+792 chars]"
},
{
source: {
id: null,
name: "Caschys Blog"
},
author: "André Westphal",
title: "Immer wieder sonntags KW 26: Xiaomi mit Flut von Neuheiten, DeepSeek sorgt für Kontroversen",
description: "Auch an diesem Sonntag wünsche ich allen Lesern erst einmal einen guten Morgen. Ich hoffe, dass ihr bisher ein entspanntes Wochenende verbringen konntet. In diesem Beitrag findet ihr wie immer einen kurzen Überblick über einige beachtenswerte Neuigkeiten der …",
url: "https://stadt-bremerhaven.de/immer-wieder-sonntags-kw-26-xiaomi-mit-flut-von-neuheiten-deepseek-sorgt-fuer-kontroversen/",
urlToImage: "https://stadt-bremerhaven.de/wp-content/uploads/2022/07/Kaffee-Sonntags.jpg",
publishedAt: "2025-06-29T04:30:59Z",
content: "Auch an diesem Sonntag wünsche ich allen Lesern erst einmal einen guten Morgen. Ich hoffe, dass ihr bisher ein entspanntes Wochenende verbringen konntet. In diesem Beitrag findet ihr wie immer einen … [+4122 chars]"
},
{
source: {
id: null,
name: "Geekissimo.com"
},
author: "Antonio Mele",
title: "Potenziale svolta con il Samsung Galaxy S27 per il produttore coreano",
description: "Trapelano le prime indiscrezioni sul top di gamma che vedremo sul mercato tra un anno e mezzo",
url: "https://geekissimo.com/2025/06/29/potenziale-svolta-con-il-samsung-galaxy-s27-per-il-produttore-coreano/",
urlToImage: null,
publishedAt: "2025-06-29T08:31:04Z",
content: "Sulla carta è ancora troppo presto per parlarne, ma in questi giorni stanno venendo a galla le prime indiscrezioni relative al Samsung Galaxy S27, che a conti fatti potrebbe segnare la fine dello slo… [+2282 chars]"
},
{
source: {
id: null,
name: "Creative Bloq"
},
author: "joe.foley@futurenet.com (Joe Foley) , Joe Foley",
title: "Apple Podcasts' anniversary graphic is a pitch-perfect optical illusion",
description: "Not everyone noticed the anniversary reference.",
url: "https://www.creativebloq.com/design/logos-icons/apple-podcasts-anniversary-graphic-is-a-pitch-perfect-optical-illusion",
urlToImage: "https://cdn.mos.cms.futurecdn.net/x5rNPXnDNMcanvgNQPyHQm.jpg",
publishedAt: "2025-06-29T07:00:00Z",
content: "Apple Podcasts is celebrating its 20th anniversary. Yep, two decades have passed since podcasts arrived on iTunes back in 2005. To mark the occasion, the tech giant has picked out its favourite 20 be… [+1539 chars]"
},
{
source: {
id: null,
name: "Andro4all.com"
},
author: "Mauro Minichiello",
title: "Las 10 mejores apps para estudiar en 2025: organiza, repasa y mejora tu rendimiento",
description: "Estudiar hoy no es lo mismo que hace una década. Las aplicaciones móviles y de escritorio se han convertido en herramientas esenciales para cualquier estudiante que quiera aprovechar al máximo su tiempo y sacar mejores notas. En 2025, existen decenas de apps …",
url: "https://andro4all.com/aplicaciones/las-10-mejores-apps-para-estudiar-en-2025-organiza-repasa-y-mejora-tu-rendimiento",
urlToImage: "https://andro4all.com/hero/2025/06/las-10-mejores-apps-para-estudiar-en-2025-organiza-repasa-y-mejora-tu-rendimiento.jpg?width=1200",
publishedAt: "2025-06-29T05:00:19Z",
content: "Estas apps educativas te permitirán estudiar mucho mejor en 2025 desde cualquier dispositivo\r\nEstudiar hoy no es lo mismo que hace una década. Las aplicaciones móviles y de escritorio se han converti… [+6304 chars]"
},
{
source: {
id: null,
name: "Googlewatchblog.de"
},
author: "Jens",
title: "Pixel 10: Google schockiert Samsung mit Tensor-Verlust – darum wechselt Google jetzt zu TSMC (Leaks)",
description: "In weniger als zwei Monaten wird Google mit den Pixel 10-Smartphones in die zehnte Generation starten, die erstmals eine große Änderung beim verbauten Herzstück mitbringen wird. Denn wie wir schon seit längerer Zeit wissen, kommt der neue Tensor G5 nicht mehr…",
url: "https://www.googlewatchblog.de/2025/06/pixel-10-google-schockiert-samsung-mit-tensor-verlust-darum-wechselt-google-jetzt-zu-tsmc-leaks/",
urlToImage: "https://www.googlewatchblog.de/wp-content/uploads/google-chip.jpg",
publishedAt: "2025-06-29T05:00:58Z",
content: "In weniger als zwei Monaten wird Google mit den Pixel 10-Smartphones in die zehnte Generation starten, die erstmals eine große Änderung beim verbauten Herzstück mitbringen wird. Denn wie wir schon se… [+4458 chars]"
},
{
source: {
id: null,
name: "Techbang.com"
},
author: "WL.",
title: "如何在 iPhone 中開啟通話錄音功能？",
description: "在iOS 18 後新增「iPhone 電話錄音」功能後，不管是接聽電話、FaceTime通話時，都可直接錄製通話內容。過去iPhone要使用通話錄音功能得選擇第三方應用程式，但在iOS 18 後新增「iPhone 電話錄音」功能後，不管是接聽電話、FaceTime通話時，都可直接錄製通話內容。而在啟用錄音時，對方會收到通知提醒，保障雙方知情權。此外，錄音內容會自動儲存到備忘錄的「通話錄音」資料夾裡，不僅有錄音檔，還自動轉成逐字稿。\n步驟1：在iOS 18 後，不管是接聽電話、FaceTime通話時，都可按左上角的…",
url: "https://www.techbang.com/posts/123093-how-to-enable-call-recording-on-iphone",
urlToImage: "https://cdn0.techbang.com/system/excerpt_images/123093/original/af1497768a6604bf9df671db2a761958.jpg?1746702715",
publishedAt: "2025-06-29T05:30:00Z",
content: "iPhoneiOS 18 iPhone FaceTime\r\n1iOS 18 FaceTime\r\n2\r\n3\r\n4\r\n \r\n5\r\n6\r\n \r\n PC home \r\n PC home"
},
{
source: {
id: null,
name: "Ascii.jp"
},
author: "ASCII",
title: "ファーウェイ製スマートウォッチに搭載の心電図機能はあっけないほど簡単に測定できる",
description: "ファーウェイ製スマートウォッチの上位モデルに搭載されている心電図測定機能。日本のプログラム医療機器として承認されているのはHUAWEI WATCHと「Apple Watch」（Series 4以降とUltra）だけ。大きな優位性と言えます。",
url: "https://weekly.ascii.jp/elem/000/004/295/4295414/",
urlToImage: "https://ascii.jp/img/2025/06/29/4285400/l/210dc291e1879465.jpg",
publishedAt: "2025-06-29T03:00:00Z",
content: "HUAWEI WATCH\r\n10HUAWEI WATCH GT 5 ProECGHUAWEI WATCH GT 4 Pro\r\nHUAWEI WATCH GT 5 Pro63HUAWEI WATCH 5HUAWEI WATCH FIT 4 ProHUAWEI WATCH D2\r\nHUAWEI WATCHApple WatchSeries 4Ultra\r\nHUAWEI WATCH GT 5 ProE… [+218 chars]"
},
{
source: {
id: null,
name: "Forbes"
},
author: "Zak Doffman, Contributor, \n Zak Doffman, Contributor\n https://www.forbes.com/sites/zakdoffman/",
title: "Delete Every App That’s On This List—‘Risks Are Too Great’",
description: "These smartphone apps are meant to be secure — they're dangerous.",
url: "https://www.forbes.com/sites/zakdoffman/2025/06/29/delete-every-free-app-on-this-list-risks-are-too-great/",
urlToImage: "https://imageio.forbes.com/specials-images/imageserve/5f42444852e296b796bf05b7/0x0.jpg?format=jpg&crop=3374,1897,x577,y289,safe&height=900&width=1600&fit=bounds",
publishedAt: "2025-06-29T08:26:40Z",
content: "You should never use these apps on your phone.\r\ngetty\r\nRepublished on June 29 with additional analysis on the national security threat. \r\nTens of millions of Android and iPhone users are being warned… [+11131 chars]"
},
{
source: {
id: null,
name: "Forbes"
},
author: "Zak Doffman, Contributor, \n Zak Doffman, Contributor\n https://www.forbes.com/sites/zakdoffman/",
title: "Google Confirms Upgrade Choice For 2 Billion Android Users",
description: "Android users can now make an easy AI decision — but Gmail is different.",
url: "https://www.forbes.com/sites/zakdoffman/2025/06/29/forget-gmail-google-confirms-android-upgrade-decision/",
urlToImage: "https://imageio.forbes.com/specials-images/imageserve/66f8792060500de2d7ab0420/0x0.jpg?format=jpg&crop=801,450,x285,y91,safe&height=900&width=1600&fit=bounds",
publishedAt: "2025-06-29T07:53:43Z",
content: "Decide carefully as new upgrade confirmed.\r\ndpa/picture alliance via Getty Images\r\nRepublished on June 29 withy new AI privacy rankings and Googles standings.\r\nGoogles 2 billion Gmail users face a cr… [+6089 chars]"
},
{
source: {
id: null,
name: "Olhardigital.com.br"
},
author: "Kelvin Leão Nunes da Costa",
title: "10 filmes que a crítica adorou, mas o público odiou",
description: "Críticos e público nem sempre concordam. Veja 10 filmes elogiados pela crítica, mas rejeitados pela audiência\nO post 10 filmes que a crítica adorou, mas o público odiou apareceu primeiro em Olhar Digital.",
url: "https://olhardigital.com.br/2025/06/28/cinema-e-streaming/10-filmes-que-a-critica-adorou-mas-o-publico-odiou/",
urlToImage: "https://img.odcdn.com.br/wp-content/uploads/2025/04/filmes-criticas-scaled.jpg",
publishedAt: "2025-06-29T00:20:00Z",
content: "Crítica e público nem sempre enxergam os filmes da mesma forma. Não é raro que um título aclamado por especialistas acabe provocando uma reação oposta no espectador médio, que sai frustrado ou decepc… [+6683 chars]"
},
{
source: {
id: null,
name: "Geekpark.net"
},
author: null,
title: "特斯拉首次完成全自动驾驶交付；YU7 锁单交付时间更新，标准版最快 53 周；OpenAI 首次采用谷歌芯片训练",
description: "特斯拉 Model Y 首次完成全自动驾驶交付，全程无人控制\n北京时间 6 月 28 日消息，特斯拉 CEO 马斯克在 X 平台宣布：「首辆特斯拉 Model Y 已实现全自动从工厂开到客户家的交付任务，包括高速路段，而且比原计划提前一天完成！」\n马斯克还提供了一些细节：车内全程无人且没有远程操控，是「真正意义上」的全自动驾驶。「据我们所知，这是全球首例在公共高速路上实现车内无人、无远程控制的自动驾驶。」\n\n此前报道，特斯拉已悄悄为得州奥斯汀超级工厂生产的新款 Model Y 和 Cybertruck 车型部署「…",
url: "https://www.geekpark.net/news/350980",
urlToImage: "https://imgslim.geekpark.net/uploads/image/file/cd/80/cd809901a23d6a1a392a51ad8cb64017.png",
publishedAt: "2025-06-29T00:53:00Z",
content: "Model Y \r\n 6 28 CEO X Model Y \r\nModel Y Cybertruck \r\n YU7 53 Max 33 \r\n 6 28 YU7 27 18 24 App \r\n YU7 53-56 YU7 Pro 48-51 YU7 Max 33-36 \r\n YU7 5000 7 SU7 / SU7 Ultra 6 26 10 - 6 29 12 YU7IT \r\n3.5 11 \r\n… [+548 chars]"
},
{
source: {
id: null,
name: "Tinhte.vn"
},
author: "no-reply@tinhte.vn (nhatminhngo), nhatminhngo",
title: "Sau 27 năm, \"Easter Egg\" thú vị trong chiếc Power Mac G3 của Apple cuối cùng cũng được tiết lộ",
description: "Sau 27 năm, một \"Easter Egg\" thú vị trong chiếc máy tính Power Mac G3 của Apple cuối cùng cũng được hé lộ nhờ kỹ sư phần mềm Doug Brown. \n\nTừ lâu, cộng đồng yêu công nghệ đã biết về sự tồn tại của một bức ảnh ẩn trong bộ nhớ ROM của dòng máy này…",
url: "https://tinhte.vn/thread/sau-27-nam-easter-egg-thu-vi-trong-chiec-power-mac-g3-cua-apple-cuoi-cung-cung-duoc-tiet-lo.4031561/",
urlToImage: "https://photo2.tinhte.vn/data/attachment-files/2025/06/8768088_g3-1.jpeg",
publishedAt: "2025-06-29T02:18:49Z",
content: "Sau 27 nm, mt \"Easter Egg\" thú v trong chic máy tính Power Mac G3 ca Apple cui cùng cng c hé l nh k s phn mm Doug Brown. T lâu, cng ng yêu công ngh ã bit v s tn ti ca mt bc nh n trong b nh ROM ca dòn… [+1032 chars]"
},
{
source: {
id: null,
name: "Courrier International"
},
author: null,
title: "Microsoft dit adieu à son « écran bleu de la mort »",
description: "Après 40 ans de bons – mais exaspérants – services, le message d’erreur sur fond bleu qui invitait l’utilisateur de Windows, le système d’exploitation de Microsoft, à redémarrer son ordinateur, sera remplacé par un écran noir plus sobre et « plus clair ».",
url: "https://www.courrierinternational.com/article/informatique-microsoft-dit-adieu-a-son-ecran-bleu-de-la-mort_232017",
urlToImage: "https://focus.courrierinternational.com/2024/07/19/0/0/6000/4000/1200/630/60/0/acf49f7_2024-07-19t142640z-25483588-rc2ay8aivsmt-rtrmadp-3-cyber-outages.JPG",
publishedAt: "2025-06-29T00:40:34Z",
content: "Cétait la bête noire, aussi redoutée que détestée, de tous les utilisateurs de PC : le message derreur « abject et rageant de lordinateur Windows », se souvient le New York Times.\r\nUn message sur fon… [+1413 chars]"
},
{
source: {
id: null,
name: "Hwupgrade.it"
},
author: null,
title: "MacBook Pro M4 a 1.649, non era mai sceso così tanto, ma ci sono altri modelli anche Air in offerta",
description: "Colpo di scena in Amazon: oggi lo sconto è di ben 300 sul modello \"base\" dei MacBook Pro, ovviamente quello recente con chip M4. Su altri modelli si risparmiano 500 reali, ma attenzione anche all'Air da 999, sempre con chip M4.",
url: "https://www.hwupgrade.it/news/apple/macbook-pro-m4-a-1649-non-era-mai-sceso-cosi-tanto-ma-ci-sono-altri-modelli-anche-air-in-offerta_140402.html",
urlToImage: "https://www.hwupgrade.it/i/n/MacBookAirM4_720.jpg",
publishedAt: "2025-06-29T06:46:45Z",
content: "Non era mai successo prima: scende fino a 1.649MacBook Pro da 14,2 con chip M4, ma continuano le offerte su \r\naltri Pro scontati fino a 500 reali.  Resta in offerta anche\r\nMacBook Air 13\" \"base\", … [+1307 chars]"
},
{
source: {
id: null,
name: "Hwupgrade.it"
},
author: null,
title: "Sony WH-1000XM4 a 199, Sennheiser HD660S2 a 377, Bose Quiet Comfort a 147 e altro: cuffie e auricolari crollate grazie al NO IVA",
description: "La risposta di Amazon al NO IVA della concorrenza continua: ecco raccolte tutte le cuffie e auricolari in sconto. Ci sono tutti i pesi massimi del settore, in sconto con buona probabilità solo fino a mezzanotte.",
url: "https://www.hwupgrade.it/news/multimedia/sony-wh-1000xm4-a-199-sennheiser-hd660s2-a-377-bose-quiet-comfort-a-147-e-altro-cuffie-e-auricolari-crollate-grazie-al-no-iva_140404.html",
urlToImage: "https://www.hwupgrade.it/i/n/sonywh1000xm4_720_2.jpg",
publishedAt: "2025-06-29T07:23:17Z",
content: "Sono prezzi eccezionali quelli che girano su Amazon su cuffie e auricolari e vi segnaliamo le migliori offerte in questo momento. Marchi e prodotti di assoluto valore, oggi fortemente scontati perché… [+2135 chars]"
},
{
source: {
id: null,
name: "Hwupgrade.it"
},
author: null,
title: "15 portatili in sconto su Amazon: c'è di tutto, da un HP a 299 fino ai MacBook Air e Pro (-300 e -500)",
description: "Abbiamo trovato ben 15 portatili in sconto pesante su Amazon: alcuni modelli erano già in sconto ma nascosti, altri del tutto nuovi o con prezzi aggiornati al ribasso, come il MacBook Pro base. Le offerte sono qui, per tutte le tasche.",
url: "https://www.hwupgrade.it/news/portatili/15-portatili-in-sconto-su-amazon-c-e-di-tutto-da-un-hp-a-299-fino-ai-macbook-air-e-pro-300-e-500_140406.html",
urlToImage: "https://www.hwupgrade.it/i/n/acer_antimicrobici_720.jpg",
publishedAt: "2025-06-29T07:51:19Z",
content: "Abbiamo raccolto tutti i portatili più interessanti in forte sconto su \r\nAmazon. Ce ne sono di ogni tipo, a partire da 299, ma ovviamente c'è anche \r\nmolto, molto altro, compresi MacBook Air e Pro (… [+3412 chars]"
},{

  source: {
id: null,
name: "PhoneArena"
},
author: "Alan Friedman",
title: "EU country asks Apple and Google to remove AI app from their app storefronts",
description: "EU country wants Apple and Google to remove this LLM AI app from their app stores.",
url: "https://www.phonearena.com/news/eu-country-asks-apple-and-google-to-remove-ai-apps-from-app-storefronts_id171788",
urlToImage: "https://m-cdn.phonearena.com/images/article/171788-wide-two_1200/EU-country-asks-Apple-and-Google-to-remove-AI-app-from-their-app-storefronts.jpg",
publishedAt: "2025-06-29T00:18:53Z",
content: "A discussion is a place, where people can voice their opinion, no matter if it\r\n is positive, neutral or negative. However, when posting, one must stay true to the topic, and not just share some\r\n ra… [+1082 chars]"
},
{
source: {
id: null,
name: "Sapo.pt"
},
author: "Pedro Simões",
title: "Alemanha quer remover o DeepSeek da App Store e da Play Store",
description: "A aplicação DeepSeek pode desaparecer das lojas da Apple e da Google na Alemanha. A autoridade alemã de proteção de dados solicitou a estas empresas que removam a aplicação chinesa da App Store e...",
url: "https://pplware.sapo.pt/inteligencia-artificial/alemanha-quer-remover-o-deepseek-da-app-store-e-da-play-store/",
urlToImage: "https://pplware.sapo.pt/wp-content/uploads/2025/01/deepseek_1.jpg",
publishedAt: "2025-06-29T07:00:29Z",
content: "A aplicação DeepSeek pode desaparecer das lojas da Apple e da Google na Alemanha. A autoridade alemã de proteção de dados solicitou a estas empresas que removam a aplicação chinesa da App Store e da … [+1898 chars]"
},
{
source: {
id: null,
name: "Macbidouille.com"
},
author: "pmvigier@gmail.com (Philippe)",
title: "Les CPU de nos Mac : Rosetta 2 et le code x86",
description: "Rosetta 2 est apparu sur le Mac mini DTK, avant même son arrivée sur le MacBook Air M1.Nous avions reporté à l'époque via @Lionel la surprise de son niveau de performance sur du code x86, proche de 85% des performances natives.Les limites étant le code AVX (v…",
url: "https://macbidouille.com/news/2025/06/29/les-cpu-de-nos-mac-rosetta-2-et-le-code-x86",
urlToImage: "http://files.macbidouille.com/mbv3/2025/06/28/yjppFLZW8eB4L58F.jpeg",
publishedAt: "2025-06-29T06:25:08Z",
content: "Rosetta 2 est apparu sur le Mac mini DTK, avant même son arrivée sur le MacBook Air M1.Nous avions reporté à l'époque via @Lionel la surprise de son niveau de performance sur du code x86, proche de 8… [+2816 chars]"
},
{
source: {
id: null,
name: "Macotakara.jp"
},
author: "danbo",
title: "Apple Store、BelkinのQi2対応スタンド付きワイヤレスモバイルバッテリー「Belkin BoostCharge Pro Magnetic Power Bank 5K」のティールとディープパープルを追加発売",
description: "BoostCharge Pro Magnetic Power Bank 5K\r\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- テキスト -->\n\nApple Storeが、BelkinのQi2対応スタンド付きワイヤレスモバイルバッテリー「[BoostCharge Pro Magnetic Power Bank 5K](https://apple.sjv.io/c/1333996/435420/7648?u=https://www.apple.com/j…",
url: "https://www.macotakara.jp/accessories/entry-49140.html",
urlToImage: "https://www.macotakara.jp/archives/001/202506/73d2164639b3f817.jpg",
publishedAt: "2025-06-29T04:57:22Z",
content: "BoostCharge Pro Magnetic Power Bank 5K"
},
{
source: {
id: null,
name: "Giga"
},
author: "Sven Kaulfuss",
title: "Versteckt im iPhone: Geheime Apple-App entdeckt",
description: "Ihr kennt iOS wie eure Westentasche und seid mit allen Tipps, Tricks und Kniffen des iPhone-Betriebssystems tatsächlich vertraut? Eine geheime Apple-App kennen aber selbst manche Experten noch gar nicht. Wir verraten euch, welche es ist und wofür sie letztlic…",
url: "https://www.giga.de/tech/versteckt-im-iphone-geheime-apple-app-entdeckt--01J5QR3QPAFAV5NT01SDV17K89",
urlToImage: "https://static.giga.de/wp-content/uploads/2021/09/apple-iphone-13-pro-q_giga-P1577240-fc80008000ffff_1920x1080.jpg",
publishedAt: "2025-06-29T06:00:00Z",
content: "Ihr kennt iOS wie eure Westentasche und seid mit allen Tipps, Tricks und Kniffen des iPhone-Betriebssystems tatsächlich vertraut? Eine geheime Apple-App kennen aber selbst manche Experten noch gar ni… [+2241 chars]"
},
{
source: {
id: null,
name: "GameStar"
},
author: "Daniel Hartmann",
title: "Foundation: Mit dem »tatsächlich hilfreichen Recap« seid ihr bereit für den Start von Staffel 3",
description: "Apples Sci-Fi-Serie Foundation startet bald in der 3. Staffel und bringt euch im Trailer auf den neuesten Stand.\n\nStatt eines Zusammenschnitts aus den vergangenen zwei Seasons gibt es im »tatsächlich hilfreichen Recap« ein Voice Over, das alle wichtigen Infor…",
url: "https://www.gamestar.de/videos/foundation-mit-dem-tatsaechlich-hilfreichen-recap-seid-ihr-bereit-fuer-den-start-von-staffel-3,136644.html",
urlToImage: "https://images.cgames.de/images/gamestar/293/videoimage_6361247.jpg",
publishedAt: "2025-06-29T07:30:00Z",
content: "Für die Weiterentwicklung und Finanzierung unseres Angebotes erheben und verarbeiten wir und bis zu 255 Partner personenbezogene Daten und Identifikationsmerkmale wie, Gerätekennungen oder IP-Adresse… [+830 chars]"
},
{
source: {
id: null,
name: "Autobild.de"
},
author: "Jonas Uhlig",
title: "Klein, aber teuer: Was taugen die niedlichen Mini-Autos?",
description: "Diese vier Microcars wollen die urbane Zukunft prägen: Aber überzeugen Microlino, XEV Yoyo, Ari Soleno und Fiat Topolino im Test?",
url: "https://www.autobild.de/artikel/microcars-im-test-28138801.html",
urlToImage: "https://i.auto-bild.de/ir_img/3/9/5/7/4/4/7/Micro-Cars-im-Test-2869-4898x2756-7490f0459e11b3d9.jpg?impolicy=og_images",
publishedAt: "2025-06-29T04:00:00Z",
content: "Diese vier Autos stehen dafür, was Visionäre seit Jahrzehnten voraussagen: Mobilität mit Minis im Stadtverkehr. In Zeiten hoher Autopreise und ebenso teuren Benzins müsste die Zeit für Microcars jetz… [+8942 chars]"
},
{
source: {
id: null,
name: "Screen Rant"
},
author: "Dhruv Sharma",
title: "After Silo, Apple TV+'s Upcoming Cyberpunk Show Could Be The Streamer's Next Big Sci-Fi Adaptation",
description: "Silo is one of Apple TV+'s most successful series, but the streamer's upcoming cyberpunk show has the potential to be an even better sci-fi adaptation",
url: "https://screenrant.com/apple-tv-plus-cyberpunk-neuromancer-adaptation-silo-scifi/",
urlToImage: "https://static1.srcdn.com/wordpress/wp-content/uploads/2025/06/rebecca-ferguson-as-juliette-nichols-in-silo_.jpg",
publishedAt: "2025-06-29T03:49:44Z",
content: "Silo will remain one of Apple TV+'s most valuable IPs, but the streamer's new cyberpunk series could potentially become an even better sci-fi adaptation. Viewers familiar with Hugh Howey's Silo book … [+4277 chars]"
},
{
source: {
id: null,
name: "Screen Rant"
},
author: "Saylee Padwal",
title: "Mystery At Blind Frog Ranch Season 5: News, Cast, Release Date & Everything We Know",
description: "Get the latest on Mystery at Blind Frog Ranch season 5, including cast updates, release info, major discoveries, and what’s coming next.",
url: "https://screenrant.com/mystery-at-blind-frog-ranch-season-5-news-cast-release-date-everything-know/",
urlToImage: "https://static1.srcdn.com/wordpress/wp-content/uploads/2025/06/mystery-at-blind-frog-ranch-season-5_-news-cast-release-date-everything-we-know.jpg",
publishedAt: "2025-06-29T01:00:19Z",
content: "Mystery At Blind Frog Ranch has returned for a new season, and heres everything to know about it. Mystery at Blind Frog Ranch chronicles Duane and Chad Ollingers unrelenting search for alleged Aztec … [+4708 chars]"
},
{
source: {
id: null,
name: "Ipadizate.com"
},
author: "Gabriela Martínez",
title: "Este concepto de iconos de iOS 26 es una locura que Apple debería valorar",
description: "Con la presentación de iOS 26 Apple ha confirmado que continúa con la tendencia de personalización que se intensificó con iOS 18, ofreciendo a los usuarios nuevas maneras de adaptar la apariencia del iPhone. Tomando como punto de partida las cuatro opciones d…",
url: "https://ipadizate.com/ios/este-concepto-de-iconos-de-ios-26-es-una-locura-que-apple-deberia-valorar",
urlToImage: "https://ipadizate.com/hero/2025/06/iconos-de-ios-26.png?width=1200",
publishedAt: "2025-06-29T07:00:51Z",
content: "Todavía hay muchas opciones para personalizar los iconos de iOS 26\r\nCon la presentación de iOS 26 Apple ha confirmado que continúa con la tendencia de personalización que se intensificó con iOS 18, o… [+2595 chars]"
},
{
source: {
id: null,
name: "Ipadizate.com"
},
author: "Gabriela Martínez",
title: "Además del chip M5, el próximo iPad Pro podría sorprendernos con una interesante mejora de diseño",
description: "A la espera del lanzamiento de un nuevo iPad Pro con chip M5 a finales de este año, cada vez hay rumores más consistentes sobre los detalles de esta actualización. Más allá de la mejora en potencia que se supone gracias a la actualización del procesador, se e…",
url: "https://ipadizate.com/ipad/ademas-del-chip-m5-el-proximo-ipad-pro-podria-sorprendernos-con-una-interesante-mejora-de-diseno",
urlToImage: "https://ipadizate.com/hero/2025/06/ipad-pro.1751170448.702.png?width=1200",
publishedAt: "2025-06-29T07:00:14Z",
content: "El iPad Pro M5 podría evolucionar en potencia y diseño\r\nA la espera del lanzamiento de un nuevo iPad Pro con chip M5 a finales de este año, cada vez hay rumores más consistentes sobre los detalles de… [+2105 chars]"
},
{
source: {
id: null,
name: "The-independent.com"
},
author: "Roisin O'Connor and Annabel Nugent",
title: "Glastonbury 2025 live: Neil Young headlines in clash with Charli XCX and Doechii",
description: "Young performs lengthy Pyramid Stage performance, following major sets from RAYE, Pulp, Haim and Kneecap",
url: "https://www.the-independent.com/arts-entertainment/music/glastonbury/glastonbury-2025-live-neil-young-charli-xcx-doechii-bbc-b2778977.html",
urlToImage: "https://static.the-independent.com/2025/06/28/22/51/GettyImages-2222655833.jpg?trim=0,1,0,0&width=1200&height=800&crop=1200:800",
publishedAt: "2025-06-29T07:12:30Z",
content: "Charli XCX crowns Gracie Abrams as Glastonbury 2025 'Apple Girl'\r\nYour support helps us to tell the story\r\nFrom reproductive rights to climate change to Big Tech, The Independent is on the ground whe… [+3131 chars]"
},
{
source: {
id: null,
name: "Begeek.fr"
},
author: "Morgan Fromentin",
title: "Cinq nouveautés iOS 26 très attendues… mais réservées à une sélection d’iPhone",
description: "La prochaine mise à jour iOS 26 promet cinq fonctionnalités majeures très attendues, mais seuls certains modèles d’iPhone pourront en profiter. Les utilisateurs s’interrogent déjà sur la compatibilité de leur appareil avec ces nouveautés.",
url: "https://www.begeek.fr/cinq-nouveautes-ios-26-tres-attendues-mais-reservees-a-une-selection-diphone-417522",
urlToImage: "https://www.begeek.fr/app/uploads/2025/06/Apple-iOS-26.jpg",
publishedAt: "2025-06-29T07:00:24Z",
content: "La prochaine mise à jour iOS 26 promet cinq fonctionnalités majeures très attendues, mais seuls certains modèles diPhone pourront en profiter. Les utilisateurs sinterrogent déjà sur la compatibilité … [+3595 chars]"
},
{
source: {
id: "abc-news-au",
name: "ABC News (AU)"
},
author: "Sonya Gee",
title: "Winter means puddings, crumbles and cake. Here are our top 10",
description: "A just-baked dessert can bring much-needed cheer on cold nights. Whether you are craving cookies or have a passion for puddings, we have you covered.",
url: "https://www.abc.net.au/news/2025-06-29/popular-and-easy-winter-desserts/105344054",
urlToImage: "https://live-production.wcms.abc-cdn.net.au/15694ba19c2d90ba1f660ec004c83daa?impolicy=wcms_watermark_news&cropH=1687&cropW=3000&xPos=0&yPos=157&width=862&height=485&imformat=generic",
publishedAt: "2025-06-29T03:28:14Z",
content: "A just-baked dessert can bring much-needed cheer on cold nights. \r\nHere are 10 worthy options, from cookies and self-saucing puddings to crumbles and easy cakes.\r\nEnjoy a bowl of rice pudding while i… [+2328 chars]"
},
{
source: {
id: null,
name: "Technews.tw"
},
author: "姚 惠茹",
title: "蘋果經典標誌位移？傳 iPhone 17 Pro 為鏡頭設計調整 LOGO 位置",
description: "根據 Apple 知名爆料者 Majin Bu 透露，繼 2019 年 iPhone 11 調整蘋果經典標誌的位置後，蘋果 LOGO 就一直位於 iPhone 的中央，如今又將因為鏡頭設計，再次調整 iPhone 17 Pro 的機背蘋果標誌位置。 Majin Bu 爆料，iPhone 17 Pro...",
url: "https://ccc.technews.tw/2025/06/29/apple-logo/",
urlToImage: "https://img.technews.tw/wp-content/uploads/2025/06/29103805/GuiEsHvXQAAgy8p.jpeg",
publishedAt: "2025-06-29T02:39:21Z",
content: "Apple Majin Bu 2019 iPhone 11 LOGO iPhone iPhone 17 Pro \r\nMajin Bu iPhone 17 Pro Google Pixel LiDAR \r\nMajin Bu iPhone 17 Pro \r\n iPhone 17 Pro MagSafe iPhone 17 Pro \r\niPhone 17 Pro design: logo moves … [+133 chars]"
},
{
source: {
id: null,
name: "Googlediscovery.com"
},
author: "Renê Fraga",
title: "Alemanha pede que Apple e Google removam DeepSeek de suas lojas de aplicativos",
description: "A Alemanha pediu oficialmente que Apple e Google removam o aplicativo de inteligência artificial DeepSeek das lojas de aplicativos na Europa. O motivo é a preocupação com a privacidade dos usuários, já que o app armazena dados pessoais em servidores na China,…",
url: "https://googlediscovery.com/2025/06/28/alemanha-pede-que-apple-e-google-removam-deepseek-de-suas-lojas-de-aplicativos/",
urlToImage: "https://cdn.googlediscovery.com/wp-content/uploads/deepseek-1.webp",
publishedAt: "2025-06-29T02:51:47Z",
content: "Resumo Dinâmico:\r\n<ul><li> O motivo é a preocupação com a privacidade dos usuários, já que o app armazena dados pessoais em servidores na China, onde o governo pode acessar essas informações.</li><li… [+2232 chars]"
},
{
source: {
id: null,
name: "Geeky Gadgets"
},
author: "Roland Hutchinson",
title: "The Big iOS 26 Update & MORE: Your Apple News Breakdown!",
description: "Apple’s iOS 26 beta 2 introduces a range of enhancements, new features, and some challenges that remain unresolved. This update brings improvements to the user interface, app functionality, and overall system performance, while also highlighting areas requiri…",
url: "https://www.geeky-gadgets.com/ios-26-and-apple-news/",
urlToImage: "https://www.geeky-gadgets.com/wp-content/uploads/2025/06/ios-26-beta-2-new-features_optimized-3.jpg",
publishedAt: "2025-06-29T05:00:41Z",
content: "Apples iOS 26 beta 2 introduces a range of enhancements, new features, and some challenges that remain unresolved. This update brings improvements to the user interface, app functionality, and overal… [+6234 chars]"
},
{
source: {
id: null,
name: "Geeky Gadgets"
},
author: "Roland Hutchinson",
title: "You Won’t Believe What macOS Tahoe Is Hiding!",
description: "Apple’s macOS Tahoe marks a pivotal step forward in the evolution of its desktop operating system. With the introduction of the “liquid glass” design, touch-friendly interface updates, and hints of cellular connectivity, this update signals a potential reimag…",
url: "https://www.geeky-gadgets.com/macos-tahoe-big-secret/",
urlToImage: "https://www.geeky-gadgets.com/wp-content/uploads/2025/06/macos-tahoe-liquid-glass-design_optimized-2.jpg",
publishedAt: "2025-06-29T07:00:50Z",
content: "Apple’s macOS Tahoe marks a pivotal step forward in the evolution of its desktop operating system. With the introduction of the “liquid glass” design, touch-friendly interface updates, and hints of c… [+5682 chars]"
},
{
source: {
id: null,
name: "Ixbt.com"
},
author: "jin@ixbt.com (Jin)",
title: "iPhone 17 Pro ждут большие перемены не только в камере: фирменный логотип Apple изменит свое положение",
description: "Apple готовит изменения в дизайне iPhone 17 Pro, которые затрагивают не только новый дизайн камеры, но и перемещение логотипа компании. С 2017 года, начиная с iPhone X, логотип располагался примерно по центру задней панели. Теперь, согласно данным от производ…",
url: "https://www.ixbt.com/news/2025/06/29/iphone-17-pro-apple.html",
urlToImage: "https://www.ixbt.com/img/n1/news/2025/5/0/GuiEsHvXQAAgy8p_large.jpg",
publishedAt: "2025-06-29T05:49:00Z",
content: "Apple iPhone 17 Pro, , .\r\n 2017 , iPhone X, . , , iPhone 17 Pro . , .\r\n , , Apple , . , , Apple.\r\n, , iPhone 17 Pro, ,   .\r\nMajin Bu\r\nMajin Bu iPad mini, iPhone 12, iPhone 15, iPhone 16."
},
{
source: {
id: null,
name: "Ixbt.com"
},
author: "jin@ixbt.com (Jin)",
title: "Nvidia, подвинься. Для ChatGPT начали использовать новейшие ИИ-чипы Google",
description: "OpenAI недавно начала арендовать новые чипы Google для работы ChatGPT, о чем сообщает агентство Reuters. Напомним, разработчик ChatGPT является одним из крупнейших покупателей чипов Nvidia. Ранее в этом месяце агентство Reuters эксклюзивно сообщило, что OpenA…",
url: "https://www.ixbt.com/news/2025/06/29/nvidia-chatgpt-google.html",
urlToImage: "https://www.ixbt.com/img/n1/news/2025/5/0/ixbtmedia_ChatGPT__--ar_169_--v_7_4f0d971f-5578-43bc-abf3-9207b4f0aeec_3_large.png",
publishedAt: "2025-06-29T04:57:00Z",
content: "OpenAI Google ChatGPT, Reuters. , ChatGPT Nvidia.\r\n Reuters , OpenAI Google Cloud , .\r\n Google     (TPU) Google, . Google , Apple, , Anthropic Safe Superintelligence, OpenAI.\r\n TPU Google , OpenAI , … [+85 chars]"
},
{
source: {
id: null,
name: "Ozbargain.com.au"
},
author: "Pistnbroke",
title: "$100 Apple Gift Card for 18,900 Reward Points (10% off Points) @ Commbank Awards",
description: "Physical gift cards sent via mail and usually take 4-7 business days to deliver. $100 and $200 gift cards available at time of posting",
url: "https://www.ozbargain.com.au/node/912957",
urlToImage: "https://files.ozbargain.com.au/n/57/912957x.jpg?h=66c0e922",
publishedAt: "2025-06-29T07:45:43Z",
content: "All trademarks are owned by their respective owners.OzBargain is an independent community website which has no association with nor endorsement by the respective trademark owners.\r\nCopyright © 2006-2… [+32 chars]"
},
{
source: {
id: null,
name: "MMA Fighting"
},
author: "Mike Heck",
title: "UFC 317 post-fight show: Reaction to Ilia Topuria destroying Charles Oliveira to cap off stellar card",
description: "MMA Fighting reacts to Ilia Topuria knocking out Charles Oliveira, and more following UFC 317.",
url: "https://www.mmafighting.com/2025/6/29/24458185/ufc-317-post-fight-show-reaction-to-ilia-topuria-destroying-charles-oliveira-to-cap-off-stellar-card",
urlToImage: "https://cdn.vox-cdn.com/thumbor/RFvqntB89Uh57-zOsG2m_bacgyI=/0x0:7210x3775/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/26041706/2222692520.jpg",
publishedAt: "2025-06-29T08:08:49Z",
content: "Photo by Jeff Bottari/Zuffa LLC\r\n\n \n\n Ilia Topuria made it look easy against Charles Oliveira, just like he promised for weeks after the UFC 317 main event was announced for the vacant lightweight ti… [+882 chars]"
},
{
source: {
id: null,
name: "BBC News"
},
author: null,
title: "Charli, Neil Young and Scissor Sisters give Glastonbury goosebumps",
description: "With several headliners competing for attention, Saturday was Glastonbury's most compelling night.",
url: "https://www.bbc.com/news/articles/cj0m9r35142o",
urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/86b2/live/075a7f40-547a-11f0-a624-97f7818d9249.jpg",
publishedAt: "2025-06-29T00:02:06Z",
content: "Mark SavageReporting from\r\nGlastonbury Festival\r\nCharli XCX drew the biggest crowd of Saturday night\r\nSaturday was a night of four headliners at Glastonbury, with fans facing the cruel choice between… [+10247 chars]"
},
{
source: {
id: null,
name: "iGeneration"
},
author: "Stéphane Moussie",
title: "Comment les aspirateurs robots Matter prennent leurs quartiers dans la Maison d’Apple",
description: "Depuis iOS 18.4, l’application Maison d’Apple peut accueillir de nouveaux habitants qui étaient attendus de pied ferme : les aspirateurs robots. C’est par le biais du standard Matter que ces engins de nettoyage peuvent finalement rouler dans l’écosys...",
url: "https://www.igen.fr/domotique/2025/06/comment-les-aspirateurs-robots-matter-prennent-leurs-quartiers-dans-la-maison-dapple-150769",
urlToImage: "https://cdn.mgig.fr/2025/06/mga-7e5b1377-w375-w1500-w750_accroche.jpg",
publishedAt: "2025-06-29T08:00:00Z",
content: "Depuis iOS 18.4, lapplication Maison dApple peut accueillir de nouveaux habitants qui étaient attendus de pied ferme : les aspirateurs robots. Cest par le biais du standard Matter que ces engins de n… [+1031 chars]"
},
{
source: {
id: null,
name: "Kinopoisk.ru"
},
author: null,
title: "Новости недели: сиквелы «Социальной сети» и «Питер FM», «Бонд» от Вильнёва и «Бугония» Лантимоса",
description: "Подробности о фильмах «Бугония», «Фантастическая четверка», «Орудия», «Нескромные», «Социальная сеть 2», «Человек-паук: Совершенно новый день», а также о сериалах «Кибердеревня» и «Гангстерленд». Подробнее...",
url: "https://www.kinopoisk.ru/media/news/4011410/",
urlToImage: "https://avatars.mds.yandex.net/get-kinopoisk-blog-post-thumb/40130/56f8cbd693f79e7488ca8ffeebb36aed/1200x630",
publishedAt: "2025-06-29T06:10:04Z",
content: ".   «»,   « »,   « »  « FM».\r\n«»  ,  . « !».   , ,    ,  .   «»  .\r\nMarvel « ».         , 1960-. . , , -  .   25    Marvel.\r\n«»  , , «».   ,   17    .    ,   . , , , .   8 .\r\n«»     .     ,   .      … [+1260 chars]"
},
{
source: {
id: null,
name: "Soydemac.com"
},
author: "Alberto Navarro",
title: "Todo sobre el nuevo Liquid Glass en iOS 26: rediseño visual, ajustes y reacciones",
description: "Todo sobre Liquid Glass en iOS 26: rediseño visual, cambios en transparencias, mejoras y fecha de lanzamiento. ¡Entérate aquí!",
url: "https://www.soydemac.com/todo-sobre-el-nuevo-liquid-glass-en-ios-26-rediseno-visual-ajustes-y-reacciones/",
urlToImage: "https://www.soydemac.com/wp-content/uploads/2025/06/iOS-26-Liquid-Glass-0.jpg",
publishedAt: "2025-06-29T03:42:55Z",
content: "La llegada de iOS 26 ha marcado un antes y un después en el diseño de los sistemas operativos de Apple. Tras su presentación durante la WWDC 2025, la compañía anunció la introducción de Liquid Glass,… [+4735 chars]"
},
{
source: {
id: null,
name: "Soydemac.com"
},
author: "Alberto Navarro",
title: "La resolución de pantalla del iPhone 17 Air al descubierto: datos filtrados, novedades y lo que sabemos hasta ahora",
description: "La beta de iOS 26 filtra la resolución del iPhone 17 Air. Descubre los detalles, tamaño, diseño ultrafino y cuándo saldrá a la venta.",
url: "https://www.soydemac.com/la-resolucion-de-pantalla-del-iphone-17-air-al-descubierto-datos-filtrados-novedades-y-lo-que-sabemos-hasta-ahora/",
urlToImage: "https://www.soydemac.com/wp-content/uploads/2025/06/iPhone-17-Air-resolucion-pantalla-1.jpg",
publishedAt: "2025-06-29T05:18:31Z",
content: "La aparición de un fondo de pantalla con resolución inusual en la beta de iOS 26 ha vuelto a encender la rumorología en torno al próximo iPhone 17 Air. Apple, fiel a su estilo de mantener los detalle… [+4407 chars]"
},
{
source: {
id: null,
name: "Soydemac.com"
},
author: "Andy Acosta",
title: "iPad vs Mac: Diferencias clave y cuál elegir en 2025",
description: "iPad vs Mac: Diferencias clave y cuál elegir en 2025. Conoce cuál se adapta mejor a tu estilo de vida y tus necesidades profesionales.",
url: "https://www.soydemac.com/ipad-vs-mac-diferencias-clave-y-cual-elegir-en-2025/",
urlToImage: "https://www.soydemac.com/wp-content/uploads/2025/06/diferencias-clave-entre-iPad-y-Mac-3.jpg",
publishedAt: "2025-06-29T06:00:26Z",
content: "Elegir entre un iPad y un Mac puede parecer una decisión sencilla, pero la realidad es mucho más compleja. En un mercado donde la tecnología de Apple evoluciona constantemente, saber qué dispositivo … [+12414 chars]"
},
{
source: {
id: null,
name: "Spektrum.de"
},
author: "Karl Urban",
title: "AstroGeo Podcast: Galaxien auf Kollisionskurs – Wann trifft uns Andromeda?",
description: "Vor über 400 Jahren beobachtet ein Astronom erstmals den Andromedanebel im Fernrohr. Heute wissen wir: Er ist eine Galaxie, die mit Karacho auf die Milchstraße zufliegt und unsere Zukunft als galaktische Fusion besiegeln könnte. Weiterlesen",
url: "https://scilogs.spektrum.de/astrogeo/astrogeo-podcast-galaxien-auf-kollisionskurs-wann-trifft-uns-andromeda/",
urlToImage: "https://scilogs.spektrum.de/astrogeo/files/galaxien-kollision-zwei.jpg",
publishedAt: "2025-06-29T06:04:25Z",
content: "Als der fränkische Astronom Simon Marius im Jahr 1612 erstmals sein Fernrohr auf einen nebligen Fleck im Sternbild Andromeda richtet, kann er noch nicht ahnen, was er da eigentlich sieht: Marius besc… [+2552 chars]"
},

];