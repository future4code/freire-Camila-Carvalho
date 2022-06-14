import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import MinhaFoto from './img/imagem-eu.jpeg';
import LogoAppen from './img/logo-appen.png';
import LogoVicunha from './img/logo-vicunha.jpg';
function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem ={MinhaFoto}
          nome="Camila" 
          descricao="Oi, eu sou o Camila. Atualmente sou estudante de Web FullStack na Labenu."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/3301/3301707.png" 
          texto="Ver mais"
        />
      </div>

      <div>
      <CardPequeno
      imagem="https://cdn.icon-icons.com/icons2/72/PNG/256/email_14410.png"
      nome="Email: "
      descricao="  camilapinheiroc@gmail.com"
      />
    </div>

      <div>
      <CardPequeno
      imagem="https://i.pinimg.com/564x/88/bc/00/88bc005a6b728cafbf76668607205b25.jpg"
      nome="Endereço: "
      descricao=" Rua Labenu, n° 100"
      />
    </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={LogoAppen} 
          nome="APPEN" 
          descricao="Consultora independente" 
        />
        
        <CardGrande 
          imagem={LogoVicunha}
          nome="Vicunha Têxtil S/A" 
          descricao="Assitente Técnica em Laboratório Químico" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />
             

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
