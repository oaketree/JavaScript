﻿(function()
{
    if (!window.ADS)
    { window['ADS'] = {} }
    function isCompatible(other) {
        if(other===false||!Array.prototype.push||!Object.hasOwnProperty||!document.createElement||!document.getElementsByTagName)
            return false;
        return true;
    }
    window['ADS']['isCompatible']=isCompatible;
    function $() { }
    window['ADS']['$'] = $;
    function addEvent(node, type, listener) { }
    window['ADS']['addEvent'] = addEvent;
    function removeEvent(node, type, listener) { }
    window['ADS']['removeEvent'] = removeEvent;
    function getElementByClassName(className, tag, parent) { }
    window['ADS']['getElementByClassName'] = getElementByClassName;
    function toggleDisplay(node, value) { }
    window['ADS']['toggleDisplay'] = toggleDisplay;
    function insertAfter(node, referenceNode) { }
    window['ADS']['insertAfter'] = insertAfter;
    function removeChildren(parent) { }
    window['ADS']['removeChildren'] = removeChildren;
    function prependChild(parent, newChild) { }
    window['ADS']['prependChild'] = prependChild;

    

})();