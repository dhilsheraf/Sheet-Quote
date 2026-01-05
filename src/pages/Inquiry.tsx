
import { useState } from 'react';
import InquiryInput from '../components/InquiryInput'
import InquiryTable from '../components/InquiryTable';


type InquiryRow = {
  sNo: number;
  partNo: string;
  qty: number;
}

function parseInquiry(text: string): InquiryRow[] {
  return text
    .trim()
    .split("\n")
    .filter(line => line.trim() !== "")
    .map((line, index) => {
      const parts = line.split("-").filter(Boolean)

      const qty = Number(parts[parts.length - 1]);
      const partNo = parts.slice(0, parts.length - 1).join("-");


      return {
        sNo: index + 1,
        partNo,
        qty
      }
    })
}

const Inquiry = () => {

  const [rows, setRows] = useState<InquiryRow[]>([]);

  const handleChange = (value: string) => {
    const parsed = parseInquiry(value)
    setRows(parsed)
  }

  return (
    <div className="min-h-screen bg-sky-100">
      <div className='max-w-5xl mx-auto px-6 py-8'> 
        <h2>Inquiry page</h2>
        <InquiryInput onChange={handleChange} />
        <br />

        <InquiryTable data={rows} />
      </div>
    </div>

  )
}

export default Inquiry
