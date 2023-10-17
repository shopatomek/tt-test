

// import { PrismaClient } from '@prisma/client';
// import type { NextApiRequest, NextApiResponse } from 'next';


// const prisma = new PrismaClient();

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//     if (req.method === 'POST') {
//         try {
//             const fileContent = req.body;
            
//             if (Array.isArray(fileContent)) {
//                 for (const item of fileContent) {
//                     await createRecord(item);
//                 }
//             } else if (typeof fileContent === "object" && fileContent !== null) {
//                 await createRecord(fileContent);
//             } else {
//                 return res.status(400).json({ error: 'The file does not contain a valid data structure.' });
//             }

//             res.status(200).json({ success: true });
//         } catch (error) {
//             res.status(500).json({ error: error.message });
//         }
//     } else {
//         res.status(405).end(); // Method Not Allowed
//     }
// }

// async function createRecord(item: any) {
//     await prisma.tikTokAccount.create({
//         data: {
//             tiktokId: item.tiktokId,
//             authorId: item.authorId,
//             createTime: item.createTime,
//             diggCount: item.diggCount,
//             playCount: item.playCount,
//             uniqueId: item.uniqueId,
//             nickname: item.nickname,
//             followerCount: item.followerCount,
//             heartCount: item.heartCount,
//             videoCount: item.videoCount,
//             description: item.itdescription,
//             tags: item.tags,
//         },
//     });
// }

// export { handler as GET, handler as POST };
// @ts-ignore
export default (req, res) => {
  if (req.method === 'POST') {
    // Tutaj możesz obsłużyć przesłane dane
    // Następnie możesz zwrócić odpowiedź
    res.status(200).json({ message: 'Dane zostały przesłane poprawnie' });
  } else {
    res.status(405).end(); // Zwracamy kod błędu 405 Method Not Allowed dla innych metod HTTP
  }
};