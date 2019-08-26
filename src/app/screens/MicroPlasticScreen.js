import React from "react";
import BaseScreen from "./BaseScreen";
import Screen from "../components/Screen";
import {AppContext} from "../context/AppContext";
import Section from "../components/Section";
import Hero from "../components/Hero";
import {asset} from "../core/utils";
import Footer from "../components/Footer";
import Video from "../components/Video";

@AppContext
export default class MicroPlasticScreen extends BaseScreen {

  componentDidMount() {
    window.addEventListener("resize", () => {
      if (this.containerReference.width !== null) {
        this.handleSize(this.containerReference.width);
      }
    });
  }

  handleSize(image) {
    let elements = document.getElementsByClassName("Section__container");
    if (elements.length > 0) {
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.width = (image + "px");
      }
    }
  }

  render = () => (
    <Screen name="ArticleScreen">

      <Section>
        <Hero
          tag="MICROPLASTIC"
          title="Small thing, big problem"
          pageTitleType="type-single-page"
          background={asset("assets/img/microplastic_hero.png")}
        />
      </Section>
      <Section className="Section--auto-height">
        <div className="Section__container">
          <div className="max-width-760">
            <div className="Paragraph mb-50px mt-185px">
              <h4 className="type-h4 mb-30px first-letter-big">
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
            <h4 className="type-h4 text-center dark-blue">Microplastics are pieces of plastic below 5mm</h4>
          </div>
          <div className="max-width-1100">
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

        <div className="Image">
          <Video showMuteButton={false} showPlayButton={true} autoPlay={false} poster={`assets/img/player_poster_1.png`}
                 sources={[{src: asset('assets/vid/landing-screen-intro.mp4'), type: 'video/mp4'}]}
                 className="Video--max-width-1257 Video--cursor-pointer"
          />
        </div>

        <div className="Section__container mt-80px">
          <div className="max-width-1257 Section--flex px-50">

            <div className="Section__column Section__column--desktop-65">
              <div className="Section--width-550px float-right pr-15">
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
                   className="Image__element d-mobile-none float-right mb-30px"/>
            </div>

          </div>

          <div className="max-width-970">
            <span className="quote-open-type-2">“</span>
            <h2 className="type-h2 type-quote">
              Surface runoff and sewage treatment plants can be major sources of microplastics”
            </h2>
            <div className="quote-author mt-30px">
              Gabor Bordos
            </div>
            <div className="quote-author-position mt-10px">
              Wessling Knowledge Center, Budapest
            </div>
          </div>
        </div>
      </Section>

      <Section className="Section--background-img Section--height-480" backgroundImg={`assets/img/chapter2.png`}>
        <div className="Section__container">
          <div className="Section__background-img-flex">
            <div>Chapter 2</div>
            <h2 className="type-h2">But what are microplastics?</h2>
          </div>
        </div>
      </Section>

      <Section className="Section--dark-blue Section--auto-height">
        <div className="Section__container">
          <div className="max-width-760 mb-80px">
            <h4 className="type-h4 mt-80px">
              It’s a term used to describe any piece of plastic that is less than 5mm wide and they can come from a
              variety of sources.
            </h4>
            <div className="Paragraph mt-30px">
              <div className="Paragraph__content Paragraph--default-letter-spacing">
                They can also be small bits of plastic waste from factories washed off products after moulding or
                shaping. But they also include microbeads, which are found in cosmetic products such as shower gel or
                some types of toothpaste.
              </div>
            </div>
          </div>
        </div>
        <div className="Image">
          <Video showMuteButton={false} showPlayButton={true} autoPlay={false} poster={`assets/img/player_img2.png`}
                 sources={[{src: asset('assets/vid/landing-screen-intro.mp4'), type: 'video/mp4'}]}
                 className="Video--max-width-942 Video--cursor-pointer"
          />
        </div>

        <div className="Section__container mt-50px">

          <div className="PlasticSource">
            <div className="PlasticSource__image">
              <img src={asset('assets/img/plastic_source_1.png')}/>
            </div>
            <div className="PlasticSource__text">
              <div className="PlasticSource__decoration-line"></div>
              Another source is from clothing made from artificial fabrics. Recent estimates suggest hundreds of
              thousands of microscopic fibres can be shed from a single garment as it tumbles through a washing machine.
            </div>
          </div>

          <div className="PlasticSource PlasticSource--margin-left-160">
            <div className="PlasticSource__image">
              <img src={asset('assets/img/plastic_source_2.png')}/>
            </div>
            <div className="PlasticSource__text">
              <div className="PlasticSource__decoration-line"></div>
              The fibers pass through the sewage system along with other waste material to reach filtration plans for
              treatment.
            </div>
          </div>

          <div className="PlasticSource">
            <div className="PlasticSource__image">
              <img src={asset('assets/img/plastic_source_3.png')}/>
            </div>
            <div className="PlasticSource__text">
              <div className="PlasticSource__decoration-line"></div>
              Too small to be filtered out by the appliance or wastewater plants, they find their way into rivers and
              then oceans.
            </div>
          </div>

          <div className="PlasticSource PlasticSource--align-right">
            <div className="PlasticSource__text">
              <div className="PlasticSource__decoration-line PlasticSource--decoration-line-right"></div>
              Traditionally, this waste had been disregarded as insignificant because the inert material was not shown
              to be dangerous and posed no visible environmental impact.
            </div>
            <div className="PlasticSource__image">
              <img src={asset('assets/img/plastic_source_4.png')}/>
            </div>
          </div>

          <div className="PlasticSource PlasticSource--margin-right-80 PlasticSource--align-right">
            <div className="PlasticSource__text">
              <div className="PlasticSource__decoration-line PlasticSource--decoration-line-right"></div>
              But the days when microplastics could be ignored are long gone and surveys are now specifically looking at
              the risks these pollutants pose to marine life.
            </div>
            <div className="PlasticSource__image">
              <img src={asset('assets/img/plastic_source_5.png')}/>
            </div>
          </div>

          <div className="PlasticSource PlasticSource--margin-right-160 PlasticSource--align-right">
            <div className="PlasticSource__text">
              <div className="PlasticSource__decoration-line PlasticSource--decoration-line-right"></div>
              They often end up being consumed by fish and other marine animals, ultimately making their way through the
              food chain and ending up on our plates and in our drinking water.
            </div>
            <div className="PlasticSource__image">
              <img src={asset('assets/img/plastic_source_6.png')}/>
            </div>
          </div>

        </div>
      </Section>

      <Section className="Section--background-img Section--height-480" backgroundImg={`assets/img/chapter3.png`}>
        <div className="Section__container">
          <div className="Section__background-img-flex">
            <div>Chapter 3</div>
            <h2 className="type-h2">What’s the problem with microplastics?</h2>
          </div>
        </div>
      </Section>

      <Section>

      </Section>

      <Section className="Section--white-and-blue Section--auto-height">
        <div className="Image mt-80px">
          <Video showMuteButton={false} showPlayButton={true} autoPlay={false} poster={`assets/img/player_poster_2.png`}
                 sources={[{src: asset('assets/vid/landing-screen-intro.mp4'), type: 'video/mp4'}]}
                 className="Video--max-width-1257 Video--cursor-pointer"
          />
        </div>
        <div className="Section__container mt-80px">
          <div className="max-width-760">
            <div className="Paragraph mb-50px">
              <div className="Paragraph__content">
                The challenge with the Danube is, there are different countries with different governments that have different priorities – which all need to work together to tackle the problem. Microbeads, for instance, are banned in cosmetics in the UK, France and Italy, but they are not yet outlawed across the whole EU and other countries through which the Danube flows.
                <br/>
                <br/>
                What is clear, is there is a huge amount of goodwill and multinational effort, as shown by the work of the International Commission for the Protection of the Danube River (ICPDR) and several regional environmental organizations, to identify and tackle what is the big problem caused by these very small things.
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
