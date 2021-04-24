import { useQuery, gql } from '@apollo/client';

const BEERS = gql`
	query getBeers {
		beers {
			id
			title
			breweries {
				title
			}
			venues {
				title
				address
			}
		}
	}
`;

export const Beers = () => {
	const { loading, error, data } = useQuery(BEERS);
	if (loading) return <h3>Loading...</h3>;
	if (error) return <h3>Error </h3>;
	// console.log(data.beers);
	return (
		<div>
			<div>
				{data.beers.map(({ id, title }) => (
					<p key={id}>
						{id}: {title}
					</p>
				))}
			</div>
		</div>
	);
};
