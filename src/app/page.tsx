// Force dynamic rendering - this MUST be in a Server Component to work
export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { HomePage } from './components/HomePage';

export default function Page() {
  return <HomePage />;
}
