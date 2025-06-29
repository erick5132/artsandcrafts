// 動画データ - 水彩画学習に適した実際のYouTube動画
const videoData = {
  "sky-clouds": {
    name: "空と雲",
    icon: "☁️",
    videos: [
      {
        id: "sky1",
        title: "青空の描き方",
        description: "きれいな青空を水彩で表現する方法",
        youtubeId: "Vmlx0sfhWd8", // 水彩画 空の描き方
        difficulty: "beginner",
      },
      {
        id: "clouds1",
        title: "ふわふわ雲の描き方",
        description: "立体感のある雲を描くコツ",
        youtubeId: "RLU-wbqETFA", // 水彩画 雲の描き方
        difficulty: "intermediate",
      },
      {
        id: "sunset1",
        title: "夕焼け空の描き方",
        description: "グラデーションを使った夕焼けの表現",
        youtubeId: "nGjUxoPzrPM", // 水彩画 夕焼けの描き方
        difficulty: "advanced",
      },
    ],
  },
  nature: {
    name: "自然・植物",
    icon: "🌳",
    videos: [
      {
        id: "tree1",
        title: "大きな木の描き方",
        description: "幹と枝の描き方から葉っぱの表現まで",
        youtubeId: "w75UvSvhHC8", // 水彩画 木の描き方
        difficulty: "intermediate",
      },
      {
        id: "flowers1",
        title: "花畑の描き方",
        description: "色とりどりの花を描くテクニック",
        youtubeId: "KCIpPGxaWoI", // 水彩画 花の描き方
        difficulty: "beginner",
      },
      {
        id: "grass1",
        title: "草原の描き方",
        description: "自然な草の表現方法",
        youtubeId: "1Sw84Cxxp8k", // 水彩画 基本技法
        difficulty: "beginner",
      },
      {
        id: "forest1",
        title: "森の描き方",
        description: "奥行きのある森を表現するコツ",
        youtubeId: "MSLgzlEJ-KQ", // 水彩画 森の描き方
        difficulty: "advanced",
      },
    ],
  },
  vehicles: {
    name: "乗り物",
    icon: "🚗",
    videos: [
      {
        id: "car1",
        title: "車の描き方",
        description: "基本的な車の形と色の塗り方",
        youtubeId: "g6BdNdPt71I", // 水彩画 車の描き方
        difficulty: "intermediate",
      },
      {
        id: "train1",
        title: "電車の描き方",
        description: "電車の特徴を捉えた描き方",
        youtubeId: "E95QmYYAheI", // 水彩画 乗り物
        difficulty: "intermediate",
      },
      {
        id: "bus1",
        title: "バスの描き方",
        description: "大きなバスを上手に描くコツ",
        youtubeId: "TbgQ8qdYCWI", // 水彩画 乗り物基本
        difficulty: "beginner",
      },
    ],
  },
  buildings: {
    name: "建物",
    icon: "🏠",
    videos: [
      {
        id: "house1",
        title: "家の描き方",
        description: "基本的な家の構造と彩色",
        youtubeId: "UdkXpgG_K5E", // 水彩画 家の描き方
        difficulty: "beginner",
      },
      {
        id: "school1",
        title: "学校の描き方",
        description: "大きな建物の描き方のコツ",
        youtubeId: "MGJX4MVsfPA", // 水彩画 建物
        difficulty: "intermediate",
      },
      {
        id: "castle1",
        title: "お城の描き方",
        description: "複雑な建物を描く上級テクニック",
        youtubeId: "gBvFctlkRcc", // 水彩画 上級建物
        difficulty: "advanced",
      },
    ],
  },
  people: {
    name: "人物",
    icon: "👨‍👩‍👧‍👦",
    videos: [
      {
        id: "face1",
        title: "顔の描き方",
        description: "人の顔の基本的な描き方",
        youtubeId: "W13QlxXkEqs", // 水彩画 人物基本
        difficulty: "intermediate",
      },
      {
        id: "body1",
        title: "全身の描き方",
        description: "人の全身を描くコツ",
        youtubeId: "GNPi2eNHEow", // 水彩画 人物全身
        difficulty: "advanced",
      },
      {
        id: "family1",
        title: "家族の描き方",
        description: "複数の人物を描く方法",
        youtubeId: "7SRqJgYeEDM", // 水彩画 複数人物
        difficulty: "advanced",
      },
    ],
  },
  ground: {
    name: "地面・道",
    icon: "🛤️",
    videos: [
      {
        id: "road1",
        title: "道路の描き方",
        description: "遠近感のある道路の表現",
        youtubeId: "YBhSptW-kvQ", // 水彩画 風景基本
        difficulty: "intermediate",
      },
      {
        id: "ground1",
        title: "地面の描き方",
        description: "自然な地面の質感表現",
        youtubeId: "XiEc7XSorNI", // 水彩画 基本技法
        difficulty: "beginner",
      },
      {
        id: "mountain1",
        title: "山の描き方",
        description: "遠くの山を表現するテクニック",
        youtubeId: "HelWAXCM3Hw", // 水彩画 山の描き方
        difficulty: "intermediate",
      },
    ],
  },
}

