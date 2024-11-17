// pages/api/getCustomers.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { Customer } from '@/types/Customer';
import { fetchCustomerData } from '@/lib/api';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Customer[] | { error: string }>
) {
  try {
    const customers = await fetchCustomerData();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch customer data' });
  }
}
