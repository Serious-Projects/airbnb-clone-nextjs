import { getCurrentUser } from "@/app/actions/getCurrentUser";
import getListings, { IListingParams } from "@/app/actions/getListings";
import ClientOnly from "@/app/components/ClientOnly";
import Container from "@/app/components/Container";
import EmptyState from "@/app/components/EmptyState";
import ListingCard from "@/app/components/listings/ListingCard";
import { SafeListing } from "@/app/types";

type HomeProps = {
  searchParams: IListingParams;
};

async function Home({ searchParams }: HomeProps) {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div className="pt-24 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {listings.map((listing: SafeListing) => (
            <ListingCard key={listing.id} currentUser={currentUser} data={listing} />
          ))}
        </div>
      </Container>
    </ClientOnly>
  );
}

export default Home;
