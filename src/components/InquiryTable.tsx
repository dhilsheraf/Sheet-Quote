type InquiryRows = {
    sNo: number;
    partNo: string;
    qty: number;
}

type InquiryTableProps = {
    data: InquiryRows[];
}

const InquiryTable = ({ data }: InquiryTableProps) => {
    if (data.length === 0) {
        return <div className="text-center mt-6 text-red-500 text-3xl" >No data available !!!</div>
    }
    return (
        <div className="mt-6 ">
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                <table className="w-full border-collapse" >
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-xs font-medium text-gray-500 text-center ">S.No</th>
                            <th className="px-2 py-3 text-xs font-medium text-gray-500 text-center">Part No</th>
                            <th className="px-6 py-3 text-xs font-medium text-gray-500 text-center">Qty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index} className="border-t border-gray-100 hover:bg-gray-50 transition">
                                <td className="px-4 py-3 text-sm text-gray-700 text-center font-medium">{row.sNo}</td>
                                <td className="px-4 py-3 text-sm text-gray-800 font-medium text-center">{row.partNo}</td>
                                <td className="px-4 py-3 text-sm text-gray-800 text-center font-medium">{row.qty}</td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default InquiryTable

