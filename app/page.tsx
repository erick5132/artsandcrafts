"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Palette, BookOpen, Star } from "lucide-react"

// 動画データの構造
interface Video {
  id: string
  title: string
  description: string
  youtubeId: string // 実際のYouTube動画IDに置き換えてください
  difficulty: "初級" | "中級" | "上級"
}

interface Category {
  id: string
  name: string
  icon: string
  color: string
  videos: Video[]
}

const categories: Category[] = [
  {
    id: "sky-clouds",
    name: "空と雲",
    icon: "☁️",
    color: "bg-blue-100 border-blue-300",
    videos: [
      {
        id: "sky1",
        title: "青空の描き方",
        description: "きれいな青空を水彩で表現する方法",
        youtubeId: "z8eG_HjZ2vE", // プレースホルダー
        difficulty: "初級",
      },
      {
        id: "clouds1",
        title: "ふわふわ雲の描き方",
        description: "立体感のある雲を描くコツ",
        youtubeId: "dQw4w9WgXcQ",
        difficulty: "中級",
      },
      {
        id: "sunset1",
        title: "夕焼け空の描き方",
        description: "グラデーションを使った夕焼けの表現",
        youtubeId: "dQw4w9WgXcQ",
        difficulty: "上級",
      },
    ],
  },
  {
    id: "nature",
    name: "自然・植物",
    icon: "🌳",
    color: "bg-green-100 border-green-300",
    videos: [
      {
        id: "tree1",
        title: "大きな木の描き方",
        description: "幹と枝の描き方から葉っぱの表現まで",
        youtubeId: "dQw4w9WgXcQ",
        difficulty: "中級",
      },
      {
        id: "flowers1",
        title: "花畑の描き方",
        description: "色とりどりの花を描くテクニック",
        youtubeId: "dQw4w9WgXcQ",
        difficulty: "初級",
      },
      {
        id: "grass1",
        title: "草原の描き方",
        description: "自然な草の表現方法",
        youtubeId: "dQw4w9WgXcQ",
        difficulty: "初級",
      },
      {
        id: "forest1",
        title: "森の描き方",
        description: "奥行きのある森を表現するコツ",
        youtubeId: "dQw4w9WgXcQ",
        difficulty: "上級",
      },
    ],
  },
  {
    id: "vehicles",
    name: "乗り物",
    icon: "🚗",
    color: "bg-yellow-100 border-yellow-300",
    videos: [
      {
        id: "car1",
        title: "車の描き方",
        description: "基本的な車の形と色の塗り方",
        youtubeId: "dQw4w9WgXcQ",
        difficulty: "中級",
      },
      {
        id: "train1",
        title: "電車の描き方",
        description: "電車の特徴を捉えた描き方",
        youtubeId: "dQw4w9WgXcQ",
        difficulty: "中級",
      },
      {
        id: "bus1",
        title: "バスの描き方",
        description: "大きなバスを上手に描くコツ",
        youtubeId: "dQw4w9WgXcQ",
        difficulty: "初級",
      },
    ],
  },
  {
    id: "buildings",
    name: "建物",
    icon: "🏠",
    color: "bg-purple-100 border-purple-300",
    videos: [
      {
        id: "house1",
        title: "家の描き方",
        description: "基本的な家の構造と彩色",
        youtubeId: "dQw4w9WgXcQ",
        difficulty: "初級",
      },
      {
        id: "school1",
        title: "学校の描き方",
        description: "大きな建物の描き方のコツ",
        youtubeId: "dQw4w9WgXcQ",
        difficulty: "中級",
      },
      {
        id: "castle1",
        title: "お城の描き方",
        description: "複雑な建物を描く上級テクニック",
        youtubeId: "dQw4w9WgXcQ",
        difficulty: "上級",
      },
    ],
  },
  {
    id: "people",
    name: "人物",
    icon: "👨‍👩‍👧‍👦",
    color: "bg-pink-100 border-pink-300",
    videos: [
      {
        id: "face1",
        title: "顔の描き方",
        description: "人の顔の基本的な描き方",
        youtubeId: "dQw4w9WgXcQ",
        difficulty: "中級",
      },
      {
        id: "body1",
        title: "全身の描き方",
        description: "人の全身を描くコツ",
        youtubeId: "dQw4w9WgXcQ",
        difficulty: "上級",
      },
      {
        id: "family1",
        title: "家族の描き方",
        description: "複数の人物を描く方法",
        youtubeId: "dQw4w9WgXcQ",
        difficulty: "上級",
      },
    ],
  },
  {
    id: "ground",
    name: "地面・道",
    icon: "🛤️",
    color: "bg-orange-100 border-orange-300",
    videos: [
      {
        id: "road1",
        title: "道路の描き方",
        description: "遠近感のある道路の表現",
        youtubeId: "dQw4w9WgXcQ",
        difficulty: "中級",
      },
      {
        id: "ground1",
        title: "地面の描き方",
        description: "自然な地面の質感表現",
        youtubeId: "dQw4w9WgXcQ",
        difficulty: "初級",
      },
      {
        id: "mountain1",
        title: "山の描き方",
        description: "遠くの山を表現するテクニック",
        youtubeId: "dQw4w9WgXcQ",
        difficulty: "中級",
      },
    ],
  },
]

