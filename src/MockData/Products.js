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
  },
  {
    id: 2,
    name: "Loremplant",
    price: 20,
    parentId: 1,
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et pellentesque lorem. Proin porta turpis non massa porta, nec tempor mauris auctor. Nunc a neque at mauris varius pretium. Phasellus a magna velit. Aenean et tempus ex, non dictum ante. In aliquam dignissim mauris, vitae sollicitudin diam dictum a. Nullam diam diam, dapibus a nisi vel, auctor lacinia nunc. In rhoncus, libero sed blandit sagittis, lorem neque accumsan mi, ac bibendum lacus sem vel neque. Fusce sit amet quam volutpat, vehicula leo non, vulputate tortor. Vivamus lacinia ex mi, sit amet fringilla nisi volutpat sed. Nullam ipsum elit, laoreet eget rhoncus in, sollicitudin non tellus. Aenean vestibulum vulputate gravida. Nunc posuere mi a sapien sollicitudin, quis eleifend elit dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra magna fringilla lacus venenatis, et finibus augue tempor. Fusce tincidunt sem a elit pulvinar, faucibus cursus sem venenatis. Duis ullamcorper eu nisl ac ultrices. Vestibulum euismod urna odio, id pellentesque erat mollis in. Phasellus efficitur urna at lorem elementum posuere. Suspendisse fringilla, sapien sit amet accumsan placerat, arcu diam dignissim purus, rhoncus efficitur sapien erat vel justo. Donec at nunc feugiat, vulputate felis vel, ornare dui. Aenean accumsan arcu eget eros ultricies, mattis iaculis orci pretium. Donec facilisis in sem at scelerisque. Vivamus ut porta tellus. Integer elit nibh, malesuada nec scelerisque non, tempus quis magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam ultricies mauris scelerisque eros congue aliquam vitae quis neque. Pellentesque sit amet scelerisque tellus, a lacinia ex. Morbi bibendum nunc felis, non interdum tortor laoreet pharetra."
  }
];

export const clones = [
  { id: 0, name: "Chili", price: 20, subItems: chiliSubItems },
  { id: 1, name: "Tomat", price: 25, subItems: tomatSubItems }
];
