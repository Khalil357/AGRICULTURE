
export interface Crop {
  id: string;
  name: {
    en: string;
    sw: string;
    es: string;
  };
  description: {
    en: string;
    sw: string;
    es: string;
  };
  image: string;
  soilRequirements: {
    en: string[];
    sw: string[];
    es: string[];
  };
  climateConditions: {
    en: string[];
    sw: string[];
    es: string[];
  };
  farmingMethods: {
    en: string[];
    sw: string[];
    es: string[];
  };
  tips: {
    en: string[];
    sw: string[];
    es: string[];
  };
  season: {
    en: string;
    sw: string;
    es: string;
  };
  growthPeriod: {
    en: string;
    sw: string;
    es: string;
  };
}

export const crops: Crop[] = [
  {
    id: "maize",
    name: {
      en: "Maize (Corn)",
      sw: "Mahindi",
      es: "Maíz",
    },
    description: {
      en: "Maize is a cereal grain that was domesticated in Mesoamerica. It is one of the most widely grown crops globally.",
      sw: "Mahindi ni nafaka ambayo ilifugwa Amerika ya Kati. Ni mmoja wa mazao yanayolimwa zaidi duniani.",
      es: "El maíz es un cereal que fue domesticado en Mesoamérica. Es uno de los cultivos más cultivados a nivel mundial.",
    },
    image: "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29ybnx8fHx8fDE3MTU5MDI5MzE&ixlib=rb-4.0.3&q=80&w=1080",
    soilRequirements: {
      en: [
        "Well-drained loamy soil",
        "pH level between 5.5 and 7.0",
        "High in organic matter",
        "Good water retention capacity",
      ],
      sw: [
        "Udongo wa kichanga wenye maji vizuri",
        "Kiwango cha pH kati ya 5.5 na 7.0",
        "Yenye vitu vya asili vingi",
        "Uwezo mzuri wa kushikilia maji",
      ],
      es: [
        "Suelo franco bien drenado",
        "Nivel de pH entre 5.5 y 7.0",
        "Alto en materia orgánica",
        "Buena capacidad de retención de agua",
      ],
    },
    climateConditions: {
      en: [
        "Warm temperatures between 20°C and 30°C",
        "Moderate rainfall (500-750mm per growing season)",
        "Full sun exposure",
        "Low tolerance to frost",
      ],
      sw: [
        "Joto kati ya 20°C na 30°C",
        "Mvua ya wastani (500-750mm kwa msimu wa kukua)",
        "Mwangaza kamili wa jua",
        "Uvumilivu mdogo kwa baridi kali",
      ],
      es: [
        "Temperaturas cálidas entre 20°C y 30°C",
        "Lluvia moderada (500-750mm por temporada de crecimiento)",
        "Exposición completa al sol",
        "Baja tolerancia a las heladas",
      ],
    },
    farmingMethods: {
      en: [
        "Direct seeding at a depth of 3-5cm",
        "Row planting with spacing of 75cm between rows",
        "Regular weeding, especially in early growth stages",
        "Application of nitrogen-rich fertilizers",
        "Crop rotation with legumes",
      ],
      sw: [
        "Kupanda moja kwa moja kwa kina cha 3-5cm",
        "Kupanda kwa safu zenye nafasi ya 75cm kati ya safu",
        "Kupalilia mara kwa mara, hasa katika hatua za awali za ukuaji",
        "Matumizi ya mbolea yenye nitrojeni nyingi",
        "Mzunguko wa mazao na mikunde",
      ],
      es: [
        "Siembra directa a una profundidad de 3-5cm",
        "Plantación en hileras con espaciado de 75cm entre hileras",
        "Deshierbe regular, especialmente en las primeras etapas de crecimiento",
        "Aplicación de fertilizantes ricos en nitrógeno",
        "Rotación de cultivos con legumbres",
      ],
    },
    tips: {
      en: [
        "Plant after the last frost date in spring",
        "Ensure adequate soil moisture during the tasseling and silking stages",
        "Monitor for pests such as corn borers and armyworms",
        "Consider intercropping with beans or squash (Three Sisters method)",
        "Harvest when the kernels are firm and the husks are dry",
      ],
      sw: [
        "Panda baada ya tarehe ya baridi ya mwisho katika majira ya kuchipua",
        "Hakikisha unyevu wa udongo unatosha wakati wa hatua za kutoa maua na kutengeneza nafaka",
        "Fuatilia wadudu kama vile corn borers na armyworms",
        "Fikiria kupanda pamoja na maharagwe au maboga (njia ya Dada Watatu)",
        "Vuna wakati nafaka zimekomaa na maganda yamekauka",
      ],
      es: [
        "Plantar después de la última fecha de helada en primavera",
        "Asegurar humedad adecuada del suelo durante las etapas de espigamiento y emisión de sedas",
        "Monitorear plagas como barrenadores del maíz y gusanos cogolleros",
        "Considerar el cultivo intercalado con frijoles o calabazas (método de las Tres Hermanas)",
        "Cosechar cuando los granos estén firmes y las hojas estén secas",
      ],
    },
    season: {
      en: "Spring to Summer",
      sw: "Kuchipua hadi Kiangazi",
      es: "Primavera a Verano",
    },
    growthPeriod: {
      en: "90 to 120 days",
      sw: "Siku 90 hadi 120",
      es: "90 a 120 días",
    },
  },
  {
    id: "rice",
    name: {
      en: "Rice",
      sw: "Mchele",
      es: "Arroz",
    },
    description: {
      en: "Rice is a cereal grain and one of the most important staple foods for a large part of the world's human population.",
      sw: "Mchele ni nafaka na chakula cha msingi muhimu kwa sehemu kubwa ya watu duniani.",
      es: "El arroz es un cereal y uno de los alimentos básicos más importantes para gran parte de la población mundial.",
    },
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cmljZXx8fHx8fDE3MTU5MDMwMDQ&ixlib=rb-4.0.3&q=80&w=1080",
    soilRequirements: {
      en: [
        "Clay or clay loam soil",
        "pH level between 5.5 and 6.5",
        "Good water retention capacity",
        "High in organic matter",
      ],
      sw: [
        "Udongo wa mfinyanzi au mfinyanzi-kichanga",
        "Kiwango cha pH kati ya 5.5 na 6.5",
        "Uwezo mzuri wa kushikilia maji",
        "Yenye vitu vya asili vingi",
      ],
      es: [
        "Suelo arcilloso o franco arcilloso",
        "Nivel de pH entre 5.5 y 6.5",
        "Buena capacidad de retención de agua",
        "Alto en materia orgánica",
      ],
    },
    climateConditions: {
      en: [
        "Warm temperatures between 20°C and 35°C",
        "High humidity",
        "Abundant water supply",
        "Full sun exposure",
      ],
      sw: [
        "Joto kati ya 20°C na 35°C",
        "Unyevunyevu wa hali ya juu",
        "Usambazaji wa maji mwingi",
        "Mwangaza kamili wa jua",
      ],
      es: [
        "Temperaturas cálidas entre 20°C y 35°C",
        "Alta humedad",
        "Suministro abundante de agua",
        "Exposición completa al sol",
      ],
    },
    farmingMethods: {
      en: [
        "Wet-field cultivation (paddy rice)",
        "Dry-field cultivation (upland rice)",
        "Transplanting seedlings to flooded fields",
        "Maintaining water level of 5-10cm during growth",
        "Draining field before harvest",
      ],
      sw: [
        "Kilimo cha shamba la majimaji (mchele wa paddy)",
        "Kilimo cha shamba kavu (mchele wa upland)",
        "Kupandikiza miche kwenye mashamba yaliyofurika",
        "Kudumisha kiwango cha maji cha 5-10cm wakati wa ukuaji",
        "Kuchuja shamba kabla ya mavuno",
      ],
      es: [
        "Cultivo en campo húmedo (arroz de paddy)",
        "Cultivo en campo seco (arroz de tierras altas)",
        "Trasplante de plántulas a campos inundados",
        "Mantenimiento del nivel de agua de 5-10cm durante el crecimiento",
        "Drenaje del campo antes de la cosecha",
      ],
    },
    tips: {
      en: [
        "Ensure adequate soil preparation before planting",
        "Control water levels carefully throughout the growing season",
        "Monitor for pests such as stem borers and rice bugs",
        "Harvest when 80-85% of the grains are golden yellow",
        "Proper post-harvest drying to prevent mold and quality deterioration",
      ],
      sw: [
        "Hakikisha maandalizi ya kutosha ya udongo kabla ya kupanda",
        "Dhibiti viwango vya maji kwa umakini wakati wote wa msimu wa ukuaji",
        "Fuatilia wadudu kama vile stem borers na rice bugs",
        "Vuna wakati 80-85% ya nafaka ni manjano ya dhahabu",
        "Kukausha baada ya mavuno kwa usahihi kuzuia ukungu na uharibifu wa ubora",
      ],
      es: [
        "Asegurar una preparación adecuada del suelo antes de plantar",
        "Controlar cuidadosamente los niveles de agua durante toda la temporada de crecimiento",
        "Monitorear plagas como barrenadores del tallo y chinches del arroz",
        "Cosechar cuando el 80-85% de los granos estén amarillo dorado",
        "Secado adecuado posterior a la cosecha para prevenir moho y deterioro de la calidad",
      ],
    },
    season: {
      en: "Rainy Season",
      sw: "Msimu wa Mvua",
      es: "Temporada de Lluvia",
    },
    growthPeriod: {
      en: "110 to 150 days",
      sw: "Siku 110 hadi 150",
      es: "110 a 150 días",
    },
  },
  {
    id: "beans",
    name: {
      en: "Beans",
      sw: "Maharagwe",
      es: "Frijoles",
    },
    description: {
      en: "Beans are a common legume that provides protein and nutrients. They are easy to grow and benefit the soil by fixing nitrogen.",
      sw: "Maharagwe ni mikunde ya kawaida ambayo hutoa protini na virutubisho. Ni rahisi kukua na hufaidi udongo kwa kurekebisha nitrojeni.",
      es: "Los frijoles son legumbres comunes que proporcionan proteínas y nutrientes. Son fáciles de cultivar y benefician al suelo fijando nitrógeno.",
    },
    image: "https://images.unsplash.com/photo-1601401339322-969e1c9d3388?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YmVhbnN8fHx8fHwxNzE1OTAzMDQ2&ixlib=rb-4.0.3&q=80&w=1080",
    soilRequirements: {
      en: [
        "Well-drained loamy soil",
        "pH level between 6.0 and 7.5",
        "Moderate fertility",
        "Good organic matter content",
      ],
      sw: [
        "Udongo wa kichanga wenye maji vizuri",
        "Kiwango cha pH kati ya 6.0 na 7.5",
        "Rutuba ya wastani",
        "Yaliyomo ya vitu vya asili vizuri",
      ],
      es: [
        "Suelo franco bien drenado",
        "Nivel de pH entre 6.0 y 7.5",
        "Fertilidad moderada",
        "Buen contenido de materia orgánica",
      ],
    },
    climateConditions: {
      en: [
        "Moderate temperatures between 18°C and 30°C",
        "Consistent moisture but not waterlogged",
        "Full sun to partial shade",
        "Sensitive to frost",
      ],
      sw: [
        "Joto la wastani kati ya 18°C na 30°C",
        "Unyevu thabiti lakini sio ulioloa maji",
        "Jua kamili hadi kivuli cha sehemu",
        "Nyeti kwa baridi kali",
      ],
      es: [
        "Temperaturas moderadas entre 18°C y 30°C",
        "Humedad constante pero no saturado de agua",
        "Sol completo a sombra parcial",
        "Sensible a las heladas",
      ],
    },
    farmingMethods: {
      en: [
        "Direct seeding at a depth of 2-3cm",
        "Row planting with spacing of 30-60cm between rows",
        "Trellising for climbing varieties",
        "Minimal fertilizer requirements due to nitrogen fixation",
        "Regular weeding until plants are established",
      ],
      sw: [
        "Kupanda moja kwa moja kwa kina cha 2-3cm",
        "Kupanda kwa safu zenye nafasi ya 30-60cm kati ya safu",
        "Kusimamisha kwa aina za kupanda",
        "Mahitaji ya chache ya mbolea kutokana na marekebisho ya nitrojeni",
        "Kupalilia mara kwa mara hadi mimea inapoimarika",
      ],
      es: [
        "Siembra directa a una profundidad de 2-3cm",
        "Plantación en hileras con espaciado de 30-60cm entre hileras",
        "Enrejado para variedades trepadoras",
        "Requisitos mínimos de fertilizante debido a la fijación de nitrógeno",
        "Deshierbe regular hasta que las plantas estén establecidas",
      ],
    },
    tips: {
      en: [
        "Plant after all danger of frost has passed",
        "Avoid watering the foliage to prevent disease",
        "Harvest bush beans when pods are firm but before seeds bulge",
        "For dried beans, allow pods to dry on the plant",
        "Practice crop rotation to prevent soil-borne diseases",
      ],
      sw: [
        "Panda baada ya hatari yote ya baridi kupita",
        "Epuka kumwagilia majani kuzuia magonjwa",
        "Vuna maharagwe ya kichaka wakati maganda ni imara lakini kabla ya mbegu kuvimba",
        "Kwa maharagwe yaliyokaushwa, ruhusu maganda kukauka kwenye mmea",
        "Fanya mzunguko wa mazao kuzuia magonjwa yanayotoka kwenye udongo",
      ],
      es: [
        "Plantar después de que todo peligro de helada haya pasado",
        "Evitar regar el follaje para prevenir enfermedades",
        "Cosechar frijoles arbustivos cuando las vainas estén firmes pero antes de que las semillas sobresalgan",
        "Para frijoles secos, permitir que las vainas se sequen en la planta",
        "Practicar rotación de cultivos para prevenir enfermedades transmitidas por el suelo",
      ],
    },
    season: {
      en: "Spring to Summer",
      sw: "Kuchipua hadi Kiangazi",
      es: "Primavera a Verano",
    },
    growthPeriod: {
      en: "50 to 90 days",
      sw: "Siku 50 hadi 90",
      es: "50 a 90 días",
    },
  },
  {
    id: "tomatoes",
    name: {
      en: "Tomatoes",
      sw: "Nyanya",
      es: "Tomates",
    },
    description: {
      en: "Tomatoes are a popular fruiting vegetable that is relatively easy to grow and offers great versatility in cuisine.",
      sw: "Nyanya ni mboga za matunda maarufu ambazo ni rahisi kukua na hutoa matabaka mengi katika mapishi.",
      es: "Los tomates son una hortaliza frutal popular que es relativamente fácil de cultivar y ofrece gran versatilidad en la cocina.",
    },
    image: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dG9tYXRvfHx8fHx8MTcxNTkwMzA3OQ&ixlib=rb-4.0.3&q=80&w=1080",
    soilRequirements: {
      en: [
        "Well-drained loamy soil",
        "pH level between 6.0 and 6.8",
        "Rich in organic matter",
        "Good calcium content to prevent blossom end rot",
      ],
      sw: [
        "Udongo wa kichanga wenye maji vizuri",
        "Kiwango cha pH kati ya 6.0 na 6.8",
        "Tajiri katika vitu vya asili",
        "Yaliyomo ya kalisi nzuri kuzuia kuoza kwa mwisho wa maua",
      ],
      es: [
        "Suelo franco bien drenado",
        "Nivel de pH entre 6.0 y 6.8",
        "Rico en materia orgánica",
        "Buen contenido de calcio para prevenir la pudrición apical",
      ],
    },
    climateConditions: {
      en: [
        "Warm temperatures between 21°C and 29°C",
        "At least 6-8 hours of sunlight daily",
        "Consistent moisture",
        "Sensitive to frost",
      ],
      sw: [
        "Joto kati ya 21°C na 29°C",
        "Angalau masaa 6-8 ya jua kila siku",
        "Unyevu thabiti",
        "Nyeti kwa baridi kali",
      ],
      es: [
        "Temperaturas cálidas entre 21°C y 29°C",
        "Al menos 6-8 horas de luz solar diariamente",
        "Humedad constante",
        "Sensible a las heladas",
      ],
    },
    farmingMethods: {
      en: [
        "Start seeds indoors 6-8 weeks before last frost",
        "Transplant seedlings after all danger of frost has passed",
        "Stake or cage plants for support",
        "Regular pruning of suckers for indeterminate varieties",
        "Mulch to retain moisture and reduce weed competition",
      ],
      sw: [
        "Anza mbegu ndani ya wiki 6-8 kabla ya baridi ya mwisho",
        "Pandikiza miche baada ya hatari yote ya baridi kupita",
        "Simamisha au weka mimea katika kigege kwa usaidizi",
        "Punguza matawi ya mara kwa mara kwa aina zisizo na kikomo",
        "Funika udongo kuhifadhi unyevu na kupunguza ushindani wa magugu",
      ],
      es: [
        "Comenzar semillas en interior 6-8 semanas antes de la última helada",
        "Trasplantar plántulas después de que todo peligro de helada haya pasado",
        "Estaca o enjaula plantas para soporte",
        "Poda regular de chupones para variedades indeterminadas",
        "Mulch para retener humedad y reducir competencia de malezas",
      ],
    },
    tips: {
      en: [
        "Plant deep, burying 2/3 of the stem to develop a stronger root system",
        "Water at the base of plants to prevent leaf diseases",
        "Fertilize after first fruit set with phosphorus-rich fertilizer",
        "Look out for early blight and hornworms",
        "Harvest when fruits are firm and fully colored",
      ],
      sw: [
        "Panda kina, kuzika 2/3 ya shina ili kuendeleza mfumo wa mizizi imara",
        "Mwagilia kwenye msingi wa mimea kuzuia magonjwa ya majani",
        "Weka mbolea baada ya seti ya matunda ya kwanza na mbolea tajiri ya fosfora",
        "Angalia blight ya mapema na hornworms",
        "Vuna wakati matunda ni imara na rangi kamili",
      ],
      es: [
        "Plantar profundo, enterrando 2/3 del tallo para desarrollar un sistema de raíces más fuerte",
        "Regar en la base de las plantas para prevenir enfermedades foliares",
        "Fertilizar después del primer cuajado de frutos con fertilizante rico en fósforo",
        "Estar atento al tizón temprano y gusanos cornudos",
        "Cosechar cuando los frutos estén firmes y completamente coloreados",
      ],
    },
    season: {
      en: "Spring to Fall",
      sw: "Kuchipua hadi Kuanguka",
      es: "Primavera a Otoño",
    },
    growthPeriod: {
      en: "60 to 100 days",
      sw: "Siku 60 hadi 100",
      es: "60 a 100 días",
    },
  },
];
