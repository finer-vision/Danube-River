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
import LazyImage from "../components/LazyImage";

const ARTICLE = config.articles.find(article => article.id === 'mila-23');

@AppContext
export default class Mila23Screen extends BaseScreen {
  render = () => (
    <Screen name="Mila23">
      <Section show={true}>
        <Hero
          parallax
          tag="Mila 23"
          title="Life of the island people"
          parallaxHeaderId={ARTICLE.id}
          pageTitleType="type-single-page"
          pageTagType="type-single-page"
        />
      </Section>

      <Section className="Section--black Section--auto-height pt-lg-50px">

        <div className="Image">
          <Video
            showMuteButton={false}
            showPlayButton={true}
            autoPlay={false}
            poster={asset('assets/img/player_poster_4.jpg')}
            src={ARTICLE.videos[0]}
            className="Video--max-width-1257 Video--cursor-pointer"
          />
        </div>

        <div className="Section__container">
          <div className="max-width-760">
            <div className="Paragraph mb-50px mt-80px">
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

        </div>
        <div className="text-center mt-30px">
          <LazyImage src={asset('assets/img/mila23.jpg')} className="img-fluid"/>
        </div>
        <div className="Section__container">

          <div className="max-width-760">
            <div className="Paragraph mb-50px mt-50px">
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
          <LazyImage src={asset('assets/img/birds.jpg')} className="img-fluid"/>
        </div>
      </Section>

      <Section className="Section--auto-height">
        <div className="Section__container">
          <div className="max-width-760">
            <div className="Paragraph mb-50px mt-50px">
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
                This is as wild as Romania gets. Swallows dart everywhere, as egrets and herons fish in the shallows.
                But
                the locals are by no means out of touch with the modern world. Internet connection and the burgeoning
                ecotourism industry have made it more accessible – since 2018, the Danube can even be explored in
                Google’s
                Street View.
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="Section--auto-height">
        <div className="Image mt-50px">
          <div className="max-width-760">
            <div className="Paragraph__content">
              That has not been welcomed news for all. As Vassili puts it, there are now too many people for too few
              fish.
            </div>
          </div>

          <br/>
          <br/>

          <Video
            showMuteButton={false}
            showPlayButton={true}
            autoPlay={false}
            poster={asset('assets/img/player_poster_5.jpg')}
            src={ARTICLE.videos[1]}
            className="Video--max-width-1257 Video--cursor-pointer"
          />
        </div>
      </Section>

      <Section className="Section--background-img Section--height-480 mt-80px"
               backgroundImg={asset('assets/img/img1.jpg')}>
        <div className="Section__container">
          <div className="Section__background-img-flex">
            <div className="small-title-type2 primary mb-30px">Chapter 2</div>
            <h1 className="type-h1 big-title-type-2">Delta of champions</h1>
          </div>
        </div>
      </Section>

      <Section className="Section--black Section--auto-height pb-110px">
        <div className="Section__container">

          <div className="max-width-760 mt-50px mb-50px">
            <h4 className="type-h4">
              It is here in Mila 23 where Ivan Patzaichin was born and would train to go on to win four gold Olympic
              medals for canoe sprint. Patzaichin, an Old Believer himself, is the most famous sports champion of the
              region and in a 2006 nationwide poll, he was included on a list of the 100 greatest Romanians of all time.
            </h4>
          </div>

          <div className="max-width-970">
            <span className="quote-open-type-2 primary">“</span>
            <h2 className="type-h2 type-quote primary">
              To become a champion you need to be determined – and living in the waters of the Danube Delta trains your
              determination, because here you have only yourself to rely on.”
            </h2>
            <div className="quote-author primary white-sm mt-30px">
              Ivan Patzaichin
            </div>
            <div className="quote-author-position mt-10px">
              Olympic gold medal canoeist
            </div>
          </div>
          <div className="max-width-760">
            <div className="Paragraph mb-50px mt-80px">
              <div className="Paragraph__content">
                Other champions who grew up in Mila 23 include Agafia Constantin, winner of the sprint canoe gold medal
                at the 1984 Los Angeles Olympics, and Maria Nichiforov, who won a bronze medal in the same discipline at
                the 1972 Olympics in Munich. Overall, the village has provided Romania with 24 world champion canoeists.
              </div>
            </div>
          </div>

          <div className="Image">
            <Video
              showMuteButton={false}
              showPlayButton={true}
              autoPlay={false}
              poster={asset('assets/img/player_poster_3.jpg')}
              src={ARTICLE.videos[2]}
              className="Video--max-width-1257 Video--cursor-pointer"
            />
          </div>

          <div className="text-center">
            <LazyImage src={asset('assets/img/ivan.png')} className="img-fluid"/>
          </div>

          <div className="max-width-960">
            <div className="Paragraph Paragraph--mw-100 mb-50px mt-80px">
              <div className="Paragraph__content">

                When asked why the Danube has been so conducive to producing successful sportsmen, Patzaichin says: “It
                has given so many champions to Romania because, until recently, [sport] was the only chance children had
                to escape the isolation of the Danube Delta and the limited number of options they had for personal
                development.
                <LazyImage
                  src={asset('assets/img/ivan_2.jpg')}
                  className="img-fluid float-md-right mw-sm-100 mw-md-300 mb-50px mt-30px ml-20px"
                />
                <br/>
                <br/>
              </div>
              <div className="Paragraph__content">
                “Also, in order to become a champion, you need to be determined – and living in the waters of the Danube
                Delta trains your determination, because here you have only yourself to rely on.”
                <br/>
                <br/>
                He adds: “Water can be your best friend or your fierce enemy, and your mere survival depends on how well
                you master it. So, after learning how to work with it, children acquire the drive and power to compete
                in the waters of the world.” Patzaichin now spends his time between the capital Bucharest and Mila 23,
                where he coaches and runs his ecotourism business, called Rowmania. He says ecotourism is the next best
                thing to being a fisherman, as it helps maintain the delicate balance of the Danube.
                <br/>
                <br/>
                “Practicing ecotourism as the main form of tourism benefits not only the nature and the locals, who have
                a sustainable form of revenue, but also tourists, who can enjoy one-of-a-kind experiences by getting in
                contact with traditions forged by the multiculturalism of the area,” he explains.
                <br/>
                <br/>
                “Biodiversity is [the] Delta’s main asset and we can’t passively watch it being ruined.”
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="Section--background-img Section--height-480" backgroundImg={asset('assets/img/img2.jpg')}>
        <div className="Section__container">
          <div className="Section__background-img-flex">
            <div className="small-title-type2 primary mb-30px">Chapter 3</div>
            <h1 className="type-h1 big-title-type-2">A COMPROMISE WITH NATURE</h1>
          </div>
        </div>
      </Section>

      <Section className="Section--auto-height">
        <div className="Section__container">
          <div className="max-width-760">
            <h4 className="type-h4 mt-50px">
              While known for its ecological significance and diverse wildlife, the Danube, once a place for the exiled,
              is also a sanctuary for minorities such as the Lipovans. But the refuge that isolation offered has come at
              a cost. Ion Barladeanu, a 44-year-old safari tour driver from Letea, another remote village in the Danube,
              says life is far from easy.
            </h4>

            <div className="Paragraph mb-50px mt-50px">
              <div className="Paragraph__content">
                The ultimate compromise for life on the water is that with nature.
                <br/>
                <br/>
                “Fishing is no longer good business in this region because the canals are silted,” says Barladeanu.
                “There is also a lot of red tape involved, and now many former fishermen have reverted to raising farm
                animals.”
                <br/>
                <br/>
                “The canals started silting the worst after the [1989] revolution. And in the past 10 to 15 years, with
                temperatures going very high and waters receding significantly during the summer, there’s a lot of new
                vegetation growing – and that leads to silting, so the fish migrate to deeper and cooler water.”
                <br/>
                <br/>
                These days, boats carry more tourists than fish. But even this mode of transport is changing.
                <br/>
                <br/>
                Also in decline is the tradition of building wooden boats called lotkas. In Romania they have become the
                symbol of the Danube Delta and there’s even a display dedicated to them in Mila 23.
                <br/>
                <br/>
                However, while they were once the villagers’ main mode of transport, today lotkas litter the edges of
                the river, abandoned and replaced by more practical motor boats.
              </div>
            </div>
          </div>
        </div>

        <div className="max-width-760 mt-80px mb-80px">
          <Carousel imagesData={[
            {imgUrl: asset('assets/img/Lotka-1.jpg'), imgTitle: 'image01'},
            {imgUrl: asset('assets/img/Lotka-2.jpg'), imgTitle: 'image02'},
            {imgUrl: asset('assets/img/Lotka-3.jpg'), imgTitle: 'image03'},
            {imgUrl: asset('assets/img/Lotka-4.jpg'), imgTitle: 'image04'},
          ]}/>
        </div>

      </Section>

      <Section className="Section--background-img Section--height-480" backgroundImg={asset('assets/img/img3.jpg')}>
        <div className="Section__container">
          <div className="Section__background-img-flex">
            <div className="small-title-type2 primary mb-30px">Chapter 3</div>
            <h1 className="type-h1 big-title-type-2">AN UNCERTAIN FUTURE</h1>
          </div>
        </div>
      </Section>

      <Section className="Section--auto-height pb-40px">
        <div className="Section__container">
          <div className="max-width-760">
            <h4 className="type-h4 mt-80px">
              The tourism industry is booming, but that has created tensions with the traditional way of life in this
              remote corner of Romania.
              <br/>
              <br/>
              Nowadays, Mila 23 has a minimarket and a bar, just meters from where fishermen still bring in the fish
              they have caught in their traditional tubular ‘fyke’ nets: carp, pike, perch and catfish. Bright
              blue-and-white traditional homes cluster along the dull-green river, captured on camera by tourists who
              come here for a piece of history.
            </h4>

            <div className="Paragraph mb-50px mt-50px">
              <div className="Paragraph__content">
                Walk down to the post office in Mila 23 and a TV mast can be seen towering over it, the tallest
                structure on the island. Erected in the 1990s, it represents the dawn of technological progress in this
                remote corner of Romania.
                <br/>
                <br/>
                Security cameras can be seen fitted on traditional houses, which themselves are being replaced by hotels
                and there are even listings on Airbnb, the online vacation accommodation marketplace. Tourists say the
                hospitality offered here is just as good as in the city.
                <br/>
                <br/>
                “People who come here leave satisfied, the food is excellent, it’s fresh,” says 41-year-old Florian
                Pavel, a hotel owner in Mila 23.
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
            poster={asset('assets/img/player_poster_3.jpg')}
            src={ARTICLE.videos[3]}
            className="Video--max-width-1257 Video--cursor-pointer"
          />
        </div>
      </Section>

      <Section className="Section--blue Section--auto-height pb-160px">
        <div className="Section__container">
          <div className="max-width-760 mb-80px">
            <div className="Paragraph mt-80px">
              <div className="Paragraph__content Paragraph--v2">
                According to Pavel, tourism only really took off around seven years ago. “In the first year [of
                business], our hotel was booked at around 40 percent. In the next, it went up to 60. And now it’s all
                booked until 2020 up to the month of May. There’s been a lot of progress,” he says.
              </div>
            </div>

            <div className="Paragraph mt-30px">

              <div className="Quote Quote--max-width-530">
                <span className="quote-open-type-2 white">“</span>
                <h2 className="type-h2 type-alert white">
                  Many people come here and discover it’s not for them. It’s very remote, there are no cars, no tarmac,
                  no roads”
                </h2>
                <div className="quote-author quote-author--type-2 white mt-10px">
                  Philipp Hohenblum
                </div>
                <div className="quote-author-position white mt-10px">
                  Professor
                </div>
              </div>

              <div className="Paragraph__content Paragraph--v2 Paragraph--moved-to-left">
                But Pavel warned the future is still uncertain because of young people leaving the area. “Many don’t
                come back … only to visit their families. And so there are some hotels which brought in workers from
                abroad, Indians or [other] nations. It’s hard to find staff these days.”
                <br/>
                <br/>
                “It’s very difficult, especially since the area is isolated. Many people come here and discover it’s not
                for them. It’s very remote, there are no cars, no tarmac, no roads.”
                <br/>
                <br/>
                Yet for some, life on the water is all they know and fishing all they know how to do.
                <br/>
                <br/>
                As the sun rises over Lake Somova, Dobri can be found in his lotka working his nets, silhouetted against
                a wall of reeds. The steam rises off the glass-still water as he examines his catch with an air of
                resignation.
                He is one of the few fishermen left in the region.
              </div>
            </div>

            <div className="Paragraph">
              <div className="Paragraph__content Paragraph--v2">
                <br/>
                Wearing a white cap and green apron, Dobri says he’s been fishing for 36 years, and out of his seven
                children, none will follow his path – all went to Italy to escape poverty. “It’s hard work, it gets cold
                in the winter, frost … your little hands get stone cold. This is life.”
                <br/>
                <br/>
                He looks down at the water, dejected: “We keep working but production is zero. What can I say? There are
                no fish.”
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
