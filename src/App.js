import logo from './logo.svg';
import code from './js.jpg';
import './App.css';



function App() {
  // const myelement = <h1 id="hello">Hello React!</h1>;
  // return myelement;}
  // const paragraphs = (
  //   <div id="i-am-the-outermost-element">
  //     <p>I am a paragraph.</p>
  //     <p>I, too, am a paragraph.</p>
  //   </div>
  // );
  // return paragraphs;
  const blog = (
    <div>
    <img id="img" src={code} alt= 'code' />
    <h1>
      Spunkey's Blog!
    </h1>
    <article>
      I am learning react today. <strong>React </strong> is so interesting.
    </article>
    <ul>
    <li><h2>Roadmap</h2></li>
    <li>Javascript</li>
    <li>React</li>
    <li>React Native</li>
    </ul>
    </div>
  );
  return blog;



  
  // const panda = <img src='code.jpg' alt='panda' width='500px' height='500px' />;
  // return panda

  // return (
  //   <div className="App">
  //   <h1 id="head">Hello React!!</h1> 

  //   </div>

  }

export default App;
// export default post;
