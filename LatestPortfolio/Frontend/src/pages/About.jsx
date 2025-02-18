import PufferFishScene from "../Components/Spines/PufferFishScene";

function About() {
  return (
    <section
      id="about"
      className="relative z-20 -mt-[80px] h-[50rem] overflow-hidden bg-amber-400"
    >
      <h2 className="py-16 text-center text-5xl font-bold uppercase text-white">
        About
      </h2>
      <div className="absolute top-1/4 z-20 cursor-pointer">
        <PufferFishScene />
      </div>
      <div className="grid h-40 grid-cols-2">
        <div className="row-span-1">
          <img src="/img-about.png" alt="about image" />
        </div>

        <div className="relative">
          <p className="pointer-events-none -z-10 row-span-2 mr-5 overflow-auto p-5 text-2xl font-medium leading-relaxed text-white">
            Hi, I'm Manikanta, <br></br> a passionate web developer who
            specializes in creating dynamic, beautiful web pages. I'm dedicated
            to continuously improving my coding skills and developing innovative
            applications and websites. I love building full-stack websites that
            feature 3D interactive displays to showcase their products in web.
            Welcome to my portfolio, where you can explore my work, learn about
            my skills, and get in touch!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
