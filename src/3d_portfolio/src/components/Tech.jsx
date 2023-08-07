import React from "react";

import {technologies} from "../constants/index.js";
import BallCanvas from "./canvas/Ball.jsx";
import SectionWrapper from "../hoc/SectionWrapper.jsx";

const Tech = () => {
    return (
        <div className='flex flex-row flex-wrap justify-center gap-10'>
            {technologies.map((technology) => (
                <div className='w-28 h-28' key={technology.name}>
                    <BallCanvas icon={technology.icon}/>
                </div>
            ))}
        </div>
    );
};

export default SectionWrapper(Tech, "");
