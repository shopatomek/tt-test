import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const content = require("@/lib/datatosend");



export async function GET(request) {
  const email = "email";
  return new Response(JSON.stringify({ message: email }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function POST(request: Request) {
  try {
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
      creator: item.email || null,
    }));

    const createdData = await prisma.tiktok.createMany({
      data: dataToInsert,
    });

    // const userWithTiktoks = await prisma.user.findUnique({
    //   where: {
    //     email: "",
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
