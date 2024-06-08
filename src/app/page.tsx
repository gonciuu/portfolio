import Expertise from './(components)/Expertise';
import Header from './(components)/Header';
import Journey from './(components)/Journey';
import Projects from './(components)/Projects';
import './globals.css';

export default function Home() {
  return (
    <div>
      <Header />
      <Projects />
      <Expertise />
      <Journey />
    </div>
  );
}
