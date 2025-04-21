'use client';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const SkillProgress = ({ label, targetValue }) => {
  const [value, setValue] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView && value === 0) {
      let start = 0;
      const duration = 3000; // 1 second
      const step = targetValue / (duration / 10); // step every 10ms

      const interval = setInterval(() => {
        start += step;
        if (start >= targetValue) {
          setValue(targetValue);
          clearInterval(interval);
        } else {
          setValue(Math.ceil(start));
        }
      }, 10);
    }
  }, [inView, targetValue, value]);

  return (
    <div className="col-md-3 d-flex flex-column align-items-center" ref={ref}>
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        className="counterspin"
        styles={buildStyles({
          rotation: 0.25,
          strokeLinecap: 'butt',
          textSize: '16px',
          pathTransitionDuration: 0.5,
          pathColor: '#00bcd4',
          textColor: '#fff',
          trailColor: '#252525',
        })}
      />
      <br />
      <h4 className="text-white text-center m-auto">{label}</h4>
    </div>
  );
};
