import NavBar, { MobileMenu } from "../components/NavBar";
import PersonalHomePageHeader from "../components/personalHomePageHeader";
import PersonalBenefitsSection from "../components/personalBenefitsSection";
import PersonalOtherBenefitsSection from "../components/personalOtherBenefitsSection";
import PersonalStepsSection from "../components/personalStepsSection";
import FaqSection from "../components/faqSection";
import BlogAndArticlesSection from "../components/blogsAndArticlesSection";
import proptype from "prop-types";
import FaqItem from "../components/faqItem";
import AccountOpenerFooter from "../components/accountOpenerFooter";
import FooterSection from "../components/footerSection";
import MobileHomePageNavigator from "../components/mobileHomePageNavigator";
import PersonalMobileScrollRolly from "../components/personalMobileScrollRolly";
import { useState } from "react";

PersonalHomePage.propTypes = {
    homePage: proptype.string,
    setHomePage: proptype.func,
};

export default function PersonalHomePage() {
    const [openNav, setOpenNav] = useState(false);

    return (
        <>
            <div>
                <MobileHomePageNavigator />
                <NavBar setOpenNav={setOpenNav} />
                {openNav && <MobileMenu setOpenNav={setOpenNav} />}
                <PersonalHomePageHeader />
                <PersonalBenefitsSection />
                <PersonalOtherBenefitsSection />
                <PersonalStepsSection />
                <PersonalMobileScrollRolly />
                <BlogAndArticlesSection />
                <FaqSection>
                    <FaqItem question="What is personal Banking">
                        Personal banking refers to financial services and
                        products offered to individuals by a bank, including
                        savings accounts, loans, and other services tailored for
                        personal financial management.
                    </FaqItem>
                    <FaqItem question="What documents do i need to open a Moniepoint Microfinance Bank account?">
                        To open an account, you only need a valid Nigerian phone
                        number, a functional email address and your BVN. These
                        will give you access to a functional bank account on KYC
                        Level 1. Click here to learn more about the KYC levels.
                    </FaqItem>
                    <FaqItem question="is there a fee for opening an account?">
                        No, there is no fee for opening or maintaining an
                        account with moniepoint.
                    </FaqItem>
                    <FaqItem question="Is Moniepoint safe?">
                        Yes! At Moniepoint, we take security seriously by
                        implementing robust security measures to protect your
                        financial information and transactions. We are also
                        regulated by CBN and insured by NDIC.
                    </FaqItem>
                    <FaqItem question="can a personal bank account be used for business?">
                        We recommend that you have a separate personal bank
                        account and business account to keep track of your
                        finances properly.
                    </FaqItem>
                    <FaqItem question="How many personal bank account can i have?">
                        You can have more than one personal bank account
                        depending on your financial goal.
                    </FaqItem>
                    <FaqItem question="How do i access my account?">
                        You can access your Moniepoint Personal Bank account
                        through the mobile app. Click here to download the app.
                    </FaqItem>
                </FaqSection>
                <AccountOpenerFooter type="personal" />
                <FooterSection />
            </div>
        </>
    );
}
