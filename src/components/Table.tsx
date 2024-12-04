import React from 'react'

type Props = {
  columns: { header: string; accessor: string; className?: string }[]
  renderRow: (item: any) => React.ReactNode
  data: any[]
}
const Table = ({ columns, renderRow, data }: Props) => {
  return (
    <table className='w-full mt-4'>
      <thead>
        <tr className='text-left text-gray-500 text-sm'>
          {columns.map((col) => (
            <th key={col.accessor} className={col.className}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map(renderRow)}</tbody>
    </table>
  )
}

export default Table
