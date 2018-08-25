import React from 'react'
import { withPrefix } from 'gatsby-link'
import portrait from '../images/portrait.png'
import styles from '../styles/page.module.scss'

const Page = () => (
  <div className={styles.container}>
    <aside>
      <img className={styles.portrait} src={portrait} />
    </aside>
    <main>
      <h1>Ansioluettelo</h1>

      <h2>Työkokemus</h2>

      <div>
        <h3>User Experience Designer</h3>
        <h4>
          <a href="https://www.rapal.com">Rapal Oy</a>
          <span className={styles.yearRange}>2007 – Present</span>
        </h4>

        <p>
          Olen ollut täysipäiväisesti töissä Rapalilla valmistumisestani lähtien
          vuodesta 2012. Tittelini on UX designer, mutta työni on koostunut
          tasapuolisesti sekä UX-suunnittelusta että front-end-kehityksestä.
          Vuosien varrella olen ollut vastuussa käyttökokemuksesta kymmenissä
          kehitysprojekteissa.
        </p>

        <p>
          <b>Front-end-kehittäjänä</b> minulla on laajaa kokemusta
          perusteknologioista: HTML, CSS, JavaScript, HTTP ja selaimet. Olen
          rakentanut useita moderneja ja responsiivisia verkkosovelluksia
          kehittyneillä käyttöliittymillä: graafisia pohjakuvaselaimia,
          kaaviota, karttoja ja muita tiedon visualisointitapoja. Olen aina
          tasapainottanut helppokäyttöisyyttä ja tehokasta päivittäistä käyttöä.
        </p>

        <p>
          Viime vuosien aikana olen käyttänyt mm. seuraavia teknologioita:
          React, Redux, Angular (1.x ja 2+), TypeScript, Bootstrap, Webpack,
          SVG, Sass ja Jest. Minulle ovat hyvin tuttuja versiohallinta (Git), CI
          (TeamCity) ja useat JS-kirjastot (esim. Lodash, Moment.js, Highcharts
          ja Leaflet). Vaikka painopisteeni on ollut front-end-kehityksessä,
          olen myös tehnyt C# back-end-kehitystä (.NET ja EF, myös .NET Core) ja
          suunnitellut useita REST-apeja. Minulla on myös jonkin verran
          kokemusta React Nativesta ja mobiilikehityksestä.
        </p>

        <p>
          <b>UX-suunnittelijana</b> olen järjestänyt lähes sata
          käyttäjähaastattelua, käytettävyystestiä ja työpajaa saadakseni tietoa
          käyttäjien tarpeista. Olen luonut mockupeja ja prototyyppejä verkko-
          ja mobiilisovelluksille, kirjoittanut käyttäjätarinoita ja speksejä
          sekä tehnyt visuaalista suunnittelua Photoshopilla. Hallitsen
          responsiivisen suunnittelun ja verkkosovellusten käytännöt. Osaan myös
          analysoida käyttäjien toimintaa Google Analyticsillä.
        </p>

        <p>
          Olen tehnyt työtä usean <b>ketterän tiimin</b> jäsenenä. Minulle
          erittäin tuttuja käytäntöjä ovat inkrementaalinen kehitys,
          yksikkötestaus, koodikatselmoinnit, jatkuva integraatio, ketterä
          suunnittelu ja retrospektiivit.
        </p>
      </div>

      <h2>Koulutus</h2>

      <div>
        <h3>Diplomi-insinööri</h3>
        <h4>
          <a href="http://www.aalto.fi/en/">Aalto-yliopisto</a>
          <span className={styles.yearRange}>2005 – 2012</span>
        </h4>

        <p>
          Valmistuin diplomi-insinööriksi maininnalla erinomainen vuonna 2012
          tietotekniikan koulutusohjelmasta. Pääaineeni oli mediatekniikka, ja
          erikoistuin käyttöliittymiin ja käytettävyyteen. Tein diplomityöni{' '}
          <a href={withPrefix('files/thesis.pdf')} target="_blank">
            interaktiosuunnittelusta ketterässä ohjelmistokehityksessä
          </a>
          . Kandidaatiksi valmistuin automaatiotekniikan koulutusohjelmasta.
          Vuonna 2008 järjestin valmennuskurssin Aalto-yliopistoon pyrkiville.
        </p>
      </div>

      <h2>Vapaaehtoistyö</h2>

      <div>
        <h3>Partio</h3>

        <p>
          Olen sihteeri partiolippukunnassamme nimeltä Munksnäs Spejarna ja
          toiminut pääjärjestäjänä useilla leireillä ja muissa tapahtumissa.
          Vuonna 2014 olin varaleirinjohtaja Atlantis-leirillä. Viikon
          pituiselle leirille osallistui lähes 2000 partiolaista.
          Suunnitteluvaiheessa oli mukana yli 200 aikuista, ja itse leirillä
          heitä toimi yli 600 eri tehtävissä. Opin asettamaan tavoitteita,
          rakentamaan ja johtamaan projektitiimiä sekä työskentelemään
          hajautetussa organisaatiossa. Leiri oli hyvin onnistunut, ja sai
          yleisarvosanan 4,3 (asteikolla 1–5) kyselyssä, johon osallistui yli
          500 vastaajaa.
        </p>
      </div>

      <h2>Kielet</h2>

      <ul>
        <li>Finnish – erinomainen</li>
        <li>English – erinomainen</li>
        <li>Swedish – erinomainen</li>
        <li>German – perusteet</li>
      </ul>
    </main>
  </div>
)

export default Page
