import Head from "next/head";
import Link from "next/link";

function HomePage() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | News Homepage</title>
      </Head>
      <main>
        <picture>
          <source
            media="(min-width: 376px)"
            srcSet="/image-web-3-desktop.jpg"
          />
          <img src="/image-web-3-mobile.jpg" alt="Future of the web" />
        </picture>

        <div id="popular" className="article">
          <h1>The Bright Future of Web 3.0?</h1>
          <div className="article__summary">
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <Link href="">Read More</Link>
          </div>
        </div>

        <aside id="new" className="new">
          <h2>New</h2>
          <div className="new__article">
            <Link href="#">Hydrogen VS Electric Cars</Link>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            <hr></hr>
          </div>
          <div className="new__article">
            <Link href="#">The Downsides of AI Artistry</Link>
            <p>
              What are the possible adverse effects of on-demand AI images
              generation?
            </p>
            <hr></hr>
          </div>
          <div className="new__article">
            <Link href="#">Is VC Funding Dying Up'</Link>
            <p>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </aside>

        <div id="trending" className="top-three">
          <div className="top-three__cards">
            <img src="/image-retro-pcs.jpg" alt="Reviving Retro PCs" />
            <div className="content">
              <h3>01</h3>
              <Link href="#">Reviving Retro PCs</Link>
              <p>What happens when old PCs are given modern upgrades?</p>
            </div>
          </div>

          <div className="top-three__cards">
            <img src="/image-top-laptops.jpg" alt="Top 10 Laptops of 2022" />
            <div className="content">
              <h3>02</h3>
              <Link href="#">Top 10 Laptops of 2022</Link>
              <p>Our best picks for various needs and budgets</p>
            </div>
          </div>

          <div className="top-three__cards">
            <img src="/image-gaming-growth.jpg" alt="The Growth of Gaming" />
            <div className="content">
              <h3>03</h3>
              <Link href="#">The Growth of Gaming</Link>
              <p>How the pandemic has sparked fresh opportunities</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default HomePage;
