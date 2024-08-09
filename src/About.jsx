import aboutSvg from "./assets/about.svg";
import SectionTitle from "./components/SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" alt="people on a laptop" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui earum, exercitationem
            veniam quasi minus nostrum facere incidunt facilis autem? Temporibus, consequatur
            minima mollitia asperiores iste sit voluptatem quod quisquam culpa.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
