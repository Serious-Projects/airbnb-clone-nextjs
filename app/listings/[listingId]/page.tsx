import { getCurrentUser } from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListing";
import getReservations from "@/app/actions/getReservations";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import ListingClient from "@/app/listings/[listingId]/ListingClient";

type IParams = {
  listingId?: string;
};

async function ListingPage({ params }: { params: IParams }) {
  const listing = await getListingById(params);
  const currentUser = await getCurrentUser();
  const reservations = await getReservations(params);

  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ListingClient listing={listing} currentUser={currentUser} reservations={reservations} />
    </ClientOnly>
  );
}

export default ListingPage;
