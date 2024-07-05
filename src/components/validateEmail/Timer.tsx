import { useEffect, useRef, useState } from 'react';

function Timer() {
  const [min, setMin] = useState<number>(3);
  const [sec, setSec] = useState<number>(0);
  const time = useRef(180);
  const timerId = useRef<NodeJS.Timeout>();

  useEffect(() => {
    timerId.current = setInterval(() => {
      setMin(~~(time.current / 60));
      setSec(time.current % 60);
      time.current -= 1;
      if (time.current < 0) clearInterval(timerId.current);
    }, 1000);

    return () => clearInterval(timerId.current);
  }, []);
  return sec < 10 ? (
    <div className="text-[10px] text-gray-400 font-bold">
      0{min}:0{sec}
    </div>
  ) : (
    <div className="text-[10px] text-gray-400 font-bold">
      0{min}:{sec}
    </div>
  );
}
export default Timer;
