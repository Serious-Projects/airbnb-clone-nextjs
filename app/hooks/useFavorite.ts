import useLoginModal from '@/app/hooks/useLoginModal';
import { SafeUser } from '@/app/types';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useCallback, useMemo } from 'react';
import { toast } from 'react-hot-toast';

interface IUseFavorite {
  listingId: string;
  currentUser?: SafeUser | null;
}

function useFavorite({ listingId, currentUser }: IUseFavorite) {
  const router = useRouter();
  const loginModel = useLoginModal();

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || [];
    return list.includes(listingId);
  }, [listingId, currentUser]);

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      if (!currentUser) {
        return loginModel.onOpen();
      }
      try {
        let request;
        if (hasFavorited) {
          request = () => axios.delete(`/api/favorites/${listingId}`);
        } else {
          request = () => axios.post(`/api/favorites/${listingId}`);
        }
        await request();
        router.refresh();
        toast.success('Success');
      } catch (err) {
        toast.error('Something went wrong!');
      }
    },
    [currentUser, hasFavorited, listingId, loginModel, router]
  );

  return { hasFavourited: hasFavorited, toggleFavorite };
}

export default useFavorite;
