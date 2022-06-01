import Button from "./Button"

const Header = ({ onAdd, showAdd }) => {


  return (
    <div>
      <header className="header">
          <h1>Task Tracker</h1>
          <Button color={showAdd ? 'black' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
      </header>
    </div>
  )
}

export default Header
