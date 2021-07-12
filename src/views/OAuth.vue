<template>
  <div style="width: 50%; margin: 5em auto;">
    <router-link to="/">
      <a-button type="link">
        <a-icon type="left" />Go back
      </a-button>
    </router-link>

    <h1 id="about">About</h1>
    <p>
      Cognitive is app that helps people in more effective learning. You can schedule your learning sessiond or use flashcards to better remember needed material.
      This app requires connection with your Google account so you can add reminders to your Google Calendar so you won't forget about any session.
    </p>
    <p>
      When you sign in, google will share your name, email, profile picture and access to Google Calendar.
      We don't share this data with others.
    </p>

    <h1 id="homepage">Google OAuth2 Homepage</h1>
    <p>
      <u>Accurately represents your app's identity:</u> App <img style="width: 16px; height: 16px;" alt="favicon" src="../../public/img/icons/favicon-16x16.png"/> cognitive.pl is
      described on a site <a href="https://cognitive.pl/OAuth">cognitive.pl/OAuth</a>.
    </p>
    <p>
      <u>What will this app do with user data?</u> The only user data received is: name, email, profile picture and Google Calendar access. These will be saved and re-displayed to the user, calendar access is only used to put notofications into user's calendar.
      The email will be used to identify the user.
    </p>
    <p>
      <u>How does this app enhance user functionality?</u> This app just let user learn in more effective ways, one of them is getting notifications from Google Calendar to not forget about any learning sessions.
    </p>
    <p>
      <u>Link to Privacy Policy:</u> <a href="/policy">Click here.</a>
    </p>
    <p>
      <u>Describe the content, context, or connection to the app:</u> App <img style="width: 16px; height: 16px;" alt="favicon" src="../../public/img/icons/favicon-16x16.png"/> cognitive.pl is made to improve the learning results of users. For that we e.g. put a notifications in theirs calendars so they don't forget about any learning session.
    </p>

    <h1 id="oauth">Google OAuth2 Limited Use Disclosure</h1>
    <p>
      The <img style="width: 16px; height: 16px;" alt="favicon" src="../../public/img/icons/favicon-16x16.png"/> cognitive.pl App's
      use of information received from Google APIs will adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes">Google API Services User Data Policy</a>,
      including the Limited Use requirements.
    </p>

    <!-- <h1 id="policy">Privacy Policy</h1>
    <p>
      This is my private site. Aside from the feedback feature which is treated as private messages to myself,
      I am the only person who can enter data here. I don't directly collect any information from you other than your
      login info from google which is used to administer protected access to some of my content. Cookies are used
      for login purposes. No information is given to other parties, except this site does include google analytics which
      records anonymized browsing behaviour. This site uses cookies as described below.
      </p>
    <p>
      <u>How does this application access, use, store, or share Google user data?</u> The only user data received is: name, email and profile picture.
      These are accessed via OAuth2 login. These are stored in an unencrypted database. These are used only: to be re-displayed to the user, to reply
      to messages sent by the user, and as identification for granting access to additional content to the user. None of this data is shared with anyone.
    </p>
    <p>
      By continuing to use this site, you accept this privacy policy in full. If you disagree with this policy,
      you must not use this site.
    </p> -->

    <h1 id="cookies">Cookies</h1>
    <p>
      Cookies are short messages sent from your browser to websites you visit.
      This site uses cookies. By using this site you consent to the use of cookies.
    </p>
    <p>
      This site uses cookies to identify who is logged in, and google analytics uses cookies to record anonymized browsing behaviour.
    </p>

    <h1 id="terms">Terms of Service</h1>
    <p>
      This site is designed to educate and entertain. It's provided "as is", without any warranty or condition, express or implied or statutory.
      This site specifically disclaims any implied warranties of merchantability or fitness for a particular purpose.
    </p>
    <p>
      By continuing to use this site, you accept these terms of service in full. If you disagree with these terms,
      you must not use this site.
    </p>
  </div>
</template>
