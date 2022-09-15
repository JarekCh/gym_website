import React from 'react';
import './Plans.css';
import { plansData } from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';

const Plans = () => {
  return (
    <div className='plans__container' id='plans'>
      <div className='blur plans__blur-1'></div>
      <div className='blur plans__blur-2'></div>
      <div className='programs__header' style={{ gap: '2rem' }}>
        <span className='stroke-text'>ready to start</span>
        <span>your journey</span>
        <span className='stroke-text'>now with us</span>
      </div>

      {/* plans card */}
      <div className='plans'>
        {plansData.map((plan, i) => (
          <div className='plan' key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className='plan__features'>
              {plan.features.map((feature, i) => (
                <div className='plan__feature' key={i}>
                  <img src={whiteTick} alt='' />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benefits -&gt;</span>
            </div>
            <button className='btn'>Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
