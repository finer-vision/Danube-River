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
                            bags being used. But there is another sort of plastic pollution that is harder to spot, which is
                            a big threat to marine life in rivers such as the Danube… and the chances are, you are helping
                            add to them.
                        </div>
                    </div>
                    <div className="Paragraph mb-0">
                        <h3 className="type-h3 type-big-title Section--moved-to-left">So, what exactly do people mean when
                            they talk about microplastics?</h3>
                        <div className="Paragraph__content mt-50px">
                            It’s a term used to describe any piece of plastic that is less than 5mm wide and they come from
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
                        <img src={`assets/img/map.png`}/>
                    </div>
                </div>
                <div className="Image">
                    <img src={`assets/img/img2-player.png`} className="Image__element Image--move-down"/>
                </div>
            </Section>

            <Section classes="Section--auto-height">
                <div className="Paragraph mt-185px">
                    <h4 className="type-h4 dark-blue">The days when microplastics could be ignored are long gone, and surveys that
                        are now specifically
                        looking at their presence are revealing the scale of the problem – and helping us to identify
                        where
                        they are coming from…</h4>
                </div>
                <div className="Image">
                    <img src={`assets/img/graph.png`} className="Image__element"/>
                </div>
            </Section>
        </Screen>
    );
}
