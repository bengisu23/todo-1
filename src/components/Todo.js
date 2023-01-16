import React, { useState } from "react";

const Todo = ({ item, yapilacaklar, setYapilacaklar }) => {
  const [guncelleButonuAktifMi, setGuncelleButonuAktifMi] = useState(false)
  const [guncellenecekText, setGuncellenecekText] = useState(item.text)
  const todoSil = () => {
    const gecici = yapilacaklar.filter((x) => x.id !== item.id)
    setYapilacaklar(gecici)
  }

  const yapildiDeğiştir = () => {
    var gecici = [];
    for (let i = 0; i < yapilacaklar.length; i++) {
      if (yapilacaklar[i].id === item.id) {
        var guncellenmisTodo = {
          /*text : item.text,
          id : item.id,
          date : item.date,*/
          ...item,
          yapildimi: !item.yapildimi
        };
        gecici.push(guncellenmisTodo);
      } else {
        gecici.push(yapilacaklar[i]);
      }
    }
    setYapilacaklar(gecici)
  };


  const todoGuncelle = () => {
    if (guncellenecekText === "") {
      alert("cannot be empty")
      return
    }
    if(guncellenecekText === item.text){
      setGuncelleButonuAktifMi(false)
      return
    }
    const digerYapilacaklar = yapilacaklar.filter(x => x.id !== item.id)
    var textMevcutMu = false
    digerYapilacaklar.map(diger => {
      if (diger.text.toLowerCase() === guncellenecekText.toLowerCase()) {
        textMevcutMu = true
      }
    })
    if (textMevcutMu === true) {
      if (window.confirm("This already exist. Do you want to add?") === false) {
        return
      }
    }

    var gecici = []
    for (let i = 0; i < yapilacaklar.length; i++) {
      if (yapilacaklar[i].id === item.id) {
        var guncellenmisTodo = {
          ...item,
          text: guncellenecekText
        }
        gecici.push(guncellenmisTodo)
      } else {
        gecici.push(yapilacaklar[i])
      }
    }
    setYapilacaklar(gecici)
    setGuncelleButonuAktifMi(false)
  }



  /*const todoSil = () => {
    var gecici = [];
    for (let i = 0; i < yapilacaklar.length; i++) {
      if (item.id !== yapilacaklar[i].id) {
        gecici.push(yapilacaklar[i]);
      }
    }
    setYapilacaklar(gecici);
  };*/



  return (
    <div className="alert alert-secondary d-flex justify-content-between">
      <div>
        {guncelleButonuAktifMi === true ? (
          <div className="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Write What You Want To Add..."
              value={guncellenecekText}
              onChange={(event) => setGuncellenecekText(event.target.value)}
            />
            <button
              onClick={() => {
                setGuncelleButonuAktifMi(false);
                setGuncellenecekText(item.text);
              }}
              className="btn btn-danger">
              Give up
            </button>
            <button onClick={todoGuncelle} className="btn btn-primary" type="submit">
              Approve
            </button>
          </div>
        ) : (
          <h2 style={{ textDecoration: item.yapildimi === true ? "line-through" : 'none' }}>{item.text}</h2>
        )
        }
        <p>
          tarih: {new Date(item.date).toLocaleString().replaceAll("/", ".")}
        </p>
      </div>
      <div className="d-flex align-items-center">
        <div class="btn-group" role="group" aria-label="Basic example">
          <button onClick={todoSil} type="button" class="btn btn-sm btn-danger">
            Delete
          </button>
          <button onClick={() => setGuncelleButonuAktifMi(true)} type="button" class="btn btn-sm btn-secondary">
            Update
          </button>
          <button onClick={yapildiDeğiştir} type="button" class="btn btn-sm btn-info">
            {item.yapildimi === true ? "Not Done" : "Done "}
          </button>
        </div>
      </div>
    </div>
  )
}
export default Todo;