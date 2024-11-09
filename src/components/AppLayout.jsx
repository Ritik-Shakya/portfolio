import styled from "styled-components";
import Feature from "./Feature";
import Header from "./Header";
import Aboutme from "./Aboutme";

const Div = styled.div``;

const projects = [
  {
    name: "The-wild-oasis",
    type: "Employee side hotel management",
    link: "https://the-wild-oasis-lime.vercel.app",
    img: "/two.png",
    technology: {
      library: "React",
      framework: "",
      backend: "Supabase",
      router: "React Router-dom",
      style: "Styled-components",
      queryManagement: "React Query & context API",
      formManagement: "React hook form",
      other: [
        { o: "React icons" },
        { o: "React-hot-toast" },
        { o: "date-fns" },
        { o: "Re-charts" },
      ],
    },
    features: [
      { a: "Employee has to signed up by another pre-existing employee" },
      { a: "Site has booking via supabase" },
      { a: "Booking can be confirmed and checked-in or checked-out" },
      { a: "Cabins can be created or edited by an employee (cabin has photo)" },
      { a: "Settings can be changed in settings page" },
      { a: "Dashboard has statistics and of all important activity " },
      { a: "It has a dark mode" },
      {
        a: "Bookings can be edited i.e breakfast could be added or removed by employee during checking in",
      },
      { a: "Appropriate pages has filter,sorting and pagination" },
    ],
  },
  {
    name: "The-wild-oasis website",
    type: "Customer side hotel reservation site",
    link: "https://the-wild-oasis-website-silk-zeta.vercel.app",
    img: "/twow.png",
    technology: {
      library: "React",
      router: "App-Router",
      framework: "Next.js",
      style: "Tailwind css",
      backend: "Supabase",
      queryManagement: "React Query",
      formManagement: "React Hook form",
      other: [
        {
          o: "React icons",
        },
        { o: "React hot toast" },
        { o: "date-fns" },
      ],
    },
    features: [
      { a: "Users of the app are potential and actual Guests" },
      {
        a: "Guests can see all info about the cabins and already booked dates",
      },
      { a: "Appropriate pages has filter and sorting component" },
      { a: "Guests can reserve the cabin and add breakfast if they want" },
      { a: "Guest can watch his/her previous bookings" },
      { a: "Guest has to login or signup before reserving the cabin" },
      { a: "Guest can change their profile in the site" },
      { a: "It has a dark mode" },
    ],
  },
  {
    name: "React-chat-app",
    type: "Messaging app",
    link: "https://react-chat-app-lilac.vercel.app",
    img: "/rca.png",
    technology: {
      library: "React",
      framework: "",
      router: "React-router-dom",
      backend: "supabase",
      formManagement: "React-hook-form",
      style: "styled-components",
      queryManagement: "React Query",
      other: [
        {
          o: "React icons",
        },
        { o: "React hot toast" },
        { o: "date-fns" },
      ],
    },
    features: [
      { a: "User has to sign up and log in" },
      {
        a: "After logging in user has to become a friend of a website while submitting his avatar",
      },
      {
        a: "Friend can go to friends page and find a Friend he/she would like to chat with",
      },
      { a: "Friends page also has Search Bar which uses supabse side sorting" },
      { a: "upon selecting the friend the chat box opens" },
      { a: "Here the user can chat with the friend" },
      { a: "Chat message of sender and receiver are color coded " },
      { a: "Chats have time stamp on it" },
    ],
  },
];

function AppLayout() {
  return (
    <div>
      <Header />
      <Div>
        <Aboutme />
        {projects.map((project) => (
          <Feature key={project.name} project={project} />
        ))}
      </Div>
    </div>
  );
}

export default AppLayout;
