'use client'
import SaidFatah_intro_3d_box from "../components/3d_box";
import Flex from "../components/Flex";
import DescriptionText from "../components/TextAnimations/DescriptionText";
import RandomBinaryChar from "../components/TextAnimations/RandomBinaryChar";
import SubTitle from "../components/TextAnimations/SubTitle";

function IntroSection() {
    return (
        <div className="w-screen h-screen pb-[60px]">
            <Flex justify="center" align="center">
                <div className=" relative">
                    <div className=" absolute bottom-[-200px] right-[-200px]">
                        <SaidFatah_intro_3d_box />
                    </div>

                    <SubTitle className="tracking-[0.01em]">
                        Who am I ?
                    </SubTitle>
                    <div className="mt-[20px] flex flex-col gap-[0px] w-[274px] leading-[25px]">
                        <DescriptionText>
                        A full-stack engineer, led by craft in search of quality and client satisfaction—bringing together artistic frontend expertise and robust backend skills with Next.js, React, TypeScript, Nest.js, Node.js and more.
                        </DescriptionText>
                    </div>
                </div>
            </Flex>
        </div>
    );
}

export default IntroSection;