import { useEffect, useState } from "react";

const usernames = [
  "shashank",
  "alex",
  "emma",
  "creator",
  "developer",
];

const LivePreviewSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % usernames.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">
          Your audience needs one link.
        </h2>

        <div className="mt-10 inline-block rounded-2xl bg-white shadow-xl px-8 py-6">
          <p className="text-slate-500">
            Public Profile URL
          </p>

          <h3 className="mt-2 text-3xl font-bold text-blue-600 transition-all">
            linkhub.com/{usernames[index]}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default LivePreviewSection;