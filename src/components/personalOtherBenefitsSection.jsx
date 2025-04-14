import OtherBenefitsItem from "./otherBenefitsItem";

export default function PersonalOtherBenefitsSection() {
    return (
        <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-[1.5rem] bg-slate-50 font-red pt-[10%] p-[2%]">
                <h1 className="text-2xl lg:text-3xl font-semibold text-primaryBlue">
                    Other Benefits
                </h1>
                <span className="text-xl lg:text-2xl text-blue-900 w-[80%]">
                    More Reasons to Bank with Moniepoint
                </span>
            </div>
            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] p-[2%] bg-slate-50">
                <OtherBenefitsItem
                    h1="Advanced Safety Measures"
                    h2="State-of-the-art security"
                >
                    Moniepoint uses up-to-date cybersecurity technology to
                    protect your information and prevent unauthorised use.
                </OtherBenefitsItem>
                <OtherBenefitsItem
                    h1="Insurance"
                    h2="Protection and peace of mind"
                >
                    Your funds are insured for up to N250,000 by the Nigerian
                    Deposit Insurance Corporation.
                </OtherBenefitsItem>
                <OtherBenefitsItem
                    h1="Simple Limit Upgrade"
                    h2="Upgrade your Limits Easily"
                >
                    Reach for the stars! Effortlessly upgrade your transaction
                    limit and explore new financial possibilities.
                </OtherBenefitsItem>
                <OtherBenefitsItem
                    h1="Virtual card"
                    h2="Extra Layer of Security"
                >
                    Stay secure while shopping online with our virtual card
                    feature.Shop confidently knowing your actual card details
                    are protected.
                </OtherBenefitsItem>
                <OtherBenefitsItem
                    h1="99.9% reliability"
                    h2="Say goodbye to downtimes"
                >
                    Pay anywhere with confidence using a bank solution that
                    always never go offline.
                </OtherBenefitsItem>
                <OtherBenefitsItem
                    h1="Anytime, Anywhere"
                    h2="Round the clock support"
                >
                    We are always here to talk. Reach out support team however
                    you need to- by phone, email, in the app, or check out the
                    help center.
                </OtherBenefitsItem>
            </section>
        </>
    );
}
