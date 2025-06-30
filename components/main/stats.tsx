export const Stats: React.FC = () => {
  return (
    <div className="mt-16 py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">導入実績</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div>
          <div className="text-4xl font-bold text-[#6750A4] mb-2">500+</div>
          <p className="text-gray-600">導入事業所数</p>
        </div>
        <div>
          <div className="text-4xl font-bold text-[#6750A4] mb-2">98%</div>
          <p className="text-gray-600">お客様満足度</p>
        </div>
        <div>
          <div className="text-4xl font-bold text-[#6750A4] mb-2">70%</div>
          <p className="text-gray-600">業務時間短縮</p>
        </div>
      </div>
    </div>
  );
};
