import React from "react";
import BaseScreen from "./BaseScreen";
import Screen from "../components/Screen";
import {AppContext} from "../context/AppContext";
import {preloadAssets} from "../core/utils";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Map from "../components/Map/index";
import Loading from "../components/Loading";

@AppContext
export default class LandingScreen extends BaseScreen {
  #screen = null;

  state = {
    loading: true,
    scrollY: 0,
  };

  async componentDidMount() {
    await preloadAssets();
    await this.setState({loading: false});
    this.#screen = document.querySelector('.Screen');
    this.#screen.addEventListener('scroll', this.#handleScroll);
  }

  componentWillUnmount() {
    this.#screen.removeEventListener('scroll', this.#handleScroll);
  }

  #handleScroll = () => {
    this.setState({scrollY: this.#screen.scrollTop});
  };

  #toggleMute = () => {
    const muteVideos = !this.props.app.muteVideos;
    this.props.app.toggleMuteVideos(muteVideos);
  };

  render() {
    if (this.state.loading) {
      return <Loading/>;
    }

    return (
      <Screen name="Landing" lockSections>
        <div className="mute-videos" onClick={this.#toggleMute}>
          <svg width={50} height={50}>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Landing-page-1440" transform="translate(-77.000000, -40.000000)">
                <g id="Top-assets" transform="translate(77.000000, 40.000000)">
                  <rect id="Rectangle" fillOpacity="0.1" fill="#FFFFFF" x="0" y="0" width="50" height="50"/>
                  <g id="Group-15" transform="translate(4.000000, 12.000000)" fill="#EC8484">
                    <path
                      d="M14.1238842,0.109409601 C13.5609158,-0.113035658 12.9136526,0.00974256958 12.4831474,0.422855193 L6.02105263,7.22188009 L1.50526316,7.22188009 C0.677368421,7.22188009 -3.83693077e-13,7.87332692 -3.83693077e-13,8.66632982 L-3.83693077e-13,17.3330282 C-3.83693077e-13,18.1274756 0.677368421,18.777478 1.50526316,18.777478 L6.02105263,18.777478 L12.4831474,25.5765029 C12.9136526,25.9896155 13.5609158,26.1138382 14.1238842,25.8899484 C14.6868526,25.6675032 15.0526316,25.140279 15.0526316,24.5552769 L15.0526316,1.44408116 C15.0526316,0.860523463 14.6868526,0.33185486 14.1238842,0.109409601"
                      id="Fill-362"
                    />
                    {!this.props.app.muteVideos && (
                      <>
                        <path
                          d="M41.2383158,5.79357143 C41.2383158,7.91262964 40.7264161,9.51975643 39.7026015,10.615 C38.6787869,11.7102436 37.1907065,12.2578571 35.2383158,12.2578571 C34.3335494,12.2578571 33.4407011,12.0911921 32.5597444,11.7578571 C31.6787876,11.4245221 30.6907022,10.8769086 29.5954586,10.115 C28.571644,9.40071071 27.7442713,8.91262036 27.1133158,8.65071429 C26.4823603,8.38880821 25.8335572,8.25785714 25.1668872,8.25785714 C24.2145015,8.25785714 23.4883183,8.55547321 22.9883158,9.15071429 C22.4883133,9.74595536 22.2383158,10.6149943 22.2383158,11.7578571 L19.2383158,11.7578571 C19.2383158,9.63879893 19.7442631,8.03167214 20.7561729,6.93642857 C21.7680828,5.841185 23.2621154,5.29357143 25.2383158,5.29357143 C26.1430822,5.29357143 27.0359304,5.46023643 27.9168872,5.79357143 C28.797844,6.12690643 29.7859294,6.67452 30.8811729,7.43642857 C31.9049876,8.15071786 32.7323603,8.63880821 33.3633158,8.90071429 C33.9942713,9.16262036 34.6430744,9.29357143 35.3097444,9.29357143 C36.2621301,9.29357143 36.9883133,8.99595536 37.4883158,8.40071429 C37.9883183,7.80547321 38.2383158,6.93643429 38.2383158,5.79357143 L41.2383158,5.79357143 Z"
                          id="~" fillRule="nonzero"
                        />
                        <path
                          d="M41.2383158,14.7221429 C41.2383158,16.8412011 40.7264161,18.4483279 39.7026015,19.5435714 C38.6787869,20.638815 37.1907065,21.1864286 35.2383158,21.1864286 C34.3335494,21.1864286 33.4407011,21.0197636 32.5597444,20.6864286 C31.6787876,20.3530936 30.6907022,19.80548 29.5954586,19.0435714 C28.571644,18.3292821 27.7442713,17.8411918 27.1133158,17.5792857 C26.4823603,17.3173796 25.8335572,17.1864286 25.1668872,17.1864286 C24.2145015,17.1864286 23.4883183,17.4840446 22.9883158,18.0792857 C22.4883133,18.6745268 22.2383158,19.5435657 22.2383158,20.6864286 L19.2383158,20.6864286 C19.2383158,18.5673704 19.7442631,16.9602436 20.7561729,15.865 C21.7680828,14.7697564 23.2621154,14.2221429 25.2383158,14.2221429 C26.1430822,14.2221429 27.0359304,14.3888079 27.9168872,14.7221429 C28.797844,15.0554779 29.7859294,15.6030914 30.8811729,16.365 C31.9049876,17.0792893 32.7323603,17.5673796 33.3633158,17.8292857 C33.9942713,18.0911918 34.6430744,18.2221429 35.3097444,18.2221429 C36.2621301,18.2221429 36.9883133,17.9245268 37.4883158,17.3292857 C37.9883183,16.7340446 38.2383158,15.8650057 38.2383158,14.7221429 L41.2383158,14.7221429 Z"
                          id="~" fillRule="nonzero"
                        />
                      </>
                    )}
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>

        <Section show={true}>
          <Hero
            parallax
            tag="The Danube"
            title="Life of a River"
            parallaxHeaderId="landing"
          />
        </Section>

        <Section show={true}>
          <Map/>
        </Section>

        <Section show={true} className="Footer__section">
          <Footer/>
        </Section>
      </Screen>
    );
  }
}
