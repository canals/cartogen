/**
 * Created by canals on 02/02/2016.
 */

var program = require('commander');
var pictogen = require('./pictogen').pictogen;



var app = (function() {


    var opt ={
        output : 'output',
        texte : 'yo man',
        domaine : 'defaut',
        cible : 'defaut',
        esprit : 'defaut',
        config : 'config.json'
    };

    function domaine(val) {

        opt.domaine = val;
    }
    function cible(val) {

        opt.cible = val;
    }
    function esprit(val) {

        opt.esprit= val;
    }
    function output(val) {
        opt.output=val;
    }
    function texte(val) {
        opt.texte = val;
    }
    function config(val){
        opt.config = val;
    }

    return {


        parse : function() {

            program
                .usage('[options] : génère la carte en fonction des options choisies -' +
                        'utilise des valeurs par défauts si option absente')
                .option('-f, --file <f>', 'nom du fichier de configuration - par défaut ./config.json', config)
                .option('-d, --domaine <s>', 'pour choisir  le domaine parmi : '+
                        'alimentaire | cosmetique | meuble  | techno | vetement | voiture ', domaine)
                .option('-c, --cible <s>', 'pour choisir  la cible (couleurs) parmi : '+
                        'etudiant | jeune | menagere | 3age | enfant | ados ', cible)
                .option('-e, --esprit <s>', 'pour choisir l\'esprit (voir valeur dans config.json) - polices installées', esprit)
                .option('-t, --text <s>', 'texte à insérer', texte)
                .option('-o, --output <f>', 'nom du fichier de sortie - par défaut output', output);

                program.parse(process.argv);
            return opt;
        }

    }
})();



try {
    var opt = app.parse();
    pictogen.init(opt.config, opt);
    pictogen.do();
} catch (err) {
    console.log('erreur : '+err);

}


