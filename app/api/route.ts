export async function GET(request :Request){
  return new Response ("bsfasfasfsa")
}


  

export async function POST(request :Request){


  
  const body = await request.json()
  console.log(body)

  return new Response (JSON.stringify(body))

   function uploadFiles(file: File) {
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

}
