export function uploadFiles (file: File){

  const reader = new FileReader();
  reader.readAsText(file);
  reader.onload = () => {
    const fileContent = reader.result;
    // Zrób co chcesz z zawartością pliku, na przykład zapisz ją w określonej ścieżce.
    console.log(fileContent);
  };
}

// 