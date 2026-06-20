import { Link } from "react-router";

const CTASection = () => {
    return (<section className="py-28"> <div className="max-w-5xl mx-auto px-6"> <div className="rounded-[40px] bg-slate-900 text-white p-16 text-center"> <h2 className="text-5xl font-black leading-tight">
        Ready to Turn Your Links
        Into Insights? </h2>

        <p className="mt-6 text-xl text-slate-300">
            Join creators, developers, students and businesses
            using LinkHub to grow their audience.
        </p>

        <Link
            to="/register"
            className="inline-block mt-10 rounded-xl bg-white text-slate-900 px-8 py-4 font-semibold hover:scale-105 transition-transform"
        >
            Create Your LinkHub
        </Link>
    </div>
    </div>
    </section>

    );
};

export default CTASection;
