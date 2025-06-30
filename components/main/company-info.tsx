import { Mail, Phone, Shield } from "lucide-react";

export const CompanyInfo = () => {
  return (
    <div className="mt-16 py-16">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6">会社情報</h3>
          <div className="space-y-4 text-gray-600">
            <div>
              <strong>会社名：</strong>株式会社フリースタイル
            </div>
            <div>
              <strong>所在地：</strong>〒460-xxxx 愛知県名古屋市中区...
            </div>
            <div>
              <strong>電話番号：</strong>0120-xxx-xxx
            </div>
            <div>
              <strong>営業時間：</strong>平日 9:00-18:00
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6">サポート体制</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-[#7A42D6] mt-1" />
              <div>
                <strong>電話サポート</strong>
                <p className="text-gray-600 text-sm">平日 9:00-18:00</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-[#7A42D6] mt-1" />
              <div>
                <strong>メールサポート</strong>
                <p className="text-gray-600 text-sm">24時間受付</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-[#7A42D6] mt-1" />
              <div>
                <strong>導入支援</strong>
                <p className="text-gray-600 text-sm">専任スタッフが対応</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
