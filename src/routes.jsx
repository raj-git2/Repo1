import React from 'react';
import OnboardingScreen from './screens/OnboardingScreen';
import CourseEnrollmentScreen from './screens/CourseEnrollmentScreen';
import LearningEngagementScreen from './screens/LearningEngagementScreen';
import TransactionDataScreen from './screens/TransactionDataScreen';
import CreditScoreScreen from './screens/CreditScoreScreen';
import LoanApplicationScreen from './screens/LoanApplicationScreen';
import LoanStatusScreen from './screens/LoanStatusScreen';
import BusinessUpskillingScreen from './screens/BusinessUpskillingScreen';
import LoanRepaymentScreen from './screens/LoanRepaymentScreen';
import FeedbackScreen from './screens/FeedbackScreen';

const routes = [
  { path: '/', element: <OnboardingScreen /> },
  { path: '/courses', element: <CourseEnrollmentScreen /> },
  { path: '/learn/:courseId', element: <LearningEngagementScreen /> },
  { path: '/connect-finances', element: <TransactionDataScreen /> },
  { path: '/credit-score', element: <CreditScoreScreen /> },
  { path: '/apply-loan', element: <LoanApplicationScreen /> },
  { path: '/loan-status', element: <LoanStatusScreen /> },
  { path: '/business-growth', element: <BusinessUpskillingScreen /> },
  { path: '/repay-loan', element: <LoanRepaymentScreen /> },
  { path: '/feedback', element: <FeedbackScreen /> },
];

export default routes;