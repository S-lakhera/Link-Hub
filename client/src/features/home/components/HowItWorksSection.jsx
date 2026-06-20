import { UserPlus, Link, BarChart3 } from "lucide-react";

const steps = [
    {
        icon: UserPlus,
        title: "Create Profile",
        description:
            "Sign up and claim your unique username.",
    },
    {
        icon: Link,
        title: "Add Your Links",
        description:
            "Add social media, portfolio, business and important links.",
    },
    {
        icon: BarChart3,
        title: "Track Performance",
        description:
            "Watch your analytics and understand your audience.",
    },
];

const HowItWorksSection = () => {
    return (<section className="py-24"> <div className="max-w-6xl mx-auto px-6"> <div className="text-center"> <h2 className="text-5xl font-black">
        How It Works </h2> </div>

        <div className="mt-20 grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                    <div
                        key={step.title}
                        className="relative text-center"
                    >
                        <div className="mx-auto w-20 h-20 rounded-full bg-slate-900 text-white flex items-center justify-center">
                            <Icon size={30} />
                        </div>

                        <div className="mt-4 text-sm font-bold text-slate-400">
                            STEP {index + 1}
                        </div>

                        <h3 className="mt-4 text-2xl font-bold">
                            {step.title}
                        </h3>

                        <p className="mt-4 text-slate-600">
                            {step.description}
                        </p>
                    </div>
                );
            })}
        </div>
    </div>
    </section>

    );
};

export default HowItWorksSection;
