// TODO: create a component that displays a single clothing item
import 'bootstrap/dist/css/bootstrap.min.css';

function ClothingItem(props) {
    return (
        <div class="card" style={{ width: "18rem", marginRight: "15px" }}>
            <div class="card-header bg-transparent">{props.item.filter}</div>
            <img class="card-img-top" src={props.item.image} />
            <div class="card-body">
                <h5 class="card-title">{props.item.name}</h5>
                <p class="card-text">{props.item.description}</p>
            </div>
            <div class="card-footer" style={{ textAlign: "right" }}>
                <span class="text-muted">
                    <div style={{ float: 'left', fontWeight: "bold" }}>Price: ${props.item.price}</div>
                    <button class="btn btn-outline-danger" onClick={() => { props.addToCart(props.item) }}>Add to Cart</button>
                </span>
            </div>

        </div>


    );
}
export default ClothingItem;