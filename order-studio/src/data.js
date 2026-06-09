export const STATUSES = ['New', 'In Prep', 'In Production', 'Ready', 'Delivered'];

export const STATUS_COLORS = {
  'New': '#e8c547',
  'In Prep': '#f4a261',
  'In Production': '#6a9fd8',
  'Ready': '#52b788',
  'Delivered': '#adb5bd',
};

export const TASKS = [
  'Design / Mockup',
  'Order Supplies',
  'Send Invoice',
  'Payment Received',
  'Production Complete',
  'Quality Check',
];

export function defaultTasks() {
  return Object.fromEntries(TASKS.map((t) => [t, false]));
}
