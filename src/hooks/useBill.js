import BillContext from '../context/BillContext'
import { useContext } from 'react'

const useBill = () => {
  return ( useContext(BillContext));
}

export default useBill