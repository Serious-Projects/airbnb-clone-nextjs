import { getCurrentUser } from "@/app/actions/getCurrentUser";
import prismadb from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

interface IParams {
  reservationId?: string;
}

export async function DELETE(req: Request, { params }: { params: IParams }) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) return NextResponse.error();

    const { reservationId } = params;
    if (!reservationId) {
      throw new Error("Invalid reservation ID");
    }

    const reservation = await prismadb.reservation.deleteMany({
      where: {
        id: reservationId,
        OR: [{ userId: currentUser.id }, { listing: { userId: currentUser.id } }],
      },
    });

    return NextResponse.json(reservation);
  } catch (err) {}
}
