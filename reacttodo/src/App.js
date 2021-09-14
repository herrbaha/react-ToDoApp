import React, { useState } from 'react';
import './App.css';

const INITIAL_STATE = [
  { id: 1,
  baslik:"alisveris yap",
tamamlandi: false},
{ id: 2,
baslik:"fatura öde",
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
          <div className="{item.tamamlandi}"></div>
        ))}
      </div>
    </div>
  );
}


