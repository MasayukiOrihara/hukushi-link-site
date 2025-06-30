import { Check } from "lucide-react";

import Image from "next/image";

export const FeaturesDetail: React.FC = () => {
  return (
    <div className="mt-16 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">主な機能</h2>
      </div>

      <div className="space-y-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-[#F3F0FA] p-15 rounded">
            <h3 className="text-2xl font-bold mb-4">利用者管理</h3>
            <p className="text-gray-600 mb-4">
              利用者の基本情報から受給者証情報まで一元管理。契約内容の変更履歴も自動で記録されます。
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <Check className="w-4 h-4 text-[#42D6A0] mr-2" />
                基本情報管理
              </li>
              <li className="flex items-center">
                <Check className="w-4 h-4 text-[#42D6A0] mr-2" />
                受給者証管理
              </li>
              <li className="flex items-center">
                <Check className="w-4 h-4 text-[#42D6A0] mr-2" />
                契約管理
              </li>
            </ul>
          </div>
          <div className="bg-white p-2 m-auto rounded-lg shadow">
            <Image
              src="/image/devise.jpg"
              alt="利用者管理画面"
              width={500}
              height={400}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 bg-white p-2 m-auto rounded-lg shadow">
            <Image
              src="/image/devise.jpg"
              alt="実績入力画面"
              width={500}
              height={400}
            />
          </div>
          <div className="order-1 md:order-2 bg-[#F3F0FA] p-15 rounded">
            <h3 className="text-2xl font-bold mb-4">実績入力</h3>
            <p className="text-gray-600 mb-4">
              カレンダー形式で直感的に実績を入力。一括入力機能で効率的に作業できます。
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <Check className="w-4 h-4 text-[#42D6A0] mr-2" />
                カレンダー入力
              </li>
              <li className="flex items-center">
                <Check className="w-4 h-4 text-[#42D6A0] mr-2" />
                一括入力
              </li>
              <li className="flex items-center">
                <Check className="w-4 h-4 text-[#42D6A0] mr-2" />
                エラーチェック
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-[#F3F0FA] p-15 rounded">
            <h3 className="text-2xl font-bold mb-4">請求書作成</h3>
            <p className="text-gray-600 mb-4">
              実績データから自動で請求書を作成。国保連への伝送データも同時に生成されます。
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <Check className="w-4 h-4 text-[#42D6A0] mr-2" />
                自動計算
              </li>
              <li className="flex items-center">
                <Check className="w-4 h-4 text-[#42D6A0] mr-2" />
                伝送データ作成
              </li>
              <li className="flex items-center">
                <Check className="w-4 h-4 text-[#42D6A0] mr-2" />
                帳票出力
              </li>
            </ul>
          </div>
          <div className="bg-white p-2 m-auto rounded-lg shadow">
            <Image
              src="/image/devise.jpg"
              alt="請求書作成画面"
              width={500}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
