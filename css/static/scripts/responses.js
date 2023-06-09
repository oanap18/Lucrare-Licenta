function getBotResponse(input) {
    //rock paper scissors
    if (input == "Hai sa ne jucam ceva") {
        return "Hai sa ne jucam piatra foarfeca hartie. Tu începi!";
    } if (input == "piatra") {
        return "hartie";
    } else if (input == "hartie") {
        return "foarfeca";
    } else if (input == "foarfeca") {
        return "piatră";
    }

    // Simple responses
    if (input == "buna") {
        return "Bună ziua! Cu ce vă putem ajuta?";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if (input == "Buna") {
        return "Bună ziua! Cu ce vă putem ajuta?"
    } else if (input == "Bună") {
        return "Bună ziua! Cu ce vă putem ajuta?"
    } else if (input == "program secretariat") {
        return "Secretariatul este deschis de la orele 12:00 până la 15:00. Vă mai putem ajuta cu alte informații?"
    } else if (input == "Program secretariat") {
        return "Secretariatul este deschis de la orele 12:00 până la 15:00. Vă mai putem ajuta cu alte informații?"
    } else if (input == "locatie secretariat") {
        return "Secretariatul este localizat pe B-dul Eroilor nr. 25 Brașov, România. Vă mai putem ajuta cu alte informații?"
    } else if (input == "Locatie secretariat") {
        return "Secretariatul este localizat pe B-dul Eroilor nr. 25 Brașov, România. Vă mai putem ajuta cu alte informații?"
    } else if (input == "nr telefon secretariat") {
        return "Ca să suni la secretariat apelează la 0771308604. Vă mai putem ajuta cu alte informații?"
    } else if (input == "Nr telefon secretariat")
        return "Ca să suni la secretariat apelează la 0771308604. Vă mai putem ajuta cu alte informații?"
    else {
        return "Încearcă să întrebi - program secretariat - locatie secretariat - nr telefon secretariat - alte optiuni!";
    }

}