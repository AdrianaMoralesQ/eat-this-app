import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Show = styled.button`
	background-color: hsl(260, 100%, 80%);
	color: hsl(230, 25%, 18%);
	border-radius: 25px;
	padding: 10px;
	margin-bottom: 1rem;
	font-size: 16px;
	border: none;
	cursor: pointer;
`;

export const Table = styled.table`
	width: 30vw;
	text-align: center;
	border-color: hsl(210, 50%, 60%);
	border-style: solid;
	border-radius: 5px;
`;

export const TableHead = styled.th`
	background-color: hsl(210, 50%, 60%);
	border-color: hsl(210, 50%, 60%);
	border-style: solid;
`;

export const Card = styled.div`
	margin: 0.5rem;
	padding: 0.5rem;
`;
