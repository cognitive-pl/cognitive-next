const messages = {
  pl: {
    landing: {
      policy: 'Polityka Prywatności',
      policyLink: '/polityka',
      signIn: 'Zaloguj sie',
      hero: {
        title: 'Obchodzi nas ile <span class="underline">pamiętasz</span>.',
        paragraph: 'Zacznij przygodę z efektywnym uczeniem się i przejdź do darmowej aplikacji.',
        cta: 'Zobacz apkę',
      },
      features: {
        title: 'Bądź przygotowany na czas',
        cta: 'Przejdź do apki',
        list: [
          'Zaplanuj całą swoją pracę dzięki terminarzowi w aplikacji.',
          'Ucz się porcjami i poświęć na wszystko łącznie mniej czasu dzieki <span class="underline">systemowi podziału materiału</span>.',
          'Nie zapomnij o nauce dzięki <span class="underline">synchronizacji z Kalendarzem</span>.',
          'Zapamiętaj zagadnienia na dłużej korzystając z <span class="underline">wbudowanego modułu fiszek</span>.',
          'Szybki i prosty dostęp do aplikacji, dzięki możliwości <span class="underline">instalacji na urządzeniu</span>.',
        ],
      },
      science: {
        title: 'My <span class="underline">szukamy informacji</span>, żebyś ty nie musiał.',
        paragraph: 'Odwiedź stronę dokumentacji użytkownika i przeczytaj o badaniach naukowych, na których bazowaliśmy tworząc aplikację.',
        link: 'Przejdź do dokumentacji',
      },
    },
    login: {
      title: 'Logowanie',
      button: 'Zaloguj sie z Google',
      goBack: 'Powrót',
      modal: {
        title: 'Ostrzeżenie o bezpieczeństwie',
        content1: 'Ta aplikacja jest wciąż weryfikowana przez Google i możesz przez to zobaczyć ',
        alert: 'alert bezpieczeństwa.',
        content2: 'Nie ma się czym przejmować, podczas logowania wystarczy wcisnąć "Zaawansowane", przejść do linku poniżej, a następnie zezwolić na dostęp do Kalendarza (jest on wykorzystywany wyłącznie do dodawania powiadomień).',
      },
    },
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
      pwa: {
        install: 'Zainstaluj aplikację',
        success: 'Świetnie że tu jesteś!',
        successDescription: 'Aplikacja powinna być zainstalowana na twoim urządzeniu.',
        cancel: 'Ałć...',
        cancelDescription: 'Przykro nam widzieć, że nie chcesz naszej aplikacji...',
      },
      breadcrumb: 'Strona Główna',
    },
    home: {
      welcome: 'Witaj {name}!',
      open: 'Otwórz',
      startAdventure: 'Zacznij przygodę z nauką!',
      addUnitButton: 'Dodaj dział',
    },
    unit: {
      popConfirm: {
        title: 'Na pewno?',
        ok: 'Tak',
        cancel: 'Nie',
      },
      delete: 'Usuń dział',
      calendar: 'Dodaj przypomnienie',
      sessionsToday: 'Sesje na dziś:',
      lastPart: 'Ostatnia niezrobiona część:',
      markAsDone: 'Zaznacz sesję jako zrobioną',
      material: 'Części materiału:',
      everythingDone: 'Wszystko zrobione!',
      noSession: 'Nie ma żadnej sesji na dzisiaj',
      reminder: {
        title: 'Świetnie!',
        description: 'Teraz sprawdź swój Kalendarz Google ;)',
      },
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
      startFlashcards: 'Nie wahaj sie i stwórz trochę fiszek!',
      addFlashcards: 'Dodaj zestaw fiszek',
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
  },
  en: {
    landing: {
      policy: 'Privacy Policy',
      policyLink: '/policy',
      signIn: 'Sign In',
      hero: {
        title: 'We care about how much you <span class="underline">remember</span>.',
        paragraph: 'Start your journey with effective learning and head to the free app.',
        cta: 'Get the app',
      },
      features: {
        title: 'Be prepared on time',
        cta: 'Go to the app',
        list: [
          'Get organized with all your work thanks to the in-app schedule.',
          'Divide the material into parts and spend less time on everything thanks to <span class="underline">the material division system</span>.',
          'Don\'t forget about learning thanks to <span class="underline">synchronization with Calendar</span>.',
          'Remeber material for longer time using <span class="underline">built-in flashcards module</span>.',
          'Quick and easy access to the app thanks to <span class="underline">installation on device feature</span>.',
        ],
      },
      science: {
        title: 'We do <span class="underline">the research</span>, so you don\'t have to.',
        paragraph: 'Visit the user\'s docs site and read about which scientific researches we were basing on while creating the app.',
        link: 'Go to the docs',
      },
    },
    login: {
      title: 'Login',
      button: 'Login with Google',
      goBack: 'Go back',
      modal: {
        title: 'Security warning',
        content1: 'This app is still verifying by Google and because of that you may see ',
        alert: 'security alert.',
        content2: 'There is no need to worry, during login process just click on "Advanced", head to the link below and grant permissions to Calendar (it is used only for adding remiders).',
      },
    },
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
      pwa: {
        install: 'Install the app',
        success: "It's awesome to have you here",
        successDescription: 'App should be installed on your device',
        cancel: 'Ouch...',
        cancelDescription: "We're sorry to see that you don't want our app.",
      },
      breadcrumb: 'Home',
    },
    home: {
      welcome: 'Hi, {name}!',
      open: 'Open',
      startAdventure: 'Start your adventure with learning!',
      addUnitButton: 'Add unit',
    },
    unit: {
      popConfirm: {
        title: 'Are you sure?',
        ok: 'Yes',
        cancel: 'No',
      },
      delete: 'Delete',
      calendar: 'Add the reminder',
      sessionsToday: 'Sessions for today:',
      lastPart: 'Last not done part:',
      markAsDone: 'Mark session as done',
      material: 'Parts of material:',
      everythingDone: "Everything's done!",
      noSession: 'No session for today',
      reminder: {
        title: 'Awesome!',
        description: 'Now you can check out your Google Calendar ;)',
      },
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
      startFlashcards: 'Go ahead and make some flashcards!',
      addFlashcards: 'Add flashcard set',
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
        coffee: 'Buy a coffee ☕',
        prize: '10 PLN / once',
      },
    },
  },
};
export default messages;
