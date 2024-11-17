// lib/api.ts
import { Customer } from '@/types/Customer';

export const fetchCustomerData = async (): Promise<Customer[]> => {
  const res = await fetch('/api/getCustomers');
  if (!res.ok) {
    throw new Error('Failed to fetch customer data');
  }
  const data: Customer[] = await res.json();
  return data;
};
