export const sampleSql = `SELECT 
  e.id,
  e.name,
  e.department,
  e.salary,
  e.hire_date
FROM employees AS e
WHERE e.salary > 50000
ORDER BY e.salary DESC
LIMIT 10;`;

export const sampleExplanation =
  "This query selects the top 10 employees earning more than $50,000, returning their ID, name, department, salary, and hire date — sorted from highest to lowest salary.";

export type ResultRow = {
  id: number;
  name: string;
  department: string;
  salary: number;
  hire_date: string;
};

export const sampleResults: ResultRow[] = [
  { id: 1, name: "Ava Patel", department: "Engineering", salary: 142000, hire_date: "2021-03-14" },
  { id: 2, name: "Liam Chen", department: "Engineering", salary: 128000, hire_date: "2020-08-02" },
  { id: 3, name: "Noah Garcia", department: "Product", salary: 119500, hire_date: "2022-01-19" },
  { id: 4, name: "Mia Johansson", department: "Design", salary: 108000, hire_date: "2019-11-05" },
  { id: 5, name: "Ethan Wright", department: "Engineering", salary: 102500, hire_date: "2023-04-22" },
  { id: 6, name: "Sofia Rossi", department: "Marketing", salary: 96000, hire_date: "2022-07-11" },
  { id: 7, name: "Kai Nakamura", department: "Product", salary: 91500, hire_date: "2021-09-30" },
  { id: 8, name: "Zara Ahmed", department: "Sales", salary: 87000, hire_date: "2020-02-17" },
  { id: 9, name: "Lucas Müller", department: "Engineering", salary: 82000, hire_date: "2023-10-08" },
  { id: 10, name: "Iris Wong", department: "Design", salary: 78000, hire_date: "2022-12-01" },
];

export const suggestedQueries = [
  "Top 5 students by marks",
  "Employees in IT department",
  "Average salary per department",
  "Monthly revenue by region",
];

export type HistoryItem = {
  id: string;
  prompt: string;
  timestamp: string;
};

export const historyItems: HistoryItem[] = [
  { id: "h1", prompt: "Show all employees with salary above 50000", timestamp: "2 min ago" },
  { id: "h2", prompt: "Average order value by month in 2024", timestamp: "1 hour ago" },
  { id: "h3", prompt: "Top 10 customers by revenue", timestamp: "Yesterday" },
  { id: "h4", prompt: "Products with stock below 20 units", timestamp: "2 days ago" },
];

export const savedItems: HistoryItem[] = [
  { id: "s1", prompt: "Monthly active users last 6 months", timestamp: "Saved Apr 12" },
  { id: "s2", prompt: "Churn rate by subscription plan", timestamp: "Saved Apr 09" },
  { id: "s3", prompt: "Revenue vs target per quarter", timestamp: "Saved Mar 30" },
];

export type SchemaField = { name: string; type: string; pk?: boolean; fk?: boolean };
export type SchemaTable = { name: string; rowCount: number; fields: SchemaField[] };

export const schemaTables: SchemaTable[] = [
  {
    name: "employees",
    rowCount: 1284,
    fields: [
      { name: "id", type: "int", pk: true },
      { name: "name", type: "varchar" },
      { name: "department", type: "varchar" },
      { name: "salary", type: "decimal" },
      { name: "hire_date", type: "date" },
      { name: "manager_id", type: "int", fk: true },
    ],
  },
  {
    name: "departments",
    rowCount: 12,
    fields: [
      { name: "id", type: "int", pk: true },
      { name: "name", type: "varchar" },
      { name: "budget", type: "decimal" },
    ],
  },
  {
    name: "orders",
    rowCount: 48291,
    fields: [
      { name: "id", type: "int", pk: true },
      { name: "customer_id", type: "int", fk: true },
      { name: "total", type: "decimal" },
      { name: "created_at", type: "timestamp" },
    ],
  },
  {
    name: "customers",
    rowCount: 8204,
    fields: [
      { name: "id", type: "int", pk: true },
      { name: "email", type: "varchar" },
      { name: "country", type: "varchar" },
    ],
  },
];