// 印刷ガイドデータを全動画に対応
const printGuideData = {
  sky1: {
    title: "青空の描き方",
    category: "空と雲",
    difficulty: "beginner",
    colors: [
      { color: "#1e3a8a", name: "ウルトラマリン" },
      { color: "#0ea5e9", name: "セルリアンブルー" },
      { color: "#ffffff", name: "白" },
    ],
    steps: [
      "画用紙を水で軽く湿らせます",
      "薄いセルリアンブルーで空の上部から塗り始めます",
      "下に向かって徐々に薄くなるようにぼかします",
      "完全に乾く前に、白い部分を残して雲の形を作ります",
      "乾いてから、影の部分に薄いグレーを加えます",
    ],
    tips: [
      "筆に水を多めに含ませてぼかし効果を作りましょう",
      "空の色は上が濃く、下が薄くなるのが自然です",
      "雲は完全に白く残さず、薄い影をつけると立体感が出ます",
    ],
    warnings: [
      "絵の具が乾く前に次の色を重ねると濁ってしまいます",
      "水を使いすぎると紙がよれてしまうので注意しましょう",
    ],
  },
  clouds1: {
    title: "ふわふわ雲の描き方",
    category: "空と雲",
    difficulty: "intermediate",
    colors: [
      { color: "#ffffff", name: "白" },
      { color: "#6b7280", name: "ペインズグレー" },
      { color: "#1e3a8a", name: "ウルトラマリン" },
    ],
    steps: [
      "雲の大まかな形を薄い鉛筆で下書きします",
      "雲の影になる部分を薄いグレーで塗ります",
      "明るい部分は白い紙の色を活かします",
      "雲の輪郭をぼかして自然な感じにします",
      "背景の空の色を雲の周りに塗ります",
    ],
    tips: [
      "雲は丸い形ではなく、もこもこした不規則な形にしましょう",
      "影は雲の下部と奥の部分につけると立体感が出ます",
      "乾いた筆で軽くぼかすとふわふわ感が表現できます",
    ],
    warnings: ["グレーを濃くしすぎると重い雲になってしまいます", "輪郭をはっきりさせすぎると不自然になります"],
  },
  tree1: {
    title: "大きな木の描き方",
    category: "自然・植物",
    difficulty: "intermediate",
    colors: [
      { color: "#92400e", name: "バーントアンバー" },
      { color: "#15803d", name: "サップグリーン" },
      { color: "#ca8a04", name: "イエローオーカー" },
      { color: "#059669", name: "ビリジアン" },
    ],
    steps: [
      "木の幹の形を薄い茶色で描きます",
      "枝を幹から伸ばすように描きます",
      "葉っぱの塊を緑色で大まかに塗ります",
      "影になる部分に濃い緑を重ねます",
      "明るい部分に黄緑を加えて立体感を出します",
    ],
    tips: [
      "幹は下が太く、上に向かって細くなります",
      "枝は自然に分かれるように描きましょう",
      "葉っぱは一枚ずつ描かず、塊として表現します",
      "光の当たる方向を意識して明暗をつけましょう",
    ],
    warnings: ["幹を真っ直ぐに描きすぎると不自然になります", "緑色を混ぜすぎると濁った色になってしまいます"],
  },
  flowers1: {
    title: "花畑の描き方",
    category: "自然・植物",
    difficulty: "beginner",
    colors: [
      { color: "#dc2626", name: "カドミウムレッド" },
      { color: "#eab308", name: "カドミウムイエロー" },
      { color: "#1e3a8a", name: "ウルトラマリン" },
      { color: "#15803d", name: "サップグリーン" },
    ],
    steps: [
      "花畑の地面を薄い緑で塗ります",
      "花の位置を決めて、色とりどりの花を点々と描きます",
      "花の茎を緑色で描きます",
      "遠くの花は小さく、近くの花は大きく描きます",
      "最後に草や葉っぱを加えて完成です",
    ],
    tips: [
      "花の色は赤、黄、青、ピンクなど様々な色を使いましょう",
      "遠近感を出すために、手前の花は詳しく、奥の花は簡単に描きます",
      "花の形は完璧でなくても大丈夫です",
    ],
    warnings: ["花を同じ大きさで描くと平面的になってしまいます", "色を混ぜすぎると濁ってしまうので注意しましょう"],
  },
  house1: {
    title: "家の描き方",
    category: "建物",
    difficulty: "beginner",
    colors: [
      { color: "#92400e", name: "バーントアンバー" },
      { color: "#dc2626", name: "カドミウムレッド" },
      { color: "#1e3a8a", name: "ウルトラマリン" },
      { color: "#ca8a04", name: "イエローオーカー" },
    ],
    steps: [
      "家の基本的な形（四角と三角）を描きます",
      "屋根を赤色で塗ります",
      "壁を薄い茶色で塗ります",
      "窓とドアを描きます",
      "煙突や庭などの細かい部分を加えます",
    ],
    tips: [
      "家は基本的な図形の組み合わせです",
      "屋根の傾斜を意識して描きましょう",
      "窓は左右対称に配置すると安定感が出ます",
    ],
    warnings: ["屋根の角度が急すぎると不自然になります", "窓の大きさを揃えると美しく見えます"],
  },
}

