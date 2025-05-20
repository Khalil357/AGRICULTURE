
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-leaf-500 to-leaf-700 py-12">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {t("nav.about")}
            </h1>
            <p className="text-xl text-leaf-50 max-w-2xl mx-auto">
              Learn more about KilimoSmart and our mission
            </p>
          </div>
        </section>
        
        {/* About Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2>About KilimoSmart</h2>
              <p>
                KilimoSmart is a comprehensive online agricultural system designed to provide 
                farmers with valuable information about various crops, their cultivation 
                requirements, and best farming practices.
              </p>
              
              <p>
                Our mission is to empower farmers with knowledge and tools that enable them 
                to make informed decisions about their agricultural practices, leading to 
                increased productivity, sustainability, and profitability.
              </p>
              
              <h3>Our Vision</h3>
              <p>
                To be the leading agricultural information platform that contributes to 
                sustainable farming practices and food security across the globe.
              </p>
              
              <h3>What We Offer</h3>
              <ul>
                <li>Detailed information on a wide variety of crops</li>
                <li>Soil requirements and management practices</li>
                <li>Climate condition guidelines for optimal growth</li>
                <li>Effective farming methods and techniques</li>
                <li>Expert tips for successful cultivation</li>
                <li>Multilingual support for wider accessibility</li>
              </ul>
              
              <h3>Who We Serve</h3>
              <p>
                KilimoSmart caters to a diverse audience, including:
              </p>
              <ul>
                <li>Small-scale subsistence farmers</li>
                <li>Commercial agricultural enterprises</li>
                <li>Agricultural extension officers</li>
                <li>Students and researchers in agricultural sciences</li>
                <li>Anyone interested in farming and crop cultivation</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
