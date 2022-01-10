const Input = ({placeholder, name, type, value, handleChange}) => (
    <input
        placeholder={placeholder}
        type={type}
        step="0.0001"
        value={value}
        onChange={(e) => handleChange(e, name) }
        className="my-2 w-full rounded-lg p-2 outline-none text-sm white-glassmorphism text-white placeholder:text-white placeholder:font-semibold"
    />
)

export default Input