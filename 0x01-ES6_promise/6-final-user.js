import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const UserPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  return Promise.allSettled([UserPromise, photoPromise]).then((item) => {
    const res = [];
    item.forEach((idx) => {
      if (idx.status === 'fulfilled') {
        res.push({ status: idx.status, value: idx.value });
      } else {
        res.push({ status: idx.status, value: `${idx.reason}` });
      }
    });
    return res;
  });
}
