import { useState, useEffect, useRef } from "react";
import proptype from "prop-types";

PhoneNumberInput.propTypes = {
    phoneNumber: proptype.string,
    setPhoneNumber: proptype.func,
    error: proptype.string,
    setError: proptype.func,
    cc: proptype.obj,
    disabled: proptype.bool,
};

export default function PhoneNumberInput({
    phoneNumber,
    setPhoneNumber,
    error,
    setError,
    cc,
    disabled,
}) {
    const [fetchedData, setFetchedData] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState({
        name: "",
        countryCode: "+234",
        flag: "https://flagcdn.com/ng.svg",
    });
    const [showDropDown, setShowDropDown] = useState(false);
    const countError = useRef(0);

    useEffect(() => {
        async function fetchIt() {
            try {
                const data = await fetch("/data.json");
                const data2 = await data.json();
                setFetchedData(data2);
            } catch (error) {
                console.error("couldnt draw files:", error);
            } finally {
                //console.log(fetchedData);
            }
        }
        fetchIt();
    }, [fetchedData]);

    function handleCountrySwitch(country) {
        let countryName = "";
        fetchedData.map((it) => {
            if (country === it.name) {
                setSelectedCountry({
                    name: "",
                    countryCode: `+${it.callingCodes[0]}`,
                    flag: it.flags.svg,
                });
                cc.current = it.callingCodes[0];
                return;
            }
        });
        if (countryName) console.log(countryName);
    }

    useEffect(() => {
        if (countError.current !== 0)
            if (phoneNumber.length < 10 || isNaN(phoneNumber)) {
                setError("Please enter a valid phone number!");
            } else setError("");
    }, [phoneNumber]);

    const handleChange = (e) => {
        setPhoneNumber(e.target.value);
        countError.current = 1;
    };
    return (
        <>
            <div className="flex border border-gray-500/50 rounded-sm">
                <div
                    onClick={() => setShowDropDown(!showDropDown)}
                    className="relative border-r border-r-gray-500/60 w-[30%]"
                >
                    <div className="flex flex-col md:flex-row hover:bg-slate-100 transition-colors duration-200 justify-center items-center gap-1.5 h-full text-nowrap">
                        <img
                            alt="country flag"
                            className="border border-slate-300 w-6 h-4"
                            src={selectedCountry.flag}
                        ></img>
                        {selectedCountry.countryCode}
                    </div>
                    {showDropDown && (
                        <>
                            <div
                                className="absolute bg-slate-200 w-[300%] h-[15rem] overflow-y-auto 
                        [-ms-scrollbar-track-color:oklch(0.923 0.003 48.717)] [scrollbar-width:thin] rounded-sm z-20"
                            >
                                <ul className="p-3 divide-y divide-y-slate-300/50">
                                    {fetchedData.map((data) => {
                                        return (
                                            <li
                                                onClick={() =>
                                                    handleCountrySwitch(
                                                        data.name
                                                    )
                                                }
                                                key={data["name"]}
                                                className={`hover:bg-primaryBlue2 hover:text-white py-2 text-left text-slate-700 [list-style-image:url('${data.flags.svg}')]`}
                                            >
                                                {data["name"]}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </>
                    )}
                </div>
                <input
                    value={phoneNumber}
                    onChange={handleChange}
                    className="peer w-full h-[4.3rem] focus:outline-primaryBlue2 pl-2"
                    required
                    placeholder="Enter your phone number"
                    disabled={disabled}
                ></input>
            </div>
            <span className="text-red-500 text-sm">{error}</span>

            {showDropDown && (
                <div
                    onClick={() => setShowDropDown(!showDropDown)}
                    className="absolute top-0 left-0 w-[100%] h-[100%] z-10"
                ></div>
            )}
        </>
    );
}
