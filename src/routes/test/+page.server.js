export const load = async (serverLoadEvent) => {
  console.log("running from +page.server.js")
  const { fetch } = serverLoadEvent;
  const title = 'This is a fuckin title';
  const response = await fetch('/api/bark');
  const bark = await response.json();
  return {
    title,
    bark
  };
};


