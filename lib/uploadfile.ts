export function uploadFiles(file: File) {
  const reader = new FileReader();
  reader.readAsText(file);
  reader.onload = () => {
    const fileContent = JSON.stringify(reader.result as string); // Przetworz fileContent z reader.result;

    // Wyślij fileContent do serwera Next.js
    fetch('/api/', {
      method: 'POST',
      body: JSON.stringify({ fileContent }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message); // Możesz obsłużyć odpowiedź z serwera
      })
      .catch((error) => {
        console.error(error);
      });
  };
}