import React from "react";
import BaseScreen from "./BaseScreen";
import Screen from "../components/Screen";
import {AppContext} from "../context/AppContext";
import Section from "../components/Section";
import {asset} from "../core/utils";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import config from "../core/config";
import Video from "../components/Video";

const ARTICLE = config.articles.find(article => article.id === 'sturgeon');

@AppContext
export default class AboutScreen extends BaseScreen {
  render = () => (
    <Screen name="About">
      <Section show={true}>
        <Hero
          parallax
          tag="THE RIVER"
          title="10 countries, 2,860KM"
          pageTitleType="type-single-page"
          pageTagType="type-single-page"
          video="https://video.cgtn.com/public/2019-09-12/public/video/02ea8b8b20a646feb9702f124127bc11/02ea8b8b20a646feb9702f124127bc11.m3u8"
          videoLoop
        />
      </Section>

      <Section className="Section--auto-height Section--black pb-40px">
        <div className="Section__container">
          <div className="max-width-760">
            <div className="Paragraph mb-50px mt-185px">
              <div className="Paragraph__content">
                Like all great rivers it has a charisma which evokes strong emotions, starting with jealousy over its
                origins.
                <br/>
                <br/>
                Two German towns long disputed its source, but officially it rises at an ornate well in Donaueschingen
                in the Black Forest of southern Germany.
              </div>
            </div>

            <div className="Paragraph mt-30px">
              <div className="Stats">
                <div className="Stats__number">2nd</div>
                <div className="Stats__text white">
                  Longest river and the world's most international
                </div>
              </div>
              <div className="Paragraph__content Paragraph--v2 Paragraph--moved-to-right">
                When it reaches the Black Sea coast 2,860 kilometers later it’s only 300 kilometers further south, so
                its overall direction is gently south of east.
                <br/>
                <br/>
                But from its source, it first races past the Alps in an arc northeast then southwards again.
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-50px">
          <Video
            poster={asset('assets/img/about-video-poster.jpg')}
            src="https://video.cgtn.com/public/2019-09-12/public/video/9d47b230a63242a093cc014420f88700/9d47b230a63242a093cc014420f88700.m3u8"
            className="Video--max-width-1257 Video--cursor-pointer"
          />
        </div>

        <div className="Section__container">
          <div className="max-width-760">
            <div className="Paragraph mb-50px mt-50px">
              <div className="Paragraph__content">
                It’s slowed and broadened by the time it kinks sharply south just before Budapest, then trends east
                again near the Croatian city of Vukovar.
                <br/>
                <br/>
                As it squeezes between the Carpathian and Balkan mountains on the Serbian-Romanian border it narrows to
                150 meters in the Iron Gates Gorge, which ends in the largest dam system on the river.
                <br/>
                <br/>
                From there it relaxes again, widening, slowing and shallowing as it trends east and then finally north
                before splitting into three at the delta and merging into the Black Sea on the Romanian and Ukrainian
                coast. By then, the Danube has passed through or bordered 10 countries, four national capitals – Vienna,
                Budapest, Bratislava and Belgrade – dozens of other cities and 62 dams.
                <br/>
                <br/>
                That’s its topology, determined by geology and gravity, but its human history flows in the opposite
                direction.
                <br/>
                <br/>
                More than 7,000 years ago, the Hamangia culture of the delta region produced some of the world’s most
                striking and enigmatic neolithic art, the Vinča Culture on the Middle Danube some of the first ever
                writing.
                <br/>
                <br/>
                The Danube was the frontier of the Western Roman Empire, the fate of which was sealed when the Goths
                crossed over in the fourth century.
                <br/>
                <br/>
                From the 15th century, it provided the Ottoman navy with a route into the heart of Europe, supporting
                the Sultan’s army of conquest.
                <br/>
                <br/>
                For millennia, it has been used for trade, fishing, power, irrigation and drinking water.
                <br/>
                <br/>
                Today, the Danube basin is home to 83 million people. It is polluted by agricultural runoff, industrial
                waste, sewage, plastics, cosmetics and antibiotics.
                <br/>
                <br/>
                Dams cut off fish from their spawning grounds, lower water tables and drain precious wetlands. It is
                controlled and altered by human action for more than 80 percent of its length.
                Some problems are worse in former Eastern bloc countries, others in the more developed Western ones.
                <br/>
                <br/>
                Fourteen countries and the EU are signed up to the International Convention on the Protection of the
                Danube River, committed to managing it sustainably and equitably.
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="Section--auto-height Section--blue-100 pb-40px">
        <div className="max-width-760 pt-40px">
          <div className="Paragraph__content">
            One of the world's great rivers, loved, exploited, powerful but vulnerable, is a test case for our ability
            to cooperate and to nurture, rather than destroy our natural environment.
          </div>
        </div>
      </Section>

      <Section show={true} className="Footer__section">
        <Footer/>
      </Section>
    </Screen>
  );
}
