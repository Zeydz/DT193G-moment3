const VITE_API_URL = import.meta.env.VITE_API_URL;

/* Hämta låtar */
export async function fetchTrack() {
  const response = await fetch(VITE_API_URL);
  if (!response.ok) {
    throw new Error("Något gick fel vid hämtning av låtar");
  }
  return await response.json();
}

/* Hämta en specifik låt med ID */
export async function fetchTrackById(id) {
  const response = await fetch(VITE_API_URL + `/${id}`);
  if (!response.ok) {
    throw new Error("Något gick fel vid hämtning av låt");
  }
  return response.json();
}

