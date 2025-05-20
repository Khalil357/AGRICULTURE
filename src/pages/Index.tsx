
import { useLanguage } from "@/contexts/LanguageContext";
import { crops } from "@/data/crops";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CropCard from "@/components/CropCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Thermometer, CloudSun, Soil } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const { t } = useLanguage();
  
  const featuredCrops = crops.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-leaf-500 to-leaf-700 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
                  {t("hero.title")}
                </h1>
                <p className="text-xl text-leaf-50 max-w-lg">
                  {t("hero.subtitle")}
                </p>
                <div className="pt-4">
                  <Link to="/crops">
                    <Button size="lg" className="bg-white text-leaf-800 hover:bg-leaf-50">
                      {t("hero.cta")} <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="hidden md:block">
                <div className="relative">
                  <div className="absolute -top-16 -left-10 w-24 h-24 bg-leaf-300 rounded-full opacity-30 animate-float"></div>
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-leaf-300 rounded-full opacity-30 animate-float" style={{ animationDelay: "0.5s" }}></div>
                  
                  <img
                    src="https://images.unsplash.com/photo-1566119702412-e4e20a8cd302?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZmFybWVyfHx8fHx8MTcxNTkwMzg4NA&ixlib=rb-4.0.3&q=80&w=1080"
                    alt="Farmer working on field"
                    className="rounded-lg shadow-xl relative z-10 max-h-[500px] object-cover w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Crops Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-title">{t("crops.title")}</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t("crops.subtitle")}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredCrops.map((crop) => (
                <CropCard key={crop.id} crop={crop} />
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Link to="/crops">
                <Button variant="outline" className="button-outline">
                  View All Crops <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-title">Why Choose KilimoSmart?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get expert farming guidance tailored to your needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-12 w-12 rounded-lg bg-leaf-100 flex items-center justify-center text-leaf-600 mb-4">
                  <Leaf className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Crop Information</h3>
                <p className="text-gray-600">
                  Detailed guides on various crops and their cultivation requirements.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-12 w-12 rounded-lg bg-soil-100 flex items-center justify-center text-soil-600 mb-4">
                  <Soil className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Soil Analysis</h3>
                <p className="text-gray-600">
                  Learn about soil requirements for different crops and how to improve soil health.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                  <CloudSun className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Weather Guidance</h3>
                <p className="text-gray-600">
                  Information on optimal climate conditions for various crops.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center text-accent-foreground mb-4">
                  <Thermometer className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Farming Tips</h3>
                <p className="text-gray-600">
                  Expert advice and best practices for successful cultivation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
