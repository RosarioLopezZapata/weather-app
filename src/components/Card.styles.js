import styled from 'styled-components';
import Logo from './image.jpg';

export const Wrapper = styled.div`
	padding: 15px;
	color: white;
`;

export const Name = styled.h1`
  margin-left:7rem;
`
export const Content = styled.div`
	
	justify-content: space-between;
	width: 40rem;
  height:20rem;
	background-image: url(${Logo});
	border-radius: 10px;
	`;
export const Bar = styled.div`
	
	justify-content: space-between;
	display: flex;
	align-items: center;

	max-width: 450px;
	background-image: url(${Logo});
	border-radius: 10px;
	

	@media screen and (max-width: 768px){

		display: block;
		max-height: none;
	}


`;


export const Text = styled.div`
		max-width: 300px;
	background: rgba(0,0,0,0.4);
	border-radius: 20px;
  font-size:1.5rem;
  margin-left:15rem;
`;
export const Button = styled.button`

  background: #FF4742;
  border: 1px solid #FF4742;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: flex;
  font-family: nunito,roboto,proxima-nova,"proxima nova",sans-serif;
  font-size: 1.6rem;
  font-weight: 800;
  line-height: 14px;
  min-height: 10px;
  padding: 1rem;
  margin-left:36.9rem;
  text-rendering: geometricprecision;
  user-select: none;
  touch-action: manipulation;
  vertical-align: middle;


.button-24:hover,
.button-24:active {
  background-color: initial;
  background-position: 0 0;
  color: #FF4742;
}

.button-24:active {
  opacity: .5;
}
`