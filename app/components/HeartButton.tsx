'use client';

import useFavorite from '@/app/hooks/useFavorite';
import { SafeUser } from '@/app/types';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

type HeartButtonProps = {
  listingId: string;
  currentUser?: SafeUser | null;
};

function HeartButton({ listingId, currentUser }: HeartButtonProps) {
  const { hasFavourited, toggleFavorite } = useFavorite({ listingId, currentUser });

  return (
    <div className="relative hover:opacity-80 transition cursor-pointer" onClick={toggleFavorite}>
      <AiOutlineHeart size={28} className="fill-white absolute -top-[2px] -right-[2px]" />
      <AiFillHeart
        size={24}
        className={`${hasFavourited ? 'fill-rose-500' : 'fill-neutral-500/70'}`}
      />
    </div>
  );
}

export default HeartButton;
