(function()
{
    if (!window.ADS)
    { window['ADS'] = {} }
    function isCompatible(other) {
        if(other===false||!Array.prototype.push||!Object.hasOwnProperty||!document.createElement||!document.getElementsByTagName)
            return false;
        return true;
    }
    window['ADS']['isCompatible']=isCompatible;
    function $() {
        var elements = new Array();
        for (var i = 0; i < arguments.length; i++) {
            var element = arguments[i];
            if (typeof element == 'string') {
                element = document.getElementById(element);
            }
            if (arguments.length == 1)
                return element;
            elements.push(element);
        }
    }
    window['ADS']['$'] = $;
    function addEvent(node, type, listener) {
        if (!isCompatible()) return false;
        if (!(node = $(node))) return false;
        if (node.addEventListener(type, listener, false)) return true;
        else if (node.attachEvent) {
            node['e' + type + listener] = listener;
            node[type + listener] = function () {
                node['e' + type + listener](window.event);
            }
            node.attachEvent('on' + type, node[type + listener]);
            return true;
        }
        return false;

    }
    window['ADS']['addEvent'] = addEvent;
    function removeEvent(node, type, listener) {

    }
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
    function exampleLibraryMethod(obj) {
        if(!(obj=$(obj)))
            return false;
    }
    window['ADS']['exampleLibraryMethod'] = exampleLibraryMethod;

    

})();