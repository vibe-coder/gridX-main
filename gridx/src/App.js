import './App.scss';
import {Link, Routes, Route} from "react-router-dom"
import gridxLogo from "./icons/GRIDX-LOGO-07.svg"
import HomeContainer from './home_page/HomeContainer';

function App() {

  const menuContainer = document.querySelector('menu-container')
  
  const menuButton = document.getElementById('menu-button')

  menuButton.onclick = () => {
    menuContainer.style.visibility = 'visible'
  }
  
  

  return (
    <div className="App">
      <div className="header-wrapper">
        <img className='gridx-logo' src={gridxLogo} alt="gridx logo"/>
        
        <div onClick={} role='button' id='menu-button' className="menu-icon">
          <input type="checkbox" id="menu_checkbox"/>
          <label for="menu_checkbox">
            <div></div>
            <div></div>
            <div></div>
          </label>
        </div>

      </div>
      
      <div className='menu-container'>
        <p>Biography is sometimes regarded as a branch of history, and earlier biographical writings—such as the 15th-century Mémoires of the French councellor of state, Philippe de Commynes, or George Cavendish’s 16th-century life of Thomas Cardinal Wolsey—have often been treated as historical material rather than as literary works in their own right. Some entries in ancient Chinese chronicles included biographical sketches; imbedded in the Roman historian Tacitus’s Annals is the most famous biography of the emperor Tiberius; conversely, Sir Winston Churchill’s magnificent life of his ancestor John Churchill, first duke of Marlborough, can be read as a history (written from a special point of view) of Britain and much of Europe during the War of the Spanish Succession (1701–14). Yet there is general recognition today that history and biography are quite distinct forms of literature. History usually deals in generalizations about a period of time (for example, the Renaissance), about a group of people in time (the English colonies in North America), about an institution (monasticism during the Middle Ages). Biography more typically focuses upon a single human being and deals in the particulars of that person’s life.

Both biography and history, however, are often concerned with the past, and it is in the hunting down, evaluating, and selection of sources that they are akin. In this sense biography can be regarded as a craft rather than an art: techniques of research and general rules for testing evidence can be learned by anyone and thus need involve comparatively little of that personal commitment associated with art.

A biographer in pursuit of an individual long dead is usually hampered by a lack of sources: it is often impossible to check or verify what written evidence there is; there are no witnesses to cross-examine. No method has yet been developed by which to overcome such problems. Each life, however, presents its own opportunities as well as specific difficulties to the biographer: the ingenuity with which the biographer handles gaps in the record—by providing information, for example, about the age that casts light upon the subject—has much to do with the quality of the resulting work. James Boswell knew comparatively little about Samuel Johnson’s earlier years; it is one of the greatnesses of his Life of Samuel Johnson LL.D. (1791) that he succeeded, without inventing matter or deceiving the reader, in giving the sense of a life progressively unfolding. Another masterpiece of reconstruction in the face of little evidence is A.J.A. Symons’ biography of the English author and eccentric Frederick William Rolfe, The Quest for Corvo (1934). A further difficulty is the unreliability of most collections of papers, letters, and other memorabilia edited before the 20th century. Not only did editors feel free to omit and transpose materials, but sometimes the authors of documents revised their personal writings for the benefit of posterity, often falsifying the record and presenting their biographers with a difficult situation when the originals were no longer extant.
The biographer writing the life of a person recently dead is often faced with the opposite problem: an abundance of living witnesses and a plethora of materials, which include the subject’s papers and letters, sometimes transcriptions of telephone conversations and conferences, as well as the record of interviews granted to the biographer by the subject’s friends and associates. Frank Friedel, for example, in creating a biography of the U.S. president Franklin D. Roosevelt, had to wrestle with something like 40 tons of paper. But finally, when writing the life of any person, whether long or recently dead, the biographer’s chief responsibility is vigorously to test the authenticity of the collected materials by whatever rules and techniques are available. When the subject of a biography is still alive and a contributor to the work, the biographer’s task is to examine the subject’s perspective against multiple, even contradictory sources.</p>
      </div>

      

      {/* <nav className='nav-wrapper'>

        MENU WRAPPER FOR MOBILE VIEW











        LINK WRAPPER FOR DESKTOP VIEW

        <ul className="link-wrapper">
          <li><Link className="link" to="/">XENON</Link></li>
          <li><Link className="link" to="/">use cases</Link></li>
          <li><Link className="link" to="/">modules</Link></li>
          <li><Link className="link" to="/">company</Link></li>
          <li><Link className="demo-link" to="/">book a demo</Link></li>
        </ul>
      </nav> */}


      <Routes>
        <Route path='/' element={<HomeContainer/>} />
      </Routes>
    </div>
  );
}

export default App;
