import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Countup = () => {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <div>

           <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
           <div className="flex justify-around items-center">
                <div className="flex gap-3">
                    <h1 className="text-3xl font-bold">
                        {counterOn && <CountUp start={0} end={15} duration={2} delay={0}/>} +
                        <p className="text-2xl font-bold">Years of experience</p>
                    </h1>
                </div>
                <div className="flex gap-3">
                    <h1 className="text-3xl font-bold">
                        {counterOn && <CountUp start={0} end={70} duration={2} delay={0}/>} +
                        <p className="text-2xl font-bold">Events and Exhibitions</p>
                    </h1>
                </div>
                <div className="flex gap-3">
                    <h1 className="text-3xl font-bold">
                        {counterOn && <CountUp start={0} end={40} duration={2} delay={0}/>} +
                        <p className="text-2xl font-bold">Expert Instructors</p>
                    </h1>
                </div>
            </div>
           </ScrollTrigger>
    
        </div>
    );
};

export default Countup;