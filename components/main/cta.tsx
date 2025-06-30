import { Download, Mail } from "lucide-react";
import { Button } from "../ui/button";

export const CTA: React.FC = () => {
  return (
    <div className=" bg-[#7A42D6] py-16">
      <div className="text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          まずはお気軽にお問い合わせください
        </h2>
        <p className="text-xl mb-8">福祉リンクの詳細資料をお送りします</p>
        <div className="flex justify-center space-x-4">
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-[#7A42D6] px-8 py-3 bg-transparent"
          >
            <Mail className="w-5 h-5 mr-2" />
            お電話でのお問い合わせ
          </Button>
          <Button className="bg-white text-[#7A42D6] hover:bg-[#A87FF3] px-8 py-3">
            <Download className="w-5 h-5 mr-2" />
            資料ダウンロード
          </Button>
        </div>
      </div>
    </div>
  );
};
