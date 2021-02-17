import './App.css';

function App() {
	return (
		<div class="topBar">
			<SearchButton/>
			<DirectoryButton/>
			<MenuButton/>
		</div>
	);
}

export default App;

function SearchButton() {
  return (
    <div className="SearchButton">
      <h1>Search</h1>
    </div>
  );
}

function DirectoryButton() {
  return (
    <div className="DirectoryButton">
      <h1>Directory</h1>
    </div>
  );
}

function MenuButton() {
  return (
    <div className="MenuButton">
      <h1>Menu</h1>
    </div>
  );
}