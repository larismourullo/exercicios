function verify(regexp, yes, no) {
    // Ignore unfinished tests
    if (regexp.source == "...") return;

    yes.forEach(function (s) {
        if (!regexp.test(s)) {
            console.log("Failure to match '" + s + "'");
        }
    });

    no.forEach(function (s) {
        if (regexp.test(s)) {
            console.log("Unexpected match for '" + s + "'");
        }
    });
}

// "car" e "cat"
verify(/ca[rt]/,
    ["my car", "bad cats"],
    ["camper", "high art"]);

// "pop" e "prop"
verify(/pr?op/,
    ["pop culture", "mad props"],
    ["plop"]);

// "ferret", "ferry", e "ferrari"
verify(/ferr(et|y|ari)/,
    ["ferret", "ferry", "ferrari"],
    ["ferrum", "transfer A"]);

// Qualquer palavra terminando em "ious"
verify(/ious\b/,
    ["how delicious", "spacious room"],
    ["ruinous", "consciousness"]);

// Um espaço em branco seguido por um ponto, vírgula, dois-pontos, ou ponto-e-vírgula
verify(/\s[.,:;]/,
    ["bad punctuation ."],
    ["escape the dot"]);

// Uma palavra com mais de seis letras
verify(/\w{7,}/,
    ["hottentottententen"],
    ["no", "hotten totten tenten"]);

// Uma palavra sem a letra "e"
verify(/\b[^\We]+\b/,
    ["red platypus", "wobbling nest"],
    ["earth bed", "learning ape"]);