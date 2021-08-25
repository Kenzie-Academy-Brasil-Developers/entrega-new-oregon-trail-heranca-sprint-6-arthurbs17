# language: pt

Funcionalidade: Hunter
    Como um Hunter
    Eu devo ter mais proveito na caçada
    Porém utilizado mais comida
    Começo com mais comida
    Posso dar comida a outros Travelers

    Contexto:
        Dado um Hunter de nome "Legolas"
        E ele sempre começa a viagem com 2 refeições
        E sempre começa a viagem saudável.
        
        Cenário: Caçou para conseguir mais refeições
            Quando o Hunter sair para caçar 1 vezes
            Então a quantidade de food deve ser igual a 7
        
        Cenário: Comeu e ficou saudável
            Quando o Hunter parar para comer 1 vezes
            Então a quantidade de food deve ser igual a 0
            E o Hunter não ficará doente
        
        Cenário: Comeu e ficou doente
            Quando o Hunter parar para comer 2 vezes
            Então a quantidade de food deve ser igual a 0
            E o Hunter ficará doente
        
        Cenário: Saiu para caçar, comeu e seguiu saudável
            Quando o Hunter sair para caçar 2 vezes
            E o Hunter parar para comer 2 vezes
            Então a quantidade de food deve ser igual a 8
            E o Hunter não ficará doente
        
        Cenário: Deu comida para outro Traveler
            Quando o Hunter der 1 refeições a outro Traveler
            Então a quantidade de refeições deve ser igual 1

        Cenário: Deu comida, mas não tinha o suficiente pedido
            Quando o Hunter der 3 refeições a outro Traveler
            Então a quantidade de refeições deve ser igual 2