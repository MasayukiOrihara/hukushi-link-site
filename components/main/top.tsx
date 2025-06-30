"use client";

import { useState } from "react";
import { Cloud, Download, FileText, ShieldCheck } from "lucide-react";

import Image from "next/image";

import { Card, CardContent } from "../ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Checkbox } from "@radix-ui/react-checkbox";

export const Top: React.FC = () => {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    phone: "",
    email: "",
    services: [] as string[],
  });

  const handleServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        services: [...prev.services, service],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        services: prev.services.filter((s) => s !== service),
      }));
    }
  };

  const features = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-purple-600" />,
      title: "国保連対応",
      description: "最新フォーマットに対応。国保連請求業務を効率化します。",
    },
    {
      icon: <FileText className="w-10 h-10 text-purple-600" />,
      title: "請求自動化",
      description: "請求書作成・管理を自動化し、ミスや工数を削減します。",
    },
    {
      icon: <Cloud className="w-10 h-10 text-purple-600" />,
      title: "クラウド一括管理",
      description: "どこからでもアクセス可能。全てのデータを一元管理。",
    },
  ];

  return (
    <div className="grid lg:grid-cols-3 gap-16">
      {/* Left Content */}
      <div className="lg:col-span-2">
        <div className="mb-2 flex items-end bg-gradient-to-r from-purple-600 to-indigo-500 py-4 px-8">
          <div>
            <p className="text-yellow-300 font-medium mb-2">
              福祉施設向け請求事務効率化クラウドサービス
            </p>
            <h2 className="text-5xl font-bold text-gray-100 tracking-wider mb-4">
              福祉のぜんぶ、
              <br />
              <div className="mt-6" />
              つながる
            </h2>
          </div>
          <div className="flex items-center space-x-4 -ml-30 mb-5 border  border-gray-200 py-1 px-2">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-200  tracking-wide">
                福祉リンク
              </span>
            </div>
          </div>
        </div>

        {/** 強み3カラム */}
        <section className="mb-2 py-6 px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition"
              >
                {f.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-700">
                  {f.title}
                </h3>
                <p className="text-gray-600 text-sm">{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Product Screenshots */}
        <div className="relative">
          <div className="flex items-center justify-center space-x-8">
            {/* Mobile mockup */}
            <div className="relative">
              <div className="w-56 h-102 bg-gray-900 rounded-3xl p-2">
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                  <div className="bg-[#7A42D6] h-16 flex items-center justify-center">
                    <span className="text-white font-bold">福祉リンク</span>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="bg-gray-100 h-8 rounded"></div>
                    <div className="bg-gray-100 h-8 rounded"></div>
                    <div className="bg-gray-100 h-8 rounded"></div>
                    <div className="bg-[#F3F0FA] h-12 rounded flex items-center justify-center">
                      <span className="text-[#7A42D6] text-sm">請求書作成</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop mockup */}
            <div className="relative">
              <div className="w-102 h-70 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <div className="bg-gray-800 h-6 flex items-center px-2 space-x-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <div className="bg-white h-full p-4">
                  <div className="bg-[#7A42D6] text-white p-2 rounded mb-4">
                    <span className="font-bold">
                      福祉リンク - 請求管理システム
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="bg-blue-100 p-2 rounded text-center text-xs">
                      利用者管理
                    </div>
                    <div className="bg-green-100 p-2 rounded text-center text-xs">
                      実績入力
                    </div>
                    <div className="bg-yellow-100 p-2 rounded text-center text-xs">
                      請求書作成
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-gray-100 h-4 rounded"></div>
                    <div className="bg-gray-100 h-4 rounded w-3/4"></div>
                    <div className="bg-gray-100 h-4 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Contact Form */}
      <div className="lg:col-span-1">
        <Card className="sticky top-8">
          <CardContent className="p-6">
            <p className="text-center text-[#7A42D6] font-bold text-sm">
              ◯◯社導入実績あり
            </p>
            <h3 className="text-xl font-bold text-center mb-6">
              今すぐ無料で資料請求する
            </h3>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="lastName" className="text-sm font-medium">
                    <span className="bg-[#7A42D6] text-white px-1 rounded text-xs mr-1">
                      必須
                    </span>
                    姓
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="田中"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        lastName: e.target.value,
                      }))
                    }
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="firstName" className="text-sm font-medium">
                    <span className="bg-[#7A42D6] text-white px-1 rounded text-xs mr-1">
                      必須
                    </span>
                    名
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="太郎"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        firstName: e.target.value,
                      }))
                    }
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone" className="text-sm font-medium">
                  <span className="bg-[#7A42D6] text-white px-1 rounded text-xs mr-1">
                    必須
                  </span>
                  電話番号
                </Label>
                <Input
                  id="phone"
                  placeholder="0123456789"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      phone: e.target.value,
                    }))
                  }
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium">
                  <span className="bg-gray-400 text-white px-1 rounded text-xs mr-1">
                    任意
                  </span>
                  メールアドレス
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="xxxx@xxxx.jp"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  className="mt-1"
                />
              </div>

              <div>
                <Label className="text-sm font-medium">
                  <span className="bg-gray-400 text-white px-1 rounded text-xs mr-1">
                    任意
                  </span>
                  運営サービス種別
                </Label>
                <div className="mt-2 space-y-2">
                  {[
                    "就労支援A型/B型・移行・定着",
                    "自立訓練（生活/機能）",
                    "生活介護・障害児通所（児発・放デイ）",
                    "相談支援",
                    "共同生活援助（グループホーム）",
                    "その他",
                  ].map((service) => (
                    <div key={service} className="flex items-center space-x-2">
                      <Checkbox
                        id={service}
                        checked={formData.services.includes(service)}
                        onCheckedChange={(checked) =>
                          handleServiceChange(service, checked as boolean)
                        }
                      />
                      <Label htmlFor={service} className="text-sm">
                        {service}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full bg-[#7A42D6] hover:bg-[#A87FF3] text-white py-3">
                <Download className="w-4 h-4 mr-2" />
                下記に同意して資料をダウンロード
              </Button>

              <p className="text-xs text-gray-600 text-center">
                <a href="#" className="text-blue-600 underline">
                  プライバシーポリシー
                </a>
                に同意してお申し込みください
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
