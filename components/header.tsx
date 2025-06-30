import { Download, Phone } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
/*
export const colors = {
  primary: "#7A42D6",     // メインカラー（紫）
  primaryLight: "#A87FF3",// 明るいアクセント用
  background: "#F3F0FA",  // サイト全体の背景に
  text: "#2D1E5F",        // 本文などの濃いテキスト
  border: "#DAD6E5",      // 枠線や分離線
  accent: "#42D6A0",      // 差し色（CTAやアイコンなど）
};*/

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md border-b-2 border-[#7A42D6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8">
              <span className="text-white font-bold text-sm">
                <Image
                  src="/images/logo.png"
                  alt="サンプルロゴ"
                  width={100}
                  height={100}
                />
              </span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">福祉リンク</h1>
              <p className="text-xs text-gray-600">
                福祉施設向け請求事務効率化クラウドサービス
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-700">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">0120-xxx-xxx</span>
              <span className="text-sm text-gray-500">通話無料</span>
            </div>
            <Button className="bg-[#7A42D6] hover:bg-[#A87FF3] text-white">
              <Download className="w-4 h-4 mr-2" />
              資料ダウンロード
            </Button>
          </div>
        </div>

        <nav>
          <div className="flex space-x-8 py-4">
            <a href="#" className="text-gray-700 hover:text-[#A87FF3]">
              対応サービス
            </a>
            <a href="#" className="text-gray-700 hover:text-[#A87FF3]">
              機能
            </a>
            <a href="#" className="text-gray-700 hover:text-[#A87FF3]">
              料金
            </a>
            <a href="#" className="text-gray-700 hover:text-[#A87FF3]">
              サポート
            </a>
            <a href="#" className="text-gray-700 hover:text-[#A87FF3]">
              導入支援
            </a>
            <a href="#" className="text-gray-700 hover:text-[#A87FF3]">
              お客様の声
            </a>
            <a href="#" className="text-gray-700 hover:text-[#A87FF3]">
              わたしたちについて
            </a>
            <a href="#" className="text-gray-700 hover:text-[#A87FF3]">
              お役立ち情報
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};
