const Header = () => {
  return (
    <header className='p-4 bg-gray-900 text-white'>
      <div className='container mx-auto flex justify-between items-center'>
        <div>Your Logo</div>
        <div className='space-x-4'>
          <button className='btn'>Button 1</button>
          <button className='btn'>Button 2</button>
          <button className='btn'>Button 3</button>
          <button className='btn'>Button 4</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
