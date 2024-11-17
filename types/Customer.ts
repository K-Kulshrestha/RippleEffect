export const fetchCustomerData = async (): Promise<void> => {
  try {
    console.log("Fetching customer data...");

    const res = await fetch(
      "https://t2dc4smwcni7pipkoxnywy2voe0pvvue.lambda-url.us-east-2.on.aws/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    console.log("Response status:", res.status);

    if (!res.ok) {
      console.error("Failed response:", await res.text());
      throw new Error(`Failed to fetch customer data: ${res.statusText}`);
    }

    // Log the raw response JSON
    const data = await res.json();

    console.log("Raw response data:", JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error fetching customer data:", error);
    throw error;
  }
};
