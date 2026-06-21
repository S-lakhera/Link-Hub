import { TrendingUp, MousePointerClick, Users } from "lucide-react";

const AnalyticsSection = () => {
    return (<section className="py-24 bg-slate-50"> <div className="max-w-7xl mx-auto px-6"> <div className="text-center"> <h2 className="text-5xl font-black">
        Analytics That Matter </h2>

        <p className="mt-4 text-xl text-slate-600">
            Don't just share links. Understand your audience.
        </p>
    </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="animate-float rounded-3xl bg-white p-8 shadow-xl">
                <MousePointerClick size={36} />

                <h3 className="mt-4 text-4xl font-black">
                    25,847
                </h3>

                <p className="mt-2 text-slate-500">
                    Total Clicks
                </p>
            </div>

            <div className="animate-float rounded-3xl bg-white p-8 shadow-xl">
                <Users size={36} />

                <h3 className="mt-4 text-4xl font-black">
                    8,721
                </h3>

                <p className="mt-2 text-slate-500">
                    Visitors
                </p>
            </div>

            <div className="animate-float rounded-3xl bg-white p-8 shadow-xl">
                <TrendingUp size={36} />

                <h3 className="mt-4 text-4xl font-black">
                    38%
                </h3>

                <p className="mt-2 text-slate-500">
                    Engagement Rate
                </p>
            </div>
        </div>

        <div className="mt-12 rounded-3xl bg-white p-8 shadow-xl">
            <div className="flex justify-between items-center">
                <span className="font-semibold">
                    Top Performing Link
                </span>

                <span className="text-green-600 font-bold">
                    +18%
                </span>
            </div>

            <div className="mt-6 h-4 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full w-[78%] bg-slate-900 rounded-full"></div>
            </div>

            <p className="mt-4 text-slate-600">
                Portfolio Website received the highest number of clicks.
            </p>
        </div>
    </div>
    </section>


    );
};

export default AnalyticsSection;
