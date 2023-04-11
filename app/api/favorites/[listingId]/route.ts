import { getCurrentUser } from '@/app/actions/getCurrentUser';
import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

interface IParams {
  listingId?: string;
}

export async function POST(req: Request, { params }: { params: IParams }) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.error();
    }

    const { listingId } = params;
    if (!listingId) {
      throw new Error('Invalid Id');
    }

    let favouriteIds = [...(currentUser.favoriteIds || [])];
    favouriteIds.push(listingId);

    const user = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        favoriteIds: favouriteIds,
      },
    });

    return NextResponse.json(user);
  } catch (err) {}
}

export async function DELETE(req: Request, { params }: { params: IParams }) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.error();
    }

    const { listingId } = params;
    if (!listingId) {
      throw new Error('Invalid Id');
    }

    let favouriteIds = [...(currentUser.favoriteIds || [])];
    favouriteIds = favouriteIds.filter((id) => id !== listingId);

    const user = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        favoriteIds: favouriteIds,
      },
    });

    return NextResponse.json(user);
  } catch (err) {}
}
