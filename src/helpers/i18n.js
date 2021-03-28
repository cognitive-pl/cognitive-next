const messages = {
  pl: {
    appWrapper: {
      home: 'Strona Główna',
      unit: 'Dział',
      addUnit: 'Nowy dział',
      flashcards: 'Fiszki',
      allSets: 'Wszystkie zestawy',
      addSet: 'Nowy zestaw',
      account: 'Konto',
      logout: 'Wyloguj',
      support: 'Wesprzyj',
      installPWA: 'Zainstaluje aplikację',
      breadcrumb: 'Strona Główna',
    },
    home: {
      welcome: 'Witaj {name}!',
      open: 'Otwórz',
    },
    unit: {
      popConfirm: {
        title: 'Na pewno?',
        ok: 'Tak',
        cancel: 'Nie',
      },
      delete: 'Usuń dział',
      sessionsToday: 'Sesje na dziś:',
      lastPart: 'Ostatnia niezrobiona część:',
      markAsDone: 'Zaznacz sesję jako zrobioną',
      material: 'Części materiału:',
      everythingDone: 'Wszystko zrobione!',
      noSession: 'Nie ma żadnej sesji na dzisiaj',
    },
    newUnit: {
      firstStage: {
        title: 'Podstawowe informacje',
        button: 'Następny krok',
        error: 'Nie wybieraj daty wcześniejszej niż jutro',
        name: {
          label: 'Nazwa',
          message: 'Proszę wpisać nazwę!',
        },
        description: 'Opis',
        deadline: {
          label: 'Termin',
          message: 'Proszę podać termin!',
        },
      },
      secondStage: {
        title: 'Części materiału',
        description: 'Podziel cały materiał na części, których będziesz się uczył przez czas jednej sesji.',
        nextStep: 'Nastepny krok',
        previousStep: 'Poprzedni krok',
        error: 'Proszę podać przynajmniej jedną część',
        addPart: 'Dodaj część',
        parts: {
          label: 'Części',
          message: 'Proszę podać część!',
        },
      },
      thirdStage: {
        title: 'Podział w czasie',
        description: 'Te daty proponujemy jako dni przeznaczone na sesje nauki:',
        previousStep: 'Poprzedni krok',
        addUnit: 'Dodaj dział',
      },
      messages: {
        success: {
          title: 'Świetnie!',
          description: 'Właśnie stworzyłeś nowy dział, miłej nauki!',
        },
        warning: {
          title: 'Ou, coś poszło nie tak...',
          description: 'Wygląda na to, że mamy drobne problemy z bazą danych, spróbuj ponownie później',
        },
      },
    },
    flashcards: {
      welcome: 'Twoje zestawy fiszek',
      openButton: 'Otwórz',
      cards: 'karty',
    },
    flashcardSet: {
      allDone: 'Przejrzałeś cały zestaw, możesz go odnowić klikając w przycisk poniżej.',
      delete: 'Usuń',
      popConfirm: {
        title: 'Na pewno?',
        ok: 'Tak',
        cancel: 'Nie',
      },
      messages: {
        sessionDone: {
          title: 'Świetnie!',
          description: 'Właśnie ukończyłes dzisiejszą sesję pracy z fiszkami! (Wrócić lepiej po paru dniach przerwy)',
        },
        wrongUser: {
          title: 'Coś poszło nie tak',
          description: 'Wygląda na to, że nie jesteś autorem tego zestawu fiszek...',
        },
        databaseError: 'Coś poszło nie tak z połączeniem z bazą danych...',
      },
    },
    support: {
      title: 'Wesprzyj <span class="title">Cognitive</span>',
      description: 'To świetnie, że chcesz wesprzeć mój projekt 😻<br/> Przygotowałem dwa sposoby na zrobienie tego:',
      subscription: {
        title: 'Subskrypcja',
        prize: '5 zł / miesiąc',
      },
      supportOnce: {
        title: 'Wesprzyj raz',
        coffee: 'Kup mi kawę ☕',
        prize: '10 zł / raz',
      },
    },
    tour: {
      skip: 'Pomiń poradnik',
      next: 'Dalej',
      previous: 'Wcześniej',
      finish: 'Zakończ poradnik',
      welcome: {
        title: 'Witaj',
        content: 'Świetnie, że tu jesteś, pozwól, że pokażę Ci aplikację!',
      },
      home: 'Tutaj jest strona główna, znajdują się tu wszystkie działy materiału, którego chcesz się nauczyć',
      addUnit: 'Naciskając ten przycisk możesz dodać pierwszy dział, pomoże Ci w regularnej nauce (dzięki temu też bardziej efektywnej)',
      flashcards: 'Tutaj są wszystkie zestawy fiszek, pomogą Ci uczyć się bardziej efektywnie i pamiętać maieriał na dłużej',
      addFlashcards: 'W tej sekcji możesz dodać pierwszy zestaw fiszek',
      language: 'Tutaj możesz zmienić język aplikacji',
      pwa: 'Klikając przycisk poniżej możesz zainstalować Cognitive na twoim urządzeniu',
      support: 'Rozważ również wsparcie Cognitive ;)',
    },
  },
  en: {
    appWrapper: {
      home: 'Home',
      unit: 'Unit',
      addUnit: 'Add new unit',
      flashcards: 'Flashcards',
      allSets: 'All sets',
      addSet: 'Add new set',
      account: 'Account',
      logout: 'Logout',
      support: 'Support',
      installPWA: 'Install the app',
      breadcrumb: 'Home',
    },
    home: {
      welcome: 'Hi, {name}!',
      open: 'Open',
    },
    unit: {
      popConfirm: {
        title: 'Are you sure?',
        ok: 'Yes',
        cancel: 'No',
      },
      delete: 'Delete',
      sessionsToday: 'Sessions for today:',
      lastPart: 'Last not done part:',
      markAsDone: 'Mark session as done',
      material: 'Parts of material:',
      everythingDone: "Everything's done!",
      noSession: 'No session for today',
    },
    newUnit: {
      firstStage: {
        title: 'Basic info',
        button: 'Next step',
        error: 'Do not pick a date prior to tommorow',
        name: {
          label: 'Name',
          message: 'Please input unit name!',
        },
        description: 'Description',
        deadline: {
          label: 'Deadline',
          message: 'Please input deadline!',
        },
      },
      secondStage: {
        title: 'Material parts',
        description: 'Divide whole material into parts that you will learn in time of one session.',
        nextStep: 'Next step',
        previousStep: 'Previous step',
        error: 'Please input at least one part',
        addPart: 'Add part',
        parts: {
          label: 'Parts',
          message: 'Please input any part!',
        },
      },
      thirdStage: {
        title: 'Division over time',
        description: 'These are dates we propose as days for learning sessions:',
        previousStep: 'Previous step',
        addUnit: 'Add unit',
      },
      messages: {
        success: {
          title: 'Great!',
          description: 'You just made new unit, happy learning!',
        },
        warning: {
          title: 'Oh, something went wrong...',
          description: 'It looks like there are some problems with database, please try again later',
        },
      },
    },
    flashcards: {
      welcome: 'Your flashcard sets',
      openButton: 'Open',
      cards: 'card(s)',
    },
    flashcardSet: {
      allDone: 'You revealed all set, you can restart it by clicking button below.',
      delete: 'Delete',
      popConfirm: {
        title: 'Are you sure?',
        ok: 'Yes',
        cancel: 'No',
      },
      messages: {
        sessionDone: {
          title: 'So awesome!',
          description: "You've just finished flashcard session for today! (Better to come back a few days apart)",
        },
        wrongUser: {
          title: 'Something went wrong',
          description: 'It seems like you are not the autor of this flashcard set...',
        },
        databaseError: 'Something went wrong with database connection...',
      },
    },
    support: {
      title: 'Support <span class="title">Cognitive</span>',
      description: "It's awesome that you want to support my project 😻<br/> I prepared two ways for doing that:",
      subscription: {
        title: 'Subscription',
        prize: '5 PLN / month',
      },
      supportOnce: {
        title: 'Support once',
        coffee: 'Buy a coffe ☕',
        prize: '10 PLN / once',
      },
    },
    tour: {
      skip: 'Skip tour',
      next: 'Next',
      previous: 'Previous',
      finish: 'Finish tour',
      welcome: {
        title: 'Welcome',
        content: "So awesome to have you here, let's go through the app!",
      },
      home: 'Here is the homepage, you can see there all your material units that you want to learn.',
      addUnit: 'By clicking this button you can add your first unit, it helps learn regularly (and by that more effectively)',
      flashcards: 'Here are all of your flashcards sets, they will help you learn more effectively and remember material for a longer time',
      addFlashcards: 'In this section you can add your first flashcard set',
      language: 'Here you can change the language in the app',
      pwa: 'By clicking the button below you can install Cognitive on your device',
      support: 'Also, consider supporting Cognitive ;)',
    },
  },
};
export default messages;
