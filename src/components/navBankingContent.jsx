import MobileNavItem from "./mobileNavItems";

export default function NavBankingContent() {
    return (
        <>
            <div className="flex flex-col ">
                <MobileNavItem heading="Business Account" src="">
                    Get a free bank account to power your business.
                </MobileNavItem>
                <MobileNavItem heading="USSD" src="">
                    Dial *5573# for easy online banking.
                </MobileNavItem>
            </div>
        </>
    );
}
