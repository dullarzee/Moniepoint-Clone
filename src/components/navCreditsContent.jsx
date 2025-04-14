import MobileNavItem from "./mobileNavItems";

export default function NavCreditsContent() {
    return (
        <>
            <div className="flex flex-col ">
                <MobileNavItem heading="Working Capital Loans" src="">
                    Flexible loans that help your business grow.
                </MobileNavItem>
                <MobileNavItem heading="Overdraft" special="coming soon" src="">
                    Keep your business going, even when money is low.
                </MobileNavItem>
                <MobileNavItem
                    heading="Salary Advance"
                    special="coming soon"
                    src=""
                >
                    Provide salary advance for your employees.
                </MobileNavItem>
            </div>
        </>
    );
}
