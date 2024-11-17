// lib/api.ts
import { Customer } from "@/types/Customer";

export const fetchCustomerData = async (): Promise<Customer[]> => {
  try {
    const res = await fetch("/api/customers"); // Calling the Next.js proxy API

    if (!res.ok) {
      throw new Error(`Failed to fetch customer data: ${res.statusText}`);
    }

    const data: Customer[] = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching customer data:", error);
    throw error;
  }
};
