import { Card, CardContent } from "../ui/card";
import Image from "next/image";

export const Features: React.FC = () => {
  return (
    <div className="mt-16 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          福祉のぜんぶ、つながる
        </h2>
      </div>

      <div className="flex flex-col gap-8">
        <Card className="bg-white rounded">
          <CardContent className="text-center">
            <h3 className="font-bold text-xl mb-2">作業者と、つながる</h3>
            <p>作業者の作業時間集計から帳票作成までの自動化</p>
            <Image
              src="/images/connect1.png"
              alt="サンプル画像1"
              width={400}
              height={100}
              className="m-auto"
            />
          </CardContent>
        </Card>
        <Card className="bg-white rounded">
          <CardContent className="text-center">
            <h3 className="font-bold text-xl mb-2">過去の履歴と、つながる</h3>
            <p>
              作業者情報および作業時間・作業日報・国保連連携データの履歴管理
            </p>
            <Image
              src="/images/connect2.png"
              alt="サンプル画像2"
              width={400}
              height={100}
              className="m-auto"
            />
          </CardContent>
        </Card>
        <Card className="bg-white rounded">
          <CardContent className="text-center">
            <h3 className="font-bold text-xl mb-2">国保連と、つながる</h3>
            <p>国保連請求の同期機能</p>
            <Image
              src="/images/connect1.png"
              alt="サンプル画像1"
              width={400}
              height={100}
              className="m-auto"
            />
          </CardContent>
        </Card>
        <Card className="bg-white rounded">
          <CardContent className="text-center">
            <h3 className="font-bold text-xl mb-2">福祉施設と、つながる</h3>
            <p>加算の影響も自動計算で見える化</p>
            <Image
              src="/images/connect1.png"
              alt="サンプル画像1"
              width={400}
              height={100}
              className="m-auto"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
