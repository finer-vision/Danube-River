import React from "react";
import {Link} from "react-router-dom";
import BaseScreen from "./BaseScreen";
import Screen from "../components/Screen";
import {AppContext} from "../context/AppContext";
import Section from "../components/Section";
import Hero from "../components/Hero";
import {asset} from "../core/utils";

@AppContext
export default class ArticleScreen extends BaseScreen {
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
                    <div className="Paragraph mb-50px mt-185px">
                        <h4 className="type-h4 mb-30px">The world knows there are problems caused by plastic.</h4>
                        <div className="Paragraph__content">
                            We’ve all seen the pictures of dolphins, sharks or rare birds tangled up with plastic and in
                            many countries there have been big – and successful – campaigns to cut the number of plastic
                            bags being used. But there is another sort of plastic pollution that is harder to spot,
                            which is
                            a big threat to marine life in rivers such as the Danube… and the chances are, you are
                            helping
                            add to them.
                        </div>
                    </div>
                    <div className="Paragraph mb-0">
                        <h3 className="type-h3 type-big-title Section--moved-to-left">So, what exactly do people mean
                            when
                            they talk about microplastics?</h3>
                        <div className="Paragraph__content mt-50px">
                            It’s a term used to describe any piece of plastic that is less than 5mm wide and they come
                            from
                            a variety of sources.
                        </div>
                    </div>
                </div>
                <div className="Image">
                    <img src={`assets/img/img1-plastic.png`} className="Image__element Image--move-down"/>
                </div>
            </Section>

            <Section classes="Section--dark-blue Section--auto-height">
                <div className="Section__container Section--flex mt-210px">
                    <div className="Section__column Section__column--desktop-50">
                        <div className="Section--width-400px float-right">
                            <div className="Paragraph mb-40px">
                                <div className="Paragraph__content">
                                    They can also be small bits of plastic waste from factories, traditionally too small
                                    to worry
                                    about or regulate as they were flushed out in the manufacturing or cleaning process.
                                </div>
                            </div>
                            <div className="Paragraph mb-40px">
                                <div className="Paragraph__content">
                                    The company involved, Borealis, has since sought to tackle the issue, and has
                                    launched plastic
                                    recycling and anti-leak campaigns.
                                </div>
                            </div>
                            <div className="Paragraph">
                                <div className="Paragraph__content">
                                    But, as we’ve already mentioned, it’s not a case of just blaming businesses. Other
                                    microplastics
                                    are things called microbeads, which are found in some cosmetic products such as
                                    shower gel or
                                    some types of toothpaste. Recent estimates suggest clothing made from non-natural
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
                        <img src={`assets/img/map.png`} className="img-fluid"/>
                    </div>
                </div>
                <div className="Image">
                    <img src={`assets/img/img2-player.png`} className="Image__element Image--move-down"/>
                </div>
            </Section>

            <Section classes="Section--auto-height">
                <div className="Section__container">
                    <div className="Paragraph Paragraph--max-width-760 mt-185px">
                        <h4 className="type-h4 dark-blue">The days when microplastics could be ignored are long gone,
                            and surveys that
                            are now specifically
                            looking at their presence are revealing the scale of the problem – and helping us to
                            identify
                            where
                            they are coming from…</h4>
                    </div>
                    <div className="Image">
                        <img src={`assets/img/graph.png`} className="Image__element"/>
                    </div>
                    <div className="Paragraph mt-65px">
                        <div className="Paragraph__content Paragraph--default-letter-spacing">
                            One place where there is still much to learn is the Danube. Gabor Bordos is a professor from
                            the Wessling Research Institute, which has been getting hard figures for the presence of
                            microplastics across Hungary. Its results from last year suggest there are about 50
                            microplastic particles per cubic meter in the Danube. They also got what appears to have
                            been direct evidence of human impact on the level of microplastics in the water – with more
                            found in a stretch downriver from Budapest, than just north of the capital city.
                        </div>
                    </div>
                    <div className="Image mt-80px">
                        <img src={`assets/img/img3-plastic.png`} className="Image__element"/>
                    </div>
                    <div className="max-width-760">
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
                        <h4 className="type-h4 mt-80px mb-80px">
                            That kind of makes sense.
                            <br/>
                            <br/>
                            And if you think it’s unlikely you have eaten microplastics, think again.
                        </h4>
                    </div>
                    <div className="max-width-960">
                        <h2 className="type-h2 type-alert">
                            it has been estimated that the <br/>
                            average European shellfish <br/>
                            consumer will ingest up to 11,000 <br/>
                            microplastics per year.”
                        </h2>
                    </div>
                    <div className="max-width-760">
                        <div className="Paragraph mt-80px mb-80px">
                            <div className="Paragraph__content">
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
                    <div className="Image mt-80px">
                        <img src={`assets/img/img3-plastic.png`} className="Image__element Image--move-down-250"/>
                    </div>
                </div>
            </Section>

            <Section classes="Section--auto-height">
                <div className="Section__container Section--flex max-width-960 mt-315px">
                    <div className="Section__column Section__column--desktop-50">
                        But there is still much to learn about the overall impact on the Danube and a survey of
                        microplastics along the length of the river is under way. It is a multinational effort, with an
                        aim to define the problem. It is hoped this will then inform the politicians taking decisions
                        needed to safeguard the river’s waters, which cut across more countries than any other in the
                        world. Philipp Hohenblum, a microplastics expert from the International Commission for the
                        protection of the Danube River (ICPDR), is heading the survey in Vienna, Austria. He and 35
                        colleagues have spent every day for the past month collecting, testing and analyzing the
                        Danube’s water.
                    </div>
                    <div className="Section__column Section__column--desktop-50">
                        <h2 className="type-h2 type-alert">
                            It’s not as simple <br/>
                            as spotting a <br/>
                            discarded fast <br/>
                            food wrapper.”
                        </h2>
                    </div>
                </div>
                <div className="Image mt-80px">
                    <img src={`assets/img/img2-player.png`} className="Image__element"/>
                </div>
            </Section>
        </Screen>
    );
}
