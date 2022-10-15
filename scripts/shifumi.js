// mon script

/**
 * 
 * @example
 * // returns "pierre" || "feuille" || "ciseaux" || "lezard" || "spock"
 * figure_aleatoire();
 * @returns {String} Une figure ∈ ["pierre", "feuille", "ciseaux", "lezard", "spock"]
 */
function figure_aleatoire() {
    let figures = ["pierre", "feuille", "ciseaux", "lezard", "spock"];
    let nb_figures = figures.length;
    let index_aleatoire = rand_pos_int(nb_figures - 1);

    return figures[index_aleatoire];
};
