import Top from "./components/Top";
import BottomBox from "./components/BottomBox";

function App() {
	return (
		<main className='main'>
			<Top />
			<div className='main__bottom'>
				<BottomBox />
			</div>
		</main>
	);
}

export default App;
