import proptype from "prop-types";

EmailInput.propTypes = {
    email: proptype.string,
    setEmail: proptype.func,
    error: proptype.string,
    setError: proptype.func,
};

export default function EmailInput({ email, setEmail, error, setError }) {
    return (
        <>
            <div>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    required
                    className="pl-2 h-16 w-full outline-2 outline-gray-300 rounded-md focus:outline-primaryBlue2"
                    placeholder="enter email address"
                />
            </div>
        </>
    );
}
