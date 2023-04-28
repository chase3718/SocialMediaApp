import * as admin from 'firebase-admin';
import * as serviceAccount from '../../service-account.json';

admin.initializeApp({
  credential: admin.credential.cert(JSON.stringify(serviceAccount)),
  databaseURL: 'https://social-media-app-840fa-default-rtdb.firebaseio.com',
});

const db = admin.firestore();
const auth = admin.auth();
export {admin, db, auth};
