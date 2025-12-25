type InquiryInputProps = { 
    onChange: (value: string) => void;
 }


const InquiryInput = ({onChange} : InquiryInputProps ) => {
  return (
    <div className="mt-6">
        <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-700"> Paste Inquiry </label>

      <textarea className="
      w-full 
      rounded-xl 
      border border-gray-300
        bg-white 
        px-4 py-3 
        text-sm text-gray-800
        placeholder:text-gray-400
        focus:outline-none
        focus:ring-2 focus:ring-gray-200
        focus:border-gray-300
        transition
        "  rows={6} placeholder='49343-24342-5 Enter in this format'
      onChange={(e) => onChange(e.target.value)}
      style={{width: '100%' , padding: '10px' }}
        />
          <p className="mt-2 text-xs text-gray-500">
        Format: part-number-quantity (one per line)
      </p>
    </div>
  )
}

export default InquiryInput
