class ShapeFactory {
    static CreateShape(shapeType) {
        const viewSpace = document.getElementById('view');
        if (shapeType === 'Ball') {
            CreateBall(viewSpace);
        } else if (shapeType === 'Block') {
            CreateBlock(viewSpace);
        }
    }
}