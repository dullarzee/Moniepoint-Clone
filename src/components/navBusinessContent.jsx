import MobileNavItem from "./mobileNavItems";

export default function NavBusinessContent() {
    return (
        <>
            <div>
                <MobileNavItem heading="Expense Card">
                    Get a secure card for your business expenses.
                </MobileNavItem>
                <MobileNavItem heading="CAC Registration">
                    Easily register your business via our banking dashboard and
                    get CAC-approved in just five days.
                </MobileNavItem>
                <MobileNavItem heading="Bookkeeping" special="coming soon">
                    Manage your business finances with ease and efficiency.
                </MobileNavItem>
            </div>
        </>
    );
}
