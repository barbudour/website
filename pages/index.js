import Layout from '../components/layout';

export default function Index() {
  return (
    <>
      <video className="video" playsInline autoPlay muted loop>
        <source src="/bg.mp4" type="video/mp4" />
      </video>
      <Layout pageTitle="Poimandres">
        <a href="https://github.com/barbudour">
          <h1>barbudour / senior frontend developer</h1>
        </a>
      </Layout>
    </>
  );
}
