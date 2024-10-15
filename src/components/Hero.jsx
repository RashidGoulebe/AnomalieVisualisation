import { curve, heroBackground, robot } from "../assets";
import Section from "./Section";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Notification from "./Notification";
import SplineComponent from "./SplineComponent";
import { BottomLine } from "./design/Hero";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Neuronale Netze zur Erkennung von&nbsp;
            <span className="inline-block relative">
              Anomalien{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
            {` `} in Zeitreihen
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Die Erkennung von Anomalien in Zeitreihen dient zur Interpretation
            und Fehlerfindung von Außreißern. Diese Seite gibt einen Überblick
            über gängige Verfahren der Anomalieerkennung mit Neuronalen Netzen
            und vergleicht diese.
          </p>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative rounded-[1rem]">
            <div className="aspect-[33/40] rounded-b-[0.9rem] md:aspect-[688/490] lg:aspect-[1024/490]">
              <div className="aspect-[33/40] md:aspect-[688/490] lg:aspect-[1024/490] mb-32">
                <ScrollParallax isAbsolutelyPositioned>
                  <SplineComponent
                    className="flex absolute -left-[65rem] -bottom-[25rem] xl:-left-[30rem] xl:-bottom-[21rem] w-[3rem] "
                    url="https://prod.spline.design/iTlL7PFnBtfSNB0m/scene.splinecode"
                  />
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="flex absolute left-[1rem] bottom-[18rem] xl:left-[8.5rem] xl:bottom-[22rem] w-[18rem] "
                    title="LSTM"
                  />
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="flex absolute left-[4rem] bottom-[9rem] xl:left-[38.5rem] xl:bottom-[12rem] w-[18rem] "
                    title="RNN"
                  />
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="flex absolute left-[1rem] bottom-[0rem] xl:left-[11.5rem] xl:bottom-[0rem] w-[18rem] "
                    title="GRU"
                  />
                </ScrollParallax>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-15 flex"></div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
