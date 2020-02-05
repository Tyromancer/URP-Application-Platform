import fetch from 'isomorphic-fetch';
import Navbar from '../components/Navbar';
import { baseUrl } from '../config';

const Index = (props) => (
	<section className="place-holder">
		<Navbar />
		<h1>Hello world UAP! : )</h1>
		<ul>
			{/* assume urps is an array of json objects that has name (string) and is_active (bool)*/}
			{props.urps.map(urp => (
				<li key={urp.is_active}>
					<p>{urp.name}</p>
					<p>{urp.is_active}</p>
				</li>
			))}
		</ul>
	</section>
);


// fetch information before page renders
Index.getInitialProps = async function() {

	// fetch data from api endpoint specified in the api folder
	const res = await fetch(baseUrl + '/api/listURP');
	const data = await res.json();

	const result = {
		urps: data.map(urp => urp)
	}

	return result;
}

export default Index;
