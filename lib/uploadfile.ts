import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export function uploadFiles(file: File, dbReference: any) {
  const reader = new FileReader();

  reader.readAsText(file);
  reader.onload = async () => {
    try {
      const fileContent = JSON.parse(reader.result as string);
      console.log('File content:', reader.result);

      if (Array.isArray(fileContent)) {
        for (const item of fileContent) {
          await prisma.tikTokAccount.create({
            data: {
              tiktokId: item.tiktokId,
              authorId: item.authorId,
              createTime: item.createTime,
              diggCount: item.diggCount,
              playCount: item.playCount,
              uniqueId: item.uniqueId,
              nickname: item.nickname,
              followerCount: item.followerCount,
              heartCount: item.heartCount,
              videoCount: item.videoCount,
              description: item.itdescription,
              tags: item.tags,
            },
          });
        }
        console.log('Data uploaded successfully.');
        console.log('File content:', reader.result);
      } else {
        console.error('The file does not contain a valid array of data.');
      }
    } catch (error) {
      console.error('Error processing file or saving to database:', error);
    }
  };
}
