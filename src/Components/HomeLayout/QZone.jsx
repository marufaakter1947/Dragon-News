import React from 'react';
import swimmingImage from "../../assets/swimming.png"
import playgroundImage from "../../assets/playground.png"
import classroomImage from "../../assets/class.png"

const QZone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold mb-5'>Q-Zone</h2>
            <div className="space-y-5">
                <img src={swimmingImage} alt="" />
                 <img src={classroomImage} alt="" />
                <img src={playgroundImage} alt="" />
               

            </div>
        </div>
    );
};

export default QZone;