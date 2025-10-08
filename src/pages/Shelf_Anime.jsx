import './Shelf_Anime.css'; // ✅ CSS 연결
export default function MangaReadingList() {
  return (
    <main className="shelf">
      <section>
        <header>
          <h1>Reading</h1>
        </header>
        <article style={{"--avarage-color": "#b0b6a9"}}>
          <figure>
            <img src="https://i.imgur.com/HWxOtcQ.jpeg" />
            <figcaption>Frieren: Beyond Journey's End</figcaption>
          </figure>
        </article>
        <article style={{"--avarage-color": "#afa294"}}>
          <figure>
            <img src="https://i.imgur.com/wRoptbT.png" />
            <figcaption>Shinozaki-kun no Mente Jijou</figcaption>
          </figure>
        </article>
        <article style={{"--avarage-color": "#3c3c3d"}}>
          <figure>
            <img src="https://i.imgur.com/MwRrRSd.jpeg" />
            <figcaption>Bibliomania</figcaption>
          </figure>
        </article>
        <article style={{"--avarage-color": "#b47460"}}>
          <figure>
            <img src="https://i.imgur.com/7FQ6L5j.jpeg" />
            <figcaption>Dandadan</figcaption>
          </figure>
        </article>
        <article style={{"--avarage-color": "#60a6ce"}}>
          <figure>
            <img src="https://i.imgur.com/IQSq88g.jpeg" />
            <figcaption>The Summer Hikaru Died</figcaption>
          </figure>
        </article>
        <article style={{"--avarage-color": "#46666f"}}>
          <figure>
            <img src="https://i.imgur.com/QfF46xU.jpeg" />
            <figcaption>The Color of the End: Mission in the Apocalypse</figcaption>
          </figure>
        </article>
        <article style={{"--avarage-color": "#8e898f"}}>
          <figure>
            <img src="https://i.imgur.com/jcgbHCO.jpeg" />
            <figcaption>Smoking Behind the Supermarket with You</figcaption>
          </figure>
        </article>
        <article style={{"--avarage-color": "#8d516e"}}>
          <figure>
            <img src="https://i.imgur.com/lIPenqN.jpeg" />
            <figcaption>Another</figcaption>
          </figure>
        </article>
      </section>
      <section>
        <header>
          <h1>Completed</h1>
        </header>
        <article style={{"--avarage-color": "#6e695e"}}>
          <figure>
            <img src="https://i.imgur.com/OS0VRhm.png" />
            <figcaption>My Broken Mariko</figcaption>
          </figure>
        </article>
        <article style={{"--avarage-color": "#b16e79"}}>
          <figure>
            <img src="https://i.imgur.com/uqktm8j.jpeg" />
            <figcaption>Adabana</figcaption>
          </figure>
        </article>
        <article style={{"--avarage-color": "#bdbdbd"}}>
          <figure>
            <img src="https://i.imgur.com/QKXIJlH.jpeg" />
            <figcaption>Yiska</figcaption>
          </figure>
        </article>
      </section>
      <section>
        <header>
          <h1>Planning</h1>
        </header>
        <article style={{"--avarage-color": "#7b4d35"}}>
          <figure>
            <img src="https://i.imgur.com/yCBmW1b.png" />
            <figcaption>BLAME!</figcaption>
          </figure>
        </article>
        <article style={{"--avarage-color": "#ceb5a8"}}>
          <figure>
            <img src="https://i.imgur.com/ZGvNhE7.jpeg" />
            <figcaption>I Have a Crush at Work</figcaption>
          </figure>
        </article>
        <article style={{"--avarage-color": "#6d413f"}}>
          <figure>
            <img src="https://i.imgur.com/kTmZvmd.jpeg" />
            <figcaption>Carnelian: the Sille Dragon Odyssey</figcaption>
          </figure>
        </article>
        <article style={{"--avarage-color": "#666060"}}>
          <figure>
            <img src="https://i.imgur.com/jXc2WJf.jpeg" />
            <figcaption>Ougon no Keikenchi</figcaption>
          </figure>
        </article>
        <article style={{"--avarage-color": "#827d88"}}>
          <figure>
            <img src="https://i.imgur.com/fHFUOYg.jpeg" />
            <figcaption>Cigarette & Cherry</figcaption>
          </figure>
        </article>
      </section>
    </main>
  );
}