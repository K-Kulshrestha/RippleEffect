// types/customer.ts
export interface Customer {
    customerID: number;
    income: number;
    name_email_similarity: number;
    prev_address_months_count: number;
    current_address_months_count: number;
    customer_age: number;
    days_since_request: number;
    intended_balcon_amount: number;
    payment_type: string;
    zip_count_4w: number;
    velocity_6h: number;
    velocity_24h: number;
    velocity_4w: number;
    bank_branch_count_8w: number;
    date_of_birth_distinct_emails_4w: number;
    employment_status: string;
    credit_risk_score: number;
    email_is_free: boolean;
    housing_status: string;
    phone_home_valid: boolean;
    phone_mobile_valid: boolean;
    bank_months_count: number;
    has_other_cards: boolean;
    proposed_credit_limit: number;
    foreign_request: boolean;
    source: string;
    session_length_in_minutes: number;
    device_os: string;
    keep_alive_session: boolean;
    device_distinct_emails_8w: number;
    device_fraud_count: number;
    month: number;
    fraud_bool: boolean;
  }
  