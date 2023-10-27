// will give us the full url
export const createURL = (path: string) => {
  return window.location.origin + path;
};

export const AIResponse = async (spooky: string) => {
  const res = await fetch(
    new Request(createURL('/api/spooky/dare'), {
      method: 'GET',
    })
  );

  if (res.ok) {
    const data = await res.json();
    return data.data; // since we are always sending back an object with a data key
  }
};

export const ScareResponse = async (spooky: string) => {
  console.log('scare');
  const res = await fetch(
    new Request(createURL('/api/spooky/scare'), {
      method: 'POST',
    })
  );

  if (res.ok) {
    const data = await res.json();
    return data.data; // since we are always sending back an object with a data key
  }
};
