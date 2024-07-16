export default function TabButton(props) {
    function handleClick() {
        console.log("You clicked me!");
    }

    return <li><button onClick={handleClick}>{props.children}</button></li>
}