const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const Traveler = require("../../models/Traveler");

const { doctor } = require("./../../app");

// GIVEN

Given('um Doctor de nome {string}', function (string) {
    doctor.name = string;
  });

// WHEN

When('o Doctor cura um Traveler doente', function () {
    doctor.heal(Traveler);
});

When('o Doctor tenta curar um Traveler saudável', function () {
    doctor.heal(Traveler);
  });
// THEN

Then('o Traveler recupera sua saúde', function () {
    assert.strictEqual(Traveler.isHealthy, true);
});

Then('o Traveler permanece saudável', function () {
    assert.strictEqual(Traveler.isHealthy, true);
  });




