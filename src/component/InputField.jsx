export const InputField = ({ label, type, name, value, onChange }) => {
  return (
    <label
      htmlFor={name}
      className="w-[381px] h-[35px] p-2.5 bg-gradient-to-r from-white rounded-[18px] shadow border border-[#363636] justify-center items-center gap-2.5 inline-flex"
    >
      {label}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-[362px] text-center text-gray-800 text-xs font-normal font-['Inter']"
      />
    </label>
  )
}
