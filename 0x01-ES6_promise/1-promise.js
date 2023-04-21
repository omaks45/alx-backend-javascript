export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
<<<<<<< HEAD
      reject(new Error('The fake API is not working currentlyl'));
=======
      reject(new Error('The fake API is not working currently'));
>>>>>>> dc8a1eff00168b383224596ee13fdc16903553cd
    }
  });
}
