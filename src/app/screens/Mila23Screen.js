import React from "react";
import BaseScreen from "./BaseScreen";
import Screen from "../components/Screen";
import {AppContext} from "../context/AppContext";
import Section from "../components/Section";
import {asset} from "../core/utils";
import Video from "../components/Video";

@AppContext
export default class MicroPlasticScreen extends BaseScreen {

  render = () => (
    <Screen name="Article">
      <Section className="Section--black Section--auto-height">

        <div className="Image mt-50px">
          <Video showMuteButton={false} showPlayButton={true} autoPlay={false} poster={`assets/img/player_poster_1.png`}
                 sources={[{src: asset('assets/vid/landing-screen-intro.mp4'), type: 'video/mp4'}]}
                 className="Video--max-width-1257 Video--cursor-pointer"
          />
          <div className="small-title text-center mt-20px">
            Gabor Bordos of Wessling explains what sorts of microplastics were found.
          </div>
        </div>

        <div className="Section__container">
          <div className="max-width-760">
            <div className="Paragraph mb-50px mt-185px">
              <h4 className="type-h4 mb-30px first-letter-big letter-spacing-normal">
                As the church bell rings shortly after sunrise, 77-year-old Vassili Kolesnik, an Old Believer, goes to
                his daily prayer, continuing a centuries-old tradition.
              </h4>
              <div className="Paragraph__content">
                It’s just a short walk from the house and yard where he lives with his dogs in one of the Danube’s most
                famous communities.
                <br/>
                <br/>
                Kolesnik lives in Mila 23, one of the many villages along the river Danube, where the inhabitants, whose
                rich histories and traditions span centuries, live in a remoteness which has only been gradually
                punctured in the last few decades.
                <br/>
                <br/>
                Mila 23 – which stands for mile 23, its distance from the mouth of the river – is accessible only by
                boat. It is known for its traditional light-blue houses, skillful fishermen and sports champions.
              </div>
            </div>
          </div>

          <div className="max-width-944">
            <img src={asset('assets/img/mila23.png')}/>
          </div>

          <div className="max-width-760">
            <div className="Paragraph mb-50px mt-80px">
              <div className="Paragraph__content">
                As Kolesnik answers the ancient summons of the church bell, other Mila 23 residents respond to more
                modern economic demands: preparing breakfast and readying boats to service the daily influx of tourists
                who come to soak in the chilled atmosphere and marvel at the extraordinary wildlife of the delta.
                <br/>
                <br/>
                In this remote corner of eastern Romania is a cultural mix of identities: Cossacks from Ukraine;
                Bulgarians; Greeks; Turks; and Romanians, who account for 80 percent of the population. Distinctive to
                the region, however, are the Lipovans from Russia. <br/>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="Section--black-and-white Section--auto-height">
        <div className="max-width-1100 mt-50px">
          <img src={asset('assets/img/birds.png')}/>
        </div>
      </Section>

      <Section>
        <div className="max-width-760">
          <div className="Paragraph mb-50px mt-80px">
            <div className="Paragraph__content">
              Widely known in the region as “Old Believers,” Lipovans are Orthodox Christians who fled from religious
              persecution in Russia during the 17th century. Many went to Romania, while others were driven further
              afield to Alaska and China.
              <br/>
              <br/>
              “The Danube Delta area and the part of the country around the Black Sea has experienced migration since
              the times of the Roman Empire and still forms a mosaic of different ethnicities today, with more than 20
              ethnic groups living in one city or village,” says Cristina Clopot, a researcher of European studies at
              Hull University, in England.
              <br/>
              <br/>
              This is as wild as Romania gets. Swallows dart everywhere, as egrets and herons fish in the shallows. But
              the locals are by no means out of touch with the modern world. Internet connection and the burgeoning
              ecotourism industry have made it more accessible – since 2018, the Danube can even be explored in Google’s
              Street View.
            </div>
          </div>
        </div>
      </Section>

      <Section className="Section--auto-height">
        <div className="Image mt-50px">
          <Video showMuteButton={false} showPlayButton={true} autoPlay={false} poster={`assets/img/player_poster_1.png`}
                 sources={[{src: asset('assets/vid/landing-screen-intro.mp4'), type: 'video/mp4'}]}
                 className="Video--max-width-1257 Video--cursor-pointer"
          />
          <div className="small-title text-center mt-20px">
            vassili, old believer
          </div>
        </div>
      </Section>

      <Section className="Section--background-img Section--height-480" backgroundImg={`assets/img/img1.png`}>
        <div className="Section__container">
          <div className="Section__background-img-flex">
            <div className="small-title-type2 primary mb-30px">Chapter 2</div>
            <h1 className="type-h1 big-title-type-2">Delta of champions</h1>
          </div>
        </div>
      </Section>

    </Screen>
  );
}
