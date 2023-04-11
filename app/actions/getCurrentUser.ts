import prisma from '@/app/libs/prismadb';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth/next';

export async function getSession() {
	return await getServerSession(authOptions);
}

export async function getCurrentUser() {
	try {
		const session = await getSession();
		// Check if the session exists
		if (!session) return null;
		// Get the current user data from the session and fetch it from the database
		const currentUser = await prisma.user.findUnique({
			where: {
				email: session.user?.email as string,
			},
		});
		// Check if the current user exists
		if (!currentUser) return null;
		// Return the current user
		return {
			...currentUser,
			createdAt: currentUser.createdAt.toISOString(),
			updatedAt: currentUser.updatedAt.toISOString(),
			emailVerified: currentUser.emailVerified?.toISOString() || null,
		};
	} catch (err: unknown) {
		if (err instanceof Error) {
			console.log(err.message);
		}
		return null;
	}
}