// 現在の状態
let currentCategory = null
let currentVideo = null

// 難易度の日本語変換
const difficultyMap = {
  beginner: "初級",
  intermediate: "中級",
  advanced: "上級",
}

// 画面要素の取得
const categoryScreen = document.getElementById("category-screen")
const videoListScreen = document.getElementById("video-list-screen")
const videoWatchScreen = document.getElementById("video-watch-screen")

// 画面切り替え関数
function showScreen(screenName) {
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.remove("active")
  })

  switch (screenName) {
    case "categories":
      categoryScreen.classList.add("active")
      break
    case "video-list":
      videoListScreen.classList.add("active")
      break
    case "video-watch":
      videoWatchScreen.classList.add("active")
      break
  }
}

// カテゴリカードのクリックイベント
document.querySelectorAll(".category-card").forEach((card) => {
  card.addEventListener("click", function () {
    const categoryId = this.dataset.category
    showVideoList(categoryId)
  })
})

// 進捗管理機能を追加

// 進捗データの管理
const progressManager = {
  // 視聴済み動画を取得
  getWatchedVideos() {
    const watched = localStorage.getItem("watchedVideos")
    return watched ? JSON.parse(watched) : []
  },

  // 動画を視聴済みとしてマーク
  markAsWatched(videoId) {
    const watched = this.getWatchedVideos()
    if (!watched.includes(videoId)) {
      watched.push(videoId)
      localStorage.setItem("watchedVideos", JSON.stringify(watched))
      this.updateProgressDisplay()
    }
  },

  // 視聴済み状態をチェック
  isWatched(videoId) {
    return this.getWatchedVideos().includes(videoId)
  },

  // 進捗をリセット
  resetProgress() {
    if (confirm("学習進捗をリセットしますか？この操作は元に戻せません。")) {
      localStorage.removeItem("watchedVideos")
      this.updateProgressDisplay()
      location.reload()
    }
  },

  // カテゴリの進捗率を計算
  getCategoryProgress(categoryId) {
    const category = videoData[categoryId]
    const totalVideos = category.videos.length
    const watchedVideos = category.videos.filter((video) => this.isWatched(video.id)).length
    return {
      watched: watchedVideos,
      total: totalVideos,
      percentage: Math.round((watchedVideos / totalVideos) * 100),
    }
  },

  // 全体の進捗率を計算
  getOverallProgress() {
    let totalVideos = 0
    let watchedVideos = 0

    Object.keys(videoData).forEach((categoryId) => {
      const category = videoData[categoryId]
      totalVideos += category.videos.length
      watchedVideos += category.videos.filter((video) => this.isWatched(video.id)).length
    })

    return {
      watched: watchedVideos,
      total: totalVideos,
      percentage: Math.round((watchedVideos / totalVideos) * 100),
    }
  },

  // 進捗表示を更新
  updateProgressDisplay() {
    // カテゴリカードの進捗表示を更新
    document.querySelectorAll(".category-card").forEach((card) => {
      const categoryId = card.dataset.category
      const progress = this.getCategoryProgress(categoryId)

      let progressElement = card.querySelector(".category-progress")
      if (!progressElement) {
        progressElement = document.createElement("div")
        progressElement.className = "category-progress"
        card.querySelector(".category-card").appendChild(progressElement)
      }

      progressElement.innerHTML = `
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${progress.percentage}%"></div>
        </div>
        <div class="progress-text">${progress.watched}/${progress.total} 完了 (${progress.percentage}%)</div>
      `
    })

    // 動画カードの視聴済みマークを更新
    document.querySelectorAll(".video-card").forEach((card) => {
      const videoId = card.dataset.videoId
      if (this.isWatched(videoId)) {
        card.classList.add("watched")
        if (!card.querySelector(".watched-badge")) {
          const badge = document.createElement("div")
          badge.className = "watched-badge"
          badge.innerHTML = "✓ 視聴済み"
          card.querySelector(".video-card-content").appendChild(badge)
        }
      }
    })
  },
}

