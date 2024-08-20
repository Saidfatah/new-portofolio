import SaidFatah_intro_3d_box from "../components/3d_box";
import Flex from "../components/Flex";
import DescriptionText from "../components/TextAnimations/DescriptionText";
import SubTitle from "../components/TextAnimations/SubTitle";

function SkillsSection() {
    return (
        <div className="relative  w-screen h-screen">

            <Flex className="w-fll h-full" justify="center" align="center">
                {/* <div className="flex-grow bg-red-400">

            </div> */}

                <div className="relative">
                    <div className=" absolute top-[-200px] left-[-200px]">
                        <SaidFatah_intro_3d_box />
                    </div>
                    <div className="text-black p-[12px] flex gap-[24px]  tracking-[0.01em] uppercase ">
                        <div>
                            <SubTitle className="tracking-[0.01em]">
                                Front end skills
                            </SubTitle>
                            <div className="mt-[20px] flex flex-col gap-[0px] w-[240px] leading-[25px]">
                                <DescriptionText>JS , TS</DescriptionText>
                                <DescriptionText>React</DescriptionText>
                                <DescriptionText>Next</DescriptionText>
                                <DescriptionText>Framer motion</DescriptionText>
                                <DescriptionText>CSS</DescriptionText>
                                <DescriptionText>HTML</DescriptionText>
                                <DescriptionText>REDUX</DescriptionText>
                                <DescriptionText>i18</DescriptionText>
                            </div>
                        </div>
                        <div>
                            <SubTitle className="tracking-[0.01em]">
                                backend end skills
                            </SubTitle>
                            <div className="mt-[20px] flex flex-col gap-[0px] leading-[25px] w-fit">
                                <DescriptionText>postgress</DescriptionText>
                                <DescriptionText>node.js</DescriptionText>
                                <DescriptionText>nets.js</DescriptionText>
                                <DescriptionText>mongodb</DescriptionText>
                                <DescriptionText>Erms (typegraphql, etc)</DescriptionText>
                                <DescriptionText>elastic search</DescriptionText>
                                <DescriptionText>auth (jwt , passport js)</DescriptionText>
                                <DescriptionText>zookeeper</DescriptionText>
                                <DescriptionText>kafka</DescriptionText>
                                <DescriptionText>redis</DescriptionText>
                            </div>
                        </div>
                    </div>
                </div>
            </Flex>
        </div>
    );
}

export default SkillsSection;