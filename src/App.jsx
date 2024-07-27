import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Projects from "./components/projects/Projects";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <About></About>
      <Experience></Experience>
      <Services></Services>
      <Projects></Projects>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
