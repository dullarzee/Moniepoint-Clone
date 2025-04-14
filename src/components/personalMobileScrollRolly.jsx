import MobileScrollRollyItem from "./mobileScrollRollyItem";

export default function PersonalMobileScrollRolly() {
    return (
        <>
            <section className="lg:hidden py-15">
                <MobileScrollRollyItem
                    heading="Fill in your details and verify your phone number"
                    count={1}
                >
                    Provide your email and phone number and verify your phone
                    number
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
                    Click on &quot;add money&quot; to find your account details,
                    and top up to start making transfers.
                </MobileScrollRollyItem>
                <MobileScrollRollyItem heading="You're done!" count={4}>
                    Click on the card menu to order a card and get it in 48hrs.
                </MobileScrollRollyItem>
            </section>
        </>
    );
}
