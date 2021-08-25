const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const Traveler = require("../../models/Traveler");

const { hunter } = require("./../../app");

//GIVEN

Given('um Hunter de nome {string}', function (string) {
    hunter.name = string;
});

Given('ele sempre começa a viagem com {int} refeições', function (int) {
    hunter.food = int;
});

Given('sempre começa a viagem saudável.', function () {
    hunter.isHealthy = true
});

//WHEN

When('o Hunter sair para caçar {int} vezes', function (int) {
    for(let i = 0; i < int; i++){
        hunter.hunt()
    };
});

When('o Hunter parar para comer {int} vezes', function (int) {
    for(let i = 0; i < int; i++){
        hunter.eat()
    };
});

When('o Hunter der {int} refeições a outro Traveler', function (int) {
    hunter.giveFood(Traveler, int);
});

//THEN

Then('a quantidade de food deve ser igual a {int}', function (int) {
    assert.strictEqual(hunter.food, int);
    });

Then('o Hunter não ficará doente', function () {
    hunter.isHealthy = true;
});

Then('o Hunter ficará doente', function () {
    hunter.isHealthy = false;
  });

Then('a quantidade de refeições deve ser igual {int}', function (int) {
    assert.strictEqual(hunter.food, int)
});
