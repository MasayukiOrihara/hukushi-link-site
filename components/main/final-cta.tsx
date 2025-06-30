import { Download } from "lucide-react";
import { Button } from "../ui/button";

export const FinalCTA: React.FC = () => {
  return (
    <div className="mt-16 bg-[#7A42D6] py-16">
      <div className="text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          福祉リンクで業務効率化を始めませんか？
        </h2>
        <p className="text-xl mb-8">まずは無料資料で詳細をご確認ください</p>
        <Button className="bg-white text-[#7A42D6] hover:bg-gray-100 px-8 py-4 text-lg">
          <Download className="w-5 h-5 mr-2" />
          今すぐ無料で資料請求
        </Button>
      </div>
    </div>
  );
};
