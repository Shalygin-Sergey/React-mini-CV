const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Moscow</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram</h2>
            <p><a href="tel:+79301196328">+7 (930) 119 63 28</a></p>
            <p><a href="https://t.me/<serjjs>">Telegram</a></p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p><a href="mailto:shalygin.javascript@gmail.com">shalygin.javascript@gmail.com</a></p>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Contacts;
