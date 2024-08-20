'use client'
import { useEffect, useRef } from "react";
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

    return (<div className="cube-container apercuFontRegular">
        <div className="cube rotate_cube_sequence_1 apercuFontRegular" ref={cubeRef as any} >
            <div className="face front ">
                <SubTitle>
                    <RandomBinaryChar text="SAID" />
                </SubTitle>
                <SubTitle>
                    <RandomBinaryChar text="FATAH" />
                </SubTitle>
                {/* <RandomBinaryChar text="SAID" /> */}
            </div>
            <div className="face right">
                <RandomBinaryChar text="FRONTEND" />
                <RandomBinaryChar text="ENGINEER" />
            </div>
            <div className="face back">
                <RandomBinaryChar text="ARTIST" />
                <RandomBinaryChar text="CREATIVE" />
            </div>
            <div className="face left">
                <RandomBinaryChar text="Ts" />
                <RandomBinaryChar text="Js" />
                <RandomBinaryChar text="CSS" />
            </div>
            <div className="face bottom" >
                <RandomBinaryChar text="ENGINEER" />
            </div>
            <div className="face top" >
                <RandomBinaryChar text="ARTIST" />
            </div>
        </div>
    </div>
    );
}

export default SaidFatah_intro_3d_box;