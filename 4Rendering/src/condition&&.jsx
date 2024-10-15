const Condition = () => {
    const array = [1,2,3,4,5,6]

    return <div> {array.length > 0 && <h2>Your Items is {array.length} in your cart</h2>} </div>
}

export default Condition;