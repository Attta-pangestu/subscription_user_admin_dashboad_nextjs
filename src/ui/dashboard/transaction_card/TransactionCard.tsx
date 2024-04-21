import React from 'react'; 
import { MdSupervisedUserCircle } from 'react-icons/md';
import Card from '../../../components/card/Card';
import style from './transaction.module.css';

const TransactionCard = () => {
    return(
      <Card className={style.transactionCard}>
          <MdSupervisedUserCircle size={24}  />
        <div className={style.transactionContent}>
            <h3>Total Users</h3>
            <span>10.534</span>
          <p><span>10%</span> more than last month</p>
        </div>
      </Card>
    );
  }

  export default TransactionCard;