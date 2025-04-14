import BlogsAndArticlesSection from "../components/blogsAndArticlesSection";
import NavBar, { MobileMenu } from "../components/NavBar";
import StepsSection from "../components/stepsSection";
import TestimoniesSection from "../components/testimoniesSection";
import ToolsNeededSection from "../components/toolsNeededSection";
import WhatsMoreSection from "../components/whatsMoreSection";
import proptype from "prop-types";
import AccountOpenerFooter from "../components/accountOpenerFooter";
import FooterSection from "../components/footerSection";
import BusinessHomePageHeader from "../components/businessHomePageHeader";
import BusinessDependSection from "../components/BusinessesDependSection";
import MobileHomePageNavigator from "../components/mobileHomePageNavigator";
import MobileScrollRolly from "../components/mobilescrollRolly";
import { useState } from "react";

BusinessHomePage.propTypes = {
    homePage: proptype.string,
    setHomePage: proptype.func,
};

export default function BusinessHomePage() {
    const [openNav, setOpenNav] = useState(false);

    return (
        <>
            <div>
                <div className="rounded-b-full">
                    <MobileHomePageNavigator />
                    <NavBar setOpenNav={setOpenNav} />
                    {openNav && <MobileMenu setOpenNav={setOpenNav} />}
                    <BusinessHomePageHeader />
                </div>
                <main className="bg-slate-50">
                    <BusinessDependSection />
                    <ToolsNeededSection />
                    <TestimoniesSection />
                    <WhatsMoreSection />
                    <StepsSection />
                    <MobileScrollRolly />
                    <BlogsAndArticlesSection />
                    <AccountOpenerFooter type="business" />
                    <FooterSection />
                </main>
            </div>
        </>
    );
}
