'use client';

import Button from '@/app/components/Button';
import Heading from '@/app/components/Heading';
import { useRouter } from 'next/navigation';

type EmptyStateProps = {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
};

function EmptyState({
  title = 'No exact matches',
  subtitle = 'Try changing or removing some of your filters',
  showReset,
}: EmptyStateProps) {
  const router = useRouter();

  return (
    <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
      <Heading title={title} subtitle={subtitle} center />
      <div className="w-48 mt-4">
        {showReset && (
          <Button label="Remove all filters" onClick={() => router.push('/')} outline />
        )}
      </div>
    </div>
  );
}

export default EmptyState;
