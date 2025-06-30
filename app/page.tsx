import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Top } from "@/components/main/top";
import { Bottom } from "@/components/main/bottom";
import { Features } from "@/components/main/features";
import { CTA } from "@/components/main/cta";
import { Stats } from "@/components/main/stats";
import { CustomerVoices } from "@/components/main/customer-voices";
import { FeaturesDetail } from "@/components/main/features-detail";
import { CompanyInfo } from "@/components/main/company-info";
import { FlowLine } from "@/components/main/flow-line";
import { FQA } from "@/components/main/fqa";
import { FinalCTA } from "@/components/main/final-cta";

export default function FukushiCloudLanding() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Main Content */}
      <main>
        {/* 1項目目 */}
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
            <Top />
          </div>
        </div>

        {/* 3項目目 */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Bottom />
          </div>
        </div>

        {/* 2項目目 */}
        <div className="bg-[#F3F0FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Features />
          </div>
        </div>

        <CTA />

        {/* 3項目目 */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <FeaturesDetail />
          </div>
        </div>

        {/* 4項目目 */}
        <div className="bg-[#F3F0FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <FlowLine />
          </div>
        </div>

        <CTA />

        {/* 5項目目 */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Stats />
          </div>
        </div>

        {/* 6項目目 */}
        <div className="bg-[#F3F0FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <CustomerVoices />
          </div>
        </div>

        {/* 7項目目 */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <FQA />
          </div>
        </div>

        <FinalCTA />

        {/* 8項目目 */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <CompanyInfo />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
