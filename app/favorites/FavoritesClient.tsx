"use client";

import Container from "@/app/components/Container";
import Heading from "@/app/components/Heading";
import ListingCard from "@/app/components/listings/ListingCard";
import { SafeListing, SafeUser } from "@/app/types";

type FavoritesClientProps = {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
};

function FavoritesClient({ listings, currentUser }: FavoritesClientProps) {
  return (
    <Container>
      <Heading title="Favroites" subtitle="List of places you have favorited" />
      <div className="mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {listings.map((listing) => (
          <ListingCard key={listing.id} currentUser={currentUser} data={listing} />
        ))}
      </div>
    </Container>
  );
}

export default FavoritesClient;
