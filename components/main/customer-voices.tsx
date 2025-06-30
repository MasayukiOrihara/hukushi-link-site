import { Card, CardContent } from "../ui/card";

export const CustomerVoices: React.FC = () => {
  return (
    <div className="mt-16 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">お客様の声</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <img
                src="/placeholder.svg?height=60&width=60"
                alt="お客様1"
                className="w-15 h-15 rounded-full"
              />
              <div>
                <h4 className="font-bold mb-1">A型事業所 管理者様</h4>
                <p className="text-sm text-gray-600 mb-3">就労継続支援A型</p>
                <p className="text-gray-700">
                  「請求業務が月末の2日間で完了するようになりました。以前は1週間かかっていたので、大幅な時短効果を実感しています。」
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <img
                src="/placeholder.svg?height=60&width=60"
                alt="お客様2"
                className="w-15 h-15 rounded-full"
              />
              <div>
                <h4 className="font-bold mb-1">生活介護事業所 事務員様</h4>
                <p className="text-sm text-gray-600 mb-3">生活介護</p>
                <p className="text-gray-700">
                  「操作が簡単で、パソコンが苦手な私でもすぐに使えるようになりました。サポートも親切で安心です。」
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
