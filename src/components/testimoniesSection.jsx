import LeftAndRightButton from "./leftAndRightButton";
import placeHolder from "/images/placeholder.svg";

export default function TestimoniesSection() {
    return (
        <>
            <section className="min-h-[20rem] bg-white font-inter">
                <div className="grid lg:grid-cols-[30%_70%] pt-[5%] p-[2%]">
                    <div className="grid grid-cols-[65%_35%] lg:block">
                        <h1 className="text-[1.3rem] lg:text-4xl font-semibold text-blue-950">
                            Don&apos;t just take our word for it.
                        </h1>
                        <LeftAndRightButton
                            modifier="lg:hidden"
                            bgColor={"bg-slate-50"}
                        />
                        <img
                            className="lg:hidden col-span-2 object-cover mt-4"
                            src={placeHolder}
                        ></img>
                        <p className="col-span-2 mt-[5rem] text-blue-950">
                            I was robbed and found my shop open one fateful
                            morning. I needed some money to cover up for the
                            loss, and my business relationship manager mentioned
                            the moniepoint loan to me. I needed it and they gave
                            me. Moniepoint has been a big help to my Business.
                            Without them, business would not be able to
                            function.
                        </p>
                        <div className="my-7 border border-gray-300 col-span-2"></div>
                        <h2 className="text-2xl font-semibold text-blue-950 col-span-2">
                            Mr Joseph
                        </h2>
                        <h3 className="text-blue-950">Business owner</h3>
                        <LeftAndRightButton
                            modifier="hidden lg:block"
                            bgColor={"bg-slate-50"}
                        />
                    </div>
                    <div className="px-[8%]">
                        <img
                            className="hidden lg:block col-span-2 object-cover aspect-video mt-4"
                            src={placeHolder}
                        ></img>
                    </div>
                </div>
            </section>
        </>
    );
}
