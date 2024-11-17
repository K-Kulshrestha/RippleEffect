"use client"
import React, { useEffect, useState } from "react";
import { Customer } from "@/types/Customer";
import { fetchCustomerData } from "@/lib/api";

const CustomerList = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCustomerData = async () => {
      try {
        const data = await fetchCustomerData();
        setCustomers(data); // Set the fetched customer data to state
      } catch (err) {
        setError("Error fetching customer data");
      }
    };

    getCustomerData();
  }, []);

  // Render the customer data
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ul>
      {customers.map((customer) => (
        <li key={customer.customer_id}>{customer.name_email_similarity}</li>
      ))}
    </ul>
  );
};

export default CustomerList;
