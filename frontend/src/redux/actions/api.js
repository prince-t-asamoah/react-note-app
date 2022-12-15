const baseUrl = "https://react-note-app-backend-209e5d.herokuapp.com";

export const getAllNotes = async () => {
  try {
    const response = await fetch(`${baseUrl}/note/all`);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const createNote = async(note) => {
  try {
    const response = await fetch(`${baseUrl}/note/new`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note)
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}