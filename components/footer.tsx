import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  <Image
                    src="/images/logo.png"
                    alt="サンプルロゴ"
                    width={100}
                    height={100}
                  />
                </span>
              </div>
              <span className="text-xl font-bold">福祉リンク</span>
            </div>
            <p className="text-gray-400 text-sm">
              福祉施設向け請求事務効率化クラウドサービス
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">サービス</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  機能一覧
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  料金プラン
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  導入事例
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">サポート</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  よくある質問
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  お問い合わせ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  資料請求
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">会社情報</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  会社概要
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  利用規約
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 株式会社フリースタイル. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
