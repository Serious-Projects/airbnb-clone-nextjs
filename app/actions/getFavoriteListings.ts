import { getCurrentUser } from "@/app/actions/getCurrentUser";
import prismadb from "@/app/libs/prismadb";

async function getFavoriteListings() {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) return [];
    const favorites = await prismadb.listing.findMany({
      where: {
        id: {
          in: [...(currentUser.favoriteIds || [])],
        },
      },
    });

    return favorites.map((favorite) => ({
      ...favorite,
      createdAt: favorite.createdAt.toISOString(),
      updatedAt: favorite.updatedAt.toISOString(),
    }));
  } catch (err: any) {
    throw new Error(err);
  }
}

export default getFavoriteListings;
