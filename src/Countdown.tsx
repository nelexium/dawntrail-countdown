import { Duration, intervalToDuration } from "date-fns";
import { useEffect, useState } from "react";

interface Props {
  type: boolean;
}

export default function Countdown({ type }: Props) {
  const dawntrailRelease = new Date(2024, 7, 2, 7, 30);

  let diff: Duration;

  const offset = dawntrailRelease.getTimezoneOffset();

  const [days, setDays] = useState<number>();
  const [hours, setHours] = useState<number>();
  const [minutes, setMinutes] = useState<number>();
  const [seconds, setSeconds] = useState<number>();

  useEffect(() => {
    if (!type) {
      dawntrailRelease.setUTCFullYear(2024, 7, 2); //full release
    } else {
      dawntrailRelease.setUTCFullYear(2024, 6, 28); //early access
    }

    const interval = setInterval(() => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      diff = intervalToDuration({
        start: new Date().getTime() + offset * 60000,
        end: dawntrailRelease,
      });

      setDays(diff.days == undefined ? 0 : diff.days);
      setHours(diff.hours == undefined ? 0 : diff.hours);
      setMinutes(diff.minutes == undefined ? 0 : diff.minutes);
      setSeconds(diff.seconds == undefined ? 0 : diff.seconds);
    }, 1000);

    return () => clearInterval(interval);
  }, [type]);

  return (
    <div className={"countdown-component"}>
      <div className={"countdown-labels"}>
        <div className={"label"}>
          <h2>DAYS</h2>
          <h1>{days}</h1>
        </div>
        <div className={"divider"}>
          <h1>:</h1>
        </div>
        <div className={"label"}>
          <h2>HRS</h2>
          <h1>{hours}</h1>
        </div>
        <div className={"divider"}>
          <h1>:</h1>
        </div>
        <div className={"label"}>
          <h2>MIN</h2>
          <h1>{minutes}</h1>
        </div>
        <div className={"divider"}>
          <h1>:</h1>
        </div>
        <div className={"label"}>
          <h2>SEC</h2>
          <h1>{seconds}</h1>
        </div>
      </div>
    </div>
  );
}
