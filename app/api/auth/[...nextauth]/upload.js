const multer = require("multer");
const { join } = require("path");

// Konfiguracja multer do przechowywania plików w folderze 'uploads'
const storage = multer.diskStorage({
  destination: join(process.cwd(), "uploads"), // Ścieżka do folderu z przesłanymi plikami
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Zachowaj oryginalną nazwę pliku
  },
});

const upload = multer({ storage });

module.exports = upload.single("file")(async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Brak przesłanego pliku." });
    }

    // Tutaj możesz wykonać operacje na przesłanym pliku, np. zapis do bazy danych, przetwarzanie itp.

    res.status(200).json({ message: "Plik został przesłany pomyślnie." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Wystąpił błąd podczas przesyłania pliku." });
  }
});
