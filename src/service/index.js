import { db, auth } from '@/initFirebase';

export default class ServiceClass {
  getLanguage() {
    this.language = window.localStorage.getItem('language');
    if (!this.language) {
      window.localStorage.setItem('language', 'pl');
      this.language = window.localStorage.getItem('language');
    }
    return this.language;
  }

  setLanguage(lanuageProp) {
    window.localStorage.setItem('language', lanuageProp);
    this.language = window.localStorage.getItem('language');
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

  fetchSet(id) {
    return new Promise((resolve, reject) => {
      this.flashcardSetRef = db.collection('flashcards').doc(id);
      this.flashcardSetRef.get()
        .then((doc) => {
          if (doc.data().uid === auth.currentUser.uid) {
            this.flashcardSet = doc.data();
            this.visibleSet = this.flashcardSet.set;
            this.presentCard = { ...this.visibleSet[0] };

            resolve({
              flashcardSet: this.flashcardSet,
              visibleSet: this.visibleSet,
              presentCard: this.presentCard,
            });
          } else reject('wrong user');
        })
        .catch(() => reject());
    });
  }

  updateSet() {
    return new Promise((resolve, reject) => {
      this.flashcardSetRef
        .update({ set: this.visibleSet })
        .catch(() => reject());
    });
  }

  deleteSet() {
    return new Promise((resolve, reject) => {
      this.flashcardSetRef.delete()
        .then(() => {
          resolve();
        })
        .catch(() => reject());
    });
  }

  checkGoodAnswer() {
    return new Promise((resolve) => {
      const oldSection = this.presentCard.section;
      if (this.presentCard.section < 5) this.presentCard.section++;

      this.visibleSet.push(this.presentCard);
      this.visibleSet.shift();
      this.visibleSet = this.visibleSet.sort(({ section: sectionA }, { section: sectionB }) => sectionA - sectionB);

      if (this.visibleSet.filter(({ section }) => section < 5).length === 0) this.allDone = true;
      this.updateSet();
      this.presentCard = { ...this.visibleSet[0] };

      resolve({
        allDone: this.allDone,
        visibleSet: this.visibleSet,
        presentCard: this.presentCard,
        passedNewSection: this.presentCard.section > oldSection,
      });
    });
  }

  checkBadAnswer() {
    return new Promise((resolve) => {
      this.visibleSet.push(this.presentCard);
      this.visibleSet.shift();
      this.visibleSet = this.visibleSet.sort(({ section: sectionA }, { section: sectionB }) => sectionA - sectionB);

      this.updateSet();

      this.presentCard = { ...this.visibleSet[0] };

      resolve({
        visibleSet: this.visibleSet,
        presentCard: this.presentCard,
      });
    });
  }

  restartSet() {
    return new Promise((resolve) => {
      this.visibleSet.forEach((card) => {
        const cardIndex = this.visibleSet.findIndex((cardSearch) => cardSearch === card);
        this.visibleSet[cardIndex] = {
          ...card,
          section: 1,
        };
      });

      this.updateSet();

      this.presentCard = { ...this.visibleSet[0] };
      this.allDone = false;

      resolve({
        visibleSet: this.visibleSet,
        presentCard: this.presentCard,
      });
    });
  }
}
