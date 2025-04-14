import SubSectionInPBS from "./subSectionInPBS";

export default function PersonalBenefitsSection() {
    return (
        <>
            <section>
                <div className="bg-white">
                    <h1 className="pt-[15%] lg:pt-[5%] text-2xl md:text-5xl font-semibold font-red text-primaryBlue text-center">
                        Bank with{" "}
                        <span className="text-primaryBlue2"> Moniepoint</span>.
                    </h1>
                    <p className="font-inter text-primaryBlue text-sm md:text-lg w-[90%] lg:w-[60%] my-[0.8rem] lg:my-[2.5rem] text-center mx-auto mb-[6.5rem]">
                        Enjoy a{" "}
                        <span className="text-primaryBlue2">
                            transfer success rate of 99.9%
                        </span>{" "}
                        and enjoy seamless payment transfers.Need to pay some
                        bills, pay a business or send money to a
                        friend?Moniepoint transfers go through everytime. We
                        mean it.
                    </p>
                    <SubSectionInPBS
                        about="Instant Debit Card"
                        heading="Instant Debit cards that always works"
                        imageSrc="/images/debitCardHero.png"
                        alt="debit card"
                    >
                        If transfers aren&apos;t your jam, we get it. Request a
                        debit card and have it delivered to you within 48 hours.
                        Activate it in minutes, and start using it right away.
                    </SubSectionInPBS>
                    <SubSectionInPBS
                        about="Personal Account"
                        heading="One app for all your banking needs"
                        imageSrc="/images/oneAppHero.png"
                    >
                        Need to manage your money with ease? We know that your
                        money is important to you, and we take that seriously.
                        Manage your money, make payments and bills from your
                        banking app.
                    </SubSectionInPBS>
                    <SubSectionInPBS
                        about="Payment"
                        heading="Seamless transactions that always go through"
                        imageSrc="/public/images/seamLessHero.png"
                    >
                        Enjoy Smooth Money Moves. Transfer funds to loved ones,
                        buy airtime and settle bills effortlessly. At
                        Moniepoint, we keep your financial happiness flowing!
                    </SubSectionInPBS>
                </div>
            </section>
        </>
    );
}
