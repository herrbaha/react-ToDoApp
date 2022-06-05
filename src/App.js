import { useState } from "react";
import "./App.css";

const INITIAL_STATE = [
  { id: 1, baslik: "Alisveris Yap", tamamlandi: true },
  { id: 2, baslik: "Fatura Öde", tamamlandi: true },
];

export default function App() {
  const [yeniBaslik, setYeniBaslik] = useState("");
  const [liste, setListe] = useState(INITIAL_STATE);
  

  const addNew = (title) => {
    setListe([
      ...liste,
      { id: liste.length + 1, baslik: title, tamamlandi: false },
    ]); //id.date.now() veya liste.length+1 niye??  her yeni eklenen element icin ayri bir seye ihtiyacimiz var, bu hepsi icin farkli olmali, o yüzden burada saat kullanilmis bu farkli birsey de olabilirdi.
    setYeniBaslik(""); 
  };

  return (
    <div className="App">
      <h1>Yapilacaklar Listesi</h1>
      <div className="ekleme_formu">
        <input
          value={yeniBaslik}
          onChange={(e) => setYeniBaslik(e.target.value)}
          placeholder="listeye ekle"
        />
        <button onClick={() => addNew(yeniBaslik)}> Ekle </button>
      </div>
      <div className="liste">
        {liste.map(
          (
            item,
            index
          ) => (
            <div
              key={index} //burada item.id de olabilirdi
              onClick={() => {
                setListe(
                  liste.map(
                    (el) =>
                      el.id === item.id
                        ? { ...el, tamamlandi: !el.tamamlandi }
                        : el //!i burasi tam olarak nasil okunmali ??
                  )
                );
              }}
              className={item.tamamlandi ? "yapildi" : ""}
            >
              {item.baslik}
            </div>
          )
        )}
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
