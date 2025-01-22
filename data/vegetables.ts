import images from "./images";

export const vegetablesDE: Vegetable[] = [
  {
    id: "veg001",
    name: "Karotte",
    emoji: "🥕",
    backgroundColor: "#ffecb3",
    info: "Die Karotte ist ein vielseitiges Wurzelgemüse, das sowohl roh als auch gekocht verzehrt werden kann. Sie ist reich an Nährstoffen und bekannt für ihren hohen Beta-Carotin-Gehalt, der zur Verbesserung der Sehkraft beiträgt. Karotten werden weltweit angebaut, vor allem in Europa, Asien und Nordamerika. Sie lassen sich leicht lagern und sind das ganze Jahr über verfügbar.",
    image: images.karotte,
    season: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    vitamins: [
      {
        name: "Vitamin A (als Beta-Carotin)",
        amount: "835 µg",
        percentage: "93%",
      },
      { name: "Vitamin B1", amount: "69 μg", percentage: "6.3%" },
      { name: "Vitamin B2", amount: "53 μg", percentage: "3.8%" },
      { name: "Vitamin B6", amount: "0.27 mg", percentage: "19.3%" },
      { name: "Vitamin C", amount: "0.5 mg", percentage: "0.6%" },
      { name: "Vitamin E", amount: "46.5 μg", percentage: "0.4%" },
      { name: "Calcium", amount: "35 mg", percentage: "4.4%" },
      { name: "Eisen", amount: "0.39 mg", percentage: "2.8%" },
      { name: "Magnesium", amount: "13 mg", percentage: "3.5%" },
      { name: "Phosphor", amount: "36 mg", percentage: "5.1%" },
      { name: "Kalium", amount: "328 mg", percentage: "16.4%" },
      { name: "Zink", amount: "0.27 mg", percentage: "2.7%" },
    ],
    nutrients: {
      Brennwert: "109 kJ (26 kcal)",
      Ballaststoffe: 3.63,
      Eiweiß: 0.98,
      Kohlenhydrate: 4.8,
      Zucker: 2.08,
      Fett: 0.2,
    },
    benefits: [
      "Verbessert die Sehkraft durch hohen Beta-Carotin-Gehalt",
      "Unterstützt die Immunabwehr durch Vitamin C",
      "Fördert die Herzgesundheit durch Ballaststoffe",
      "Schützt die Haut durch antioxidative Eigenschaften",
    ],
    regionAvailability: [
      "Deutschland",
      "Niederlande",
      "Frankreich",
      "China",
      "USA",
    ],
    storageTips:
      "An einem kühlen, trockenen Ort oder im Kühlschrank aufbewahren.",
    recipes: ["Karottensuppe", "Karottensalat"],
  },
  {
    id: "veg002",
    name: "Spinat",
    emoji: "🌿",
    backgroundColor: "#d0f0c0",
    info: "Spinat ist ein grünes Blattgemüse, das sowohl roh als auch gekocht vielseitig in der Küche verwendet werden kann. Er ist besonders reich an Eisen, Vitaminen und Antioxidantien. Spinat ist eine wichtige Zutat in vielen gesunden Gerichten.",
    image: images.spinat,
    season: [
      "March",
      "April",
      "May",
      "June",
      "September",
      "October",
      "November",
    ],
    vitamins: [
      { name: "Vitamin A", amount: "795 µg", percentage: "99%" }, // NRV: 800 µg
      { name: "Thiamin (Vit. B1)", amount: "90 µg", percentage: "8%" }, // NRV: 1.1 mg
      { name: "Riboflavin (Vit. B2)", amount: "200 µg", percentage: "14%" }, // NRV: 1.4 mg
      { name: "Nicotinsäure (Vit. B3)", amount: "620 µg", percentage: "4%" }, // NRV: 16 mg
      { name: "Vitamin B6", amount: "220 µg", percentage: "16%" }, // NRV: 1.4 mg
      { name: "Vitamin C", amount: "50 mg", percentage: "63%" }, // NRV: 80 mg
      { name: "Folsäure", amount: "145 µg", percentage: "73%" }, // NRV: 200 µg
      { name: "Natrium", amount: "70 mg", percentage: "5%" }, // NRV: 1.5 g
      { name: "Kalium", amount: "555 mg", percentage: "16%" }, // NRV: 3.5 g
      { name: "Magnesium", amount: "60 mg", percentage: "16%" }, // NRV: 375 mg
      { name: "Calcium", amount: "115 mg", percentage: "14%" }, // NRV: 800 mg
      { name: "Mangan", amount: "645 µg", percentage: "32%" }, // NRV: 2 mg
      { name: "Eisen", amount: "3.8 mg", percentage: "27%" }, // NRV: 14 mg
      { name: "Kupfer", amount: "95 µg", percentage: "10%" }, // NRV: 1 mg
      { name: "Zink", amount: "600 µg", percentage: "6%" }, // NRV: 10 mg
      { name: "Phosphor", amount: "45 mg", percentage: "6%" }, // NRV: 700 mg
      { name: "Selen", amount: "1 µg", percentage: "2%" },
    ],
    nutrients: {
      Ballaststoffe: 2.6,
      Eiweiß: 2.6,
      Kohlenhydrate: 0.6,
      Fett: 0.3,
    },
    benefits: [
      "Reich an Eisen, fördert die Blutbildung",
      "Unterstützt die Knochengesundheit durch Vitamin K",
      "Verbessert die Hautgesundheit durch Antioxidantien",
      "Hilft bei der Regulierung des Blutdrucks",
    ],
    regionAvailability: ["Deutschland", "Spanien", "Italien", "USA"],
    storageTips:
      "Im Kühlschrank, eingewickelt in ein feuchtes Küchentuch, aufbewahren.",
    recipes: ["Spinatquiche", "Grüne Smoothies"],
  },
  {
    id: "veg003",
    name: "Brokkoli",
    emoji: "🥦",
    backgroundColor: "#d0f0c0",
    info: "Brokkoli ist ein Kreuzblütler, der für seine antioxidativen Eigenschaften bekannt ist. Er wird oft als Superfood bezeichnet, da er eine Vielzahl an Vitaminen und Mineralstoffen enthält. Brokkoli eignet sich hervorragend für Salate, Suppen und Pfannengerichte.",
    image: images.brokkoli,
    season: ["April", "May", "June", "July", "August", "September", "October"],
    vitamins: [
      { name: "Vitamin A", amount: "143 µg", percentage: "17.88%" },
      { name: "Vitamin C", amount: "115 mg", percentage: "143.75%" },
      { name: "Vitamin E", amount: "1.2 mg", percentage: "10.00%" },
      { name: "Kalium", amount: "373 mg", percentage: "18.65%" },
      { name: "Magnesium", amount: "24 mg", percentage: "6.40%" },
      { name: "Calcium", amount: "105 mg", percentage: "13.13%" },
      { name: "Eisen", amount: "0.8 mg", percentage: "5.71%" },
      { name: "Phosphor", amount: "65 mg", percentage: "9.29%" },
    ],
    nutrients: {
      Brennwert: "117 kJ (28 kcal)",
      Ballaststoffe: 3.0,
      Eiweiß: 3.5,
      Kohlenhydrate: 2.7,
      Fett: 0.2,
    },
    benefits: [
      "Reich an Antioxidantien, schützt die Zellen",
      "Fördert die Herzgesundheit durch Ballaststoffe",
      "Stärkt das Immunsystem durch hohen Vitamin-C-Gehalt",
      "Unterstützt die Knochengesundheit durch Vitamin K",
    ],
    regionAvailability: ["Deutschland", "China", "Italien", "USA"],
    storageTips: "Bis zu 5 Tage im Kühlschrank aufbewahren.",
    recipes: ["Brokkoli-Pfanne", "Brokkolisuppe"],
  },
  {
    id: "veg012",
    name: "Zucchini",
    emoji: "🥒",
    backgroundColor: "#cce7d0",
    info: "Die Zucchini ist ein vielseitiges Sommergemüse aus der Familie der Kürbisgewächse. Sie wird oft in Salaten, Aufläufen und Grillgerichten verwendet. Zucchini enthält viele Ballaststoffe und wenig Kalorien, was sie ideal für eine gesunde Ernährung macht.",
    image: images.zucchini,
    season: ["June", "July", "August", "September"],
    vitamins: [
      { name: "Vitamin A", amount: "30 µg", percentage: "3.75%" },
      { name: "Vitamin B1 (Thiamin)", amount: "211 µg", percentage: "17.58%" },
      { name: "Vitamin B2 (Riboflavin)", amount: "73 µg", percentage: "5.77%" },
      { name: "Niacin (Vitamin B3)", amount: "400 µg", percentage: "2.5%" },
      {
        name: "Vitamin B5 (Pantothensäure)",
        amount: "80 µg",
        percentage: "1.6%",
      },
      { name: "Vitamin B6 (Pyridoxin)", amount: "119 µg", percentage: "9.92%" },
      { name: "Biotin (Vitamin B7)", amount: "2 µg", percentage: "4%" },
      { name: "Folsäure (Vitamin B9)", amount: "10 µg", percentage: "2.5%" },
      { name: "Vitamin C", amount: "17,600 µg", percentage: "22%" },
      {
        name: "Vitamin E (Alpha-Tocopherol)",
        amount: "500 µg",
        percentage: "4.17%",
      },
      { name: "Vitamin K", amount: "11 µg", percentage: "9.17%" },
      { name: "Calcium", amount: "19 mg", percentage: "1,9%" },
      { name: "Eisen", amount: "0,8 mg", percentage: "5,7%" },
      { name: "Phosphor", amount: "31 mg", percentage: "4,4%" },
    ],
    nutrients: {
      Kalorien: 17,
      Fett: 0.3,
      Kohlenhydrate: 3.1,
      Ballaststoffe: 1.0,
      Zucker: 2.5,
      Eiweiß: 1.2,
    },
    benefits: [
      "Fördert die Verdauung durch Ballaststoffe",
      "Hilft bei der Gewichtskontrolle durch geringe Kalorien",
      "Stärkt das Immunsystem durch Vitamin C",
      "Unterstützt die Augengesundheit mit Vitamin A",
    ],
    regionAvailability: ["Deutschland", "Italien", "Spanien", "Frankreich"],
    storageTips: "Im Kühlschrank in einem perforierten Beutel aufbewahren.",
    recipes: ["Gefüllte Zucchini", "Zucchini-Nudeln"],
  },
  {
    id: "veg013",
    name: "Tomate",
    emoji: "🍅",
    backgroundColor: "#ffcccb",
    info: "Die Tomate ist ein beliebtes Fruchtgemüse, das weltweit angebaut wird. Sie ist bekannt für ihren hohen Gehalt an Lycopin, einem starken Antioxidans. Tomaten werden roh, gekocht oder als Basis für Saucen verwendet.",
    image: images.tomate,
    season: ["June", "July", "August", "September"],
    vitamins: [
      { name: "Vitamin B1", amount: "0.09 mg", percentage: "7.5%" },
      { name: "Vitamin B2", amount: "0.04 mg", percentage: "2.86%" },
      { name: "Vitamin B3", amount: "0.5 mg", percentage: "3.33%" },
      { name: "Vitamin C", amount: "38 mg", percentage: "47.5%" },
      { name: "Calcium", amount: "11 mg", percentage: "1.1%" },
      { name: "Eisen", amount: "0.6 mg", percentage: "4.29%" },
      { name: "Magnesium", amount: "10 mg", percentage: "2.67%" },
      { name: "Natrium", amount: "3 mg", percentage: "0.13%" },
      { name: "Phosphor", amount: "27 mg", percentage: "3.86%" },
      { name: "Kalium", amount: "280 mg", percentage: "8%" },
      { name: "Zink", amount: "0.24 mg", percentage: "2.18%" },
    ],
    nutrients: {
      Brennwert: "84 kJ (20 kcal)",
      Eiweiß: 1.0,
      Kohlenhydrate: 4.0,
      Zucker: 2.6,
      Ballaststoffe: 1.2,
      Fett: 0.3,
    },
    benefits: [
      "Schützt die Zellen durch Lycopin",
      "Unterstützt die Herzgesundheit",
      "Verbessert die Hautgesundheit durch Antioxidantien",
      "Fördert eine gesunde Verdauung durch Ballaststoffe",
    ],
    regionAvailability: ["Italien", "Spanien", "Niederlande", "Deutschland"],
    storageTips: "Bei Zimmertemperatur lagern, um Geschmack zu bewahren.",
    recipes: ["Tomatensalat", "Tomatensuppe"],
  },
  {
    id: "veg016",
    name: "Paprika",
    emoji: "🌶️",
    backgroundColor: "#ffe680",
    info: "Paprika ist ein farbenfrohes Gemüse, das in verschiedenen Formen und Geschmacksrichtungen erhältlich ist. Sie ist eine ausgezeichnete Quelle für Vitamin C und wird oft in Salaten, Pfannengerichten und gefüllt verwendet.",
    image: images.paprika,
    season: ["July", "August", "September", "October"],
    vitamins: [
      { name: "Folat (Folsäure)", amount: "55 µg", percentage: "13.75%" },
      { name: "Vitamin B2", amount: "0.12 mg", percentage: "9.23%" },
      { name: "Vitamin B6", amount: "0.45 mg", percentage: "34.62%" },
      { name: "Vitamin C", amount: "140 mg", percentage: "175%" },
      { name: "Vitamin E", amount: "2.9 mg", percentage: "19.33%" },
      { name: "Beta-Carotin", amount: "2125 µg", percentage: "8.5%" },
      { name: "Natrium", amount: "5 mg", percentage: "0.21%" },
      { name: "Kalium", amount: "260 mg", percentage: "7.33%" },
      { name: "Magnesium", amount: "14 mg", percentage: "3.73%" },
      { name: "Kalzium", amount: "10 mg", percentage: "1%" },
      { name: "Eisen", amount: "0.55 mg", percentage: "3.93%" },
    ],
    nutrients: {
      Kalorien: "(kcal) 40",
      Fett: 0.2,
      Ballaststoffe: 1.5,
      Kohlenhydrate: 9.0,
      Zucker: 5.0,
    },
    benefits: [
      "Stärkt das Immunsystem durch Vitamin C",
      "Unterstützt die Nervenfunktion durch Vitamin B6",
      "Hilft bei der Zellreparatur durch Antioxidantien",
    ],
    regionAvailability: ["Spanien", "Italien", "Türkei", "Deutschland"],
    storageTips: "Im Gemüsefach des Kühlschranks lagern.",
    recipes: ["Gefüllte Paprika", "Paprika-Pfanne"],
  },
  {
    id: "veg017",
    name: "Rote Bete",
    emoji: "🍠",
    backgroundColor: "#f7c5d0",
    info: "Rote Bete ist eine nährstoffreiche Wurzel, die für ihren erdigen Geschmack und ihre gesundheitlichen Vorteile geschätzt wird. Sie ist eine hervorragende Quelle für Folsäure und Antioxidantien.",
    image: images.roteBete,
    season: [
      "September",
      "October",
      "November",
      "December",
      "January",
      "February",
    ],
    vitamins: [
      { name: "Kalium", amount: "407 mg", percentage: "11.5%" },
      { name: "Eisen", amount: "890 µg", percentage: "6.36%" },
      { name: "Vitamin B1", amount: "22 µg", percentage: "1.83%" },
      { name: "Vitamin B2", amount: "42 µg", percentage: "3.23%" },
      { name: "Pantothensäure", amount: "130 µg", percentage: "2.6%" },
      { name: "Vitamin B6", amount: "5 µg", percentage: "0.38%" },
      { name: "Folsäure", amount: "83 µg", percentage: "20.75%" },
      { name: "Vitamin C", amount: "10 mg", percentage: "12.5%" },
      { name: "Oxalsäure", amount: "181 mg", percentage: "N/A" },
    ],
    nutrients: {
      Brennwert: "175 kJ/41 kcal",
      Eiweiß: 1.5,
      Fett: 0.1,
      Kohlenhydrate: 8.4,
      Ballaststoffe: 2.5,
    },
    benefits: [
      "Fördert die Blutbildung durch Folsäure",
      "Stärkt das Immunsystem durch Antioxidantien",
      "Verbessert die Durchblutung durch Nitrate",
      "Unterstützt die Verdauung durch Ballaststoffe",
    ],
    regionAvailability: ["Deutschland", "Polen", "Russland", "USA"],
    storageTips: "An einem kühlen, dunklen Ort oder im Kühlschrank lagern.",
    recipes: ["Rote-Bete-Salat", "Rote-Bete-Smoothie"],
  },
  {
    id: "veg014",
    name: "Ingwer",
    emoji: "🫚",
    backgroundColor: "#e0d7b3",
    info: "Ingwer ist eine faszinierende Wurzel, die weltweit für ihren einzigartigen, scharfen Geschmack und ihre zahlreichen gesundheitlichen Vorteile geschätzt wird. Bekannt in der asiatischen Küche und als kraftvolles Heilmittel in der traditionellen Medizin, überzeugt Ingwer durch seine vielseitige Anwendung. Die frische Wurzel ist besonders reich an Gingerol, einem natürlichen Stoff mit starken entzündungshemmenden Eigenschaften. Neben seiner gesundheitlichen Wirkung verleiht Ingwer Gerichten und Getränken eine aufregende Schärfe, die sowohl den Gaumen belebt als auch das Wohlbefinden steigert.",
    image: images.inwger,
    season: ["January", "February", "March", "October", "November", "December"],
    vitamins: [
      { name: "Kalium", amount: "910 mg", percentage: "45.5%" },
      { name: "Kalzium", amount: "97 mg", percentage: "12.13%" },
      { name: "Magnesium", amount: "130 mg", percentage: "34.67%" },
      { name: "Eisen", amount: "17 mg", percentage: "121.43%" },
      { name: "Vitamin A", amount: "1 µg", percentage: "0.13%" },
      { name: "Vitamin B1", amount: "0.02 mg", percentage: "1.67%" },
      { name: "Vitamin B2", amount: "0.04 mg", percentage: "3.08%" },
      { name: "Niacin", amount: "0.7 mg", percentage: "4.67%" },
      { name: "Vitamin B6", amount: "0.16 mg", percentage: "12.31%" },
      { name: "Vitamin C", amount: "5 mg", percentage: "6.25%" },
    ],
    nutrients: {
      Kalorien: "(kcal) 80",
      Fett: 0.8,
      Kohlenhydrate: 18.0,
      Zucker: 1.7,
      Ballaststoffe: 2.0,
    },
    benefits: [
      "Ingwer enthält Gingerol, das entzündungshemmend wirkt.",
      "Fördert Verdauungssäfte und verbessert die Darmbewegung.",
      "Beruhigt den Magen und wirkt auf das Serotonin-System.",
      "Fördert weiße Blutkörperchen und bekämpft Krankheitserreger.",
      "Weitet Blutgefäße und verbessert die Sauerstoffversorgung.",
      "Steigert den Stoffwechsel und zügelt den Appetit.",
      "Antioxidative Wirkung schützt das Gehirn vor Schäden.",
      "Verbessert die Insulinempfindlichkeit und stabilisiert den Blutzucker.",
    ],
    regionAvailability: ["Indien", "China", "Nigeria", "Peru"],
    storageTips: "An einem trockenen, kühlen Ort lagern.",
    recipes: ["Ingwertee", "Asiatischer Ingwer-Honig-Dip"],
  },
  {
    id: "veg015",
    name: "Kurkuma",
    emoji: "🫚",
    backgroundColor: "#f7d85e",
    info: "Kurkuma ist eine goldene Wurzel, die häufig in der indischen und asiatischen Küche sowie in der traditionellen Medizin verwendet wird. Ihr Wirkstoff Curcumin ist bekannt für seine entzündungshemmenden und antioxidativen Eigenschaften.",
    image: images.kurkuma,
    season: ["January", "February", "March", "October", "November", "December"],
    vitamins: [
      { name: "Vitamin B1", amount: "0.01 mg", percentage: "0.83%" },
      { name: "Vitamin B2", amount: "0.02 mg", percentage: "1.54%" },
      { name: "Niacin (Vitamin B3)", amount: "0.17 mg", percentage: "1.13%" },
      { name: "Vitamin C", amount: "50 mg", percentage: "62.5%" },
      { name: "Kalium", amount: "260 mg", percentage: "7.33%" },
      { name: "Eisen", amount: "6.9 mg", percentage: "49.29%" },
      { name: "Kalzium", amount: "21 mg", percentage: "2.1%" },
      { name: "Phosphor", amount: "37 mg", percentage: "5.29%" },
      { name: "Zink", amount: "0.56 mg", percentage: "5.09%" },
    ],
    nutrients: {
      Kalorien: "(kcal) 39",
      Fett: 0.4,
      Eiweiß: 1.2,
      Kohlenhydrate: 8.4,
    },
    benefits: [
      "Reduziert Entzündungen", // Kurkuma enthält Curcumin, das eine starke entzündungshemmende Wirkung hat. Es blockiert entzündungsfördernde Moleküle und Enzyme, was zu einer Verringerung von Entzündungen im Körper führt, besonders bei chronischen Erkrankungen wie Arthritis.
      "Unterstützt die Verdauung", // Curcumin regt die Gallenproduktion an, was die Verdauung von Fetten unterstützt und das allgemeine Verdauungssystem verbessert. Es fördert auch die Bewegung von Nahrung durch den Verdauungstrakt und lindert Beschwerden wie Blähungen oder Völlegefühl.
      "Hilft bei der Linderung von Schmerzen", // Kurkuma wirkt schmerzlindernd, insbesondere bei Gelenkentzündungen und Arthritis. Die entzündungshemmende Wirkung von Curcumin kann helfen, Schmerzen und Schwellungen zu reduzieren, indem es Entzündungsprozesse im Körper hemmt.
      "Stärkt das Immunsystem", // Curcumin fördert die Produktion von weißen Blutkörperchen, die für die Bekämpfung von Infektionen und Krankheitserregern wichtig sind. Zudem hat es antimikrobielle Eigenschaften, die das Immunsystem bei der Bekämpfung von Viren und Bakterien unterstützen.
      "Verbessert die Gehirnfunktion", // Kurkuma erhöht die Produktion von Brain-Derived Neurotrophic Factor (BDNF), einem Protein, das für das Wachstum und die Regeneration von Gehirnzellen wichtig ist. Es hilft, die kognitive Funktion zu verbessern und schützt das Gehirn vor neurodegenerativen Erkrankungen wie Alzheimer.
      "Fördert die Herzgesundheit", // Curcumin unterstützt die Blutzirkulation, verbessert die Endothelfunktion der Blutgefäße und senkt den Cholesterinspiegel. Es wirkt entzündungshemmend im Kreislaufsystem und kann dazu beitragen, das Risiko von Herzkrankheiten zu verringern.
      "Hat antioxidative Wirkung", // Kurkuma ist reich an Antioxidantien, die freie Radikale neutralisieren. Diese antioxidative Wirkung schützt Zellen vor oxidativem Stress, der zu vorzeitiger Alterung und Zellschäden führen kann. Dies trägt zur allgemeinen Gesundheit und zum Wohlbefinden bei.
      "Hilft bei der Gewichtsreduktion", // Curcumin kann den Fettstoffwechsel anregen, indem es die Aktivität von Enzymen beeinflusst, die am Fettabbau beteiligt sind. Es hat auch eine entzündungshemmende Wirkung, die die Fettansammlung im Körper reduzieren und das Abnehmen fördern kann.
    ],
    regionAvailability: ["Indien", "China", "Bangladesch", "Sri Lanka"],
    storageTips: "An einem trockenen, kühlen Ort lagern.",
    recipes: ["Goldene Milch", "Kurkuma-Reis"],
  },
  {
    id: "veg031",
    name: "Knollensellerie",
    emoji: "🥕",
    backgroundColor: "#c7a85b",
    info: "Knollensellerie ist ein erdiges Gemüse mit einem leicht würzigen Geschmack. Er wird häufig in Suppen, Eintöpfen oder als Beilage zu Fleischgerichten verwendet.",
    image: images.knollensellerie, // Hier den entsprechenden Bildpfad anpassen
    season: ["October", "November", "December", "January", "February"],
    vitamins: [
      { name: "Eisen", amount: "0.5 mg", percentage: "4%" }, // NRV: 14 mg
      { name: "Vitamin A", amount: "3 µg", percentage: "0.4%" }, // NRV: 800 µg
      { name: "Vitamin B1", amount: "0.04 mg", percentage: "4%" }, // NRV: 1.1 mg
      { name: "Vitamin B2", amount: "0.07 mg", percentage: "5%" }, // NRV: 1.4 mg
      { name: "Niacin", amount: "0.9 mg", percentage: "6%" }, // NRV: 16 mg
      { name: "Kalium", amount: "323 mg", percentage: "9%" }, // NRV: 3.5 g
      { name: "Vitamin B6", amount: "0.2 mg", percentage: "14%" }, // NRV: 1.4 mg
      { name: "Vitamin C", amount: "8 mg", percentage: "10%" }, // NRV: 80 mg
      { name: "Magnesium", amount: "43 mg", percentage: "11%" }, // NRV: 375 mg
      { name: "Vitamin E", amount: "0.5 mg", percentage: "4%" }, // NRV: 12 mg
    ],
    nutrients: {
      Kalorien: "27 kcal",
      Kohlenhydrate: 2.0,
      Eiweiß: 1.0,
      Fett: 0.0,
    },
    benefits: [
      "Fördert eine gesunde Verdauung durch Ballaststoffe",
      "Stärkt das Immunsystem durch Vitamin C",
      "Hilft bei der Entwässerung durch hohe Flüssigkeitsaufnahme",
    ],
    regionAvailability: ["Deutschland", "Niederlande", "Frankreich"],
    storageTips:
      "An einem kühlen, trockenen Ort lagern. In einem feuchten Tuch bleibt er länger frisch.",
    recipes: ["Selleriegratin", "Selleriesuppe", "Knollensellerie-Püree"],
  },
  {
    id: "veg020",
    name: "Artischocke",
    emoji: "🌿",
    backgroundColor: "#e0d0f0",
    info: "Die Artischocke ist eine essbare Blüte, die für ihren nussigen Geschmack geschätzt wird. Sie ist reich an Ballaststoffen und fördert die Verdauung und die Lebergesundheit.",
    image: images.artischocke,
    season: ["March", "April", "May", "June"],
    vitamins: [
      { name: "Vitamin C", amount: "8 mg", percentage: "10%" }, // NRV: 80 mg
      { name: "Vitamin B6", amount: "0.10 mg", percentage: "7%" }, // NRV: 1.4 mg
      { name: "Vitamin B2", amount: "0.01 mg", percentage: "1%" }, // NRV: 1.4 mg
      { name: "Vitamin B1", amount: "0.14 mg", percentage: "13%" }, // NRV: 1.1 mg
      { name: "Calcium", amount: "53 mg", percentage: "7%" }, // NRV: 800 mg
      { name: "Magnesium", amount: "26 mg", percentage: "7%" }, // NRV: 375 mg
      { name: "Eisen", amount: "1.5 mg", percentage: "11%" }, // NRV: 14 mg
      { name: "Natrium", amount: "47 mg", percentage: "3%" }, // NRV: 1.5 g
      { name: "Kalium", amount: "350 mg", percentage: "10%" }, // NRV: 3.5 g
      { name: "Phosphor", amount: "130 mg", percentage: "19%" }, // NRV: 700 mg
    ],
    nutrients: {
      Brennwert: "43 kcal",
      Eiweiß: 2.4,
      Fett: 0.1,
      Kohlenhydrate: 2.6,
      Ballaststoffe: 10.8,
    },
    benefits: [
      "Fördert die Verdauung",
      "Unterstützt die Lebergesundheit",
      "Reich an Antioxidantien",
      "Hilft bei der Senkung des Cholesterinspiegels",
    ],
    regionAvailability: ["Italien", "Frankreich", "Spanien", "Ägypten"],
    storageTips: "Im Kühlschrank in einem feuchten Tuch einwickeln.",
    recipes: ["Gedämpfte Artischocken", "Artischocken-Dip"],
  },
  {
    id: "veg021",
    name: "Chicorée",
    emoji: "🌱",
    backgroundColor: "#f5f5dc",
    info: "Chicorée ist ein bitter schmeckendes Blattgemüse, das oft in Salaten oder gedünstet verwendet wird. Er ist kalorienarm und gut für die Verdauung.",
    image: images.chicoree,
    season: ["October", "November", "December", "January", "February", "March"],
    vitamins: [
      {
        name: "Vitamin A (Retinoläquivalent)",
        amount: "572 µg",
        percentage: "71%",
      }, // NRV: 800 µg
      { name: "Vitamin B1 (Thiamin)", amount: "58 µg", percentage: "5%" }, // NRV: 1.1 mg
      { name: "Vitamin B2 (Riboflavin)", amount: "36 µg", percentage: "3%" }, // NRV: 1.4 mg
      { name: "Niacin (Vitamin B3)", amount: "240 µg", percentage: "2%" }, // NRV: 16 mg
      {
        name: "Vitamin B5 (Pantothensäure)",
        amount: "400 µg",
        percentage: "8%",
      }, // NRV: 5 mg
      { name: "Vitamin B6 (Pyridoxin)", amount: "48 µg", percentage: "3%" }, // NRV: 1.4 mg
      { name: "Biotin (Vitamin B7)", amount: "5 µg", percentage: "10%" }, // NRV: 50 µg
      { name: "Folsäure (Vitamin B9)", amount: "50 µg", percentage: "25%" }, // NRV: 200 µg
      { name: "Vitamin C", amount: "8689 µg", percentage: "11%" }, // NRV: 80 mg
      {
        name: "Vitamin E (Alpha-Tocopherol)",
        amount: "100 µg",
        percentage: "83%",
      }, // NRV: 120 mg
      { name: "Calcium", amount: "26 mg", percentage: "3%" }, // NRV: 800 mg
      { name: "Kalium", amount: "198 mg", percentage: "6%" }, // NRV: 3.5 g
      { name: "Magnesium", amount: "13 mg", percentage: "3%" }, // NRV: 375 mg
      { name: "Natrium", amount: "4 mg", percentage: "0.3%" }, // NRV: 1.5 g
      { name: "Phosphor", amount: "26 mg", percentage: "4%" }, // NRV: 700 mg
    ],
    nutrients: {
      Kohlenhydrate: 2.3,
      Nahrungsfasern: 1.3,
      Fett: 0.2,
      Protein: 1.3,
    },
    benefits: [
      "Fördert die Verdauung",
      "Unterstützt die Leberfunktion",
      "Hilft bei der Gewichtsreduktion",
      "Stärkt das Immunsystem",
      "Fördert die Herzgesundheit",
      "Verbessert die Blutzuckerregulation",
      "Hat entzündungshemmende Wirkung",
      "Fördert die Nierenfunktion",
    ],
    regionAvailability: ["Belgien", "Frankreich", "Deutschland"],
    storageTips: "Im Kühlschrank im Gemüsefach aufbewahren.",
    recipes: ["Chicoréesalat", "Gefüllter Chicorée"],
  },
  {
    id: "veg022",
    name: "Süßkartoffel",
    emoji: "🍠",
    backgroundColor: "#f4a460",
    info: "Süßkartoffeln sind eine köstliche und nährstoffreiche Knolle, die reich an Ballaststoffen und Antioxidantien ist.",
    image: images.suesskartoffel,
    season: ["October", "November", "December"],
    vitamins: [
      { name: "Folat (Folsäure)", amount: "12 µg", percentage: "6%" }, // NRV: 200 µg
      { name: "Vitamin B6", amount: "0.27 mg", percentage: "19%" }, // NRV: 1.4 mg
      { name: "Biotin", amount: "4 µg", percentage: "8%" }, // NRV: 50 µg
      { name: "Vitamin C", amount: "30 mg", percentage: "38%" }, // NRV: 80 mg
      { name: "Vitamin E", amount: "4.56 mg", percentage: "38%" }, // NRV: 12 mg
      { name: "Kalium", amount: "360 mg", percentage: "10%" }, // NRV: 3.5 g
      { name: "Magnesium", amount: "18 mg", percentage: "5%" }, // NRV: 375 mg
      { name: "Kalzium", amount: "22 mg", percentage: "3%" }, // NRV: 800 mg
      { name: "Phosphor", amount: "39 mg", percentage: "6%" }, // NRV: 700 mg
    ],
    nutrients: {
      Brennwert: "11 kcal",
      Eiweiß: 1.63,
      Fett: 0.6,
      Kohlenhydrate: 24.08,
      Ballaststoffe: 3.14,
    },
    benefits: [
      "Reich an Antioxidantien",
      "Fördert die Verdauung",
      "Unterstützt das Immunsystem",
      "Hilft bei der Blutzuckerregulation",
      "Fördert die Hautgesundheit",
      "Steigert die Energie",
      "Fördert die Herzgesundheit",
      "Hilft beim Gewichtsmanagement",
    ],
    regionAvailability: ["USA", "China", "Indien"],
    storageTips: "An einem kühlen, trockenen Ort lagern.",
    recipes: ["Süßkartoffelpüree", "Ofen-Süßkartoffeln"],
  },
  {
    id: "veg023",
    name: "Zuckerschoten",
    emoji: "🍵",
    backgroundColor: "#d0e7a3",
    info: "Zuckerschoten – auch bekannt als Zuckererbsen oder Kefen – sind eine wahre Besonderheit. Sie sind für ein Gemüse sehr zinkreich und gehören ausserdem zu den wenigen Hülsenfrüchten, die roh und samt Hülsen genossen werden können. Warum das so ist und was beim Anbau und bei der Zubereitung zu beachten ist, erfahren Sie bei uns.",
    image: images.zuckerschote,
    season: ["May", "June", "July"],
    vitamins: [
      {
        name: "Vitamin A (Retinoläquivalent)",
        amount: "68 µg",
        percentage: "8.5%",
      }, // NRV: 800 µg
      { name: "Vitamin B1 (Thiamin)", amount: "170 µg", percentage: "15%" }, // NRV: 1.1 mg
      { name: "Vitamin B2 (Riboflavin)", amount: "150 µg", percentage: "11%" }, // NRV: 1.4 mg
      { name: "Niacin (Vitamin B3)", amount: "2700 µg", percentage: "17%" }, // NRV: 16 mg
      {
        name: "Vitamin B5 (Pantothensäure)",
        amount: "750 µg",
        percentage: "15%",
      }, // NRV: 5 mg
      { name: "Vitamin B6 (Pyridoxin)", amount: "160 µg", percentage: "11%" }, // NRV: 1.4 mg
      { name: "Biotin (Vitamin B7)", amount: "3 µg", percentage: "6%" }, // NRV: 50 µg
      { name: "Folsäure (Vitamin B9)", amount: "33 µg", percentage: "17%" }, // NRV: 200 µg
      { name: "Vitamin C", amount: "25000 µg", percentage: "31%" }, // NRV: 80 mg
      {
        name: "Vitamin E (Alpha-Tocopherol)",
        amount: "500 µg",
        percentage: "417%",
      }, // NRV: 120 mg
    ],
    nutrients: {
      Brennwert: "69 kcal",
      Kohlenhydrate: 10.0,
      Ballaststoffe: 5.0,
      Eiweiß: 4.0,
      Fett: 0.2,
    },
    benefits: [
      "Gut für die Verdauung",
      "Stärkt die Knochen",
      "Hilft bei der Regulierung des Blutzuckers",
    ],
    regionAvailability: ["China", "Indien", "Europa"],
    storageTips: "Im Kühlschrank aufbewahren.",
    recipes: ["Zuckerschotenpfanne", "Zuckerschoten mit Knoblauch"],
  },
  {
    id: "veg024",
    name: "Rettich",
    emoji: "🥕",
    backgroundColor: "#e0b0b0",
    info: "Rettich ist ein würziges Wurzelgemüse, das roh, eingelegt oder gekocht vielseitig einsetzbar ist.",
    image: images.rettich,
    season: ["March", "April", "May", "June", "July"],
    vitamins: [
      {
        name: "Vitamin A (Retinoläquivalent)",
        amount: "2 µg",
        percentage: "0.25%",
      }, // NRV: 800 µg
      { name: "Vitamin B1 (Thiamin)", amount: "30 µg", percentage: "2.7%" }, // NRV: 1.1 mg
      { name: "Vitamin B2 (Riboflavin)", amount: "30 µg", percentage: "2.1%" }, // NRV: 1.4 mg
      { name: "Niacin (Vitamin B3)", amount: "400 µg", percentage: "2.5%" }, // NRV: 16 mg
      {
        name: "Vitamin B5 (Pantothensäure)",
        amount: "180 µg",
        percentage: "3.6%",
      }, // NRV: 5 mg
      { name: "Vitamin B6 (Pyridoxin)", amount: "60 µg", percentage: "4.3%" }, // NRV: 1.4 mg
      { name: "Biotin (Vitamin B7)", amount: "0.5 µg", percentage: "1%" }, // NRV: 50 µg
      { name: "Folsäure (Vitamin B9)", amount: "24 µg", percentage: "12%" }, // NRV: 200 µg
      { name: "Vitamin C", amount: "27000 µg", percentage: "33.75%" }, // NRV: 80 mg
      {
        name: "Vitamin E (Alpha-Tocopherol)",
        amount: "10 µg",
        percentage: "8.33%",
      }, // NRV: 120 mg
    ],
    nutrients: {
      Brennwert: "16 kcal",
      Fett: 0.1,
      Kohlenhydrate: 3.4,
      Zucker: 1.9,
      Ballaststoffe: 1.6,
      Protein: 0.7,
    },
    benefits: [
      "Entgiftet den Körper",
      "Fördert die Verdauung",
      "Unterstützt die Leberfunktion",
      "Reich an Antioxidantien",
      "Hilft bei der Entwässerung",
      "Stärkt das Immunsystem",
      "Fördert die Hautgesundheit",
    ],
    regionAvailability: ["Deutschland", "Indien", "Japan"],
    storageTips: "An einem kühlen, dunklen Ort aufbewahren.",
    recipes: ["Rettichsalat", "Eingelegter Rettich"],
  },
  {
    id: "veg025",
    name: "Pak Choi",
    emoji: "🥬",
    backgroundColor: "#d5e8d4",
    info: "Pak Choi ist ein asiatisches Blattgemüse mit mildem Geschmack und knackiger Konsistenz.",
    image: images.pakChoi,
    season: ["March", "April", "May", "June", "September", "October"],
    vitamins: [
      {
        name: "Vitamin A (Retinoläquivalent)",
        amount: "71 µg",
        percentage: "8.9%",
      }, // NRV: 800 µg
      { name: "Vitamin B1 (Thiamin)", amount: "33 µg", percentage: "3%" }, // NRV: 1.1 mg
      { name: "Vitamin B2 (Riboflavin)", amount: "37 µg", percentage: "2.6%" }, // NRV: 1.4 mg
      { name: "Niacin (Vitamin B3)", amount: "400 µg", percentage: "2.5%" }, // NRV: 16 mg
      {
        name: "Vitamin B5 (Pantothensäure)",
        amount: "200 µg",
        percentage: "4%",
      }, // NRV: 5 mg
      { name: "Vitamin B6 (Pyridoxin)", amount: "121 µg", percentage: "8.6%" }, // NRV: 1.4 mg
      { name: "Biotin (Vitamin B7)", amount: "0.5 µg", percentage: "1%" }, // NRV: 50 µg
      { name: "Folsäure (Vitamin B9)", amount: "66 µg", percentage: "33%" }, // NRV: 200 µg
      { name: "Vitamin C", amount: "26000 µg", percentage: "32.5%" }, // NRV: 80 mg
      {
        name: "Vitamin E (Alpha-Tocopherol)",
        amount: "240 µg",
        percentage: "200%",
      }, // NRV: 120 mg
      { name: "Vitamin K", amount: "80 µg", percentage: "67%" },
    ],
    nutrients: {
      Brennwert: "17 kcal",
      Fett: 0.2,
      Kohlenhydrate: 2.2,
      Ballaststoffe: 1.0,
      Zucker: 1.2,
      Eiweiß: 1.0,
    },
    benefits: [
      "Stärkt das Immunsystem: Pak Choi ist reich an Vitamin C, das das Immunsystem unterstützt.",
      "Gut für die Sehkraft: Der hohe Gehalt an Vitamin A schützt die Augen und fördert die Sehkraft.",
      "Unterstützt die Knochengesundheit: Kalzium und Vitamin K in Pak Choi stärken die Knochen.",
      "Fördert die Verdauung: Der Ballaststoffgehalt hilft bei der Regulierung der Verdauung.",
      "Hilft beim Entgiften: Antioxidantien und schwefelhaltige Verbindungen fördern die Entgiftung.",
      "Hält das Herz gesund: Kalium unterstützt die Blutdruckregulation und fördert die Herzgesundheit.",
    ],
    regionAvailability: ["China", "Japan", "Thailand", "Vietnam"],
    storageTips: "Im Kühlschrank im Gemüsefach aufbewahren.",
    recipes: ["Gebratener Pak Choi", "Pak Choi-Suppe"],
  },
  {
    id: "veg027",
    name: "Fenchel",
    emoji: "🌱",
    backgroundColor: "#e0ffe0",
    info: "Fenchel ist ein aromatisches Gemüse, das für seinen milden, lakritzartigen Geschmack geschätzt wird. Er wird sowohl roh in Salaten als auch gekocht verwendet.",
    image: images.fenchel,
    season: ["April", "May", "June", "July", "October"],
    vitamins: [
      { name: "Vitamin A", amount: "783 µg", percentage: "97.9%" }, // NRV: 800 µg
      { name: "Vitamin B1 (Thiamin)", amount: "30 µg", percentage: "2.7%" }, // NRV: 1.1 mg
      { name: "Vitamin B2 (Riboflavin)", amount: "110 µg", percentage: "7.9%" }, // NRV: 1.4 mg
      { name: "Niacin (Vitamin B3)", amount: "200 µg", percentage: "1.3%" }, // NRV: 16 mg
      { name: "Vitamin B6 (Pyridoxin)", amount: "100 µg", percentage: "7.1%" }, // NRV: 1.4 mg
      { name: "Vitamin C", amount: "93 mg", percentage: "116.25%" }, // NRV: 80 mg
      { name: "Kalium (Potassium)", amount: "395 mg", percentage: "11.3%" }, // NRV: 3.5 g
      { name: "Eisen (Iron)", amount: "2.7 mg", percentage: "19%" }, // NRV: 14 mg
      { name: "Kalzium (Calcium)", amount: "38 mg", percentage: "4.8%" }, // NRV: 800 mg
      { name: "Magnesium", amount: "12 mg", percentage: "3.2%" },
    ],
    nutrients: {
      Brennwert: "31 kcal",
      Fett: 0.2,
      Kohlenhydrate: 7.0,
      Ballaststoffe: 3.1,
      Protein: 1.2,
    },
    benefits: [
      "Fördert die Verdauung: Fenchel hilft bei der Linderung von Blähungen und unterstützt eine gesunde Verdauung.",
      "Stärkt das Immunsystem: Der hohe Vitamin C-Gehalt stärkt das Immunsystem und schützt vor Infektionen.",
      "Reduziert Entzündungen: Fenchel enthält Antioxidantien, die Entzündungen im Körper verringern können.",
      "Unterstützt die Gewichtsreduktion: Fenchel hat einen geringen Kaloriengehalt und fördert das Sättigungsgefühl.",
      "Fördert die Herzgesundheit: Fenchel enthält Kalium, das hilft, den Blutdruck zu regulieren und das Herz zu schützen.",
      "Verbessert die Atemwege: Fenchel hat eine schleimlösende Wirkung und hilft bei der Linderung von Husten und Atemwegsproblemen.",
    ],
    regionAvailability: [
      "Deutschland",
      "Italien",
      "Frankreich",
      "Griechenland",
    ],
    storageTips:
      "Im Kühlschrank aufbewahren, am besten in einem perforierten Beutel.",
    recipes: ["Fenchelsalat", "Gebratener Fenchel"],
  },
  {
    id: "veg028",
    name: "Kürbis (Hokkaido)",
    emoji: "🎃",
    backgroundColor: "#f5c784",
    info: "Kürbis ist ein vielseitiges Gemüse, das in vielen Herbstgerichten verwendet wird. Er ist reich an Vitamin A und C und eignet sich hervorragend für Suppen, Eintöpfe oder sogar zum Backen.",
    image: images.kruerbis,
    season: ["September", "October", "November"],
    vitamins: [
      { name: "Vitamin A (RAE)", amount: "94 µg-RE", percentage: "11.75%" },
      { name: "Vitamin A (RE)", amount: "188 µg-RE", percentage: "25%" },
      { name: "Vitamin E", amount: "0.6 mg-ATE", percentage: "5%" },
      { name: "Vitamin B2 (riboflavin)", amount: "0.07 mg", percentage: "4%" },
      { name: "Niacin equivalents", amount: "0.6 mg", percentage: "2%" },
      { name: "Vitamin B6 (pyridoxine)", amount: "0.11 mg", percentage: "6%" },
      { name: "Vitamin B9 (folate)", amount: "32 µg", percentage: "10%" },
      { name: "Kalzium", amount: "19 mg", percentage: "1%" },
      { name: "Phosphor", amount: "24 mg", percentage: "3%" },
      { name: "Magnesium", amount: "9 mg", percentage: "3%" },
      { name: "Eisen", amount: "0.3 mg", percentage: "2%" },
      { name: "Kupfer", amount: "0.04 mg", percentage: "4%" },
      { name: "Zink", amount: "0.2 mg", percentage: "1%" },
    ],
    nutrients: {
      Brennwert: "67 kcal",
      Eiweiß: 1.7,
      Fett: 0.5,
      Kohlenhydrate: 13.6,
      Ballaststoffe: 2.3,
    },
    benefits: [
      "Stärkt das Immunsystem: Kürbis ist reich an Vitamin C, das das Immunsystem unterstützt und vor Erkältungen schützt.",
      "Fördert die Sehkraft: Der hohe Gehalt an Beta-Carotin fördert die Augengesundheit und schützt vor Sehproblemen.",
      "Unterstützt die Verdauung: Kürbis enthält viele Ballaststoffe, die die Verdauung fördern und Verstopfung vorbeugen.",
      "Hilft bei der Gewichtsreduktion: Kürbis ist kalorienarm und sättigt gut, was ihn ideal für eine kalorienbewusste Ernährung macht.",
      "Verbessert die Hautgesundheit: Der hohe Anteil an Vitamin A und Antioxidantien fördert gesunde Haut und schützt vor Hautalterung.",
      "Unterstützt die Herzgesundheit: Kürbis enthält Kalium, das den Blutdruck reguliert und das Herz schützt.",
    ],
    regionAvailability: ["Indien", "China", "Ukraine"],
    storageTips: "An einem kühlen, trockenen Ort lagern.",
    recipes: ["Kürbissuppe", "Kürbis-Pie"],
  },
  {
    id: "veg029",
    name: "Aubergine",
    emoji: "🍆",
    backgroundColor: "#cbb8d9",
    info: "Die Aubergine ist ein vielseitiges Gemüse, das in vielen mediterranen und asiatischen Gerichten verwendet wird. Sie ist eine gute Quelle für Ballaststoffe und Antioxidantien.",
    image: images.aubergine,
    season: ["June", "July", "August", "September"],
    vitamins: [
      { name: "Folat (Folsäure)", amount: "31 µg", percentage: "7.75%" },
      { name: "Vitamin B1", amount: "0.04 mg", percentage: "3.33%" },
      { name: "Vitamin B2", amount: "0.05 mg", percentage: "3.85%" },
      { name: "Vitamin B6", amount: "0.07 mg", percentage: "5.38%" },
      {
        name: "Pantothensäure (Vitamin B5)",
        amount: "0.23 mg",
        percentage: "4.6%",
      },
      { name: "Vitamin C", amount: "5 mg", percentage: "6.25%" },
      { name: "Vitamin E", amount: "0.03 mg", percentage: "0.2%" },
      { name: "Vitamin K", amount: "1 µg", percentage: "0.83%" },
      { name: "Kalium", amount: "203 mg", percentage: "5.8%" },
      { name: "Magnesium", amount: "14 mg", percentage: "3.73%" },
      { name: "Kalzium", amount: "12 mg", percentage: "1.2%" },
      { name: "Eisen", amount: "0.37 mg", percentage: "2.64%" },
      { name: "Phosphor", amount: "21 mg", percentage: "3%" },
      { name: "Kupfer", amount: "90 µg", percentage: "10%" },
      { name: "Zink", amount: "0.12 mg", percentage: "1.09%" },
      { name: "Mangan", amount: "112 µg", percentage: "4.87%" },
    ],
    nutrients: {
      Brennwert: "18 kcal",
      Kohlenhydrate: 3.0,
      Ballaststoffe: 3.0,
      Eiweiß: 1.1,
      Fett: 0.2,
    },
    benefits: [
      "Fördert die Herzgesundheit: Auberginen enthalten Antioxidantien, die den Cholesterinspiegel senken und das Herz schützen.",
      "Unterstützt die Verdauung: Der hohe Ballaststoffgehalt von Auberginen fördert eine gesunde Verdauung und reguliert den Stuhlgang.",
      "Hält das Gehirn gesund: Auberginen sind reich an Anthocyaninen, die das Gehirn vor altersbedingten Schäden schützen können.",
      "Hilft bei der Gewichtsreduktion: Auberginen sind kalorienarm und können das Sättigungsgefühl steigern, was beim Abnehmen hilft.",
      "Fördert die Hautgesundheit: Die Antioxidantien in Auberginen tragen dazu bei, die Haut zu schützen und Hautalterung zu verzögern.",
      "Reguliert den Blutzucker: Auberginen haben einen niedrigen glykämischen Index und unterstützen die Blutzuckerregulation.",
    ],
    regionAvailability: ["Spanien", "Italien", "Türkei", "Indien"],
    storageTips: "Im Kühlschrank in einem perforierten Beutel aufbewahren.",
    recipes: ["Auberginenauflauf", "Auberginen-Curry"],
  },
  {
    id: "veg030",
    name: "Feldsalat",
    emoji: "🥗",
    backgroundColor: "#a3d977",
    info: "Feldsalat ist ein zartes grünes Blattgemüse, das besonders im Winter beliebt ist. Er ist eine gute Quelle für Vitamin C und Antioxidantien.",
    image: images.feldsalat,
    season: ["November", "December", "January", "February", "March"],
    vitamins: [
      { name: "Natrium", amount: "4 mg", percentage: "0.17%" },
      { name: "Kalium", amount: "420 mg", percentage: "12%" },
      { name: "Calcium", amount: "32 mg", percentage: "3.2%" },
      { name: "Magnesium", amount: "13 mg", percentage: "3.47%" },
      { name: "Phosphat", amount: "49 mg", percentage: "7%" },
      { name: "Eisen", amount: "2 mg", percentage: "14.29%" },
      { name: "Zink", amount: "0.31 mg", percentage: "2.82%" },
      { name: "Vitamin A", amount: "325 µg", percentage: "40.63%" },
      { name: "Vitamin E", amount: "0.6 mg", percentage: "5%" },
      { name: "Vitamin B1", amount: "0.07 mg", percentage: "5.83%" },
      { name: "Vitamin B2", amount: "0.08 mg", percentage: "6.15%" },
      { name: "Vitamin B6", amount: "0.25 mg", percentage: "19.23%" },
      { name: "Vitamin C", amount: "35 mg", percentage: "43.75%" },
      { name: "Folsäure", amount: "145 µg", percentage: "36.25%" },
    ],
    nutrients: {
      Brennwert: "14 kcal",
      Fett: 0.4,
      Kohlenhydrate: 0.8,
      Protein: 1.8,
      Ballaststoffe: 1.8,
    },
    benefits: [
      "Stärkt das Immunsystem: Feldsalat ist reich an Vitamin C, das das Immunsystem stärkt und vor Infektionen schützt.",
      "Fördert die Verdauung: Der hohe Ballaststoffgehalt von Feldsalat unterstützt eine gesunde Verdauung und reguliert den Stuhlgang.",
      "Verbessert die Hautgesundheit: Die Vitamine A und C in Feldsalat fördern gesunde Haut und schützen vor Hautalterung.",
      "Unterstützt die Knochengesundheit: Feldsalat enthält Vitamin K, das wichtig für die Knochengesundheit und -stärkung ist.",
      "Fördert die Entgiftung: Feldsalat hilft bei der Ausleitung von Toxinen und unterstützt die Entgiftungsprozesse im Körper.",
      "Hält den Blutdruck im Gleichgewicht: Der hohe Kaliumgehalt von Feldsalat trägt zur Regulierung des Blutdrucks bei.",
    ],
    regionAvailability: ["Deutschland", "Frankreich", "Niederlande"],
    storageTips: "Im Kühlschrank in einem feuchten Tuch aufbewahren.",
    recipes: ["Feldsalat mit Walnüssen", "Feldsalat mit Apfel"],
  },
  {
    id: "veg032",
    name: "Mangold",
    emoji: "🍃",
    backgroundColor: "#c0d5c2",
    info: "Mangold ist ein grünes Blattgemüse, das sowohl die Blätter als auch die Stiele essbar macht. Es ist besonders nährstoffreich und eignet sich hervorragend für Salate und warme Gerichte.",
    image: images.mangold,
    season: ["April", "May", "June", "July", "August"],
    vitamins: [
      { name: "Folat (Folsäure)", amount: "30 µg", percentage: "7.5%" },
      { name: "Vitamin E", amount: "1.5 mg", percentage: "12.5%" },
      { name: "Vitamin B1", amount: "0.1 mg", percentage: "8.33%" },
      { name: "Vitamin B2", amount: "0.16 mg", percentage: "12.31%" },
      { name: "Vitamin B6", amount: "0.09 mg", percentage: "6.92%" },
      { name: "Vitamin C", amount: "39 mg", percentage: "48.75%" },
      { name: "Vitamin K", amount: "400 µg", percentage: "333.33%" },
      { name: "Beta-Carotin", amount: "3530 µg", percentage: "N/A" },
      { name: "Kalium", amount: "376 mg", percentage: "10.67%" },
      { name: "Magnesium", amount: "81 mg", percentage: "21.6%" },
      { name: "Kalzium", amount: "35 mg", percentage: "3.5%" },
      { name: "Eisen", amount: "2.7 mg", percentage: "19.29%" },
    ],
    nutrients: {
      Brennwert: "21 kcal",
      Eiweiß: 2.13,
      Fett: 0.28,
      Kohlenhydrate: 0.69,
      Ballaststoffe: 2.58,
    },
    benefits: [
      "Fördert die Knochengesundheit: Mangold ist reich an Vitamin K, das für die Knochenstärkung und -gesundheit wichtig ist.",
      "Unterstützt das Immunsystem: Der hohe Gehalt an Vitamin C stärkt das Immunsystem und schützt vor Infektionen.",
      "Hält das Herz gesund: Mangold enthält Kalium, das den Blutdruck reguliert und die Herzgesundheit fördert.",
      "Verbessert die Verdauung: Mangold ist ballaststoffreich und fördert eine gesunde Verdauung und regelmäßigen Stuhlgang.",
      "Fördert die Hautgesundheit: Die Antioxidantien im Mangold schützen die Haut vor freien Radikalen und fördern eine gesunde Haut.",
      "Hilft bei der Entgiftung: Mangold hat eine entgiftende Wirkung und unterstützt die Ausscheidung von Toxinen aus dem Körper.",
    ],
    regionAvailability: ["Italien", "Spanien", "Frankreich", "Deutschland"],
    storageTips: "Im Kühlschrank aufbewahren, am besten frisch verzehren.",
    recipes: ["Mangoldpfanne", "Mangold-Suppe"],
  },
  {
    id: "veg033",
    name: "Kohlrabi",
    emoji: "🥦",
    backgroundColor: "#b7d6d0",
    info: "Kohlrabi ist ein mildes, knackiges Gemüse, das zur Familie der Kreuzblütler gehört. Es kann roh in Salaten oder gekocht in Eintöpfen und Aufläufen verwendet werden.",
    image: images.kohlrabi,
    season: ["April", "May", "June", "July", "August", "September"],
    vitamins: [
      {
        name: "Vitamin A (Retinoläquivalent)",
        amount: "33 µg",
        percentage: "4.13%",
      },
      { name: "Vitamin B1 (Thiamin)", amount: "48 µg", percentage: "4%" },
      { name: "Vitamin B2 (Riboflavin)", amount: "46 µg", percentage: "3.54%" },
      { name: "Niacin (Vitamin B3)", amount: "1800 µg", percentage: "11.43%" },
      {
        name: "Vitamin B5 (Pantothensäure)",
        amount: "100 µg",
        percentage: "2%",
      },
      { name: "Vitamin B6 (Pyridoxin)", amount: "71 µg", percentage: "5.46%" },
      { name: "Biotin (Vitamin B7)", amount: "3 µg", percentage: "10%" },
      { name: "Folsäure (Vitamin B9)", amount: "70 µg", percentage: "17.5%" },
      { name: "Vitamin C", amount: "63300 µg", percentage: "79.13%" },
      {
        name: "Vitamin E (Alpha-Tocopherol)",
        amount: "400 µg",
        percentage: "3.33%",
      },
      { name: "Vitamin K", amount: "7 µg", percentage: "5.83%" },
      { name: "Calcium", amount: "59 mg", percentage: "5.9%" },
      { name: "Kalium", amount: "322 mg", percentage: "9.2%" },
      { name: "Magnesium", amount: "43 mg", percentage: "11.47%" },
      { name: "Natrium", amount: "20 mg", percentage: "0.83%" },
      { name: "Phosphor", amount: "50 mg", percentage: "7.14%" },
    ],
    nutrients: {
      Brennwert: "27 kcal",
      Kohlenhydrate: 3.7,
      Ballaststoffe: 1.4,
      Eiweiß: 1.9,
      Fett: 0.2,
    },
    benefits: [
      "Stärkt das Immunsystem: Kohlrabi ist reich an Vitamin C, das das Immunsystem unterstützt und die Abwehrkräfte stärkt.",
      "Fördert die Verdauung: Der hohe Ballaststoffgehalt hilft, die Verdauung zu regulieren und Verstopfung vorzubeugen.",
      "Unterstützt die Knochengesundheit: Kohlrabi enthält Kalzium und Vitamin K, die für die Knochengesundheit wichtig sind.",
      "Hilft bei der Gewichtsreduktion: Kohlrabi ist kalorienarm und sättigt gut, was bei der Gewichtskontrolle hilft.",
      "Verbessert die Hautgesundheit: Die Antioxidantien in Kohlrabi fördern eine gesunde Haut und schützen vor Hautalterung.",
      "Fördert die Herzgesundheit: Der hohe Kaliumgehalt hilft, den Blutdruck zu regulieren und das Herz zu schützen.",
    ],
    regionAvailability: ["Deutschland", "Polen", "Niederlande", "Italien"],
    storageTips: "Im Kühlschrank aufbewahren.",
    recipes: ["Kohlrabi-Salat", "Kohlrabi-Suppe"],
  },
  {
    id: "veg034",
    name: "Grüne Bohnen",
    emoji: "🫘",
    backgroundColor: "#d3d5b8",
    info: "Bohnen sind eine ausgezeichnete Quelle für pflanzliches Eiweiß und Ballaststoffe. Sie können in vielen Gerichten wie Eintöpfen, Salaten oder als Beilage verwendet werden.",
    image: images.grueneBohnen,
    season: ["June", "July", "August", "September"],
    vitamins: [
      { name: "Folat (Folsäure)", amount: "56 µg", percentage: "14%" }, // NRV for Folate: 400 µg
      { name: "Vitamin B1", amount: "0.08 mg", percentage: "6.67%" }, // NRV for Vitamin B1: 1.1 mg
      { name: "Vitamin B2", amount: "0.11 mg", percentage: "8.46%" }, // NRV for Vitamin B2: 1.4 mg
      { name: "Vitamin B6", amount: "0.26 mg", percentage: "20%" }, // NRV for Vitamin B6: 1.4 mg
      { name: "Vitamin C", amount: "18.94 mg", percentage: "23.68%" }, // NRV for Vitamin C: 80 mg
      {
        name: "Pantothensäure (Vitamin B5)",
        amount: "0.5 mg",
        percentage: "10%",
      }, // NRV for Vitamin B5: 6 mg
      { name: "Vitamin K", amount: "36 µg", percentage: "30%" }, // NRV for Vitamin K: 75 µg
      { name: "Beta-Carotin", amount: "323 µg", percentage: "N/A" }, // NRV for Vitamin A (from Beta-Carotin): 600 µg
      { name: "Natrium", amount: "10 mg", percentage: "0.42%" }, // NRV for Sodium: 2,000 mg
      { name: "Kalium", amount: "262 mg", percentage: "7.48%" }, // NRV for Potassium: 3,500 mg
      { name: "Magnesium", amount: "22 mg", percentage: "5.87%" }, // NRV for Magnesium: 375 mg
      { name: "Kalzium", amount: "64 mg", percentage: "6.4%" }, // NRV for Calcium: 1,000 mg
      { name: "Eisen", amount: "0.74 mg", percentage: "5.29%" }, // NRV for Iron: 14 mg
    ],
    nutrients: {
      Brennwert: "37 kcal",
      Eiweiß: 2.39,
      Fett: 0.24,
      Kohlenhydrate: 5.09,
      Ballaststoffe: 1.89,
    },
    benefits: [
      "Stärken das Immunsystem: Grüne Bohnen sind reich an Vitamin C, das das Immunsystem unterstützt und die Abwehrkräfte stärkt.",
      "Fördern die Verdauung: Der hohe Ballaststoffgehalt von grünen Bohnen hilft, die Verdauung zu regulieren und Verstopfung vorzubeugen.",
      "Unterstützen die Knochengesundheit: Grüne Bohnen enthalten Vitamin K, das wichtig für starke Knochen und eine gute Knochenmineraldichte ist.",
      "Hilft bei der Gewichtsreduktion: Grüne Bohnen sind kalorienarm und ballaststoffreich, was für ein langanhaltendes Sättigungsgefühl sorgt.",
      "Fördern die Herzgesundheit: Der hohe Gehalt an Kalium unterstützt eine gesunde Bluthochdruckregulation und fördert die Herzgesundheit.",
      "Unterstützen die Blutzuckerregulation: Grüne Bohnen haben einen niedrigen glykämischen Index und helfen, den Blutzuckerspiegel stabil zu halten.",
    ],
    regionAvailability: ["USA", "Mexiko", "Brasilien", "Spanien"],
    storageTips: "Getrocknete Bohnen an einem kühlen, trockenen Ort lagern.",
    recipes: ["Bohneneintopf", "Bohnen-Salat"],
  },
  {
    id: "veg036",
    name: "Zuckerrübe",
    emoji: "🍠",
    backgroundColor: "#f1c0c0",
    info: "Zuckerrüben sind vielseitige Gemüsesorten, die nicht nur Zucker liefern, sondern auch als Gemüse in Salaten, Eintöpfen und als Beilage verwendet werden.",
    image: images.zuckerruebe,
    season: ["October", "November", "December", "January", "February"],
    vitamins: [
      {
        name: "Vitamin A (Retinoläquivalent)",
        amount: "1637 µg",
        percentage: "272.83%",
      }, // NRV for Vitamin A: 600 µg
      { name: "Vitamin B1 (Thiamin)", amount: "111 µg", percentage: "10%" }, // NRV for Vitamin B1: 1.1 mg
      { name: "Vitamin B2 (Riboflavin)", amount: "14 µg", percentage: "1%" }, // NRV for Vitamin B2: 1.4 mg
      { name: "Niacin (Vitamin B3)", amount: "580 µg", percentage: "38.67%" }, // NRV for Niacin: 1.5 mg
      {
        name: "Vitamin B5 (Pantothensäure)",
        amount: "270 µg",
        percentage: "4.5%",
      }, // NRV for Vitamin B5: 6 mg
      { name: "Vitamin B6 (Pyridoxin)", amount: "168 µg", percentage: "12%" }, // NRV for Vitamin B6: 1.4 mg
      { name: "Biotin (Vitamin B7)", amount: "5 µg", percentage: "10%" }, // NRV for Biotin: 50 µg
      { name: "Folsäure (Vitamin B9)", amount: "17 µg", percentage: "4.25%" }, // NRV for Folate: 400 µg
      { name: "Vitamin B12 (Cobalamin)", amount: "N/A", percentage: "N/A" }, // NRV for Vitamin B12: 2.5 µg
      { name: "Vitamin C", amount: "3220 µg", percentage: "4%" }, // NRV for Vitamin C: 80 mg
      { name: "Vitamin D", amount: "N/A", percentage: "N/A" }, // NRV for Vitamin D: 20 µg
      {
        name: "Vitamin E (Alpha-Tocopherol)",
        amount: "440 µg",
        percentage: "4.4%",
      }, // NRV for Vitamin E: 10 mg
      { name: "Vitamin K", amount: "15 µg", percentage: "20%" }, // NRV for Vitamin K: 75 µg
      { name: "Calcium", amount: "21 mg", percentage: "2.1%" }, // NRV for Calcium: 1,000 mg
      { name: "Kalium", amount: "355 mg", percentage: "10.14%" }, // NRV for Potassium: 3,500 mg
      { name: "Magnesium", amount: "12 mg", percentage: "3.2%" }, // NRV for Magnesium: 375 mg
      { name: "Natrium", amount: "23 mg", percentage: "1.15%" }, // NRV for Sodium: 2,000 mg
      { name: "Phosphor", amount: "36 mg", percentage: "5.14%" }, // NRV for Phosphorus: 700 mg
    ],
    nutrients: {
      Brennwert: "305 kcal",
      Fett: "< 0.5 g",
      Kohlenhydrate: 70.0,
      Zucker: 66.0,
      Ballaststoffe: 4.5,
      Eiweiß: 2.3,
    },
    benefits: [
      "Fördern die Verdauung: Zuckerrüben sind reich an Ballaststoffen, die die Verdauung fördern und Verstopfung vorbeugen.",
      "Unterstützen die Herzgesundheit: Zuckerrüben enthalten Kalium und Nitrate, die helfen, den Blutdruck zu regulieren und das Herz zu schützen.",
      "Fördern die Lebergesundheit: Zuckerrüben unterstützen die Entgiftung und fördern die Gesundheit der Leber durch ihre antioxidativen Eigenschaften.",
      "Helfen bei der Gewichtsreduktion: Zuckerrüben sind kalorienarm und ballaststoffreich, was ein Sättigungsgefühl fördert und die Gewichtsreduktion unterstützt.",
      "Verbessern die Ausdauer: Der Nitratgehalt in Zuckerrüben kann die körperliche Ausdauer und Leistungsfähigkeit steigern.",
    ],
    regionAvailability: ["USA", "Deutschland", "Frankreich", "Polen"],
    storageTips: "An einem kühlen, trockenen Ort aufbewahren.",
    recipes: ["Zuckerrüben-Salat", "Gebackene Zuckerrüben"],
  },
  {
    id: "veg037",
    name: "Rosenkohl",
    emoji: "🌱",
    backgroundColor: "#99cc99",
    info: "Rosenkohl ist ein kleines, kugelförmiges Gemüse aus der Familie der Kohlgemüse. Er ist reich an Vitaminen und Mineralstoffen und eignet sich hervorragend als Beilage oder in Eintöpfen.",
    image: images.rosenkohl,
    season: ["October", "November", "December", "January", "February"],
    vitamins: [
      { name: "Folat (Folsäure)", amount: "101 µg", percentage: "25.25%" }, // NRV for Folate: 400 µg
      { name: "Vitamin B1", amount: "0.13 mg", percentage: "11.82%" }, // NRV for Vitamin B1: 1.1 mg
      { name: "Vitamin B2", amount: "0.13 mg", percentage: "9.29%" }, // NRV for Vitamin B2: 1.4 mg
      { name: "Vitamin B6", amount: "0.35 mg", percentage: "25%" }, // NRV for Vitamin B6: 1.4 mg
      { name: "Vitamin C", amount: "112 mg", percentage: "140%" }, // NRV for Vitamin C: 80 mg
      { name: "Vitamin K", amount: "153 µg", percentage: "204%" }, // NRV for Vitamin K: 75 µg
      { name: "Kalium", amount: "471 mg", percentage: "13.49%" }, // NRV for Potassium: 3,500 mg
      { name: "Magnesium", amount: "34 mg", percentage: "9.07%" }, // NRV for Magnesium: 375 mg
      { name: "Kalzium", amount: "35 mg", percentage: "3.5%" }, // NRV for Calcium: 1,000 mg
      { name: "Eisen", amount: "0.92 mg", percentage: "6.57%" }, // NRV for Iron: 14 mg
      { name: "Phosphor", amount: "84 mg", percentage: "12%" }, // NRV for Phosphorus: 700 mg
      { name: "Zink", amount: "0.54 mg", percentage: "5.4%" }, // NRV for Zinc: 10 mg
    ],
    nutrients: {
      Brennwert: "44 kcal",
      Eiweiß: 4.45,
      Fett: 0.34,
      Kohlenhydrate: 3.29,
      Ballaststoffe: 4.4,
    },
    benefits: [
      "Stärkt das Immunsystem: Rosenkohl ist reich an Vitamin C, das das Immunsystem stärkt und Infektionen vorbeugt.",
      "Fördert die Verdauung: Der hohe Ballaststoffgehalt von Rosenkohl unterstützt eine gesunde Verdauung und hilft bei der Regulierung des Stuhlgangs.",
      "Unterstützt die Knochengesundheit: Rosenkohl enthält Vitamin K, das für die Knochengesundheit und -stärkung wichtig ist.",
      "Hilft bei der Entgiftung: Rosenkohl enthält Antioxidantien und schwefelhaltige Verbindungen, die den Körper bei der Entgiftung unterstützen.",
      "Fördert die Herzgesundheit: Der hohe Gehalt an Kalium hilft, den Blutdruck zu regulieren und das Herz zu schützen.",
      "Reduziert Entzündungen: Die entzündungshemmenden Eigenschaften von Rosenkohl können helfen, chronische Entzündungen im Körper zu verringern.",
    ],
    regionAvailability: ["Deutschland", "Niederlande", "Polen", "Frankreich"],
    storageTips: "Im Kühlschrank aufbewahren, möglichst frisch verzehren.",
    recipes: [
      "Rosenkohl aus dem Ofen",
      "Rosenkohl mit Speck",
      "Rosenkohl in Butter geschwenkt",
      "Rosenkohl mit Maronen",
      "Rosenkohl mit Zitronen-Dressing",
      "Rosenkohl und Kartoffeln aus dem Ofen",
      "Rosenkohl mit Parmesan überbacken",
    ],
  },
  {
    id: "veg040",
    name: "Spargel",
    emoji: "🌱",
    backgroundColor: "#e0d2c4",
    info: "Spargel ist ein zartes, saisonales Gemüse, das in grüner und weißer Form erhältlich ist. Er ist kalorienarm und voller wichtiger Vitamine und Mineralstoffe.",
    image: images.spargel,
    season: ["April", "May", "June"],
    vitamins: [
      { name: "Folat (Folsäure)", amount: "79 µg", percentage: "19.75%" }, // NRV for Folate: 400 µg
      { name: "Vitamin B2", amount: "0.13 mg", percentage: "9.29%" }, // NRV for Vitamin B2: 1.4 mg
      { name: "Vitamin B1", amount: "0.12 mg", percentage: "10.91%" }, // NRV for Vitamin B1: 1.1 mg
      { name: "Vitamin C", amount: "14.9 mg", percentage: "18.625%" }, // NRV for Vitamin C: 80 mg
      { name: "Beta-Carotin", amount: "148 µg", percentage: "24.67%" }, // NRV for Vitamin A (as Beta-Carotene): 600 µg
      { name: "Kalium", amount: "220 mg", percentage: "6.29%" }, // NRV for Potassium: 3,500 mg
      { name: "Magnesium", amount: "12 mg", percentage: "3.2%" }, // NRV for Magnesium: 375 mg
      { name: "Phosphor", amount: "49 mg", percentage: "7%" }, // NRV for Phosphorus: 700 mg
      { name: "Zink", amount: "0.5 mg", percentage: "5%" }, // NRV for Zinc: 10 mg
    ],
    nutrients: {
      Brennwert: "27 kcal",
      Eiweiß: 2.2,
      Fett: 0.2,
      Kohlenhydrate: 3.3,
      Ballaststoffe: 1.7,
    },
    benefits: [
      "Fördert die Verdauung: Spargel ist reich an Ballaststoffen, die die Verdauung unterstützen und Verstopfung vorbeugen.",
      "Stärkt das Immunsystem: Der hohe Vitamin C-Gehalt von Spargel trägt zur Stärkung des Immunsystems bei und hilft bei der Bekämpfung von Infektionen.",
      "Unterstützt die Knochengesundheit: Spargel enthält Vitamin K, das eine wichtige Rolle bei der Knochengesundheit und der Blutgerinnung spielt.",
      "Hilft bei der Entgiftung: Spargel hat harntreibende Eigenschaften, die die Ausscheidung von Giftstoffen und überschüssigem Wasser aus dem Körper fördern.",
      "Fördert die Hautgesundheit: Die Antioxidantien in Spargel schützen die Haut vor schädlichen freien Radikalen und unterstützen ein gesundes Hautbild.",
      "Hält den Blutzucker im Gleichgewicht: Spargel hat einen niedrigen glykämischen Index und hilft, den Blutzuckerspiegel stabil zu halten.",
    ],
    regionAvailability: ["Deutschland", "Niederlande", "Italien", "USA"],
    storageTips: "Frisch im Kühlschrank aufbewahren und zügig verzehren.",
    recipes: [
      "Spargel mit Sauce Hollandaise",
      "Spargel mit Schinken",
      "Grüner Spargel aus dem Ofen",
      "Spargelcremesuppe",
      "Spargel mit Butter und Parmesan",
      "Spargelrisotto",
      "Spargel mit Zitronen-Dressing",
    ],
  },
  {
    id: "veg044",
    name: "Staudensellerie",
    emoji: "🌿",
    backgroundColor: "#9cc37d",
    info: "Stangensellerie oder Staudensellerie ist ein knackiges Gemüse mit einem frischen, leicht bitteren Geschmack. Er wird häufig in Salaten, Suppen oder als Snack verwendet.",
    image: images.staudensellerie,
    season: ["March", "April", "May", "June", "July"],
    vitamins: [
      { name: "Vitamin E", amount: "0.2 mg", percentage: "1.33%" }, // NRV for Vitamin E: 15 mg
      { name: "Vitamin A", amount: "118 µg", percentage: "13.17%" }, // NRV for Vitamin A: 900 µg
      { name: "Vitamin B1", amount: "0.05 mg", percentage: "4.55%" }, // NRV for Vitamin B1: 1.1 mg
      { name: "Vitamin B2", amount: "0.08 mg", percentage: "5.71%" }, // NRV for Vitamin B2: 1.4 mg
      { name: "Niacin", amount: "0.6 mg", percentage: "3%" }, // NRV for Niacin: 20 mg
      { name: "Vitamin B6", amount: "0.09 mg", percentage: "6.43%" }, // NRV for Vitamin B6: 1.4 mg
      { name: "Vitamin C", amount: "7 mg", percentage: "8.75%" }, // NRV for Vitamin C: 80 mg
      { name: "Pantothensäure", amount: "430 µg", percentage: "8.6%" }, // NRV for Pantothenic Acid: 5 mg
      { name: "Kalium", amount: "344 mg", percentage: "9.83%" }, // NRV for Potassium: 3,500 mg
      { name: "Kalzium", amount: "80 mg", percentage: "8%" }, // NRV for Calcium: 1,000 mg
      { name: "Magnesium", amount: "12 mg", percentage: "3.2%" }, // NRV for Magnesium: 375 mg
      { name: "Eisen", amount: "0.2 mg", percentage: "1.43%" }, // NRV for Iron: 14 mg
    ],
    nutrients: {
      Brennwert: "15 kcal",
      Fett: 0.2,
      Protein: 1.2,
      Kohlenhydrate: 2.2,
      Ballaststoffe: 2.6,
    },
    benefits: [
      "Fördert die Verdauung: Stangensellerie enthält Ballaststoffe, die die Verdauung unterstützen und die Darmgesundheit fördern.",
      "Hilft bei der Entgiftung: Durch seine harntreibenden Eigenschaften fördert Stangensellerie die Ausscheidung von Toxinen aus dem Körper.",
      "Unterstützt die Herzgesundheit: Stangensellerie ist reich an Kalium, das den Blutdruck reguliert und das Herz schützt.",
      "Fördert die Hautgesundheit: Die Antioxidantien in Stangensellerie helfen, die Haut vor schädlichen freien Radikalen zu schützen und das Hautbild zu verbessern.",
      "Stärkt das Immunsystem: Der hohe Gehalt an Vitamin C unterstützt das Immunsystem und hilft, Infektionen abzuwehren.",
      "Hilft bei der Gewichtsreduktion: Stangensellerie ist kalorienarm und wasserreich, was ihn zu einem idealen Snack für eine kalorienbewusste Ernährung macht.",
    ],
    regionAvailability: ["Deutschland", "Niederlande", "Frankreich"],
    storageTips:
      "Im Kühlschrank aufbewahren, in einem feuchten Tuch eingeschlagen.",
    recipes: [
      "Staudensellerie mit Erdnussbutter",
      "Staudensellerie-Salat mit Apfel und Walnüssen",
      "Staudensellerie in Zitronen-Dressing",
      "Staudensellerie mit Hummus",
      "Gebratener Staudensellerie mit Knoblauch",
      "Staudensellerie-Suppe",
      "Staudensellerie mit Ziegenkäse und Walnüssen",
    ],
  },
  {
    id: "veg045",
    name: "Weißkohl",
    emoji: "🥦",
    backgroundColor: "#91b391",
    info: "Weißkohl ist eine der beliebtesten Kohlsorten und wird in vielen Gerichten wie Sauerkraut, Eintöpfen und Salaten verwendet. Er ist reich an Vitamin C und Ballaststoffen.",
    image: images.weissKohl,
    season: ["November", "December", "January", "February"],
    vitamins: [
      { name: "Eisen", amount: "0.5 mg", percentage: "3.57%" }, // NRV for Iron: 14 mg
      { name: "Vitamin A", amount: "7.5 µg", percentage: "0.83%" }, // NRV for Vitamin A: 900 µg
      { name: "Vitamin B1", amount: "0.05 mg", percentage: "4.55%" }, // NRV for Vitamin B1: 1.1 mg
      { name: "Vitamin B2", amount: "0.07 mg", percentage: "5%" }, // NRV for Vitamin B2: 1.4 mg
      { name: "Niacin", amount: "0.5 mg", percentage: "2.5%" }, // NRV for Niacin: 20 mg
      { name: "Kalium", amount: "236 mg", percentage: "6.74%" }, // NRV for Potassium: 3,500 mg
      { name: "Vitamin B6", amount: "0.2 mg", percentage: "14.29%" }, // NRV for Vitamin B6: 1.4 mg
      { name: "Kalzium", amount: "64 mg", percentage: "6.4%" }, // NRV for Calcium: 1,000 mg
      { name: "Vitamin C", amount: "50 mg", percentage: "62.5%" }, // NRV for Vitamin C: 80 mg
      { name: "Magnesium", amount: "12 mg", percentage: "3.2%" }, // NRV for Magnesium: 375 mg
      { name: "Vitamin E", amount: "2.5 mg", percentage: "16.67%" }, // NRV for Vitamin E: 15 mg
      { name: "Folsäure", amount: "90 µg", percentage: "22.5%" }, // NRV for Folate: 400 µg
    ],
    nutrients: {
      Brennwert: "25 kcal",
      Fett: 0.4,
      Protein: 3.0,
      Kohlenhydrate: 2.4,
      Ballaststoffe: 2.5,
    },
    benefits: [
      "Fördert die Verdauung: Weißkohl enthält Ballaststoffe, die die Verdauung fördern und Verstopfung vorbeugen.",
      "Stärkt das Immunsystem: Der hohe Gehalt an Vitamin C in Weißkohl unterstützt das Immunsystem und schützt vor Erkältungen.",
      "Unterstützt die Knochengesundheit: Weißkohl enthält Vitamin K, das für die Knochengesundheit und die Blutgerinnung wichtig ist.",
      "Reduziert Entzündungen: Die Antioxidantien im Weißkohl wirken entzündungshemmend und können chronische Entzündungen lindern.",
      "Fördert die Hautgesundheit: Weißkohl enthält Vitamin A und C, die die Haut regenerieren und vor freien Radikalen schützen.",
      "Hilft bei der Gewichtsreduktion: Weißkohl ist kalorienarm und ballaststoffreich, was das Sättigungsgefühl fördert und bei der Gewichtsabnahme hilft.",
    ],

    regionAvailability: ["Deutschland", "Polen", "Frankreich", "USA"],
    storageTips: "Kühl und trocken lagern.",
    recipes: [
      "Weißkohlrouladen",
      "Weißkohl mit Speck",
      "Krautsalat",
      "Weißkohl-Eintopf",
      "Gebratener Weißkohl mit Kümmel",
      "Weißkohl mit Äpfeln",
      "Weißkohl in Senfsoße",
    ],
  },
  {
    id: "veg046",
    name: "Grünkohl",
    emoji: "🥦",
    backgroundColor: "#bedea4",
    info: "Grünkohl ist ein nährstoffreiches Gemüse, das besonders in der kalten Jahreszeit beliebt ist. Er wird oft zu Chips verarbeitet oder in Suppen und Eintöpfen verwendet.",
    image: images.gruenkohl,
    season: ["October", "November", "December", "January", "February"],
    vitamins: [
      { name: "Folat (Folsäure)", amount: "187 µg", percentage: "46.75%" }, // NRV for Folate: 400 µg
      { name: "Vitamin B1", amount: "0.1 mg", percentage: "9.09%" }, // NRV for Vitamin B1: 1.1 mg
      { name: "Vitamin B2", amount: "0.25 mg", percentage: "17.86%" }, // NRV for Vitamin B2: 1.4 mg
      { name: "Vitamin B6", amount: "0.25 mg", percentage: "17.86%" }, // NRV for Vitamin B6: 1.4 mg
      { name: "Vitamin C", amount: "105 mg", percentage: "131.25%" }, // NRV for Vitamin C: 80 mg
      { name: "Vitamin K", amount: "817 µg", percentage: "682.5%" }, // NRV for Vitamin K: 120 µg
      { name: "Beta-Carotin", amount: "5169 µg", percentage: "861.5%" }, // NRV for Vitamin A (as Beta-Carotene): 600 µg
      { name: "Kalium", amount: "451 mg", percentage: "12.89%" }, // NRV for Potassium: 3,500 mg
      { name: "Kalzium", amount: "212 mg", percentage: "21.2%" }, // NRV for Calcium: 1,000 mg
      { name: "Eisen", amount: "1.9 mg", percentage: "13.57%" }, // NRV for Iron: 14 mg
      { name: "Phosphor", amount: "87 mg", percentage: "12.43%" }, // NRV for Phosphorus: 700 mg
    ],
    nutrients: {
      Brennwert: "45 kcal",
      Eiweiß: 4.3,
      Fett: 0.9,
      Kohlenhydrate: 2.54,
      Ballaststoffe: 4.2,
    },
    benefits: [
      "Stärkt die Knochen durch Vitamin K",
      "Unterstützt die Immunfunktion mit Vitamin A",
      "Reich an Antioxidantien, die den Körper schützen",
      "Unterstützt die Herzgesundheit: Grünkohl enthält Kalium, das hilft, den Blutdruck zu regulieren und das Herz zu schützen.",
      "Unterstützt die Verdauung: Grünkohl ist ballaststoffreich, was die Verdauung anregt und die Darmgesundheit fördert.",
    ],
    regionAvailability: ["Deutschland", "Niederlande", "USA", "Kanada"],
    storageTips:
      "Kühl und trocken lagern, im Kühlschrank bleibt er länger frisch.",
    recipes: [
      "Grünkohl mit Pinkel",
      "Grünkohl-Suppe",
      "Grünkohl-Chips",
      "Grünkohl mit Kartoffeln",
      "Grünkohl-Salat mit Walnüssen",
      "Grünkohl-Pesto",
      "Grünkohl in Rahm",
    ],
  },

  {
    id: "veg048",
    name: "Radieschen",
    emoji: "🌶️",
    backgroundColor: "#f0c0c0",
    info: "Radieschen sind kleine, knackige Wurzelgemüse mit einer scharfen, pikanten Note. Sie eignen sich besonders gut in Salaten und als Snack.",
    image: images.radieschen,
    season: ["March", "April", "May", "June", "July"],
    vitamins: [
      { name: "Eisen", amount: "0.4 mg", percentage: "2.86%" }, // NRV for Iron: 14 mg
      { name: "Vitamin A", amount: "3.8 µg", percentage: "0.42%" }, // NRV for Vitamin A: 900 µg
      { name: "Vitamin B1", amount: "0.04 mg", percentage: "3.64%" }, // NRV for Vitamin B1: 1.1 mg
      { name: "Vitamin B2", amount: "0.04 mg", percentage: "2.86%" }, // NRV for Vitamin B2: 1.4 mg
      { name: "Niacin", amount: "0.2 mg", percentage: "1%" }, // NRV for Niacin: 20 mg
      { name: "Kalium", amount: "255 mg", percentage: "7.29%" }, // NRV for Potassium: 3,500 mg
      { name: "Vitamin B6", amount: "0.06 mg", percentage: "4.29%" }, // NRV for Vitamin B6: 1.4 mg
      { name: "Kalzium", amount: "26 mg", percentage: "2.6%" }, // NRV for Calcium: 1,000 mg
      { name: "Vitamin C", amount: "27 mg", percentage: "33.75%" }, // NRV for Vitamin C: 80 mg
      { name: "Magnesium", amount: "8 mg", percentage: "2.13%" }, // NRV for Magnesium: 375 mg
      { name: "Folsäure", amount: "24 µg", percentage: "6%" }, // NRV for Folate: 400 µg
    ],
    nutrients: {
      Brennwert: "14 kcal",
      Fett: 0.1,
      Protein: 1.1,
      Kohlenhydrate: 2.1,
      Ballaststoffe: 1.6,
    },
    benefits: [
      "Unterstützen das Immunsystem: Radieschen sind reich an Vitamin C, das die Immunabwehr stärkt und vor Infektionen schützt.",
      "Fördern die Verdauung: Der hohe Ballaststoffgehalt von Radieschen unterstützt eine gesunde Verdauung und reguliert den Stuhlgang.",
      "Unterstützen die Blutzuckerregulation: Radieschen enthalten Senfölglycoside, die die Glukosetoleranz verbessern und den Blutzuckerspiegel stabilisieren können.",
      "Fördern die Hautgesundheit: Die Antioxidantien in Radieschen schützen die Haut vor freien Radikalen und unterstützen ein gesundes Hautbild.",
      "Unterstützen die Herzgesundheit: Der Kaliumgehalt in Radieschen hilft, den Blutdruck zu regulieren und das Herz zu schützen.",
      "Fördern die Gewichtsreduktion: Radieschen sind kalorienarm und ballaststoffreich, was zu einem Sättigungsgefühl beiträgt und die Gewichtsabnahme unterstützt.",
    ],
    regionAvailability: ["Deutschland", "Frankreich", "Spanien", "USA"],
    storageTips: "Kühl und trocken lagern, möglichst bald verbrauchen.",
    recipes: [
      "Radieschensalat mit Joghurt-Dressing",
      "Radieschen mit Frischkäse",
      "Radieschen-Pickles",
      "Radieschen auf Brot mit Butter",
      "Radieschen-Apfel-Salat",
      "Geröstete Radieschen",
      "Radieschensuppe",
    ],
  },
  {
    id: "veg049",
    name: "Blumenkohl",
    emoji: "🥦",
    backgroundColor: "#f1e1d1",
    info: "Blumenkohl ist ein vielseitiges Gemüse, das in vielen Gerichten verwendet wird. Es hat einen milden, leicht nussigen Geschmack und eignet sich gut für Suppen, Aufläufe oder als Reisersatz.",
    image: images.blumenkohl,
    season: ["June", "July", "August", "September", "October"],
    vitamins: [
      { name: "Folat (Folsäure)", amount: "52 µg", percentage: "13%" }, // NRV for Folate: 400 µg
      { name: "Vitamin B3", amount: "1167 µg", percentage: "5.83%" }, // NRV for Niacin: 20 mg (20,000 µg)
      { name: "Vitamin C", amount: "64 mg", percentage: "80%" }, // NRV for Vitamin C: 80 mg
      { name: "Vitamin K", amount: "31 µg", percentage: "25.83%" }, // NRV for Vitamin K: 120 µg
      { name: "Biotin (Vitamin B7)", amount: "2 µg", percentage: "6.67%" }, // NRV for Biotin: 30 µg
      { name: "Beta-Carotin", amount: "10 µg", percentage: "1.67%" }, // NRV for Vitamin A (as Beta-Carotene): 600 µg
      { name: "Natrium", amount: "13 mg", percentage: "0.87%" }, // NRV for Sodium: 1,500 mg
      { name: "Kalium", amount: "282 mg", percentage: "8.06%" }, // NRV for Potassium: 3,500 mg
      { name: "Magnesium", amount: "15 mg", percentage: "4%" }, // NRV for Magnesium: 375 mg
      { name: "Kalzium", amount: "22 mg", percentage: "2.2%" }, // NRV for Calcium: 1,000 mg
      { name: "Eisen", amount: "0.51 mg", percentage: "3.64%" }, // NRV for Iron: 14 mg
      { name: "Zink", amount: "0.29 mg", percentage: "2.64%" }, // NRV for Zinc: 11 mg
    ],
    nutrients: {
      Brennwert: "28 kcal",
      Eiweiß: 2.46,
      Fett: 0.28,
      Kohlenhydrate: 2.34,
      Ballaststoffe: 2.9,
    },
    benefits: [
      "Fördert die Verdauung: Blumenkohl ist reich an Ballaststoffen, die die Verdauung unterstützen und Verstopfung vorbeugen.",
      "Unterstützt das Immunsystem: Der hohe Gehalt an Vitamin C stärkt das Immunsystem und schützt vor Infektionen.",
      "Fördert die Knochengesundheit: Blumenkohl enthält Vitamin K und Kalzium, die für starke Knochen wichtig sind.",
      "Unterstützt die Herzgesundheit: Der Kaliumgehalt hilft, den Blutdruck zu regulieren und das Herz zu schützen.",
      "Fördert die Hautgesundheit: Die Antioxidantien im Blumenkohl schützen die Haut vor freien Radikalen und unterstützen ein gesundes Hautbild.",
      "Unterstützt die Blutzuckerregulation: Blumenkohl hat einen niedrigen glykämischen Index und hilft, den Blutzuckerspiegel stabil zu halten.",
    ],
    regionAvailability: ["Deutschland", "Niederlande", "Polen", "Frankreich"],
    storageTips: "Im Kühlschrank aufbewahren, möglichst frisch verzehren.",
    recipes: [
      "Blumenkohl aus dem Ofen",
      "Blumenkohl-Curry",
      "Blumenkohl-Suppe",
      "Blumenkohl mit Käse überbacken",
      "Blumenkohlpüree",
      "Blumenkohlsteaks vom Grill",
      "Blumenkohl-Salat mit Senf-Dressing",
    ],
  },
  // Zwiebeln (Onions)
  {
    id: "veg050",
    name: "Zwiebel",
    emoji: "🧅",
    backgroundColor: "#f4d8a1",
    info: "Zwiebeln sind ein wichtiges Gewürz und eine Gemüsesorte, die in vielen Gerichten verwendet wird. Sie verleihen Geschmack und Aroma und bieten zahlreiche gesundheitliche Vorteile.",
    image: images.zwiebel,
    season: ["March", "April", "May", "June", "July", "August", "September"],
    vitamins: [
      { name: "Folat (Folsäure)", amount: "11 µg", percentage: "2.75%" },
      { name: "Vitamin B1", amount: "0.04 mg", percentage: "3.33%" },
      { name: "Vitamin B2", amount: "0.02 mg", percentage: "1.54%" },
      { name: "Vitamin B6", amount: "0.16 mg", percentage: "12.31%" },
      { name: "Vitamin C", amount: "7.4 mg", percentage: "9.25%" },
      { name: "Kalium", amount: "162 mg", percentage: "4.63%" },
      { name: "Kupfer", amount: "118 µg", percentage: "13.18%" },
      { name: "Magnesium", amount: "10 mg", percentage: "2.67%" },
      { name: "Eisen", amount: "0.22 mg", percentage: "1.57%" },
      { name: "Kalzium", amount: "22 mg", percentage: "2.2%" },
      { name: "Phosphor", amount: "33 mg", percentage: "4.71%" },
      { name: "Zink", amount: "0.18 mg", percentage: "1.64%" },
    ],
    nutrients: {
      Brennwert: "30 kcal",
      Eiweiß: 1.18,
      Fett: 0.25,
      Kohlenhydrate: 4.92,
      Ballaststoffe: 1.4,
    },
    benefits: [
      "Stärkt das Immunsystem: Zwiebeln sind reich an Vitamin C, das das Immunsystem stärkt und Infektionen vorbeugt.",
      "Fördert die Verdauung: Zwiebeln enthalten Ballaststoffe, die die Verdauung fördern und die Darmgesundheit unterstützen.",
      "Unterstützt die Herzgesundheit: Zwiebeln können den Cholesterinspiegel senken und die Durchblutung verbessern, was das Herz schützt.",
      "Reduziert Entzündungen: Die in Zwiebeln enthaltenen Antioxidantien wirken entzündungshemmend und unterstützen die Heilung.",
      "Hält den Blutzucker im Gleichgewicht: Zwiebeln helfen, den Blutzuckerspiegel zu regulieren und das Risiko von Diabetes zu senken.",
      "Fördert die Hautgesundheit: Zwiebeln enthalten Schwefelverbindungen, die die Hautgesundheit fördern und Hautirritationen lindern können.",
    ],
    regionAvailability: ["Deutschland", "Polen", "Niederlande", "Frankreich"],
    storageTips:
      "Kühl und trocken lagern, idealerweise in einem luftdurchlässigen Netz.",
    recipes: ["Zwiebelkuchen", "Französische Zwiebelsuppe", "Zwiebelringe"],
  },

  // Knoblauch (Garlic)
  {
    id: "veg051",
    name: "Knoblauch",
    emoji: "🧄",
    backgroundColor: "#e4e0b9",
    info: "Knoblauch wird weltweit als Gewürz und für seine heilenden Eigenschaften geschätzt. Er hat einen intensiven Geschmack und kann viele gesundheitliche Vorteile bieten.",
    image: images.knoblauch,
    season: ["May", "June", "July", "August"],
    vitamins: [
      { name: "Folat (Folsäure)", amount: "20 µg", percentage: "5%" }, // NRV for Folate: 400 µg
      { name: "Vitamin B1", amount: "0.2 mg", percentage: "18.18%" }, // NRV for Vitamin B1: 1.1 mg
      { name: "Vitamin B2", amount: "0.08 mg", percentage: "5.71%" }, // NRV for Vitamin B2: 1.4 mg
      {
        name: "Pantothensäure (Vitamin B5)",
        amount: "0.15 mg",
        percentage: "3%",
      }, // NRV for Vitamin B5: 5 mg
      { name: "Vitamin B6", amount: "0.38 mg", percentage: "27.14%" }, // NRV for Vitamin B6: 1.4 mg
      { name: "Vitamin C", amount: "14 mg", percentage: "17.5%" }, // NRV for Vitamin C: 80 mg
      { name: "Kalium", amount: "530 mg", percentage: "15.14%" }, // NRV for Potassium: 3,500 mg
      { name: "Magnesium", amount: "35 mg", percentage: "9.33%" }, // NRV for Magnesium: 375 mg
      { name: "Kalzium", amount: "38 mg", percentage: "3.8%" }, // NRV for Calcium: 1,000 mg
      { name: "Eisen", amount: "1.4 mg", percentage: "10%" }, // NRV for Iron: 14 mg
      { name: "Kupfer", amount: "149 µg", percentage: "14.9%" }, // NRV for Copper: 1,000 µg
      { name: "Mangan", amount: "460 µg", percentage: "23%" }, // NRV for Manganese: 2,000 µg
    ],
    nutrients: {
      Brennwert: "145 kcal",
      Eiweiß: 6.05,
      Fett: 0.12,
      Kohlenhydrate: 28.41,
      Ballaststoffe: 1.8,
    },
    benefits: [
      "Unterstützt das Immunsystem: Knoblauch enthält Allicin, das antibakterielle und antivirale Eigenschaften hat und das Immunsystem stärkt.",
      "Fördert die Herzgesundheit: Der hohe Gehalt an Schwefelverbindungen im Knoblauch kann helfen, den Cholesterinspiegel zu senken und die Blutfettwerte zu verbessern.",
      "Unterstützt die Verdauung: Knoblauch wirkt als Präbiotikum und fördert das Wachstum gesunder Darmbakterien, was die Verdauung unterstützt.",
      "Reduziert Entzündungen: Die entzündungshemmenden Eigenschaften von Knoblauch können helfen, chronische Entzündungen im Körper zu verringern.",
      "Fördert die Hautgesundheit: Die Antioxidantien im Knoblauch schützen die Haut vor freien Radikalen und unterstützen ein gesundes Hautbild.",
      "Unterstützt die Blutzuckerregulation: Knoblauch kann helfen, den Blutzuckerspiegel zu stabilisieren und die Insulinempfindlichkeit zu verbessern.",
    ],
    regionAvailability: ["Deutschland", "Spanien", "Frankreich", "Italien"],
    storageTips:
      "An einem kühlen, trockenen Ort aufbewahren, vor direkter Sonneneinstrahlung schützen.",
    recipes: [
      "Knoblauchbutter",
      "Knoblauchbrot",
      "Knoblauch in Olivenöl geröstet",
      "Knoblauchcremesuppe",
      "Knoblauchmarinade für Fleisch",
      "Knoblauch-Chili-Öl",
      "Knoblauch mit Zitronenbutter",
    ],
  },
  {
    id: "veg052",
    name: "Lauch (Porree)",
    emoji: "🥬",
    backgroundColor: "#c8e0a2",
    info: "Lauch, auch bekannt als Porree, ist ein vielseitiges Gemüse, das oft in Suppen, Eintöpfen und als Beilage verwendet wird. Es hat einen milden Zwiebelgeschmack und ist reich an Nährstoffen.",
    image: images.lauch,
    season: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
    ],
    vitamins: [
      { name: "Eisen", amount: "1 mg", percentage: "7.14%" }, // NRV for Iron: 14 mg
      { name: "Vitamin A", amount: "11 µg", percentage: "1.22%" }, // NRV for Vitamin A: 900 µg
      { name: "Vitamin B1", amount: "0.09 mg", percentage: "8.18%" }, // NRV for Vitamin B1: 1.1 mg
      { name: "Vitamin B2", amount: "0.07 mg", percentage: "5%" }, // NRV for Vitamin B2: 1.4 mg
      { name: "Niacin", amount: "0.5 mg", percentage: "2.5%" }, // NRV for Niacin: 20 mg
      { name: "Kalium", amount: "267 mg", percentage: "7.63%" }, // NRV for Potassium: 3,500 mg
      { name: "Vitamin B6", amount: "0.26 mg", percentage: "18.57%" }, // NRV for Vitamin B6: 1.4 mg
      { name: "Kalzium", amount: "63 mg", percentage: "6.3%" }, // NRV for Calcium: 1,000 mg
      { name: "Vitamin C", amount: "26 mg", percentage: "32.5%" }, // NRV for Vitamin C: 80 mg
      { name: "Magnesium", amount: "18 mg", percentage: "4.8%" }, // NRV for Magnesium: 375 mg
      { name: "Vitamin E", amount: "0.5 mg", percentage: "4.17%" }, // NRV for Vitamin E: 12 mg
    ],
    nutrients: {
      Brennwert: "25 kcal",
      Fett: 0.3,
      Protein: 2.2,
      Kohlenhydrate: 3.3,
      Ballaststoffe: 2.3,
    },
    benefits: [
      "Fördert die Verdauung: Lauch enthält Ballaststoffe wie Inulin, die das Wachstum gesunder Darmbakterien unterstützen und die Verdauung fördern.",
      "Unterstützt das Immunsystem: Der hohe Gehalt an Vitamin C stärkt das Immunsystem und schützt vor Infektionen.",
      "Unterstützt die Herzgesundheit: Lauch enthält Kalium, das hilft, den Blutdruck zu regulieren und das Herz zu schützen.",
      "Hat entzündungshemmende Eigenschaften: Die schwefelhaltigen ätherischen Öle im Lauch wirken entzündungshemmend und können bei der Linderung von Entzündungen helfen.",
      "Fördert die Knochengesundheit: Lauch enthält Vitamin K, das für die Knochengesundheit und die Blutgerinnung wichtig ist.",
      "Unterstützt die Blutzuckerregulation: Lauch hat einen niedrigen glykämischen Index und kann helfen, den Blutzuckerspiegel stabil zu halten.",
    ],
    regionAvailability: ["Deutschland", "Frankreich", "Niederlande", "Polen"],
    storageTips:
      "An einem kühlen, trockenen Ort aufbewahren und vor direkter Sonneneinstrahlung schützen.",
    recipes: [
      "Lauchgemüse in Sahnesoße",
      "Lauchquiche",
      "Lauchsuppe",
      "Gebratener Lauch mit Speck",
      "Lauch-Pasteten",
      "Lauchsalat mit Vinaigrette",
      "Lauch mit Kartoffeln",
    ],
  },
  {
    id: "veg053",
    name: "Pastinake",
    emoji: "🥕",
    backgroundColor: "#e4dcb9",
    info: "Pastinaken sind eine Wurzelgemüseart, die eng mit der Möhre verwandt ist. Sie haben einen süßen, leicht nussigen Geschmack und sind besonders in der Winterzeit beliebt.",
    image: images.pasttinake,
    season: ["October", "November", "December", "January", "February", "March"],
    vitamins: [
      { name: "Folsäure", amount: "59 µg", percentage: "14.75%" }, // NRV for Folate: 400 µg
      { name: "Vitamin A", amount: "3.3 µg", percentage: "0.37%" }, // NRV for Vitamin A: 900 µg
      { name: "Vitamin B1", amount: "0.08 mg", percentage: "7.27%" }, // NRV for Vitamin B1: 1.1 mg
      { name: "Vitamin B2", amount: "0.13 mg", percentage: "9.29%" }, // NRV for Vitamin B2: 1.4 mg
      { name: "Niacin", amount: "0.9 mg", percentage: "4.5%" }, // NRV for Niacin: 20 mg
      { name: "Kalium", amount: "523 mg", percentage: "14.94%" }, // NRV for Potassium: 3,500 mg
      { name: "Vitamin B6", amount: "0.1 mg", percentage: "7.14%" }, // NRV for Vitamin B6: 1.4 mg
      { name: "Kalzium", amount: "51 mg", percentage: "5.1%" }, // NRV for Calcium: 1,000 mg
      { name: "Vitamin C", amount: "18 mg", percentage: "22.5%" }, // NRV for Vitamin C: 80 mg
      { name: "Magnesium", amount: "26 mg", percentage: "6.93%" }, // NRV for Magnesium: 375 mg
      { name: "Vitamin E", amount: "1.0 mg", percentage: "8.33%" }, // NRV for Vitamin E: 12 mg
      { name: "Eisen", amount: "0.6 mg", percentage: "4.29%" }, // NRV for Iron: 14 mg
    ],
    nutrients: {
      Brennwert: "59 kcal",
      Fett: 0.4,
      Protein: 1.3,
      Kohlenhydrate: 12.1,
      Ballaststoffe: 2.1,
    },
    benefits: [
      "Fördert die Verdauung: Pastinaken sind reich an Ballaststoffen, insbesondere Inulin, das das Wachstum gesunder Darmbakterien unterstützt und die Verdauung fördert. ",
      "Unterstützt das Immunsystem: Der hohe Gehalt an Vitamin C stärkt das Immunsystem und schützt vor Infektionen. ",
      "Unterstützt die Herzgesundheit: Pastinaken enthalten Kalium, das hilft, den Blutdruck zu regulieren und das Herz zu schützen. ",
      "Fördert die Knochengesundheit: Der Kalziumgehalt in Pastinaken trägt zur Stärkung der Knochen bei.",
      "Unterstützt die Blutzuckerregulation: Pastinaken haben einen niedrigen glykämischen Index und können helfen, den Blutzuckerspiegel stabil zu halten.",
      "Fördert die Hautgesundheit: Die Antioxidantien in Pastinaken schützen die Haut vor freien Radikalen und unterstützen ein gesundes Hautbild. ",
    ],
    regionAvailability: ["Deutschland", "Frankreich", "Niederlande", "Polen"],
    storageTips:
      "An einem kühlen, trockenen Ort in einem gut belüfteten Behälter aufbewahren.",
    recipes: [
      "Pastinakenpüree",
      "Gebratene Pastinaken",
      "Pastinaken-Suppe",
      "Pastinaken mit Honig und Thymian",
      "Pastinakenchips",
      "Pastinakenrisotto",
      "Pastinaken-Gemüsepfanne",
    ],
  },
  {
    id: "veg054",
    name: "Lauchzwiebel (Frühlingszwiebel)",
    emoji: "🧅",
    backgroundColor: "#a6d9b1",
    info: "Lauchzwiebeln, auch als Frühlingszwiebeln bekannt, sind eine milde Zwiebelart, die sowohl in der Küche als auch in der Naturheilkunde verwendet wird. Sie haben einen frischen Geschmack und sind vielseitig einsetzbar.",
    image: images.lauchzwiebel,
    season: ["April", "May", "June", "July", "August"],
    vitamins: [
      { name: "Kalium", amount: "230 mg", percentage: "6.57%" }, // NRV for Potassium: 3,500 mg
      { name: "Calcium", amount: "140 mg", percentage: "14%" }, // NRV for Calcium: 1,000 mg
      { name: "Phosphor", amount: "24 mg", percentage: "3.43%" }, // NRV for Phosphorus: 700 mg
      { name: "Magnesium", amount: "11 mg", percentage: "2.93%" }, // NRV for Magnesium: 375 mg
      { name: "Vitamin A", amount: "0.2 mg", percentage: "22.22%" }, // NRV for Vitamin A: 900 µg
      { name: "Vitamin B1", amount: "0.13 mg", percentage: "11.82%" }, // NRV for Vitamin B1: 1.1 mg
      { name: "Vitamin B6", amount: "0.2 mg", percentage: "14.29%" }, // NRV for Vitamin B6: 1.4 mg
      { name: "Vitamin C", amount: "25 mg", percentage: "31.25%" }, // NRV for Vitamin C: 80 mg
      { name: "Vitamin E", amount: "0.25 mg", percentage: "2.08%" }, // NRV for Vitamin E: 12 mg
    ],
    nutrients: {
      Eiweiß: 0.9,
      Fett: 0.3,
      Kohlenhydrate: 8.5,
      Ballaststoffe: 2.8,
    },
    benefits: [
      "Unterstützen das Immunsystem: Lauchzwiebeln sind reich an Vitamin C, das die Immunabwehr stärkt und vor Infektionen schützt. ",
      "Fördern die Verdauung: Der hohe Gehalt an Ballaststoffen unterstützt eine gesunde Verdauung und reguliert den Stuhlgang.",
      "Unterstützen die Herzgesundheit: Lauchzwiebeln enthalten Kalium, das hilft, den Blutdruck zu regulieren und das Herz zu schützen.",
      "Fördern die Knochengesundheit: Der Kalziumgehalt in Lauchzwiebeln trägt zur Stärkung der Knochen bei. ",
      "Unterstützen die Blutzuckerregulation: Lauchzwiebeln haben einen niedrigen glykämischen Index und können helfen, den Blutzuckerspiegel stabil zu halten. ",
      "Fördern die Hautgesundheit: Die Antioxidantien in Lauchzwiebeln schützen die Haut vor freien Radikalen und unterstützen ein gesundes Hautbild.",
    ],
    regionAvailability: ["Deutschland", "Frankreich", "Spanien", "Italien"],
    storageTips: "Im Kühlschrank in einem feuchten Tuch aufbewahren.",
    recipes: [
      "Lauchzwiebel-Salat",
      "Lauchzwiebel-Dip",
      "Gebratene Lauchzwiebel mit Sesam",
      "Lauchzwiebel in Teriyaki-Sauce",
      "Lauchzwiebel-Pfannkuchen",
      "Lauchzwiebel-Suppe",
      "Lauchzwiebel auf gegrilltem Brot",
    ],
  },
  {
    id: "veg055",
    name: "Kresse",
    emoji: "🌱",
    backgroundColor: "#d0f0c0",
    info: "Kresse ist ein kleines, würziges Blattgemüse, das häufig in Salaten und als Garnitur verwendet wird. Sie wächst schnell und hat einen leicht scharfen Geschmack.",
    image: images.kresse,
    season: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    vitamins: [
      { name: "Eisen", amount: "2.9 mg", percentage: "20.71%" }, // NRV for Iron: 14 mg
      { name: "Vitamin A", amount: "365 µg", percentage: "40.56%" }, // NRV for Vitamin A: 900 µg
      { name: "Vitamin B1", amount: "0.15 mg", percentage: "13.64%" }, // NRV for Vitamin B1: 1.1 mg
      { name: "Vitamin B2", amount: "0.19 mg", percentage: "13.57%" }, // NRV for Vitamin B2: 1.4 mg
      { name: "Niacin", amount: "1.8 mg", percentage: "9%" }, // NRV for Niacin: 20 mg
      { name: "Kalium", amount: "550 mg", percentage: "15.71%" }, // NRV for Potassium: 3,500 mg
      { name: "Vitamin B6", amount: "0.3 mg", percentage: "21.43%" }, // NRV for Vitamin B6: 1.4 mg
      { name: "Kalzium", amount: "214 mg", percentage: "21.4%" }, // NRV for Calcium: 1,000 mg
      { name: "Vitamin C", amount: "59 mg", percentage: "73.75%" }, // NRV for Vitamin C: 80 mg
      { name: "Magnesium", amount: "40 mg", percentage: "10.67%" }, // NRV for Magnesium: 375 mg
      { name: "Vitamin E", amount: "0.7 mg", percentage: "5.83%" }, // NRV for Vitamin E: 12 mg
    ],
    nutrients: {
      Brennwert: "33 kcal",
      Fett: 0.7,
      Protein: 4.2,
      Kohlenhydrate: 2.5,
      Ballaststoffe: 3.5,
    },
    benefits: [
      "Unterstützt das Immunsystem: Kresse ist reich an Vitamin C, das die Immunabwehr stärkt und vor Infektionen schützt.",
      "Fördert die Verdauung: Der hohe Gehalt an Ballaststoffen unterstützt eine gesunde Verdauung und reguliert den Stuhlgang.",
      "Unterstützt die Knochengesundheit: Kresse enthält Kalzium, das für starke Knochen wichtig ist.",
      "Fördert die Hautgesundheit: Die Antioxidantien in Kresse schützen die Haut vor freien Radikalen und unterstützen ein gesundes Hautbild. ",
      "Unterstützt die Blutzuckerregulation: Kresse hat einen niedrigen glykämischen Index und kann helfen, den Blutzuckerspiegel stabil zu halten. ",
      "Fördert die Herzgesundheit: Der hohe Gehalt an Kalium hilft, den Blutdruck zu regulieren und das Herz zu schützen.",
    ],
    regionAvailability: ["Deutschland", "Frankreich", "Schweiz"],
    storageTips:
      "Kresse sollte in einem feuchten Tuch im Kühlschrank aufbewahrt werden.",
    recipes: [
      "Kressesalat mit Radieschen",
      "Kresse auf Brot mit Quark",
      "Kresse-Suppe",
      "Kresse-Butter",
      "Kresse-Dip",
      "Kresse-Pesto",
      "Kresse auf Eierspeise",
    ],
  },
  {
    id: "veg057",
    name: "Chili (frisch)",
    emoji: "🌶️",
    backgroundColor: "#ff5c5c",
    info: "Frische Chilis sind bekannt für ihre Schärfe und den intensiven Geschmack. Sie werden häufig in der asiatischen, mexikanischen und indischen Küche verwendet.",
    image: images.chili,
    season: ["May", "June", "July", "August"],
    vitamins: [
      { name: "Vitamin A", amount: "68.4 µg", percentage: "7.6%" }, // NRV for Vitamin A: 900 µg
      { name: "Betacarotin", amount: "0.4 mg", percentage: "NA" }, // NRV for Beta-Carotene: NA
      { name: "Vitamin B1", amount: "12 µg", percentage: "1.09%" }, // NRV for Vitamin B1: 1.1 mg
      { name: "Vitamin B2", amount: "15 µg", percentage: "1.07%" }, // NRV for Vitamin B2: 1.4 mg
      { name: "Vitamin B3", amount: "0.2 mg", percentage: "1%" }, // NRV for Vitamin B3 (Niacin): 20 mg
      { name: "Vitamin B5", amount: "6 µg", percentage: "N/A" }, // NRV for Vitamin B5: NA
      { name: "Vitamin B6", amount: "28 µg", percentage: "2%" }, // NRV for Vitamin B6: 1.4 mg
      { name: "Vitamin B7", amount: "0.3 µg", percentage: "NA" }, // NRV for Vitamin B7: NA
      { name: "Vitamin B9", amount: "5.2 µg", percentage: "1.3%" }, // NRV for Vitamin B9 (Folate): 400 µg
      { name: "Vitamin C", amount: "22.5 mg", percentage: "28.13%" }, // NRV for Vitamin C: 80 mg
      { name: "Vitamin E", amount: "290 µg", percentage: "2.42%" }, // NRV for Vitamin E: 12 mg
      { name: "Vitamin K", amount: "0.5 µg", percentage: "N/A" }, // NRV for Vitamin K: NA
      { name: "Calcium", amount: "1.6 mg", percentage: "0.16%" }, // NRV for Calcium: 1,000 mg
      { name: "Magnesium", amount: "2.1 mg", percentage: "0.56%" }, // NRV for Magnesium: 375 mg
      { name: "Kalium", amount: "44 mg", percentage: "1.26%" }, // NRV for Potassium: 3,500 mg
      { name: "Natrium", amount: "1.2 mg", percentage: "N/A" }, // NRV for Sodium: NA
      { name: "Phosphor", amount: "3.9 mg", percentage: "N/A" }, // NRV for Phosphorus: NA
      { name: "Schwefel", amount: "1.5 mg", percentage: "N/A" }, // NRV for Sulfur: NA
      { name: "Chlorid", amount: "2 mg", percentage: "N/A" }, // NRV for Chloride: NA
      { name: "Eisen", amount: "100 µg", percentage: "0.71%" }, // NRV for Iron: 14 mg
    ],
    nutrients: {
      Brennwert: "2.8 kcal",
      Fett: 0.03,
      Eiweiß: 0.18,
      Kohlenhydrate: 0.42,
      Ballaststoffe: 0.36,
    },
    benefits: [
      "Regt den Stoffwechsel an: Capsaicin, der scharfe Inhaltsstoff in Chilis, kann den Stoffwechsel ankurbeln und die Fettverbrennung fördern.",
      "Fördert die Herzgesundheit: Chilis enthalten Antioxidantien wie Vitamin C und Beta-Carotin, die helfen können, den Cholesterinspiegel zu senken und das Risiko von Herzkrankheiten zu reduzieren.",
      "Lindert Schmerzen: Capsaicin hat schmerzlindernde Eigenschaften und wird in Schmerzcremes verwendet, um Muskel- und Gelenkschmerzen zu behandeln.",
      "Verbessert die Verdauung: Chilis können die Produktion von Verdauungssäften anregen und so die Verdauung fördern. ",
      "Stärkt das Immunsystem: Der hohe Vitamin-C-Gehalt in Chilis unterstützt das Immunsystem und hilft, Infektionen abzuwehren.",
      "Fördert die Blutzuckerregulation: Chilis können helfen, den Blutzuckerspiegel zu stabilisieren und die Insulinsensitivität zu verbessern.",
    ],
    regionAvailability: ["Deutschland", "Mexiko", "Indien", "Thailand"],
    storageTips: "Im Kühlschrank aufbewahren oder in getrockneter Form lagern.",
    recipes: [
      "Chili con Carne",
      "Scharfe Chili-Soße",
      "Chili-Öl",
      "Chili-Pasta",
    ],
  },
  {
    id: "veg058",
    name: "Topinambur",
    emoji: "🥔",
    backgroundColor: "#f4e1d2",
    info: "Topinambur, auch als Jerusalem-Artischocke bekannt, ist ein wurzelgemüse, das einen süßen, nussigen Geschmack hat und oft in Eintöpfen oder als Beilage verwendet wird.",
    image: images.topinambur,
    season: ["October", "November", "December", "January", "February"],
    vitamins: [
      { name: "Magnesium", amount: "20 mg", percentage: "5.33%" }, // NRV for Magnesium: 375 mg
      { name: "Eisen", amount: "3.7 mg", percentage: "26.43%" }, // NRV for Iron: 14 mg
      { name: "Vitamin A", amount: "2 µg", percentage: "0.22%" }, // NRV for Vitamin A: 900 µg
      { name: "Vitamin B1", amount: "0.2 mg", percentage: "18.18%" }, // NRV for Vitamin B1: 1.1 mg
      { name: "Vitamin B2", amount: "0.06 mg", percentage: "4.29%" }, // NRV for Vitamin B2: 1.4 mg
      { name: "Kalium", amount: "480 mg", percentage: "13.71%" }, // NRV for Potassium: 3,500 mg
      { name: "Niacin", amount: "1.3 mg", percentage: "6.5%" }, // NRV for Vitamin B3 (Niacin): 20 mg
      { name: "Kalzium", amount: "10 mg", percentage: "1%" }, // NRV for Calcium: 1,000 mg
      { name: "Vitamin C", amount: "4 mg", percentage: "5%" }, // NRV for Vitamin C: 80 mg
    ],
    nutrients: {
      Brennwert: "30 kcal",
      Fett: 0.4,
      Protein: 2.4,
      Kohlenhydrate: 4.0,
      Ballaststoffe: 12.1,
    },
    benefits: [
      "Fördert die Verdauung: Topinambur ist reich an Inulin, einem Ballaststoff, der die Verdauung unterstützt und die Darmflora fördert.",
      "Unterstützt das Immunsystem: Der hohe Gehalt an Vitamin C stärkt das Immunsystem und schützt vor Infektionen.",
      "Unterstützt die Blutzuckerregulation: Inulin hilft, den Blutzuckerspiegel stabil zu halten und verbessert die Insulinempfindlichkeit.",
      "Fördert die Herzgesundheit: Topinambur enthält Kalium, das hilft, den Blutdruck zu regulieren und die Herzgesundheit zu fördern.",
      "Fördert die Knochengesundheit: Der Kalziumgehalt in Topinambur trägt zur Stärkung der Knochen bei.",
      "Unterstützt die Gewichtsregulation: Topinambur ist kalorienarm und reich an Ballaststoffen, die das Sättigungsgefühl fördern und die Gewichtsabnahme unterstützen.",
    ],
    regionAvailability: ["Deutschland", "Frankreich", "Italien"],
    storageTips: "Kühl und trocken in einem luftdichten Behälter aufbewahren.",
    recipes: [
      "Topinambur-Suppe",
      "Gebratene Topinambur",
      "Topinambur-Püree",
      "Topinambur-Chips",
      "Topinambur-Salat mit Walnüssen",
      "Topinambur in Rahm",
      "Topinambur-Gratin",
    ],
  },
  {
    id: "veg059",
    name: "Erbsen",
    emoji: "🍃",
    backgroundColor: "#b7e09e",
    info: "Erbsen sind ein leicht süßliches Gemüse, das in vielen Formen konsumiert wird, von frischen Erbsen bis hin zu gefrorenen Erbsen. Sie sind ein guter Proteinlieferant und reich an Ballaststoffen.",
    image: images.erbsen,
    season: ["May", "June", "July", "August", "September"],
    vitamins: [
      { name: "Folsäure", amount: "159 µg", percentage: "39.75%" }, // NRV for Folate (Vitamin B9): 400 µg
      { name: "Biotin", amount: "5 µg", percentage: "10%" }, // NRV for Biotin (Vitamin B7): 50 µg
      { name: "Vitamin C", amount: "25 mg", percentage: "31.25%" }, // NRV for Vitamin C: 80 mg
      { name: "Beta-Carotin", amount: "422 µg", percentage: "46.89%" }, // NRV for Vitamin A: 900 µg
      { name: "Vitamin K", amount: "36 µg", percentage: "30%" }, // NRV for Vitamin K: 120 µg
      { name: "Kalium", amount: "252 mg", percentage: "7.2%" }, // NRV for Potassium: 3,500 mg
      { name: "Magnesium", amount: "36 mg", percentage: "9.6%" }, // NRV for Magnesium: 375 mg
      { name: "Kalzium", amount: "26 mg", percentage: "2.6%" }, // NRV for Calcium: 1,000 mg
      { name: "Phosphor", amount: "118 mg", percentage: "16.86%" }, // NRV for Phosphorus: 700 mg
      { name: "Kupfer", amount: "246 µg", percentage: "24.6%" }, // NRV for Copper: 1,000 µg
    ],
    nutrients: {
      Brennwert: "91 kcal",
      Eiweiß: 6.55,
      Fett: 0.48,
      Kohlenhydrate: 12.3,
      Ballaststoffe: 4.2,
    },
    benefits: [
      "Fördern die Verdauung: Erbsen sind reich an Ballaststoffen, die die Verdauung unterstützen und die Darmgesundheit fördern. :contentReference[oaicite:0]{index=0}",
      "Unterstützen das Immunsystem: Der hohe Gehalt an Vitamin C stärkt das Immunsystem und schützt vor Infektionen. :contentReference[oaicite:1]{index=1}",
      "Fördern die Herzgesundheit: Erbsen enthalten Kalium, das hilft, den Blutdruck zu regulieren und das Herz zu schützen. :contentReference[oaicite:2]{index=2}",
      "Unterstützen die Knochengesundheit: Der Kalziumgehalt in Erbsen trägt zur Stärkung der Knochen bei. :contentReference[oaicite:3]{index=3}",
      "Fördern die Blutzuckerregulation: Erbsen haben einen niedrigen glykämischen Index und können helfen, den Blutzuckerspiegel stabil zu halten. :contentReference[oaicite:4]{index=4}",
      "Unterstützen die Hautgesundheit: Die Antioxidantien in Erbsen schützen die Haut vor freien Radikalen und unterstützen ein gesundes Hautbild. :contentReference[oaicite:5]{index=5}",
    ],
    regionAvailability: [
      "Deutschland",
      "Frankreich",
      "Vereinigtes Königreich",
      "USA",
    ],
    storageTips:
      "Frische Erbsen sollten im Kühlschrank aufbewahrt werden. Gefrorene Erbsen sind länger haltbar.",
    recipes: [
      "Erbsensuppe",
      "Erbsenpüree",
      "Erbsen mit Schinken",
      "Erbsenrisotto",
      "Erbsensalat mit Feta",
      "Gebratene Erbsen mit Knoblauch",
      "Erbsen-Karotten-Gemüse",
    ],
  },
  {
    id: "veg060",
    name: "Spitzkohl",
    emoji: "🥬",
    backgroundColor: "#aadf85",
    info: "Spitzkohl ist eine zarte und süßliche Kohlsorte, die sich gut für Suppen, Salate und als Beilage eignet. Er hat einen milderen Geschmack als der klassische Weißkohl und ist leicht bekömmlich.",
    image: images.spitzkohl,
    season: ["April", "May", "June", "July", "August", "September"],
    vitamins: [
      {
        name: "Vitamin A (Retinoläquivalent)",
        amount: "25 µg",
        percentage: "2.78%",
      }, // NRV for Vitamin A: 900 µg
      { name: "Vitamin B1 (Thiamin)", amount: "50 µg", percentage: "4.55%" }, // NRV for Vitamin B1: 1,100 µg
      { name: "Vitamin B2 (Riboflavin)", amount: "50 µg", percentage: "3.85%" }, // NRV for Vitamin B2: 1,300 µg
      { name: "Niacin (Vitamin B3)", amount: "300 µg", percentage: "1.88%" }, // NRV for Niacin (Vitamin B3): 16,000 µg
      {
        name: "Vitamin B5 (Pantothensäure)",
        amount: "150 µg",
        percentage: "3%",
      }, // NRV for Vitamin B5: 5,000 µg
      {
        name: "Vitamin B6 (Pyridoxin)",
        amount: "150 µg",
        percentage: "10.71%",
      }, // NRV for Vitamin B6: 1,400 µg
      { name: "Folsäure (Vitamin B9)", amount: "73 µg", percentage: "18.25%" }, // NRV for Folate (Vitamin B9): 400 µg
      { name: "Vitamin C", amount: "60,000 µg", percentage: "75%" }, // NRV for Vitamin C: 80 mg
      {
        name: "Vitamin E (Alpha-Tocopherol)",
        amount: "150 µg",
        percentage: "125%",
      }, // NRV for Vitamin E: 120 mg
      { name: "Calcium", amount: "50 mg", percentage: "5%" }, // NRV for Calcium: 1,000 mg
      { name: "Kalium", amount: "249 mg", percentage: "7.11%" }, // NRV for Potassium: 3,500 mg
      { name: "Magnesium", amount: "9 mg", percentage: "2.4%" }, // NRV for Magnesium: 375 mg
      { name: "Phosphor", amount: "30 mg", percentage: "4.29%" }, // NRV for Phosphorus: 700 mg
    ],
    nutrients: {
      Brennwert: "23 kcal",
      Kohlenhydrate: 3.0,
      Eiweiß: 2.1,
      Ballaststoffe: 2.5,
    },
    benefits: [
      "Unterstützt das Immunsystem: Spitzkohl ist reich an Vitamin C, das die Immunabwehr stärkt und vor Infektionen schützt.",
      "Fördert die Verdauung: Der hohe Gehalt an Ballaststoffen unterstützt eine gesunde Verdauung und reguliert den Stuhlgang.",
      "Unterstützt die Knochengesundheit: Spitzkohl enthält Kalzium, das für starke Knochen wichtig ist.",
      "Fördert die Hautgesundheit: Die Antioxidantien in Spitzkohl schützen die Haut vor freien Radikalen und unterstützen ein gesundes Hautbild.",
      "Unterstützt die Blutzuckerregulation: Spitzkohl hat einen niedrigen glykämischen Index und kann helfen, den Blutzuckerspiegel stabil zu halten.",
      "Fördert die Herzgesundheit: Der hohe Gehalt an Kalium hilft, den Blutdruck zu regulieren und das Herz zu schützen.",
    ],
    regionAvailability: ["Deutschland", "Österreich", "Niederlande", "Schweiz"],
    storageTips:
      "Spitzkohl sollte im Kühlschrank aufbewahrt und innerhalb einer Woche verbraucht werden, um die Frische zu erhalten.",
    recipes: [
      "Spitzkohl-Salat",
      "Spitzkohl mit Hackfleisch",
      "Gedämpfter Spitzkohl",
      "Spitzkohl-Eintopf",
    ],
  },
  {
    id: "veg065",
    name: "Wirsing",
    emoji: "🥬",
    backgroundColor: "#c5e3c5",
    info: "Wirsing ist eine Kohlsorte, die für ihre zarten Blätter und ihren milden Geschmack bekannt ist. Er wird oft in Eintöpfen, Suppen oder als Beilage verwendet.",
    image: images.wirsing,
    season: ["October", "November", "December", "January", "February"],
    vitamins: [
      { name: "Vitamin B1 (Thiamin)", amount: "59 µg", percentage: "5.36%" }, // NRV for Vitamin B1: 1,100 µg
      { name: "Vitamin B2 (Riboflavin)", amount: "64 µg", percentage: "4.92%" }, // NRV for Vitamin B2: 1,300 µg
      { name: "Niacin (Vitamin B3)", amount: "331 µg", percentage: "2.06%" }, // NRV for Niacin (Vitamin B3): 16,000 µg
      {
        name: "Vitamin B5 (Pantothensäure)",
        amount: "210 µg",
        percentage: "4.2%",
      }, // NRV for Vitamin B5: 5,000 µg
      {
        name: "Vitamin B6 (Pyridoxin)",
        amount: "156 µg",
        percentage: "11.14%",
      }, // NRV for Vitamin B6: 1,400 µg
      { name: "Folsäure (Vitamin B9)", amount: "29 µg", percentage: "7.25%" }, // NRV for Folate (Vitamin B9): 400 µg
      { name: "Vitamin C", amount: "49,400 µg", percentage: "61.75%" }, // NRV for Vitamin C: 80 mg
      {
        name: "Vitamin E (Alpha-Tocopherol)",
        amount: "2,500 µg",
        percentage: "208.33%",
      }, // NRV for Vitamin E: 120 mg
      { name: "Calcium", amount: "64 mg", percentage: "6.4%" }, // NRV for Calcium: 1,000 mg
      { name: "Kalium", amount: "236 mg", percentage: "6.74%" }, // NRV for Potassium: 3,500 mg
      { name: "Magnesium", amount: "12 mg", percentage: "3.2%" }, // NRV for Magnesium: 375 mg
      { name: "Phosphor", amount: "56 mg", percentage: "8%" }, // NRV for Phosphorus: 700 mg
    ],
    nutrients: {
      Brennwert: "31 kcal",
      Kohlenhydrate: 2.9,
      Ballaststoffe: 2.6,
      Eiweiß: 2.8,
      Fett: 0.3,
    },
    benefits: [
      "Unterstützt das Immunsystem: Der hohe Vitamin-C-Gehalt stärkt das Immunsystem und schützt vor Infektionen.",
      "Fördert die Verdauung: Der hohe Ballaststoffgehalt unterstützt eine gesunde Verdauung und reguliert den Stuhlgang.",
      "Unterstützt die Knochengesundheit: Der Kalziumgehalt trägt zur Stärkung der Knochen bei.",
      "Fördert die Hautgesundheit: Die Antioxidantien schützen die Haut vor freien Radikalen und unterstützen ein gesundes Hautbild.",
      "Unterstützt die Blutzuckerregulation: Der niedrige glykämische Index hilft, den Blutzuckerspiegel stabil zu halten.",
      "Fördert die Herzgesundheit: Der hohe Kaliumgehalt hilft, den Blutdruck zu regulieren und das Herz zu schützen.",
    ],
    regionAvailability: ["Deutschland", "Frankreich", "Polen"],
    storageTips:
      "Kühl und trocken lagern, im Kühlschrank bleibt er länger frisch.",
    recipes: [
      "Wirsinggemüse",
      "Wirsing-Suppe",
      "Gefüllte Wirsingrouladen",
      "Wirsing mit Speck und Zwiebeln",
    ],
  },
  {
    id: "veg066",
    name: "Champignons",
    emoji: "🍄‍🟫",
    backgroundColor: "#f0f0e0",
    info: "Champignons sind vielseitige Speisepilze mit mildem, nussigem Geschmack. Sie eignen sich hervorragend für Salate, Suppen, Saucen und Pfannengerichte.",
    image: images.champignons,
    season: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    vitamins: [
      { name: "Vitamin B1 (Thiamin)", amount: "90 µg", percentage: "8.2%" }, // NRV: 1.1 mg
      {
        name: "Vitamin B2 (Riboflavin)",
        amount: "450 µg",
        percentage: "32.1%",
      }, // NRV: 1.4 mg
      { name: "Niacin (Vitamin B3)", amount: "3.8 mg", percentage: "23.8%" }, // NRV: 16 mg
      {
        name: "Vitamin B5 (Pantothensäure)",
        amount: "1.7 mg",
        percentage: "28.3%",
      }, // NRV: 6 mg
      { name: "Vitamin B6 (Pyridoxin)", amount: "120 µg", percentage: "8.6%" }, // NRV: 1.4 mg
      { name: "Vitamin D", amount: "1.9 µg", percentage: "38%" }, // NRV: 5 µg
      { name: "Kalium (Potassium)", amount: "420 mg", percentage: "12%" }, // NRV: 3.5 g
      { name: "Eisen (Iron)", amount: "1.3 mg", percentage: "9.3%" }, // NRV: 14 mg
      { name: "Phosphor", amount: "120 mg", percentage: "17.1%" }, // NRV: 700 mg
      { name: "Magnesium", amount: "12 mg", percentage: "3.2%" },
    ],
    nutrients: {
      Brennwert: "22 kcal",
      Fett: 0.3,
      Kohlenhydrate: 3.3,
      Ballaststoffe: 1.0,
      Protein: 2.5,
    },
    benefits: [
      "Kalorienarm und nahrhaft: Champignons sind reich an Vitaminen und Mineralstoffe bei gleichzeitig niedrigem Kaloriengehalt.",
      "Fördern die Knochengesundheit: Enthalten Vitamin D, das die Kalziumaufnahme unterstützt.",
      "Unterstützen die Immunfunktion: Der Gehalt an B-Vitaminen stärkt das Immunsystem.",
      "Verbessern die Verdauung: Ballaststoffe fördern eine gesunde Darmfunktion.",
      "Gut für die Herzgesundheit: Kalium hilft, den Blutdruck zu regulieren.",
      "Unterstützen die Zellgesundheit: Enthalten Antioxidantien, die freie Radikale bekämpfen.",
    ],
    regionAvailability: ["Deutschland", "Niederlande", "Frankreich", "Polen"],
    storageTips:
      "Am besten in einer Papiertüte im Kühlschrank aufbewahren, um Feuchtigkeitsbildung zu vermeiden.",
    recipes: [
      "Champignon-Rahmsauce",
      "Gefüllte Champignons",
      "Champignon-Pfanne",
    ],
  },
  {
    id: "veg067",
    name: "Rucola",
    emoji: "🥬",
    backgroundColor: "#d0e8c7",
    info: "Rucola ist ein würziges Blattgemüse mit einem leicht scharfen Geschmack, das reich an Vitaminen und Mineralstoffen ist.",
    image: images.rucula,
    season: ["March", "April", "May", "June", "July", "August", "September"],
    vitamins: [
      {
        name: "Vitamin A (Retinoläquivalent)",
        amount: "119 µg",
        percentage: "14.9%",
      },
      {
        name: "Vitamin B1 (Thiamin)",
        amount: "40 µg",
        percentage: "3.6%",
      },
      {
        name: "Vitamin B2 (Riboflavin)",
        amount: "30 µg",
        percentage: "2.1%",
      },
      {
        name: "Niacin (Vitamin B3)",
        amount: "500 µg",
        percentage: "3.1%",
      },
      {
        name: "Vitamin B5 (Pantothensäure)",
        amount: "260 µg",
        percentage: "5.2%",
      },
      {
        name: "Vitamin B6 (Pyridoxin)",
        amount: "120 µg",
        percentage: "8.6%",
      },
      {
        name: "Biotin (Vitamin B7)",
        amount: "0.6 µg",
        percentage: "1.2%",
      },
      {
        name: "Folsäure (Vitamin B9)",
        amount: "97 µg",
        percentage: "48.5%",
      },
      {
        name: "Vitamin C",
        amount: "150 mg",
        percentage: "187.5%",
      },
      {
        name: "Vitamin E (Alpha-Tocopherol)",
        amount: "500 µg",
        percentage: "417%",
      },
      {
        name: "Vitamin K",
        amount: "108 µg",
        percentage: "90%",
      },
    ],
    nutrients: {
      Brennwert: "25 kcal",
      Fett: "0.7 g",
      Kohlenhydrate: "3.7 g",
      Ballaststoffe: "1.6 g",
      Zucker: "2.1 g",
      Eiweiß: "2.6 g",
    },
    benefits: [
      "Fördert die Immunabwehr: Der hohe Vitamin C-Gehalt stärkt das Immunsystem.",
      "Gut für die Knochengesundheit: Vitamin K ist wichtig für die Knochengesundheit und hilft bei der Blutgerinnung.",
      "Unterstützt die Sehkraft: Vitamin A schützt das Auge und fördert die Sehkraft.",
      "Hilft bei der Verdauung: Der Ballaststoffgehalt in Rucola unterstützt die Verdauung und reguliert den Stuhlgang.",
      "Fördert die Entgiftung: Antioxidantien helfen, den Körper von schädlichen freien Radikalen zu befreien.",
      "Stärkt das Herz: Der Gehalt an Kalium unterstützt die Herzgesundheit und reguliert den Blutdruck.",
    ],
    regionAvailability: [
      "Europa",
      "Nordamerika",
      "Australien",
      "Mittelmeerregion",
    ],
    storageTips:
      "Im Kühlschrank aufbewahren und innerhalb weniger Tage verbrauchen.",
    recipes: ["Rucola-Salat mit Parmesan", "Pasta mit Rucola und Tomaten"],
  },
  {
    id: "veg068",
    name: "Gurke",
    emoji: "🥒",
    backgroundColor: "#b0e0a8",
    info: "Gurken – auch als Salatgurken bekannt – gehören zu den beliebtesten Gemüsesorten der Welt. Sie bestehen zu über 95 % aus Wasser, sind erfrischend und kalorienarm. Ihre kühlende Wirkung macht sie zu einem idealen Sommergemüse. Was Gurken so besonders macht und wie Sie sie am besten lagern und verwenden, erfahren Sie bei uns.",
    image: images.gurke,
    season: ["June", "July", "August", "September"],
    vitamins: [
      {
        name: "Vitamin A (Retinoläquivalent)",
        amount: "105 µg",
        percentage: "13%",
      }, // NRV: 800 µg
      { name: "Vitamin B1 (Thiamin)", amount: "30 µg", percentage: "2.7%" }, // NRV: 1.1 mg
      { name: "Vitamin B2 (Riboflavin)", amount: "26 µg", percentage: "1.9%" }, // NRV: 1.4 mg
      { name: "Niacin (Vitamin B3)", amount: "210 µg", percentage: "1.3%" }, // NRV: 16 mg
      {
        name: "Vitamin B5 (Pantothensäure)",
        amount: "259 µg",
        percentage: "5.2%",
      }, // NRV: 5 mg
      { name: "Vitamin B6 (Pyridoxin)", amount: "40 µg", percentage: "2.9%" }, // NRV: 1.4 mg
      { name: "Biotin (Vitamin B7)", amount: "1 µg", percentage: "2%" }, // NRV: 50 µg
      { name: "Folsäure (Vitamin B9)", amount: "7 µg", percentage: "3.5%" }, // NRV: 200 µg
      { name: "Vitamin C", amount: "2500 µg", percentage: "3.1%" }, // NRV: 80 mg
      {
        name: "Vitamin E (Alpha-Tocopherol)",
        amount: "110 µg",
        percentage: "0.9%",
      }, // NRV: 120 mg
    ],
    nutrients: {
      Brennwert: "15 kcal",
      Kohlenhydrate: 2.0,
      Ballaststoffe: 0.5,
      Eiweiß: 0.6,
      Fett: 0.1,
    },
    benefits: [
      "Fördert die Hydration",
      "Gut für die Haut",
      "Hilft bei der Verdauung",
      "Unterstützt den Gewichtsverlust",
    ],
    regionAvailability: ["Europa", "Asien", "Nordamerika"],
    storageTips:
      "Am besten bei Raumtemperatur aufbewahren und nicht im Kühlschrank lagern, da Gurken kälteempfindlich sind.",
    recipes: ["Gurkensalat mit Dill", "Gefüllte Gurken mit Frischkäse"],
  },
  {
    id: "veg069",
    name: "Kartoffeln",
    emoji: "🥔",
    backgroundColor: "#e2c49f",
    info: "Kartoffeln – ein Grundnahrungsmittel mit einer langen Geschichte. Ursprünglich aus Südamerika stammend, sind sie heute weltweit beliebt und vielseitig einsetzbar. Sie sind reich an Kohlenhydraten, enthalten aber auch wertvolle Vitamine und Mineralstoffe. Was Sie über den Anbau, die Lagerung und die Zubereitung wissen sollten, erfahren Sie bei uns.",
    image: images.kartoffeln,
    season: ["September", "October", "November"],
    vitamins: [
      { name: "Vitamin B1 (Thiamin)", amount: "100 µg", percentage: "9.1%" }, // NRV: 1.1 mg
      { name: "Vitamin B2 (Riboflavin)", amount: "40 µg", percentage: "2.9%" }, // NRV: 1.4 mg
      { name: "Niacin (Vitamin B3)", amount: "2000 µg", percentage: "12.5%" }, // NRV: 16 mg
      {
        name: "Vitamin B5 (Pantothensäure)",
        amount: "300 µg",
        percentage: "6%",
      }, // NRV: 5 mg
      { name: "Vitamin B6 (Pyridoxin)", amount: "300 µg", percentage: "21%" }, // NRV: 1.4 mg
      { name: "Biotin (Vitamin B7)", amount: "3 µg", percentage: "6%" }, // NRV: 50 µg
      { name: "Folsäure (Vitamin B9)", amount: "15 µg", percentage: "7.5%" }, // NRV: 200 µg
      { name: "Vitamin C", amount: "20000 µg", percentage: "25%" }, // NRV: 80 mg
      {
        name: "Vitamin E (Alpha-Tocopherol)",
        amount: "100 µg",
        percentage: "0.8%",
      }, // NRV: 120 mg
    ],
    nutrients: {
      Brennwert: "77 kcal",
      Kohlenhydrate: 17.0,
      Ballaststoffe: 2.2,
      Eiweiß: 2.0,
      Fett: 0.1,
    },
    benefits: [
      "Energiequelle dank komplexer Kohlenhydrate",
      "Reich an Kalium – gut für das Herz",
      "Fördert die Verdauung durch Ballaststoffe",
      "Unterstützt das Immunsystem durch Vitamin C",
    ],
    regionAvailability: ["Europa", "Asien", "Nordamerika"],
    storageTips:
      "An einem kühlen, dunklen und trockenen Ort lagern. Direkte Sonneneinstrahlung vermeiden, um das Austreiben und die Bildung von Solanin zu verhindern.",
    recipes: ["Kartoffelpüree", "Ofenkartoffeln", "Kartoffelsuppe"],
  },
  {
    id: "veg070",
    name: "Eisbergsalat",
    emoji: "🥗",
    backgroundColor: "#a9ccab",
    info: "Eisbergsalat ist kalorienarm und eine erfrischende Zutat für Salate. Mit seinem hohen Wassergehalt hilft er, den Flüssigkeitshaushalt zu unterstützen. Trotz seines milden Geschmacks enthält er wertvolle Vitamine und Mineralstoffe wie Kalium, Folsäure und Vitamin A.",
    image: images.eisbergsalat,
    season: ["May", "June", "July", "August"],
    vitamins: [
      {
        name: "Vitamin A",
        amount: "73 µg",
        percentage: "9.1%",
      },
      { name: "Vitamin B1 (Thiamin)", amount: "0.11 mg", percentage: "9%" },
      {
        name: "Vitamin B2 (Riboflavin)",
        amount: "0.01 mg",
        percentage: "0.7%",
      },
      { name: "Niacin (Vitamin B3)", amount: "0.03 mg", percentage: "0.2%" },
      {
        name: "Vitamin B6",
        amount: "0.03 mg",
        percentage: "2.1%",
      },
      { name: "Vitamin C", amount: "15 mg", percentage: "18.8%" },
      { name: "Folsäure (Vitamin B9)", amount: "53 µg", percentage: "26.5%" },
    ],
    nutrients: {
      Brennwert: "13 kcal",
      Kohlenhydrate: "1.9 g",
      Ballaststoffe: "0.6 g",
      Eiweiß: "0.7 g",
      Fett: "0.3 g",
      Kalium: "160 mg",
      Kalzium: "19 mg",
      Magnesium: "5 mg",
      Eisen: "0.4 mg",
    },
    benefits: [
      "Fördert die Verdauung durch Ballaststoffe",
      "Unterstützt die Hautgesundheit dank Vitamin C",
      "Trägt zur normalen Funktion des Nervensystems bei",
    ],
    regionAvailability: ["Europa", "Nordamerika"],
    storageTips: "Im Kühlschrank aufbewahren, um die Frische zu erhalten.",
    recipes: ["Eisbergsalat mit Tomaten und Gurken", "Wraps mit Eisbergsalat"],
  },
];
