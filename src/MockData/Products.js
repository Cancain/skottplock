const chiliSubItems = [
  {
    id: 0,
    name: "Basket of fire",
    price: 30,
    parentId: 0,
    desc:
      "Basket of Fire F1 är en underbart produktiv och dekorativ Chili. Det unika, buskiga växtsättet som Chilli Peppar ‘Basket of Fire’ har gör den perfekt för amplar och krukor. Denna färggranna sort blir översållad med små, mycket heta chilifrukter som mognar från mörkt purpurröda till gula och orange till en ljus röd nyans, fantastisk dekorativ. Plantorna visar god hållbarhet i svalt väder och fortsätter att sätta frukt utomhus långt in på hösten och ännu längre under glas. Dessa kraftfulla chilis har en Scoville styrka på cirka 80000 shu, används färska eller torkade."
  },
  {
    id: 1,
    name: "Jalapeño",
    price: 32,
    parentId: 0,
    desc:
      "Mexikansk chilipeppar. Kompakta plantor med 6 cm avlånga, svagt koniska, lite knubbiga, gröna frukter som vid full mognad övergår i rött. Styrka: mild."
  },
  {
    id: 2,
    name: "De Cayenne",
    price: 15,
    parentId: 0,
    desc:
      "Klassisk chilipeppar. Långsmala, gröna frukter som vid full mognad övergår i rött. Ca 20-25 gånger starkare än vanlig paprika. Styrka: het."
  }
];

const tomatSubItems = [
  {
    id: 0,
    name: "Tumbling Tom Yellow",
    price: 24,
    parentId: 1,
    desc:
      "En äkta hängtomat! Utvecklar långa, hängande grenar med mängder av små, gula, söta körsbärstomater under lång tid. Dekorativa plantor för ampel, balkonglåda och liknande."
  },
  {
    id: 1,
    name: "Brandywine",
    price: 32,
    parentId: 1,
    desc:
      "Kulturarv. Från 1885. En av de mest smakrika, äldre sorterna. Stora, rosa, plattrunda frukter på 200-400 gram, helt genomfärgade med fyllig underbar smak. För växthus och varma utelägen. Amatörsort."
  }
];

export const clones = [
  { id: 0, name: "Chili", price: 20, subItems: chiliSubItems },
  { id: 1, name: "Tomat", price: 25, subItems: tomatSubItems }
];
