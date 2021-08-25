# language: pt

Funcionalidade: Doctor
    Como um Doctor
    Eu devo curar outros viajantes
    Para que eles possam seguir a viagem saudáveis

    Contexto:
        Dado um Doctor de nome "Wynne"
        E ele sempre começa a viagem com 1 refeição
        E ele sempre começa a viagem saudável.
    
    Cenário: Curou um Traveler que estava doente
        Quando o Doctor cura um Traveler doente
        Então o Traveler recupera sua saúde
    
    Cenário: Tentou curar um Traveler que estava saudável
        Quando o Doctor tenta curar um Traveler saudável
        Então o Traveler permanece saudável
