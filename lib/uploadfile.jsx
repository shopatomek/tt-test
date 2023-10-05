// import uploadFile from "../app/api/auth/[...nextauth]/upload";

// async function uploadFiles() {
//   // Przygotuj plik do przesłania, np. odczytaj go z dysku
//   const fileBuffer = fs.readFileSync("path/to/your/file.js");

//   // Wywołaj funkcję uploadującą plik
//   const response = await uploadFile({
//     body: {
//       file: {
//         buffer: fileBuffer,
//         originalname: "file.js", // Oryginalna nazwa pliku
//       },
//     },
//   });

//   if (response.status === 200) {
//     console.log("Plik został przesłany pomyślnie.");
//   } else {
//     console.error("Wystąpił błąd podczas przesyłania pliku.");
//   }
// }

// export default uploadFiles;
