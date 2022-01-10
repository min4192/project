//ie 11 dispatch event
(function () {
    // console.log('custom event check')
    if ( typeof window.CustomEvent === "function" ) return false;
    console.log('ie11 - custom event')

    function CustomEvent ( event, params ) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
        return evt;
    }

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
})();

function PolyfillEvent(evt) {
    var event;
    if (typeof(Event) === 'function') {
        event = new Event(evt);
    }
    else {
        event = document.createEvent('Event');
        event.initEvent(evt, true, true);
    }
    return event;
}

// //for each
// (function() {
//     if (window.NodeList && !NodeList.prototype.forEach) {
//         NodeList.prototype.forEach = Array.prototype.forEach;
//     }
// })();
