(function(){
    function init() {
        // default shape should be a circle
        ShapeFactory.CreateShape('Ball');
        document.body.onkeyup = (e) => HandleKeyUp(e);
        document.body.onkeydown = (e) => HandleKeyDown(e);
    }

    init();
})();