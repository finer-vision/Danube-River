import {asset} from "./utils";

const domElementStyle = getComputedStyle(document.documentElement);

export default {
  color: {
    primary: domElementStyle && domElementStyle.getPropertyValue('--color-primary'),
    secondary: domElementStyle && domElementStyle.getPropertyValue('--color-secondary'),
    yellow: domElementStyle && domElementStyle.getPropertyValue('--color-yellow'),
    'blue-100': domElementStyle && domElementStyle.getPropertyValue('--color-blue-100'),
  },
  articles: [
    {
      index: 0,
      id: 'sturgeon',
      title: 'Sturgeon',
      intro: 'Caviar mafia vs Danube dinosaur',
      description: 'For more than 200 million years, sturgeon have lurked beneath the waters of Earth, witnessing the demise of dinosaurs and the rise of man. The Danube long boasted one of the largest populations of the living fossil, but it is now under threat of extinction from dams, pollution and overfishing. Conservationists are working to save the species and are fighting an ongoing battle with the “caviar mafia,” which leads the illegal trade in the fish’s eggs.',
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
      description: 'Media images of bags and bottles drifting in the sea or tangled birds have made the fight against plastic waste emblematic of last-ditch attempts to reverse the damage inflicted by the economy of consumption. However, the invisible pollution caused by tiny plastic particles is harder to address and could prove more harmful in every corner of the Earth. From the way we wash and eat to what we wear, everyone has a part to play.',
      x: 170,
      y: 237,
      videos: [
        'https://video.cgtn.com/public/2019-09-12/public/video/a3318b17e0dc4e9d8190e5e21d4fb1b8/a3318b17e0dc4e9d8190e5e21d4fb1b8.m3u8',
        'https://video.cgtn.com/public/2019-09-12/public/video/002bef0fa18e4cc689dee77c306d340e/002bef0fa18e4cc689dee77c306d340e.m3u8',
      ],
    },
    {
      index: 2,
      id: 'hydropower',
      title: 'Hydropower',
      intro: 'The Dam Danube',
      description: 'There are 62 dams along the length of the Danube, which turn the kinetic energy of water pounding off the Alps into electricity. The clean energy they generate was once lauded as the epitome of a new relationship between man and the environment. But today, their impact is judged by more than carbon dioxide emissions. Fish, birds, soil quality and water pollution are all heavily influenced, often negatively by obstructions to the river’s flow.',
      x: 410,
      y: 146,
      images: [
        asset('assets/img/articles/facts.svg'),
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
      description: 'Where the Danube flows into the Black Sea lies Europe’s largest wetland. It is one of the most underpopulated areas of the continent. Here, animals that have been absent from the region for hundreds of years are being reintroduced in a bid to restore a balanced ecosystem. Moreover, where some important species became extinct in the 1700s, scientists have created the next best thing through “back breeding” to repopulate the area.',
      x: 170,
      y: 146,
      images: [
        asset('assets/img/articles/rewilding-beaver.jpg'),
      ],
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
      description: 'The Danube is sanctuary to a mosaic of minorities who escaped from neighbouring countries for fear of persecution centuries ago. Notable are the Lipovans from Russia, they are expert fishermen and canoeists, but these traditions are being threatened by environmental changes and a growing tourism sector. In an increasingly connected world, the livelihood of these river people is contingent on their ability to adapt to modern changes, while living in harmony with nature.',
      images: [
        asset('assets/img/articles/4.png'),
      ],
      x: 570,
      y: 100,
      videos: [
        'https://video.cgtn.com/public/2019-09-17/public/video/5a2d3b1200c44283b03b9bd5de6e9f4a/5a2d3b1200c44283b03b9bd5de6e9f4a.m3u8',
        'https://video.cgtn.com/public/2019-09-12/public/video/e6e2676fdebd4147bc3cb3d1e9a5a7be/e6e2676fdebd4147bc3cb3d1e9a5a7be.m3u8',
        'https://video.cgtn.com/public/2019-09-12/public/video/a4b6a2f482b24e7d8104d2bc3e8201f9/a4b6a2f482b24e7d8104d2bc3e8201f9.m3u8',
        'https://video.cgtn.com/public/2019-09-12/public/video/026cadc79a70427fb6a2d7bebdda53a5/026cadc79a70427fb6a2d7bebdda53a5.m3u8',
      ],
    },
  ],
  mapInfo: 'Stretching more than 2,000 kilometers from the heart of Europe to its eastern extremity, the waters of the Danube offer a living record of the balance between the needs of people and the resilience of nature.',
};
