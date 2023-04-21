/* eslint-disable no-console */

import { uploadPhoto, createUser } from './utils';

export default function handleProfilSignup() {
  const pics = uploadPhoto();
  const User = createUser();

  return Promise.all([pics, User]).then((result) => {
    console.log(`${result[0].body} ${result[1].firstName} ${result[1].lastName}`);
  })
    .catch(() => {
      console.log('Signup system offline');
    });
}
