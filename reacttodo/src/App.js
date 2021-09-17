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
  const [yeniBaslik, setYeniBaslik] = useState("");
console.log("YENI BASLIK", "yenibaslik")
  return (
    <div className="App">
      <h1>Yapilacaklar Listesi</h1>
      <div className="ekleme_formu">
        <input value={yeniBaslik} onChange = {e => setYeniBaslik(e.target.value)} placeholder="listeye ekle" />
        <button onClick = {() => {setListe([...liste, {id:Date.now(), baslik:yeniBaslik, tamamlandi:false}
        ]);
        setYeniBaslik("");
        }}>Ekle</button>
      </div>
      <div className="liste">

        {liste.map((item, index) => (
          <div 
          key={index}
          onClick={() => {
            setListe(
              liste.map(el => 
                el.id === item.id ? {...el, tamamlandi: !el.tamamlandi} :el))
          }}
           className={item.tamamlandi ? "yapildi" : ""}>{item.baslik}</div>
        ))};
      </div>
      <button onClick={() => setListe(liste.filter(item => !item.tamamamlandi))} className="temizle">Tamamlananlari Temizle</button>
    </div>
  );
};


