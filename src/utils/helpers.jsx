// Format currency
export const formatCurrency = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

// Calculate monthly payment
export const calculateMonthlyPayment = (principal, annualRate, months) => {
  if (annualRate === 0) return principal / months;
  
  const monthlyRate = annualRate / 100 / 12;
  return principal * monthlyRate * Math.pow(1 + monthlyRate, months) / 
         (Math.pow(1 + monthlyRate, months) - 1);
};

// Generate unique ID
export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

// Format date
export const formatDate = (dateString, options = {}) => {
  const defaultOptions = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  };
  
  return new Date(dateString).toLocaleDateString(
    'en-US', 
    { ...defaultOptions, ...options }
  );
};

// Truncate text
export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + '...';
};

// Calculate progress percentage
export const calculateProgress = (completed, total) => {
  if (total === 0) return 0;
  return Math.round((completed / total) * 100);
};

// Get color based on score
export const getScoreColor = (score, max = 100) => {
  const percentage = (score / max) * 100;
  
  if (percentage >= 80) return 'success';
  if (percentage >= 60) return 'primary';
  if (percentage >= 40) return 'warning';
  return 'danger';
};