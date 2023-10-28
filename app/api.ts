// will give us the full url
export const createURL = (path: string) => {
  return window.location.origin + path;
};

export const AIResponse = async (spooky: string) => {
  const res = await fetch(
    new Request(createURL('/api/spooky/dare'), {
      method: 'GET',
    }),
    { next: { revalidate: 1 }, cache: 'no-store' }
  );

  if (res.ok) {
    const data = await res.json();
    return data.data; // since we are always sending back an object with a data key
  } else {
    window.alert(
      'Spooky ChatGPT is down rn. My B we wish you a good night 👻 ! '
    );
  }
};

export const ScareResponse = async (spooky: string) => {
  const res = await fetch(
    new Request(createURL('/api/spooky/scare'), {
      method: 'POST',
    })
  );

  if (res.ok) {
    const data = await res.json();
    return data.data; // since we are always sending back an object with a data key
  } else {
    window.alert(
      'Spooky ChatGPT is down rn. My B we wish you a good night 👻 ! '
    );
  }
};

export const MysteryResponse = async (spooky: string) => {
  const res = await fetch(
    new Request(createURL('/api/spooky/mystery'), {
      method: 'GET',
      next: { revalidate: 1 },
    }),
    { next: { revalidate: 1 }, cache: 'no-cache' }
  );

  if (res.ok) {
    const data = await res.json();
    return data.data; // since we are always sending back an object with a data key
  } else {
    window.alert(
      'Spooky ChatGPT is down rn. My B we wish you a good night 👻 ! '
    );
  }
};
