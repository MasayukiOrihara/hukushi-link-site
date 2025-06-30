import { Card, CardContent } from "../ui/card";
import { Check, Download, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

export const Bottom: React.FC = () => {
  return (
    <div className="mt-16 flex flex-col">
      <div className="flex flex-col">
        <p className="m-auto mb-10 text-2xl text-center font-bold text-gray-800">
          こんなお悩みありませんか？
        </p>
        <div className="flex justify-center gap-8">
          <div className="grid grid-cols-1 gap-3">
            <Card className="bg-blue-50 rounded">
              <CardContent>
                <p className="text-center">
                  受給者証番号の更新を
                  <br />
                  忘れていた…
                </p>
              </CardContent>
            </Card>
            <Card className="bg-blue-50 rounded">
              <CardContent>
                <p className="text-center">
                  請求作業に時間が
                  <br />
                  かかって残業に…
                </p>
              </CardContent>
            </Card>
            <Card className="bg-blue-50 rounded">
              <CardContent>
                <p className="text-center">
                  定期指導・監査の
                  <br />
                  準備に追われる…
                </p>
              </CardContent>
            </Card>
          </div>

          <Image
            src="/images/nayami.png"
            alt="サンプル"
            width={250}
            height={250}
          />

          <div className="grid grid-cols-1 gap-3">
            <Card className="bg-blue-50 rounded">
              <CardContent>
                <p className="text-center">
                  業務実績の
                  <br />
                  転記ミスが多い…
                </p>
              </CardContent>
            </Card>
            <Card className="bg-blue-50 rounded">
              <CardContent>
                <p className="text-center">
                  返戻作業が
                  <br />
                  減らない…
                </p>
              </CardContent>
            </Card>
            <Card className="bg-blue-50 rounded">
              <CardContent>
                <p className="text-center">
                  加算・報酬の影響が
                  <br />
                  よくわからない…
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/** bottom2 */}
      <div className="relative mt-20 bg-white rounded p-8 shadow-sm border-4 border-[#7A42D6]">
        <div className="absolute text-center text-white top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#7A42D6] rounded px-6 py-2 text-sm z-10">
          <p className="text-xl font-bold">その悩み、解決できます！</p>
          <p>福祉リンクでぜんぶ解決！</p>
        </div>
        <div className="flex flex-col space-x-8 mt-4">
          <h3 className="text-xl text-center font-bold text-gray-800 mb-2">
            福祉リンクは確かな業務効率化で、
            <br />
            障害のある方の支援に集中できる環境を作ります
          </h3>
          <div className="flex items-start justify-center space-x-4 mt-4">
            <div className=" bg-gray-200">
              <Image
                src="/images/devise.jpg"
                alt="サンプルロゴ"
                width={250}
                height={250}
              />
            </div>
            <div className="text-sm">
              <p className="flex items-center text-gray-700 mb-2">
                <Check className="text-[#7A42D6] size-4.5 mr-2" />
                日報から請求まで一元管理！転記不要でミス削減！
              </p>
              <p className="flex items-center text-gray-700 mb-2">
                <Check className="text-[#7A42D6] size-4.5 mr-2" />
                監査対策に強い！過去の情報も自動で履歴管理！
              </p>
              <p className="flex items-center text-gray-700 mb-2">
                <Check className="text-[#7A42D6] size-4.5 mr-2" />
                国保連ソフトと自動連係！スムーズに請求完了！
              </p>
              <p className="flex items-center text-gray-700 mb-2">
                <Check className="text-[#7A42D6] size-4.5 mr-2" />
                返戻リスクを事前に通知！安心して提出できる！
              </p>
              <p className="flex items-center text-gray-700 mb-2">
                <Check className="text-[#7A42D6] size-4.5 mr-2" />
                利用者情報・支援記録も履歴付きで管理！
              </p>
              <p className="flex items-center text-gray-700 mb-2">
                <Check className="text-[#7A42D6] size-4.5 mr-2" />
                加算の影響も自動計算で見える化！
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Button
              variant={"outline"}
              className=" hover:bg-[#A87FF3] text-[#7A42D6]"
            >
              無料デモ体験
              <ArrowRight className="w-4 h-4 mr-2" />
            </Button>

            <Button className="bg-[#7A42D6] hover:bg-[#A87FF3] text-white ml-4">
              資料をダウンロード
              <Download className="w-4 h-4 mr-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
