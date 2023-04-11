import { getCurrentUser } from "@/app/actions/getCurrentUser";
import prismadb from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

type IParams = {
  listingId?: string;
};

export async function DELETE({ params }: { params: IParams }) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) return NextResponse.error();

    const { listingId } = params;
    if (!listingId) throw new Error("Invalid property ID");

    const listing = await prismadb.listing.deleteMany({
      where: {
        id: listingId,
        userId: currentUser.id,
      },
    });

    return NextResponse.json(listing);
  } catch (err: any) {
    throw new Error(err);
  }
}
