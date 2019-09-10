import {asset} from "./utils";

export default {
  color: {
    primary: '#EB4535',
    secondary: '#1C1264',
    yellow: '#F0CD57',
  },
  articles: [
    {
      index: 0,
      id: 'sturgeon',
      title: 'Sturgeon',
      intro: 'Caviar mafia vs Danube dinosaur',
      description: 'For more than 200 million years, the sturgeon remained pretty much unchanged – growing up to seven meters long and sporting a long, flat snout and smooth, scale-free skin. But a combination of dams, pollution and overfishing – fueled by the hunger for luxury caviar – have driven the fish to the brink of extinction and you are now lucky to find one topping two-meters long. Now measures are in place to save it and border guards are fighting an ongoing – and sometimes deadly – battle with the “caviar mafia,” which leads the illegal trade in the fish’s eggs.',
      x: 90,
      y: 136,
    },
    {
      index: 1,
      id: 'microplastics',
      title: 'Microplastics',
      intro: 'Small thing, big problem',
      description: 'Plastic bags and bottles drifting in the sea or tangled around fish or birds are the types of litter that are easy to spot, and easy for governments to take action against. But what about microplastics? These tiny bits of plastic, up to 5mm in size, come from many different sources – cosmetics, your washing, industrial waste, car tires or chipped off bits of larger rubbish. It is estimated there are 200,000 tons of these little pieces of plastic entering Europe\'s waterways each year. Campaigners are seeking to understand the issue in the Danube – and work out ways to tackle the problem, which crosses borders.',
      x: 170,
      y: 237,
    },
    {
      index: 2,
      id: 'hydro-power',
      title: 'Hydro-power',
      intro: 'Dam of be dammed',
      description: 'There are 62 dams along the length of the Danube, which turn the kinetic energy of water pounding off the Alps into electricity. While this is lauded by some power companies and governments as an ideal antidote to CO2 emissions, environmental campaigners argue no more should be built – and some should be removed. They claim the dams stop fish reaching spawning grounds, cause build-up of polluted sediment, damage vital wetlands, destroy ecosystems, displace communities and they aren’t cost-effective.',
      x: 410,
      y: 146,
      images: [
        asset('/assets/img/articles/facts.svg'),
      ],
    },
    {
      index: 3,
      id: 'rewilding',
      title: 'Rewilding',
      intro: 'Back from the dead',
      description: 'Where the river flows into the Black Sea lies Europe’s largest wetland, it is one of the one of the most underpopulated areas of the continent and relatively untouched by industrialization. Here, animals that have been absent from the region for hundreds of years are being reintroduced in a bid to restore a balanced ecosystem. Moreover, where some important species became extinct in the 1700s, scientists have created the next best thing through “back breeding” to repopulate the area.',
      x: 170,
      y: 146,
    },
    {
      index: 4,
      id: 'mila-23',
      title: 'Mila 23',
      intro: 'Life of the island people',
      description: 'While known for its wildlife and biodiversity, the Danube is also sanctuary to a mosaic of minorities who escaped from neighboring countries for fear of persecution centuries ago. Notable to the region are the Lipovans from Russia, who live in almost isolation and whose villages can only be accessed by boat. They are expert fishermen and canoeists, but these traditions are being threatened by environmental changes and a growing tourism sector. In an increasingly connected world, the livelihood of the Danube\'s river people is contingent on their ability to adapt to modern changes, while living in harmony with nature.',
      images: [
        asset('/assets/img/articles/4.png'),
      ],
      x: 570,
      y: 100,
    },
  ],
  mapInfo: 'Stretching more than 2,000 kilometers from the heart of Europe to its eastern extremity, the waters of the Danube offer a living record of the balance between the needs of man and the resilience of nature.',
};
