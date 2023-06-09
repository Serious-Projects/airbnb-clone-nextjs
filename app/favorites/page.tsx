import { getCurrentUser } from "@/app/actions/getCurrentUser";
import getFavoriteListings from "@/app/actions/getFavoriteListings";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import FavoritesClient from "@/app/favorites/FavoritesClient";

async function FavoritesPage() {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No favorites found"
          subtitle="Looks like you have no favorite lintings yet!"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <FavoritesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
}

export default FavoritesPage;
