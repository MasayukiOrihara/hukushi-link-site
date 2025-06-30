import { Mail } from "lucide-react";

export const FlowLine: React.FC = () => {
  return (
    <div className="relative">
      {/* Flow Line */}
      <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-[#A87FF3]"></div>

      <div className="grid md:grid-cols-5 gap-8">
        {/* Step 1 */}
        <div className="text-center relative">
          <div className="w-16 h-16 bg-[#7A42D6] text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-xl relative z-10">
            1
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-bold text-lg mb-2">お問い合わせ</h3>
            <p className="text-gray-600 text-sm mb-3">
              資料請求またはお電話でお気軽にお問い合わせください
            </p>
            <div className="text-xs text-gray-500">所要時間: 即日対応</div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="text-center relative">
          <div className="w-16 h-16 bg-[#7A42D6] text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-xl relative z-10">
            2
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="w-12 h-12 bg-green-100 rounded-full mx-auto mb-3 flex items-center justify-center">
              <span className="text-2xl">💻</span>
            </div>
            <h3 className="font-bold text-lg mb-2">デモ・ヒアリング</h3>
            <p className="text-gray-600 text-sm mb-3">
              オンラインデモで機能をご確認いただき、ご要望をお聞きします
            </p>
            <div className="text-xs text-gray-500">所要時間: 1-2週間</div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="text-center relative">
          <div className="w-16 h-16 bg-[#7A42D6] text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-xl relative z-10">
            3
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="w-12 h-12 bg-yellow-100 rounded-full mx-auto mb-3 flex items-center justify-center">
              <span className="text-2xl">⚙️</span>
            </div>
            <h3 className="font-bold text-lg mb-2">初期設定</h3>
            <p className="text-gray-600 text-sm mb-3">
              利用者情報の登録や各種設定を専任スタッフがサポートします
            </p>
            <div className="text-xs text-gray-500">所要時間: 1-2週間</div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="text-center relative">
          <div className="w-16 h-16 bg-[#7A42D6] text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-xl relative z-10">
            4
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="w-12 h-12 bg-purple-100 rounded-full mx-auto mb-3 flex items-center justify-center">
              <span className="text-2xl">📚</span>
            </div>
            <h3 className="font-bold text-lg mb-2">研修・練習</h3>
            <p className="text-gray-600 text-sm mb-3">
              操作方法の研修を実施し、安心して使えるまでサポートします
            </p>
            <div className="text-xs text-gray-500">所要時間: 1週間</div>
          </div>
        </div>

        {/* Step 5 */}
        <div className="text-center relative">
          <div className="w-16 h-16 bg-[#7A42D6] text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-xl relative z-10">
            5
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="w-12 h-12 bg-green-100 rounded-full mx-auto mb-3 flex items-center justify-center">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="font-bold text-lg mb-2">運用開始</h3>
            <p className="text-gray-600 text-sm mb-3">
              本格運用開始後も継続的にサポートいたします
            </p>
            <div className="text-xs text-gray-500">継続サポート</div>
          </div>
        </div>
      </div>
    </div>
  );
};
