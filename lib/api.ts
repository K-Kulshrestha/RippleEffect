// lib/api.ts
import { Customer } from "@/types/Customer";

export const fetchCustomerData = async (): Promise<Customer[]> => {
  try {
    const res = await fetch(
      "https://t2dc4smwcni7pipkoxnywy2voe0pvvue.lambda-url.us-east-2.on.aws/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Adding custom headers for CORS if required
          "Access-Control-Allow-Origin": "*", // Or specify your origin if necessary
        },
      },
    );

    // Check if the response status is not OK (i.e., not in the 2xx range)
    if (!res.ok) {
      throw new Error(`Failed to fetch customer data: ${res.statusText}`);
    }

    // Parse the response data as JSON
    const data: Customer[] = await res.json();

    return data; // Return the customer data
  } catch (error) {
    console.error("Error fetching customer data:", error);
    throw error; // Re-throw the error for further handling if needed
  }
};
