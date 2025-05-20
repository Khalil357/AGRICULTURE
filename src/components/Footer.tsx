
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useLanguage();
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-leaf-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white text-leaf-800 w-10 h-10 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
                  <path d="M21 12a9 9 0 0 0-9-9v9h9z" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>
              <span className="text-xl font-display font-bold">KilimoSmart</span>
            </div>
            <p className="text-leaf-100 mb-4">
              Your smart farming assistant for sustainable agriculture
            </p>
            <p className="text-leaf-100">
              &copy; {currentYear} KilimoSmart. {t("footer.rights")}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.about")}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-leaf-100 hover:text-white transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-leaf-100 hover:text-white transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-leaf-100 hover:text-white transition-colors">
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-leaf-100 hover:text-white transition-colors">
                  {t("footer.terms")}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("nav.crops")}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/crops/maize" className="text-leaf-100 hover:text-white transition-colors">
                  Maize
                </Link>
              </li>
              <li>
                <Link to="/crops/rice" className="text-leaf-100 hover:text-white transition-colors">
                  Rice
                </Link>
              </li>
              <li>
                <Link to="/crops/beans" className="text-leaf-100 hover:text-white transition-colors">
                  Beans
                </Link>
              </li>
              <li>
                <Link to="/crops/tomatoes" className="text-leaf-100 hover:text-white transition-colors">
                  Tomatoes
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
