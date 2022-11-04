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
                    newGame("new-zealand", "04H00", "norway") + 
                    newGame("australia", "07H00", "ireland") +
                    newGame("nigeria", "23H30", "canada")
                ) +
        newCard("21/07", "sexta", 
                    newGame("philippines", "01H00", "switzerland") +
                    newGame("usa", "02H00", "vietnam") +
                    newGame("spain", "03H30", "costa-rica")
                ) +
        newCard("22/07", "sábado", 
                newGame("zambia", "03H00", "japan") +
                newGame("england", "04H30", "tba") +
                newGame("denmark", "09H00", "china") 
                ) +
        newCard("23/07", "domingo", 
                newGame("france", "07H00", "jamaica") +
                newGame("netherlands", "04H30", "tba") +
                newGame("sweden", "02H00", "south-africa") 
                ) +
        newCard("24/07", "segunda", 
            newGame("italy", "03H00", "argentina") +
            newGame("germany", "03H30", "morocco") +
            newGame("brazil", "08H30", "tba") +
            newGame("colombia", "01H00", "south-korea")
                ) +
        newCard("25/07", "terça", 
            newGame("new-zealand", "02H30", "philippines") +
            newGame("switzerland", "04H00", "norway") 
                ) +
        newCard("26/07", "quarta", 
            newGame("japan", "01H00", "costa-rica") +    
            newGame("spain", "02H30", "zambia") +
            newGame("canada", "09H00", "ireland") 
                ) +
        newCard("27/07", "quinta", 
            newGame("usa", "00H00", "netherlands") +
            newGame("tba", "03H30", "vietnam") +
            newGame("australia", "07H00", "nigeria") +
            newGame("argentina", "20H00", "south-korea") 
                ) +
        newCard("28/07", "sexta", 
            newGame("england", "03H30", "denmark") +
            newGame("china", "08H30", "tba") 
                ) +
        newCard("29/07", "sábado", 
            newGame("sweden", "04H30", "italy") +
            newGame("france", "07H00", "brazil") +
            newGame("tba", "09H30", "jamaica") 
                ) +
        newCard("30/07", "domingo", 
            newGame("south-korea", "02H00", "morocco") + 
            newGame("switzerland", "03H00", "new-zealand") +
            newGame("norway", "04H00", "philippines") +
            newGame("germany", "06H30", "colombia")
                ) +
        newCard("31/07", "segunda", 
            newGame("costa-rica", "03H00", "zambia") +
            newGame("japan", "06H00", "spain") +
            newGame("canada", "07H00", "australia") +
            newGame("ireland", "07H00", "nigeria") 
                ) +
        newCard("01/08", "terça", 
            newGame("vietnam", "03H00", "netherlands") +
            newGame("tba", "04H00", "usa") +
            newGame("tba", "06H00", "denmark") +
            newGame("china", "08H30", "england") 
                ) +
        newCard("02/08", "quarta", 
            newGame("argentina", "03H00", "sweden") +
            newGame("south-africa", "06H00", "italy") +
            newGame("tba", "07H00", "france") +
            newGame("jamaica", "07H00", "brazil") 
                ) +
        newCard("03/08", "quinta", 
            newGame("south-korea", "07H00", "germany") +
            newGame("morocco", "07H00", "colombia") 
                )

