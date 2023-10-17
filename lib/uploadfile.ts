export function uploadFiles(file: File, onLoad: (content: string) => void) {
  const reader = new FileReader();
  reader.readAsText(file);
  reader.onload = () => {
    const content = reader.result as string;
    onLoad(content); // wywołaj funkcję callback z zawartością pliku
    console.log("sdsd", content)
  };

  
}

