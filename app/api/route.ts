import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function handleUpload(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { fileContent } = req.body;

      // Zapisz fileContent do bazy danych za pomocą Prisma
      const data = JSON.parse(fileContent);
      await prisma.tikTokAccount.createMany({ data });

      res.status(200).json({ message: 'Upload successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Upload failed' });
    }
  } else if (req.method === 'GET') {
    res.status(200).json({ message: 'GET request successful' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

export async function handleGet(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Obsługa zapytania GET
}

export async function handlePost(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Obsługa zapytania POST
}

// Eksportuj nazwane eksporty dla każdej metody HTTP
export default {
  handleUpload,
  handleGet,
  handlePost,
};