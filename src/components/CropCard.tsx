
import { useLanguage } from "@/contexts/LanguageContext";
import { Crop } from "@/data/crops";
import { Link } from "react-router-dom";

interface CropCardProps {
  crop: Crop;
}

const CropCard = ({ crop }: CropCardProps) => {
  const { language } = useLanguage();
  
  return (
    <Link 
      to={`/crops/${crop.id}`} 
      className="crop-card overflow-hidden flex flex-col h-full"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={crop.image} 
          alt={crop.name[language]} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-leaf-800">
          {crop.name[language]}
        </h3>
        <p className="text-gray-600 mb-4 flex-grow">
          {crop.description[language].length > 100
            ? crop.description[language].substring(0, 100) + "..."
            : crop.description[language]}
        </p>
        <div className="flex items-center justify-between">
          <span className="bg-soil-100 text-soil-800 text-xs px-2 py-1 rounded">
            {crop.season[language]}
          </span>
          <span className="text-sm text-gray-500">
            {crop.growthPeriod[language]}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CropCard;
