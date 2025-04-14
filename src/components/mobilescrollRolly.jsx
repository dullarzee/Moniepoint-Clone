import MobileScrollRollyItem from "./mobileScrollRollyItem";

export default function MobileScrollRolly() {
    return (
        <>
            <section className="lg:hidden py-15">
                <MobileScrollRollyItem
                    heading="Fill in your details and verify your phone number"
                    count={1}
                >
                    Provide your email and phone number and verify your phone
                    number with an OTP.
                </MobileScrollRollyItem>
                <MobileScrollRollyItem
                    heading="Get verified with your BVN and KYC details"
                    count={2}
                >
                    Select username and password.Provide your BVN and KYC
                    details and start face and ID verification You can then
                    provide your business name and set up a PIN for managing
                    your account.
                </MobileScrollRollyItem>
                <MobileScrollRollyItem
                    heading="Fund your account to start transfers"
                    count={3}
                >
                    top up to start making transfers
                </MobileScrollRollyItem>
                <MobileScrollRollyItem
                    heading="Access your account dashboard and apply for an expense card."
                    count={4}
                >
                    Login to your business dashboard and click on the Card menu
                    to get an expense card.
                </MobileScrollRollyItem>
            </section>
        </>
    );
}
