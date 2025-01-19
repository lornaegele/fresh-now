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
    name: "Kürbis",
    emoji: "🎃",
    backgroundColor: "#f5c784",
    info: "Kürbis ist ein vielseitiges Gemüse, das in vielen Herbstgerichten verwendet wird. Er ist reich an Vitamin A und C und eignet sich hervorragend für Suppen, Eintöpfe oder sogar zum Backen.",
    image: images.kruerbis,
    season: ["September", "October", "November"],
    vitamins: [
      { name: "Vitamin A", amount: "8500 IU", percentage: "170%" },
      { name: "Vitamin C", amount: "9.0 mg", percentage: "11%" },
    ],
    nutrients: {
      Ballaststoffe: 2.0,
      Eiweiß: 1.0,
      Kohlenhydrate: 7.0,
      Zucker: 3.0,
      Fett: 0.2,
    },
    benefits: [
      "Fördert die Augengesundheit durch Vitamin A",
      "Unterstützt das Immunsystem durch Vitamin C",
      "Reich an Antioxidantien",
    ],
    regionAvailability: ["USA", "China", "Mexiko"],
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
      { name: "Vitamin K", amount: "3.5 µg", percentage: "3%" },
      { name: "Vitamin B6", amount: "0.1 mg", percentage: "5%" },
    ],
    nutrients: {
      Ballaststoffe: 3.0,
      Eiweiß: 0.8,
      Kohlenhydrate: 5.0,
      Zucker: 3.0,
      Fett: 0.2,
    },
    benefits: [
      "Hilft bei der Kontrolle des Blutzuckerspiegels",
      "Fördert die Herzgesundheit",
      "Schützt die Zellen durch Antioxidantien",
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
      { name: "Vitamin C", amount: "31.6 mg", percentage: "35%" },
      { name: "Vitamin A", amount: "90 µg", percentage: "10%" },
    ],
    nutrients: {
      Ballaststoffe: 1.2,
      Eiweiß: 2.0,
      Kohlenhydrate: 2.0,
      Zucker: 0.6,
      Fett: 0.1,
    },
    benefits: [
      "Unterstützt das Immunsystem durch Vitamin C",
      "Fördert die Hautgesundheit",
      "Reich an Antioxidantien",
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
      { name: "Vitamin K", amount: "830 µg", percentage: "693%" },
      { name: "Vitamin A", amount: "6000 IU", percentage: "120%" },
    ],
    nutrients: {
      Ballaststoffe: 2.6,
      Eiweiß: 2.0,
      Kohlenhydrate: 3.7,
      Zucker: 1.0,
      Fett: 0.2,
    },
    benefits: [
      "Fördert die Knochengesundheit durch Vitamin K",
      "Unterstützt das Immunsystem mit Vitamin A",
      "Reich an Antioxidantien, die das Herz schützen",
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
      { name: "Vitamin C", amount: "92.0 mg", percentage: "102%" },
      { name: "Vitamin B6", amount: "0.2 mg", percentage: "15%" },
    ],
    nutrients: {
      Ballaststoffe: 3.6,
      Eiweiß: 1.7,
      Kohlenhydrate: 8.0,
      Zucker: 4.5,
      Fett: 0.1,
    },
    benefits: [
      "Stärkt das Immunsystem mit Vitamin C",
      "Fördert die Verdauung durch Ballaststoffe",
      "Hilft bei der Regulierung des Blutzuckerspiegels",
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
      { name: "Folat", amount: "110 µg", percentage: "28%" },
      { name: "Vitamin B9", amount: "90 µg", percentage: "22%" },
    ],
    nutrients: {
      Ballaststoffe: 6.0,
      Eiweiß: 8.0,
      Kohlenhydrate: 27.0,
      Zucker: 0.5,
      Fett: 0.6,
    },
    benefits: [
      "Fördert das Wachstum und die Zellerneuerung durch Folat",
      "Unterstützt die Herzgesundheit mit Ballaststoffen",
      "Hilft bei der Regulierung des Blutzuckerspiegels",
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
      { name: "Vitamin C", amount: "4.0 mg", percentage: "4%" },
      { name: "Folat", amount: "50 µg", percentage: "13%" },
    ],
    nutrients: {
      Ballaststoffe: 2.0,
      Eiweiß: 1.5,
      Kohlenhydrate: 10.0,
      Zucker: 8.0,
      Fett: 0.1,
    },
    benefits: [
      "Hilft bei der Regulierung des Blutzuckerspiegels",
      "Fördert die Verdauung durch Ballaststoffe",
      "Schützt die Haut durch Vitamin C",
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
      { name: "Vitamin C", amount: "85.0 mg", percentage: "95%" },
      { name: "Vitamin K", amount: "140 µg", percentage: "117%" },
    ],
    nutrients: {
      Ballaststoffe: 3.8,
      Eiweiß: 3.4,
      Kohlenhydrate: 9.0,
      Zucker: 2.0,
      Fett: 0.3,
    },
    benefits: [
      "Stärkt das Immunsystem mit Vitamin C",
      "Fördert die Knochengesundheit mit Vitamin K",
      "Hilft bei der Verdauung durch Ballaststoffe",
    ],
    regionAvailability: ["Deutschland", "Niederlande", "Polen", "Frankreich"],
    storageTips: "Im Kühlschrank aufbewahren, möglichst frisch verzehren.",
    recipes: ["Rosenkohl aus dem Ofen", "Rosenkohl mit Speck"],
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
      { name: "Vitamin K", amount: "50.0 µg", percentage: "42%" },
      { name: "Vitamin C", amount: "9.0 mg", percentage: "10%" },
    ],
    nutrients: {
      Ballaststoffe: 2.1,
      Eiweiß: 2.2,
      Kohlenhydrate: 3.7,
      Zucker: 1.0,
      Fett: 0.2,
    },
    benefits: [
      "Hilft bei der Knochengesundheit durch Vitamin K",
      "Fördert das Immunsystem mit Vitamin C",
      "Hat entzündungshemmende Eigenschaften",
    ],
    regionAvailability: ["Deutschland", "Niederlande", "Italien", "USA"],
    storageTips: "Frisch im Kühlschrank aufbewahren und zügig verzehren.",
    recipes: ["Spargelsuppe", "Grillierter Spargel"],
  },
  {
    id: "veg044",
    name: "Stangensellerie",
    emoji: "🌿",
    backgroundColor: "#9cc37d",
    info: "Stangensellerie ist ein knackiges Gemüse mit einem frischen, leicht bitteren Geschmack. Er wird häufig in Salaten, Suppen oder als Snack verwendet.",
    image: images.staudensellerie,
    season: ["March", "April", "May", "June", "July"],
    vitamins: [
      { name: "Vitamin K", amount: "30.0 µg", percentage: "25%" },
      { name: "Vitamin A", amount: "500 IU", percentage: "10%" },
    ],
    nutrients: {
      Ballaststoffe: 1.6,
      Eiweiß: 0.7,
      Kohlenhydrate: 3.0,
      Zucker: 1.0,
      Fett: 0.1,
    },
    benefits: [
      "Fördert eine gesunde Verdauung durch Ballaststoffe",
      "Unterstützt die Knochengesundheit mit Vitamin K",
      "Hilft bei der Hydratation durch hohen Wassergehalt",
    ],
    regionAvailability: ["Deutschland", "Niederlande", "Frankreich"],
    storageTips:
      "Im Kühlschrank aufbewahren, in einem feuchten Tuch eingeschlagen.",
    recipes: ["Selleriesuppe", "Selleriestangen mit Dip"],
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
      { name: "Vitamin C", amount: "36.6 mg", percentage: "40%" },
      { name: "Folat", amount: "53.0 µg", percentage: "13%" },
    ],
    nutrients: {
      Ballaststoffe: 2.5,
      Eiweiß: 1.3,
      Kohlenhydrate: 6.0,
      Zucker: 3.0,
      Fett: 0.2,
    },
    benefits: [
      "Stärkt das Immunsystem durch Vitamin C",
      "Fördert die Verdauung durch Ballaststoffe",
      "Hilft bei der Gewichtsregulation",
    ],
    regionAvailability: ["Deutschland", "Polen", "Frankreich", "USA"],
    storageTips: "Kühl und trocken lagern.",
    recipes: ["Krautsalat", "Weißkohlrouladen"],
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
      { name: "Vitamin K", amount: "500.0 µg", percentage: "417%" },
      { name: "Vitamin A", amount: "7000 IU", percentage: "140%" },
    ],
    nutrients: {
      Ballaststoffe: 4.0,
      Eiweiß: 2.9,
      Kohlenhydrate: 10.0,
      Zucker: 2.0,
      Fett: 0.9,
    },
    benefits: [
      "Stärkt die Knochen durch Vitamin K",
      "Unterstützt die Immunfunktion mit Vitamin A",
      "Reich an Antioxidantien, die den Körper schützen",
    ],
    regionAvailability: ["Deutschland", "Niederlande", "USA", "Kanada"],
    storageTips:
      "Kühl und trocken lagern, im Kühlschrank bleibt er länger frisch.",
    recipes: ["Grünkohlchips", "Grünkohlsuppe"],
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
      { name: "Vitamin C", amount: "14.0 mg", percentage: "16%" },
      { name: "Folat", amount: "25.0 µg", percentage: "6%" },
    ],
    nutrients: {
      Ballaststoffe: 1.6,
      Eiweiß: 0.8,
      Kohlenhydrate: 3.4,
      Zucker: 1.5,
      Fett: 0.1,
    },
    benefits: [
      "Fördert die Verdauung durch Ballaststoffe",
      "Unterstützt das Immunsystem durch Vitamin C",
      "Hat entzündungshemmende Eigenschaften",
    ],
    regionAvailability: ["Deutschland", "Frankreich", "Spanien", "USA"],
    storageTips: "Kühl und trocken lagern, möglichst bald verbrauchen.",
    recipes: ["Radieschensalat", "Radieschen als Snack"],
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
      { name: "Vitamin C", amount: "48.0 mg", percentage: "53%" },
      { name: "Vitamin K", amount: "15.5 µg", percentage: "13%" },
    ],
    nutrients: {
      Ballaststoffe: 2.0,
      Eiweiß: 1.9,
      Kohlenhydrate: 5.0,
      Zucker: 1.9,
      Fett: 0.3,
    },
    benefits: [
      "Reich an Antioxidantien, die den Körper schützen",
      "Fördert eine gesunde Verdauung durch Ballaststoffe",
      "Unterstützt das Immunsystem durch Vitamin C",
    ],
    regionAvailability: ["Deutschland", "Niederlande", "Polen", "Frankreich"],
    storageTips: "Im Kühlschrank aufbewahren, möglichst frisch verzehren.",
    recipes: ["Blumenkohlsuppe", "Blumenkohlreis", "Blumenkohlauflauf"],
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
      { name: "Vitamin C", amount: "8.1 mg", percentage: "9%" },
      { name: "Vitamin B6", amount: "0.1 mg", percentage: "6%" },
    ],
    nutrients: {
      Ballaststoffe: 1.7,
      Eiweiß: 0.9,
      Kohlenhydrate: 9.3,
      Zucker: 4.2,
      Fett: 0.1,
    },
    benefits: [
      "Unterstützt das Immunsystem durch Vitamin C",
      "Fördert die Verdauung durch Ballaststoffe",
      "Kann entzündungshemmend wirken",
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
      { name: "Vitamin C", amount: "8.6 mg", percentage: "10%" },
      { name: "Vitamin B6", amount: "0.1 mg", percentage: "5%" },
    ],
    nutrients: {
      Ballaststoffe: 1.0,
      Eiweiß: 0.9,
      Kohlenhydrate: 4.5,
      Zucker: 1.0,
      Fett: 0.0,
    },
    benefits: [
      "Stärkt das Immunsystem durch Antioxidantien",
      "Kann den Blutdruck senken",
      "Fördert die Verdauung und hilft bei Entzündungen",
    ],
    regionAvailability: ["Deutschland", "Spanien", "Frankreich", "Italien"],
    storageTips:
      "An einem kühlen, trockenen Ort aufbewahren, vor direkter Sonneneinstrahlung schützen.",
    recipes: ["Knoblauchbrot", "Knoblauchbutter", "Knoblauchhähnchen"],
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
      { name: "Vitamin C", amount: "12 mg", percentage: "15%" },
      { name: "Vitamin A", amount: "98 µg", percentage: "12%" },
    ],
    nutrients: {
      Ballaststoffe: 1.5,
      Eiweiß: 1.0,
      Kohlenhydrate: 7.0,
      Zucker: 3.0,
      Fett: 0.1,
    },
    benefits: [
      "Reich an Antioxidantien, die das Immunsystem unterstützen",
      "Fördert die Verdauung und hilft bei der Regulierung des Blutzuckerspiegels",
      "Kann das Risiko für Herzkrankheiten senken",
      "Hat entzündungshemmende Eigenschaften",
    ],
    regionAvailability: ["Deutschland", "Frankreich", "Niederlande", "Polen"],
    storageTips:
      "An einem kühlen, trockenen Ort aufbewahren und vor direkter Sonneneinstrahlung schützen.",
    recipes: [
      "Lauchcremesuppe",
      "Lauchquiche",
      "Lauchgemüse mit Kartoffeln",
      "Lauch in Rahmsoße",
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
      { name: "Vitamin C", amount: "17 mg", percentage: "20%" },
      { name: "Vitamin A", amount: "20 µg", percentage: "10%" },
    ],
    nutrients: {
      Ballaststoffe: 4.0,
      Eiweiß: 1.2,
      Kohlenhydrate: 17.0,
      Zucker: 7.0,
      Fett: 0.1,
    },
    benefits: [
      "Stärkt das Immunsystem durch Vitamin C",
      "Reich an Ballaststoffen, die die Verdauung fördern",
      "Hilft bei der Blutzuckerkontrolle",
      "Enthält Antioxidantien, die das Risiko von chronischen Krankheiten verringern",
    ],
    regionAvailability: ["Deutschland", "Frankreich", "Niederlande", "Polen"],
    storageTips:
      "An einem kühlen, trockenen Ort in einem gut belüfteten Behälter aufbewahren.",
    recipes: [
      "Pastinakensuppe",
      "Geröstete Pastinaken mit Honig",
      "Pastinakenpüree",
      "Pastinakensalat",
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
      { name: "Vitamin C", amount: "10 mg", percentage: "12%" },
      { name: "Vitamin K", amount: "47 µg", percentage: "40%" },
    ],
    nutrients: {
      Ballaststoffe: 2.0,
      Eiweiß: 1.5,
      Kohlenhydrate: 6.0,
      Zucker: 3.0,
      Fett: 0.2,
    },
    benefits: [
      "Fördert die Gesundheit des Verdauungssystems",
      "Reich an Vitamin K, das wichtig für die Knochengesundheit ist",
      "Hat entzündungshemmende Eigenschaften",
      "Unterstützt die Blutzirkulation und stärkt das Immunsystem",
    ],
    regionAvailability: ["Deutschland", "Frankreich", "Spanien", "Italien"],
    storageTips: "Im Kühlschrank in einem feuchten Tuch aufbewahren.",
    recipes: [
      "Frühlingszwiebel-Dip",
      "Frühlingszwiebel-Omelett",
      "Frühlingszwiebel-Salat",
      "Pfannengerührte Frühlingszwiebeln mit Reis",
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
      { name: "Vitamin C", amount: "20 mg", percentage: "25%" },
      { name: "Vitamin K", amount: "30 µg", percentage: "25%" },
    ],
    nutrients: {
      Ballaststoffe: 1.2,
      Eiweiß: 2.0,
      Kohlenhydrate: 4.0,
      Zucker: 1.0,
      Fett: 0.1,
    },
    benefits: [
      "Reich an Vitamin C für ein starkes Immunsystem",
      "Fördert die Wundheilung und die Hautgesundheit",
      "Hilft, den Blutdruck zu senken",
      "Verbessert die Verdauung und hilft bei Entzündungen",
    ],
    regionAvailability: ["Deutschland", "Frankreich", "Schweiz"],
    storageTips:
      "Kresse sollte in einem feuchten Tuch im Kühlschrank aufbewahrt werden.",
    recipes: [
      "Kresse-Salat",
      "Kresse auf Brot",
      "Kresse-Smoothie",
      "Kresse als Garnitur für Suppen und Eintöpfe",
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
      { name: "Vitamin C", amount: "100 mg", percentage: "120%" },
      { name: "Vitamin A", amount: "225 µg", percentage: "28%" },
    ],
    nutrients: {
      Ballaststoffe: 2.0,
      Eiweiß: 1.5,
      Kohlenhydrate: 7.0,
      Zucker: 4.0,
      Fett: 0.2,
    },
    benefits: [
      "Steigert den Stoffwechsel und unterstützt die Fettverbrennung",
      "Reich an Antioxidantien, die das Immunsystem stärken",
      "Fördert die Durchblutung und lindert Schmerzen",
      "Kann die Verdauung anregen und den Appetit ankurbeln",
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
      { name: "Vitamin C", amount: "11 mg", percentage: "13%" },
      { name: "Vitamin B1", amount: "0.2 mg", percentage: "14%" },
    ],
    nutrients: {
      Ballaststoffe: 1.8,
      Eiweiß: 2.0,
      Kohlenhydrate: 17.0,
      Zucker: 5.0,
      Fett: 0.1,
    },
    benefits: [
      "Hilft bei der Regulierung des Blutzuckerspiegels",
      "Fördert eine gesunde Verdauung durch hohe Ballaststoffgehalte",
      "Stärkt das Immunsystem durch Vitamin C",
      "Kann die Knochengesundheit unterstützen",
    ],
    regionAvailability: ["Deutschland", "Frankreich", "Italien"],
    storageTips: "Kühl und trocken in einem luftdichten Behälter aufbewahren.",
    recipes: [
      "Topinamburpüree",
      "Topinambur-Suppe",
      "Geröstete Topinambur",
      "Topinambur-Salat",
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
      { name: "Vitamin C", amount: "60 mg", percentage: "75%" },
      { name: "Vitamin A", amount: "38 µg", percentage: "5%" },
    ],
    nutrients: {
      Ballaststoffe: 4.0,
      Eiweiß: 5.0,
      Kohlenhydrate: 14.0,
      Zucker: 6.0,
      Fett: 0.2,
    },
    benefits: [
      "Reich an Vitamin C, das das Immunsystem stärkt",
      "Fördert die Verdauung und verbessert die Blutzuckerwerte",
      "Hilft, den Cholesterinspiegel zu senken",
      "Hat antioxidative Eigenschaften, die vor Zellschäden schützen",
    ],
    regionAvailability: [
      "Deutschland",
      "Frankreich",
      "Vereinigtes Königreich",
      "USA",
    ],
    storageTips:
      "Frische Erbsen sollten im Kühlschrank aufbewahrt werden. Gefrorene Erbsen sind länger haltbar.",
    recipes: ["Erbsensuppe", "Erbsenpüree", "Erbsenrisotto", "Erbsen-Salat"],
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
      { name: "Vitamin C", amount: "56 mg", percentage: "70%" },
      { name: "Vitamin K", amount: "81 µg", percentage: "68%" },
    ],
    nutrients: {
      Ballaststoffe: 3.2,
      Eiweiß: 1.9,
      Kohlenhydrate: 7.1,
      Zucker: 3.6,
      Fett: 0.3,
    },
    benefits: [
      "Reich an Vitamin C, das das Immunsystem unterstützt",
      "Fördert eine gesunde Verdauung",
      "Hat entzündungshemmende Eigenschaften",
      "Hilft, das Risiko für Herzkrankheiten zu senken",
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
      { name: "Vitamin C", amount: "60 mg", percentage: "75%" },
      { name: "Vitamin K", amount: "100 µg", percentage: "83%" },
    ],
    nutrients: {
      Ballaststoffe: 3.0,
      Eiweiß: 2.5,
      Kohlenhydrate: 8.0,
      Zucker: 3.0,
      Fett: 0.5,
    },
    benefits: [
      "Fördert die Verdauung durch Ballaststoffe",
      "Stärkt das Immunsystem durch Vitamin C",
      "Hilft bei der Regulierung des Blutdrucks",
      "Reich an Vitamin K, das die Knochengesundheit unterstützt",
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
    id: "veg0266",
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
      "Kalorienarm und nahrhaft: Champignons sind reich an Vitaminen und Mineralien bei gleichzeitig niedrigem Kaloriengehalt.",
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
];
