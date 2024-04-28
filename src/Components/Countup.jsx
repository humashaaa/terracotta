import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Countup = () => {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <div>

           <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
           <div className="flex justify-center items-center">
                <div className="flex gap-3">
                    <h1>
                        {counterOn && <CountUp start={0} end={15} duration={2} delay={0}/>} +
                        <p>Years of experience</p>
                    </h1>
                </div>
                <div className="flex gap-3">
                    <h1>
                        {counterOn && <CountUp start={0} end={40} duration={2} delay={0}/>} +
                        <p>Expert Instructors</p>
                    </h1>
                </div>
            </div>
           </ScrollTrigger>
    
        </div>
    );
};

export default Countup;