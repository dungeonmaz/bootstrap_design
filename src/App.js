import './App.css';
import Content1 from './components/content/Content1';
import Content2 from './components/content/Content2';
import Content3 from './components/content/Content3';
import Content4 from './components/content/Content4';
import Content5 from './components/content/Content5';
import Content6 from './components/content/Content6';
import Footer from './components/Footer';
import Header from './components/Header'


function App() {
  return (
    <main >
      <Header />
      <section id='s1'><Content1 /></section>
      <section id='s2'><Content2 /></section>
      <section id='s3'><Content3 /></section>
      <section id='s4'><Content4 /></section>
      <section id='s5'><Content5 /></section>
      <section id='s6'><Content6 /></section>
      <Footer />
    </main>
  );
}

export default App;
