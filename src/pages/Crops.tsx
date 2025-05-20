
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { crops } from "@/data/crops";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CropCard from "@/components/CropCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Crops = () => {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter crops based on search term
  const filteredCrops = crops.filter(crop => 
    crop.name[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
    crop.description[language].toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-leaf-500 to-leaf-700 py-12">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {t("crops.title")}
            </h1>
            <p className="text-xl text-leaf-50 max-w-2xl mx-auto">
              {t("crops.subtitle")}
            </p>
          </div>
        </section>
        
        {/* Crops Listing */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto mb-10 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder={t("crops.search")}
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {filteredCrops.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl text-gray-600">No crops found matching your search.</h3>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredCrops.map((crop) => (
                  <CropCard key={crop.id} crop={crop} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Crops;
