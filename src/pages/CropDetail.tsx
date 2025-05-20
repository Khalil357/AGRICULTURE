
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { crops } from "@/data/crops";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, Soil, CloudSun, Tractor, Leaf } from "lucide-react";

const CropDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  
  const crop = crops.find((c) => c.id === id);
  
  useEffect(() => {
    if (!crop) {
      navigate("/crops", { replace: true });
    }
  }, [crop, navigate]);
  
  if (!crop) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="relative h-64 md:h-80 overflow-hidden">
          <img
            src={crop.image}
            alt={crop.name[language]}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="container mx-auto px-4 pb-8">
              <button 
                onClick={() => navigate(-1)}
                className="mb-4 flex items-center text-white hover:text-leaf-200 transition-colors"
              >
                <ChevronLeft className="h-5 w-5 mr-1" />
                Back to crops
              </button>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white">
                {crop.name[language]}
              </h1>
            </div>
          </div>
        </section>
        
        {/* Crop Information */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <p className="text-gray-700">{crop.description[language]}</p>
                
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-leaf-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-500">Growing Season</h3>
                    <p className="text-leaf-800 font-medium">{crop.season[language]}</p>
                  </div>
                  <div className="bg-leaf-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-500">Growth Period</h3>
                    <p className="text-leaf-800 font-medium">{crop.growthPeriod[language]}</p>
                  </div>
                </div>
              </div>
              
              <Tabs defaultValue="soil">
                <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 bg-leaf-50">
                  <TabsTrigger value="soil" className="flex gap-2 items-center">
                    <Soil className="h-4 w-4" />
                    <span>{t('crop.soil')}</span>
                  </TabsTrigger>
                  <TabsTrigger value="climate" className="flex gap-2 items-center">
                    <CloudSun className="h-4 w-4" />
                    <span>{t('crop.climate')}</span>
                  </TabsTrigger>
                  <TabsTrigger value="methods" className="flex gap-2 items-center">
                    <Tractor className="h-4 w-4" />
                    <span>{t('crop.methods')}</span>
                  </TabsTrigger>
                  <TabsTrigger value="tips" className="flex gap-2 items-center">
                    <Leaf className="h-4 w-4" />
                    <span>{t('crop.tips')}</span>
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="soil" className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">{t('crop.soil')}</h3>
                  <ul className="space-y-2">
                    {crop.soilRequirements[language].map((req, index) => (
                      <li key={index} className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-soil-100 text-soil-600 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-xs font-medium">{index + 1}</span>
                        </div>
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                
                <TabsContent value="climate" className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">{t('crop.climate')}</h3>
                  <ul className="space-y-2">
                    {crop.climateConditions[language].map((condition, index) => (
                      <li key={index} className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-xs font-medium">{index + 1}</span>
                        </div>
                        <span className="text-gray-700">{condition}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                
                <TabsContent value="methods" className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">{t('crop.methods')}</h3>
                  <ul className="space-y-2">
                    {crop.farmingMethods[language].map((method, index) => (
                      <li key={index} className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-muted flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-xs font-medium">{index + 1}</span>
                        </div>
                        <span className="text-gray-700">{method}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                
                <TabsContent value="tips" className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">{t('crop.tips')}</h3>
                  <ul className="space-y-2">
                    {crop.tips[language].map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-accent text-accent-foreground flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-xs font-medium">{index + 1}</span>
                        </div>
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CropDetail;
