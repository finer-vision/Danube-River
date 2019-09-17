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

const ARTICLE = config.articles.find(article => article.id === 'sturgeon');

@AppContext
export default class SturgeonScreen extends BaseScreen {
  render = () => (
    <Screen name="Rewilding">
      <Section show={true}>
        <Hero
          parallax
          tag="Sturgeon"
          title="Caviar mafia vs Danube dinosaur"
          parallaxHeaderId={ARTICLE.id}
          pageTitleType="type-single-page"
          pageTagType="type-single-page"
        />
      </Section>

      <Section className="Section--auto-height Section--black pb-80px">
        <div className="Section__container">
          <div className="max-width-760">
            <div className="Paragraph mb-50px mt-185px">
              <h4 className="type-h4 mb-30px first-letter-big letter-spacing-normal">
                Drive for half an hour through the ancient hills south-west of the Romanian town of Tulcea, pass vast
                fields of sunflowers, turn left down a dirt track in the small
                settlement of Horia and you come to what could be the last hope for the animal that has become an emblem
                for the Danube river.
              </h4>
              <div className="Paragraph__content">
                It may not be Jurassic Park, but here they’re breeding dinosaurs. The sturgeon has been around for 200
                million years, but five of the Danube’s six species are threatened with extinction.
                <br/>
                <br/>
                The dog guarding the rickety gate at the entrance to the Horia fish farm and research center takes its
                job very seriously. The welcome from Marilena Maereanu, by contrast, is warm and friendly, but she’s
                also passionately serious about saving the sturgeon.
              </div>
            </div>

            <div className="Paragraph mt-30px">
              <div className="Stats">
                <div className="Stats__number">100<span className="Stats--small Stats--sm-small-type-2">years old</span>
                </div>
                <div className="Stats__text white">
                  Sturgeon can live to more than 100-years-old
                </div>
              </div>
              <div className="Paragraph__content Paragraph--v2 Paragraph--moved-to-right">
                These huge fish can live for 100 years, so as you walk with her around the two large pounds holding her
                biggest fish, she can point out individuals such as “Mr Moustache,” who was named by her daughter.
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <LazyImage src={asset('assets/img/img15.jpg')} className="img-fluid mt-80px"/>
        </div>
        <div className="Section__container">

          <div className="max-width-760">
            <div className="Paragraph mb-50px mt-50px">
              <div className="Paragraph__content">
                Since prehistoric times, the sturgeon has remained greatly unchanged. So much so, Maereanu calls them
                “dinosaurs.” The fish retains many of the distinct characteristics it displayed during the Triassic
                period – a long, flat snout and smooth, scale-free skin, with a skeleton comprised mainly of cartilage.
                Its sluggish evolution has given the fish the status of a “living fossil.”
                <br/>
                <br/>
                However despite the work of Maereanu and others over recent decades, both the size and the population of
                sturgeon have been in steep decline. A combination of dams, pollution and overfishing – fueled by the
                luxury caviar trade – have driven the fish to the brink of extinction.
              </div>
            </div>

            <div className="Stats Stats--v2 mt-50px mw-100">
              <div className="Stats__number Stats--big">200<span className="Stats--small">million years</span></div>
            </div>
            <h4 className="type-h4 mt-50px">
              Sturgeon have been in our waters for 200 million years, their fossils have been traced back to the
              Triassic period.
            </h4>
          </div>
        </div>
      </Section>
      
      <Section className="Section--background-img Section--height-480" backgroundImg={asset('assets/img/Sturgeon-chapter2.jpg')}>
        <div className="Section__container">
          <div className="Section__background-img-flex">
            <div className="small-title-type2 primary mb-30px">Chapter 2</div>
            <h1 className="type-h1 big-title-type-2">CAVIAR MAFIA</h1>
          </div>
        </div>
      </Section>

      <Section className="Section--auto-height pb-80px">
        <div className="Section__container">
          <div className="max-width-760">
            <div className="Paragraph mt-80px">
              <h4 className="type-h4 mb-30px">
                In the Danube river that snakes from the Black Sea to the Black Forest, sturgeon could grow up to seven
                meters long, but now it's rare to find one topping two meters. The fish, which had for centuries
                migrated upstream, is now impeded by hundreds of dams that block access to their ancestral spawning
                grounds and many are now killed before they are fully mature.
              </h4>

              <div className="Paragraph__content Paragraph--v2 mt-50px">
                Five of the six sturgeon species in the Danube are on the International Union for Conservation of Nature
                (IUCN) Red List, which means they are under threat of extinction.
              </div>
            </div>

            <div className="Paragraph mt-30px">
              <div className="Stats">
                <div className="Stats__number">$110,000</div>
                <div className="Stats__text">
                  Made from rare albino fish eggs and 22-carat gold, Grull's "Strottarga Bianco" caviar has sold for
                  more than $110,000 per kilo.
                </div>
              </div>
              <div className="Paragraph__content Paragraph--v2 Paragraph--moved-to-right">
                In an attempt to conserve the species, fishing bans, first introduced by Ukraine then by Romania and
                Bulgaria, have been enforced. But with the bans came the poachers – opportunistic fishermen and
                organized criminals, working together to catch sturgeon, driven by the huge profits to be made from the
                fish’s eggs, better known as caviar or “black gold.”
                <br/>
                <br/>
                Today, caviar retains a luxury status as the food of the rich and famous, but it wasn’t always so.
                During the 19th century, sturgeon were in such abundance across the east coast of the US that caviar
                would be served as bar snacks, the peanuts of their day. While in Eastern Europe and the Caucasus,
                caviar was
              </div>
            </div>

            <div className="Paragraph mb-50px">
              <div className="Paragraph__content Paragraph--v2">
                so plentiful farmers would use it as pig feed and mothers gave it to their sick children as medicine.
              </div>
              <h4 className="type-h4 mt-65px mb-30px">
                Biggest sturgeon ever caught was 1,571 kg (3,463 lb) and 7.2 m (24 ft) long.
              </h4>
            </div>
          </div>
          <div className="text-center">
            <LazyImage src={asset('assets/img/fish.png')} className="img-fluid"/>
          </div>

          <div className="max-width-760">
            <div className="Paragraph mb-50px mt-50px">
              <div className="Paragraph__content">
                It was only in the early 20th century, due to pollution and dams, that the sturgeon population began to
                decline. Recovering slightly during World War One, the population then fell to the point where the
                Soviet Union imposed limits on sturgeon fishing in 1939. Now regulated by rigid Soviet quotas, caviar
                was as abundant as it was cheap in the USSR’s largest cities.
                <br/>
                <br/>
                In the chaos that followed the break-up of the Eastern Bloc, the trade – like much of the former Soviet
                Union – spiraled out of control. Sturgeon were fished on a massive scale, flooding markets with caviar
                and driving demand. Exploiting weaknesses in the young Eastern European democracies, criminal gangs
                entered the market. They organized the fishing of the sturgeon, the production of caviar and its
                transportation to hubs such as Moscow, St Petersburg and wherever the world’s rich resided. The “caviar
                mafia” had been born.
              </div>
            </div>

            <Carousel imagesData={[
              {imgUrl: asset('assets/img/Sturgeon in Odessa_s Privoz_ market - S.Bushuev_WWF Ukraine(2).jpg'), imgTitle: 'image01'},
              {imgUrl: asset('assets/img/Sturgeon in Odessa_s Privoz_ market - S.Bushuev_WWF Ukraine.jpg'), imgTitle: 'image02'},
              {imgUrl: asset('assets/img/Sturgeon 5 - S.Bushuev_WWF Ukraine_.jpg'), imgTitle: 'image03'},
              {imgUrl: asset('assets/img/Caviar tins - Source_ Author_Source_ Vision China_TASS Tas Society.jpg'), imgTitle: 'image04'},
            ]}/>

            <div className="Paragraph mb-50px mt-50px">
              <div className="Paragraph__content">
                The gangs, working alongside and in conjunction with some legitimate producers, overfished the sturgeon.
                Profits to be derived from caviar were comparable with other criminal industries – prices for caviar are
                notoriously slippery, the cost of a kilo ranges from $1,000 to $6,000, while rare varieties can reach
                $25,000, a similar price to a kilo of cocaine.
                <br/>
                <br/>
                The now dwindling sturgeon population led to a scarcity of caviar, maintaining the high price while also
                increasing the product’s exclusivity.
                <br/>
                <br/>
                Pressured by conservation groups, Ukraine was the first to introduce a ban on sturgeon fishing in 2000.
                It was followed by Romania in 2006 and Bulgaria in 2011, which acted after the IUCN warned that 85
                percent of sturgeon were at risk of extinction, “making them the most threatened group of animals on the
                IUCN Red List of Threatened Species.”
                <br/>
                <br/>
                The legal caviar trade adapted to the bans, with sturgeon aquaculture farms flourishing. Where once
                there were only a few dozen producers, there are now more than 2,000 worldwide – from small facilities
                in England and Italy to huge operations in China; the Kaluga Queen in Zhejiang Province now produces 35
                percent of the world’s caviar.
              </div>
            </div>

            <div className="Stats Stats--v2 mt-50px mw-100">
              <div className="Stats__number Stats--big">$1.55<span className="Stats--small">Billion</span></div>
            </div>
            <h4 className="type-h4 mt-50px">
              Analysts forecast the global caviar market to grow to USD 1.55bn by 2021
            </h4>
          </div>
        </div>
        <div className="Image mt-80px">
          <Video
            showMuteButton={false}
            showPlayButton={true}
            autoPlay={false}
            poster={asset('assets/img/player_poster12.jpg')}
            src={ARTICLE.videos[0]}
            className="Video--max-width-1257 Video--cursor-pointer"
          />
        </div>

        <div className="max-width-760 mb-80px">
          <div className="Paragraph mt-80px">
            <div className="Paragraph__content Paragraph--v2">
              Despite this, the illegal elements of the trade didn't stop, they mutated. The caviar mafia utilized its
              network of professional poachers and opportunistic fishermen to catch “wild sturgeon” – often considered a
              better quality by consumers – once again threatening the existence of the Danube dinosaur.
            </div>
          </div>

          <div className="Paragraph mt-30px">
            <div className="Quote Quote--max-width-530">
              <span className="quote-open-type-2 primary">“</span>
              <h2 className="type-h2 type-alert primary">
                In the caviar trade, there is an illegal part and a legal part and it is very hard to distinguish
                between the two.”
              </h2>
              <div className="quote-author quote-author--type-2 primary mt-10px">
                JUTTA JAHRL
              </div>
              <div className="quote-author-position black mt-10px">
                sturgeon project leader for WWF Austria
              </div>
            </div>

            <div className="Paragraph__content Paragraph--v2 Paragraph--moved-to-left">
              “The production of a kilogram of caviar incurs a 90 percent cost compared with the retail price, so our
              margin of profit is very thin,” Maereanu bemoans. “The poachers obtain their caviar by destroying the wild
              species of the Danube, at zero investment, so they can afford to undercut our prices by a landslide.”
              <br/>
              <br/>
              Due to the opacity of the market, it is almost impossible to know how much illegally sourced caviar is
              being produced and consumed. According to Jutta Jahrl, sturgeon project leader for the World Wildlife
              Federation (WWF) Austria: “In the caviar trade, there is an illegal part and a legal part and it is very
              hard to distinguish between the two.”
              <br/>
              <br/>
              While aquacultural farms were initially hailed as a solution for the industry, some are reportedly
              providing
            </div>
          </div>

          <div className="Paragraph">
            <div className="Paragraph__content Paragraph--v2">
              cover for the caviar mafia. TRAFFIC, the wildlife trade monitoring network, produced a report on caviar,
              which notes that certain farms work with poachers “informing them when the restocking takes place and when
              not to poach to be able to prove restocking has occurred.”
              <br/>
              <br/>
              Poaching along the Danube takes many forms – often those involved are far from mafiosi, but rather
              impoverished or opportunistic locals who have for generations lived off the sturgeon and its eggs.
              <br/>
              <br/>
              A handful of rangers patrol the Danube’s many waterways that emanate from the river’s mouth. They search
              the small fishing boats – often no bigger than dinghies – for signs of sturgeon. “Sometimes they aren't
              happy … They have to understand this is how our relationship should go,” says ranger Stamart Katalin.
              “They understand that this is our job to control them and they know they have to be legal.”
            </div>
          </div>
        </div>
        <div className="Image mt-80px">
          <Video
            showMuteButton={false}
            showPlayButton={true}
            autoPlay={false}
            poster={asset('assets/img/player_poster_13.jpg')}
            src={ARTICLE.videos[1]}
            className="Video--max-width-1257 Video--cursor-pointer"
          />
        </div>

        <div className="Section__container">
          <div className="max-width-760">
            <div className="Paragraph mt-80px">
              <div className="Paragraph__content Paragraph--v2 mt-50px">
                “Due to the decline of sturgeon fishing and catch of many other species, traditional fishermen [in the
                Danube region] are impoverished, and many poach to sustain themselves,” says Ivan Jaric, a researcher
                into sturgeon conservation based in Prague, Czech Republic. “One large female sturgeon can yield many
                tens of kilos of caviar, and each kilo can be sold on the black market for up to 1,000 euros [$1,110],
                it is hard to resist temptation.”
              </div>
            </div>

            <div className="Paragraph mt-30px">
              <div className="Stats">
                <div className="Stats__number">€1,000</div>
                <div className="Stats__text">
                  Price of a kilo of caviar on the black market
                </div>
              </div>
              <div className="Paragraph__content Paragraph--v2 Paragraph--moved-to-right">
                Conservationists are sympathetic to the fishermen’s plight. “The real criminals are the ones paying the
                fishermen to poach,” says Jahrl, who contributes to education programs aimed at encouraging them to
                assist in the conservation of the sturgeon.
                <br/>
                <br/>
                Poaching blights the picturesque landscape along the Danube – sturgeon carcasses, their stomachs cut
                open, are often found on the river’s banks, discarded by poachers who harvested the caviar as soon as
                they got to land.
              </div>
            </div>

            <div className="Paragraph mt-50px mb-50px">
              <div className="text-center">
                <LazyImage src={asset('assets/img/img16.jpg')} className="img-fluid"/>
              </div>
              <div className="Paragraph__content Paragraph--v2 mt-50px">
                Away from the river, the mafia has a variety of methods to “ethically wash” their wares. A common tactic
                is forging labels issued by the Convention on International Trade in Endangered Species (CITES) or
                misbranding poached goods, passing them off as those from renowned and legitimate caviar producers.
              </div>
            </div>
          </div>
        </div>

        <div className="Image mt-80px">
          <Video
            showMuteButton={false}
            showPlayButton={true}
            autoPlay={false}
            poster={asset('assets/img/player_poster_14.jpg')}
            src={ARTICLE.videos[2]}
            className="Video--max-width-1257 Video--cursor-pointer"
          />
        </div>

        <div className="max-width-760">
          <div className="Paragraph mt-80px">
            <div className="Paragraph__content Paragraph--v2 mt-50px">
              Much of Jahrl’s work involves distinguishing poached caviar sold at market. “We found there are parts of
              the legal industry that are whitewashing the illegal part … They get caviar from poached sturgeon, put it
              in tins of a bigger producer, put a nice label on it and then sell it. For the consumer, then, it is very
              hard to say is this farmed, legal caviar or is it illegal and poached.”
              <br/>
              <br/>
              To confuse matters, the sellers of poached caviar will at times shamelessly highlight how their product
              was illegally sourced due to an unsubstantiated notion among consumers that eggs from wild sturgeon are
              superior to those of reared fish. While conversely there are also reports that legal caviar will be passed
              off as illegal to drive up its price.
            </div>
          </div>
        </div>

        <div className="Image mt-80px">
          <Video
            showMuteButton={false}
            showPlayButton={true}
            autoPlay={false}
            poster={asset('assets/img/player_poster_15.jpg')}
            src={ARTICLE.videos[3]}
            className="Video--max-width-942 Video--cursor-pointer"
          />
        </div>

        <div className="Section__container">
          <div className="max-width-760 mb-80px">
            <div className="Paragraph mt-80px">
              <div className="Paragraph__content Paragraph--v2">
                Caviar trafficking doesn’t occur in isolation – the same gangs that smuggle caviar have also been linked
                to weapons and drugs smuggling.
              </div>
            </div>

            <div className="Paragraph mt-30px">
              <div className="Quote Quote--max-width-530">
                <span className="quote-open-type-2 primary">“</span>
                <h2 className="type-h2 type-alert primary">
                  The same routes and networks used to smuggle caviar are also used to bring drugs or weapons into the
                  EU”
                </h2>
                <div className="quote-author quote-author--type-2 primary mt-10px">
                  NATALIA GOZACK
                </div>
                <div className="quote-author-position black mt-10px">
                  WWF
                </div>
              </div>

              <div className="Paragraph__content Paragraph--v2 Paragraph--moved-to-left">
                Natalia Gozack, Jahrl’s colleague at the WWF, based in Ukraine, reported that customs officers have
                identified how caviar smuggling routes are also used to bring drugs or weapons into the EU. “To smuggle
                the caviar is less risky, so the next day you smuggle drugs because you’ve tried this route and you know
                it works,” she says.
                <br/>
                <br/>
                The fight to save the sturgeon is still in its infancy, a blanket ban across the Danube region hasn’t
                happened yet as Serbia is refusing to implement anything beyond restrictions. The EU, which has set up
                various task forces and programs aimed at saving the sturgeon, has limited powers as its jurisdiction
                stops at the border between Romania and Ukraine.
              </div>
            </div>
          </div>
        </div>

        <div className="Image mt-110pxx">
          <Video
            showMuteButton={false}
            showPlayButton={true}
            autoPlay={false}
            poster={asset('assets/img/player_poster_16.jpg')}
            src={ARTICLE.videos[4]}
            className="Video--max-width-1257 Video--cursor-pointer"
          />
        </div>

        <div className="Section__container">
          <div className="max-width-760 mb-80px">
            <div className="Paragraph mt-80px">
              <div className="Paragraph__content Paragraph--v2">
                For Jahrl, the responsibility of the ancient fish’s continued existence rests with the people who live
                along the Danube.
                <br/>
                <br/>
                “The WWF works with local fishermen who used to catch sturgeon when it was still an important part of
                their income ... Trying to support them to find other sources of income and try to explain to them that
                if they do not stop catching sturgeon, or release the sturgeon that they’ve caught, there are no future
                sturgeon and no future for sturgeon fishing. It’s in the fishermen’s hands if the sturgeon survives,” he
                says.
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="Section--white-and-blue Section--auto-height">
        <div className="max-width-760">
          <div className="text-center">
            <LazyImage src={asset('assets/img/img17.jpg')} className="img-fluid"/>
          </div>
        </div>

      </Section>

      <Section className="Section--blue Section--auto-height">
        <div className="Section__container">
          <div className="max-width-760 pb-160px">
            <div className="Paragraph mt-80px">
              <div className="Paragraph__content Paragraph--v2">
                Can the sturgeon survive, Maereanu thinks so. With a smile she explains how her team has put tens of
                thousands of sturgeon back into the Danube – some of which have been found in the Black Sea, confirming
                their survival.
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
