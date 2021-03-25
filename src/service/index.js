import { db, auth } from '@/initFirebase';

export default class ServiceClass {
  constructor({ Vue }) {
    this.v = Vue;
    this.unitRef = null;
    this.unitObject = null;
    this.notDone = null;
    this.todaySessions = null;
    this.fetchUnit = this.fetchUnit.bind(this);
  }

  newUnit(dbData) {
    return new Promise((resolve, reject) => {
      db.collection('units').add(dbData)
        .then(() => resolve())
        .catch(() => reject());
    });
  }

  fetchUnit(id) {
    return new Promise((resolve, reject) => {
      this.unitRef = db.collection('units').doc(id);
      this.unitRef.get()
        .then((doc) => {
          if (doc.data().uid === auth.currentUser.uid) {
            this.unitObject = doc.data();
            this.todaySessions = this.unitObject.parts.filter(({ date }) => {
              const today = new Date();
              const partDate = new Date(date);
              return (
                today.getDate() === partDate.getDate()
                && today.getMonth() === partDate.getMonth()
                && today.getFullYear() === partDate.getFullYear()
              );
            });
            this.notDone = this.unitObject.parts.find(({ done }) => !done);

            resolve({
              unitObject: this.unitObject,
              notDone: this.notDone,
              todaySessions: this.todaySessions,
            });
          } else reject('wrong user');
        })
        .catch(() => reject());
    });
  }

  markSessionAsDone() {
    return new Promise((resolve, reject) => {
      const notDoneIndex = this.unitObject.parts.findIndex((part) => part === this.notDone);
      const newParts = [...this.unitObject.parts];
      newParts[notDoneIndex] = {
        ...this.notDone,
        done: true,
      };

      this.unitRef
        .update({ parts: newParts })
        .then(() => resolve())
        .catch(() => reject());
    });
  }

  deleteUnit() {
    return new Promise((resolve, reject) => {
      this.unitRef.delete()
        .then(() => resolve())
        .catch(() => reject());
    });
  }
}
