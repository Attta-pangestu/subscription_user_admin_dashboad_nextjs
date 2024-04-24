import { TransactionData } from "@/types/transactionType";


type LatestTransaction = {
  name: string;
  userImage: string;
  status: string;
  date: string;
  amount: string;
}


export const latestTransactionData : TransactionData[] = [
    {
      name: 'Shayna',
      userImage: 'none', 
      status: 'Success',
      date: '14-02-2024',
      amount: '$3.200', 
    }, 
    {
      name: 'Florida',
      userImage: 'none', 
      status: 'Failed',
      date: '05-04-2024',
      amount: '$1.900', 
    }, 
    {
      name: 'Lyric',
      userImage: 'none', 
      status: 'Success',
      date: '22-03-2024',
      amount: '$5.340', 
    }, 
    {
      name: 'Glen',
      userImage: 'none', 
      status: 'Processing',
      date: '16-03-2024',
      amount: '$2.500', 
    }, 
    {
      name: 'Shad',
      userImage: 'none', 
      status: 'Failed',
      date: '02-03-2024',
      amount: '$1.000', 
    }, 
  ]