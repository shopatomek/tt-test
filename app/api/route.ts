import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const content = require("@/lib/datatosend");

export async function GET(request: Request) {
  return new Response("bsfasfasfsa");
}

// export async function POST(request: Request) {
//   try {
//     // Parsuj dane z pliku content
//     const dataToInsert = content;

//     // Zapisz dane w bazie za pomocą Prisma
//     const createdData = await prisma.tiktok.create({
//       data: dataToInsert,
//     });

//     // Zwróć odpowiedź z utworzonym rekordem w formacie JSON
//     return new Response(JSON.stringify(createdData), {
//       status: 201, // Kod odpowiedzi 201 - Created
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   } catch (error) {
//     console.error(error);
//     // Zwróć odpowiedź w przypadku błędu
//     return new Response("Wystąpił błąd podczas przetwarzania żądania", {
//       status: 500, // Kod odpowiedzi 500 - Internal Server Error
//     });
//   } finally {
//     await prisma.$disconnect();
//   }
// }

export async function POST(request: Request) {
  try {
    // Parsuj dane z pliku content

    // const dataToInsert = content.map((item) => ({
    //   data: {
    //     tiktokId: item.tiktokId,
    //     authorId: item.authorId,
    //     createTime: item.createTime,
    //     diggCount: item.diggCount,
    //     playCount: item.playCount,
    //     uniqueId: item.uniqueId || null, // Jeśli uniqueId jest undefined, ustaw na null
    //     nickname: item.nickname,
    //     followerCount: item.followerCount,
    //     heartCount: item.heartCount,
    //     videoCount: item.videoCount,
    //     description: item.itdescription,
    //     tags: item.tags,
    //     name: item.name || null, // Jeśli name jest undefined, ustaw na null
    //     email: item.email || null, // Jeśli email jest undefined, ustaw na null
    //     image: item.image || null, // Jeśli image jest undefined, ustaw na null
    //   },
    // }));

    // // Zapisz dane w bazie za pomocą Prisma
    // const createdData = await prisma.tiktok.createMany({
    //   data: dataToInsert,
    // });

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
      name: null, // Ustawione na null, aby dostosować do modelu
      email: null, // Ustawione na null, aby dostosować do modelu
      image: null, // Ustawione na null, aby dostosować do modelu
    }));

    const createdData = await prisma.tiktok.createMany({
      data: dataToInsert,
    });

    // Zwróć odpowiedź z utworzonymi rekordami w formacie JSON
    return new Response(JSON.stringify(createdData), {
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

// const content = require("@/lib/data");

// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export async function GET(request: Request) {
//   return new Response("bsfasfasfsa");
// }

//   export async function POST(request: Request) {
//     const bla = content;
//     const body = request.json();

//     console.log(bla);
//     return new Response(JSON.stringify(bla));

//   }
