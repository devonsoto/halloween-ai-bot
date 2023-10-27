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
