import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import ButtonMagic from "./ui/ButtonMagic";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
    return (
        <div className="h-screen flex justify-center items-center">

            <div>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
                <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="blue" />
                <Spotlight className="top-80 left-full h-[80vh] w-[50vw]" fill="yellow" />
                <Spotlight className="top-60 left-10 h-screen " fill="purple" />
            </div>

            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.5] absolute top-0 left-0 flex items-center justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>

            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                        Let&apos;s Build Something with Me
                    </h2>

                    <TextGenerateEffect
                        className="text-center text-4xl md:text-6xl lg:text-7xl"
                        words="Hello, I&apos;m Fullstack Web Developer" />

                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">Let&apos;s create some beautiful apps with me</p>

                    <a href="#about">
                        <ButtonMagic
                            title="See my Work's"
                            icon={<FaLocationArrow />}
                            position="right"
                        />
                    </a>

                </div>
            </div>
        </div>
    );
}

export default Hero