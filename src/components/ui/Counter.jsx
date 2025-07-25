// src/components/ui/Counter.jsx
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Counter({ end, label }) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className="text-center p-4 ">
      <h2 className="text-4xl font-bold text-blue-600">
        {inView ? <CountUp end={end} duration={2} /> : 0}
      </h2>
      <p className="text-sm mt-2">{label}</p>
    </div>
  );
}
