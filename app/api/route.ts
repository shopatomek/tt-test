import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";

const prisma = new PrismaClient();
const content = require("@/lib/datatosend");

export async function GET(request: Request) {
  return new Response(JSON.stringify({ message: "bsfasfasfsa" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function POST(request: Request) {
  try {
    // Parsuj dane z pliku content
    // @ts-ignore

    const session = await getSession({ req: request });

    try {
      const response = await fetch(
        "http://localhost:3000/api/auth/session",
        {}
      );
      if (!response.ok) {
        throw new Error("Błąd podczas wysyłania sesji do serwera");
      }
      const responseData = await response.json();
      console.log(response);
    } catch (error) {
      console.error("Błąd podczas przetwarzania odpowiedzi JSON:", error);
    }

    if (!session) {
      return new Response("Brak autoryzacji", {
        status: 401,
      });
    }

    const userEmail = session.user?.email;
    const dataToInsert = content.map((item) => ({
      tiktokId: item.tiktokId,
      authorId: item.authorId,
      createTime: item.createTime,
      diggCount: item.diggCount,
      playCount: item.playCount,
      uniqueId: item.uniqueId || null,
      nickname: item.nickname,
      followerCount: item.followerCount,
      heartCount: item.heartCount,
      videoCount: item.videoCount.toString(),
      description: item.itdescription,
      tags: item.tags,
      userEmail: userEmail || null,
    }));

    const createdData = await prisma.tiktok.createMany({
      data: dataToInsert,
    });

    // const userWithTiktoks = await prisma.user.findUnique({
    //   where: {
    //     email: session?.user?.email,
    //   },
    //   include: {
    //     tiktoks: true,
    //   },
    // });

    // Zwróć odpowiedź z utworzonymi rekordami w formacie JSON
    return new Response(JSON.stringify(dataToInsert), {
      status: 201, // Kod odpowiedzi 201 - Created
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    // Zwróć odpowiedź w przypadku błędu
    return new Response("Wystąpił błąd podczas przetwarzania żądania", {
      status: 500, // Kod odpowiedzi 500 - Internal Server Error
    });
  } finally {
    await prisma.$disconnect();
  }
}
