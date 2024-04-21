import React from 'react';
import style from './tableTransaction.module.css'
import { latestTransactionData } from '../../../data/transactionData';
import Image from 'next/image';

const TableTransactionSection = () => {
    const statusStyledClass = (status: string) => {
      switch(status) {
        case 'Success':
          return style.success;
        case 'Failed':
          return style.failed;
        case 'Processing':
          return style.processing;
      }
    }
    return (
      <div className={style.transactionTable}>
          <h2>Latest Transaction</h2>
          <table>
            <thead>
              <tr>
                <td>User</td>
                <td>Name</td>
                <td>Status</td>
                <td>Date</td>
                <td>Amount</td>
              </tr>
            </thead>
            <tbody>
              {latestTransactionData.map((data, index) => (
                <tr key={index}>
                  <td> <Image src={data.userImage === 'none' ? '/images/noavatar.png' : data.userImage} alt="user" width={35} height={35} style={{borderRadius: '50%'}} /> </td>
                  <td>{data.name}</td>
                  <td >
                  <span className={`${style.status} ${statusStyledClass(data.status)} `}>
                      {data.status}
                  </span>
  
                  </td>
                  <td>{data.date}</td>
                  <td>{data.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    )
  }

export default TableTransactionSection;