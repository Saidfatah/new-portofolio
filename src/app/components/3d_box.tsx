'use client'
import { useEffect, useRef } from "react";
import DescriptionText from "./TextAnimations/DescriptionText";
import RandomBinaryChar from "./TextAnimations/RandomBinaryChar";
import SubTitle from "./TextAnimations/SubTitle";

function SaidFatah_intro_3d_box() {
    const cubeRef = useRef<HTMLDivElement>()

    useEffect(() => {
        setTimeout(() => {
            if (cubeRef.current) {
                // cubeRef.current.classList.remove("rotate_cube_sequence_1")
                // cubeRef.current.classList.add("rotate_cube_sequence_2")
            }
        }, 12 * 1000);

    }, []);

    return (<div className="cube-container">
        <div className="cube" ref={cubeRef as any} >
            <div className="face front ">
                <DescriptionText>
                    <RandomBinaryChar text="SAID" />
                </DescriptionText>
                <DescriptionText>
                    <RandomBinaryChar text="FATAH" />
                </DescriptionText>
                {/* <RandomBinaryChar text="SAID" /> */}
            </div>
            <div className="face right">
                <DescriptionText>
                    <RandomBinaryChar text="FRONTEND" />
                </DescriptionText>

                <DescriptionText>
                    <RandomBinaryChar text="ENGINEER" />
                </DescriptionText>
            </div>
            <div className="face back">
                <DescriptionText>
                    <RandomBinaryChar text="ARTIST" />
                </DescriptionText>

                <DescriptionText>
                    <RandomBinaryChar text="CREATIVE" />
                </DescriptionText>
            </div>
            <div className="face left">
                <DescriptionText>
                    <RandomBinaryChar text="Ts" />
                </DescriptionText>

                <DescriptionText>
                    <RandomBinaryChar text="Js" />
                </DescriptionText>

                <DescriptionText>
                    <RandomBinaryChar text="CSS" />
                </DescriptionText>
            </div>
            <div className="face bottom" >
                <DescriptionText>
                    <RandomBinaryChar text="ENGINEER" />
                </DescriptionText>
            </div>
            <div className="face top" >
                <DescriptionText>
                    <RandomBinaryChar text="ARTIST" />
                </DescriptionText>
            </div>
        </div>
    </div>
    );
}

export default SaidFatah_intro_3d_box;