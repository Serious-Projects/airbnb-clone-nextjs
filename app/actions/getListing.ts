import prismadb from "@/app/libs/prismadb";

async function getListingById(params: { listingId?: string }) {
  try {
    const { listingId } = params;
    const listing = await prismadb.listing.findUnique({
      where: {
        id: listingId,
      },
      include: {
        user: true,
      },
    });
    if (!listing) return null;
    return {
      ...listing,
      createdAt: listing.createdAt.toISOString(),
      updatedAt: listing.updatedAt.toISOString(),
      user: {
        ...listing.user,
        createdAt: listing.user.createdAt.toISOString(),
        updatedAt: listing.user.updatedAt.toISOString(),
        emailVerified: listing.user.emailVerified?.toISOString() || null,
      },
    };
  } catch (err: any) {
    throw new Error(err);
  }
}

export default getListingById;
