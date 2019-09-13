import React from "react";
import BaseScreen from "./BaseScreen";
import Screen from "../components/Screen";
import {AppContext} from "../context/AppContext";
import Section from "../components/Section";
import Hero from "../components/Hero";
import {asset} from "../core/utils";
import Footer from "../components/Footer";
import Video from "../components/Video";
import Carousel from "../components/Carousel";

@AppContext
export default class MicroPlasticScreen extends BaseScreen {

  render = () => (
    <Screen name="HydroPower">
      <Section>
        <Hero
          parallax
          parallaxHeaderId="microplastics"
          tag="Microplastics"
          title="Small thing, big problem"
          pageTitleType="type-single-page"
          pageTagType="type-single-page"
        />
      </Section>

      <Section className="Section--auto-height Section--black">
        <div className="Section__container">
          <div className="max-width-760">
            <div className="Paragraph mb-50px mt-185px">
              <h4 className="type-h4 mb-30px first-letter-big letter-spacing-normal">
                As it winds thousands of kilometers through Europe, the Danube supplies freight, irrigation and energy
                to
                the millions who live along its banks. But it also carries away vast
                quantities of their trash. Everywhere, the river’s flow is obstructed – whether by a tree root, on a
                beach or at a bend – signs of this rubbish can be seen in the form of plastic bottles, bags and
                wrappers.
              </h4>
              <div className="Paragraph__content">
                But Gabor Bordos and his colleagues at the Wessling Knowledge Center in Budapest aren’t so concerned
                about the problem that every river user can clearly see. Their focus is on an almost invisible threat
                that is slowly choking the river and the life that lives in it – microplastics.
                <br/>
                <br/>
                By their nature, microplastics are challenging to monitor. Their size means they can travel to almost
                anywhere on Earth – from Arctic ice sheets, to ocean trenches and deep into the digestive systems of
                fish, animals and humans.
                <br/>
                <br/>
                Indeed, the World Health Orgaization (WHO) has called for a “further assessment of microplastics in the
                environment.” With Dr Maria Neira, director of public health and the environment at WHO, explaining: “We
                urgently need to know more about the health impact of microplastics because they are everywhere.”
              </div>
            </div>
            <h4 className="type-h4 text-center mb-30px">Microplastics are pieces of plastic below 5mm</h4>
          </div>
          <div className="max-width-1100 mb-30px">
            <div className="CirclesGrid">
              <div className="CirclesGrid__element">
                <div className="CirclesGrid__img">
                  <img src={asset('assets/img/circle_1.png')}/>
                </div>
                <div className="CirclesGrid__title">
                  Fragments
                </div>
                <div className="CirclesGrid__sub_title">
                  Small pieces of a larger plastic object.
                </div>
              </div>
              <div className="CirclesGrid__element">
                <div className="CirclesGrid__img">
                  <img src={asset('assets/img/circle_2.png')}/>
                </div>
                <div className="CirclesGrid__title">
                  Fibres
                </div>
                <div className="CirclesGrid__sub_title">
                  The most common type of microplastic. Plastic strands from clothing.
                </div>
              </div>
              <div className="CirclesGrid__element">
                <div className="CirclesGrid__img">
                  <img src={asset('assets/img/circle_3.png')}/>
                </div>
                <div className="CirclesGrid__title">
                  Foam
                </div>
                <div className="CirclesGrid__sub_title">
                  Pieces of food containers and coffee cups.
                </div>
              </div>
              <div className="CirclesGrid__element">
                <div className="CirclesGrid__img">
                  <img src={asset('assets/img/circle_4.png')}/>
                </div>
                <div className="CirclesGrid__title">
                  Nurdles
                </div>
                <div className="CirclesGrid__sub_title">
                  Plastic pellets usually used in maufacturing.
                </div>
              </div>
              <div className="CirclesGrid__element">
                <div className="CirclesGrid__img">
                  <img src={asset('assets/img/circle_5.png')}/>
                </div>
                <div className="CirclesGrid__title">
                  Microbeads
                </div>
                <div className="CirclesGrid__sub_title">
                  Beads used in soaps and cosmetics. Look for ‘poly’ on the label.
                </div>
              </div>
            </div>
          </div>
          <div className="max-width-760">
            <div className="Paragraph mb-50px">
              <div className="Paragraph__content">
                Bordos and his team are ahead of the curve: “We chose to survey microplastics in the Danube due to the
                absence of proper data on this matter. The Danube is a big and vital river and we thought it was
                important to share the results with the wider public as well,” he says, surrounded by the cabinets of
                testing equipment that cocoon his state-of-the-art workplace.
                <br/>
                <br/>
                Dip a beaker into the Danube around Budapest and you’ll find a murky greenish liquid that clears a
                little as sediment settles to the bottom. Some of it is soil, algae and plant matter, but mingled almost
                inseparably are various sizes of plastic, some as tiny as 60 micrometers.
                <br/>
                <br/>
                Bordos’s job is to separate the different layers that make up Danube water and to analyse the results to
                create a pollution map of the river.
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="Section--black-and-white Section--auto-height">
        <div className="Image mt-50px">
          <Video showMuteButton={false} showPlayButton={true} autoPlay={false} poster={`assets/img/player_poster_1.png`}
                 src="assets/vid/landing-screen-intro.mp4"
                 className="Video--max-width-1257 Video--cursor-pointer"
          />
        </div>
      </Section>

      <Section className="Section--auto-height">
        <div className="Section__container ">
          <div className="small-title text-center mt-20px mb-50px">
            Gabor Bordos of Wessling explains what sorts of microplastics were found.
          </div>
          <div className="max-width-1257 Section--flex px-50px px-mobile-0">

            <div className="Section__column Section__column--desktop-65">
              <div className="Section--width-550px float-right pr-15px">
                <div className="Paragraph mb-40px">
                  <h4 className="type-h4">
                    Results from previous years suggest that within Hungary there are about 50 microplastic particles
                    per cubic meter in the river. Perhaps unsurprisingly, concentrations are higher downstream from
                    Budapest – suggesting cities are a major contributor to the invisible poisoning of the waterway.
                  </h4>
                </div>
                <div className="Paragraph mb-40px">
                  <div className="Paragraph__content letter-spacing-normal">
                    “Although the investigations did not expand to identify sources, the increased concentration in the
                    stretch below Budapest probably can be linked to high population density characteristics of large
                    cities, since both surface runoff and sewage treatment plants can be major sources of
                    microplastics,” Bordos observes.
                  </div>
                </div>
              </div>
            </div>

            <div className="Section__column Section__column--desktop-35 text-right">
              <img src={`assets/img/microplastic_graph.png`}
                   className="Image__element float-right mb-30px"/>
            </div>

          </div>

          <div className="max-width-970">
            <span className="quote-open-type-2 primary">“</span>
            <h2 className="type-h2 type-quote primary">
              Surface runoff and sewage treatment plants can be major sources of microplastics”
            </h2>
            <div className="quote-author primary mt-30px">
              Gabor Bordos
            </div>
            <div className="quote-author-position mt-10px">
              Wessling Knowledge Center, Budapest
            </div>
          </div>
        </div>
      </Section>

      <Section className="Section--background-img Section--height-480 mt-80px"
               backgroundImg={`assets/img/chapter2.png`}>
        <div className="Section__container">
          <div className="Section__background-img-flex">
            <div className="small-title-type2 primary mb-30px">Chapter 2</div>
            <h1 className="type-h1 big-title">But what are<br/>microplastics?</h1>
          </div>
        </div>
      </Section>

      <Section className="Section--black Section--auto-height pb-160px">
        <div className="Section__container mb-80px">
          <div className="max-width-760 mb-80px">
            <h4 className="type-h4 mt-80px">
              It’s a term used to describe any piece of plastic that is less than 5mm wide and they can come from a
              variety of sources.
            </h4>
            <div className="Paragraph mt-30px">
              <div className="Paragraph__content Paragraph--v2">
                They can also be small bits of plastic waste from factories washed off products after moulding or
                shaping. But they also include microbeads, which are found in cosmetic products such as shower gel or
                some types of toothpaste.
              </div>
            </div>
          </div>
        </div>
        <div className="Image mt-80px">
          <Video showMuteButton={false} showPlayButton={true} autoPlay={false} poster={`assets/img/player_img2.png`}
                 src="assets/vid/landing-screen-intro.mp4"
                 className="Video--max-width-942 Video--cursor-pointer"
          />
          <div className="small-title text-center mt-20px white">
            Dilyana Mihaylova, Marine Plastics Project manager Fauna and Flora International –<br/>show and tell on
            microfibres
          </div>
        </div>

        <div className="Section__container mt-80px">

          <div className="PlasticSource">
            <video autoPlay loop className="PlasticSource__video">
              <source src={asset('assets/vid/01-WashingMachine_V03.mp4')} type="video/mp4"/>
              Your browser does not support HTML5 video.
            </video>
            <div className="PlasticSource__text">
              Domestic washing machines contribute significantly to the amount of microplastics in the environment.
              Hundreds of thousands of microscopic fibers can be shed from a single garment wash.
            </div>
          </div>

          <div className="PlasticSource PlasticSource--margin-left-160">
            <video autoPlay loop className="PlasticSource__video">
              <source src={asset('assets/vid/02-Pipe_V03.mp4')} type="video/mp4"/>
              Your browser does not support HTML5 video.
            </video>
            <div className="PlasticSource__text">
              The fibers pass through the sewage system along with other waste material to reach filtration plans for
              treatment.
            </div>
          </div>

          <div className="PlasticSource PlasticSource--margin-right-160 PlasticSource--align-right">
            <div className="PlasticSource__text">
              Despite the presence of an elaborate filtration process that includes physical, chemical and biological
              treatment, microfibers often slip through the net.
            </div>
            <video autoPlay loop className="PlasticSource__video">
              <source src={asset('assets/vid/03-filter_V03.mp4')} type="video/mp4"/>
              Your browser does not support HTML5 video.
            </video>
          </div>

          <div className="PlasticSource PlasticSource--align-right">
            <div className="PlasticSource__text">
              Having successfully defied wastewater filtration, the tiny particles are flushed into rivers and allowed
              to flow downstream into the ocean.
            </div>
            <video autoPlay loop className="PlasticSource__video">
              <source src={asset('assets/vid/04-RiverPipe_V03.mp4')} type="video/mp4"/>
              Your browser does not support HTML5 video.
            </video>
          </div>

          <div className="PlasticSource PlasticSource--margin-right-80 PlasticSource--align-right">
            <div className="PlasticSource__text">
              Microplastics pose a grave danger to aquatic habitats as they are often ingested by marine animals, both
              in river ecosystems and in oceans.
            </div>
            <video autoPlay loop className="PlasticSource__video">
              <source src={asset('assets/vid/05-fish_V03.mp4')} type="video/mp4"/>
              Your browser does not support HTML5 video.
            </video>
          </div>

          <div className="PlasticSource PlasticSource--margin-left-160 PlasticSource--align-left">
            <video autoPlay loop className="PlasticSource__video">
              <source src={asset('assets/vid/06-ChoppingBoard_V03.mp4')} type="video/mp4"/>
              Your browser does not support HTML5 video.
            </video>
            <div className="PlasticSource__text">
              Having made its way into the food chain through fish and other aquatic animals, the tiny plastic fibers
              ultimately end up on our dinner plates.
            </div>
          </div>

        </div>
      </Section>

      <Section className="Section--background-img Section--height-480" backgroundImg={`assets/img/chapter2.png`}>
        <div className="Section__container">
          <div className="Section__background-img-flex">
            <div className="small-title-type2 primary mb-30px">Chapter 3</div>
            <h1 className="type-h1 big-title-type-2">What’s the problem with microplastics?</h1>
          </div>
        </div>
      </Section>

      <Section className="Section--auto-height">

        <div className="Section__container">
          <div className="max-width-760">
            <div className="Paragraph mt-80px">
              <h4 className="type-h4 mb-30px">If these tiny pieces are small enough for fish, or people, to
                eat without noticing, are they really a problem?</h4>
              <h4 className="type-h4 mb-30px">The answer is yes.</h4>
              <div className="Paragraph__content Paragraph--v2 mt-80px">
                There are a growing number of scientific studies that agree on the issue.
                <br/>
                <br/>
                Research conducted by Stephanie Wright, a fellow at King’s College London’s Centre for Environment and
                Health, suggests that worms’ energy levels dropped by 50 percent and their feeding by 25 percent when
                exposed to microplastics. Meanwhile, research from France suggests a lower reproductive rate in oysters
                exposed to polystyrene microparticles.
              </div>
            </div>

            <div className="Paragraph mt-30px">
              <div className="Stats">
                <div className="Stats__number">11,000</div>
                <div className="Stats__text">Number of microplastics the</div>
                <div className="Stats__text">average European shellfish</div>
                <div className="Stats__text">consumer will ingest each year</div>
              </div>
              <div className="Paragraph__content Paragraph--v2 Paragraph--moved-to-right">
                Wright, in a submission to the British House of Commons inquiry into the issue, says these findings
                reflect the energy spent trying to digest indigestible plastic. And if you think it’s unlikely you have
                eaten microplastics, think again. According to Wright: “It has been estimated that the average European
                shellfish consumer will ingest up to 11,000 microplastics per year.”
                <br/>
                <br/>
                And it is an ongoing problem – even if all production were ended tomorrow. A significant proportion of
                microplastics in rivers and the oceans enter via
              </div>
            </div>

            <div className="Paragraph">
              <div className="Paragraph__content Paragraph--v2">
                water-treatment plants and sewage works. Even if they don’t go straight back into the water system, they
                can end up being used by farmers to irrigate or fertilize their land. They then get eaten directly by
                insects and animals, or washed by rain into rivers and back into the food chain there. Once they are
                created, they are around for hundreds of years, travelling an ecologically unappetizing circle of life.
              </div>
            </div>
          </div>
        </div>

        <div className="max-width-760 mt-80px">
          <Carousel/>
        </div>

        <div className="Section__container">
          <div className="max-width-760 mb-80px">
            <div className="Paragraph mt-80px">
              <div className="Paragraph__content Paragraph--v2">
                But there is still much to learn about the overall impact on the Danube and a full-scale survey of
                microplastics along the length of the river is under way. It is a multinational effort, with an aim to
              </div>
            </div>

            <div className="Paragraph mt-30px">

              <div className="Quote Quote--max-width-530">
                <span className="quote-open-type-2 primary">“</span>
                <h2 className="type-h2 type-alert primary">
                  It’s not as simple as<br className="br-desktop"/>
                  spotting a discarded <br className="br-desktop"/>
                  fast food wrapper.”
                </h2>
                <div className="quote-author quote-author--type-2 black mt-10px">
                  Philipp Hohenblum
                </div>
                <div className="quote-author-position black mt-10px">
                  Professor
                </div>
              </div>

              <div className="Paragraph__content Paragraph--v2 Paragraph--moved-to-left">
                define the problem. It is hoped this will then inform the politicians taking decisions needed to
                safeguard the river’s waters, which cut across more countries than any other in the world. Philipp
                Hohenblum, a microplastics expert at the Environment Agency Austria and 35 of his colleagues have spent
                every day for the past month collecting, testing and analyzing the Danube’s water. As he puts it: “It’s
                not as simple as spotting a discarded fast-food wrapper.”
                <br/>
                <br/>
                “Globally, around five to 13 million tons of macro and microplastics enter the oceans annually, of which
                1.5
              </div>
            </div>

            <div className="Paragraph">
              <div className="Paragraph__content Paragraph--v2">
                million ton are microplastics. In the European Union (EU) some 75,000 to 300,000 tons of microplastics
                are emitted in the environment every year. Almost all of the microplastics come from land-based sources
                by runoff or waste-water treatment, which end up in rivers and ultimately reach the oceans,” he says.
              </div>
            </div>

            <div className="Stats Stats--v2 mt-50px">
              <div className="Stats__number">75,000 -</div>
              <div className="Stats__number Stats--big">300,000<span className="Stats--small">tons</span></div>
            </div>
            <h4 className="type-h4 mt-30px mb-30px">of microplastics are emitted in the EU environment every
              year.</h4>
            <div className="Paragraph">
              <div className="Paragraph__content Paragraph--v2">
                So, some of the world’s brightest minds have been focusing on tackling the issue and pressure is growing
                for governments to act. But on a more personal level, what can be done to tackle the problem? There’s an
                obvious answer – buy fewer plastic products and avoid shower gels and washing detergents that have
                microbeads in them.
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="Section--white-and-blue Section--auto-height mt-50px">
        <div className="Image">
          <Video showMuteButton={false} showPlayButton={true} autoPlay={false} poster={`assets/img/player_poster_2.png`}
                 src="assets/vid/landing-screen-intro.mp4"
                 className="Video--max-width-1257 Video--cursor-pointer"
          />
          <div className="small-title text-center white mt-20px">
            Here’s Dilyana’s guide to what you can do
          </div>
        </div>
      </Section>

      <Section className="Section--blue Section--auto-height">
        <div className="Section__container mt-80px">
          <div className="max-width-760">
            <div className="Paragraph mb-50px">
              <div className="Paragraph__content">
                The challenge with the Danube is, there are different countries with different governments that have
                different priorities – which all need to work together to tackle the problem. Microbeads, for instance,
                are banned in cosmetics in the UK, France and Italy, but they are not yet outlawed across the whole EU
                and other countries through which the Danube flows.
                <br/>
                <br/>
                What is clear, is there is a huge amount of goodwill and multinational effort, as shown by the work of
                the International Commission for the Protection of the Danube River (ICPDR) and several regional
                environmental organizations, to identify and tackle what is the big problem caused by these very small
                things.
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section show={true}>
        <Footer/>
      </Section>
    </Screen>
  );
}
