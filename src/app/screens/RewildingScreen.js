import React from "react";
import BaseScreen from "./BaseScreen";
import Screen from "../components/Screen";
import {AppContext} from "../context/AppContext";
import Section from "../components/Section";
import {asset} from "../core/utils";
import Video from "../components/Video";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import config from "../core/config";
import LazyImage from "../components/LazyImage"
import CarouselContent from "../components/CarouselContent";

const ARTICLE = config.articles.find(article => article.id === 'rewilding');

@AppContext
export default class MicroPlasticScreen extends BaseScreen {
  article = ARTICLE;

  render = () => (
    <Screen name="Rewilding">

      <Section>
        <Hero
          parallax
          tag="Rewilding"
          title="Back from the dead"
          parallaxHeaderId={this.article.id}
          pageTitleType="type-single-page"
          pageTagType="type-single-page"
        />
      </Section>

      <Section className="Section--auto-height Section--black">
        <div className="Section__container">
          <div className="max-width-760">
            <div className="Paragraph mb-50px mt-185px">
              <h4 className="type-h4 mb-30px first-letter-big letter-spacing-normal">
                Pointing into the forest, Deli Saavedra signals to his colleague Serban Ion, who shares his compact
                fiberglass rowing boat. Expertly, the second man thrusts both oars straight and hard into the water to
                bring their craft to a halt. They are deep in the flooded forest and the trees that tower above them are
                blocking out the morning sun.
              </h4>
              <div className="Paragraph__content">
                “This is the sort of thing we have been looking for,” he says, cocking his head towards a large pile of
                wood on the bank. You could be forgiven for thinking it was an abandoned bonfire, but human activity in
                this wilderness ceased an hour or so downstream.
                <br/>
                <br/>
                Both men work for Rewilding Europe and they are searching for evidence of beavers in the region.
                Saavedra is the area coordinator for Romania, while Ion leads the team in the Danube Delta.
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="Section--black Section--auto-height pb-80px">

        <div className="text-center">
          <LazyImage src={asset('assets/img/img8.jpg')} className="img-fluid mt-50px"/>
        </div>

        <div className="Section__container">
          <div className="max-width-760">
            <div className="Paragraph mb-50px mt-50px">
              <div className="Paragraph__content">
                They are excited by rumors the Eurasian beaver, which became extinct in this area more than 200 years
                ago, has returned to the delta. More exciting, still, is the fact the beavers have not been reintroduced
                by humans but moved here of their own accord, thanks to the efforts of their organization.
                <br/>
                <br/>
                Rewilding is a term that was coined by conservation scientists in the US in the 1990s, who argued large
                predators are instrumental to ecosystems and that these animals require connectivity with many other
                species and vast areas of protected wilderness.
                <br/>
                <br/>
                The concept has become accepted across the world, with scientists and activists aligning their thinking
                that all species have intrinsic value and the planet should not be viewed as purely a human resource.
                Moreover, governments and organizations across the world are putting the theory into practice.
              </div>
            </div>

            <div className="Paragraph mt-30px d-flex flex-sm-direction-column">

              <div className="Quote Quote--max-width-530 flex-order-2 flex-order-lg-1">
                <span className="quote-open-type-2 primary">“</span>
                <h2 className="type-h2 type-alert primary">
                  In a normal ecosystem, you have a species above the jackal and that species is the wolf. Nobody likes
                  the wolf, but the wolf will be controlling the jackals“
                </h2>
                <div className="quote-author quote-author--type-2 primary mt-10px">
                  Deli Saavedra
                </div>
                <div className="quote-author-position white mt-10px">
                  Rewilding Europe
                </div>
              </div>

              <div className="Paragraph__content Paragraph--v2 Paragraph--moved-to-left flex-order-1 flex-order-lg-2">
                Rewilding Europe has chosen the delta as a showcase for its work. Despite being located between three
                countries with very different governments and various communities, Saavedra believes they can create a
                complete ecosystem that can be resistant to climate change.
                <br/>
                <br/>
                Saavedra also passionately backs the long-term nature of rewilding to drive recovery for the people who
                live in this very remote part of Europe. “These areas are already empty … they can be used for a new
                economy and if we don’t do rewilding, there are other people thinking about other uses for this empty
                land – mining, fracking, whatever – so we have to avoid this.”
                <br/>
                <br/>
                <div className="d-desktop-block d-mobile-none">
                  Rewilding is not without its problems, however, some projects such as the return of Jackals have
                  alarmed
                  locals. But Saavedra argues: “In a normal ecosystem, you have a species above the jackal and that
                  species is the wolf. Nobody likes the wolf, but the wolf will be controlling the jackals.”
                </div>
              </div>
            </div>
            <div className="Paragraph">
              <div className="Paragraph__content Paragraph--v2">
                <div className="d-mobile-block d-desktop-none">
                  Rewilding is not without its problems, however, some projects such as the return of Jackals have
                  alarmed
                  locals. But Saavedra argues: “In a normal ecosystem, you have a species above the jackal and that
                  species is the wolf. Nobody likes the wolf, but the wolf will be controlling the jackals.”
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        parallax={{
          width: 1440,
          height: 800,
        }}
        className="Section--background-img Section--height-480"
        backgroundImg={asset('assets/img/img9.jpg')}
      >
        <div className="Section__container">
          <div className="Section__background-img-flex">
            <div className="small-title-type2 primary mb-30px">Chapter 2</div>
            <h1 className="type-h1 big-title-type-2">BEATING EXTINCTION</h1>
          </div>
        </div>
      </Section>

      <Section className="Section--auto-height">
        <div className="Image mt-80px">
          <Video
            showMuteButton={false}
            showPlayButton={true}
            autoPlay={false}
            poster={asset('assets/img/player_poster_11.jpg')}
            src={this.article.videos[0]}
            className="Video--max-width-1257 Video--cursor-pointer"
          />
        </div>
        <div className="Section__container">
          <div className="max-width-760 pb-40px">
            <h4 className="type-h4 mt-50px">
              To take rewilding to the next stage, conservationists are trying to address failing ecosystems by
              reintroducing larger mammals similar to those species lost locally decades or centuries ago through human
              activity.
            </h4>

            <div className="Paragraph mt-30px">
              <div className="Paragraph__content Paragraph--v2">
                While large beasts such as the aurochs depicted in ancient European cave paintings no longer exist,
                conservationists have turned to scientists to get the next best thing. Ecologist Ronald Goderie has
                taken domestic cattle and recreated a wild cow similar to the aurochs through what he calls “back
                breeding.”
                <br/>
                <br/>
                Working with geneticists, his team took breeds of cattle from Spain, Portugal and the Balkans with
                aurochs genes and bred them to create a species with similar characteristics, called the tauros. The
                program began in 2008 and the result is a large grazer that is self-sufficient and can fend off attacks
                from big predators such as wolves.
                <br/>
                <br/>
                Tauros numbers are small so far, but if you take a boat along one of the narrow creeks that wind through
                the southern part of the delta, you can spot their distinctive long, upturned horns and dark coats
                calmly grazing on the grass amid sand reddened by salt from the Black Sea.

              </div>
            </div>
          </div>
        </div>
        <div className="text-center d-inline-block">
          <LazyImage src={asset('assets/img/img10.jpg')} className="img-fluid mw-sm-50 sm-float-left"/>
          <LazyImage src={asset('assets/img/img11.jpg')} className="img-fluid mw-sm-50 sm-float-left"/>
        </div>
        <div className="Section__container">
          <div className="max-width-760 mb-80px">
            <div className="Paragraph mt-80px">
              <div className="Paragraph__content Paragraph--v2">
                A similar approach has been taken to the reintroduction of ancient breeds of horse, such as the Konik
                and the Hutsel but not without controversy.
                <br/>
                <br/>
                In the settlement of Letea a procession of safari trucks laden with tourists bumps along sandy tracks
                past herds of black and bay horses, which are, strictly speaking, feral rather than wild.
                <br/>
                <br/>
                They have lived here for hundreds of years but their numbers bloomed after the closure of communist-era
                collective farms and a fierce debate has raged about the need to cull or remove some to prevent
                overgrazing.
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="Section--auto-height">
        <div className="max-width-760 mt-80px mb-80px">
          <Carousel imagesData={[
            {
              imgUrl: asset('assets/img/07-Eurasian Beaver.jpg'),
              imgTitle: 'image01',
              content: <CarouselContent {...config.carouselContent.rewilding[0]}/>,
            },
            {
              imgUrl: asset('assets/img/06-Eagle owl.JPG'),
              imgTitle: 'image02',
              content: <CarouselContent {...config.carouselContent.rewilding[1]}/>,
            },
            {
              imgUrl: asset('assets/img/04-Grey-cattle.jpg'),
              imgTitle: 'image03',
              content: <CarouselContent {...config.carouselContent.rewilding[2]}/>,
            },
            {
              imgUrl: asset('assets/img/05-Hutsel horses.jpg'),
              imgTitle: 'image04',
              content: <CarouselContent {...config.carouselContent.rewilding[3]}/>,
            },
            {
              imgUrl: asset('assets/img/03-Konik-horses.jpg'),
              imgTitle: 'image05',
              content: <CarouselContent {...config.carouselContent.rewilding[4]}/>,
            },
            {
              imgUrl: asset('assets/img/02-Water-buffalo.jpg'),
              imgTitle: 'image06',
              content: <CarouselContent {...config.carouselContent.rewilding[5]}/>,
            },
            {
              imgUrl: asset('assets/img/01-Tauros.jpg'),
              imgTitle: 'image07',
              content: <CarouselContent {...config.carouselContent.rewilding[6]}/>,
            },
          ]}/>
        </div>
      </Section>

      <Section
        parallax={{
          width: 1440,
          height: 800,
        }}
        className="Section--background-img Section--height-480"
        backgroundImg={asset('assets/img/img12.jpg')}
      >
        <div className="Section__container">
          <div className="Section__background-img-flex">
            <div className="small-title-type2 primary mb-30px">Chapter 3</div>
            <h1 className="type-h1 big-title-type-2">THE BEAVERS ARE BACK</h1>
          </div>
        </div>
      </Section>

      <Section className="Section--black Section--auto-height pb-110px">
        <div className="Section__container">

          <div className="max-width-760 mt-80px">
            <h4 className="type-h4">
              Beavers were abundant across Europe until the 19th century, when they were hunted to extinction in Romania
              and near-extinction across the rest of the continent.
            </h4>
          </div>

          <div className="max-width-760">
            <div className="Paragraph Paragraph--mw-100 mb-50px mt-30px">
              <div className="Paragraph__content">
                Their absence was a blow to the ecosystem as other animals thrive as a result of
                their damming. In 1998, beavers were successfully reintroduced along the Olt River in
                Romania and from there, they slowly made their way to other rivers in the country’s
                Covasna county.
                <br/>
                <br/>
                In 2014, the animals were confirmed to have reached the Danube Delta. The number
                of beavers is believed to be rising as conservationists dismantle dams and flood
                forests in the area. This creates the perfect conditions for more beavers to arrive and
                settle in the delta. There are no official figures for beaver numbers since 2014, so the
                Rewilding Europe team must uncover evidence for themselves.
                <br/>
                <br/>
                Saavedra and Ion set out on a journey to a remote part of the delta to hunt for clues about the beavers’
                return and to find out how successful they have been on their return to the area.
              </div>
            </div>
          </div>
        </div>
        <div className="Image mt-50px">
          <Video
            showMuteButton={false}
            showPlayButton={true}
            autoPlay={false}
            poster={asset('assets/img/player_poster_33.jpg')}
            src={this.article.videos[1]}
            className="Video--max-width-1257 Video--cursor-pointer"
          />
        </div>
      </Section>

      <Section
        parallax={{
          width: 1440,
          height: 800,
        }}
        className="Section--background-img Section--height-480"
        backgroundImg={asset('assets/img/img13.jpg')}
      >
        <div className="Section__container">
          <div className="Section__background-img-flex">
            <div className="small-title-type2 primary mb-30px">Chapter 4</div>
            <h1 className="type-h1 big-title-type-2">THE WETLANDS</h1>
          </div>
        </div>
      </Section>

      <Section className="Section--auto-height pb-80px">

        <div className="Section__container">
          <div className="max-width-760">
            <div className="Paragraph mt-80px">
              <h4 className="type-h4 mb-30px">
                One of the most common sights in the delta is the small boats crammed with tourists in orange life
                jackets threading the narrow channels between walls of reeds or navigating around sheets of lilypads
                that dot the sprawling lakes.
              </h4>
              <h4 className="type-h4">The draw of the delta’s wetlands is obvious.</h4>
              <div className="Paragraph__content Paragraph--v2 mt-50px">
                The World Wide Fund for Nature (WWF) estimates that more than 80 percent of the region’s wetlands and
                floodplains have been destroyed since the beginning of the 20th century, but the delta is one of the
                most underpopulated areas of Europe – untouched by industrialization, it remains relatively wild and
                provides an unprecedented opportunity for restoration and rewilding.
              </div>
            </div>

            <div className="Paragraph mt-30px">
              <div className="Stats">
                <div className="Stats__number">80%</div>
                <div className="Stats__text">
                  of the region’s wetlands and floodplains have been destroyed since the 20th century
                </div>
              </div>
              <div className="Paragraph__content Paragraph--v2 Paragraph--moved-to-right">
                The delta offers a spectrum of biodiverse habitats including marshes and submerged riverine forests,
                which are home to the largest number of fish species in the continent, according to Rewilding Europe.
                Prodigious amounts of frogs dot the lilypads, while snakes make S-shaped creases in the flat surface of
                the water.
                <br/>
                <br/>
                The camera-toting tourists witness the biggest reed bed in the world, which attracts the largest colony
                of pelicans outside Africa – 2,500
              </div>
            </div>

            <div className="Paragraph mb-50px">
              <div className="Paragraph__content Paragraph--v2">
                breeding pairs arriving every spring. They can be seen clustering in brilliant white clouds before
                lumbering into the air to flap low over the reeds.
                <br/>
                <br/>
                Moreover, the area is a key wintering ground for masses of migrating birds, including half a million
                wild geese, and home to 300 different species.
                <br/>
                <br/>
                On a typical morning, brilliant great white egrets tower over the dark silhouettes of cormorants,
                silver-grey herons stand motionless in the shallows patiently awaiting their prey and glamorous grebe
                dive repeatedly for fish offshore, while the ominous shadow of a hunting marsh harrier glides overhead.
              </div>
            </div>
          </div>

        </div>
        <div className="text-center mt-50px">
          <LazyImage src={asset('assets/img/frog.jpg')} className="img-fluid"/>
        </div>
      </Section>

      <Section
        parallax={{
          width: 1440,
          height: 800,
        }}
        className="Section--background-img Section--height-480"
        backgroundImg={asset('assets/img/img14.jpg')}
      >
        <div className="Section__container">
          <div className="Section__background-img-flex">
            <div className="small-title-type2 primary mb-30px">Chapter 5</div>
            <h1 className="type-h1 big-title-type-2">REWILDING THE DELTA</h1>
          </div>
        </div>
      </Section>

      <Section className="Section--blue Section--auto-height pb-80px">

        <div className="Section__container">
          <div className="max-width-760">
            <div className="Paragraph mt-80px">
              <h4 className="type-h4 mb-30px">
                Rewilding Europe and several other organizations are giving nature a helping hand. Many wildlife species
                are now protected and the active management of wildlife populations has been suspended in several areas.
              </h4>
            </div>

            <div className="Paragraph mt-30px">
              <div className="Stats">
                <div className="Stats__number">15,000</div>
                <div className="Stats__text white">
                  Wetland equivalent in size to 15,000 football pitches is being restored each year
                </div>
              </div>
              <div className="Paragraph__content Paragraph--v2 Paragraph--moved-to-right">
                The Rewilding Danube Delta team in Romania and Ukraine is working on a five-year cross-border project to
                upscale rewilding in the region. This involves restoring wetland equivalent in size to 15,000 football
                pitches a year, using natural processes such as flooding and grazing.
                <br/>
                <br/>
                Although rewilding across the world is still in its infancy, these ambitious
              </div>
            </div>

            <div className="Paragraph">
              <div className="Paragraph__content Paragraph--v2">
                projects in the Danube Delta have gone a long way to restoring its vast, diverse habitat. And, as the
                return of the beaver demonstrates, soon the conservationists will be able to step back and allow nature
                to manage itself.
              </div>
            </div>
          </div>

        </div>
      </Section>

      <Section show={true} className="Footer__section">
        <Footer/>
      </Section>
    </Screen>
  );
}
