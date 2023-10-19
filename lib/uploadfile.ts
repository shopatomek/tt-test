export function uploadFiles(file: File) {
  const reader = new FileReader();
  reader.readAsText(file);
  reader.onload = () => {
    const fileContent = JSON.parse(reader.result as string); // Przetworz fileContent z reader.result;
    console.log(fileContent)

    const sendData = async()=>{
      await fetch('/api/',{
        method: "POST",
        body: JSON.stringify(fileContent),
      }
      )
    }
    sendData();
  }
}