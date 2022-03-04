import { ScatterPlot } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
    padding: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const Center = styled.div`
  padding: 50px;
  flex: 1;
  text-align: center;
`;

const Text = styled.h1`
  font-weight: bold;
`;
const Title = styled.h2`
  font-weight: bold;
  
  &:hover {
    Color: #282120;
  }
`;

const Author = styled.h3`
  color: #282120;
  position: absolute;
`;

const Info = styled.h4`
  
  position: absolute;
  bottom: 30%;
  
`;
const Button = styled.button`
  background-color: #4F4F4F;
  color:white;
  border:none;
  padding: 5px;
  bottom: -60%;
  font-size: 20px;
  cursor: pointer;
  position: relative;
  
`;

const Small_Container = styled.div`
    flex: 1;
    margin: 10px;
    min-width: 300px;
    height: 450px;
    display: flex;
    //align-items: center;
    //justify-content: center;
    background-color: #BBC4C2;
    position: relative;
  
  `;

  const Image_Container = styled.div`
    height: 60%;
    overflow:hidden;
    width: 200%
    flex: 1;
  `;

  const Image = styled.img`
    height: 100%;
    width: 100%;
    //z-index: 2;
    &:hover {
      transform: scale(1.2);
    }
  `;

  
  const Info_Container = styled.div`
    height: 35%;
    width: 100%
    display: flex;
    padding: 10px;
    bottom: 5%;
    position: absolute;
  `;
const blog1 = require('../images/blog1.jpeg').default
const blog2 = require('../images/blog2.jpeg').default
const blog3 = require('../images/blog3.jpeg').default

const Blog = () => {
  return (
    <Center>
      <Text>BK BLOGs</Text>
    <Container>
      <Small_Container>
        <Image_Container>
        <Image src={blog1}/>
        </Image_Container>
        
        <Info_Container>
        <Title>LOOK GOOD, EVEN DURING THE LOCKDOWN!</Title>
        <Author>By Edit Suit Co.</Author>
        <Info>"Look good, even during the lockdown! Whether for Zoom calls or your next business meeting - show you care!..."</Info>
        <Button>Read more</Button>
      </Info_Container>

      </Small_Container>
      
      <Small_Container>
        <Image_Container>
        <Image src={blog2} />
        </Image_Container>
        <Info_Container>
        <Title>15 COOL CASUAL STREET STYLE OUTFIT IDEA!</Title>
        <Author>By lifestylebyps, Oct 05, 2021</Author>
        <Info>"Casual doesn't mean sloppy. You can dress insanely attractive in simple casual outfits. And in this article..."</Info>
        <Button>Read more</Button>
      </Info_Container>
      </Small_Container>
      <Small_Container>
        <Image_Container>
        <Image src={blog3} />
        </Image_Container>
        <Info_Container>
        <Title>10 FASHION ACCESSORIES FOR TRENDY MEN</Title>
        <Author>By Trishi Dhingra, Oct 21, 2021</Author>
        <Info>"Sooner or later everybody needs help. Even our outfits! Imagine being stunning in a three-piece suit without..."</Info>
        <Button>Read more</Button>
      </Info_Container>
      </Small_Container>
      
    </Container>
    </Center>
    
  )
}




export default Blog;









// import styled from "styled-components";


// const box_container= styled.div`
//     display: grid;
//     grid-template-columns: repeat(auto-fit,minmax(30rem,1fr));
//     gap: 1.5rem;
// `;

// const Box= styled.div`
//     border:var(--border);
// `;

// const Image_container= styled.div`
//     height: 50rem;
//     overflow:hidden;
//     width: 100%
// `;


// const Image = styled.img`
//     height: 100%;
//     object-fit: cover;
//     width: 100%;    
   
// `;

// const Content= styled.div`
//     padding: 2rem;
// `;

// const Title = styled.a`
//     font-size: 2.5rem;
//     line-height: 1.5;
//     color: #fff;
//     //hover color:var(--main--color)
// `;

// const Author = styled.span`
//     color:var(--main-color);
//     display: block;
//     padding-top:1rem;
//     font-size:2rem;
// `;

// const paragraph = styled.p`
//     font-size=1.6rem;
//     line-height:1.8;
//     color:#ccc;
//     padding: 1rem 0;
// `;
// const Center = styled.div`
//   padding: 50px;
//   flex: 1;
//   text-align: center;
// `;

// const Text = styled.h1`
//   font-weight: bold;
// `;

// const Blog = () => {
//     return (
//       <Center>
//         <Text>BLOG</Text>
//       <box_container>
//         <Box>
//             <Image_container>
//             <Image src="https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
//             </Image_container>
//         {/* {popularProducts.map((item) => (
//           <Product item={item} key = {item.id}/>
//         ))} */}
               
//             <Content>
//                 <Title> Giay do</Title>
//                     <Author>
//                         st 12 sad, asd
//                     </Author>
//                     <paragraph>
//                         asidjasoiojijsa isajido sadasi 
//                     </paragraph>
//             </Content>
            
//         </Box>
//       </box_container>
//       </Center>
      
//     )
//   }

// export default Blog;