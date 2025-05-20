
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: "en", label: "English" },
    { code: "sw", label: "Kiswahili" },
    { code: "es", label: "Español" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-leaf-500 text-white w-10 h-10 rounded-full flex items-center justify-center">
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
          <span className="text-xl font-display font-bold text-leaf-800">KilimoSmart</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground hover:text-primary font-medium transition-colors">
            {t("nav.home")}
          </Link>
          <Link to="/crops" className="text-foreground hover:text-primary font-medium transition-colors">
            {t("nav.crops")}
          </Link>
          <Link to="/about" className="text-foreground hover:text-primary font-medium transition-colors">
            {t("nav.about")}
          </Link>
          <Link to="/contact" className="text-foreground hover:text-primary font-medium transition-colors">
            {t("nav.contact")}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Change language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  className={language === lang.code ? "bg-muted" : ""}
                  onClick={() => setLanguage(lang.code)}
                >
                  {lang.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button className="hidden md:flex">
            {t("hero.cta")}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
