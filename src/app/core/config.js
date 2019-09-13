import {asset} from "./utils";

const domElementStyle = getComputedStyle(document.documentElement);

export default {
  color: {
    primary: domElementStyle && domElementStyle.getPropertyValue('--color-primary'),
    secondary: domElementStyle && domElementStyle.getPropertyValue('--color-secondary'),
    yellow: domElementStyle && domElementStyle.getPropertyValue('--color-yellow'),
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
      videos: [
        'https://video.cgtn.com/public/2019-09-12/public/video/dbfd51f4a8d1406db12a72280a0da04e/dbfd51f4a8d1406db12a72280a0da04e.m3u8',
        'https://video.cgtn.com/public/2019-09-12/public/video/34e90658c667428dac723a516fc321dd/34e90658c667428dac723a516fc321dd.m3u8',
        'https://video.cgtn.com/public/2019-09-12/public/video/224589d3401f4b6980ef96bdc70db234/224589d3401f4b6980ef96bdc70db234.m3u8',
        'https://video.cgtn.com/public/2019-09-12/public/video/8cb9d39dc24c40d4865569ab98d5a780/8cb9d39dc24c40d4865569ab98d5a780.m3u8',
        'https://video.cgtn.com/public/2019-09-12/public/video/0a90386da3484e0186ce67bfdf1a6a13/0a90386da3484e0186ce67bfdf1a6a13.m3u8',
      ],
    },
    {
      index: 1,
      id: 'microplastics',
      title: 'Microplastics',
      intro: 'Small thing, big problem',
      description: 'Plastic bags and bottles drifting in the sea or tangled around fish or birds are the types of litter that are easy to spot, and easy for governments to take action against. But what about microplastics? These tiny bits of plastic, up to 5mm in size, come from many different sources – cosmetics, your washing, industrial waste, car tires or chipped off bits of larger rubbish. It is estimated there are 200,000 tons of these little pieces of plastic entering Europe\'s waterways each year. Campaigners are seeking to understand the issue in the Danube – and work out ways to tackle the problem, which crosses borders.',
      x: 170,
      y: 237,
      videos: [
        'https://video.cgtn.com/public/2019-09-12/public/video/a3318b17e0dc4e9d8190e5e21d4fb1b8/a3318b17e0dc4e9d8190e5e21d4fb1b8.m3u8',
        'https://video.cgtn.com/public/2019-09-12/public/video/002bef0fa18e4cc689dee77c306d340e/002bef0fa18e4cc689dee77c306d340e.m3u8',
      ],
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
      videos: [
        'https://video.cgtn.com/public/2019-09-12/public/video/6358f3e8140a4a0794f5cfb6cf32fa33/6358f3e8140a4a0794f5cfb6cf32fa33.m3u8',
        'https://video.cgtn.com/public/2019-09-12/public/video/0b68dd89bfbf485e9aef9eac0dde5e36/0b68dd89bfbf485e9aef9eac0dde5e36.m3u8',
        'https://video.cgtn.com/public/2019-09-12/public/video/ddd33b5fd6bf42099b0105f0094c539d/ddd33b5fd6bf42099b0105f0094c539d.m3u8',
        'https://video.cgtn.com/public/2019-09-12/public/video/1828475facf44114884956a3f95832ca/1828475facf44114884956a3f95832ca.m3u8',
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
      videos: [
        'https://video.cgtn.com/public/2019-09-12/public/video/2c466686708d4652a0b423ff92ad0666/2c466686708d4652a0b423ff92ad0666.m3u8',
        'https://video.cgtn.com/public/2019-09-12/public/video/ea022371bcf14fb793461e94a3fce863/ea022371bcf14fb793461e94a3fce863.m3u8',
      ],
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
      videos: [
        'https://video.cgtn.com/public/2019-09-12/public/video/81a56fed2111432fad90abf424f60bf2/81a56fed2111432fad90abf424f60bf2.m3u8',
        'https://video.cgtn.com/public/2019-09-12/public/video/e6e2676fdebd4147bc3cb3d1e9a5a7be/e6e2676fdebd4147bc3cb3d1e9a5a7be.m3u8',
        'https://video.cgtn.com/public/2019-09-12/public/video/a4b6a2f482b24e7d8104d2bc3e8201f9/a4b6a2f482b24e7d8104d2bc3e8201f9.m3u8',
        'https://video.cgtn.com/public/2019-09-12/public/video/026cadc79a70427fb6a2d7bebdda53a5/026cadc79a70427fb6a2d7bebdda53a5.m3u8',
      ],
    },
  ],
  mapInfo: 'Stretching more than 2,000 kilometers from the heart of Europe to its eastern extremity, the waters of the Danube offer a living record of the balance between the needs of man and the resilience of nature.',
};
