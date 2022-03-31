// Code Java Script permettant la génération d'un nouveau modal (element de Boostrap) prenant en compte les différents texte sous forme de liste


const images = document.getElementsByClassName("radio-btns__btn")

const textes = [
  {
    titre : "Network",
    texte : "Create, secure, manage and repair a network with different VLAN, router and switch systems (management, routing, monitoring and SSH). Our different hardware solutions are Aruba (HP) and Cisco."
  },
  {
    titre : "Security & Privacy",
    texte : "ANSSI Certification MOOC: IT security awareness."
  },
  {
    titre : "System",
    texte : "I use Linux in dual boot (Kali-Linux) but I use Windows more every day for practice, I find Windows easier to use on a daily basis."
  },
  {
    titre : "Programming",
    texte : "Python, HTML5, CSS3, JS, Arduino and recursives"
  },
  {
    titre : "English",
    texte : "My level of reading in English is quite good but my oral remains perfectible"
  },
  {
    titre : "Social Medias",
    texte : `For 5 years now I have been managing the social networks of different people on a daily basis and I publish for them or I help them in their publications.
    <br>I master Photoshop for media creations.`
  }
]
for (let i = 0; i<images.length ;i++){
  const element = images[i]
  element.addEventListener("click",()=>{
    const modal = new bootstrap.Modal(document.getElementById('contenu'))
    document.getElementsByClassName("modal-body")[0].innerHTML = textes[i].texte
    document.getElementsByClassName("modal-title")[0].innerText = textes[i].titre
    modal.show()
  })
}