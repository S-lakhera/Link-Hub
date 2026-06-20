import { Link2, Palette, BarChart3 } from "lucide-react";

const features = [
    {
        icon: Link2,
        title: "Unlimited Links",
        description:
            "Add all your important links in one place and share them using a single URL.",
    },
    {
        icon: Palette,
        title: "Custom Public Profile",
        description:
            "Create a personalized profile page that represents your brand and identity.",
    },
    {
        icon: BarChart3,
        title: "Powerful Analytics",
        description:
            "Understand what your audience clicks and optimize your content strategy.",
    },
];

const FeaturesSection = () => {
    return (<section className="py-24"> <div className="max-w-7xl mx-auto px-6"> <div className="text-center"> <h2 className="text-5xl font-black">
        Everything You Need </h2>

        <p className="mt-4 text-xl text-slate-600">
            Powerful tools to help creators, developers and businesses
            share and grow.
        </p>
    </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
            {features.map((feature) => {
                const Icon = feature.icon;

                return (
                    <div
                        key={feature.title}
                        className="group rounded-3xl border p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                            <Icon size={28} />
                        </div>

                        <h3 className="mt-6 text-2xl font-bold">
                            {feature.title}
                        </h3>

                        <p className="mt-4 text-slate-600">
                            {feature.description}
                        </p>
                    </div>
                );
            })}
        </div>
    </div>
    </section>

    );
};

export default FeaturesSection;
