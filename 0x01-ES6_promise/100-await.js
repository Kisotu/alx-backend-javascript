import { uploadPhoto, createUser } from './utils';

export default function asyncUploadUser() {
  try {
    const pic = uploadPhoto();
    const usr = createUser();
    return { photo: pic, user: usr };
  } catch (error) {
    console.error('Error uploading user or photo:', error);
    return { photo: null, user: null };
  }
}
