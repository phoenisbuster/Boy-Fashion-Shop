import styled from "styled-components";
import { publicRequest } from '../requestMethods'
import {useState} from 'react'
import { useHistory } from 'react-router-dom';
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.span`
  width: 100px;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Error = styled.h2`
    color: red;
`

const Register = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState(0);

  const handleClick = async () => {
    if(password == password2 && username !="" && email != "" && password != "") 
    {
      const res = await publicRequest.post('/auth/register', {
        username, email, password
      });
      console.log("THINH", res)

      if(res != null)
      {
        history.push('/');
      }
    }
  }

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
      
        <Form>
          <Input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
          <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
          <Input placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <Input placeholder="Confirm password" onChange={(e) => setPassword2(e.target.value)}/>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleClick}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;