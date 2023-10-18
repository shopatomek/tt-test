import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export function uploadFiles(file: File, dbReference: any) {
  const reader = new FileReader();

  reader.readAsText(file);
  const fileContent = JSON.stringify(reader.result as string);
  console.log(reader.result);

    
}
