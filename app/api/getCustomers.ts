import { Customer } from "@/types/Customer";

export const fetchCustomerData = async (): Promise<Customer[]> => {
  try {
    const res = await fetch(
      "https://t2dc4smwcni7pipkoxnywy2voe0pvvue.lambda-url.us-east-2.on.aws/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Add any other headers as needed, e.g. for CORS
        },
      },
    );

    // Ensure the response is OK
    if (!res.ok) {
      throw new Error(`Failed to fetch customer data: ${res.statusText}`);
    }

    // Parse the response data
    const data: { status: string; data: Customer[] } = await res.json();

    // Check if the data has the correct property (e.g., "data" containing an array of customers)
    if (Array.isArray(data.data)) {
      return data.data; // Return the array of customers
    } else {
      console.error("Fetched data is not in the expected format:", data);
      throw new Error("Fetched data is not in the expected format");
    }
  } catch (error) {
    console.error("Error fetching customer data:", error);
    throw error;
  }
};
