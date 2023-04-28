import {db} from '../config/firebase';

class dbService {
  db = db;

  async getCollection(collection: string) {
    const snapshot = await this.db.collection(collection).get();
    return snapshot.docs.map((doc) => doc.data());
  }
}

export default new dbService();
