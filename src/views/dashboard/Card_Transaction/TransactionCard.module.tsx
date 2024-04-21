import React from 'react';
import style from './transactionCard.module.css'
import TransactionCard from '../../../ui/dashboard/transaction_card/TransactionCard';

const  CardTransactionSection = () => {
    return(
      <section className={style.transactionSection}>
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
      </section>
    );
  }

export default CardTransactionSection;