function analyserQuiz() {
  const form = document.getElementById("quizForm");
  const reponses = {};

  // récupérer les réponses
  ["q1", "q2", "q3"].forEach(q => {
    const checked = form.querySelector(`input[name="${q}"]:checked`);
    if (checked) {
      const genre = checked.value;
      reponses[genre] = (reponses[genre] || 0) + 1;
    }
  });

  // déterminer le genre dominant
  let genreChoisi = null;
  let max = 0;
  for (let genre in reponses) {
    if (reponses[genre] > max) {
      max = reponses[genre];
      genreChoisi = genre;
    }
  }

  // suggestions par genre
  const suggestions = {
    romance: {
      titre: "❤️ Ton genre est la Romance !",
      livres: [
        "« Rendez-vous au Café du Bonheur » — Lucy Diamond",
        "« Nos étoiles contraires » — John Green"
      ]
    },
    thriller: {
      titre: "🔪 Ton genre est le Thriller !",
      livres: [
        "« La Faille » — Franck Thilliez",
        "« La Jeune Fille et la Nuit » — Guillaume Musso"
      ]
    },
    manga: {
      titre: "🍥 Ton genre est le Manga !",
      livres: [
        "« Chainsaw Man » — Tatsuki Fujimoto",
        "« One Piece » — Eiichiro Oda"
      ]
    },
    bd: {
      titre: "🎨 Ton genre est la Bande Dessinée !",
      livres: [
        "« Les Cahiers d’Esther » — Riad Sattouf",
        "« Astérix et la Transitalique » — Goscinny/Uderzo"
      ]
    },
    dark: {
      titre: "🖤 Ton genre est la Dark Romance !",
      livres: [
        "« Captive » — Sarah Rivens",
        "« Perfect Illusion » — Claudia Tan"
      ]
    }
  };

  // afficher le résultat
  const zoneResultat = document.getElementById("resultat");
  const genreElt = document.getElementById("genre");
  const suggestionElt = document.getElementById("suggestion");

  if (genreChoisi) {
    const infos = suggestions[genreChoisi];
    genreElt.textContent = infos.titre;
    suggestionElt.innerHTML = "<ul>" + infos.livres.map(l => `<li>${l}</li>`).join("") + "</ul>";
    zoneResultat.style.display = "block";
  } else {
    genreElt.textContent = "❌ Merci de répondre à toutes les questions !";
    suggestionElt.innerHTML = "";
    zoneResultat.style.display = "block";
  }
}
