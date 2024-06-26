import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='red_gradient text-center'>Prompts</span>
    </h1>
    <p className='desc text-center'>
      PromptDeck is a tool for discover, create and share creative prompts.
    </p>
    
    <Feed />
  </section>
);

export default Home;