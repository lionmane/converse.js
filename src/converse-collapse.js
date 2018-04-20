(function (root, factory) {
    define(["converse-core"], factory);
}(this, function (converse) {
    "use strict";
    const {utils, Strophe, _} = converse.env;

    converse.plugins.add('converse-collapse', {
        initialize (element) {

            const { _converse } = this;
            const { __ } = _converse;

            console.log(_converse);

            if (element.classList.contains("lefty") || element.classList.contains("righty")) {
                const expandButton = document.createElement("a");
                expandButton.setAttribute('href', '#');
                expandButton.classList.add("converse-collapse");
                expandButton.addEventListener('click', function () {
                    element.classList.toggle('collapsed');
                });
                console.log(element);
                element.append(expandButton);
            }
        }
    });

}));


