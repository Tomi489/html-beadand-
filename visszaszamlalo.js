function napokszamolo() {
    const datumdarab ="-06-23"
    let mostanidatum = new Date();
    honap=Number(mostanidatum.getMonth())
    nap=Number(mostanidatum.getDate())
    ev=Number(mostanidatum.getFullYear())
    if(honap>5)
    {
      if(honap==6)
      {
        if(nap>23)
        {
          ev=ev+1
        }
      }else
      {
        ev=ev+1
      }
    }
    ev=ev.toString()
    let strdatum=[ev,datumdarab]
    const celdatum = new Date(strdatum.join(''));
    let kulombseg = celdatum.getTime() - mostanidatum.getTime();
    let napok = Number(Math.ceil(kulombseg / (1000 * 60 * 60 * 24)));

    let szamolo = document.getElementById("visszaszamlalo");
    switch(true)
    {case (napok<100):
      szamolo.textContent = `Már csak ${napok} nap van nyárig`;
      break;
    case (napok==100):
      szamolo.textContent = `Pont ${napok} nap van nyárig`;
      break;
    case (napok<321):
      szamolo.textContent = `Még ${napok} nap van nyárig`;
      break;
    case (napok>320):
      szamolo.textContent = `Még nyár van!`;
    }
    return napok;
  }