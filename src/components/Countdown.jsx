import React, { useState, useEffect } from "react";


const CountdownTimer = ({ targetDate }) => {
  const [remainingTime, setRemainingTime] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(calculateTimeRemaining());
    }, []);
  });

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      // Countdown has reached or passed the target date
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    } else {
      const seconds = Math.floor((difference / 1000) % 60);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));

      return {
        days,
        hours,
        minutes,
        seconds,
      };
    }
  }

  return (
    <div className=" bg-cover py-16 min-h-screen">
      <h3 className="text-[1.7rem] lg:text-[2.5rem] md:text-[2.3rem] text-center text-[#4A4AFF] mb-16 md:mb-16 lg:mb-20 uppercase font-semibold">
        Countdown
      </h3>
      <div className="w-full min-h-[200px] flex flex-col items-center justify-center ">
        <div className="grid mb-32 grid-cols-2 md:grid-cols-4 gap-16 text-center auto-cols-max">
          <div className="flex flex-col min-w-[120px] min-h-[120px] p-4 bg-neutral rounded-box text-neutral-content border-4 border-red   ">
            <span className="countdown ">
              <span style={{ "--value": 15 }}>{remainingTime.days}</span>
            </span>
            <span className="text-[#4a4aff]">Days</span>
          </div>
          <div className="flex flex-col min-w-[120px] min-h-[120px] p-4 bg-neutral rounded-box text-neutral-content border-4 border-red">
            <span className=" countdown">
              <span style={{ "--value": 10 }}>{remainingTime.hours}</span>
            </span>
            <span className="text-[#4a4aff]">Hours</span>
          </div>
          <div className="flex flex-col min-w-[120px] min-h-[120px] p-4 bg-neutral rounded-box text-neutral-content border-4 border-red">
            <span className="countdown ">
              <span className="" style={{ "--value": 24 }}>
                {remainingTime.minutes}
              </span>
            </span>
            <span className="text-[#4a4aff]">Min</span>
          </div>
          <div className="flex  flex-col min-w-[120px] min-h-[120px] p-4 bg-neutral rounded-box text-neutral-content border-4 border-red">
            <span className="countdown ">
              <span style={{ "--value": 51 }}>{remainingTime.seconds}</span>
            </span>
            <span className="text-[#4a4aff]">Sec</span>
          </div>
        </div>
      </div>

      <div id="mechack" className="py-8 px-4 mx-auto  max-w-screen-xl  lg:py-16 lg:px-12 flex flex-col justify-evenly items-center gap-16">
        <h2 className="text-white uppercase font-bold tracking-wider text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]">
          About <span className="text-[#4A4AFF]">MEC.HACK</span>
        </h2>
        <p className="text-white font-normal font-sans text-sm text-left lg:text-xl">
          MEC.Hack is gearing up to be an electrifying 24-hour hackathon,
          setting the stage for the upcoming MEC.Conf. Mark your calendars for
          the event happening on at Model Engineering College, Thrikkakara. This
          year, our theme, &quot;Bridging gaps through Technology&quot; takes center
          stage, emphasizing the significance of using technology to address
          critical issues. MEC.Hack serves as a catalyst to advance this
          mission, fostering innovation and creative solutions that can bridge
          divides and drive positive change. Join us in this incredible
          hackathon as we harness the power of technology to make a difference.
          We invite you to be a part of this exciting journey towards innovation
          and change. Don&#39;t miss your chance to be a part of MEC.Hack - where
          ideas become reality!
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;
