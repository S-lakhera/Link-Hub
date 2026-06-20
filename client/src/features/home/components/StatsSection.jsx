const StatsSection = () => {
    return (<section className="py-24 bg-slate-900 text-white"> <div className="max-w-6xl mx-auto px-6"> <div className="grid md:grid-cols-3 gap-10 text-center"> <div> <h3 className="text-6xl font-black">
        1K+ </h3>

        <p className="mt-4 text-slate-300">
            Profiles Created
        </p>
    </div>

        <div>
            <h3 className="text-6xl font-black">
                50K+
            </h3>

            <p className="mt-4 text-slate-300">
                Links Managed
            </p>
        </div>

        <div>
            <h3 className="text-6xl font-black">
                500K+
            </h3>

            <p className="mt-4 text-slate-300">
                Clicks Tracked
            </p>
        </div>
    </div>
    </div>
    </section>


    );
};

export default StatsSection;
