import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados Pessoais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
          nome="Camila" 
          descricao="Olá, eu sou Camila. Estou em transição de carreira, e atualmente sou estudante de Desenvolvimento Web FullStack."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/2026/2026596.png" 
          texto="Ver mais"
        />
      </div>


      <div>
      <CardPequeno
        imagem="https://cdn-icons-png.flaticon.com/512/561/561127.png"
        titulo="Email:  "
        dado=" camilapinheiroc@gmail.com"
      /> 
    
      <CardPequeno
      
        imagem="https://cdn4.iconfinder.com/data/icons/icon-flat-icon-set/50/localization-512.png"
        titulo="Endereço: "
        dado=" Rua Labenu, 1234."
      
      />
      </div>


      <div className="page-section-container">
        <h2>Experiências Profissionais</h2>
        <CardGrande 
          imagem="https://texbrasil.com.br/wp-content/uploads/2015/08/template-logos-vicunha-215x215.jpg" 
          nome="Vicunha Têxtil S/A" 
          descricao="Assistente Técnica de Laboratório Químico" 
        />
        
        <CardGrande 
          imagem="https://novatics.com.br/static/795602be790e14842e4aac21bc6c168f/188e3/logo-appen.png" 
          nome="Appen" 
          descricao="Consultora" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas Redes Sociais</h2>
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
