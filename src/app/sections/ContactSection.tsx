'use client'
import SaidFatah_intro_3d_box from "../components/3d_box";
import Flex from "../components/Flex";
import DescriptionText from "../components/TextAnimations/DescriptionText";
import RandomBinaryChar from "../components/TextAnimations/RandomBinaryChar";
import SubTitle from "../components/TextAnimations/SubTitle";

function ContactSection() {
    return (
        <div className="w-screen h-screen pb-[60px]">
            <Flex justify="center" align="center">
                <div className=" relative">
                    <div className=" absolute bottom-[-200px] right-[-200px]">
                        <SaidFatah_intro_3d_box />
                    </div>

                    <SubTitle className="tracking-[0.01em]">
                        nice to meet you !
                    </SubTitle>
                    <div className="mt-[20px] flex flex-col gap-[0px] w-fit leading-[25px]">
                        <DescriptionText>
                            <>
                                <RandomBinaryChar text="phone" />
                                :  +212 627624385
                            </>
                        </DescriptionText>
                        <DescriptionText>linkdine : SaidFatah</DescriptionText>
                        <DescriptionText>github : SaidFatah</DescriptionText>
                        <DescriptionText>email : said_designer@outlook.com</DescriptionText>
                    </div>
                </div>
            </Flex>
        </div>
    );
}

export default ContactSection;