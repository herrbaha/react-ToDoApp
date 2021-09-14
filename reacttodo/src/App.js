import React, { useState } from 'react';
import './App.css';

const INITIAL_STATE = [
  { id: 1,
  baslik:"Alisveris Yap",
tamamlandi: false},
{ id: 2,
baslik:"Fatura Öde",
tamamlandi:true}
];


export default function App() {
  const [liste, setListe] = useState(INITIAL_STATE);

  return (
    <div className="App">
      <h1>Yapilacaklar Listesi</h1>
      <div className="ekleme_formu">
        <input placeholder="listeye ekle" />
        <button>Ekle</button>
      </div>
      <div className="liste">

        {liste.map(item => (
          <div 
          onClick={() => {
            setListe(
              liste.map(el => 
                el.id === item.id ? {...el, tamamlandi: !el.tamamlandi} :el))
          }}
           className={item.tamamlandi ? "yapildi" : ""}
           >
             {item.baslik}
             </div>
        ))};
      </div>
      <button className="temizle">Tamamlananlari Temizle</button>
    </div>
  );
};


