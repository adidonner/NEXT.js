// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.

export type User = {
  clientType: 'Admin' | 'Company' | 'Customer'; // התאמה של enum ל-union type
  id: string; // יש לוודא שה-id נשלח כ-string מה-Java Backend
  email: string;
  password: string; // ה-password לא תמיד נחוץ ב-frontend ולכן אפשר להפוך אותו לאופציונלי
  name: string;
  logoImage?: string; // יכול להיות אופציונלי אם לא תמיד קיים
};
export type Admin = {
  email: string;
  password: string;
}
export type Company = {
  id: string;
  name: string;
  email: string;
  password: string;
  image_url: string;
  coupons?: Coupon[]; // רשימת קופונים שהחברה מציעה
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  password: string;
  image_url: string;
};
export type Coupon = {
  id: string;   // companyId חייב להיות אחד מה-id-ים הקיימים ב-Company
  companyId: Company['id'];
  category: 'SPORTS' | 'CLOTHING' | 'ELECTRICITY' | 'CAMPING' | 'FOOD' | 'RESTAURANTS' | 'VACATIONS'; // התאמה של enum ל-union type
  title: string;
  description: string;
  // שדות תאריך
  startDate: string; // startDate יאוחסן כמחרוזת בפורמט "yyyy-MM-dd"
  endDate: string;   // endDate יאוחסן כמחרוזת בפורמט "yyyy-MM-dd"

  // שדות שעה, אם תרצה לשמור שעה ספציפית בנפרד (לדוגמה, "HH:mm")
  // אם אתה מתכוון ל-LocalDate ו-LocalTime כמו ב-Java,
  // ב-TypeScript הם בדרך כלל יהיו מחרוזות בפורמט ISO 8601 עבור תאריכים,
  // או מחרוזות ייעודיות עבור שעות בלבד.
  startTime?: string; // לדוגמה, "HH:mm" (אופציונלי)
  endTime?: string;   // לדוגמה, "HH:mm" (אופציונלי)

  // כמות הקופונים הזמינים (מלאי)
  availableAmount: number; // השם "amount" שונה ל-"availableAmount" לבהירות
  price: number;  // מחיר הקופון בשקלים (יכול לכלול אגורות)
};

// הגדרת טיפוס עבור רכישת קופון
export type CustomerCouponPurchase = {
  couponId: string; // ה-ID של הקופון שנרכש
  customerId: string; // ה-ID של הלקוח שרכש את הקופון
  purchaseDate: string; // תאריך הרכישה (פורמט "yyyy-MM-dd HH:mm:ss" או ISO String)
  // אולי גם מחיר ששולם, כמות שנרכשה באותה טרנזקציה, וכו'
};

export interface Revenue {
  month: string;
  revenue: number;
}


// export type Invoice = {
//   id: string;
//   customer_id: string;
//   amount: number;
//   date: string;
//   // In TypeScript, this is called a string union type.
//   // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
//   status: 'pending' | 'paid';
// };

// export type Revenue = {
//   month: string;
//   revenue: number;
// };

// export type LatestInvoice = {
//   id: string;
//   name: string;
//   image_url: string;
//   email: string;
//   amount: string;
// };

// // The database returns a number for amount, but we later format it to a string with the formatCurrency function
// export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
//   amount: number;
// };

// export type InvoicesTable = {
//   id: string;
//   customer_id: string;
//   name: string;
//   email: string;
//   image_url: string;
//   date: string;
//   amount: number;
//   status: 'pending' | 'paid';
// };

// export type CustomersTableType = {
//   id: string;
//   name: string;
//   email: string;
//   image_url: string;
//   total_invoices: number;
//   total_pending: number;
//   total_paid: number;
// };

// export type FormattedCustomersTable = {
//   id: string;
//   name: string;
//   email: string;
//   image_url: string;
//   total_invoices: number;
//   total_pending: string;
//   total_paid: string;
// };

export type CustomerField = {
  id: string;
  name: string;
};

// export type InvoiceForm = {
//   id: string;
//   customer_id: string;
//   amount: number;
//   status: 'pending' | 'paid';
// };
