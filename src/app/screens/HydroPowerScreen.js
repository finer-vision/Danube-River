import React from "react";
import BaseScreen from "./BaseScreen";
import Screen from "../components/Screen";
import {AppContext} from "../context/AppContext";
import Section from "../components/Section";
import {asset} from "../core/utils";
import Video from "../components/Video";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import config from "../core/config";
import LazyImage from "../components/LazyImage";
import HydroMap from "../components/HydroMap";

const ARTICLE = config.articles.find(article => article.id === 'hydropower');

@AppContext
export default class MicroPlasticScreen extends BaseScreen {
  article = ARTICLE;

  render = () => (
    <Screen name="HydroPower">

      <Section show={true}>
        <Hero
          parallax
          tag="Hydropower"
          title="The Dam Danube"
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
                During the 1970s, Stanislav Porej was a senior engineer working to construct a series of enormous
                hydroelectric dams near the border between Romania and Serbia. At the
                same time, he was also raising a child: Deni.
              </h4>
              <div className="Paragraph__content">
                To this day, his concrete creations remain the biggest among the scores of barriers that control the
                river’s flow.
                <br/>
                <br/>
                His son, however, has risen to become head of environmental campaign group the World Wide Fund for
                Nature (WWF) in the Balkans and is working passionately to free the waters of the Danube from man-made
                controls.
                <br/>
                <br/>
                Meeting together above the mammoth Iron Gates I, the two men – who have dedicated their lives to the
                good of this eastern corner of Europe – recognize both the benefits and the harm that the centuries-long
                taming of the Danube has produced.
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="Section--black Section--auto-height pb-80px">

        <div className="Image mt-50px">
          <Video
            showMuteButton={false}
            showPlayButton={true}
            autoPlay={false}
            poster={asset('assets/img/player_poster_6.jpg')}
            src={this.article.videos[0]}
            className="Video--max-width-1257 Video--cursor-pointer"
          />
        </div>

        <div className="Section__container">
          <div className="max-width-760">
            <div className="Paragraph mb-50px mt-80px">
              <div className="Paragraph__content">
                In addition to supplying renewable carbon-free electricity to millions living along the river’s path,
                dams have increased the ability to navigate the Danube – allowing boats to carry freight in place of
                less efficient road transport. By regulating the ebbs and flows of the water, the dams have also
                inevitably saved lives by reducing flooding.
                <br/>
                <br/>
                All this comes at a price for the 2,800-kilometer-long river and its hundreds of tributaries.
              </div>
            </div>
          </div>
        </div>
        <div className="Image mt-30px">
          <Video
            showMuteButton={false}
            showPlayButton={true}
            autoPlay={false}
            poster={asset('assets/img/player_poster_7.jpg')}
            src={this.article.videos[1]}
            className="Video--max-width-942 Video--cursor-pointer"
          />
        </div>
      </Section>

      <Section
        parallax={{
          width: 1440,
          height: 800,
        }}
        className="Section--background-img Section--height-480"
        backgroundImg={asset('assets/img/img4.jpg')}
      >
        <div className="Section__container">
          <div className="Section__background-img-flex">
            <div className="small-title-type2 primary mb-30px">Chapter 2</div>
            <h1 className="type-h1 big-title-type-2">CROWDED</h1>
          </div>
        </div>
      </Section>

      <Section className="Section--auto-height">
        <div className="Section__container">
          <div className="max-width-760 pb-80px">
            <h4 className="type-h4 mt-50px">
              If you travel down the Danube from its source in the Black Forest you’ll hit a dam every 16 kilometers on
              average for the first 1,000 kilometers. They turn the kinetic energy of the water pouring off the Alps and
              the Central European Highlands into electricity, providing for 60 percent of Austria’s consumption in the
              region.
            </h4>

            <div className="Paragraph mt-30px">
              <div className="Stats d-mobile-none">
                <div className="Stats__number">16km</div>
                <div className="Stats__text">There is an average of one dam</div>
                <div className="Stats__text">every 16km along the first 1,000km of the Danube</div>
              </div>
              <div className="Paragraph__content Paragraph--v2 Paragraph--moved-to-right">
                After Slovakia’s capital Bratislava you enter the slower flowing Middle Danube where you’ll meet the
                Gabcikovo Dam and then, at the Romanian border with Serbia, the massive Iron Gates I and II, which
                generate 37 percent of Serbia’s power and 27 percent of Romania’s.
              </div>

              <div className="Stats d-desktop-none text-left mt-30px mb-0">
                <div className="Stats__number">16<span className="Stats--small-type-2">km</span></div>
                <div className="Stats__text">There is an average of one dam</div>
                <div className="Stats__text">every 16km along the Danube</div>
              </div>

            </div>
          </div>
        </div>

        <div className="max-width-1257 text-center">
          <HydroMap />
        </div>

        <div className="Section__container">

          <div className="max-width-760 mb-80px">
            <div className="Paragraph mt-80px">

              <div className="Paragraph__content Paragraph--v2">
                Those are the last two dams on the Danube proper before it winds across the Romanian and Bulgarian plain
                and diffuses into the delta, where it meets the Black Sea.
                <br/>
                <br/>
                All of this means the river is trammeled for hydropower along 30 percent of its entire length. As well
                as being dammed, it’s weired, redirected and channeled between concrete banks to such an extent that
                less than a fifth is classed as unregulated – not subject to human manipulation.
              </div>
            </div>

            <div className="Paragraph mt-30px">

              <div className="Quote Quote--max-width-530">
                <span className="quote-open-type-2 primary">“</span>
                <h2 className="type-h2 type-alert primary">
                  Very few stretches <br className="br-desktop"/>
                  can still be <br className="br-desktop"/>
                  characterized as <br className="br-desktop"/>
                  free-flowing”
                </h2>
                <div className="quote-author quote-author--type-2 primary mt-10px">
                  Philipp Hohenblum
                </div>
                <div className="quote-author-position black mt-10px">
                  International Commission for the Protection of the Danube River
                </div>
              </div>

              <div className="Paragraph__content Paragraph--v2 Paragraph--moved-to-left mt-30px">
                “Very few stretches can still be characterized as free-flowing,” is the bleak assessment of the
                International Commission for the Protection of the Danube River, the multi-country body set up by treaty
                to look after the waterway.
                <br/>
                <br/>
                Added to this, there are 700 more dams and weirs on the main tributaries of the Danube. Romania is home
                to 400 of them and state-owned energy company Hidroelectrica, which provides 30 percent of the country’s
                energy, has reiterated the importance of hydroelectric power. Indeed, it is fighting retrospective legal
                action to halt construction of a new dam in the Defileul Jiului national park, after campaigners
                convinced Romainian Courts to stop work on the project.
              </div>
            </div>
          </div>
        </div>
        <div className="Image mt-80px">
          <Video
            showMuteButton={false}
            showPlayButton={true}
            autoPlay={false}
            poster={asset('assets/img/player_poster_9.jpg')}
            src={this.article.videos[2]}
            className="Video--max-width-942 Video--cursor-pointer"
          />
        </div>
        <div className="Section__container">

          <div className="max-width-760 mb-80px">
            <div className="Paragraph mt-80px">
              <div className="Paragraph__content Paragraph--v2">
                An urgent concern for environmentalists is plans for thousands of new dams, many of them small-scale, on
                tributaries in the Danube Basin.
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
        className="Section--background-img Section--height-480 mt-80px"
        backgroundImg={asset('assets/img/4_2.jpg')}
      >
        <div className="Section__container">
          <div className="Section__background-img-flex">
            <div className="small-title-type2 primary mb-30px">Chapter 3</div>
            <h1 className="type-h1 big-title-type-2">DE-DAMMING</h1>
          </div>
        </div>
      </Section>

      <Section className="Section--black Section--auto-height pb-110px">
        <div className="Section__container">

          <div className="max-width-960 mt-80px">
            <div className="Paragraph Paragraph--mw-100 mb-50px mt-30px">
              <h4 className="type-h4 mb-30px">
                However, Ulrich Eichelmann, CEO of environmental campaign group Riverwatch, says stopping the
                construction
                of new dams is not enough:
              </h4>
              <div className="Paragraph__content">

                <div className="float-md-right mw-sm-100 mw-md-300 mb-50px mt-30px ml-20px">
                  <LazyImage src={asset('assets/img/Ulrich.jpg')} className="img-fluid"/>

                  <div className="small-title text-left mt-10px white">Ulrich Eichelmann, CEO of environmental campaign
                    group Riverwatch
                  </div>
                </div>
              </div>
              <div className="Paragraph__content">
                “Instead, we should remove a lot of old ones. That is a movement that comes from the US and is now also
                hitting France, Spain, Sweden, Finland. They are removing old weirs and old dams because you realize it
                puts stopping catastrophic climate change at the heart of its mission.”
                <br/>
                <br/>
                In November 2018, the Energy Community, which brings together EU and neighboring nations to produce
                common policies, issued a statement requiring small-scale hydroelectric projects to meet more stringent
                conditions.
                <br/>
                <br/>
                In 2001, a World Commission on Dams (WCD), set up by the World Bank and the UN, issued a set of
                principles to which members should adhere: they include public consultation and consent as well as
                ensuring a healthy flow to protect marine life.
                <br/>
                <br/>
                The EU requires any dam to meet those conditions before the owners can sell carbon credits based on the
                power generated.
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
        backgroundImg={asset('assets/img/4_3.jpg')}
      >
        <div className="Section__container">
          <div className="Section__background-img-flex">
            <div className="small-title-type2 primary mb-30px">Chapter 4</div>
            <h1 className="type-h1 big-title-type-2">AN UNCERTAIN FUTURE</h1>
          </div>
        </div>
      </Section>

      <Section className="Section--auto-height">
        <div className="Section__container">
          <div className="max-width-760 pb-40px">
            <h4 className="type-h4 mt-50px">
              The hydropower industry acknowledges dams can pose environmental, political and social challenges but
              insists harnessing the power of rivers remains important.
            </h4>

            <div className="Paragraph mt-30px mb-50px">
              <div className="Paragraph__content Paragraph--v2">
                “Hydropower is one of the cleanest forms of energy and plays a major role in meeting the rising demand
                for electricity today. We appreciate that every dam is a physical barrier and keeping the issue in mind,
                some of our projects have fish passes which ensure minimum disruption to marine life,” says Florian
                Seidl a spokesman for Verbund, one of Europe’s largest producers of hydropower.
                <br/>
                <br/>
                Pointing out a couple of barges anchored near the Freudenau power plant in Vienna, Seidl explains how
                gravel and sediment are collected upstream by the vessels and deposited back on the other side of the
                dam, allowing it to freely flow downstream. The movement of sediment serves to enrich the soil along
                riverbanks and deltas.
                <br/>
                <br/>
                Environmentalists, however, remain unconvinced of such measures and would rather see the dismantling of
                some barriers, the deregulation of certain stretches of the river and robust protection of the few
                remaining floodplains in the Danube basin.
              </div>
            </div>

            <div className="Stats Stats--v3">
              <div className="Stats__number">
                <span className="Stats--big">30%</span> <span className="Stats--small-type-2"> of the river</span>
              </div>
            </div>

            <div className="type-h4 mt-20px">
              is impounded for hydropower
            </div>
          </div>
        </div>
      </Section>

      <Section
        parallax={{
          width: 1440,
          height: 800,
        }}
        className="Section--background-img Section--height-480 mt-80px"
        backgroundImg={asset('assets/img/Hydropower-chapter4.jpg')}
      >
        <div className="Section__container">
          <div className="Section__background-img-flex">
            <div className="small-title-type2 primary mb-30px">Chapter 5</div>
            <h1 className="type-h1 big-title-type-2">POWER POLITICS</h1>
          </div>
        </div>
      </Section>

      <Section className="Section--auto-height">
        <div className="Section__container">
          <div className="max-width-760">
            <h4 className="type-h4 mt-50px">
              The Donau-Auen National Park is a case study for advocates of liberating the river’s flow. Saving it
              changed Austrian politics.
            </h4>

            <div className="Paragraph mt-30px">
              <div className="Paragraph__content Paragraph--v2">
                In 1984, the riparian forest was facing certain destruction as a result of the planned construction of
                the Hainburg power plant, just downstream from Vienna. As news of the project spread, fierce nationwide
                protests led to the occupation of the wetlands by thousands of people.
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="Section--auto-height">
        <div className="Section__container">
          <div className="max-width-760 pb-40px">
            <div className="Paragraph mt-30px">
              <div className="Paragraph__content Paragraph--v2">
                Repeated attempts by the police and military to evict protesters succeeded only in provoking clashes and
                the authorities agreed to suspend construction while the courts examined the issue. Following a series
                of judicial reviews, the hydropower project was eventually scrapped and a proposal to open a national
                park approved in 1996.
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <LazyImage src={asset('assets/img/img7.jpg')} className="img-fluid"/>
        </div>
        <div className="Section__container">
          <div className="max-width-760 pb-40px">
            <div className="Paragraph mt-30px">
              <div className="Paragraph__content Paragraph--v2">
                Today, Donau-Auen, covering 93 square kilometers in Lower Austria, is one of the last major intact
                wetlands in Middle Europe and home to some unique flora and fauna. Blanketed with tranquil forests and
                sweeping meadows, the park acts as the lungs of Vienna and Bratislava, attracting a steady stream of
                city-dwellers to walk, cycle and picnic.
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="Section--white-and-blue Section--auto-height">
        <div className="Image">
          <Video
            showMuteButton={false}
            showPlayButton={true}
            autoPlay={false}
            poster={asset('assets/img/player_poster_10.jpg')}
            src={this.article.videos[3]}
            className="Video--max-width-1257 Video--cursor-pointer"
          />
        </div>

        <div className="Section__container">
          <div className="max-width-760 pb-40px">
            <div className="Paragraph mt-30px">
              <div className="Paragraph__content Paragraph--v2">
                Three decades later, the debate is far from over.
                <br/>
                <br/>
                But when WWF campaigner Deni Porej and his dam-building father reflect on the costs and benefits of
                harnessing the river, it’s clear the urge to simply tame the Danube through concrete walls has been
                replaced by a desire to find solutions less detrimental to nature.
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
