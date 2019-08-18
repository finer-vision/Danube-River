import React from "react";
import {Link} from "react-router-dom";
import BaseScreen from "./BaseScreen";
import Screen from "../components/Screen";
import {AppContext} from "../context/AppContext";
import Section from "../components/Section";
import Hero from "../components/Hero";
import {asset} from "../core/utils";
import Footer from "../components/Footer";
import Video from "../components/Video";

@AppContext
export default class ArticleScreen extends BaseScreen {

    componentDidMount() {
        window.addEventListener("resize", () => {
            this.handleSize(this.containerReference.width);;
        });
    }

    handleSize(image) {
        var elements = document.getElementsByClassName("Section__container");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.width=(image+"px");
        }
    }
    render = () => (
        <Screen name="ArticleScreen">

            <Section>
                <Hero
                    tag="Life of a River"
                    title="The Danube"
                    background={asset('assets/img/article-screen-hero.svg')}
                />
            </Section>
            <Section classes="Section--blue Section--auto-height">
                <div className="Section__container">
                    <div className="max-width-760">
                        <div className="Paragraph mb-50px mt-185px">
                            <h4 className="type-h4 mb-30px">The world knows there are problems caused by plastic.</h4>
                            <div className="Paragraph__content">
                                We’ve all seen the pictures of dolphins, sharks or rare birds tangled up with plastic
                                and in
                                many countries there have been big – and successful – campaigns to cut the number of
                                plastic
                                bags being used. But there is another sort of plastic pollution that is harder to spot,
                                which is
                                a big threat to marine life in rivers such as the Danube… and the chances are, you are
                                helping
                                add to them.
                            </div>
                        </div>
                    </div>
                    <div className="Paragraph mb-50px">
                        <h3 className="type-h3 type-big-title Section--moved-to-left">So, what exactly do people mean
                            when
                            they talk <br/>about microplastics?</h3>
                        <div className="Paragraph__content max-width-760 mt-50px">
                            It’s a term used to describe any piece of plastic that is less than 5mm wide and they come
                            from
                            a variety of sources.
                        </div>
                    </div>
                </div>
            </Section>
            <Section classes="Section--blue-and-dark-blue Section--auto-height">
                <div className="Image">
                    <img src={`assets/img/img1-plastic.png`}
                         ref={el => this.containerReference = el}
                         onLoad={() => this.handleSize(this.containerReference.width)}
                         className="Image__element"/>
                </div>
            </Section>
            <Section classes="Section--dark-blue Section--auto-height">
                <div className="Section__container mt-110px">
                    <div className="max-width-1257 Section--flex">
                        <div className="Section__column Section__column--desktop-50">
                            <div className="Section--width-400px float-right pr-15">
                                <div className="Paragraph mb-40px">
                                    <div className="Paragraph__content letter-spacing-normal">
                                        They can also be small bits of plastic waste from factories, traditionally too
                                        small
                                        to worry
                                        about or regulate as they were flushed out in the manufacturing or cleaning
                                        process.
                                    </div>
                                </div>
                                <div className="Paragraph mb-40px">
                                    <div className="Paragraph__content letter-spacing-normal">
                                        The company involved, Borealis, has since sought to tackle the issue, and has
                                        launched plastic
                                        recycling and anti-leak campaigns.
                                    </div>
                                </div>
                                <div className="Paragraph">
                                    <div className="Paragraph__content letter-spacing-normal">
                                        But, as we’ve already mentioned, it’s not a case of just blaming businesses.
                                        Other
                                        microplastics
                                        are things called microbeads, which are found in some cosmetic products such as
                                        shower gel or
                                        some types of toothpaste. Recent estimates suggest clothing made from
                                        non-natural
                                        fibers can
                                        shed hundreds of thousands of microscopic pieces of plastic during the washing
                                        machine process.
                                        They can find their way into rivers and oceans because they are too small to be
                                        filtered out at
                                        wastewater treatment plants.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Section__column Section__column--desktop-50 text-right">
                            <img src={`assets/img/map.png`} className="Image__element d-mobile-none float-right mb-30px"/>
                        </div>
                    </div>
                </div>
                <div className="Image mt-30px mb-30px">
                    <img src={`assets/img/map.png`} className="d-none d-mobile-block img-fluid"/>
                </div>
                <div className="Image">
                    <img src={`assets/img/img2-player.png`} className="Image__element Image--move-down"/>
                </div>

            </Section>

            <Section classes="Section--auto-height">
                <div className="Section__container">
                    <div className="max-width-760">
                        <div className="Paragraph mt-185px mb-30px">
                            <h4 className="type-h4 dark-blue">The days when microplastics could be ignored are long
                                gone,
                                and surveys that
                                are now specifically
                                looking at their presence are revealing the scale of the problem – and helping us to
                                identify
                                where
                                they are coming from…</h4>
                        </div>
                    </div>
                    <div className="Image">
                        <img src={`assets/img/graph.png`} className="Image__element"/>
                    </div>
                    <div className="max-width-760">
                        <div className="Paragraph mt-65px">
                            <div className="Paragraph__content Paragraph--default-letter-spacing">
                                One place where there is still much to learn is the Danube. Gabor Bordos is a professor
                                from
                                the Wessling Research Institute, which has been getting hard figures for the presence of
                                microplastics across Hungary. Its results from last year suggest there are about 50
                                microplastic particles per cubic meter in the Danube. They also got what appears to have
                                been direct evidence of human impact on the level of microplastics in the water – with
                                more
                                found in a stretch downriver from Budapest, than just north of the capital city.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Image mt-65px">
                    <img src={`assets/img/img3-plastic.png`} className="Image__element"/>
                </div>
                <div className="Section__container">
                    <div className="max-width-760 mb-80px">
                        <h4 className="type-h4 dark-blue mt-80px">
                            But back to basics.<br/>
                            <br/>
                            What is the problem with microplastics? If they are small enough for fish, or us, to eat
                            without
                            noticing, are they really a problem?
                        </h4>
                        <div className="Paragraph mt-30px">
                            <div className="Paragraph__content Paragraph--default-letter-spacing">
                                The answer is yes. There are a growing number of scientific studies that agree on the
                                issue.
                            </div>
                        </div>
                        <div className="Paragraph mt-30px">
                            <div className="Paragraph__content Paragraph--default-letter-spacing">
                                Research conducted by Stephanie Wright, a fellow at King’s College London’s Centre for
                                Environment and Health, suggest that worms’ energy levels dropped by 50 percent and
                                their
                                feeding by 25 percent when exposed to microplastics. Meanwhile, research from France
                                suggests a lower reproductive rate in oysters exposed to polystyrene microparticles.
                                <br/>
                                <br/>
                                Wright, in a submission to the British House of Commons inquiry into the issue says
                                these
                                indings reflect the energy spent trying to digest indigestible plastic.
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Section classes="Section--dark-blue Section--auto-height">
                <div className="Section__container">
                    <div className="max-width-760">
                        <h4 className="type-h4 type-weight-500 mt-80px mb-80px">
                            That kind of makes sense.
                            <br/>
                            <br/>
                            And if you think it’s unlikely you have eaten microplastics, think again.
                        </h4>
                    </div>
                    <div className="max-width-960">
                        <span className="quote-open">“</span>
                        <h2 className="type-h2 type-alert">
                            it has been estimated that the <br/>
                            average European shellfish <br/>
                            consumer will ingest up to 11,000 <br/>
                            microplastics per year.”
                        </h2>
                        <div className="quote-author mt-30px">
                            Stephanie Wright
                        </div>
                        <div className="quote-author-position mt-10px">
                            Fellow at King’s College London
                        </div>
                    </div>
                    <div className="max-width-760">
                        <div className="Paragraph mt-65px mb-80px">
                            <div className="Paragraph__content letter-spacing-normal">
                                And it is an ongoing problem – even if all production were ended tomorrow.
                                <br/>
                                <br/>
                                A big proportion of microplastics in rivers and the oceans enter via water-treatment
                                plants
                                and sewage works. Even if they don’t go straight back into the water system, they can
                                end up
                                being used by farmers to irrigate or fertilize their land. They then get eaten directly
                                by
                                insects and animals, or washed by rain into rivers and back into the food chain there.
                                Once
                                they are created, they are around for hundreds of years, travelling an ecologically
                                unappetizing circle of life.
                            </div>
                        </div>
                    </div>

                </div>
            </Section>
            <Section classes="Section--dark-blue-and-white Section--auto-height">
                <div className="Image">
                    <img src={`assets/img/img3-plastic.png`} className="Image__element"/>
                </div>
            </Section>
            <Section classes="Section--auto-height">
                <div className="Section__container mt-80px">
                    <div className="max-width-760 Section--flex">
                        <div className="Section__column Section__column--desktop-50">
                            <div className="custom-text-styles">
                                But there is still much to learn about the overall impact on the Danube and a survey of
                                microplastics along the length of the river is under way. It is a multinational effort, with
                                an
                                aim to define the problem. It is hoped this will then inform the politicians taking
                                decisions
                                needed to safeguard the river’s waters, which cut across more countries than any other in
                                the
                                world. Philipp Hohenblum, a microplastics expert from the International Commission for the
                                protection of the Danube River (ICPDR), is heading the survey in Vienna, Austria. He and 35
                                colleagues have spent every day for the past month collecting, testing and analyzing the
                                Danube’s water.
                            </div>
                        </div>
                        <div className="Section__column Section__column--desktop-50-custom ml-desktop-20px">
                            <span className="quote-open-type-2">“</span>
                            <h2 className="type-h2 type-alert">
                                It’s not as simple <br className="br-desktop"/>
                                as spotting a <br className="br-desktop"/>
                                discarded fast <br className="br-desktop"/>
                                food wrapper.”
                            </h2>
                            <div className="quote-author quote-author-type-2 mt-10px">
                                Philipp Hohenblum
                            </div>
                            <div className="quote-author-position quote-author-position-type-2 mt-10px">
                                Professor
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Image mt-80px">
                    <img src={`assets/img/img2-player.png`} className="Image__element"/>
                </div>
                <div className="Section__container">
                    <div className="max-width-760">
                        <div className="Paragraph mt-80px mb-75px">
                            <div className="Paragraph__content Paragraph--default-letter-spacing">
                                So, some of the world’s brightest minds have been focusing on tackling the issue and
                                pressure is growing for governments to act. But on a more personal level, what can be done
                                to tackle the problem? There’s an obvious answer – buy fewer plastic products and avoid
                                shower gels and washing detergents that have microbeads in them.
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            <Section classes="Section--white-amd-blue-and-lightseagreen Section--auto-height">
                <div className="Image">
                    {/*<img src={`assets/img/img4-fishing.png`} className="Image__element Image--move-down"/>*/}
                    <Video showMuteButton={false}
                           sources={[{src: asset('assets/vid/landing-screen-intro.mp4'), type: 'video/mp4'}]}
                           classes="Video--max-width-1257"
                    />
                </div>
            </Section>
            <Section classes="Section--light-sea-green Section--auto-height">
                <div className="Section__container">
                    <div className="Paragraph mt-210px mb-80px">
                        <div className="Paragraph__content Paragraph--default-letter-spacing">
                            But the challenge with the Danube is, there are different countries with different governments
                            that have different priorities – which all need to work together to tackle the problem.
                            Microbeads, for instance, are banned in cosmetics in the UK, France and Italy, but they are not
                            yet outlawed across the whole European Union and other countries through which the Danube flows.
                            <br/>
                            <br/>
                            But what is clear is there is a huge amount of goodwill and multinational effort, as shown by
                            the work of the ICPDR and several regional environmental organizations, to identify and tackle
                            what is the big problem caused by these very small things.
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