// 動画リスト表示
function showVideoList(categoryId) {
  currentCategory = categoryId
  const category = videoData[categoryId]

  // カテゴリ情報の表示
  document.getElementById("category-icon-display").textContent = category.icon
  document.getElementById("category-name-display").textContent = category.name

  // 進捗情報を表示
  const progress = progressManager.getCategoryProgress(categoryId)
  const existingProgress = document.querySelector(".category-progress-header")
  if (existingProgress) {
    existingProgress.remove()
  }

  const progressHeader = document.createElement("div")
  progressHeader.className = "category-progress-header"
  progressHeader.innerHTML = `
    <div class="progress-info">
      <h3>学習進捗: ${progress.watched}/${progress.total} 完了 (${progress.percentage}%)</h3>
      <div class="progress-bar-large">
        <div class="progress-fill" style="width: ${progress.percentage}%"></div>
      </div>
    </div>
  `

  document.querySelector(".screen-header").appendChild(progressHeader)

  // 動画グリッドの生成
  const videosGrid = document.getElementById("videos-grid")
  videosGrid.innerHTML = ""

  category.videos.forEach((video) => {
    const videoCard = createVideoCard(video)
    videosGrid.appendChild(videoCard)
  })

  showScreen("video-list")
}

// 動画カードにサムネイル画像を追加
function createVideoCard(video) {
  const card = document.createElement("div")
  card.className = "video-card"
  card.dataset.videoId = video.id

  // 視聴済みかチェック
  const isWatched = progressManager.isWatched(video.id)
  if (isWatched) {
    card.classList.add("watched")
  }

  // YouTubeサムネイルURLを生成
  const thumbnailUrl = `https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`

  card.innerHTML = `
        <div class="video-thumbnail" style="background-image: url('${thumbnailUrl}'); background-size: cover; background-position: center;">
            <div class="play-overlay">
                <span class="play-icon">▶</span>
            </div>
            ${isWatched ? '<div class="watched-overlay">✓</div>' : ""}
        </div>
        <div class="video-card-content">
            <div class="video-card-header">
                <h4>${video.title}</h4>
                <span class="difficulty-badge ${video.difficulty}">${difficultyMap[video.difficulty]}</span>
            </div>
            <p>${video.description}</p>
            ${isWatched ? '<div class="watched-badge">✓ 視聴済み</div>' : ""}
            <button class="video-card-btn">
                <span class="play-icon">▶</span>
                ${isWatched ? "再視聴する" : "動画を見る"}
            </button>
        </div>
    `

  card.addEventListener("click", () => {
    showVideoWatch(video)
  })

  return card
}

