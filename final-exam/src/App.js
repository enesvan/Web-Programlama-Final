import logo from './bm.png';
import './App.css';
import React,{useState} from 'react';

function App() {
  const [ekmekCount, setekmekCount] = useState(0);
  const [cikolataCount, setcikolataCount] = useState(0);
  const [domatesCount, setdomatesCount] = useState(0);
  return (
    <div className="App">
      <br/>
      <img src={logo}/><br/>
      <h3>Erciyes Üniversitesi Bilgisayar Mühendisliği Bölümü Web Programlama 1 dersi final sorusu</h3><br/>
      <h4>Dr. Öğretim Üyesi Fehim Köylü</h4><br/>
      <h2>Alışveriş Uygulaması</h2><br/>
      <h5>Vermek istediğiniz siparişler için aşağıdaki listeden seçerek belirtiniz.</h5><br/>
      <div style={{marginBottom:'20px'}}>
            <div class="card-body" style={{maxHeight:300, maxWidth:300,display:'inline-block',marginRight:'15px'}}>
            <h5 class="card-title">Ekmek</h5>
            <h1>2 tl / adet</h1>
            <p class="card-text">Somun Ekmek</p>
            <p class="card-text">200gr</p>
            <button type="button" class="btn btn-primary" onClick={() => setekmekCount(prevCount => prevCount + 1)}>Sepete Ekle</button>
            </div>
            <div class="card-body" style={{maxHeight:300, maxWidth:300,display:'inline-block',marginRight:'15px'}}>
            <h5 class="card-title">Çikolata</h5>
            <h1>5 tl / adet</h1>
            <p class="card-text">Bitter Çikolata</p>
            <p class="card-text">60gr</p>
            <button type="button" class="btn btn-primary" onClick={() => setcikolataCount(prevCount => prevCount + 1)} >Sepete Ekle</button>
            </div>
            <div class="card-body" style={{maxHeight:300, maxWidth:300,display:'inline-block'}}>
            <h5 class="card-title">Domates</h5>
            <h1>6 tl / kg</h1>
            <p class="card-text">Domates</p>
            <p class="card-text">Antalya Sera</p>
            <button type="button" class="btn btn-primary" onClick={() => setdomatesCount(prevCount => prevCount + 1)}>Sepete Ekle</button>
            </div>
      </div>
      <h3>Siparişleriniz</h3>
      <ul class="list-group" style={{marginLeft:300,marginRight:300}}>
        <li class="list-group-item">Somun Ekmek({ekmekCount}) {ekmekCount*2} tl </li>
        <li class="list-group-item">Çikolata({cikolataCount}) {cikolataCount*5} tl </li>
        <li class="list-group-item">Domates({domatesCount}) {domatesCount*6} tl </li><br/>
        <li class="list-group-item">Toplam fiyat : {(ekmekCount*2)+(cikolataCount*5)+(domatesCount*6)} TL</li>
        <button type="button" class="btn btn-primary">Sıfırla</button>
      </ul>
    </div>
  );
}

export default App;
