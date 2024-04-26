import Image from "next/image"
import Table from "../table/Table"
import style from './tableGroup.module.css'
import Link from "next/link"
import Button from "../button/Button"


type TableGroupProps = {
  thead: string[],
  data: string[][],
}

const TableGroup = ({ data, thead }: TableGroupProps) => {
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
            {row.slice(1).map((cell, cellIndex) => (
              cellIndex === row.slice(1).length - 1 ?  
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
              <Link href="/dashboard/users/edit" >
                <Button className={style.buttonView}>View</Button>
              </Link>
              <form action="">
                  <input type="hidden" name="id" value={index.toString()} />
                  <Button className={style.buttonDelete}>Delete</Button>
              </form>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default TableGroup

