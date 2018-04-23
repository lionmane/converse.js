(function (root, factory) {
    define(["converse-core"], factory);
}(this, function (converse) {
    "use strict";
    const {utils, Strophe, _} = converse.env;

    converse.plugins.add('converse-collapse', {
        dependencies: [
            'converse-chatboxes'
        ],
        initialize() {

            const {_converse} = this;
            const {__} = _converse;

            const element = _converse.root.querySelector('#conversejs');

            element.classList.add("collapsable");
            const button = this.makeButton(element);

            setTimeout(function(){
                element.append(button);
            },100);


        },
        makeButton(element){
            const button = document.createElement("a");
            button.setAttribute('href', '#');
            button.classList.add("converse-collapse-toggle");
            button.addEventListener('click', function () {
                element.classList.toggle('collapsed');
            });
            return button;
        }
    });

}));


