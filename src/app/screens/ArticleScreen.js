import React from "react";
import {Link} from "react-router-dom";
import BaseScreen from "./BaseScreen";
import Screen from "../components/Screen";
import {AppContext} from "../context/AppContext";

@AppContext
export default class ArticleScreen extends BaseScreen {
    render = () => (
        <Screen name="ArticleScreen">

            <div className="Page Page__article">
                <div className="Section Section--lue">
                    <div className="Section__container">

                        <div className="Paragraph">
                            <h4 className="type-h4">The world knows there are problems caused by plastic.</h4>
                            <div className="Paragraph__content">
                                We’ve all seen the pictures of dolphins, sharks or rare birds tangled up with plastic
                                and in many countries there have been big – and successful – campaigns to cut the number
                                of plastic bags being used. But there is another sort of plastic pollution that is
                                harder to spot, which is a big threat to marine life in rivers such as the Danube… and
                                the chances are, you are helping add to them.
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </Screen>
    );
}