export default function PaintingLearningApp() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "初級":
        return "bg-green-500"
      case "中級":
        return "bg-yellow-500"
      case "上級":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm border-b-4 border-blue-300">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Palette className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-800">すいさい絵画教室</h1>
              <p className="text-gray-600">小学生のための水彩画学習サイト</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {!selectedCategory ? (
          /* カテゴリ選択画面 */
          <div>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">何を描きたいですか？</h2>
              <p className="text-gray-600">下のカテゴリから選んでください</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Card
                  key={category.id}
                  className={`cursor-pointer hover:shadow-lg transition-all duration-200 ${category.color} hover:scale-105`}
                  onClick={() => setSelectedCategory(category)}
                >
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-2">{category.icon}</div>
                    <CardTitle className="text-xl">{category.name}</CardTitle>
                    <CardDescription>{category.videos.length}個の動画があります</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-transparent" variant="outline">
                      <Play className="w-4 h-4 mr-2" />
                      動画を見る
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* 使い方説明 */}
            <div className="mt-12 bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                使い方
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <p>
                    描きたいものの
                    <br />
                    カテゴリを選ぶ
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <span className="text-green-600 font-bold">2</span>
                  </div>
                  <p>
                    動画を見ながら
                    <br />
                    一緒に描いてみる
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  <p>
                    上手に描けたら
                    <br />
                    次の動画にチャレンジ
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : !selectedVideo ? (
          /* 動画選択画面 */
          <div>
            <div className="flex items-center gap-4 mb-6">
              <Button variant="outline" onClick={() => setSelectedCategory(null)}>
                ← 戻る
              </Button>
              <div className="flex items-center gap-2">
                <span className="text-2xl">{selectedCategory.icon}</span>
                <h2 className="text-2xl font-bold text-gray-800">{selectedCategory.name}</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedCategory.videos.map((video) => (
                <Card
                  key={video.id}
                  className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105"
                  onClick={() => setSelectedVideo(video)}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg">{video.title}</CardTitle>
                      <Badge className={`${getDifficultyColor(video.difficulty)} text-white`}>{video.difficulty}</Badge>
                    </div>
                    <CardDescription>{video.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-200 rounded-lg h-32 flex items-center justify-center mb-4">
                      <Play className="w-12 h-12 text-gray-500" />
                    </div>
                    <Button className="w-full">
                      <Play className="w-4 h-4 mr-2" />
                      動画を見る
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          /* 動画視聴画面 */
          <div>
            <div className="flex items-center gap-4 mb-6">
              <Button variant="outline" onClick={() => setSelectedVideo(null)}>
                ← 戻る
              </Button>
              <div className="flex items-center gap-2">
                <span className="text-xl">{selectedCategory.icon}</span>
                <h2 className="text-xl font-bold text-gray-800">{selectedVideo.title}</h2>
                <Badge className={`${getDifficultyColor(selectedVideo.difficulty)} text-white`}>
                  {selectedVideo.difficulty}
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* 動画エリア */}
              <div className="lg:col-span-2">
                <div className="bg-black rounded-lg overflow-hidden shadow-lg">
                  <div className="aspect-video bg-gray-900 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Play className="w-16 h-16 mx-auto mb-4" />
                      <p className="text-lg">YouTube動画がここに表示されます</p>
                      <p className="text-sm text-gray-300 mt-2">
                        実際の使用時は、YouTubeの埋め込みコードを
                        <br />
                        ここに配置してください
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{selectedVideo.title}</h3>
                  <p className="text-gray-600 mb-4">{selectedVideo.description}</p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                    <h4 className="font-bold text-yellow-800 mb-2">📝 準備するもの</h4>
                    <ul className="text-yellow-700 text-sm space-y-1">
                      <li>• 水彩絵の具セット</li>
                      <li>• 筆（太筆・細筆）</li>
                      <li>• 画用紙</li>
                      <li>• 水入れ</li>
                      <li>• ティッシュペーパー</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* サイドバー */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-500" />
                      おすすめ動画
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {selectedCategory.videos
                      .filter((v) => v.id !== selectedVideo.id)
                      .slice(0, 3)
                      .map((video) => (
                        <div
                          key={video.id}
                          className="flex gap-3 p-2 rounded hover:bg-gray-50 cursor-pointer"
                          onClick={() => setSelectedVideo(video)}
                        >
                          <div className="bg-gray-200 rounded w-16 h-12 flex items-center justify-center flex-shrink-0">
                            <Play className="w-4 h-4 text-gray-500" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-800 truncate">{video.title}</p>
                            <Badge size="sm" className={`${getDifficultyColor(video.difficulty)} text-white mt-1`}>
                              {video.difficulty}
                            </Badge>
                          </div>
                        </div>
                      ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">💡 描くコツ</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• 最初は薄い色から塗り始めよう</li>
                      <li>• 筆に水をつけすぎないように注意</li>
                      <li>• 色が乾いてから次の色を重ねよう</li>
                      <li>• 失敗を恐れずにチャレンジしよう</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
