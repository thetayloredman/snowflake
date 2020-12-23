export const BASE_URL = 'http://localhost/api';

export const handleResponse = async r => {
  const resdata = await r.json();
  if (r.status !== 200) {
    throw new Error(resdata);
  }
  return resdata;
};
