import proptype from "prop-types";

UserNameInput.propTypes = {
    userName: proptype.string,
    setUserName: proptype.func,
    error: proptype.string,
    setError: proptype.func,
};
export default function UserNameInput({ userName, setUserName }) {
    function handleChange(e) {
        setUserName(e.target.value);
    }
    return (
        <>
            <div>
                <input
                    value={userName}
                    onChange={handleChange}
                    className="w-full h-[4.3rem] outline outline-gray-500/50 rounded-sm focus:outline-2 focus:outline-primaryBlue2 pl-2"
                    placeholder="username"
                    required
                ></input>
            </div>
        </>
    );
}
