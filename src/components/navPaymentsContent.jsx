import MobileNavItem from "./mobileNavItems";

export default function NavPaymentsContent() {
    return (
        <>
            <div>
                <MobileNavItem heading="POS Terminals">
                    Accept card and transfer payments with the moniepoint POS
                    terminal.
                </MobileNavItem>
                <MobileNavItem heading="Web Payments (Monnify)">
                    Collect web payments with ease using Monnify.
                </MobileNavItem>
            </div>
        </>
    );
}
