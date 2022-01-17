const Input = ({placeholder, name, type, value, id, onChange,handleChange}) => (
    <input
        placeholder={placeholder}
        type={type}
        step="0.0001"
        value={value}
        onChange={(e) => onChange(e, name) }

        name={name}
        id={id}
        className="my-2 w-full rounded-lg p-2 outline-none text-sm md:text-xl lg:text-lg white-glassmorphism text-white placeholder:text-white placeholder:font-semibold"
    />
)

export default Input