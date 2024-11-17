// lib/api.ts
import { Customer } from "@/types/Customer";

export const fetchCustomerData = async (): Promise<Customer[]> => {
  try {
    const res = await fetch(
      "/https://t2dc4smwcni7pipkoxnywy2voe0pvvue.lambda-url.us-east-2.on.aws/",
    ); // Calling the Next.js proxy API

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
