function newGame (homeTeam, hour, awayTeam) {
    return `
    <li>
        <img src="src/images/icon-${homeTeam}.svg" alt="Bandeira do ${homeTeam}">

        <strong>${hour}</strong>

        <img src="src/images/icon-${awayTeam}.svg" alt="Bandeira da ${awayTeam}">
    </li>
    `
}

function newCard (date, weekday, game) {
    return `
        <section class="card">
            <div class="date">
                <h2>${date}</h2>
                <p>${weekday}</p>
            </div>

            <ul>
                ${game}
            </ul>
        </section>
        `
}

document.querySelector("#cards").innerHTML = 
        newCard("20/07", "quinta", 
                    newGame("new-zealand", "16H00", "norway") + 
                    newGame("australia", "16H00", "ireland")
                ) +
        newCard("21/07", "sexta", 
                    newGame("philippines", "13H00", "switzerland") +
                    newGame("nigeria", "13H00", "canada") +
                    newGame("spain", "13H00", "costa-rica")
                ) +
        newCard("22/07", "sábado", 
                newGame("usa", "16H00", "vietnam") +
                newGame("zambia", "16H00", "japan") +
                newGame("england", "16H00", "tba") +
                newGame("denmark", "16H00", "china") 
                ) +
        newCard("23/07", "domingo", 
                newGame("france", "16H00", "jamaica") +
                newGame("netherlands", "16H00", "tba") +
                newGame("sweden", "16H00", "south-africa") 
                ) +
        newCard("24/07", "segunda", 
            newGame("italy", "16H00", "argentina") +
            newGame("germany", "16H00", "morocco") +
            newGame("brazil", "16H00", "tba") 
                ) +
        newCard("25/07", "terça", 
            newGame("colombia", "16H00", "south-korea") +
            newGame("new-zealand", "16H00", "philippines") +
            newGame("switzerland", "16H00", "norway") 
                ) +
        newCard("26/07", "quarta", 
            newGame("spain", "16H00", "zambia") +
            newGame("japan", "16H00", "costa-rica") +
            newGame("canada", "16H00", "ireland") 
                ) +
        newCard("27/07", "quinta", 
            newGame("usa", "16H00", "netherlands") +
            newGame("tba", "16H00", "vietnam") +
            newGame("australia", "16H00", "nigeria") 
                ) +
        newCard("28/07", "sexta", 
            newGame("england", "16H00", "denmark") +
            newGame("argentina", "16H00", "south-korea") +
            newGame("china", "16H00", "tba") 
                ) +
        newCard("29/07", "sábado", 
            newGame("sweden", "16H00", "italy") +
            newGame("france", "16H00", "brazil") +
            newGame("tba", "16H00", "jamaica") 
                ) +
        newCard("30/07", "domingo", 
            newGame("norway", "16H00", "philippines") +
            newGame("germany", "16H00", "colombia") +
            newGame("switzerland", "16H00", "new-zealand") +
            newGame("south-korea", "16H00", "morocco") 
                ) +
        newCard("31/07", "segunda", 
            newGame("canada", "16H00", "australia") +
            newGame("japan", "16H00", "spain") +
            newGame("costa-rica", "16H00", "zambia") +
            newGame("ireland", "16H00", "nigeria") 
                ) +
        newCard("01/08", "terça", 
            newGame("tba", "16H00", "usa") +
            newGame("vietnam", "16H00", "netherlands") +
            newGame("tba", "16H00", "denmark") +
            newGame("china", "16H00", "england") 
                ) +
        newCard("02/08", "quarta", 
            newGame("tba", "16H00", "france") +
            newGame("jamaica", "16H00", "brazil") +
            newGame("south-africa", "16H00", "italy") +
            newGame("argentina", "16H00", "sweden") 
                ) +
        newCard("03/08", "quinta", 
            newGame("south-korea", "16H00", "germany") +
            newGame("morocco", "16H00", "colombia") 
                )

