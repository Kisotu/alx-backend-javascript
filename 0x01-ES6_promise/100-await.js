import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const pic = await uploadPhoto();
    const usr = await createUser();
    return { photo: pic, user: usr };
  } catch (error) {
    console.error('Error uploading user or photo:', error);
    return { photo: null, user: null };
  }
}
