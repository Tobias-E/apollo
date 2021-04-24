import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Beer } from '../queries';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { inputStorage } from './Recoil';

export const SearchForm = () => {
	const [, setUserInput] = useRecoilState(inputStorage);
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) => setUserInput(data.input);
	const [show, setShow] = useState(false);
	return (
		<>
			<h1>Search for your beer!</h1>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<input type='text' placeholder='Search' {...register('input')} />
				{errors && errors.input}
				<button
					type='submit'
					id='submit'
					onClick={() => {
						setShow(true);
					}}
				>
					Search!
				</button>
			</Form>
			<Container>{show && <Beer />}</Container>
		</>
	);
};

const Form = styled.form`
	margin: 0 0 30px 0;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
