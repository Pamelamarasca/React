
const Button = ({text = "Mudar texto", handleClick }) => {

    const style = {background: '#61dafb', color: 'white', border: 'none', fontWeight: 'bold', borderRadius: '4px', padding: '10px 20px', cursor: 'pointer'}
    
    return (
        <button onClick={() => handleClick()} style={style}>{text}</button>
    )
}
export {Button}