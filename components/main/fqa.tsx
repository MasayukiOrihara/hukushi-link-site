import { Mail, Phone } from "lucide-react";
import { Button } from "../ui/button";

export const FQA: React.FC = () => {
  return (
    <div className="mt-16 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">よくある質問</h2>
        <p className="text-gray-600">
          お客様からよくいただくご質問をまとめました
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          {/* 料金について */}
          <div className="bg-white rounded-lg shadow-sm">
            <details className="group">
              <summary className="flex justify-between items-center p-6 cursor-pointer">
                <h3 className="text-lg font-semibold text-gray-900">
                  料金はどのくらいかかりますか？
                </h3>
                <span className="text-[#6750A4] group-open:rotate-180 transition-transform">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                <p className="mb-3">
                  月額料金は利用者数に応じて設定されており、初期費用は一切かかりません。
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>利用者数20名まで：月額15,000円</li>
                  <li>利用者数50名まで：月額25,000円</li>
                  <li>利用者数100名まで：月額40,000円</li>
                  <li>それ以上：お見積もりいたします</li>
                </ul>
                <p className="mt-3 text-sm">
                  詳細な料金表は資料請求でご確認いただけます。
                </p>
              </div>
            </details>
          </div>

          {/* 導入について */}
          <div className="bg-white rounded-lg shadow-sm">
            <details className="group">
              <summary className="flex justify-between items-center p-6 cursor-pointer">
                <h3 className="text-lg font-semibold text-gray-900">
                  導入にはどのくらいの期間がかかりますか？
                </h3>
                <span className="text-[#6750A4] group-open:rotate-180 transition-transform">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                <p className="mb-3">
                  お申し込みから運用開始まで、通常1〜2ヶ月程度です。
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>初期設定・データ移行：1〜2週間</li>
                  <li>操作研修・テスト運用：1〜2週間</li>
                  <li>本格運用開始</li>
                </ul>
                <p className="mt-3 text-sm">
                  お急ぎの場合は最短1ヶ月での導入も可能です。
                </p>
              </div>
            </details>
          </div>

          {/* 機能について */}
          <div className="bg-white rounded-lg shadow-sm">
            <details className="group">
              <summary className="flex justify-between items-center p-6 cursor-pointer">
                <h3 className="text-lg font-semibold text-gray-900">
                  どのような福祉サービスに対応していますか？
                </h3>
                <span className="text-[#6750A4] group-open:rotate-180 transition-transform">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                <p className="mb-3">障害福祉サービス全般に対応しています。</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>就労継続支援A型・B型</li>
                  <li>就労移行支援・就労定着支援</li>
                  <li>生活介護</li>
                  <li>自立訓練（機能訓練・生活訓練）</li>
                  <li>障害児通所支援（児童発達支援・放課後等デイサービス）</li>
                  <li>共同生活援助（グループホーム）</li>
                  <li>相談支援</li>
                </ul>
              </div>
            </details>
          </div>

          {/* サポートについて */}
          <div className="bg-white rounded-lg shadow-sm">
            <details className="group">
              <summary className="flex justify-between items-center p-6 cursor-pointer">
                <h3 className="text-lg font-semibold text-gray-900">
                  サポート体制はどうなっていますか？
                </h3>
                <span className="text-[#6750A4] group-open:rotate-180 transition-transform">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                <p className="mb-3">
                  充実したサポート体制でお客様をバックアップします。
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>電話サポート：平日9:00〜18:00</li>
                  <li>メールサポート：24時間受付（営業日内に回答）</li>
                  <li>導入時の専任サポート担当者による個別支援</li>
                  <li>操作研修・定期的なフォローアップ</li>
                  <li>制度改正時の無料アップデート</li>
                </ul>
              </div>
            </details>
          </div>

          {/* セキュリティについて */}
          <div className="bg-white rounded-lg shadow-sm">
            <details className="group">
              <summary className="flex justify-between items-center p-6 cursor-pointer">
                <h3 className="text-lg font-semibold text-gray-900">
                  データのセキュリティは大丈夫ですか？
                </h3>
                <span className="text-[#6750A4] group-open:rotate-180 transition-transform">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                <p className="mb-3">
                  個人情報保護に関する厳格なセキュリティ対策を実施しています。
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>SSL暗号化通信による安全なデータ送受信</li>
                  <li>国内データセンターでの厳重なデータ管理</li>
                  <li>定期的なセキュリティ監査の実施</li>
                  <li>アクセス権限の細かな設定が可能</li>
                  <li>自動バックアップによるデータ保護</li>
                </ul>
              </div>
            </details>
          </div>

          {/* 既存システムとの連携 */}
          <div className="bg-white rounded-lg shadow-sm">
            <details className="group">
              <summary className="flex justify-between items-center p-6 cursor-pointer">
                <h3 className="text-lg font-semibold text-gray-900">
                  現在使っているシステムからデータを移行できますか？
                </h3>
                <span className="text-[#6750A4] group-open:rotate-180 transition-transform">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                <p className="mb-3">
                  既存システムからのデータ移行も専任スタッフがサポートいたします。
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Excel・CSV形式でのデータインポート機能</li>
                  <li>他社システムからの移行実績多数</li>
                  <li>データ移行時の専任サポート</li>
                  <li>移行前後のデータ整合性チェック</li>
                </ul>
                <p className="mt-3 text-sm">
                  具体的な移行方法については、お気軽にご相談ください。
                </p>
              </div>
            </details>
          </div>

          {/* 無料体験について */}
          <div className="bg-white rounded-lg shadow-sm">
            <details className="group">
              <summary className="flex justify-between items-center p-6 cursor-pointer">
                <h3 className="text-lg font-semibold text-gray-900">
                  無料体験はできますか？
                </h3>
                <span className="text-[#6750A4] group-open:rotate-180 transition-transform">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                <p className="mb-3">
                  はい、無料デモンストレーションをご利用いただけます。
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>オンラインでのデモンストレーション（約30分）</li>
                  <li>実際の画面を使った機能説明</li>
                  <li>ご質問・ご相談への個別対応</li>
                  <li>お客様の業務に合わせたカスタマイズ提案</li>
                </ul>
                <p className="mt-3 text-sm">
                  デモのご予約は資料請求フォームまたはお電話で承ります。
                </p>
              </div>
            </details>
          </div>

          {/* 制度改正対応 */}
          <div className="bg-white rounded-lg shadow-sm">
            <details className="group">
              <summary className="flex justify-between items-center p-6 cursor-pointer">
                <h3 className="text-lg font-semibold text-gray-900">
                  制度改正があった場合の対応はどうなりますか？
                </h3>
                <span className="text-[#6750A4] group-open:rotate-180 transition-transform">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                <p className="mb-3">
                  制度改正に伴うシステムアップデートは無料で提供いたします。
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>報酬改定・制度変更への迅速な対応</li>
                  <li>アップデート費用は月額料金に含まれています</li>
                  <li>改正内容の事前説明・操作研修の実施</li>
                  <li>移行期間中の手厚いサポート</li>
                </ul>
              </div>
            </details>
          </div>

          {/* 解約について */}
          <div className="bg-white rounded-lg shadow-sm">
            <details className="group">
              <summary className="flex justify-between items-center p-6 cursor-pointer">
                <h3 className="text-lg font-semibold text-gray-900">
                  解約時の手続きや費用はどうなりますか？
                </h3>
                <span className="text-[#6750A4] group-open:rotate-180 transition-transform">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                <p className="mb-3">
                  解約時の違約金や手数料は一切かかりません。
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>1ヶ月前のご連絡で解約可能</li>
                  <li>解約手数料・違約金なし</li>
                  <li>データのエクスポート機能あり</li>
                  <li>解約後のデータ保持期間：3ヶ月</li>
                </ul>
              </div>
            </details>
          </div>
        </div>

        {/* FAQ CTA */}
        <div className="mt-12 text-center bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-xl font-bold mb-4">
            その他のご質問がございましたら
          </h3>
          <p className="text-gray-600 mb-6">
            上記以外にもご不明な点がございましたら、お気軽にお問い合わせください。
            <br />
            専門スタッフが丁寧にお答えいたします。
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-[#6750A4] hover:bg-[#6750A4] text-white px-6 py-3">
              <Mail className="w-4 h-4 mr-2" />
              メールで問い合わせ
            </Button>
            <Button
              variant="outline"
              className="border-[#6750A4] text-[#6750A4] hover:bg-orange-50 px-6 py-3 bg-transparent"
            >
              <Phone className="w-4 h-4 mr-2" />
              電話で問い合わせ
            </Button>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            電話受付時間：平日 9:00-18:00 | 0120-123-456
          </p>
        </div>
      </div>
    </div>
  );
};
