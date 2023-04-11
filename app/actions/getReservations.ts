import prismadb from "@/app/libs/prismadb";

type IParams = {
  listingId?: string;
  userId?: string;
  authorId?: string;
};

async function getReservations({ listingId, userId, authorId }: IParams) {
  try {
    const query: any = {};
    if (listingId) {
      query.listingId = listingId;
    }
    if (userId) {
      query.userId = userId;
    }
    if (authorId) {
      query.listing = { userId: authorId };
    }

    const reservations = await prismadb.reservation.findMany({
      where: query,
      include: { listing: true },
      orderBy: {
        createdAt: "desc",
      },
    });

    const safeReservations = reservations.map((reservation) => ({
      ...reservation,
      createdAt: reservation.createdAt.toISOString(),
      updatedAt: reservation.updatedAt.toISOString(),
      startDate: reservation.startDate.toISOString(),
      endDate: reservation.endDate.toISOString(),
      listing: {
        ...reservation.listing,
        createdAt: reservation.listing?.createdAt.toISOString(),
      },
    }));

    return safeReservations;
  } catch (err: any) {
    throw new Error(err);
  }
}

export default getReservations;
