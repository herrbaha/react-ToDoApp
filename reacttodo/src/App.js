import React, { useState } from "react";
import "./App.css";

const INITIAL_STATE = [
  { id: 1, baslik: "Alisveris Yap", tamamlandi: false },
  { id: 2, baslik: "Fatura Öde", tamamlandi: true },
];

export default function App() {
  const [liste, setListe] = useState(INITIAL_STATE);
  const [yeniBaslik, setYeniBaslik] = useState("");

  const addNew = (title) => {
    setListe([...liste, { id: Date.now(), baslik: title, tamamlandi: false }]);//id.date.now niye??
    setYeniBaslik("");
  };

  return (
    <div className="App">
      <h1>Yapilacaklar Listesi</h1>
      <div className="ekleme_formu">
        <input
          value={yeniBaslik}
          onChange={(e) => setYeniBaslik(e.target.value)}//e.target.value tam olarak nedir? inputun valuesuna ersimek icin herhalde ama niye böyle kullaniyliyor?
          placeholder="listeye ekle"
        />
        <button onClick={() => addNew(yeniBaslik)}> Ekle </button>
      </div>
      <div className="liste">
        {liste.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setListe(
                liste.map((el) =>
                  el.id === item.id ? { ...el, tamamlandi: !el.tamamlandi } : el
                )
              );
            }}
            className={item.tamamlandi ? "yapildi" : ""}
          >
            {item.baslik}
          </div>
        ))}
        ;
      </div>
      <button
        onClick={() => setListe(liste.filter((item) => !item.tamamlandi))}
        className="temizle"
      >
        Tamamlananlari Temizle
      </button>
    </div>
  );
}
