import Image from "next/image"
import Table from "../table/Table"
import style from './tableGroup.module.css'
import Link from "next/link"
import Button from "../button/Button"
import { deleteUserById } from "@/service/dbService"
import { deleteUserAction } from "@/service/formAction"


type TableGroupProps = {
  thead: string[],
  data: string[][],
  tableName: string, 
}

const TableGroup = ({ data, thead, tableName }: TableGroupProps) => {
  const handleDelete = async (id: string | 'undefined' ) => {
    console.log('Delete User ', id)
    await deleteUserById(id)
  }


  return (
    <Table>
      <thead>
        <tr>
          {thead.map((item, index) => (
            <td key={index}>{item}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} >
            <td><Image src={row[0]} alt="user" width={35} height={35} style={{borderRadius: '50%'}} /></td>
            {row.slice(1, -1).map((cell, cellIndex) => (
            
              row.slice(-2)[0] === cell ? 
                <td key={`${index}-${cellIndex+1}`}>
                  {cell} 
                  <span className={style.status} style={{
                    backgroundColor: cell === 'active' ? 'green' : 'red'
                  }}></span>
                </td>
                :
                <td key={`${index}-${cellIndex+1}`} className={style.cell}>{cell}</td>
            ))}
            <td className={style.action}>
              <Link href={`/dashboard/${tableName}/${row.at(-1)}`} >
                <Button className={style.buttonView}>View</Button>
              </Link>
              <form action={deleteUserAction}>
                <input type="hidden" name="id" value={row.at(-1) as string} />
                <Button type="submit"  className={style.buttonDelete}>Delete</Button>
              </form>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default TableGroup

