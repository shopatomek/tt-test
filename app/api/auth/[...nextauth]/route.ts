import { PrismaClient } from "@prisma/client";
import OAuthProfile from "next-auth";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const prisma = new PrismaClient();

export const handler = NextAuth({
  debug: true,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const existingUser = await prisma.user.findUnique({
        where: { email: user.email },
      });
      if (existingUser) {
        await prisma.user.update({
          where: { id: existingUser.id },
          data: {
            name: user.name,
            image: user.image,
            updatedAt: new Date(),
          },
        });
      } else {
        await prisma.user.create({
          data: {
            name: user.name,
            email: user.email,
            image: user.image,
            updatedAt: new Date(),
          },
        });
      }

      return user;
    },
  },
});

export { handler as GET, handler as POST };

// https://next-auth.js.org/configuration/callbacks
export const data = OAuthProfile({
  profile: (profile: any) => {
    return {
      id: profile.sub,
      name: profile.name,
      email: profile.email,
    };
  },
});
