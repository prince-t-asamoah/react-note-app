const baseUrl = "https://react-note-app-backend-209e5d.herokuapp.com";

export const getAllNotes = async () => {
  try {
    const response = await fetch(`${baseUrl}/note/all`);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