// YouTube動画埋め込み機能 - 最もシンプルで確実な方法
function embedYouTubeVideo(videoId, title) {
  console.log(`=== 動画埋め込み開始 ===`)
  console.log(`タイトル: ${title}`)
  console.log(`動画ID: ${videoId}`)
  console.log(`URL: https://www.youtube.com/embed/${videoId}`)

  const videoPlayer = document.querySelector(".video-player")

  if (!videoPlayer) {
    console.error("❌ video-player要素が見つかりません")
    return
  }

  console.log("✅ video-player要素を発見")

  // 読み込み中表示
  videoPlayer.innerHTML = `
    <div class="video-loading">
      <div class="loading-spinner"></div>
      <p>動画を読み込んでいます...</p>
      <p style="font-size: 12px; color: #ccc;">動画ID: ${videoId}</p>
    </div>
  `

  // 200ms後に動画を埋め込み
  setTimeout(() => {
    console.log("🎬 iframe作成開始")

    // 最もシンプルなiframe埋め込み
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&rel=0&modestbranding=1&fs=1&cc_load_policy=1`

    videoPlayer.innerHTML = `
      <iframe 
        src="${embedUrl}"
        title="${title}"
        width="100%" 
        height="100%" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen
        style="width: 100%; height: 100%; aspect-ratio: 16/9; border-radius: 12px; border: none; display: block;">
      </iframe>
    `

    console.log("✅ iframe埋め込み完了")
    console.log("📺 動画が表示されているはずです")

    // 3秒後に確認
    setTimeout(() => {
      const iframe = videoPlayer.querySelector("iframe")
      if (iframe) {
        console.log("✅ iframe要素が存在します")
        console.log("iframe src:", iframe.src)
      } else {
        console.error("❌ iframe要素が見つかりません")
      }
    }, 3000)
  }, 200)
}

// エラー表示関数
function showVideoError(container, title) {
  container.innerHTML = `
    <div class="video-error">
      <div class="error-icon">⚠️</div>
      <p>動画の読み込みに失敗しました</p>
      <small>${title}</small>
      <p style="font-size: 12px; margin-top: 10px; color: #ccc;">
        ネットワーク接続を確認してください
      </p>
      <button class="retry-btn" onclick="retryVideoLoad()">再試行</button>
    </div>
  `
}

// 再試行機能
function retryVideoLoad() {
  if (currentVideo) {
    console.log("動画の再読み込みを開始")
    embedYouTubeVideo(currentVideo.youtubeId, currentVideo.title)
  }
}

// 印刷ガイド機能
function showPrintGuide(video) {
  const modal = document.getElementById("print-modal")
  const content = document.getElementById("print-guide-content")

  const guideData = printGuideData[video.id]
  if (!guideData) {
    alert("この動画の学習ガイドは準備中です。")
    return
  }

  content.innerHTML = generatePrintGuideHTML(guideData)
  modal.classList.add("active")
}

function generatePrintGuideHTML(data) {
  const difficultyClass = data.difficulty
  const difficultyText = difficultyMap[data.difficulty]

  return `
    <div class="guide-header">
      <div class="guide-title">${data.title}</div>
      <div class="guide-category">${data.category}</div>
      <span class="guide-difficulty ${difficultyClass}">${difficultyText}</span>
    </div>

    <div class="guide-section">
      <h3>🎨 使用する色</h3>
      <div class="color-palette">
        ${data.colors
          .map(
            (color) => `
          <div class="color-item">
            <div class="color-circle" style="background-color: ${color.color}"></div>
            <span>${color.name}</span>
          </div>
        `,
          )
          .join("")}
      </div>
    </div>

    <div class="guide-section">
      <h3>📝 準備するもの</h3>
      <ul>
        <li>水彩絵の具セット</li>
        <li>筆（太筆・細筆）</li>
        <li>画用紙</li>
        <li>水入れ</li>
        <li>ティッシュペーパー</li>
        <li>鉛筆（下書き用）</li>
        <li>消しゴム</li>
      </ul>
    </div>

    <div class="guide-section">
      <h3>👣 描く手順</h3>
      <ul class="step-list">
        ${data.steps.map((step) => `<li>${step}</li>`).join("")}
      </ul>
    </div>

    <div class="tips-box">
      <h4>💡 上手に描くコツ</h4>
      <ul>
        ${data.tips.map((tip) => `<li>${tip}</li>`).join("")}
      </ul>
    </div>

    <div class="warning-box">
      <h4>⚠️ 注意すること</h4>
      <ul>
        ${data.warnings.map((warning) => `<li>${warning}</li>`).join("")}
      </ul>
    </div>

    <div class="guide-section">
      <h3>🌟 完成したら</h3>
      <ul>
        <li>作品を乾かしてから片付けましょう</li>
        <li>使った筆はきれいに洗いましょう</li>
        <li>次の動画にもチャレンジしてみましょう</li>
        <li>家族や友達に作品を見せてあげましょう</li>
      </ul>
    </div>
  `
}

// 動画視聴画面の表示
function showVideoWatch(video) {
  console.log(`動画視聴画面を表示: ${video.title}`)

  currentVideo = video
  const category = videoData[currentCategory]

  // 動画を視聴済みとしてマーク
  progressManager.markAsWatched(video.id)

  // ヘッダー情報の設定
  document.getElementById("video-category-icon").textContent = category.icon
  document.getElementById("video-title-display").textContent = video.title

  const difficultyBadge = document.getElementById("video-difficulty-badge")
  difficultyBadge.textContent = difficultyMap[video.difficulty]
  difficultyBadge.className = `difficulty-badge ${video.difficulty}`

  // 動画情報の設定
  document.getElementById("video-info-title").textContent = video.title
  document.getElementById("video-info-description").textContent = video.description

  // 画面を先に表示
  showScreen("video-watch")

  // 画面表示後に動画を埋め込み（重要：順序を変更）
  setTimeout(() => {
    embedYouTubeVideo(video.youtubeId, video.title)
  }, 100)

  // おすすめ動画の生成
  generateRecommendedVideos(video.id)

  // 印刷ボタンのイベントリスナーを設定
  const printBtn = document.getElementById("print-guide-btn")
  if (printBtn) {
    printBtn.onclick = () => showPrintGuide(video)
  }
}

// おすすめ動画の生成
function generateRecommendedVideos(currentVideoId) {
  const category = videoData[currentCategory]
  const recommendedContainer = document.getElementById("recommended-videos")
  recommendedContainer.innerHTML = ""

  const otherVideos = category.videos.filter((v) => v.id !== currentVideoId).slice(0, 3)

  otherVideos.forEach((video) => {
    const recommendedVideo = document.createElement("div")
    recommendedVideo.className = "recommended-video"
    recommendedVideo.innerHTML = `
            <div class="recommended-thumbnail">
                <span class="play-icon">▶</span>
            </div>
            <div class="recommended-info">
                <h5>${video.title}</h5>
                <span class="difficulty-badge ${video.difficulty}">${difficultyMap[video.difficulty]}</span>
            </div>
        `

    recommendedVideo.addEventListener("click", () => {
      showVideoWatch(video)
    })

    recommendedContainer.appendChild(recommendedVideo)
  })
}

// 戻るボタンのイベントリスナー
document.getElementById("back-to-categories").addEventListener("click", () => {
  showScreen("categories")
})

document.getElementById("back-to-videos").addEventListener("click", () => {
  showVideoList(currentCategory)
})

// 初期化
document.addEventListener("DOMContentLoaded", () => {
  console.log("サイト初期化開始")
  showScreen("categories")

  // 進捗表示を初期化
  setTimeout(() => {
    progressManager.updateProgressDisplay()
    addProgressStatsToHeader()
  }, 100)

  // 印刷モーダルのイベントリスナー
  const printModal = document.getElementById("print-modal")
  const closeBtns = document.querySelectorAll("#close-print-modal, #close-modal-btn")
  const printBtn = document.getElementById("print-btn")

  // モーダルを閉じる
  closeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      printModal.classList.remove("active")
    })
  })

  // モーダル背景クリックで閉じる
  printModal.addEventListener("click", (e) => {
    if (e.target === printModal) {
      printModal.classList.remove("active")
    }
  })

  // 印刷実行
  printBtn.addEventListener("click", () => {
    window.print()
  })

  console.log("サイト初期化完了")
})

// ヘッダーに全体進捗統計を追加
function addProgressStatsToHeader() {
  const header = document.querySelector(".header-content")
  const overallProgress = progressManager.getOverallProgress()

  const existingStats = document.querySelector(".progress-stats")
  if (existingStats) {
    existingStats.remove()
  }

  const progressStats = document.createElement("div")
  progressStats.className = "progress-stats"
  progressStats.innerHTML = `
    <div class="stats-container">
      <div class="stat-item">
        <span class="stat-number">${overallProgress.watched}</span>
        <span class="stat-label">視聴済み</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">${overallProgress.total}</span>
        <span class="stat-label">総動画数</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">${overallProgress.percentage}%</span>
        <span class="stat-label">完了率</span>
      </div>
      <button class="reset-progress-btn" onclick="progressManager.resetProgress()">
        🔄 進捗リセット
      </button>
    </div>
  `

  header.appendChild(progressStats)
}
