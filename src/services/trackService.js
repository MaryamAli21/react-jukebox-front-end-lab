
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;


const index = async () => {
    try {
      const res = await fetch(BASE_URL);
      return res.json();
    } catch (err) {
      console.log(err);
    }
  };

  const create = async (formData) => {
    try {
      const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      return res.json();
    } catch (err) {
      console.log(err);
    }
  };

  

const updateTrack = async (formData, TrackId) => {
  try {
    const res = await fetch(`${BASE_URL}/${TrackId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};


const deleteTrack = async (TrackId) => {
  try {
    const res = await fetch(`${BASE_URL}/${TrackId}`, {
      method: 'DELETE',
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
  
  export { index ,create,updateTrack,deleteTrack };