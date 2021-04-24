import { useQuery, gql } from '@apollo/client';
import { useRecoilValue } from 'recoil';
import { inputStorage } from '../components/Recoil';
import styled from 'styled-components';
import logo from '../assets/logo.svg';

const BEER = gql`
	query searchBeer($item: String) {
		beers(where: { title_contains: $item }) {
			id
			title
			image {
				url
			}
		}
	}
`;

export const Beer = () => {
	const input = useRecoilValue(inputStorage);
	let skip = false;
	input === undefined ? (skip = true) : (skip = false);
	// console.log(input);
	const { loading, error, data } = useQuery(BEER, { variables: { item: input } }, { skip });
	// console.log(data);
	if (loading) return <h3>Loading...</h3>;
	if (error) return <h3>Error </h3>;
	if (data.beers.length === 0) return <h2>The beer doesn't exist in our database, sorry 😢</h2>;
	return (
		<>
			{data.beers.map(({ id, title, image }) => (
				<Container key={id}>
					<Img
						src={image.length === 0 ? logo : `http://localhost:1337${image[0].url}`}
						alt=''
					/>
					<h2>
						{id}: {title}
					</h2>
				</Container>
			))}
		</>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const Img = styled.img`
	height: 150px;
	width: 100px;
`;
