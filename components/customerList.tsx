"use client";
// components/CustomerList.tsx
import { useEffect, useState } from "react";

import { Customer } from "@/types/Customer";
import { fetchCustomerData } from "@/lib/api";

const CustomerList: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCustomers = async () => {
      try {
        const data = await fetchCustomerData();

        setCustomers(data);
      } catch (err) {
        setError("Error fetching customer data");
      } finally {
        setLoading(false);
      }
    };

    getCustomers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Customer List</h2>
      {customers.map((customer) => (
        <div key={customer.customerID}>{customer.name_email_similarity}</div>
      ))}
    </div>
  );
};

export default CustomerList;
